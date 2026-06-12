import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Crumb = { href?: string; label: string };

/**
 * Reusable inner-page hero band. `tone="brand"` = deep-green→gold gradient
 * (used by most pages); `tone="clean"` = calm light band (legal pages).
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  crumbs = [],
  tone = 'brand',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  crumbs?: Crumb[];
  tone?: 'brand' | 'clean';
}) {
  const brand = tone === 'brand';
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden',
        brand ? 'text-white' : 'border-b border-border bg-white dark:bg-slate-900/40',
      )}
      style={
        brand
          ? {
              background:
                'radial-gradient(circle at 30% -20%, rgba(0,100,0,0.6), transparent 55%), radial-gradient(circle at 90% 0%, rgba(212,175,55,0.18), transparent 50%), linear-gradient(160deg,#04210a 0%,#03180a 55%,#020f06 100%)',
            }
          : undefined
      }
    >
      <div className="container-custom py-14 sm:py-16">
        <nav className={cn('flex items-center gap-1.5 text-xs', brand ? 'text-slate-300/80' : 'text-muted-foreground')} aria-label="Breadcrumb">
          <Link href="/" className={brand ? 'hover:text-gold-300' : 'hover:text-forest-700'}>
            Laman Utama
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.href ? (
                <Link href={c.href} className={brand ? 'hover:text-gold-300' : 'hover:text-forest-700'}>
                  {c.label}
                </Link>
              ) : (
                <span className={brand ? 'text-gold-300' : 'text-foreground'}>{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-6 max-w-3xl">
          {eyebrow ? (
            <span className={cn('pill mb-4', brand ? 'border border-gold-500/40 bg-white/5 text-gold-200' : 'bg-gold-500/15 text-gold-700')}>
              {eyebrow}
            </span>
          ) : null}
          <h1 className={cn('font-poppins text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl', !brand && 'text-foreground')}>
            {title}
          </h1>
          {subtitle ? (
            <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', brand ? 'text-slate-200/90' : 'text-muted-foreground')}>
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
