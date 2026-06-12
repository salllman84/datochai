'use client';

import Link from 'next/link';
import { ArrowUp, ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LinkedinIcon, TelegramIcon, XIcon } from '@/components/ui/brand-icons';
import {
  EXPERTS,
  FOOTER_LEGAL_LINKS,
  FOOTER_QUICK_LINKS,
  MARKETS,
  SITE,
} from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="container-custom pb-10">
        <div className="glass-card overflow-hidden p-0">
          {/* Top grid */}
          <div className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:p-10">
            {/* Column 1: Brand + E-E-A-T roster */}
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-forest-900 to-forest-700 text-sm font-bold text-gold-300">
                  DC
                </span>
                <span className="leading-tight">
                  <span className="block font-poppins text-lg font-bold text-foreground">{SITE.name}</span>
                  <span className="block text-xs text-muted-foreground">{SITE.tagline}</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">{SITE.valueProp}</p>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                  Pasukan Pakar
                </p>
                <ul className="space-y-1.5">
                  {EXPERTS.map((e) => (
                    <li key={e.name} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-900/10 text-[10px] font-bold text-forest-700 dark:text-forest-300">
                        {e.initials}
                      </span>
                      {e.short}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <FooterColumn title="Pautan Utama" links={FOOTER_QUICK_LINKS} />
            <FooterColumn
              title="Semua Ramalan 4D"
              links={MARKETS.map((mk) => ({ href: `/${mk.slug}`, label: mk.name }))}
            />
            <FooterColumn title="Perundangan" links={FOOTER_LEGAL_LINKS} />
          </div>

          {/* Utility bar */}
          <div className="flex flex-col items-center gap-4 border-t border-border/60 px-8 py-5 sm:flex-row sm:justify-between lg:px-10">
            <p className="text-sm text-muted-foreground">© 2026 DatoChai. Hak cipta terpelihara.</p>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${SITE.email}`}
                aria-label="E-mel"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/50 text-muted-foreground transition hover:border-gold-500 hover:text-foreground dark:bg-white/5"
              >
                <Mail className="h-4 w-4" />
              </a>
              {[XIcon, LinkedinIcon, TelegramIcon].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={['X', 'LinkedIn', 'Telegram'][i]}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/50 text-muted-foreground transition hover:border-gold-500 hover:text-foreground dark:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
              <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
              <ThemeToggle />
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-gold-500 hover:text-foreground sm:inline-flex"
            >
              <ArrowUp className="h-4 w-4" /> Kembali ke Atas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between lg:pointer-events-none"
        aria-expanded={open}
      >
        <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h3>
        <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform lg:hidden', open && 'rotate-180')} />
      </button>
      <ul className={cn('mt-3 space-y-2.5', open ? 'block' : 'hidden', 'lg:block')}>
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-forest-700 dark:hover:text-forest-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
