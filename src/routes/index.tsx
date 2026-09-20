import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { submitQuoteRequest } from "@/lib/quote.functions";
import logoHermes from "@/assets/logo-hermes.png";
import logoMoet from "@/assets/logo-moet.png";
import logoPetitBateau from "@/assets/logo-petitbateau.png";
import florinePortrait from "@/assets/florine-portrait.jpeg.asset.json";

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

const expertiseItems = [
  { num: "01", title: "Digital & AI strategy", body: "Reviewing AI outputs, agency recommendations, and strategic deliverables." },
  { num: "02", title: "E-commerce, UX/CRO & SEO/GEO", body: "Bridging Western headquarters and market realities." },
  { num: "03", title: "China digital ecosystems & localization", body: "In-depth knowledge of the Chinese digital market." },
  { num: "04", title: "Omnichannel & customer experience", body: "The online customer journey, end to end." },
  { num: "05", title: "Strategic review of AI and agency deliverables", body: "An independent senior voice to challenge what they produce." },
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

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const submitQuote = useServerFn(submitQuoteRequest);
  const [selectedService, setSelectedService] = useState("Flash");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const requestQuote = (service: string) => {
    setSelectedService(service);
    scrollTo("request-quote");
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
    <main className="min-h-screen bg-white font-body text-ink antialiased selection:bg-turq/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <button
            type="button"
            onClick={() => scrollTo("top")}
            className="flex items-center gap-3"
          >
            <span
              className="grid size-9 place-items-center rounded-full text-[11px] font-semibold tracking-[0.15em] text-white"
              style={{ background: "#14201F" }}
            >
              SR
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Independent Strategic Review
            </span>
          </button>
          <nav className="hidden items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] md:flex">
            <button type="button" onClick={() => scrollTo("expertise")} className="text-ink/70 transition-colors hover:text-turq">
              Expertise
            </button>
            <button type="button" onClick={() => scrollTo("engagements")} className="text-ink/70 transition-colors hover:text-turq">
              Engagements
            </button>
            <button type="button" onClick={() => scrollTo("testimonials")} className="text-ink/70 transition-colors hover:text-turq">
              Testimonials
            </button>
            <button
              type="button"
              onClick={() => scrollTo("request-quote")}
              className="border border-gold px-6 py-3 text-gold transition-all hover:bg-gold hover:text-white"
            >
              Inquire
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 space-y-8 lg:order-1">
            <div className="inline-flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Independent Senior Voice
              </span>
            </div>
            <h1 className="font-display text-5xl leading-[1.1] text-ink lg:text-6xl">
              You already have the teams, agencies and AI tools.{" "}
              <span className="italic text-turq">What you may be missing</span>{" "}
              is an independent senior voice to challenge what they produce.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink/70">
              I provide independent strategic second opinions for executives in
              luxury, fashion and beauty.
            </p>
            <p className="max-w-md text-lg leading-relaxed text-ink/70">
              I review and challenge AI outputs, agency recommendations, and
              strategic deliverables, bridging the gap between Western
              headquarters and the realities of markets such as China.
            </p>
            <div className="pt-4">
              <Button
                type="button"
                onClick={() => scrollTo("engagements")}
                className="bg-ink px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-turq"
              >
                View Engagements <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <img
                src={florinePortrait.url}
                alt="Florine Zhao — Independent Strategic Review"
                loading="lazy"
                className="relative z-10 aspect-[2/3] w-44 object-cover object-top grayscale shadow-2xl sm:w-56 lg:w-64"
              />
              <span className="absolute -bottom-6 -right-6 z-0 h-full w-full translate-x-2 -translate-y-2 border border-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility & Expertise Bar */}
      <section id="expertise" className="scroll-mt-24 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid items-start gap-12 md:grid-cols-4">
            <div className="md:border-r md:border-gold/30 md:pr-8">
              <h2 className="font-display text-3xl text-ink">
                16<span className="text-gold">+</span>
              </h2>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink/40">
                Years of global e-business
              </p>
              <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-ink/60">
                Across fashion and luxury, including Louis Vuitton, Hermès, Dior,
                Moët Hennessy and Petit Bateau.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
              {expertiseItems.map((item) => (
                <div key={item.num} className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-turq">
                    {item.num}. {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-ink/55">{item.body}</p>
                </div>
              ))}
              <div className="space-y-3 md:col-span-1">
                <p className="text-sm font-semibold text-ink">
                  Fully independent. No implementation. No vendor interests.
                </p>
                <p className="text-xs leading-relaxed text-ink/55">
                  I don't create another layer of work. I help you avoid approving
                  the wrong one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section id="engagements" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl text-ink">Core Engagements</h2>
          <span className="mx-auto mt-4 block h-px w-12 bg-gold" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Flash */}
          <article className="group relative flex flex-col border border-ink/10 bg-white p-10 transition-all duration-500 hover:border-turq">
            <span className="mb-8 font-display text-4xl italic text-gold/30">01</span>
            <h3 className="font-display text-2xl text-ink">Flash</h3>
            <p className="mt-2 font-display text-3xl text-gold">$3,000</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              For a high-stakes decision or deliverable requiring fast senior
              judgment.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/75">
              {flashBullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-turq" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              onClick={() => requestQuote("Flash")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-ink py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-all hover:bg-ink hover:text-white"
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
          </article>

          {/* Advisory (featured) */}
          <article className="group relative flex flex-col border border-ink bg-ink p-10 text-white shadow-2xl">
            <span className="mb-8 font-display text-4xl italic text-white/10">02</span>
            <h3 className="font-display text-2xl">Advisory</h3>
            <p className="mt-2 font-display text-3xl text-gold">
              $3,200 <span className="text-lg text-white/50">/month</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Your independent strategic second opinion, on a reserved basis.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {advisoryBullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-white/15 pt-5">
              <p className="text-xs leading-relaxed text-white/55">
                Does not include: implementation, project management, recurring
                team meetings, or production work.
              </p>
              <p className="text-xs leading-relaxed text-gold">
                (Up to 8 hours/month of reserved senior advisory capacity)
              </p>
            </div>
            <Button
              type="button"
              onClick={() => requestQuote("Advisory")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-gold py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-ink"
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
          </article>

          {/* Partner */}
          <article className="group relative flex flex-col border border-ink/10 bg-white p-10 transition-all duration-500 hover:border-turq">
            <span className="mb-8 font-display text-4xl italic text-gold/30">03</span>
            <h3 className="font-display text-2xl text-ink">Partner</h3>
            <p className="mt-2 font-display text-3xl text-gold">
              $11,000 <span className="text-lg text-ink/50">/month</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Your external strategic quality gate.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/75">
              {partnerBullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-ink/10 pt-5">
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
              className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-ink py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-all hover:bg-ink hover:text-white"
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
          </article>
        </div>

        {/* additional work */}
        <div className="mt-6 flex flex-col gap-4 border-y border-ink/10 px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl text-ink">Additional work</p>
            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-ink/70">
              Work outside the scope or reserved capacity of an engagement is
              billed at $500/hour, subject to availability. Complex or extensive
              reviews are scoped separately.
            </p>
          </div>
          <span className="font-display shrink-0 text-4xl text-gold">
            $500<span className="text-lg text-ink/50">/hour</span>
          </span>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl text-ink">Testimonials</h2>
          <span className="mx-auto mt-4 block h-px w-12 bg-gold" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col border border-ink/10 bg-white p-10 shadow-[0_20px_50px_-30px_rgba(20,32,31,0.35)]"
            >
              <blockquote className="flex-1">
                <p className="font-display text-lg italic leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                <span
                  className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-ink/10 ${
                    t.company === "Petit Bateau"
                      ? "size-24"
                      : t.company === "Hermès"
                        ? "size-20"
                        : "size-14"
                  }`}
                >
                  <img
                    src={t.logo}
                    alt={`${t.company} logo`}
                    loading="lazy"
                    width={1152}
                    height={576}
                    className={`h-full w-full object-contain grayscale ${
                      t.company === "Petit Bateau"
                        ? "p-1 opacity-100"
                        : t.company === "Hermès"
                          ? "p-1.5 opacity-95"
                          : "p-1.5 opacity-90"
                    }`}
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
      </section>

      {/* Quote Form */}
      <section id="request-quote" className="scroll-mt-24 bg-ink py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                  Request a quote
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl">
                Share the decision, deliverable, or strategic question you need
                reviewed.
              </h2>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-white/60">
                I review and challenge AI outputs, agency recommendations, and
                strategic deliverables.
              </p>
              <div className="mt-10 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Fully independent
                </p>
                <p className="font-display text-xl">No implementation. No vendor interests.</p>
              </div>
            </div>

            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Work email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Company <span className="font-normal text-white/30">(optional)</span>
                  </label>
                  <input
                    name="company"
                    maxLength={150}
                    autoComplete="organization"
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-gold"
                  >
                    <option className="bg-ink text-white">Flash</option>
                    <option className="bg-ink text-white">Advisory</option>
                    <option className="bg-ink text-white">Partner</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  What would you like reviewed?
                </label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-gold"
                />
              </div>
              <label className="sr-only" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-gold px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-ink disabled:opacity-60"
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
                  {status === "error" && (
                    <p className="text-destructive">{errorMessage}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-10">
          <span className="font-display text-xl font-bold">Independent Strategic Review</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
            Fully independent. No implementation. No vendor interests.
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
            © 2026 Independent Strategic Review
          </span>
        </div>
      </footer>
    </main>
  );
}
