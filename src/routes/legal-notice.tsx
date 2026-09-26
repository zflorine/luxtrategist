import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({
    meta: [
      { title: "Legal Notice — Independent Strategic Review" },
      {
        name: "description",
        content:
          "Legal notice for Florine ZHAO — Independent Strategic Review. Publisher details and website information.",
      },
      { property: "og:title", content: "Legal Notice — Independent Strategic Review" },
      {
        property: "og:description",
        content:
          "Legal notice for Florine ZHAO — Independent Strategic Review. Publisher details and website information.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/legal-notice" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/legal-notice" }],
  }),
  component: LegalNoticePage,
});

function LegalNoticePage() {
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
          Legal Notice
        </h1>
        <span className="mt-4 block h-px w-12 bg-gold" />

        <div className="mt-16 space-y-14">
          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">1</span>
              <h2 className="font-display text-2xl text-ink">Publisher</h2>
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
              <h2 className="font-display text-2xl text-ink">Activities</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                I provide independent strategic reviews for premium and luxury
                brands navigating global growth and market localization,
                challenging AI outputs, agency recommendations, and strategic
                deliverables to ensure digital strategies meet the highest
                standards.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">3</span>
              <h2 className="font-display text-2xl text-ink">Personal data</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                The way personal information is collected, used and protected on
                this website is described in the{" "}
                <Link
                  to="/privacy-policy"
                  className="text-turq underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
