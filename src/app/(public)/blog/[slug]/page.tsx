import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CalendarDays, Clock, ShieldAlert, Sparkles, UserRound } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { UtilityBar } from '@/components/ui/utility-bar';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from '@/lib/blog-data';
import { DISCLAIMER_BODY, SITE } from '@/lib/site-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POSTS_BY_SLUG[params.slug];
  if (!post) return {};
  const title = `${post.title} | DatoChai`;
  const description = post.excerpt.slice(0, 155);
  const url = `${SITE.domain}/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_BY_SLUG[params.slug];
  if (!post) notFound();

  const meta = `${post.author} · ${post.date} · ${post.readTime}`;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        tone="brand"
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ href: '/blog', label: 'Blog' }, { label: post.category }]}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
          <span className="flex items-center gap-1.5">
            <UserRound className="h-4 w-4 text-gold-300" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-gold-300" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-gold-300" /> {post.readTime}
          </span>
        </div>
      </PageHero>

      {/* ===== UTILITY BAR (only client piece) ===== */}
      <section className="bg-neutral-50 dark:bg-slate-950/40">
        <div className="container-custom -mt-7 pb-2">
          <div className="glass-card flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-5">
            <p className="text-xs text-muted-foreground">
              Sukai, simpan, atau salin pautan analisis ini untuk rujukan masa hadapan.
            </p>
            <UtilityBar likes={post.likes} copyText={`${post.title} — ${SITE.domain}/blog/${post.slug}`} />
          </div>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="bg-white dark:bg-slate-900/40">
        <div className="container-custom py-14 sm:py-16">
          <article className="mx-auto w-full max-w-3xl prose-datochai">
            <p>
              Apabila membincangkan ramalan 4D berasaskan kecerdasan buatan, perbezaan antara tekaan rawak dan
              analisis berstruktur terletak pada disiplin metodologi. Dalam analisis bertajuk{' '}
              <strong>{post.category}</strong> ini, pasukan penyelidik DatoChai menghuraikan bagaimana isyarat
              statistik diekstrak daripada hingar data cabutan loteri yang kelihatan sepenuhnya rawak — dan mengapa
              ketelusan proses jauh lebih bernilai daripada janji kemenangan yang mustahil dijamin.
            </p>
            <p>
              Setiap angka pada carta ramalan kami bukan terbit daripada gerak hati, tetapi daripada satu saluran
              pemprosesan berlapis yang bermula dengan pengumpulan data sejarah melebihi sepuluh tahun. Data mentah
              ini ditapis, dinormalisasi, dan disusun menjadi siri masa (time-series) sebelum disuap ke dalam
              rangkaian neural. Pendekatan ini memastikan bahawa setiap unjuran boleh diaudit semula dan disahkan
              terhadap keputusan rasmi pengendali loteri tanpa sebarang tapisan.
            </p>

            <h2>Seni Bina Model di Sebalik Ramalan</h2>
            <p>
              Tulang belakang sistem kami ialah rangkaian <strong>Long Short-Term Memory (LSTM)</strong> — sejenis
              rangkaian neural berulang yang direka khusus untuk mengingati pergantungan corak jangka panjang dalam
              data berurutan. Berbeza dengan model statistik klasik seperti <strong>ARIMA</strong> yang mengandaikan
              hubungan linear dan kepegunan (stationarity), LSTM mampu menangkap interaksi tak linear yang kompleks
              antara digit, kedudukan, dan selang masa cabutan.
            </p>
            <p>
              Untuk mengukuhkan keteguhan unjuran, isyarat LSTM digabungkan dengan komponen makro daripada ARIMA dan
              Meta Prophet dalam satu Rangkaian Ensemble Hibrid Bertingkat. ARIMA mengekstrak trend dan kemusiman
              berskala besar, manakala baki sisa tak linear yang tertinggal dirungkai oleh LSTM. Hasil komposit ini
              kemudiannya dikalibrasi semula melalui pengoptimuman Bayesian sebelum diterbitkan kepada pengguna.
            </p>

            <h2>Membaca Isyarat: Panas, Sejuk &amp; Tertunggak</h2>
            <p>
              Enjin kami mengelaskan setiap digit kepada tiga kategori dinamik yang mencerminkan tingkah laku
              statistiknya dalam tetingkap masa terkini. Pengkategorian ini membantu pengguna mentafsir carta dengan
              konteks yang lebih kaya, bukan sekadar melihat senarai angka mentah:
            </p>
            <ul>
              <li>
                <strong>Nombor panas</strong> — digit yang menunggang momentum varians jangka pendek dan muncul lebih
                kerap daripada frekuensi jangkaan.
              </li>
              <li>
                <strong>Nombor sejuk</strong> — digit yang kehilangan kelibat melampaui sisihan piawai biasa dalam
                beberapa cabutan terakhir.
              </li>
              <li>
                <strong>Nombor tertunggak (overdue)</strong> — digit yang berdepan tekanan statistik untuk membuat
                pembetulan min (mean reversion) kembali ke frekuensi asalnya, berpandukan Hukum Nombor Besar.
              </li>
            </ul>

            <div className="my-8 rounded-3xl border border-gold-500/40 bg-gold-500/5 p-6 backdrop-blur-xl dark:bg-gold-500/10">
              <p className="mb-3 flex items-center gap-2 font-poppins text-base font-bold text-gold-700 dark:text-gold-300">
                <Sparkles className="h-5 w-5" /> Ringkasan Utama
              </p>
              <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Ramalan dijana melalui ensemble hibrid LSTM + ARIMA + Prophet, bukan tekaan rawak.</li>
                <li>Setiap angka boleh disahkan secara telus terhadap keputusan rasmi pengendali.</li>
                <li>Klasifikasi panas/sejuk/tertunggak ialah alat pengurusan risiko, bukan jaminan kemenangan.</li>
                <li>Loteri kekal sebagai permainan rawak bebas — bermainlah secara bertanggungjawab.</li>
              </ul>
            </div>

            <h2>Mengapa Ketelusan Lebih Penting daripada Jaminan</h2>
            <p>
              Tiada model AI yang sempurna, dan mana-mana platform yang mendakwa boleh menjamin kemenangan sebenarnya
              menjual ilusi. Falsafah kami berbeza: kami mengoptimumkan ruang kebarangkalian dan memaparkan rekod hit
              serta miss secara terbuka di halaman Ketepatan. Ramalan yang tersasar dipaparkan sebagai bukti
              ketelusan, bukan disembunyikan sebagai kelemahan.
            </p>
            <p>
              Dengan memahami logik di sebalik setiap angka — daripada pengekstrakan data hingga validasi pakar
              manusia — pengguna dapat membuat keputusan yang lebih berinformasi dan, yang lebih penting, lebih
              waras. Carta ramalan sepatutnya menjadi alat bantu analisis berasaskan logik matematik, bukan alasan
              untuk mempertaruhkan melebihi kemampuan peribadi.
            </p>

            {/* ===== MANDATORY DISCLAIMER ===== */}
            <div className="mt-10 rounded-3xl border-l-4 border-crimson-600 bg-[#F3F4F6] p-6 shadow-sm dark:bg-slate-900 sm:p-8">
              <p className="m-0 flex items-center gap-2 font-poppins text-base font-bold text-crimson-700 dark:text-crimson-400">
                <ShieldAlert className="h-5 w-5" /> Penafian &amp; Permainan Bertanggungjawab
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {DISCLAIMER_BODY}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== RELATED ARTICLES ===== */}
      <Section tone="light">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="h-2 text-foreground">Artikel Berkaitan</h2>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-semibold text-forest-700 dark:text-forest-300 sm:inline-flex"
          >
            Semua Artikel <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {related.map((rel) => (
            <article key={rel.slug} className="glass-card glass-hover flex flex-col overflow-hidden p-0">
              <Link href={`/blog/${rel.slug}`}>
                <div className={`relative h-40 bg-gradient-to-br ${rel.gradient}`}>
                  <span className="pill-glass absolute left-3 top-3 text-white">{rel.category}</span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" /> {rel.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {rel.readTime}
                  </span>
                </div>
                <Link href={`/blog/${rel.slug}`}>
                  <h3 className="font-poppins text-base font-bold leading-snug text-foreground hover:text-forest-700 dark:hover:text-forest-300">
                    {rel.title}
                  </h3>
                </Link>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest-700 dark:text-forest-300"
                >
                  Baca <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
