import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 md:flex-row lg:px-10">
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
          <Link
            to="/accessibility"
            className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-turq"
          >
            Accessibility
          </Link>
          <Link
            to="/legal-notice"
            className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-turq"
          >
            Legal Notice
          </Link>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
            © 2026 Florine ZHAO
          </span>
        </div>
      </div>
    </footer>
  );
}
