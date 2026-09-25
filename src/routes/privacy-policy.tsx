import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Independent Strategic Review" },
      {
        name: "description",
        content:
          "Privacy Policy for Florine ZHAO — Independent Strategic Review. How personal information is collected, used and protected.",
      },
      { property: "og:title", content: "Privacy Policy — Independent Strategic Review" },
      {
        property: "og:description",
        content:
          "Privacy Policy for Florine ZHAO — Independent Strategic Review. How personal information is collected, used and protected.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    n: "1",
    title: "Who I am",
    body: (
      <div className="space-y-1">
        <p>Florine ZHAO</p>
        <p>188 rue Gerhard</p>
        <p>92800 Puteaux</p>
        <p>France</p>
        <p className="pt-2">Email: zhao.partners [at] gmail [dot] com</p>
        <p className="pt-3 text-ink/60">
          For privacy-related requests, please use the contact details above.
        </p>
      </div>
    ),
  },
  {
    n: "2",
    title: "Information I collect",
    body: (
      <div className="space-y-4">
        <p>
          I may collect information that you voluntarily provide when you
          contact me, request information, or discuss potential professional
          services.
        </p>
        <p>This may include:</p>
        <ul className="ml-6 space-y-1.5">
          <li>Your name</li>
          <li>Professional email address</li>
          <li>Company and job title</li>
          <li>Information contained in your message or inquiry</li>
          <li>
            Information you voluntarily provide about a project, business need,
            or potential engagement
          </li>
          <li>
            Any documents or other materials you voluntarily send to me
          </li>
        </ul>
        <p>
          This website may also automatically collect limited technical
          information, such as IP address, browser type, device type, operating
          system, referring pages, and general information about how visitors
          use the website, depending on the analytics and hosting services
          used on the website.
        </p>
        <p>I do not intentionally collect sensitive personal information through this website.</p>
      </div>
    ),
  },
  {
    n: "3",
    title: "How I use your information",
    body: (
      <div className="space-y-4">
        <p>I may use personal information to:</p>
        <ul className="ml-6 space-y-1.5">
          <li>Respond to inquiries and requests</li>
          <li>Assess whether my services may be relevant to your needs</li>
          <li>Communicate with prospective or existing clients</li>
          <li>Prepare, discuss, and provide professional services</li>
          <li>Maintain business and professional records</li>
          <li>Improve the website and understand its use</li>
          <li>Protect the security and integrity of the website</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
        <p>
          I do not use information submitted through a professional inquiry to
          make automated decisions about you.
        </p>
      </div>
    ),
  },
  {
    n: "4",
    title: "Confidential business information",
    body: (
      <div className="space-y-4">
        <p>
          If you voluntarily provide business documents, strategies,
          presentations, AI outputs, agency recommendations, or other
          confidential materials for the purpose of discussing a potential
          engagement, I will treat such information as confidential and use it
          only for the purposes for which it was provided, subject to any
          separate confidentiality agreement or professional services agreement
          that may apply.
        </p>
        <p>
          Please do not send highly sensitive information through the website
          contact form unless specifically requested and an appropriate secure
          method of transfer has been agreed.
        </p>
      </div>
    ),
  },
  {
    n: "5",
    title: "Cookies and analytics",
    body: (
      <div className="space-y-4">
        <p>
          This website may use cookies or similar technologies necessary for
          its operation and, where applicable, analytics tools to understand
          website traffic and improve the user experience.
        </p>
        <p>
          The specific cookies and third-party services used may change as the
          website evolves.
        </p>
        <p>
          Where required by applicable law, non-essential cookies or similar
          technologies will only be used with the appropriate consent.
        </p>
      </div>
    ),
  },
  {
    n: "6",
    title: "Third-party services",
    body: (
      <div className="space-y-4">
        <p>
          I may use third-party service providers to operate the website,
          communicate with prospective clients, host content, analyse website
          traffic, or securely store information.
        </p>
        <p>
          Depending on the tools used on the website, these providers may
          process personal information on my behalf.
        </p>
        <p>I do not sell your personal information.</p>
        <p>
          I do not provide personal information submitted through this website
          to third parties for their own direct marketing purposes.
        </p>
      </div>
    ),
  },
  {
    n: "7",
    title: "Data retention",
    body: (
      <div className="space-y-4">
        <p>
          I retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy,
          including responding to inquiries, maintaining business records,
          providing services, resolving disputes, and complying with legal
          obligations.
        </p>
        <p>
          Retention periods may vary depending on the nature of the information
          and the reason it was collected.
        </p>
      </div>
    ),
  },
  {
    n: "8",
    title: "Data security",
    body: (
      <div className="space-y-4">
        <p>
          I take reasonable administrative, technical, and organisational
          measures to protect personal information against unauthorized access,
          loss, misuse, alteration, or disclosure.
        </p>
        <p>
          However, no method of transmission or storage over the Internet can be
          guaranteed to be completely secure.
        </p>
      </div>
    ),
  },
  {
    n: "9",
    title: "Your privacy rights",
    body: (
      <div className="space-y-4">
        <p>
          Depending on where you live and the laws applicable to you, you may
          have rights regarding your personal information, including the right
          to:
        </p>
        <ul className="ml-6 space-y-1.5">
          <li>Request access to personal information I hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of personal information, subject to applicable exceptions</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>
            Request information about how your personal information is
            collected, used, or disclosed
          </li>
        </ul>
        <p>
          California residents and residents of certain other U.S. states may
          have additional rights under applicable state privacy laws.
        </p>
        <p>
          For example, where applicable, California residents may have rights
          to know, correct, delete, and opt out of certain forms of sale or
          sharing of personal information. California law also requires covered
          businesses to provide appropriate mechanisms for exercising
          applicable rights.
        </p>
        <p>
          To exercise an applicable privacy right, please contact me using the
          information below. I may need to verify your identity before
          fulfilling certain requests.
        </p>
      </div>
    ),
  },
  {
    n: "10",
    title: "California and other U.S. state privacy laws",
    body: (
      <div className="space-y-4">
        <p>
          This website is operated from France and is primarily intended to
          provide professional information and services to businesses and
          executives.
        </p>
        <p>
          Certain U.S. state privacy laws apply only to businesses meeting
          specific jurisdictional and threshold requirements. For example, the
          California Consumer Privacy Act applies to qualifying for-profit
          businesses that do business in California and meet specified
          thresholds.
        </p>
        <p>
          If a particular U.S. state privacy law applies to my processing of
          your personal information, I will provide the rights and disclosures
          required by that law.
        </p>
        <p>I do not sell personal information for monetary consideration.</p>
      </div>
    ),
  },
  {
    n: "11",
    title: "Children's privacy",
    body: (
      <div className="space-y-4">
        <p>
          This website is intended for business and professional audiences and
          is not directed to children under the age of 13.
        </p>
        <p>
          I do not knowingly collect personal information from children under 13
          through this website.
        </p>
      </div>
    ),
  },
  {
    n: "12",
    title: "International data transfers",
    body: (
      <div className="space-y-4">
        <p>
          Because I am based in France and may use service providers located in
          other countries, personal information may be processed or transferred
          internationally.
        </p>
        <p>
          Where applicable, I use appropriate safeguards for international
          transfers of personal information as required by applicable data
          protection law.
        </p>
        <p>
          For transfers of personal data subject to EU data protection law to
          countries outside the European Economic Area, appropriate mechanisms
          such as Standard Contractual Clauses may be used where required.
        </p>
      </div>
    ),
  },
  {
    n: "13",
    title: "Changes to this Privacy Policy",
    body: (
      <div className="space-y-4">
        <p>
          I may update this Privacy Policy from time to time to reflect changes
          in my website, services, technology, or applicable legal
          requirements.
        </p>
        <p>
          The updated version will be posted on this page with a revised
          &ldquo;Last updated&rdquo; date.
        </p>
      </div>
    ),
  },
  {
    n: "14",
    title: "Contact",
    body: (
      <div className="space-y-1">
        <p>
          If you have questions about this Privacy Policy or wish to exercise an
          applicable privacy right, please contact:
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

function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <span className="mt-4 block h-px w-12 bg-gold" />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-ink/50">
          Last updated: September 2026
        </p>

        <p className="mt-10 text-base leading-relaxed text-ink/75">
          Florine ZHAO (&ldquo;I&rdquo;, &ldquo;me&rdquo;, &ldquo;my&rdquo; or
          &ldquo;I provide&rdquo;) respects your privacy and is committed to
          protecting the personal information you provide when visiting this
          website or contacting me about my professional services.
        </p>
        <p className="mt-6 text-base leading-relaxed text-ink/75">
          This Privacy Policy explains what information I may collect, how I use
          it, and the choices available to you.
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 md:flex-row lg:px-10">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-turq"
            >
              Fully independent. No implementation. No vendor interests.
            </Link>
            <Link
              to="/terms-of-use"
              className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-turq"
            >
              Terms of Use
            </Link>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
              © 2026 Florine ZHAO
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
