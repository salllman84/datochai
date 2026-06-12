import Link from 'next/link';
import { AlertTriangle, PhoneCall } from 'lucide-react';
import { DISCLAIMER_BODY, SUPPORT_LINES } from '@/lib/site-data';

export function PreFooter() {
  return (
    <section className="bg-[#F3F4F6] dark:bg-slate-950/60">
      <div className="container-custom py-12">
        <div className="overflow-hidden rounded-3xl border-l-4 border-crimson-600 bg-white shadow-sm dark:bg-slate-900">
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-crimson-600/10 text-crimson-600">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-poppins text-xl font-bold text-crimson-700 dark:text-crimson-400">
                  Notis Pematuhan Undang-Undang &amp; Dasar Permainan Bertanggungjawab
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {DISCLAIMER_BODY}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/60 pt-5">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Bantuan Segera:
              </span>
              {SUPPORT_LINES.slice(0, 3).map((s) => (
                <a
                  key={s.name}
                  href={`tel:${s.tel}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-crimson-500 hover:text-crimson-600 dark:text-slate-300"
                >
                  <PhoneCall className="h-3.5 w-3.5" /> {s.name} · {s.phone}
                </a>
              ))}
              <Link
                href="/permainan-bertanggungjawab"
                className="inline-flex items-center gap-1.5 rounded-full bg-crimson-600/10 px-3 py-1.5 text-xs font-semibold text-crimson-700 transition hover:bg-crimson-600/20 dark:text-crimson-400"
              >
                Baca Dasar Penuh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
