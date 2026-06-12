import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { UtilityBar } from '@/components/ui/utility-bar';
import { HOME_MARKET_KEYS, MARKETS } from '@/lib/site-data';

const homeMarkets = HOME_MARKET_KEYS.map((k) => MARKETS.find((m) => m.key === k)!).filter(Boolean);

export function LotteryOverview() {
  return (
    <Section id="hab-ramalan" tone="light">
      <SectionHeader
        eyebrow="Hab Pusat Ramalan"
        title="Hab Pusat Ramalan 4D Datochai: Akses Carta Mengikut Kategori"
        description="Ekosistem Datochai 4d merangkumi seluruh spektrum pasaran loteri utama di Malaysia. Setiap pasaran mempunyai dinamik cabutan, varians, dan pola algoritma yang unik. Oleh itu, model kecerdasan buatan kami melatih rangkaian neural yang berasingan untuk setiap kategori bagi memastikan 4D ramalan yang dihasilkan memiliki sensitiviti konteks yang tinggi."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeMarkets.map((mk) => (
          <article key={mk.key} className="glass-card glass-hover group flex flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-900/10 text-forest-700 transition group-hover:bg-forest-900 group-hover:text-gold-300 dark:text-forest-300">
                <mk.icon className="h-6 w-6" />
              </span>
              {mk.badge ? <span className="pill-crimson text-[11px]">{mk.badge}</span> : null}
            </div>

            <h3 className="mt-4 font-poppins text-lg font-bold text-foreground">
              Ramalan {mk.name} Hari Ini
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
              {mk.blurb}
            </p>

            <Link
              href={`/${mk.slug}`}
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest-700 transition hover:gap-2.5 dark:text-forest-300"
            >
              Lihat Carta Penuh <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-5 border-t border-border/60 pt-4">
              <UtilityBar
                likes={1200 + mk.name.length * 37}
                copyText={`Ramalan ${mk.name} — DatoChai`}
                compact
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
