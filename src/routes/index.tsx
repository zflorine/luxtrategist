import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <div className="relative min-h-screen overflow-hidden bg-white font-body text-ink antialiased">
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
                  <p className="text-sm text-ink/80">
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
            </article>

            {/* Advisory (featured) */}
            <article
              className="relative flex flex-col rounded-3xl p-px"
              style={{ background: "linear-gradient(150deg,#0FA7A0,#C6A15A)" }}
            >
              <div className="glass flex flex-1 flex-col rounded-[23px] p-7">
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
              </div>
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
    </div>
  );
}
