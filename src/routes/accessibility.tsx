import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/accessibility")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Accessibility — Independent Strategic Review" },
      {
        name: "description",
        content:
          "Accessibility statement for Florine ZHAO — Independent Strategic Review. Our approach, known limitations, and how to report an accessibility barrier.",
      },
      { property: "og:title", content: "Accessibility — Independent Strategic Review" },
      {
        property: "og:description",
        content:
          "Accessibility statement for Florine ZHAO — Independent Strategic Review. Our approach, known limitations, and how to report an accessibility barrier.",
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

      <article id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16 outline-none lg:px-10 lg:py-24">
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
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-ink/50">
          Last updated: September 2026
        </p>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-ink/75">
          <p>
            Florine ZHAO is committed to making this website accessible and
            usable by as many people as possible, including people with
            disabilities.
          </p>
          <p>
            We aim to provide a clear, accessible and consistent online
            experience and to progressively improve the accessibility of this
            website.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">1</span>
              <h2 className="font-display text-2xl text-ink">Our approach</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                We seek to follow recognized accessibility principles and, where
                appropriate, the Web Content Accessibility Guidelines (WCAG)
                developed by the World Wide Web Consortium (W3C).
              </p>
              <p className="mt-5">
                Accessibility is considered across areas such as:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "clear and structured content;",
                  "readable typography and sufficient contrast;",
                  "keyboard navigation;",
                  "meaningful headings and page structure;",
                  "alternative text for relevant images;",
                  "accessible forms and interactive elements;",
                  "compatibility with commonly used assistive technologies.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-px w-3 shrink-0 bg-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                Because accessibility is an ongoing process, some parts of the
                website may not yet fully meet all applicable accessibility
                standards.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">2</span>
              <h2 className="font-display text-2xl text-ink">
                Known limitations
              </h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                We are continuously working to identify and address potential
                accessibility barriers.
              </p>
              <p className="mt-5">
                Where third-party tools, embedded content or external services
                are used, their accessibility may depend on the provider and may
                be outside our direct control.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">3</span>
              <h2 className="font-display text-2xl text-ink">Feedback</h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                If you encounter an accessibility barrier or have difficulty
                accessing any content or functionality on this website, please
                contact us.
              </p>
              <p className="mt-5">
                Email: zhao.partners [at] gmail [dot] com
              </p>
              <p className="mt-5">
                When contacting us, it is helpful to indicate:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "the page or feature concerned;",
                  "the nature of the difficulty;",
                  "the assistive technology or browser being used, if relevant.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-px w-3 shrink-0 bg-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                We will review accessibility-related requests and seek to
                provide an appropriate alternative or assistance where
                reasonably possible.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">4</span>
              <h2 className="font-display text-2xl text-ink">
                Ongoing improvement
              </h2>
            </div>
            <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
              <p>
                Accessibility is not a one-time process. We intend to review and
                improve the accessibility of this website as it evolves,
                including when new content, features or third-party services are
                introduced.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl italic text-gold/40">5</span>
              <h2 className="font-display text-2xl text-ink">Contact</h2>
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
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
