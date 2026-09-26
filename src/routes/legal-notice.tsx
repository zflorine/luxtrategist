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
          "Legal notice for Florine ZHAO — Independent Strategic Review. Website publisher, business information, hosting, intellectual property and applicable law.",
      },
      { property: "og:title", content: "Legal Notice — Independent Strategic Review" },
      {
        property: "og:description",
        content:
          "Legal notice for Florine ZHAO — Independent Strategic Review. Website publisher, business information, hosting, intellectual property and applicable law.",
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
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-ink/50">
          Last updated: September 2026
        </p>

        <div className="mt-16 space-y-14">
          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">1</span>
              <h2 className="font-display text-2xl text-ink">
                Website publisher
              </h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>This website is operated and published by:</p>
              <div className="mt-4 space-y-1">
                <p>Florine ZHAO</p>
                <p>188 rue Gerhard</p>
                <p>92800 Puteaux</p>
                <p>France</p>
                <p className="pt-2">Email: zhao.partners [at] gmail [dot] com</p>
              </div>
              <p className="mt-5">
                The website is operated by an independent consultant providing
                strategic advisory and review services to international
                businesses.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">2</span>
              <h2 className="font-display text-2xl text-ink">
                Business information
              </h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <div className="space-y-1">
                <p>Legal status: Entrepreneur individuel</p>
                <p>SIRET: 527 890 677 00034</p>
                <p>SIREN: 527 890 677</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">3</span>
              <h2 className="font-display text-2xl text-ink">Hosting</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <div className="space-y-1">
                <p>Host: Lovable Labs Incorporated</p>
                <p>Service: Lovable / Lovable Cloud</p>
                <p>Website: lovable.dev</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">4</span>
              <h2 className="font-display text-2xl text-ink">Website purpose</h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                This website provides information about Florine ZHAO's
                professional activities and independent strategic review and
                advisory services.
              </p>
              <p>
                The website is intended primarily for professional and business
                users.
              </p>
              <p>
                Information presented on the website is provided for general
                informational purposes and does not constitute a professional
                engagement, business recommendation, legal advice, financial
                advice or guarantee of any particular outcome.
              </p>
              <p>
                Any professional services are provided under a separate written
                agreement setting out the applicable scope, fees,
                responsibilities and terms.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">5</span>
              <h2 className="font-display text-2xl text-ink">
                Intellectual property
              </h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                Unless otherwise stated, the content of this website, including
                text, graphics, visual elements, branding, original materials
                and structure, is protected by applicable intellectual property
                laws.
              </p>
              <p>
                No content may be reproduced, distributed, modified, republished
                or commercially exploited without prior written authorization,
                except where permitted by applicable law.
              </p>
              <p>
                Third-party trademarks and company names mentioned on this
                website remain the property of their respective owners.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">6</span>
              <h2 className="font-display text-2xl text-ink">
                Accuracy of information
              </h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                Reasonable efforts are made to keep the information on this
                website accurate and up to date. However, no representation or
                warranty is made that all information is complete, current or
                error-free.
              </p>
              <p>
                Professional experience, client references, testimonials and
                examples presented on the website are provided for informational
                purposes and should not be interpreted as a guarantee of future
                results.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">7</span>
              <h2 className="font-display text-2xl text-ink">
                External websites and services
              </h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                This website may contain links to third-party websites or
                services.
              </p>
              <p>
                These links are provided for convenience and do not imply
                endorsement or responsibility for the content, security,
                availability or privacy practices of those third parties.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">8</span>
              <h2 className="font-display text-2xl text-ink">Personal data</h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                Personal data submitted through this website is processed in
                accordance with the{" "}
                <Link
                  to="/privacy-policy"
                  className="text-turq underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                For information about the categories of data collected, purposes
                of processing, retention, rights and third-party service
                providers, please refer to the{" "}
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

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">9</span>
              <h2 className="font-display text-2xl text-ink">
                Cookies and similar technologies
              </h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                This website may use cookies or similar technologies depending
                on the services and tools implemented.
              </p>
              <p>
                Where required by applicable law, non-essential cookies and
                similar technologies will only be used following the appropriate
                consent.
              </p>
              <p>
                Further information is provided in the{" "}
                <Link
                  to="/privacy-policy"
                  className="text-turq underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and, where applicable, the website's cookie settings.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">
                10
              </span>
              <h2 className="font-display text-2xl text-ink">
                Website availability
              </h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                Reasonable efforts are made to maintain website availability and
                security. However, continuous availability cannot be guaranteed.
              </p>
              <p>
                The website may occasionally be unavailable due to maintenance,
                technical issues, hosting failures or circumstances beyond the
                publisher's reasonable control.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">
                11
              </span>
              <h2 className="font-display text-2xl text-ink">Contact</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>For any question concerning this website or its content:</p>
              <div className="mt-4 space-y-1">
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
              <span className="font-display text-2xl italic text-gold/40">
                12
              </span>
              <h2 className="font-display text-2xl text-ink">
                Applicable law
              </h2>
            </div>
            <div className="mt-5 space-y-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                Unless otherwise required by mandatory applicable law, these
                Legal Notice provisions are governed by French law.
              </p>
              <p>
                Any professional services provided by Florine ZHAO are subject
                to the terms of the applicable written professional services
                agreement, which may contain separate provisions concerning
                governing law and jurisdiction.
              </p>
            </div>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
