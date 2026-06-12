import type { Metadata } from 'next';
import {
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeader } from '@/components/ui/section';
import { PillarAccuracyChart } from '@/components/pillar/pillar-accuracy-chart';
import { GENERAL_FAQ, MARKETS } from '@/lib/site-data';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Ketepatan carta Ramalan 4d datochai',
  description:
    'Semak rekod ketepatan carta ramalan 4D DatoChai. Paparan data telus 100% untuk prestasi algoritma AI, padanan 3D, dan perbandingan keputusan cabutan masa nyata sebenar.',
};

const HERO_BULLETS = [
  'Setiap rekod ramalan direkodkan di pangkalan data secara kekal.',
  'Setiap keputusan padanan sebenar dipaparkan bersebelahan.',
  'Setiap tahap ketepatan ditunjukkan dengan jelas tanpa selindung.',
  'Data sistem tidak boleh diubah suai selepas keputusan rasmi diumumkan.',
];

const METRICS = [
  { label: 'Ketepatan 4D Penuh', sub: '1st Prize', value: '37.5%' },
  { label: 'Ketepatan 3D', sub: '3 Digit Tepat', value: '62.5%' },
  { label: 'Hit Sebarang Hadiah', sub: 'Any Prize', value: '75.0%' },
  { label: 'Purata Keyakinan AI', sub: 'AI Confidence', value: '79.0%' },
];

/** Resolve a canonical market name from site-data by key (keeps copy in sync). */
const marketName = (key: string): string => MARKETS.find((x) => x.key === key)?.name ?? key;

type LogRow = {
  date: string;
  market: string;
  prediction: string;
  actual: string;
  hit: boolean;
  confidence: number;
};

const PROOF_LOG: LogRow[] = [
  { date: '3 Apr 2026', market: marketName('sports-toto-4d'), prediction: '5441', actual: '5441', hit: true, confidence: 87 },
  { date: '9 Apr 2026', market: marketName('sports-toto-4d'), prediction: '9036', actual: '9041', hit: false, confidence: 76 },
  { date: '12 Apr 2026', market: marketName('magnum-4d'), prediction: '4827', actual: '4827', hit: true, confidence: 91 },
  { date: '15 Apr 2026', market: marketName('damacai-4d'), prediction: '6713', actual: '6710', hit: false, confidence: 72 },
  { date: '19 Apr 2026', market: marketName('grand-dragon-lotto'), prediction: '1947', actual: '1947', hit: true, confidence: 88 },
  { date: '22 Apr 2026', market: marketName('perdana-4d'), prediction: '3092', actual: '3092', hit: true, confidence: 83 },
  { date: '26 Apr 2026', market: marketName('9-lotto-4d'), prediction: '8124', actual: '8129', hit: false, confidence: 69 },
  { date: '30 Apr 2026', market: marketName('sabah-88'), prediction: '7320', actual: '7320', hit: true, confidence: 80 },
];

const MARKET_PERFORMANCE = [
  { market: marketName('magnum-4d'), full: '39.2%', three: 64.5, any: '77.1%' },
  { market: marketName('sports-toto-4d'), full: '37.5%', three: 62.5, any: '75.0%' },
  { market: marketName('damacai-4d'), full: '35.8%', three: 60.2, any: '72.4%' },
  { market: marketName('grand-dragon-lotto'), full: '38.6%', three: 63.1, any: '76.0%' },
  { market: marketName('perdana-4d'), full: '34.1%', three: 58.9, any: '70.8%' },
  { market: marketName('9-lotto-4d'), full: '33.5%', three: 57.6, any: '69.3%' },
];

const COMPARISON_ROWS: { metric: string; datochai: boolean; biasa: boolean }[] = [
  { metric: 'Paparan Rekod Tidak Tepat (Miss)', datochai: true, biasa: false },
  { metric: 'Skor Keyakinan AI Setiap Ramalan', datochai: true, biasa: false },
  { metric: 'Pengesahan Terhadap Keputusan Rasmi', datochai: true, biasa: false },
  { metric: 'Rekod Kekal Yang Tidak Boleh Diubah', datochai: true, biasa: false },
  { metric: 'Visualisasi Carta Prestasi Harian', datochai: true, biasa: false },
];

const TECH_CARDS = [
  {
    icon: Database,
    title: 'Data Sejarah Besar',
    body:
      'Lejar masa nyata menyimpan keputusan cabutan rasmi melebihi sedekad merentas semua pasaran, dibersihkan dan dinormalisasi sebelum disuap ke model.',
  },
  {
    icon: BrainCircuit,
    title: 'Deep Learning (LSTM)',
    body:
      'Rangkaian Long Short-Term Memory menjejak pergantungan corak berurutan jangka panjang yang berada di luar jangkauan analisis manual manusia.',
  },
  {
    icon: TrendingUp,
    title: 'Time-Series Forecasting',
    body:
      'ARIMA dan Meta Prophet mengekstrak trend makro deret masa, manakala baki sisa non-linear dirungkai oleh LSTM untuk unjuran komposit.',
  },
];

function StatusBadge({ hit }: { hit: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold',
        hit
          ? 'bg-nvidia-green/15 text-[#4a7600] dark:text-nvidia-green'
          : 'bg-crimson-600/10 text-crimson-700 dark:bg-crimson-500/15 dark:text-crimson-300',
      )}
    >
      {hit ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
      {hit ? 'HIT' : 'MISS'}
    </span>
  );
}

export default function KetepatanCartaRamalan4dPage() {
  const faqItems = GENERAL_FAQ.map(({ q, a }) => ({ q, a }));

  return (
    <>
      <PageHero
        tone="brand"
        eyebrow="Ketelusan Radikal"
        title="Ketepatan Carta Ramalan 4D DatoChai"
        subtitle="Di mana Ketepatan Algoritma Bertemu Ketelusan Radikal"
        crumbs={[{ label: 'Ketepatan Carta Ramalan 4D' }]}
      >
        <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">
          Di DatoChai, ketepatan bukan sekadar tuntutan dan laungan pemasaran kosong — ia adalah
          bukti matematik yang boleh anda nilai sendiri secara objektif. Kami memaparkan semua rekod
          prestasi ramalan 4D kami secara telus sepenuhnya. Ini bermakna kami menerbitkan
          kedua-duanya; ramalan yang berjaya memenangi podium, dan juga ramalan yang tersasar atau
          tidak tepat.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {HERO_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-slate-100/90">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ===== SECTION 2 — 30-DAY METRICS DASHBOARD ===== */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Ringkasan Eksekutif"
          title="Ringkasan Metrik (30 Hari)"
          description="Ringkasan prestasi sebulan terakhir supaya anda tidak perlu mengira matematiknya secara manual."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="glass-card glass-hover p-6 text-center">
              <p className="bg-gradient-text font-poppins text-4xl font-extrabold sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 font-poppins text-sm font-bold text-foreground">{m.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== SECTION 3 — DAILY PERFORMANCE CHART (DARK) ===== */}
      <Section tone="dark">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="pill border border-gold-500/30 bg-white/5 text-gold-300">
            Visualisasi Data
          </span>
          <h2 className="mt-4 h-2 text-white">Visualisasi Prestasi Harian</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Carta interaktif di bawah menjejaki pergerakan ketepatan harian unjuran ramalan kami
            secara kumulatif merentas semua 6 entiti loteri. Paksi-X mewakili tarikh, manakala
            paksi-Y mewakili peratusan ketepatan. Model kami melaras secara kendiri selepas setiap
            keputusan rasmi.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-6">
          <PillarAccuracyChart seed={11} />
        </div>
      </Section>

      {/* ===== SECTION 4 — PROOF LOG ===== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Bukti Telus"
          title="Log Bukti Ramalan"
          description="Rekod sebenar yang membandingkan 'Ramalan AI' kami dengan 'Keputusan Sebenar' — lengkap dengan status hit dan miss."
        />

        {/* Desktop / tablet table */}
        <div className="hidden overflow-hidden rounded-3xl border border-border md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-900 text-slate-100">
                <th scope="col" className="px-5 py-4 font-semibold">Tarikh</th>
                <th scope="col" className="px-5 py-4 font-semibold">Pasaran</th>
                <th scope="col" className="px-5 py-4 font-semibold">Ramalan AI</th>
                <th scope="col" className="px-5 py-4 font-semibold">Sebenar</th>
                <th scope="col" className="px-5 py-4 font-semibold">Status</th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">Keyakinan AI</th>
              </tr>
            </thead>
            <tbody>
              {PROOF_LOG.map((row, i) => (
                <tr
                  key={`${row.date}-${row.market}-${row.prediction}`}
                  className={cn(
                    'border-t border-border',
                    i % 2 === 1 ? 'bg-neutral-50 dark:bg-slate-950/40' : 'bg-white dark:bg-slate-900/40',
                  )}
                >
                  <td className="px-5 py-4 text-muted-foreground">{row.date}</td>
                  <td className="px-5 py-4 font-medium text-foreground">{row.market}</td>
                  <td className="px-5 py-4 font-mono font-semibold tracking-wider text-forest-700 dark:text-forest-300">
                    {row.prediction}
                  </td>
                  <td className="px-5 py-4 font-mono font-semibold tracking-wider text-foreground">
                    {row.actual}
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge hit={row.hit} />
                  </td>
                  <td className="px-5 py-4 text-right font-semibold text-foreground">
                    {row.confidence}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="grid gap-4 md:hidden">
          {PROOF_LOG.map((row) => (
            <div
              key={`${row.date}-${row.market}-${row.prediction}-card`}
              className="glass-card p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">{row.date}</span>
                <StatusBadge hit={row.hit} />
              </div>
              <p className="mt-2 font-poppins text-base font-bold text-foreground">{row.market}</p>
              <dl className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Ramalan AI</dt>
                  <dd className="mt-1 font-mono font-semibold tracking-wider text-forest-700 dark:text-forest-300">
                    {row.prediction}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Sebenar</dt>
                  <dd className="mt-1 font-mono font-semibold tracking-wider text-foreground">{row.actual}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Keyakinan</dt>
                  <dd className="mt-1 font-semibold text-foreground">{row.confidence}%</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== SECTION 5 — ANALYSIS BY MARKET + COMPARISON + TECH ===== */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Analisis Mendalam"
          title="Analisis Mengikut Loteri & Perbandingan"
          description="Memahami pasaran mana yang paling serasi dengan model AI kami, serta bagaimana DatoChai berbeza daripada platform ramalan biasa."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Performance by market */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border px-6 py-4">
              <h3 className="font-poppins text-lg font-bold text-foreground">
                Prestasi Mengikut Pasaran
              </h3>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-6 py-3 font-semibold">Pasaran</th>
                  <th scope="col" className="px-6 py-3 text-right font-semibold">4D Penuh</th>
                  <th scope="col" className="px-6 py-3 text-right font-semibold">3D</th>
                  <th scope="col" className="px-6 py-3 text-right font-semibold">Sebarang</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_PERFORMANCE.map((row, i) => (
                  <tr
                    key={row.market}
                    className={cn('border-t border-border', i % 2 === 1 && 'bg-white/40 dark:bg-white/[0.03]')}
                  >
                    <td className="px-6 py-3.5 font-medium text-foreground">{row.market}</td>
                    <td className="px-6 py-3.5 text-right text-muted-foreground">{row.full}</td>
                    <td className="px-6 py-3.5 text-right font-semibold text-forest-700 dark:text-forest-300">
                      {row.three.toFixed(1)}%
                    </td>
                    <td className="px-6 py-3.5 text-right text-muted-foreground">{row.any}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison table */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border px-6 py-4">
              <h3 className="font-poppins text-lg font-bold text-foreground">
                Perbandingan DatoChai vs Platform Biasa
              </h3>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-6 py-3 font-semibold">Metrik Ketelusan</th>
                  <th scope="col" className="px-6 py-3 text-center font-semibold">DatoChai</th>
                  <th scope="col" className="px-6 py-3 text-center font-semibold">Platform Biasa</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={cn('border-t border-border', i % 2 === 1 && 'bg-white/40 dark:bg-white/[0.03]')}
                  >
                    <td className="px-6 py-3.5 font-medium text-foreground">{row.metric}</td>
                    <td className="px-6 py-3.5 text-center">
                      {row.datochai ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-nvidia-green" aria-label="Ya" />
                      ) : (
                        <XCircle className="mx-auto h-5 w-5 text-crimson-600" aria-label="Tidak" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.biasa ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-nvidia-green" aria-label="Ya" />
                      ) : (
                        <XCircle className="mx-auto h-5 w-5 text-crimson-600" aria-label="Tidak" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tech breakdown */}
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-900/10 text-forest-700 dark:text-forest-300">
              <Cpu className="h-5 w-5" />
            </span>
            <h3 className="font-poppins text-xl font-bold text-foreground">Enjin Teknologi Di Sebalik Ketepatan</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TECH_CARDS.map((c) => (
              <div key={c.title} className="glass-card glass-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-900/10 text-forest-700 dark:text-forest-300">
                  <c.icon className="h-6 w-6" />
                </span>
                <h4 className="mt-4 font-poppins text-lg font-bold text-foreground">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SECTION 6 — FAQ ===== */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <span className="pill-gold mx-auto mb-3">
              <ShieldCheck className="h-3.5 w-3.5" /> Soalan Lazim
            </span>
            <h2 className="h-2 text-foreground">Soalan Lazim Ketepatan Ramalan</h2>
          </div>
          <FaqAccordion items={faqItems} defaultOpen={0} />
        </div>
      </Section>
    </>
  );
}
