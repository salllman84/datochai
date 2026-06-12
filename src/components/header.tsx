'use client';

import Link from 'next/link';
import {
  Bell,
  Bookmark,
  ChevronDown,
  Copy,
  Globe2,
  Heart,
  Mail,
  Menu,
  Search,
  Settings,
  User,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { MEGA_MARKETS, METHODOLOGY_LINKS } from '@/lib/site-data';

type MegaKey = 'predictions' | 'methodology' | null;

const utilityActions = [
  { label: 'Carian', icon: Search },
  { label: 'Kegemaran', icon: Bookmark },
  { label: 'Disukai', icon: Heart },
  { label: 'Clipboard', icon: Copy },
  { label: 'Notifikasi', icon: Bell },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="DatoChai laman utama">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-forest-900 to-forest-700 text-sm font-bold text-gold-300 shadow-lg shadow-forest-900/25">
        DC
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-poppins text-lg font-bold text-foreground">DatoChai</span>
          <span className="block text-[11px] text-muted-foreground">Ramalan 4D AI</span>
        </span>
      )}
    </Link>
  );
}

function LanguageSelect({ className }: { className?: string }) {
  const [lang, setLang] = useState('MS');
  return (
    <div className={cn('flex items-center rounded-full border border-border bg-white/50 px-3 py-2 text-sm dark:bg-white/5', className)}>
      <Globe2 className="mr-2 h-4 w-4 text-muted-foreground" />
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="cursor-pointer bg-transparent font-medium text-foreground outline-none"
        aria-label="Pilih bahasa"
      >
        <option value="MS">MS</option>
        <option value="ZH">中文</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mega, setMega] = useState<MegaKey>(null);
  const [mobileSection, setMobileSection] = useState<MegaKey>('predictions');

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-slate-950/70">
      <div className="container-custom">
        <div className="flex h-[4.75rem] items-center justify-between gap-4">
          {/* Left: logo + contact (desktop) */}
          <div className="hidden items-center gap-4 lg:flex">
            <Logo />
            <Link
              href="/hubungi"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-gold-500 hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Hubungi
            </Link>
          </div>

          {/* Mobile bar */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-white/60 text-foreground dark:bg-white/5"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Logo />
            <div className="flex items-center gap-1.5">
              {[Search, Bell, User].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={['Carian', 'Notifikasi', 'Profil'][i]}
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-white/60 text-foreground dark:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Center: primary nav (desktop) */}
          <nav
            className="relative hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            onMouseLeave={() => setMega(null)}
          >
            <NavLink href="/">Laman Utama</NavLink>
            <NavLink href="/pakar-datochai">Pakar DatoChai</NavLink>
            <MegaTrigger active={mega === 'predictions'} onHover={() => setMega('predictions')}>
              Semua Ramalan 4D
            </MegaTrigger>
            <MegaTrigger active={mega === 'methodology'} onHover={() => setMega('methodology')}>
              Bagaimana Kita Meramalkan
            </MegaTrigger>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/mengenai-datochai">Mengenai DatoChai</NavLink>

            {mega && (
              <div className="absolute left-1/2 top-[3.5rem] w-[min(1000px,calc(100vw-2rem))] -translate-x-1/2 animate-fade-up">
                <div className="glass-strong rounded-[1.75rem] p-5 shadow-2xl">
                  {mega === 'predictions' ? (
                    <div className="grid gap-4 md:grid-cols-3">
                      {MEGA_MARKETS.map((col) => (
                        <div key={col.title} className="rounded-2xl border border-border/60 bg-white/40 p-4 dark:bg-white/5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                            {col.title}
                          </p>
                          <div className="space-y-1">
                            {col.markets.map((mk) => (
                              <Link
                                key={mk.slug}
                                href={`/${mk.slug}`}
                                onClick={() => setMega(null)}
                                className="group flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-forest-900/10"
                              >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest-900/10 text-forest-700 transition group-hover:bg-forest-900 group-hover:text-gold-300 dark:text-forest-300">
                                  <mk.icon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-medium text-foreground">{mk.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-3 md:grid-cols-3">
                      {METHODOLOGY_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMega(null)}
                          className="rounded-2xl border border-border/60 bg-white/40 p-4 transition hover:border-gold-500/60 dark:bg-white/5"
                        >
                          <p className="text-sm font-semibold text-foreground">{item.label}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </nav>

          {/* Right: utility cluster (desktop) */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <LanguageSelect />
            <ThemeToggle />
            {utilityActions.map((a) => (
              <button
                key={a.label}
                type="button"
                title={a.label}
                aria-label={a.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/50 text-muted-foreground transition hover:border-gold-500 hover:text-foreground dark:bg-white/5"
              >
                <a.icon className="h-4 w-4" />
              </button>
            ))}
            <button type="button" className="btn-gold ml-1 px-5 py-2.5">
              Log Masuk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile off-canvas drawer */}
      <div className={cn('fixed inset-0 z-50 lg:hidden', menuOpen ? 'pointer-events-auto' : 'pointer-events-none')}>
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={() => setMenuOpen(false)}
          className={cn('absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity', menuOpen ? 'opacity-100' : 'opacity-0')}
        />
        <aside
          className={cn(
            'glass-strong relative flex h-full w-[min(22rem,88vw)] flex-col overflow-y-auto p-5 shadow-2xl transition-transform duration-300',
            menuOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="mb-5 flex items-start justify-between">
            <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/50 p-3 dark:bg-white/5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-900 text-sm font-bold text-gold-300">DC</span>
              <div>
                <p className="font-semibold text-foreground">Tetamu DatoChai</p>
                <p className="text-xs text-muted-foreground">Log masuk untuk simpan pilihan</p>
              </div>
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Tutup" className="grid h-10 w-10 place-items-center rounded-full border border-border">
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Navigasi Utama</p>
          <div className="space-y-1">
            <MobileLink href="/" onClick={() => setMenuOpen(false)}>Laman Utama</MobileLink>
            <MobileLink href="/pakar-datochai" onClick={() => setMenuOpen(false)}>Pakar DatoChai</MobileLink>
            <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>Blog</MobileLink>
            <MobileLink href="/mengenai-datochai" onClick={() => setMenuOpen(false)}>Mengenai DatoChai</MobileLink>
            <MobileLink href="/hubungi" onClick={() => setMenuOpen(false)}>Hubungi Kami</MobileLink>
          </div>

          <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
            <MobileAccordion
              title="Semua Ramalan 4D"
              open={mobileSection === 'predictions'}
              onToggle={() => setMobileSection(mobileSection === 'predictions' ? null : 'predictions')}
            >
              {MEGA_MARKETS.flatMap((c) => c.markets).map((mk) => (
                <MobileLink key={mk.slug} href={`/${mk.slug}`} onClick={() => setMenuOpen(false)} indent>
                  {mk.name}
                </MobileLink>
              ))}
            </MobileAccordion>
            <MobileAccordion
              title="Bagaimana Kita Meramalkan"
              open={mobileSection === 'methodology'}
              onToggle={() => setMobileSection(mobileSection === 'methodology' ? null : 'methodology')}
            >
              {METHODOLOGY_LINKS.map((item) => (
                <MobileLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)} indent>
                  {item.label}
                </MobileLink>
              ))}
            </MobileAccordion>
          </div>

          <div className="mt-auto border-t border-border/60 pt-4">
            <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Quick Actions</p>
            <div className="grid grid-cols-5 gap-2">
              {utilityActions.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  aria-label={a.label}
                  title={a.label}
                  className="grid aspect-square min-h-11 place-items-center rounded-2xl border border-border/60 bg-white/50 text-foreground dark:bg-white/5"
                >
                  <a.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSelect className="flex-1 justify-center" />
              <ThemeToggle />
            </div>
            <button type="button" className="btn-gold mt-4 w-full">
              <Settings className="h-4 w-4" /> Log Masuk / Daftar
            </button>
          </div>
        </aside>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:bg-forest-900/5 hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MegaTrigger({
  active,
  onHover,
  children,
}: {
  active: boolean;
  onHover: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onFocus={onHover}
      className={cn(
        'flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition',
        active ? 'bg-forest-900/5 text-foreground' : 'text-muted-foreground hover:bg-forest-900/5 hover:text-foreground',
      )}
    >
      {children}
      <ChevronDown className={cn('h-4 w-4 transition-transform', active && 'rotate-180')} />
    </button>
  );
}

function MobileLink({
  href,
  onClick,
  indent,
  children,
}: {
  href: string;
  onClick: () => void;
  indent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-forest-900/5 hover:text-foreground',
        indent && 'pl-5 text-[13px]',
      )}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition hover:bg-forest-900/5"
      >
        {title}
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      {open && <div className="mt-1 space-y-0.5">{children}</div>}
    </div>
  );
}
