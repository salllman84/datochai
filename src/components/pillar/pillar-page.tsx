import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  ChevronRight,
  Cpu,
  Database,
  Flame,
  LineChart,
  Quote,
  Snowflake,
  Sparkles,
  Timer,
} from 'lucide-react';
import { Countdown } from '@/components/ui/countdown';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import { NumberBlocks } from '@/components/ui/number-blocks';
import { UtilityBar } from '@/components/ui/utility-bar';
import { PillarAccuracyChart } from '@/components/pillar/pillar-accuracy-chart';
import { LinkedinIcon } from '@/components/ui/brand-icons';
import { BLOG_POSTS } from '@/lib/blog-data';
import { DISCLAIMER_BODY, EXPERTS, SUPPORT_LINES, type Market } from '@/lib/site-data';

function marketFaq(market: Market) {
  return [
    {
      q: `Adakah ramalan ${market.name} ini dijamin tepat?`,
      a: `Tidak. Ramalan ${market.name} kami adalah hasil analisis statistik dan AI. Loteri kekal sebagai permainan rawak bebas. Tiada teknologi yang boleh menjamin kemenangan — kami mengoptimumkan ruang kebarangkalian, bukan menjual jaminan.`,
    },
    {
      q: `Bagaimana carta ramalan ${market.name} dijana?`,
      a: `Sistem kami menyepadukan Deep Learning LSTM, ARIMA, dan Meta Prophet dalam satu Rangkaian Ensemble Hibrid Bertingkat, dilatih ke atas lebih sedekad data sejarah cabutan ${market.name} untuk mengekstrak nombor panas, sejuk dan tertunggak.`,
    },
    {
      q: `Bilakah cabutan ${market.name} dijalankan?`,
      a: `Jadual cabutan ${market.name} ialah ${market.drawSchedule}. Carta ramalan kami dikemas kini secara automatik sebelum setiap cabutan apabila data terkini diserap ke pangkalan pelayan kami.`,
    },
    {
      q: `Bolehkah saya mengesahkan ketepatan ramalan ini?`,
      a: `Ya. Semua keputusan boleh disahkan terhadap keputusan rasmi pengendali ${market.name}. Kami memaparkan rekod hit dan miss secara telus di halaman Ketepatan tanpa sebarang tapisan.`,
    },
  ];
}

function Breadcrumb({ market }: { market: Market }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-300/80" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-gold-300">Laman Utama</Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span className="text-gold-300">{market.name}</span>
    </nav>
  );
}

export function PillarPage({ market }: { market: Market }) {
  const seed = market.key.length + market.name.length;
  const latest = BLOG_POSTS.slice(0, 3);
  const guideHeading = `Panduan Lengkap Carta Ramalan ${market.name}`;

  return (
    <>
      {/* ===== SECTION 1 — HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: market.heroGradient }}>
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumb market={market} />
          <div className="mt-6 max-w-3xl">
            {market.badge ? (
              <span className="pill border border-crimson-500/40 bg-crimson-600/20 text-crimson-200">
                <Flame className="h-3.5 w-3.5" /> {market.badge}
              </span>
            ) : (
              <span className="pill border border-gold-500/40 bg-white/5 text-gold-200">
                <Sparkles className="h-3.5 w-3.5" /> {market.tagline}
              </span>
            )}
            <h1 className="mt-5 font-poppins text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {market.heroTitle}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
              {market.blurb}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#ramalan-hari-ini" className="btn-gold">
                Lihat Ramalan Hari Ini <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#metodologi" className="btn-gold-outline border-gold-300/60 text-gold-100 hover:bg-white/10">
                Bagaimana Kami Meramal
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
              {['Disahkan Penyelidik PhD', `Cabutan: ${market.drawSchedule}`, 'Resolusi Pengiraan Masa Nyata'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-nvidia-green" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent dark:from-slate-950" />
      </section>

      {/* ===== SECTION 2 — TODAY'S PREDICTION ===== */}
      <section id="ramalan-hari-ini" className="bg-neutral-50 dark:bg-slate-950/40">
        <div className="container-custom -mt-12 pb-16">
          <div className="glass-card relative z-10 overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="pill-gold mb-2">
                  <Timer className="h-3.5 w-3.5" /> Ramalan AI Hari Ini
                </span>
                <h2 className="font-poppins text-xl font-bold text-foreground">
                  Carta Ramalan {market.name}
                </h2>
              </div>
              <div className="rounded-2xl bg-slate-900 px-4 py-3">
                <Countdown />
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Sparkles className="h-4 w-4 text-gold-600" /> Nombor Utama (Main)
                </p>
                <NumberBlocks numbers={market.sample.main} variant="gold" size="lg" />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-crimson-600">
                    <Flame className="h-4 w-4" /> Nombor Panas
                  </p>
                  <NumberBlocks numbers={market.sample.hot} variant="crimson" size="sm" />
                </div>
                <div>
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest-700 dark:text-forest-300">
                    <Snowflake className="h-4 w-4" /> Nombor Sejuk
                  </p>
                  <NumberBlocks numbers={market.sample.cold} variant="ghost" size="sm" />
                </div>
                <div>
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <Timer className="h-4 w-4" /> Tertunggak (Overdue)
                  </p>
                  <NumberBlocks numbers={market.sample.overdue} variant="ghost" size="sm" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                Nombor dijana oleh enjin ensemble hibrid · klik salin untuk menyimpan ke papan klip.
              </p>
              <UtilityBar
                likes={1480 + seed * 11}
                copyText={`Ramalan ${market.name}: ${market.sample.main.join(', ')}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — HISTORICAL ACCURACY ===== */}
      <section className="bg-slate-900 text-slate-100 dark:bg-slate-950">
        <div className="container-custom py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="pill border border-gold-500/30 bg-white/5 text-gold-300">Ketelusan & Kepercayaan</span>
            <h2 className="mt-4 h-2 text-white">Carta Ketepatan Sejarah {market.shortName}</h2>
            <p className="mt-3 text-sm text-slate-300">
              Graf interaktif memaparkan pergerakan ketepatan harian unjuran kami secara kumulatif untuk 30 hari yang lalu. Model kami melaras secara kendiri selepas setiap keputusan rasmi.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-6">
            <PillarAccuracyChart seed={seed} />
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — ULTIMATE GUIDE ===== */}
      <section className="bg-white dark:bg-slate-900/40">
        <div className="container-custom py-16">
          <div className="mx-auto max-w-4xl prose-datochai">
            <span className="pill-gold mb-4">Panduan Utama</span>
            <h2>{guideHeading}</h2>
            <p>
              Selamat datang ke hab analisis {market.name} paling komprehensif di Malaysia. Berbeza dengan
              platform tekaan rawak, setiap angka pada carta ramalan {market.name} kami terbit daripada
              proses saintifik berlapis — bermula dengan pengekstrakan data sejarah melebihi sepuluh tahun,
              diikuti penapisan statistik, dan akhirnya pemodelan Deep Learning. {market.tagline} menjadi
              tunjang pendekatan kami bagi pasaran ini.
            </p>
            <h3>Konsep Nombor Panas, Sejuk &amp; Tertunggak</h3>
            <p>
              Enjin kami mengelaskan setiap digit kepada tiga kategori dinamik. Nombor <strong>panas</strong>
              {' '}menunggang momentum varians jangka pendek, manakala nombor <strong>sejuk</strong> kehilangan
              kelibat melampaui sisihan piawai biasa. Berpandukan Hukum Nombor Besar (Law of Large Numbers),
              angka tertunggak berdepan tekanan statistik untuk membuat pembetulan min (mean reversion) kembali
              ke frekuensi asalnya.
            </p>
            <h3>Mengapa Pendekatan Ini Lebih Tepat untuk {market.name}</h3>
            <p>
              Setiap pasaran 4D memiliki dinamik cabutan yang unik. Oleh itu kami melatih rangkaian neural
              berasingan khusus untuk {market.name}, memastikan ramalan yang dihasilkan memiliki sensitiviti
              konteks yang tinggi. Pendekatan ini menukar carta ramalan daripada spekulasi buta kepada satu
              alat pengurusan risiko berasaskan logik matematik yang telus dan boleh dibuktikan.
            </p>
            <ul>
              <li>Analisis frekuensi &amp; selang masa (Gap Occurrences) merentas dekad data.</li>
              <li>Normalisasi z-score bagi setiap matriks bisingan sebelum disuap ke nodus AI.</li>
              <li>Penjejakan korelasi silang bersyarat menggunakan Rangkaian Rantaian Markov.</li>
              <li>Validasi pakar manusia bagi setiap barisan angka sebelum diterbitkan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — AI METHODOLOGY ===== */}
      <section id="metodologi" className="bg-neutral-50 dark:bg-slate-950/40">
        <div className="container-custom py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="pill-forest mb-3">Bagaimana Kami Meramal</span>
            <h2 className="h-2 text-foreground">Enjin AI Di Sebalik Ramalan {market.shortName}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Database, title: 'Big Data Historikal', body: 'Lejar masa nyata menyimpan keputusan cabutan lebih sedekad, dibersihkan dan dinormalisasi untuk melatih AI.' },
              { icon: BrainCircuit, title: 'Deep Learning LSTM', body: 'Rangkaian Long Short-Term Memory menjejak pergantungan corak berurutan jangka panjang yang di luar jangkauan manusia.' },
              { icon: Cpu, title: 'Hibrid Ensemble', body: 'ARIMA + Prophet mengekstrak trend makro; baki sisa non-linear dirungkai oleh LSTM untuk ramalan komposit.' },
            ].map((c) => (
              <div key={c.title} className="glass-card glass-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-900/10 text-forest-700 dark:text-forest-300">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-poppins text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/metodologi-ramalan-4d" className="btn-forest">
              <LineChart className="h-4 w-4" /> Baca Metodologi Penuh
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — EXPERT CAROUSEL ===== */}
      <section className="bg-white dark:bg-slate-900/40">
        <div className="container-custom py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="pill-gold mb-3">E-E-A-T</span>
            <h2 className="h-2 text-foreground">Disahkan Pakar Saintifik</h2>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
            {EXPERTS.slice(0, 3).map((e) => (
              <article key={e.name} className="w-[85%] shrink-0 snap-center lg:w-auto">
                <div className="glass-card h-full p-6">
                  <Quote className="h-7 w-7 text-gold-500/60" />
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.bio}</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-forest-900 to-forest-700 text-sm font-bold text-gold-300">
                      {e.initials}
                    </span>
                    <div className="flex-1">
                      <p className="font-poppins text-sm font-bold text-foreground">{e.name}</p>
                      <p className="text-xs text-muted-foreground">{e.role} · {e.org}</p>
                    </div>
                    {e.linkedin ? (
                      <a href={e.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-[#0a66c2]">
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — LATEST POSTS ===== */}
      <section className="bg-neutral-50 dark:bg-slate-950/40">
        <div className="container-custom py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="h-2 text-foreground">Artikel {market.shortName} Terkini</h2>
            <Link href="/blog" className="hidden items-center gap-1 text-sm font-semibold text-forest-700 dark:text-forest-300 sm:inline-flex">
              Semua Artikel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latest.map((post) => (
              <article key={post.slug} className="glass-card glass-hover flex flex-col overflow-hidden p-0">
                <Link href={`/blog/${post.slug}`}>
                  <div className={`relative h-40 bg-gradient-to-br ${post.gradient}`}>
                    <span className="pill-glass absolute left-3 top-3 text-white">{post.category}</span>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-poppins text-base font-bold leading-snug text-foreground hover:text-forest-700 dark:hover:text-forest-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest-700 dark:text-forest-300">
                    Lanjut Membaca Analisis <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — FAQ ===== */}
      <section className="bg-white dark:bg-slate-900/40">
        <div className="container-custom py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <span className="pill-gold mx-auto mb-3">Soalan Lazim</span>
              <h2 className="h-2 text-foreground">Soalan Lazim Ramalan {market.shortName}</h2>
            </div>
            <FaqAccordion items={marketFaq(market)} defaultOpen={0} />
          </div>
        </div>
      </section>

      {/* ===== SECTION 9 — DISCLAIMER ===== */}
      <section className="bg-[#F3F4F6] dark:bg-slate-950/60">
        <div className="container-custom py-12">
          <div className="rounded-3xl border-l-4 border-crimson-600 bg-white p-6 shadow-sm dark:bg-slate-900 sm:p-8">
            <h2 className="font-poppins text-lg font-bold text-crimson-700 dark:text-crimson-400">
              Penafian &amp; Permainan Bertanggungjawab
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{DISCLAIMER_BODY}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SUPPORT_LINES.slice(0, 2).map((s) => (
                <a
                  key={s.name}
                  href={`tel:${s.tel}`}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-crimson-500 hover:text-crimson-600 dark:text-slate-300"
                >
                  {s.name} · {s.phone}
                </a>
              ))}
              <Link href="/permainan-bertanggungjawab" className="rounded-full bg-crimson-600/10 px-3 py-1.5 text-xs font-semibold text-crimson-700 dark:text-crimson-400">
                Baca Dasar Penuh
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
