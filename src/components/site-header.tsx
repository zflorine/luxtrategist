import { Link } from "@tanstack/react-router";

import fzLogo from "@/assets/fz-logo.png.asset.json";

const navItems = [
  { label: "Expertise", hash: "expertise" },
  { label: "Engagements", hash: "engagements" },
  { label: "Testimonials", hash: "testimonials" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center">
          <img
            src={fzLogo.url}
            alt="FZ"
            className="size-9 rounded-none object-contain ring-1 ring-gold"
          />
        </Link>
        <nav className="hidden items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="text-ink/70 transition-colors hover:text-turq"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="request-quote"
            className="rounded-[5px] border border-gold px-6 py-3 text-gold transition-all hover:bg-gold hover:text-white"
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
