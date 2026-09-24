import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import fzLogo from "@/assets/fz-logo.png.asset.json";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Independent Strategic Review" },
      {
        name: "description",
        content:
          "Terms of Use for Florine ZHAO — Independent Strategic Review. The terms governing access to and use of this website.",
      },
      { property: "og:title", content: "Terms of Use — Independent Strategic Review" },
      {
        property: "og:description",
        content:
          "Terms of Use for Florine ZHAO — Independent Strategic Review. The terms governing access to and use of this website.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms-of-use" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: TermsOfUsePage,
});

const sections = [
  {
    n: "1",
    title: "Website owner",
    body: (
      <div className="space-y-1">
        <p>Florine ZHAO</p>
        <p>188 rue Gerhard</p>
        <p>92800 Puteaux</p>
        <p>France</p>
        <p className="pt-2">Email: zhao.partners [at] gmail [dot] com</p>
        <p className="pt-3 text-ink/60">
          This website provides information about independent strategic review
          and advisory services for premium and luxury brands.
        </p>
      </div>
    ),
  },
  {
    n: "2",
    title: "Purpose of the website",
    body: (
      <div className="space-y-4">
        <p>
          This website is provided for informational and professional purposes.
        </p>
        <p>
          It describes my experience, areas of expertise, approach, and
          professional services, including independent reviews of:
        </p>
        <ul className="ml-6 space-y-1.5">
          <li>AI outputs and AI-generated recommendations</li>
          <li>Agency and consultancy recommendations</li>
          <li>Digital and e-commerce strategies</li>
          <li>Strategic deliverables</li>
          <li>International and market-localization strategies</li>
          <li>Digital transformation initiatives</li>
          <li>China-related digital and market strategies</li>
        </ul>
        <p>
          The information on this website is not intended to constitute legal,
          financial, accounting, investment, medical, or other regulated
          professional advice.
        </p>
      </div>
    ),
  },
  {
    n: "3",
    title: "No professional engagement through website use",
    body: (
      <div className="space-y-4">
        <p>
          Accessing this website, submitting an inquiry, or communicating
          through the website does not by itself create a consulting, advisory,
          fiduciary, agency, partnership, employment, or other professional
          relationship between you and Florine ZHAO.
        </p>
        <p>
          Professional services are provided only under a separate written
          agreement setting out the applicable scope, fees, confidentiality
          obligations, deliverables, responsibilities, and other terms.
        </p>
      </div>
    ),
  },
  {
    n: "4",
    title: "Independent strategic review",
    body: (
      <div className="space-y-4">
        <p>
          My services are designed to provide an independent senior perspective
          on information, recommendations, strategies, and other materials
          submitted for review.
        </p>
        <p>
          A strategic review may identify assumptions, inconsistencies, risks,
          blind spots, opportunities, or areas requiring further consideration.
        </p>
        <p>
          However, a review does not constitute a guarantee that a strategy,
          recommendation, agency deliverable, AI output, business decision,
          market entry, or other initiative will achieve a particular result.
        </p>
        <p>Final business decisions remain the responsibility of the client.</p>
      </div>
    ),
  },
  {
    n: "5",
    title: "No guarantee of results",
    body: (
      <div className="space-y-4">
        <p>
          Business, digital, e-commerce, AI, market-entry, and international
          strategies involve factors that may be outside my control.
        </p>
        <p>Accordingly, I do not guarantee:</p>
        <ul className="ml-6 space-y-1.5">
          <li>revenue or profitability;</li>
          <li>conversion or traffic performance;</li>
          <li>market-entry success;</li>
          <li>customer acquisition or retention;</li>
          <li>return on investment;</li>
          <li>effectiveness of AI tools or technologies;</li>
          <li>
            performance of agencies, vendors, technology providers, or other
            third parties;
          </li>
          <li>
            regulatory or legal compliance of a client's business or strategy.
          </li>
        </ul>
        <p>
          Any examples, results, case studies, testimonials, or statements
          regarding past experience are provided for illustrative purposes and
          should not be interpreted as a guarantee of future results.
        </p>
      </div>
    ),
  },
  {
    n: "6",
    title: "Website content",
    body: (
      <div className="space-y-4">
        <p>
          I make reasonable efforts to ensure that the information presented on
          this website is accurate and current.
        </p>
        <p>
          However, the website may contain errors, omissions, outdated
          information, or content that changes over time.
        </p>
        <p>
          I reserve the right to modify, update, suspend, or discontinue any
          part of the website at any time without notice.
        </p>
      </div>
    ),
  },
  {
    n: "7",
    title: "AI-generated information",
    body: (
      <div className="space-y-4">
        <p>
          Some content, tools, or materials referenced on this website may
          involve artificial intelligence technologies.
        </p>
        <p>
          AI-generated information can contain errors, omissions,
          inaccuracies, or misleading conclusions.
        </p>
        <p>
          The existence of an AI-related service on this website does not imply
          that AI-generated information is inherently accurate, complete, or
          suitable for a particular business decision.
        </p>
        <p>
          My independent review services are specifically intended to provide
          human judgment and critical assessment; they do not constitute a
          guarantee of the accuracy of any AI system or output.
        </p>
      </div>
    ),
  },
  {
    n: "8",
    title: "Intellectual property",
    body: (
      <div className="space-y-4">
        <p>
          Unless otherwise indicated, the content of this
          website—including text, graphics, logos, visual elements, original
          frameworks, methodologies, and other materials—is owned by or
          licensed to Florine ZHAO and is protected by applicable intellectual
          property laws.
        </p>
        <p>You may view and use the website for your personal or internal business purposes.</p>
        <p>
          You may not reproduce, republish, distribute, modify, commercially
          exploit, or create derivative works from website content without
          prior written permission.
        </p>
        <p>Nothing in these Terms transfers any intellectual property rights to you.</p>
        <p>
          Any intellectual property rights relating to professional
          deliverables provided under a separate client engagement will be
          governed by the applicable professional services agreement.
        </p>
      </div>
    ),
  },
  {
    n: "9",
    title: "Confidentiality",
    body: (
      <div className="space-y-4">
        <p>
          The website may allow you to contact me regarding potential projects
          or professional services.
        </p>
        <p>
          Please do not submit highly confidential or sensitive business
          information through an unsecured contact form unless specifically
          requested or an appropriate secure method of transmission has been
          agreed.
        </p>
        <p>
          Any confidentiality obligations relating to client information or
          professional engagements will be governed by the applicable
          confidentiality agreement or professional services agreement.
        </p>
        <p>
          For information about personal data collected through this website,
          please refer to the{" "}
          <Link
            to="/privacy-policy"
            className="text-turq underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-ink"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    n: "10",
    title: "Third-party websites and services",
    body: (
      <div className="space-y-4">
        <p>
          This website may contain links to third-party websites, platforms, or
          services.
        </p>
        <p>These links are provided for convenience and informational purposes only.</p>
        <p>
          I do not control and am not responsible for the content,
          availability, security, privacy practices, or terms of third-party
          websites or services.
        </p>
        <p>
          Your use of third-party services is subject to their own terms and
          policies.
        </p>
      </div>
    ),
  },
  {
    n: "11",
    title: "Testimonials and client references",
    body: (
      <div className="space-y-4">
        <p>
          Testimonials and professional references displayed on this website
          reflect the experiences and opinions of the individuals providing
          them.
        </p>
        <p>
          They relate to professional work performed in the relevant context
          and do not constitute a guarantee of future results or performance.
        </p>
        <p>
          Testimonials are presented honestly and are not intended to imply that
          every client will experience identical results.
        </p>
      </div>
    ),
  },
  {
    n: "12",
    title: "Prohibited use",
    body: (
      <div className="space-y-4">
        <p>You agree not to use this website:</p>
        <ul className="ml-6 space-y-1.5">
          <li>for any unlawful purpose;</li>
          <li>to interfere with the operation or security of the website;</li>
          <li>to attempt unauthorized access to the website or its systems;</li>
          <li>to introduce malicious code, malware, or other harmful material;</li>
          <li>to reproduce or commercially exploit website content without authorization;</li>
          <li>to misrepresent your identity or affiliation when contacting me.</li>
        </ul>
      </div>
    ),
  },
  {
    n: "13",
    title: "Limitation of liability",
    body: (
      <div className="space-y-4">
        <p>
          To the maximum extent permitted by applicable law, Florine ZHAO shall
          not be liable for indirect, incidental, consequential, special, or
          punitive damages arising from or relating to your use of this website
          or reliance on information presented on it.
        </p>
        <p>
          This includes, without limitation, loss of profits, revenue, business
          opportunities, data, or anticipated savings.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability where such
          exclusion or limitation is prohibited by applicable law.
        </p>
        <p>
          Any limitation of liability relating to professional services will be
          governed by the applicable client agreement.
        </p>
      </div>
    ),
  },
  {
    n: "14",
    title: "Availability and security",
    body: (
      <div className="space-y-4">
        <p>
          I do not guarantee that the website will always be available,
          uninterrupted, error-free, or free from viruses or other harmful
          components.
        </p>
        <p>
          You are responsible for maintaining appropriate security measures on
          your own devices and systems when accessing the website.
        </p>
      </div>
    ),
  },
  {
    n: "15",
    title: "Governing law",
    body: (
      <div className="space-y-4">
        <p>
          These Terms are governed by the laws applicable in France, without
          regard to conflict-of-law principles.
        </p>
        <p>
          Any dispute relating to the use of this website shall be subject to
          the jurisdiction of the competent courts in France, unless mandatory
          applicable law provides otherwise.
        </p>
        <p>
          Professional services provided to clients may be subject to different
          contractual terms, including governing-law and jurisdiction
          provisions, as expressly agreed in the applicable professional
          services agreement.
        </p>
      </div>
    ),
  },
  {
    n: "16",
    title: "Changes to these Terms",
    body: (
      <div className="space-y-4">
        <p>
          I may update these Terms from time to time to reflect changes to the
          website, my services, or applicable legal requirements.
        </p>
        <p>
          The updated version will be posted on this page with a revised
          &ldquo;Last updated&rdquo; date.
        </p>
        <p>
          Your continued use of the website after an update constitutes
          acceptance of the revised Terms, to the extent permitted by applicable
          law.
        </p>
      </div>
    ),
  },
  {
    n: "17",
    title: "Contact",
    body: (
      <div className="space-y-1">
        <p>
          If you have any questions regarding these Terms of Use, please
          contact:
        </p>
        <div className="pt-2 space-y-1">
          <p>Florine ZHAO</p>
          <p>188 rue Gerhard</p>
          <p>92800 Puteaux</p>
          <p>France</p>
          <p className="pt-2">Email: zhao.partners [at] gmail [dot] com</p>
        </div>
      </div>
    ),
  },
];

function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white font-body text-ink antialiased selection:bg-turq/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={fzLogo.url} alt="FZ" className="size-9 object-contain" />
            <span className="font-display text-lg font-bold tracking-tight">
              Independent Strategic Review
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-[5px] border border-gold px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-white"
          >
            Back to site
          </Link>
        </div>
      </header>

      {/* Page */}
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-turq"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          Back to home
        </Link>

        <h1 className="mt-8 font-display text-4xl text-ink lg:text-5xl">
          Terms of Use
        </h1>
        <span className="mt-4 block h-px w-12 bg-gold" />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-ink/50">
          Last updated: September 2026
        </p>

        <p className="mt-10 text-base leading-relaxed text-ink/75">
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use
          of this website operated by Florine ZHAO, an independent strategic
          advisor based in France.
        </p>
        <p className="mt-6 text-base leading-relaxed text-ink/75">
          By accessing or using this website, you agree to these Terms. If you do
          not agree with them, please do not use the website.
        </p>

        <div className="mt-16 space-y-14">
          {sections.map((s) => (
            <section key={s.n} className="scroll-mt-24">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl italic text-gold/40">
                  {s.n}
                </span>
                <h2 className="font-display text-2xl text-ink">{s.title}</h2>
              </div>
              <div className="mt-5 border-l border-gold/30 pl-6 text-[15px] leading-relaxed text-ink/75">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-10">
          <span className="flex items-center gap-3">
            <img src={fzLogo.url} alt="FZ" className="size-10 object-contain" />
            <span className="font-display text-xl font-bold">
              Independent Strategic Review
            </span>
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-turq"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-turq"
            >
              Terms of Use
            </Link>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
              © 2026 Independent Strategic Review
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
