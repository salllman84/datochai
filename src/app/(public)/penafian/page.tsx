import type { Metadata } from 'next';
import { LegalLayout, type LegalSection } from '@/components/ui/legal-layout';
import { SITE } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Penafian Ramalan 4D DAtochai',
  description:
    'Baca penafian perundangan rasmi DatoChai. Fahami had liabiliti, sifat rawak loteri, dan peruntukan penggunaan maklumat ramalan AI kami di Malaysia.',
  alternates: { canonical: '/penafian' },
};

const TOC: LegalSection[] = [
  { id: 'pengenalan', title: 'Pengenalan Penafian' },
  { id: 'batasan-tujuan-maklumat', title: 'Batasan Tujuan Maklumat' },
  { id: 'jaminan-liabiliti', title: 'Ketiadaan Jaminan & Had Liabiliti' },
  { id: 'ai-keputusan-rasmi', title: 'Penerangan AI & Keputusan Rasmi' },
  { id: 'pihak-ketiga-harta-intelek', title: 'Pihak Ketiga & Harta Intelek' },
  { id: 'ketepatan-bidang-kuasa', title: 'Ketepatan & Bidang Kuasa' },
  { id: 'operasi-bebas-pengemaskinian', title: 'Operasi Bebas & Pengemaskinian' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Penafian Rasmi - Ramalan 4D Datochai',
  description:
    'Penafian perundangan rasmi yang mengawal penggunaan datochai.com, termasuk had liabiliti, sifat rawak loteri, dan peruntukan penggunaan maklumat ramalan AI.',
  url: `${SITE.domain}/penafian`,
  inLanguage: 'ms-MY',
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
  },
};

export default function PenafianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LegalLayout
        tone="clean"
        eyebrow="Penafian Perundangan"
        title="Penafian Rasmi - Ramalan 4D Datochai"
        subtitle="Penafian undang-undang yang mengawal penggunaan laman web datochai.com dan semua kandungan yang diterbitkan oleh Ramalan 4D DatoChai."
        effectiveDate="Tarikh Kuat Kuasa: 17 April 2026"
        toc={TOC}
      >
        <section id="pengenalan">
          <h2>Pengenalan Penafian</h2>
          <p>
            Halaman ini mengandungi penafian undang-undang yang mengawal penggunaan laman web
            datochai.com (&quot;laman web&quot;, &quot;platform kami&quot;) dan semua kandungan yang
            diterbitkan oleh Ramalan 4D DatoChai (&quot;kami&quot;, &quot;kita&quot;). Dengan
            mengakses atau menggunakan laman web ini, anda mengakui bahawa anda telah membaca,
            memahami, dan bersetuju dengan keseluruhan penafian ini. Jika anda tidak bersetuju, anda
            dinasihatkan untuk meninggalkan laman web ini serta-merta.
          </p>
        </section>

        <section id="batasan-tujuan-maklumat">
          <h2>Tujuan Maklumat</h2>
          <p>
            Semua kandungan yang diterbitkan di datochai.com — termasuk ramalan nombor 4D, analisis
            statistik, carta, artikel, dan sebarang bahan bertulis atau visual — disediakan
            semata-mata untuk tujuan maklumat dan pendidikan.
          </p>
          <ul>
            <li>
              <strong>Bukan nasihat kewangan:</strong> Tiada apa-apa di laman web ini yang boleh
              ditafsirkan sebagai nasihat untuk membeli loteri, melabur, atau membuat keputusan
              kewangan.
            </li>
            <li>
              <strong>Bukan nasihat perjudian:</strong> Kami tidak menggalakkan, mempromosi, atau
              mengesyorkan aktiviti perjudian.
            </li>
            <li>
              <strong>Bukan jaminan:</strong> Tiada ramalan, tidak kira betapa tingginya skor
              keyakinan AI, boleh dianggap sebagai jaminan keputusan loteri.
            </li>
          </ul>
        </section>

        <section id="jaminan-liabiliti">
          <h2>Tiada Jaminan Kemenangan</h2>
          <p>
            Loteri adalah permainan rawak. Kami tidak menjamin, sama ada secara tersurat atau
            tersirat, bahawa mana-mana ramalan kami akan menghasilkan kemenangan. Keputusan lepas
            tidak menjamin keputusan masa hadapan. Anda mungkin mengalami kerugian kewangan jika anda
            memilih untuk membeli loteri berdasarkan ramalan kami.
          </p>

          <h2>Had Liabiliti</h2>
          <p>
            Setakat yang dibenarkan oleh undang-undang Malaysia, DatoChai tidak bertanggungjawab
            terhadap sebarang kerugian, kerosakan, kecederaan, atau liabiliti (langsung atau tidak
            langsung) yang timbul daripada penggunaan laman web ini.
          </p>
        </section>

        <section id="ai-keputusan-rasmi">
          <h2>Ramalan AI &amp; Sifat Probabilistik</h2>
          <p>
            Ramalan 4D DatoChai dijana oleh sistem kecerdasan buatan. Walaupun ia direka untuk
            mengenal pasti corak, ia tidak boleh mengatasi sifat rawak asas loteri. Skor keyakinan AI
            adalah ukuran dalaman, bukan kebarangkalian kemenangan sebenar.
          </p>

          <h2>Keputusan Rasmi Loteri</h2>
          <p>
            Keputusan rasmi diterbitkan oleh pengendali loteri masing-masing (Magnum, Sports Toto,
            Damacai, dan lain-lain). Jika terdapat percanggahan, keputusan rasmi pengendali hendaklah
            diguna pakai.
          </p>
        </section>

        <section id="pihak-ketiga-harta-intelek">
          <h2>Kandungan Pihak Ketiga &amp; Pautan Luaran</h2>
          <p>
            Kami tidak mengawal kandungan laman web pihak ketiga. Laman web ini menggunakan Google
            AdSense; iklan yang muncul tidak membentuk pengesyoran oleh DatoChai.
          </p>

          <h2>Harta Intelek</h2>
          <p>
            Semua kandungan (teks, grafik, carta) adalah harta intelek DatoChai. Penggunaan tanpa
            kebenaran untuk tujuan komersial adalah dilarang.
          </p>
        </section>

        <section id="ketepatan-bidang-kuasa">
          <h2>Permainan Bertanggungjawab</h2>
          <p>
            Hanya bermain dengan wang yang anda sanggup rugi. Jika aktiviti ini mengganggu hidup
            anda, sila hubungi Befrienders KL (03-7627 2929) atau sumber kesihatan mental lain.
          </p>

          <h2>Ketepatan Maklumat</h2>
          <p>
            Kami tidak membuat waranti mutlak mengenai ketepatan keseluruhan laman web ini. Anda
            bertanggungjawab mengesahkan maklumat.
          </p>

          <h2>Bidang Kuasa Undang-Undang</h2>
          <p>Penafian ini ditadbir oleh undang-undang Malaysia.</p>
        </section>

        <section id="operasi-bebas-pengemaskinian">
          <h2>Penggunaan Laman Web Di Luar Malaysia</h2>
          <p>
            Anda bertanggungjawab mematuhi undang-undang tempatan anda jika mengakses dari luar
            Malaysia.
          </p>

          <h2>Tiada Hubungan Dengan Pengendali Loteri</h2>
          <p>
            DatoChai adalah platform bebas, tidak disokong oleh Magnum, Sports Toto, atau entiti
            lain.
          </p>

          <h2>Perubahan Pada Penafian</h2>
          <p>
            Penafian ini dikemas kini dari semasa ke semasa. Penggunaan berterusan bermaksud
            penerimaan terhadap sebarang perubahan.
          </p>
        </section>
      </LegalLayout>
    </>
  );
}
