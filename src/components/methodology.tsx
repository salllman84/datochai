import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { FaqAccordion } from '@/components/ui/faq-accordion';

const PILLARS = [
  {
    q: 'Saluran Paip Big Data & Pra-Pemprosesan',
    a: 'Pangkalan data lejar masa nyata menyimpan keputusan cabutan lebih sedekad merentas Magnum, Toto, Da Ma Cai, Perdana, 9 Lotto dan GDL. Setiap matriks bisingan dinormalisasi menggunakan z-score, dengan pengelasan Hot & Cold numbers dan analisis selang masa (Gap Occurrences) sebelum disuap ke nodus AI.',
  },
  {
    q: 'Deep Learning Rangkaian Neural LSTM',
    a: 'Rangkaian Long Short-Term Memory direka untuk mengatasi masalah vanishing gradient dan menjejak pergantungan corak berurutan jangka panjang. Tiga get pintar — Forget, Input dan Output Gate — menapis maklumat lama, memberikan sistem "memori kesedaran" terhadap kitaran nombor berulang.',
  },
  {
    q: 'Pemodelan Klasik ARIMA & Meta Prophet',
    a: 'ARIMA mengasingkan trend linear makro dan plateau stasioner (melalui Augmented Dickey-Fuller), manakala Meta Prophet menangani musim, kitaran kalendar dan kesan cuti umum melalui formulasi aditif y(t) = g(t) + s(t) + h(t) + ε.',
  },
  {
    q: 'Kesepakatan Hibrid Ensemble Bertingkat',
    a: 'ARIMA + Prophet mengekstrak kebergantungan makro-linear; baki sisa non-linear yang terlepas disalurkan ke lapisan LSTM. Ramalan komposit akhir ŷ = ŷ(ARIMA+Prophet) + ŷ(residuals, LSTM) merobohkan jurang ralat min (MSE) berbanding mana-mana kerangka tunggal.',
  },
  {
    q: 'Peranan Manusia & Mitos Kepastian',
    a: 'Pakar statistik dan jurutera AI menyelia, mentafsir dan memvalidasi output model. Penting difahami: tiada sistem boleh menjamin kepastian 100% — loteri kekal sebagai peristiwa rawak bebas. Kami mengoptimumkan ruang kebarangkalian, bukan menyihir jaminan.',
  },
];

export function Methodology() {
  return (
    <section className="bg-white dark:bg-slate-900/40">
      <div className="container-custom py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="pill-gold mx-auto mb-4">
              <BookOpen className="h-3.5 w-3.5" /> Kertas Putih Seni Bina AI
            </span>
            <h2 className="h-2 text-balance text-foreground">
              Metodologi Saintifik: Bagaimana Kami Meramalkan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Penghasilan setiap unjuran 4D bukan terbit daripada tekaan rawak atau penjana nombor
              pseudorawak (PRNG) pasif. Ia adalah hasil seni bina sistem AI gred perusahaan yang
              menyepadukan tiga tunjang epistemologi yang bergerak secara selari.
            </p>
          </div>

          <FaqAccordion items={PILLARS} defaultOpen={0} />

          <div className="mt-8 flex justify-center">
            <Link href="/metodologi-ramalan-4d" className="btn-forest">
              Baca Kertas Putih Penuh <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
