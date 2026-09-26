import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Independent Strategic Review" },
      {
        name: "description",
        content:
          "Accessibility statement for Florine ZHAO — Independent Strategic Review. How to report an accessibility barrier on this website.",
      },
      { property: "og:title", content: "Accessibility — Independent Strategic Review" },
      {
        property: "og:description",
        content:
          "Accessibility statement for Florine ZHAO — Independent Strategic Review. How to report an accessibility barrier on this website.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/accessibility" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white font-body text-ink antialiased selection:bg-turq/20">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-turq"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          Back to home
        </Link>

        <h1 className="mt-8 font-display text-4xl text-ink lg:text-5xl">
          Accessibility
        </h1>
        <span className="mt-4 block h-px w-12 bg-gold" />

        <div className="mt-16 space-y-14">
          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">1</span>
              <h2 className="font-display text-2xl text-ink">Who I am</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <div className="space-y-1">
                <p>Florine ZHAO</p>
                <p>188 rue Gerhard</p>
                <p>92800 Puteaux</p>
                <p>France</p>
                <p className="pt-2">Email: zhao.partners [at] gmail [dot] com</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">2</span>
              <h2 className="font-display text-2xl text-ink">
                Accessibility feedback
              </h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                If you have difficulty accessing any part of this website,
                please contact me using the details above and I will respond as
                soon as possible.
              </p>
            </div>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
