"use client";

import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import fzLogo from "@/assets/fz-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Engagements", hash: "engagements" },
  { label: "Testimonials", hash: "testimonials" },
  { label: "Expertise", hash: "expertise" },
];

export function SiteHeader() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-[5px] bg-ink px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        Skip to content
      </a>
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

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-11 text-ink hover:bg-ink/5 md:hidden"
                aria-label="Open menu"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[82vw] max-w-sm border-l border-gold bg-white px-8 py-20"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigation</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col border-t border-ink/10" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.hash}>
                    <Link
                      to="/"
                      hash={item.hash}
                      className="border-b border-ink/10 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-turq"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/"
                    hash="request-quote"
                    className="mt-8 inline-flex h-12 items-center justify-center rounded-[5px] border border-gold px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-white"
                  >
                    Inquire
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
