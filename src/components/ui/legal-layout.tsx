import { PageHero } from '@/components/ui/page-hero';

export type LegalSection = { id: string; title: string };

/**
 * Shared layout for legal / whitepaper pages: a clean centered reading column
 * with a sticky Table of Contents on desktop. Children should be a series of
 * <section id="..."> blocks (use the `prose-datochai` class for body copy).
 */
export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  effectiveDate,
  toc,
  children,
  tone = 'clean',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  effectiveDate?: string;
  toc: LegalSection[];
  children: React.ReactNode;
  tone?: 'brand' | 'clean';
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} tone={tone}>
        {effectiveDate ? (
          <p className="text-sm font-medium text-muted-foreground">{effectiveDate}</p>
        ) : null}
      </PageHero>

      <div className="bg-white dark:bg-slate-950/40">
        <div className="container-custom py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-12">
            {/* Sticky TOC */}
            <aside className="mb-8 hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Isi Kandungan
                </p>
                <nav className="space-y-1 border-l border-border pl-4">
                  {toc.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block py-1 text-sm text-muted-foreground transition hover:text-forest-700 dark:hover:text-forest-300"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Body */}
            <article className="mx-auto w-full max-w-3xl prose-datochai">{children}</article>
          </div>
        </div>
      </div>
    </>
  );
}
