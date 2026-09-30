import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/components/cookie-consent";

export function SiteFooter() {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 md:flex-row lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
          <Button
            type="button"
            variant="link"
            className="h-auto p-0 text-[10px] font-normal uppercase tracking-[0.3em] text-ink/40 hover:text-turq"
            onClick={openSettings}
          >
            Cookie settings
          </Button>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
            © 2026 Florine ZHAO
          </span>
        </div>
      </div>
    </footer>
  );
}
