import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const quoteSchema = z.object({
  service: z.enum(["Flash", "Advisory", "Partner"]),
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  company: z.string().trim().max(150).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more about what you need reviewed.")
    .max(2000),
  website: z.string().max(0),
});

const recentSubmissions = new Map<string, number>();

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input) => quoteSchema.parse(input))
  .handler(async ({ data }) => {
    const forwardedFor = getRequestHeader("x-forwarded-for") ?? "unknown";
    const clientId = forwardedFor.split(",")[0]?.trim() ?? "unknown";
    const now = Date.now();
    const lastSubmittedAt = recentSubmissions.get(clientId) ?? 0;

    if (now - lastSubmittedAt < 30_000) {
      throw new Error("Please wait a moment before sending another request.");
    }

    recentSubmissions.set(clientId, now);

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({
      service: data.service,
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    });

    if (error) {
      recentSubmissions.delete(clientId);
      console.error("Quote request could not be saved:", error.message);
      throw new Error("Your request could not be sent. Please try again.");
    }

    return { success: true };
  });