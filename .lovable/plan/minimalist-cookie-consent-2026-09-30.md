# Minimalist cookie consent

## Goal
Add one understated consent experience across the entire site, using the existing white, ink, turquoise, and gold design. Apply the same strict opt-in choice worldwide.

## Experience
- Show a compact banner on a visitor’s first visit.
- Present **Accept all** and **Reject all** with equal prominence, plus **Manage choices**.
- Link the notice to the existing Privacy Policy.
- Open a focused preferences panel for separate **Analytics** and **Marketing** choices; both start off and remain off unless explicitly enabled.
- Keep necessary site storage always active and explain that it supports the saved preference.
- Add **Cookie settings** to the shared footer so visitors can reopen and change or withdraw consent at any time.
- Respect browser privacy signals such as Global Privacy Control by keeping non-essential choices off.

## Behaviour
- Save the visitor’s choice locally with its version and date, then ask again after six months or when the consent version changes.
- Do not load non-essential tracking before consent. The site currently contains no analytics or advertising trackers, so accepting will only record the preference and future-proof later integrations.
- Keep the banner and panel keyboard accessible, screen-reader labelled, focus-managed, and usable on mobile without covering the whole page.

## Copy
Use the existing Privacy Policy wording for the short explanation and the functional labels already agreed: **Accept all**, **Reject all**, **Manage choices**, and **Cookie settings**. No marketing copy will be introduced.

## Technical details
- Add a shared consent provider and interface at the root so every page uses the same state.
- Store only the consent record in browser storage; no personal details or server-side consent log is needed while no trackers are active.
- Use the existing shared Button and Dialog design components and existing semantic color tokens.
- Record the shared consent boundary as a project architecture rule.

## Validation
Verify first visit, acceptance, rejection, granular save, footer reopening, withdrawal, persistence, expired-choice behavior, keyboard focus, and desktop/mobile rendering. Confirm that no non-essential network requests fire before consent.
