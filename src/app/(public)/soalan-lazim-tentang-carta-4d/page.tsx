import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, MessageCircleQuestion, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeader } from '@/components/ui/section';
import { FaqAccordion, type FaqItem } from '@/components/ui/faq-accordion';
import { GENERAL_FAQ } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Soalan Lazim Tentang Carta 4D | DatoChai',
  description:
    'Jawapan kepada soalan lazim tentang carta ramalan 4D DatoChai — nombor panas, sejuk dan tertunggak, cara model LSTM berfungsi, jadual cabutan setiap pasaran, sumber data, dan permainan bertanggungjawab.',
};

/** Kategori 1 — Umum: bermula dengan 4 item GENERAL_FAQ, ditambah soalan operasi am. */
const FAQ_UMUM: FaqItem[] = [
  ...GENERAL_FAQ,
  {
    q: 'Adakah perkhidmatan carta ramalan 4D ini percuma?',
    a: 'Ya. Kami di DatoChai percaya dalam mendemokrasikan data. Ramalan teras harian bagi setiap pasaran disediakan secara percuma untuk awam. Laman web ini disokong oleh pengiklanan web yang tidak mengganggu — anda tidak perlu mendaftar akaun berbayar untuk melihat carta ramalan.',
  },
  {
    q: 'Bahasa apakah yang disokong oleh platform DatoChai?',
    a: 'Antara muka dan kandungan utama kami diterbitkan dalam Bahasa Melayu sebagai bahasa pengantar utama, lengkap dengan istilah teknikal Inggeris yang lazim digunakan oleh komuniti analisis 4D di Malaysia (seperti Hot Numbers, Cold Numbers dan LSTM) supaya mudah difahami merentas pelbagai latar pengguna.',
  },
  {
    q: 'Pasaran 4D yang manakah diliputi oleh DatoChai?',
    a: 'Kami menyediakan carta ramalan untuk Magnum 4D, Sports Toto 4D, Da Ma Cai 1+3D (Kuda), Perdana 4D, 9 Lotto 4D, Grand Dragon Lotto (GDL), Singapore Pools 6D, 4D Sabah 88, Sarawak Cash Sweep dan 4D STC — meliputi operator Semenanjung, pasaran serantau East Malaysia dan platform antarabangsa berfrekuensi tinggi.',
  },
];

/** Kategori 2 — Metodologi: konsep nombor, LSTM, jadual cabutan, sumber data, perbezaan. */
const FAQ_METODOLOGI: FaqItem[] = [
  {
    q: 'Apa itu nombor panas, sejuk dan tertunggak?',
    a: (
      <>
        Enjin kami mengelaskan setiap digit kepada tiga kategori dinamik. Nombor{' '}
        <strong>panas (hot)</strong> ialah angka yang sedang menunggang varians positif melampau —
        kerap muncul dalam tingkap 30 cabutan terakhir. Nombor <strong>sejuk (cold)</strong> pula
        ialah angka yang sejarah kekerapannya telah jatuh jauh di bawah purata biasa. Nombor{' '}
        <strong>tertunggak (overdue)</strong> ialah angka sejuk yang berdepan tekanan statistik untuk
        membuat pembetulan min (mean reversion) kembali ke frekuensi asalnya, berpandukan Hukum Nombor
        Besar (Law of Large Numbers).
      </>
    ),
  },
  {
    q: 'Bagaimana model LSTM berfungsi dalam ramalan ini?',
    a: 'LSTM (Long Short-Term Memory) ialah rangkaian neural yang direka khusus untuk data berjujukan. Ia menjejak pergantungan corak berurutan jangka panjang yang berada di luar jangkauan analisis manusia, sambil mengelak isu kecerunan lenyap (vanishing gradient) menerusi mekanisme get ingatannya. Di DatoChai, LSTM dilatih ke atas lebih sedekad data sejarah cabutan untuk mengekstrak isyarat corak tulen daripada hingar data yang tidak konsisten.',
  },
  {
    q: 'Bagaimana carta ramalan harian dijana oleh DatoChai?',
    a: 'Carta dijana menggunakan kluster Kecerdasan Buatan (AI) yang menggabungkan model LSTM Deep Learning, algoritma pemodelan siri masa (Time-Series Forecasting seperti ARIMA dan Meta Prophet), serta imbasan pangkalan data historikal yang mengandungi rekod 10+ tahun. Komponen statistik mengasingkan trend makro linear sebelum baki sisa non-linear dirungkai oleh LSTM. Semakan kualiti akhir dilakukan oleh pakar manusia kami sebelum setiap barisan angka diterbitkan.',
  },
  {
    q: 'Bilakah jadual cabutan bagi setiap pasaran?',
    a: (
      <>
        Pasaran Semenanjung — Magnum 4D, Sports Toto 4D dan Da Ma Cai (Kuda) — bercabut pada{' '}
        <strong>Rabu, Sabtu &amp; Ahad</strong>, sama seperti Singapore Pools, Sabah 88, Sarawak Cash
        Sweep dan STC. Pasaran antarabangsa berfrekuensi tinggi seperti Perdana 4D, 9 Lotto 4D dan
        Grand Dragon Lotto pula bercabut <strong>setiap hari</strong>. Carta ramalan dikemas kini
        secara automatik sebelum setiap cabutan apabila data terkini diserap ke pelayan kami.
      </>
    ),
  },
  {
    q: 'Apakah sumber data yang digunakan untuk melatih model?',
    a: 'Model kami dilatih ke atas lejar data sejarah keputusan cabutan rasmi yang melebihi sedekad bagi setiap pasaran. Data ini dibersihkan, dinormalisasi (z-score) dan disahkan terhadap keputusan rasmi pengendali sebelum disuap ke nodus AI. Selepas setiap keputusan rasmi dikeluarkan, sistem menyerap data terbaharu tersebut untuk melatih semula pangkalan data (retraining phase) bagi sesi cabutan berikutnya.',
  },
  {
    q: 'Apakah yang membezakan DatoChai dengan platform ramalan lain?',
    a: 'Berbeza dengan platform tekaan rawak, setiap angka pada carta kami terbit daripada proses saintifik berlapis — pengekstrakan data sejarah, penapisan statistik, pemodelan Deep Learning, dan validasi pakar manusia. Lebih penting lagi, kami memaparkan rekod hit dan miss secara telus 100% di halaman Ketepatan tanpa sebarang tapisan. Kami mengoptimumkan ruang kebarangkalian dan mengurangkan saiz jurang risiko, bukan menjual jaminan kemenangan.',
  },
];

/** Kategori 3 — Etika & Sokongan: status rawak, mengapa silap, permainan bertanggungjawab. */
const FAQ_ETIKA: FaqItem[] = [
  {
    q: 'Adakah metodologi ini membatalkan status rawak loteri?',
    a: 'Sama sekali tidak. Sistem mekanikal cabutan kekal sebagai entiti rawak stokastik sepenuhnya. Misi perkomputeran hibrid kami adalah untuk mengurangkan saiz jurang risiko (risk reduction) dengan mengenal pasti rentetan yang secara statistik amat mustahil ditarik keluar, berbanding mendedahkan diri kepada belian membuta tuli. Kami mengoptimumkan ruang kebarangkalian — kami tidak menyihir mesin untuk memberikan jaminan kepastian.',
  },
  {
    q: 'Mengapa ada ramalan yang tidak tepat?',
    a: 'Ramalan yang tidak tepat adalah sebahagian daripada realiti mana-mana model ramalan. Tiada model AI yang sempurna, dan loteri melibatkan unsur rawak yang signifikan dan bebas. Kami memaparkan ramalan yang tidak tepat sebagai bukti ketelusan, bukan sebagai kelemahan, supaya anda dapat menilai prestasi sebenar algoritma kami secara jujur.',
  },
  {
    q: 'Bagaimana DatoChai menyokong permainan bertanggungjawab?',
    a: (
      <>
        Kami memandang serius isu ketagihan pertaruhan. Platform ini bertujuan semata-mata untuk
        simulasi akademik, pembelajaran data statistik dan hiburan peribadi (Umur 18+ sahaja). Jangan
        sekali-kali mempertaruhkan wang pendahuluan, simpanan kritikal atau peruntukan asas keluarga.
        Jika anda atau orang tersayang memerlukan bantuan, hubungi Befrienders atau Talian HEAL KKM —
        lihat panduan penuh kami di{' '}
        <Link href="/permainan-bertanggungjawab">Permainan Bertanggungjawab</Link>.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        tone="brand"
        eyebrow="Soalan Lazim"
        title="Soalan Lazim Tentang Carta Ramalan 4D"
        subtitle="Jawapan jujur kepada pertanyaan paling lazim tentang cara carta ramalan 4D DatoChai dijana, makna nombor panas, sejuk dan tertunggak, jadual cabutan setiap pasaran, sumber data, serta komitmen kami terhadap permainan bertanggungjawab."
        crumbs={[{ label: 'Soalan Lazim' }]}
      />

      {/* ===== KATEGORI 1 — UMUM ===== */}
      <Section tone="white" id="umum">
        <SectionHeader
          eyebrow="Umum"
          title="Asas Platform & Perkhidmatan"
          description="Perkara penting yang perlu anda tahu sebelum menggunakan carta ramalan kami."
          align="left"
        />
        <div className="max-w-3xl">
          <FaqAccordion items={FAQ_UMUM} defaultOpen={0} />
        </div>
      </Section>

      {/* ===== KATEGORI 2 — METODOLOGI ===== */}
      <Section tone="light" id="metodologi">
        <SectionHeader
          eyebrow="Metodologi"
          title="Bagaimana Kami Meramal"
          description="Sains data, rangkaian neural LSTM, dan sumber data di sebalik setiap carta ramalan."
          align="left"
        />
        <div className="max-w-3xl">
          <FaqAccordion items={FAQ_METODOLOGI} defaultOpen={null} />
        </div>
      </Section>

      {/* ===== KATEGORI 3 — ETIKA & SOKONGAN ===== */}
      <Section tone="white" id="etika-sokongan">
        <SectionHeader
          eyebrow="Etika & Sokongan"
          title="Ketelusan & Permainan Bertanggungjawab"
          description="Komitmen etika kami terhadap ketelusan, sifat rawak loteri, dan kesejahteraan pengguna."
          align="left"
        />
        <div className="max-w-3xl">
          <FaqAccordion items={FAQ_ETIKA} defaultOpen={null} />
        </div>
      </Section>

      {/* ===== TRUST STRIP ===== */}
      <Section tone="light" className="py-10 sm:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Ketelusan 100%',
              body: 'Setiap rekod hit dan miss dipaparkan tanpa tapisan di halaman Ketepatan.',
            },
            {
              icon: BrainCircuit,
              title: 'Disahkan Pakar',
              body: 'Algoritma ditentukur oleh penyelidik AI, profesor statistik dan jurutera NVIDIA.',
            },
            {
              icon: MessageCircleQuestion,
              title: 'Sokongan Mesra',
              body: 'Pasukan kami sedia menjawab pertanyaan anda dengan tepat, jelas dan mesra.',
            },
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
      </Section>

      {/* ===== CTA — MASIH ADA SOALAN? ===== */}
      <Section tone="white" className="pb-16 pt-0 sm:pb-20">
        <div className="glass-card glass-strong mx-auto max-w-3xl overflow-hidden p-8 text-center sm:p-10">
          <span className="pill-gold mx-auto mb-4">
            <MessageCircleQuestion className="h-3.5 w-3.5" /> Masih Buntu?
          </span>
          <h2 className="h-2 text-foreground">Masih ada soalan? Hubungi kami</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Tidak menemui jawapan yang anda cari di sini? Pasukan sokongan DatoChai sedia membantu
            dengan respons yang tepat, jelas dan mesra. Hantar mesej kepada kami dan kami akan
            menghubungi anda secepat mungkin.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/hubungi" className="btn-gold">
              Hubungi Kami <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/metodologi-ramalan-4d" className="btn-ghost">
              Baca Metodologi Penuh
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
