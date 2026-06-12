import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Cpu, Database, LineChart, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { EXPERTS, MARKETS, SITE } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Mengenai DatoChai | Platform Ramalan 4D Saintifik',
  description:
    'Mengenai DatoChai — platform yang menggabungkan sains data dan kecerdasan buatan untuk mengubah ramalan 4D daripada tekaan nasib kepada simulasi statistik empirikal yang telus dan boleh disahkan.',
};

const APPROACH = [
  {
    icon: Database,
    title: 'Big Data Historikal',
    body: 'Lejar masa nyata kami menyimpan lebih sedekad keputusan cabutan rasmi merentas semua pasaran utama. Setiap rekod dibersihkan, dinormalisasi, dan dinilai bagi membentuk asas latihan yang kukuh untuk enjin ramalan kami.',
  },
  {
    icon: BrainCircuit,
    title: 'Deep Learning LSTM',
    body: 'Rangkaian neural Long Short-Term Memory menjejak pergantungan corak berurutan jangka panjang yang berada di luar jangkauan analisis manusia, mengekstrak isyarat tulen daripada hingar data cabutan.',
  },
  {
    icon: Cpu,
    title: 'Hibrid Ensemble',
    body: 'Kami menyatukan ARIMA, Meta Prophet dan LSTM dalam satu Rangkaian Ensemble Hibrid Bertingkat — model statistik klasik memetakan trend makro, manakala baki sisa non-linear dirungkai oleh pembelajaran mendalam.',
  },
];

export default function AboutPage() {
  const teaserExperts = EXPERTS.slice(0, 3);
  const primaryMarket = MARKETS[0];

  return (
    <>
      <PageHero
        tone="brand"
        eyebrow="Mengenai Kami"
        title="Mengenai DatoChai"
        subtitle="Kami menggabungkan sains data dengan ramalan 4D — menukar setiap carta daripada tekaan nasib kepada simulasi statistik empirikal yang telus, berdisiplin, dan boleh disahkan."
        crumbs={[{ label: 'Mengenai DatoChai' }]}
      />

      {/* ===== MISI KAMI ===== */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Misi Kami"
          title="Menukar 4D Daripada Nasib Kepada Sains"
          description={SITE.valueProp}
        />
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Selama bertahun-tahun, dunia ramalan 4D di Malaysia dikuasai oleh tekaan, tahyul, dan
            kepercayaan buta terhadap nasib. {SITE.name} ditubuhkan dengan satu misi yang jelas —
            menggantikan spekulasi rawak dengan disiplin saintifik. Kami percaya bahawa setiap angka
            yang dipaparkan wajar disokong oleh nilai kebarangkalian yang sah, bukan sekadar
            kebetulan, supaya pengguna membuat keputusan yang lebih berinformasi.
          </p>
          <p>
            Misi kami ialah mendemokrasikan akses kepada analisis statistik bertaraf akademik.
            Dengan menyatukan pakar AI, profesor statistik dan jurutera dalam satu pasukan,
            {' '}{SITE.name} mengubah carta ramalan menjadi simulasi statistik empirikal — sebuah alat
            pengurusan risiko berasaskan logik matematik. Kami tidak menjual jaminan; kami
            mengoptimumkan ruang kebarangkalian dengan ketelusan penuh dan dalam semangat permainan
            yang bertanggungjawab.
          </p>
        </div>
      </Section>

      {/* ===== PENDEKATAN SAINTIFIK KAMI ===== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Pendekatan Saintifik Kami"
          title="Tiga Lapisan Enjin Ramalan Kami"
          description="Setiap angka pada carta kami terbit daripada proses berlapis yang menggabungkan data besar, pembelajaran mendalam, dan pemodelan ensemble hibrid."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {APPROACH.map((card) => (
            <div key={card.title} className="glass-card glass-hover p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-900/10 text-forest-700 dark:text-forest-300">
                <card.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-poppins text-lg font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== KETELUSAN RADIKAL ===== */}
      <Section tone="light">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-8 sm:p-10">
            <span className="pill-gold mb-4">
              <ShieldCheck className="h-3.5 w-3.5" /> Ketelusan Radikal
            </span>
            <h2 className="h-2 text-foreground">Kami Memaparkan Setiap Hit dan Setiap Miss</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tiada model AI yang sempurna, dan loteri sentiasa melibatkan unsur rawak yang
              signifikan. Sebab itu kami memaparkan rekod prestasi sebenar kami secara terbuka —
              termasuk ramalan yang tersasar. Bagi {SITE.name}, ketelusan bukan satu pilihan
              pemasaran tetapi satu prinsip teras. Semua keputusan boleh disahkan terhadap keputusan
              rasmi pengendali, tanpa sebarang tapisan.
            </p>
            <div className="mt-6">
              <Link href="/ketepatan-carta-ramalan-4d" className="btn-gold">
                <LineChart className="h-4 w-4" /> Lihat Rekod Ketepatan Telus
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== PASUKAN PAKAR ===== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Pasukan Pakar"
          title="Diterajui Saintis & Penyelidik Sebenar"
          description="Pasukan kami menggabungkan kepakaran daripada NVIDIA, universiti terkemuka dunia, dan penyelidik PhD dalam AI serta statistik gunaan."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teaserExperts.map((expert) => (
            <article key={expert.name} className="glass-card glass-hover flex h-full flex-col p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest-900 to-forest-700 text-base font-bold text-gold-300">
                  {expert.initials}
                </span>
                <div>
                  <p className="font-poppins text-base font-bold text-foreground">{expert.name}</p>
                  <p className="text-xs text-muted-foreground">{expert.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                {expert.bio}
              </p>
              <p className="mt-4 border-t border-border/60 pt-3 text-xs font-semibold uppercase tracking-wider text-forest-700 dark:text-forest-300">
                {expert.org}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/pakar-datochai" className="btn-forest">
            Kenali Semua Pakar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ===== FINAL CTA BAND ===== */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-white">
        <div className="container-custom py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="pill border border-gold-500/40 bg-white/5 text-gold-200">
              Mula Sekarang
            </span>
            <h2 className="mt-4 h-2 text-white">
              Bersedia Untuk Melihat Carta Ramalan Saintifik?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200/90">
              Terokai carta ramalan 4D kami yang dijana oleh enjin ensemble hibrid — telus, boleh
              disahkan, dan dikemas kini sebelum setiap cabutan rasmi.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={`/${primaryMarket.slug}`} className="btn-gold">
                Lihat Ramalan {primaryMarket.shortName} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/metodologi-ramalan-4d"
                className="btn-gold-outline border-gold-300/60 text-gold-100 hover:bg-white/10"
              >
                Baca Metodologi Penuh
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
