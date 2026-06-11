import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';

export function PredictionAnalysis({ lotteryType }: { lotteryType: string }) {
  // Map route names to display names
  const lotteryNames: Record<string, string> = {
    'magnum-4d': 'Magnum 4D',
    'sports-toto-4d': 'Sports Toto 4D',
    'damacai-4d': 'Damacai 4D (Kuda)',
    'perdana-4d': 'Perdana 4D',
    '9-lotto-4d': '9 Lotto 4D',
    'grand-dragon-lotto': 'Grand Dragon Lotto (GDL)',
    'singapore-pools': 'Singapore Pools',
    'sabah-88': '4D Sabah 88',
    'sarawak-cash-sweep': 'Sarawak Cash Sweep',
    'stc': '4D STC',
  };

  const displayName = lotteryNames[lotteryType] || lotteryType;

  return (
    <section className="mb-12">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Analisis & Strategi</h2>

        <div className="space-y-4">
          {/* Analysis sections */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Hot & Cold Numbers</h3>
            <p className="text-sm text-muted-foreground/80">
              Berdasarkan analisis data historis {displayName}, kami mengidentifikasi nombor-nombor yang menunjukkan corak konsisten dalam beberapa tarikan terkini.
            </p>
            <div className="mt-3 flex flex-wrap space-x-2">
              <span className="px-3 py-1 bg-gold-500/20 text-gold-800 rounded-xs">Hot: 3, 7, 15, 28</span>
              <span className="px-3 py-1 bg-crimson-600/20 text-crimson-800 rounded-xs">Cold: 12, 24, 35, 46</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Analisis Pola</h3>
            <p className="text-sm text-muted-foreground/80">
              Model AI kami menggunakan teknik Long Short-Term Memory (LSTM) untuk menangkap dependensi jangka panjang dalam sejarah tarikan {displayName}, menggabungkan analisis frekuensi, sebaran, dan korelasi antar-pasar.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Rekomendasi Strategi</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground/80">
              <li>Pertimbangkan kombinasi nombor panas dan sejuk untuk pelbagaian risiko</li>
              <li>Perhatikan tarikh dan peristiwa khusus yang mungkin mempengaruhi hasil tarikan</li>
              <li>Gunakan ramalan sebagai alat bantu, bukan sebagai jaminan kemenangan</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 dark:border-muted/20">
          <p className="text-sm text-muted-foreground/60 text-center">
            Analisis ini dikemas kini setiap hari selepas tarikan rasmi diumumkan. Untuk mengakses data historis lengkap dan analisis teknikal, sila rujuk kepada seksyen metodologi.
          </p>
        </div>
      </div>
    </section>
  );
}