import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsentProvider } from "@/components/cookie-consent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          Independent Strategic Review
        </p>
        <h1 className="mt-6 font-display text-7xl text-ink">404</h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        <h2 className="mt-6 font-display text-xl text-ink">Page not found</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-[5px] border border-gold px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const reportedError = error instanceof Error ? error : new Error(String(error));
  console.error(reportedError);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(reportedError, { boundary: "tanstack_root_error_component" });
  }, [reportedError]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          Independent Strategic Review
        </p>
        <h1 className="mt-6 font-display text-2xl text-ink">
          This page didn't load
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        <p className="mt-6 text-sm leading-relaxed text-ink/60">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-12 items-center justify-center rounded-[5px] bg-ink px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-ink/85"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-[5px] border border-gold px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-white"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Independent Strategic Review" },
      {
        name: "description",
        content:
          "Independent strategic second opinions for executives in luxury, fashion and beauty.",
      },
      { name: "author", content: "Independent Strategic Review" },
      {
        property: "og:title",
        content: "Independent Strategic Review",
      },
      {
        property: "og:description",
        content:
          "Independent strategic second opinions for executives in luxury, fashion and beauty.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Independent Strategic Review" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CookieConsentProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </CookieConsentProvider>
    </QueryClientProvider>
  );
}
