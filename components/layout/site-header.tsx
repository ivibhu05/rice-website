"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/data/nav";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-gold-400">
            <Wheat className="h-4.5 w-4.5" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg leading-tight text-navy-950">
            {company.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide text-navy-800/80 transition-colors hover:text-navy-950",
                  active && "text-navy-950 underline decoration-gold-500 decoration-2 underline-offset-8"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="bg-navy-900 text-sand-50 hover:bg-navy-800"
          >
            Request a Quote
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-sand-50">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-navy-950">
                {company.shortName}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-navy-900 hover:bg-sand-200"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                render={
                  <Link href="/contact" onClick={() => setOpen(false)} />
                }
                nativeButton={false}
                className="mt-3 bg-navy-900 text-sand-50 hover:bg-navy-800"
              >
                Request a Quote
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
