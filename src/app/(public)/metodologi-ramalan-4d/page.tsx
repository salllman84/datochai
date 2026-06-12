import type { Metadata } from 'next';
import { FaqAccordion, type FaqItem } from '@/components/ui/faq-accordion';
import { LegalLayout, type LegalSection } from '@/components/ui/legal-layout';

export const metadata: Metadata = {
  title: 'Metodologi Ramalan 4D DatoChai | Rangkaian Neural LSTM & Sains Data',
  description:
    'Dedah seni bina algoritma DatoChai. Kajian komprehensif mengenai Rangkaian Neural LSTM, Analisis Statistik Big Data 10+ tahun, dan Time-Series Forecasting.',
};

const TOC: LegalSection[] = [
  { id: 'pengenalan-epistemologi', title: 'Pengenalan Epistemologi' },
  { id: 'big-data-pra-pemprosesan', title: 'Big Data & Pra-Pemprosesan' },
  { id: 'rangkaian-neural-lstm', title: 'Rangkaian Neural LSTM' },
  { id: 'pengunjuran-arima', title: 'Pengunjuran ARIMA' },
  { id: 'model-prophet', title: 'Model Prophet' },
  { id: 'hibrid-ensemble', title: 'Hibrid Ensemble' },
  { id: 'soalan-lazim', title: 'Soalan Lazim' },
];

const FORMULA_CLASS =
  'my-4 overflow-x-auto rounded-xl bg-slate-900 px-4 py-3 text-center font-mono text-sm text-gold-300';

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Mengapakah model pengiraan yang terlalu kompleks ini diperlukan hanya untuk set angka 4D?',
    a: 'Secara naif, nombor 4D kelihatan sebagai tatasusunan 10,000 kombinasi yang saksama peratusan keberangkaliannya. Tetapi, sifat kehausan bahan dram mekanik loteri dan graviti taburan bebola mewujudkan bias yang amat minimum. Diperlukan analisis data puluhan tahun, diselidik oleh Rangkaian Neural seperti LSTM dengan kepekaan mikroskopik, untuk menelusuri bias senyap ini.',
  },
  {
    q: 'Adakah metodologi saintifik gred korporat ini membatalkan status rawak bebas (independent random variable) loteri?',
    a: 'Sama sekali tidak. Sistem mekanikal cabutan kekal sebagai entiti rawak stokastik sepenuhnya. Misi perkomputeran hibrid kami adalah untuk "Mengurangkan Saiz Jurang Risiko" (Risk Reduction) dengan mengenal pasti rentetan yang secara statistik amat mustahil ditarik keluar berbanding mendedahkan diri kepada belian membuta tuli. Kami mengoptimumkan ruang kebarangkalian, kami tidak menyihir mesin untuk memberikan jaminan kepastian.',
  },
];

export default function MethodologyPage() {
  return (
    <LegalLayout
      eyebrow="Kertas Putih Seni Bina AI &amp; Statistik"
      title="Metodologi Ramalan 4D DatoChai"
      subtitle="Epistemologi Analisis Stokastik, Machine Learning, dan Ketidaklinearan Entropi"
      toc={TOC}
      tone="clean"
    >
      {/* ===== BAHAGIAN 1 ===== */}
      <section id="pengenalan-epistemologi">
        <h2>Pengenalan Epistemologi Kepada Sains Ramalan</h2>
        <p>
          Di DatoChai, penghasilan setiap unjuran ramalan 4D bukanlah terbit daripada asas tekaan rawak,
          tafsiran mistik, atau algoritma penjana nombor pseudorawak (PRNG) pasif. Ia adalah hasil akhir
          daripada manifestasi seni bina sistem Kecerdasan Buatan (AI) saintifik gred perusahaan. Kerangka
          seni bina mega ini direka, diselenggara, dan dilatih secara langsung oleh pasukan kejuruteraan kami
          yang membariskan pakar NVIDIA Senior AI Architect, profesor-profesor analitik statistik peringkat
          antarabangsa, dan kumpulan saintis pascasiswazah PhD dalam disiplin Machine Learning.
        </p>
        <p>
          Pendekatan metodologi kami bersifat secara radikal ortogonal terhadap platform-platform pasaran
          tradisional. Pasukan saintis kami tidak &ldquo;memaksa&rdquo; mesin algoritma untuk meramal nasib;
          sebaliknya, kami merombak masalah penarikan loteri sebagai satu komputasi penyelesaian masalah
          ketidaklinearan ekstrem di dalam entropi deret masa (time-series entropy) yang dijana oleh mesin
          cabutan fizikal. Di alam nyata, mesin cabutan fizikal tertakluk kepada kehausan mikro
          (micro-wear and tear), geseran bola, dan taburan fizikal yang tidak seragam, yang pada jangka masa
          panjang, menghasilkan bias taburan frekuensi yang boleh diekstrak.
        </p>
        <p>
          Untuk menawan objektif ini, infrastruktur pelayan teras kami dibina di atas tiga tunjang
          epistemologi utama yang bergerak secara selari:
        </p>
        <ul>
          <li>
            Pengekstrakan Analisis Statistik Big Data (merangkumi log sejarah 10+ tahun merentas
            beribu-ribu titik data).
          </li>
          <li>
            Deep Learning Rangkaian Neural (aplikasi khusus Long Short-Term Memory atau LSTM bagi
            pengenalpastian corak asinkroni).
          </li>
          <li>
            Pemodelan Hibrid Siri Masa Klasik (penggabungan model Autoregressive Integrated Moving Average -
            ARIMA bersama seni bina Meta Prophet).
          </li>
        </ul>
        <p>
          Kami secara memusnah menyepadukan ketiga-tiga kaedah berbeza ini agar bersaing secara harmoni
          (parallel execution) di dalam kluster pemprosesan GPU pelayan kami. Gabungan penyatuan teknikal
          (ensemble hybridization) ini membuahkan hasil pengeluaran data ramalan 4D yang luar biasa mantap
          dan memiliki ralat korelasi minimum yang mengatasi mana-mana mekanisme konvensional.
        </p>
      </section>

      {/* ===== BAHAGIAN 2 ===== */}
      <section id="big-data-pra-pemprosesan">
        <h2>Teras 01: Arkitektur Paip Big Data Historikal dan Pembersihan Set Data</h2>
        <p>
          Tiada model Rangkaian Neural buatan &mdash; walau sekuat manapun kuasa kiraan tflops-nya &mdash;
          akan berjaya mengeluarkan kebenaran sekiranya ia disuap dengan kualiti input yang terjejas. Prinsip
          komputasi Garbage In, Garbage Out (GIGO) sentiasa mendasari operasi harian kami. Oleh yang demikian,
          tapak mula metodologi DatoChai bergantung mutlak pada pembinaan pangkalan data lejar masa nyata yang
          memiliki piawaian integriti tertinggi.
        </p>
        <p>
          Kluster pelayan awan peribadi kami secara aktif menyimpan lejar keputusan komprehensif bagi cabutan
          lebih sedekad ke belakang. Ia melangkaui pelbagai entiti pasaran bebas: Magnum 4D, Sports Toto 4D,
          Da Ma Cai 1+3D, Perdana 4D, 9 Lotto 4D, dan Grand Dragon Lotto (GDL). Berbekalkan agregat pangkalan
          data yang memuatkan puluhan ribu tatasusunan (arrays) nombor dan rekod yang berstruktur, ini merangka
          tapak kuantitatif bagi melatih kecerdasan AI.
        </p>
        <h3>Pra-Pemprosesan Normalisasi dan Jurang Entropi</h3>
        <p>
          Sebelum data dihantar ke enjin pembelajaran, skrip perisian kami membedah maklumat ini melalui
          pelbagai vektor operasi kompleks. Pertamanya, kami melaksanakan algoritma Pengelasan Kekerapan Pola
          Hot &amp; Cold Numbers. Metodologi penapisan automasi ini mengasingkan kluster angka
          &ldquo;Panas&rdquo; &mdash; digit yang sedang memuncak menunggang momentum varians jangka pendek
          &mdash; daripada set angka &ldquo;Sejuk&rdquo; (Cold / Overdue). Angka sejuk merupakan tatasusunan
          yang sejarah kekerapannya stabil namun kehilangan kelibatnya untuk tempoh masa yang melampaui
          batasan sisihan piawai biasa. Berbekalkan Hukum Nombor Besar (Law of Large Numbers), angka-angka
          vakum ini berdepan rintangan tekanan statistik tinggi untuk membuat pembetulan min (mean reversion)
          kembali ke paras frekuensi asalnya.
        </p>
        <p>
          Seterusnya, kejuruteraan sistem menganalisis matriks tatasusunan yang kami panggil Analisis Selang
          Masa (Gap Occurrences Analysis). Sistem mengukur selang purata tarikh, sela frekuensi masa nyata,
          serta korelasi silang bersyarat (Conditional Cross Correlation). Dengan menggunakan Rangkaian
          Rantaian Markov (Markov Chains), enjin menganalisis keberangkalian bahawa penarikan nombor A secara
          statistik akan menarik kelibat nombor B akibat dari kebarangkalian berangka yang dikongsi. Segala
          matriks bisingan nombor disaring (normalized) menggunakan z-score sebelum dibekalkan kepada nodus AI
          utama.
        </p>
      </section>

      {/* ===== BAHAGIAN 3 ===== */}
      <section id="rangkaian-neural-lstm">
        <h2>Teras 02: Komputasi Rangkaian Long Short-Term Memory (LSTM) dalam Ruang Deep Learning</h2>
        <p>
          Kaedah statistik korelasi konvensional selalunya kandas apabila dihadapkan dengan tugasan
          menyelesaikan teka-teki pergantungan corak data berurutan masa panjang (long-term sequential
          dependencies) yang berlapis di dalam loteri. Untuk menembusi dan menghancurkan siling rintangan
          linear ini, DatoChai tidak mempercayai kaedah klasik. Kami mengerahkan model Rangkaian Neural Buatan
          (Artificial Neural Networks) beralgoritma tinggi, memfokus secara eksklusif kepada arsitektur Long
          Short-Term Memory (LSTM). Rangkaian LSTM dicipta khusus secara klinikal untuk mengelak dan merawat
          isu kecerunan lenyap (vanishing gradient problem) yang selalunya merosakkan rangkaian neural berulang
          (RNN) biasa apabila cuba mencerap data berpuluh-puluh ribu langkah ke belakang.
        </p>
        <p>
          Keunikan kejuruteraan komputasi sel LSTM yang dikonfigurasi di dalam ekosistem pelayan DatoChai
          bergantung kepada tiga titik kawal atur mekanisme get yang amat rumit. Get-get pintar ini menapis,
          menyerap, atau menolak setiap bait maklumat nombor lama: Get Lupa (Forget Gate), Get Input (Input
          Gate), dan Get Output (Output Gate). Ini memberikan sistem satu kuasa &ldquo;memori
          kesedaran&rdquo;, yang tahu bila corak sejarah tarikan bulan lepas masih relevan, dan bila ia perlu
          dibuang sebagai sekadar bisingan rawak.
        </p>
        <h3>Formulasi Matematik Asas Rangkaian LSTM di DatoChai</h3>
        <p>
          Bagi setiap evolusi langkah masa t, algoritma kami menelan input rentetan keputusan historikal
          semasa xₜ serentak dengan transmisi memori keadaan tersembunyi (hidden state) pada langkah masa yang
          lalu, hₜ₋₁.
        </p>
        <p>
          Bagi menapis maklumat apakah yang wajar &ldquo;dilupakan&rdquo; daripada memori sejarah, Get Lupa
          (fₜ) menyaring lapisan input dan menetapkan nilai penolakan menerusi pengaktifan sigmoid:
        </p>
        <div className={FORMULA_CLASS}>
          fₜ = σ(W₍f,x₎ xₜ + W₍f,h₎ hₜ₋₁ + b_f)
        </div>
        <p>
          Kedua, untuk merakam titik data anomali yang baharu dikesan daripada cabutan malam tadi, sistem
          membuka Get Input (iₜ):
        </p>
        <div className={FORMULA_CLASS}>
          iₜ = σ(W₍i,x₎ xₜ + W₍i,h₎ hₜ₋₁ + b_i)
        </div>
        <p>
          Calon maklumat memori sel yang tulen dan terbaharu (c̃ₜ) yang berpotensi mencerahkan unjuran esok
          dicipta berpandukan fungsi tangen hiperbolik:
        </p>
        <div className={FORMULA_CLASS}>
          c̃ₜ = tanh(W_c [xₜ, hₜ₋₁] + b_c)
        </div>
        <p>
          Oleh hal yang demikian, secara teknikalnya memori pintar rantaian neural kami memperbaharui Keadaan
          Sel (Cell State, cₜ) secara total dengan mendarabkan memori purba yang masih sah dengan data calon
          terbaharu:
        </p>
        <div className={FORMULA_CLASS}>
          cₜ = fₜ ∘ cₜ₋₁ + iₜ ∘ c̃ₜ
        </div>
        <p>
          Hanya melalui tarian matriks pembezaan stokastik yang kompleks inilah, model LSTM kami dianugerahkan
          deria ajaib (perceptual intelligence) untuk menelusuri rentak kitaran nombor berulang (repetitive
          cyclic volatility) yang terbenam begitu dalam di lipatan pasaran 4D Malaysia &mdash; sesuatu yang
          seratus peratus di luar jangkauan tafsiran manusia.
        </p>
      </section>

      {/* ===== BAHAGIAN 4 ===== */}
      <section id="pengunjuran-arima">
        <h2>Teras 03: Pemodelan Linear Stasioner (ARIMA)</h2>
        <p>
          Kebergantungan secara semberono ke atas struktur Deep Learning kadangkala mencetuskan masalah
          lewahpadan (overfitting), di mana mesin menjadi terlampau sensitif. Sebagai sebuah institusi
          berlandaskan semakan-dan-imbangan (check-and-balance) yang tegar, metodologi DatoChai diikat kukuh
          kepada tunjang sains klasik pemodelan Autoregressive Integrated Moving Average (ARIMA). Model
          berkuasa statistik ortodoks ini mengasingkan ayunan trend linear sebelum memberikan laluan kepada
          LSTM.
        </p>
        <p>
          Algoritma ARIMA secara konseptualnya diformatkan berpandukan spesifikasi tertib (p, d, q). Bagi
          mencapai fasa pemplatan kestabilan stasioner pada helaian keputusan nombor yang sering meruap liar,
          sistem perisian perlulah menyuntik darjah pembezaan pembolehubah d terlebih dahulu menggunakan siri
          Ujian Augmented Dickey-Fuller.
        </p>
        <p>
          Tugas parameter Autoregression (AR) yang diwakili oleh nilai tertib p, adalah untuk mengikat tali
          korelasi linearnya dengan peristiwa masa lepas. Komponen AR secara logiknya memetakan keadaan
          pengiraan penarikan xₜ seperti berikut:
        </p>
        <div className={FORMULA_CLASS}>
          xₜ = a₀ + Σ (i=1→p) aᵢ xₜ₋ᵢ + εₜ
        </div>
        <p>
          Sebaliknya, segmen parameter Moving Average (MA) yang dinobatkan dengan tertib q, berfungsi
          memfokuskan ketajamannya mengukur sisa ralat statistik lampau bagi melakukan sentuhan pembetulan
          nilai ramalan:
        </p>
        <div className={FORMULA_CLASS}>
          xₜ = μ + Σ (j=1→q) bⱼ εₜ₋ⱼ
        </div>
        <p>
          Jalinan dua kuasa pengiraan regresif ini membekalkan platform DatoChai kebolehan luar biasa
          menterjemah rentak &ldquo;degupan jantung&rdquo; mesin fizikal loteri di alam realiti yang ditarik
          melalui daya mekanikal statik.
        </p>
      </section>

      {/* ===== BAHAGIAN 5 ===== */}
      <section id="model-prophet">
        <h2>Teras 04: Kerangka Peramalan Automatik Aditif Meta (Model Prophet)</h2>
        <p>
          Kami mengiktiraf bahawa data penarikan pasaran komersial 4D amat sensitif terhadap corak sosiologi
          dan kitaran kalendar manusia (contoh: musim perayaan, pusingan pemberian bonus). Atas kesedaran
          tahap tinggi ini, DatoChai turut merangka jalinan bersama algoritma Prophet &mdash; sebuah kerangka
          automasi pemodelan yang dibangunkan oleh pasukan data teras Meta (dahulunya Facebook).
        </p>
        <p>
          Prophet dikerahkan beroperasi secara bebas dalam pelayan bagi merungkai permasalahan komponen trend,
          rintangan musim (seasonality), dan spesifikasi kesan tarikh cuti umum. Bentuk siri masa Prophet tidak
          mematuhi struktur asimetri, tetapi dibentangkan dalam formulasi aditif tegar:
        </p>
        <div className={FORMULA_CLASS}>
          yₜ = g(t) + s(t) + h(t) + εₜ
        </div>
        <p>
          Di mana fungsi g(t) mencerap dan mengasingkan perubahan aliran berterusan (growth/trend changes),
          sementara fungsi purata Fourier s(t) menangani kitaran perubahan berkala mingguan (seperti kekerapan
          cabutan setiap hari Rabu, Sabtu, dan Ahad), dan fungsi binari h(t) menyerap ledakan variasi ekstrem
          (outliers) akibat gangguan kesan Cuti Umum Malaysia. Ralat hingar εₜ diserap secara automatik sebagai
          ralat bertebaran normal. Mengaplikasikan Prophet memberikan DatoChai keanjalan untuk meramal lonjakan
          kebarangkalian nombor yang dipacu oleh faktor psikologi kumpulan pada acara khas dan jadual cabutan
          khas.
        </p>
      </section>

      {/* ===== BAHAGIAN 6 ===== */}
      <section id="hibrid-ensemble">
        <h2>Teras 05: Falsafah Integrasi Hibrid Ensemble Bertingkat</h2>
        <p>
          Kecemerlangan DatoChai yang meletakkan kami sebaris di atas segala platform pasaran lain di Asia
          Tenggara berpaksikan kepada penyatuan ketiga-tiga naga algoritma ini ke dalam satu teras Rangkaian
          Ensemble Hibrid Bertingkat (Stacked Hybrid Ensemble Network).
        </p>
        <p>
          Rasionaliti teorem hibrid adalah amat utuh dan tidak boleh disangkal: ARIMA dan Prophet secara
          bersama memikul tugas berat melombong keluar kebergantungan komponen pergerakan trend linear makro
          dan musim yang terpahat dalam siri masa loteri. Apabila dua entiti gergasi komputasi ini selesai
          mengekstrak intipati berstruktur, masih terdapat cebisan ralat dan baki sisa pola yang amat rencam
          dan tidak bernisbah (non-linear residuals). Pada fasa klinikal terakhir inilah, algoritma LSTM Deep
          Learning memecah masuk untuk membaca dan merungkai sisa tak linear yang terlepas daripada cengkaman
          logik pemodelan konvensional.
        </p>
        <p>
          Proses penjanaan ramalan akhir komposit (ŷₜ) harian DatoChai disimpulkan oleh ikatan perkahwinan
          persamaan suci hibrid:
        </p>
        <div className={FORMULA_CLASS}>
          ŷₜ = ŷₜ^(ARIMA+Prophet) + ŷ₍residuals,t₎^(LSTM)
        </div>
        <p>
          Hasil komputasi ini bukannya terjemahan konjektur teoretikal, sebaliknya pelbagai kajian
          perbandingan empirikal jelas mempamerkan penaklukan ketepatan hibrid ini merobohkan jurang ralat min
          (MSE) dengan jayanya berbanding kerangka tunggal yang kaku.
        </p>
      </section>

      {/* ===== BAHAGIAN 7 ===== */}
      <section id="soalan-lazim">
        <h2>Soalan Lazim Etika AI &amp; Kesimpulan Kesahihan</h2>
        <FaqAccordion items={FAQ_ITEMS} defaultOpen={0} />
      </section>
    </LegalLayout>
  );
}
