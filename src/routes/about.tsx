import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LinkedInLink } from "@/components/linkedin-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import florinePortrait from "@/assets/florine-portrait.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About — Independent Strategic Review" },
      {
        name: "description",
        content:
          "Florine ZHAO — independent strategic reviews for premium and luxury brands. 16 years of e-business experience across Louis Vuitton, Hermès, Dior, Moët Hennessy and Petit Bateau. Fully independent. No implementation. No vendor interests.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        property: "og:title",
        content: "About — Independent Strategic Review",
      },
      {
        property: "og:description",
        content:
          "16 years of e-business experience across Louis Vuitton, Hermès, Dior, Moët Hennessy and Petit Bateau. Fully independent. No implementation. No vendor interests.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About — Independent Strategic Review",
      },
      {
        name: "twitter:description",
        content:
          "Independent strategic reviews for premium and luxury brands navigating global growth and market localization.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "/about#person",
          name: "Florine ZHAO",
          jobTitle: "Independent Strategic Advisor",
          description:
            "16 years of e-business experience across fashion and luxury, including Louis Vuitton, Hermès, Dior, Moët Hennessy and Petit Bateau.",
          url: "/about",
          nationality: "French",
          sameAs: "https://www.linkedin.com/in/zflorine/",
        }),
      },
    ],
  }),
  component: AboutPage,
});

const expectations = [
  "Personal review — no intermediary",
  "Honest assessment of fit before commitment",
  "Strict confidentiality",
  "Clear, fixed scope",
  "Independent findings",
  "No implementation, no vendor interests",
  "No unnecessary process",
];

const formats = [
  {
    name: "Flash",
    description:
      "For a high-stakes decision requiring fast senior judgment.",
  },
  {
    name: "Advisory",
    description:
      "Your independent strategic second opinion, on a reserved basis.",
  },
  {
    name: "Partner",
    description: "Your external strategic quality gate.",
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-body text-ink antialiased selection:bg-turq/20">
      <SiteHeader />

      <section
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-7xl px-6 py-16 outline-none lg:px-10 lg:py-24"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Independent Strategic Review
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1.15] text-ink lg:text-5xl">
              About
            </h1>
            <span className="mt-6 block h-px w-12 bg-gold" />
            <p className="mt-8 font-display text-xl leading-[1.4] text-ink lg:text-[1.6rem]">
              You already have the teams, agencies and AI tools.{" "}
              <span className="italic text-turq">What you may be missing</span>{" "}
              is an independent senior voice to challenge what they produce.
            </p>
            <p className="mt-8 text-base leading-relaxed text-ink/70">
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

          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="relative shrink-0">
                <img
                  src={florinePortrait.url}
                  alt="Florine Zhao — Independent Strategic Review"
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
                <LinkedInLink className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="border-t border-ink/10" />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-10 lg:pt-24 lg:pb-24">
        <p className="text-xs font-bold uppercase tracking-widest text-gold">
          What you can expect:
        </p>
        <ul className="mt-8 grid gap-x-12 gap-y-3 sm:grid-cols-2">
          {expectations.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                className="mt-3 h-px w-4 shrink-0 bg-gold"
                aria-hidden="true"
              />
              <span className="text-[15px] leading-relaxed text-ink/75">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div aria-hidden="true" className="border-t border-ink/10" />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-10 lg:pt-24 lg:pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {formats.map((format) => (
            <article
              key={format.name}
              className="border border-ink/10 bg-white p-10"
            >
              <h2 className="font-display text-2xl text-gold">{format.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                {format.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link to="/" hash="request-quote">
            <Button
              type="button"
              className="bg-ink px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-turq"
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
          </Link>
          <Link
            to="/"
            hash="engagements"
            className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60 underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-turq"
          >
            View Engagements
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
