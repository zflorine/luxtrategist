import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { submitQuoteRequest } from "@/lib/quote.functions";
import logoHermes from "@/assets/logo-hermes.png";
import logoMoet from "@/assets/logo-moet.png";
import logoPetitBateau from "@/assets/logo-petitbateau.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Independent Strategic Review — Luxury & Beauty Advisory",
      },
      {
        name: "description",
        content:
          "Independent strategic second opinions for executives in luxury, fashion and beauty. Reviewing AI outputs, agency recommendations and strategic deliverables.",
      },
      {
        property: "og:title",
        content: "Independent Strategic Review",
      },
      {
        property: "og:description",
        content:
          "Independent strategic second opinions for executives in luxury, fashion and beauty. Reviewing AI outputs, agency recommendations and strategic deliverables.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const flashBullets = [
  "1 deliverable, recommendation, or proposal reviewed",
  "Critical, evidence-based analysis",
  "Identification of errors, blind spots, inconsistencies, and risks",
  "Challenge of assumptions and recommendations",
  "Clear verdict: validate / challenge / revise",
  "Corrective recommendations",
  "1 debrief call",
  "Target turnaround: 48 hours for standard-scope reviews. Complex or extensive materials are scoped separately.",
];

const advisoryBullets = [
  "Monthly review of key AI, agency, and vendor outputs",
  "Strategic challenge and written recommendations",
  "Async access via Slack/email, with requests acknowledged within 1–2 business days. Review timelines are agreed based on scope and complexity",
  "One strategic call per month",
  "3-month initial engagement, auto-renews monthly",
];

const partnerBullets = [
  "Ongoing review of key AI, agency, and vendor outputs",
  "Strategic challenge and written recommendations",
  "Priority async access, with requests acknowledged within 1 business day. Review timelines are agreed based on scope and complexity.",
  "Up to 2 strategic calls per month",
  "Participation in selected high-stakes meetings",
  "3-month initial engagement, auto-renews monthly",
];

const testimonials = [
  {
    name: "HELENE PERSONNIC",
    role: "International E-commerce Director",
    company: "Hermès",
    logo: logoHermes,
    quote:
      "Florine contributed to the launch of our hermes.cn website in China. I valued her in-depth knowledge of the Chinese digital market, her precision, her high standards, her discretion, and her overall flair for e-commerce and the online customer journey. She is a real pleasure to work with.",
  },
  {
    name: "SEBASTIEN BELLECOURT",
    role: "Digital Manager",
    company: "Hermès",
    logo: logoHermes,
    quote:
      "Florine has strong knowledge of e-commerce best-practices, UX and of course Chinese market. She has the ability to handle complex projects effortlessly. Florine earns my highest recommendation.",
  },
  {
    name: "BRICE DIEULOT",
    role: "e-Business Commercial Director",
    company: "Moët Hennessy",
    logo: logoMoet,
    quote:
      "Florine is rigorous, technically minded and curious. She carried out every task I entrusted to her with diligence and enthusiasm, and brought a great deal to the team - many thanks to her!",
  },
  {
    name: "CHRISTEL HENNION",
    role: "Marketing & Digital Director",
    company: "Petit Bateau",
    logo: logoPetitBateau,
    quote:
      "Throughout her time with us, Florine ZHAO demonstrated rigour, autonomy, versatility and excellent time and project management skills.",
  },
];

function Bullet({
  children,
  accent = "bg-turq",
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <li className="flex gap-2.5">
      <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${accent}`} />
      <span>{children}</span>
    </li>
  );
}

function Index() {
  const submitQuote = useServerFn(submitQuoteRequest);
  const [selectedService, setSelectedService] = useState("Flash");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const requestQuote = (service: string) => {
    setSelectedService(service);
    document.getElementById("request-quote")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitQuote({
        data: {
          service: selectedService as "Flash" | "Advisory" | "Partner",
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          company: String(formData.get("company") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
        },
      });
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Your request could not be sent.");
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-body text-ink antialiased">
      {/* decorative background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg,#fff 0%,#eef8f7 42%,#f5f0e3 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-16 -left-16 size-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(15,167,160,0.4),transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-40 -right-24 size-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(198,161,90,0.38),transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 size-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(15,167,160,0.16),transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        {/* header */}
        <header className="flex items-center justify-between py-9">
          <div className="flex items-center gap-3">
            <span
              className="grid size-9 place-items-center rounded-full text-[11px] font-semibold tracking-[0.15em] text-white"
              style={{ background: "#14201F" }}
            >
              SR
            </span>
            <span className="font-display text-lg tracking-tight">
              Independent Strategic Review
            </span>
          </div>
        </header>

        {/* hero */}
        <section className="pt-8 pb-16 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl">
                You already have the teams, agencies and AI tools.{" "}
                <span className="italic text-turq">
                  What you may be missing
                </span>{" "}
                is an independent senior voice to challenge what they produce.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70">
                I provide independent strategic second opinions for executives
                in luxury, fashion and beauty.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
                I review and challenge AI outputs, agency recommendations, and
                strategic deliverables, bridging the gap between Western
                headquarters and the realities of markets such as China.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="glass card-shadow rounded-3xl p-7">
                <p className="font-display text-2xl leading-tight text-ink">
                  16 years of global e-business experience across fashion and
                  luxury, including Louis Vuitton, Hermès, Dior, Moët Hennessy
                  and Petit Bateau.
                </p>
                <div className="mt-6 space-y-3 border-t border-white/60 pt-6">
                  <p className="text-sm font-semibold text-ink">
                    My areas of expertise include:
                  </p>
                  <ul className="space-y-2 text-sm text-ink/80">
                    <li className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-turq" />
                      <span>Digital & AI strategy</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-turq" />
                      <span>E-commerce, UX/CRO & SEO/GEO</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-turq" />
                      <span>China digital ecosystems & localization</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-turq" />
                      <span>Omnichannel & customer experience</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-turq" />
                      <span>
                        Strategic review of AI and agency deliverables
                      </span>
                    </li>
                  </ul>
                  <p className="pt-2 text-sm text-ink/80">
                    Fully independent. No implementation. No vendor interests.
                  </p>
                  <p className="text-sm text-ink/80">
                    I don't create another layer of work. I help you avoid
                    approving the wrong one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* engagements */}
        <section className="pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Flash */}
            <article className="glass card-shadow flex flex-col rounded-3xl p-7">
              <p className="font-display text-3xl text-ink">Flash</p>
              <p className="mt-1 font-display text-3xl text-gold">$3,000</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                For a high-stakes decision or deliverable requiring fast senior
                judgment.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink/80">
                {flashBullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
              <Button
                type="button"
                onClick={() => requestQuote("Flash")}
                className="mt-auto min-h-11 w-full bg-ink pt-3 text-background hover:bg-ink/90"
              >
                Request a quote <ArrowRight aria-hidden="true" />
              </Button>
            </article>

            {/* Advisory (featured) */}
            <article className="glass card-shadow flex flex-col rounded-3xl border border-turq/35 p-7">
                <p className="font-display text-3xl text-ink">Advisory</p>
                <p className="mt-1 font-display text-3xl text-gold">
                  $3,200
                  <span className="text-lg text-ink/50">/month</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  Your independent strategic second opinion, on a reserved basis.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-ink/80">
                  {advisoryBullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>
                <div className="mt-6 space-y-2 border-t border-white/60 pt-5">
                  <p className="text-xs leading-relaxed text-ink/55">
                    Does not include: implementation, project management,
                    recurring team meetings, or production work.
                  </p>
                  <p className="text-xs leading-relaxed text-gold">
                    (Up to 8 hours/month of reserved senior advisory capacity)
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => requestQuote("Advisory")}
                  className="mt-auto min-h-11 w-full bg-turq pt-3 text-background hover:bg-turq/90"
                >
                  Request a quote <ArrowRight aria-hidden="true" />
                </Button>
            </article>

            {/* Partner */}
            <article className="glass card-shadow flex flex-col rounded-3xl p-7">
              <p className="font-display text-3xl text-ink">Partner</p>
              <p className="mt-1 font-display text-3xl text-gold">
                $11,000
                <span className="text-lg text-ink/50">/month</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Your external strategic quality gate.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink/80">
                {partnerBullets.map((b) => (
                  <Bullet key={b} accent="bg-gold">
                    {b}
                  </Bullet>
                ))}
              </ul>
              <div className="mt-6 space-y-2 border-t border-white/60 pt-5">
                <p className="text-xs leading-relaxed text-ink/55">
                  Not a fractional CMO, project manager, or implementation lead.
                </p>
                <p className="text-xs leading-relaxed text-gold">
                  (Up to 28 hours/month of reserved senior advisory capacity)
                </p>
              </div>
              <Button
                type="button"
                onClick={() => requestQuote("Partner")}
                className="mt-auto min-h-11 w-full bg-ink pt-3 text-background hover:bg-ink/90"
              >
                Request a quote <ArrowRight aria-hidden="true" />
              </Button>
          </article>
          </div>

          {/* additional work */}
          <div className="glass-soft mt-6 flex flex-col gap-3 rounded-2xl px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl text-ink">Additional work</p>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-ink/80">
                Work outside the scope or reserved capacity of an engagement is
                billed at $500/hour, subject to availability. Complex or
                extensive reviews are scoped separately.
              </p>
            </div>
            <span className="font-display shrink-0 text-4xl text-gold">
              $500
              <span className="text-lg text-ink/50">/hour</span>
            </span>
          </div>
        </section>

        {/* testimonials */}
        <section className="pb-24 pt-4">
          <div className="border-t border-ink/15 pt-14">
            <h2 className="font-display text-4xl text-ink sm:text-5xl">
              Testimonials
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="glass card-shadow flex flex-col rounded-3xl p-7"
                >
                  <blockquote className="flex-1">
                    <p className="font-display text-lg leading-relaxed text-ink/85">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-white/60 pt-5">
                    <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-white/70 ring-1 ring-ink/10">
                      <img
                        src={t.logo}
                        alt={`${t.company} logo`}
                        loading="lazy"
                        width={1152}
                        height={576}
                        className="h-10 w-10 object-contain opacity-80 grayscale"
                      />
                    </span>
                    <div>
                      <p className="font-display text-base tracking-wide text-ink">
                        {t.name}
                      </p>
                      <p className="mt-1 text-sm text-ink/65">
                        {t.role} <span className="text-gold">·</span> {t.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="request-quote" className="scroll-mt-8 pb-24 pt-4">
          <div className="grid gap-10 border-t border-ink/15 pt-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl text-ink sm:text-5xl">Request a quote</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
                Share the decision, deliverable, or strategic question you need reviewed.
              </p>
            </div>

            <form className="space-y-5 lg:col-span-7" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-ink">
                  Name
                  <input
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="mt-2 min-h-12 w-full rounded-lg border border-ink/20 bg-background px-4 font-normal text-ink outline-none transition focus:border-turq focus:ring-2 focus:ring-turq/20"
                  />
                </label>
                <label className="text-sm font-semibold text-ink">
                  Work email
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                    className="mt-2 min-h-12 w-full rounded-lg border border-ink/20 bg-background px-4 font-normal text-ink outline-none transition focus:border-turq focus:ring-2 focus:ring-turq/20"
                  />
                </label>
                <label className="text-sm font-semibold text-ink">
                  Company <span className="font-normal text-ink/60">(optional)</span>
                  <input
                    name="company"
                    maxLength={150}
                    autoComplete="organization"
                    className="mt-2 min-h-12 w-full rounded-lg border border-ink/20 bg-background px-4 font-normal text-ink outline-none transition focus:border-turq focus:ring-2 focus:ring-turq/20"
                  />
                </label>
                <label className="text-sm font-semibold text-ink">
                  Service
                  <select
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    className="mt-2 min-h-12 w-full rounded-lg border border-ink/20 bg-background px-4 font-normal text-ink outline-none transition focus:border-turq focus:ring-2 focus:ring-turq/20"
                  >
                    <option>Flash</option>
                    <option>Advisory</option>
                    <option>Partner</option>
                  </select>
                </label>
              </div>
              <label className="block text-sm font-semibold text-ink">
                What would you like reviewed?
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  className="mt-2 w-full resize-y rounded-lg border border-ink/20 bg-background px-4 py-3 font-normal text-ink outline-none transition focus:border-turq focus:ring-2 focus:ring-turq/20"
                />
              </label>
              <label className="sr-only" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="min-h-12 bg-ink px-7 text-background hover:bg-ink/90"
                >
                  {status === "submitting" ? "Sending…" : "Send request"}
                  {status !== "submitting" && <ArrowRight aria-hidden="true" />}
                </Button>
                <div aria-live="polite" className="text-sm">
                  {status === "success" && (
                    <p className="flex items-center gap-2 font-semibold text-turq">
                      <CheckCircle2 aria-hidden="true" className="size-5" />
                      Your request has been received.
                    </p>
                  )}
                  {status === "error" && <p className="text-destructive">{errorMessage}</p>}
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 pb-10">
        <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-base text-ink">
            Independent Strategic Review
          </span>
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/40">
            Fully independent. No implementation. No vendor interests.
          </span>
        </div>
      </footer>
    </main>
  );
}
