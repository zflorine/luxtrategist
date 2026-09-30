"use client";

import { Link } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const STORAGE_KEY = "fz-cookie-consent";
const CONSENT_VERSION = 1;
const CONSENT_DURATION_MS = 1000 * 60 * 60 * 24 * 183;

type ConsentChoices = {
  analytics: boolean;
  marketing: boolean;
};

type ConsentRecord = ConsentChoices & {
  version: number;
  savedAt: string;
  globalPrivacyControl: boolean;
};

type CookieConsentContextValue = {
  openSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function hasGlobalPrivacyControl() {
  if (typeof navigator === "undefined") return false;
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

function readConsent(): ConsentRecord | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const value = JSON.parse(raw) as Partial<ConsentRecord>;
    const savedAt = typeof value.savedAt === "string" ? Date.parse(value.savedAt) : Number.NaN;
    const valid =
      value.version === CONSENT_VERSION &&
      typeof value.analytics === "boolean" &&
      typeof value.marketing === "boolean" &&
      Number.isFinite(savedAt) &&
      Date.now() - savedAt < CONSENT_DURATION_MS;

    return valid ? (value as ConsentRecord) : null;
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [record, setRecord] = useState<ConsentRecord | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentChoices>({ analytics: false, marketing: false });
  const firstActionRef = useRef<HTMLButtonElement>(null);
  const gpcEnabled = ready && hasGlobalPrivacyControl();

  useEffect(() => {
    const stored = readConsent();
    setRecord(stored);
    if (stored) {
      setDraft({ analytics: stored.analytics, marketing: stored.marketing });
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && !record && !settingsOpen) firstActionRef.current?.focus();
  }, [ready, record, settingsOpen]);

  const saveConsent = useCallback(
    (choices: ConsentChoices) => {
      const next: ConsentRecord = {
        analytics: choices.analytics,
        marketing: gpcEnabled ? false : choices.marketing,
        version: CONSENT_VERSION,
        savedAt: new Date().toISOString(),
        globalPrivacyControl: gpcEnabled,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setRecord(next);
      setDraft({ analytics: next.analytics, marketing: next.marketing });
      setSettingsOpen(false);
      window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: next }));
    },
    [gpcEnabled],
  );

  const openSettings = useCallback(() => {
    const stored = readConsent();
    setDraft({
      analytics: stored?.analytics ?? false,
      marketing: gpcEnabled ? false : (stored?.marketing ?? false),
    });
    setSettingsOpen(true);
  }, [gpcEnabled]);

  const contextValue = useMemo(() => ({ openSettings }), [openSettings]);

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {ready && !record && !settingsOpen ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl border border-gold bg-white p-5 shadow-xl sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="cookie-banner-title" className="font-display text-lg text-ink">
                Cookies and analytics
              </h2>
              <p id="cookie-banner-description" className="mt-2 text-sm leading-6 text-ink/70">
                This website may use cookies or similar technologies necessary for its operation and,
                where applicable, analytics tools to understand website traffic and improve the user
                experience. <Link to="/privacy-policy" className="underline decoration-gold underline-offset-4 hover:text-turq">Privacy Policy</Link>
              </p>
            </div>
            <div className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-3">
              <Button
                ref={firstActionRef}
                type="button"
                variant="outline"
                className="h-11 border-ink bg-white px-5 text-ink hover:bg-ink hover:text-white"
                onClick={() => saveConsent({ analytics: false, marketing: false })}
              >
                Reject all
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11 border-ink bg-white px-5 text-ink hover:bg-ink hover:text-white"
                onClick={() => saveConsent({ analytics: true, marketing: true })}
              >
                Accept all
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11 border-gold bg-white px-5 text-ink hover:bg-gold hover:text-white"
                onClick={openSettings}
              >
                Manage choices
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[5px] border-gold bg-white p-0 sm:max-w-xl">
          <DialogHeader className="border-b border-ink/10 px-6 py-5 pr-14">
            <DialogTitle className="font-display text-2xl font-normal text-ink">Cookie settings</DialogTitle>
            <DialogDescription className="mt-2 leading-6 text-ink/65">
              Where required by applicable law, non-essential cookies or similar technologies will only
              be used with the appropriate consent.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-0 px-6">
            <div className="flex items-start justify-between gap-6 border-b border-ink/10 py-5">
              <div>
                <p className="font-bold text-ink">Necessary</p>
                <p className="mt-1 text-sm leading-6 text-ink/60">
                  Necessary for the website to remember your cookie choices.
                </p>
              </div>
              <span className="pt-1 text-xs font-bold uppercase text-ink/45">Always active</span>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-6 border-b border-ink/10 py-5">
              <span>
                <span className="font-bold text-ink">Analytics</span>
                <span className="mt-1 block text-sm leading-6 text-ink/60">
                  Understand website traffic and improve the user experience.
                </span>
              </span>
              <Switch
                aria-label="Analytics cookies"
                checked={draft.analytics}
                onCheckedChange={(analytics) => setDraft((current) => ({ ...current, analytics }))}
                className="mt-1 data-[state=checked]:bg-turq"
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-6 py-5">
              <span>
                <span className="font-bold text-ink">Marketing</span>
                <span className="mt-1 block text-sm leading-6 text-ink/60">
                  Marketing cookies and similar technologies.
                </span>
                {gpcEnabled ? (
                  <span className="mt-2 block text-xs font-bold text-ink/50">
                    Disabled because your browser sends a Global Privacy Control signal.
                  </span>
                ) : null}
              </span>
              <Switch
                aria-label="Marketing cookies"
                checked={draft.marketing}
                disabled={gpcEnabled}
                onCheckedChange={(marketing) => setDraft((current) => ({ ...current, marketing }))}
                className="mt-1 data-[state=checked]:bg-turq"
              />
            </label>
          </div>

          <DialogFooter className="grid grid-cols-1 gap-2 border-t border-ink/10 bg-background px-6 py-5 sm:grid-cols-3 sm:space-x-0">
            <Button
              type="button"
              variant="outline"
              className="h-11 border-ink bg-white text-ink hover:bg-ink hover:text-white"
              onClick={() => saveConsent({ analytics: false, marketing: false })}
            >
              Reject all
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 border-ink bg-white text-ink hover:bg-ink hover:text-white"
              onClick={() => saveConsent({ analytics: true, marketing: true })}
            >
              Accept all
            </Button>
            <Button
              type="button"
              className="h-11 bg-gold text-white hover:bg-ink"
              onClick={() => saveConsent(draft)}
            >
              Save choices
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return context;
}