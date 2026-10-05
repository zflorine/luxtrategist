import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { submitQuoteRequest } from "@/lib/quote.functions";
import logoHermes from "@/assets/logo-hermes.png";
import logoMoet from "@/assets/logo-moet.png";
import logoPetitBateau from "@/assets/logo-petitbateau.png";
import florinePortrait from "@/assets/florine-portrait.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Independent Strategic Review — Luxury & Beauty Digital Strategy Advisory",
      },
      {
        name: "description",
        content:
          "Independent strategic reviews for premium and luxury brands navigating global growth and market localization. Challenging AI outputs, agency recommendations and strategic deliverables. 16 years of e-business experience across Louis Vuitton, Hermès, Dior, Moët Hennessy and Petit Bateau.",
      },
      {
        name: "keywords",
        content:
          "strategic second opinion, digital strategy, AI strategy, luxury e-commerce, executive advisory, market localization, China digital strategy, brand premiumization, omnichannel strategy, conversion rate optimization",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "FR" },
      { name: "geo.placename", content: "Puteaux, France" },
      {
        property: "og:title",
        content:
          "Independent Strategic Review — Luxury & Beauty Digital Strategy Advisory",
      },
      {
        property: "og:description",
        content:
          "Independent strategic reviews for premium and luxury brands navigating global growth and market localization. Challenging AI outputs, agency recommendations and strategic deliverables.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content:
          "https://id-preview--c51a0626-aac5-452e-a12d-3956d493b138.lovable.app/og-image.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:image",
        content:
          "https://id-preview--c51a0626-aac5-452e-a12d-3956d493b138.lovable.app/og-image.jpg",
      },
      {
        name: "twitter:title",
        content: "Independent Strategic Review — Luxury & Beauty Advisory",
      },
      {
        name: "twitter:description",
        content:
          "Independent strategic reviews for premium and luxury brands navigating global growth and market localization.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "/#business",
              name: "Independent Strategic Review",
              description:
                "Independent strategic reviews for premium and luxury brands navigating global growth and market localization, challenging AI outputs, agency recommendations, and strategic deliverables.",
              url: "/",
              founder: { "@id": "/#person" },
              areaServed: "Worldwide",
              address: {
                "@type": "PostalAddress",
                streetAddress: "188 rue Gerhard",
                postalCode: "92800",
                addressLocality: "Puteaux",
                addressCountry: "FR",
              },
              email: "zhao.partners@gmail.com",
              knowsAbout: [
                "Digital Strategy",
                "AI Strategy",
                "Luxury E-commerce",
                "Market Localization",
                "China Digital Strategy",
                "Brand Premiumization",
                "Omnichannel Strategy",
                "Conversion Rate Optimization",
                "Executive Advisory",
              ],
            },
            {
              "@type": "Person",
              "@id": "/#person",
              name: "Florine ZHAO",
              jobTitle: "Independent Strategic Advisor",
              description:
                "16 years of e-business experience across fashion and luxury, including Louis Vuitton, Hermès, Dior, Moët Hennessy and Petit Bateau.",
              worksFor: { "@id": "/#business" },
              nationality: "French",
            },
            {
              "@type": "WebSite",
              "@id": "/#website",
              url: "/",
              name: "Independent Strategic Review",
              publisher: { "@id": "/#business" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
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
  "Target turnaround: 48 hours for standard-scope reviews",
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

const cloudKeywords: {
  label: string;
  size: string;
  color: string;
  italic?: boolean;
}[] = [
  { label: "Brand Premiumization", size: "text-2xl", color: "text-gold" },
  { label: "Strategic Second Opinion", size: "text-xl", color: "text-ink/45" },
  { label: "Digital Strategy", size: "text-xl", color: "text-turq" },
  { label: "AI Strategy", size: "text-xl", color: "text-turq" },
  { label: "Luxury E-commerce", size: "text-xl", color: "text-gold" },
  { label: "Global Growth", size: "text-lg", color: "text-ink" },
  { label: "AI Output Review", size: "text-lg", color: "text-turq" },
  { label: "Executive Advisory", size: "text-xl", color: "text-ink/45" },
  { label: "China Digital Strategy", size: "text-xl", color: "text-turq" },
  { label: "Market Localization", size: "text-base", color: "text-ink" },
  { label: "International Expansion", size: "text-base", color: "text-ink" },
  { label: "Omnichannel Strategy", size: "text-lg", color: "text-ink" },
  { label: "Customer Experience", size: "text-lg", color: "text-ink" },
  { label: "UI / UX", size: "text-base", color: "text-ink" },
  { label: "Digital Branding", size: "text-base", color: "text-gold" },
  { label: "Conversion Rate Optimization (CRO)", size: "text-base", color: "text-ink" },
  { label: "SEO / GEO", size: "text-xl", color: "text-ink" },
  { label: "E-merchandising", size: "text-base", color: "text-ink" },
  { label: "E-marketing", size: "text-base", color: "text-ink" },
  { label: "Digital Performance", size: "text-lg", color: "text-turq" },
  { label: "Social Media", size: "text-base", color: "text-ink" },
  { label: "CRM", size: "text-base", color: "text-ink" },
  { label: "E-commerce Strategy", size: "text-lg", color: "text-turq" },
  { label: "Website Redesign", size: "text-xl", color: "text-ink" },
  { label: "Generative AI", size: "text-lg", color: "text-turq" },
  { label: "Decision Support", size: "text-base", color: "text-ink/45" },
  { label: "International Markets", size: "text-base", color: "text-ink" },
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
      <SiteHeader />

      {/* Hero */}
      <section id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-6 py-16 outline-none lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Independent Strategic Review
              </span>
            </div>
            <h1 className="mt-6 font-display text-[1.5rem] leading-[1.3] text-ink sm:text-2xl lg:text-[2.1rem] lg:leading-[1.25]">
              You already have the teams, agencies and AI tools.{" "}
              <span className="italic text-turq">What you may be missing</span>{" "}
              is an independent senior voice to challenge what they produce.
            </h1>
            <div className="mt-8">
              <p className="text-base leading-relaxed text-ink/70">
                I provide independent strategic reviews for premium and luxury
                brands navigating global growth and market localization,
                challenging AI outputs, agency recommendations, and strategic
                deliverables to ensure digital strategies meet the highest
                standards.
              </p>
              <p className="mt-6 font-bold text-ink">
                Fully independent. No implementation. No vendor interests.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button
                type="button"
                onClick={() => scrollTo("engagements")}
                className="bg-ink px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-turq"
              >
                View Engagements <ArrowRight aria-hidden="true" />
              </Button>
              <button
                type="button"
                onClick={() => scrollTo("request-quote")}
                className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60 underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-turq"
              >
                Request a quote
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="relative shrink-0">
                <img
                  src={florinePortrait.url}
                  alt="Florine Zhao — Independent Strategic Review"
                  loading="lazy"
                  className="relative z-10 aspect-[2/3] w-32 object-cover object-top grayscale shadow-xl sm:w-40 lg:w-44"
                />
                <span className="absolute -bottom-4 -right-4 z-0 h-full w-full border border-gold" />
              </div>
              <div className="border-l border-gold/40 pl-6">
                <p className="font-display text-3xl text-ink">
                  16<span className="text-gold">+</span>
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink/40">
                  Years of global e-business
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">
                  Across fashion and luxury, including Louis Vuitton, Hermès,
                  Dior, Moët Hennessy and Petit Bateau.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Expertise — word cloud */}
      <section id="expertise" className="scroll-mt-24 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-10 lg:pt-24">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl text-ink">Senior Expertise</h2>
            <span className="mx-auto mt-4 block h-px w-12 bg-gold" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center font-display">
            {cloudKeywords.map((kw, i) => (
              <span
                key={i}
                className={[
                  "leading-tight transition-colors",
                  kw.size,
                  kw.color,
                  kw.italic ? "italic" : "",
                ].join(" ")}
              >
                {kw.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section id="engagements" className="scroll-mt-24 mx-auto max-w-7xl px-6 pt-16 pb-0 lg:px-10 lg:pt-24 lg:pb-0">
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
              For a high-stakes decision requiring fast senior judgment.
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
              variant="outline"
              onClick={() => requestQuote("Flash")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[5px] border border-ink bg-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-all hover:bg-ink hover:text-white"
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
          </article>

          {/* Advisory (featured) */}
          <article className="group relative flex flex-col border border-ink bg-ink p-10 text-white shadow-2xl">
            <span className="mb-8 font-display text-4xl italic text-white/10">02</span>
            <h3 className="font-display text-2xl">Advisory</h3>
            <p className="mt-2 font-display text-3xl text-gold">
              $3,200+ <span className="text-lg text-white/50">/month</span>
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
              $11,000+ <span className="text-lg text-ink/50">/month</span>
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
            <Button
              type="button"
              variant="outline"
              onClick={() => requestQuote("Partner")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[5px] border border-ink bg-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-all hover:bg-ink hover:text-white"
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
          </article>
        </div>

        {/* additional work */}
        <div className="mt-6 border-b border-ink/10 px-8 py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
              Additional work
            </p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-ink/55 sm:whitespace-nowrap">
              Work outside the scope or reserved capacity of an engagement is
              billed at $500/hour, subject to availability. Complex or extensive
              reviews are scoped separately.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-24 mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-10 lg:pt-24 lg:pb-24">
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
                <p className="font-display text-[15px] italic leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-ink/10">
                  <img
                    src={t.logo}
                    alt={`${t.company} logo`}
                    loading="lazy"
                    width={56}
                    height={56}
                    className={`h-full w-full object-contain grayscale ${
                      t.company === "Petit Bateau"
                        ? "p-0 opacity-100"
                        : t.company === "Hermès"
                          ? "p-0.5 opacity-95"
                          : "p-1 opacity-90"
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
      <section id="request-quote" className="scroll-mt-24 bg-ink pt-16 pb-24 text-white lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                  Complete the form.
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl leading-[1.2] lg:text-5xl">
                Request a quote
              </h2>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
                I’ll review it personally and get back to you within 48 business
                hours.
              </p>

              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">
                  What you can expect:
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Personal review — no intermediary",
                    "Honest assessment of fit before commitment",
                    "Confidentiality by design",
                    "Clear, fixed scope",
                    "Independent findings",
                    "No implementation, no vendor interests",
                    "No unnecessary process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-3 h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                      <span className="text-[15px] leading-relaxed text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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

      <SiteFooter />
    </main>
  );
}
