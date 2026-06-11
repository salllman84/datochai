import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Target, Zap, Activity, Bookmark, Heart, Copy } from 'lucide-react';

export function LotteryOverview() {
  const lotteries = [
    {
      id: 1,
      name: 'Magnum 4D',
      title: 'Ramalan Magnum 4D Hari Ini',
      text: 'Dapatkan ramalan Magnum 4D hari ini yang dijana menggunakan Artificial Intelligence dan statistik terkini. Nombor ramalan paling saintifik dan dipercayai di Malaysia. Model LSTM kami telah meneliti lebih sedekad data sejarah Magnum untuk mengekstrak Hot & Cold numbers dengan ketepatan terperinci. Lihat analisis penuh dan keputusan lepas sekarang di portal Ramalan 4D Datochai.',
      icon: <Target className="w-5 h-5 text-gold-500" />,
      bgColor: 'bg-white/80 dark:bg-slate-900/80'
    },
    {
      id: 2,
      name: 'Sports Toto 4D',
      title: 'Ramalan Sports Toto 4D Hari Ini',
      text: 'Ramalan Sports Toto 4D hari ini dengan teknologi AI dan Machine Learning. Enjin analitis Datochai 4d memberikan pencerahan mendalam tentang analisis trend, ujian frekuensi, serta kebarangkalian empirikal bagi MTP 4D dan MKT 4D. Klik untuk melihat carta ramalan lengkap dan keputusan terkini yang diproses secara automatik.',
      icon: <Zap className="w-5 h-5 text-gold-500" />,
      bgColor: 'bg-white/80 dark:bg-slate-900/80'
    },
    {
      id: 3,
      name: 'Damacai 4D (Kuda)',
      title: 'Ramalan Damacai 4D (Kuda) Hari Ini',
      text: 'Carta ramalan Damacai 4D hari ini atau Kuda 4D yang paling saintifik. Dijana menggunakan AI dan data statistik 10+ tahun. Dapatkan nombor 4D ramalan paling tepat dan analisis mendalam. Pasukan pakar kami mengguna kaedah pemodelan prediktif untuk menjejak corak khusus pasaran Da Ma Cai.',
      icon: <Activity className="w-5 h-5 text-gold-500" />,
      bgColor: 'bg-white/80 dark:bg-slate-900/80'
    },
    {
      id: 4,
      name: 'Perdana 4D',
      title: 'Ramalan Perdana 4D Hari Ini',
      text: 'Ramalan Perdana 4D hari ini berasaskan Artificial Intelligence dan model statistik lanjutan. Melalui teknik Time-Series Forecasting, kami menjana nombor ramalan paling tepat dan telus di Malaysia. Rujuk carta ramalan Perdana terkini berserta rekod ketepatan telus yang disediakan khas oleh Ramalan 4D Datochai.',
      icon: <Target className="w-5 h-5 text-gold-500" />,
      bgColor: 'bg-white/80 dark:bg-slate-900/80'
    },
    {
      id: 5,
      name: '9 Lotto 4D',
      title: 'Carta Planbee 9 Lotto 4D Hari Ini',
      text: 'Dapatkan ramalan 9 Lotto 4D hari ini menggunakan teknologi AI terkini. Kami mengaplikasikan analisis pola dan teknologi Pattern Recognition (Carta Planbee) ke atas rangkaian data besar untuk memberikan nombor 4D ramalan paling komprehensif. Semak keputusan lepas dan pandangan pakar Datochai 4d di sini.',
      icon: <Activity className="w-5 h-5 text-gold-500" />,
      bgColor: 'bg-white/80 dark:bg-slate-900/80'
    },
    {
      id: 6,
      name: 'Grand Dragon Lotto (GDL)',
      title: 'Ramalan Grand Dragon Lotto 4D (GDL) Hari Ini',
      text: 'Ramalan Grand Dragon Lotto 4D hari ini yang dijana dengan AI dan Deep Learning. Carta ramalan GDLotto paling saintifik dan premium di Malaysia. Sistem kami menelusuri data silang untuk menghasilkan angka yang berpotensi tinggi. Klik untuk melihat Ramalan 4D Datochai penuh serta analisis terperinci GDL.',
      icon: <Zap className="w-5 h-5 text-gold-500" />,
      bgColor: 'bg-white/80 dark:bg-slate-900/80'
    }
  ];

  return (
    <section className="py-16 bg-background/50 dark:bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-balance mb-12">
          Hab Pusat Ramalan 4D Datochai: Akses Carta Mengikut Kategori
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mb-16">
          Ekosistem Datochai 4d merangkumi seluruh spektrum pasaran loteri utama di Malaysia. Setiap pasaran mempunyai dinamik cabutan, varians, dan pola algoritma yang unik. Oleh itu, model kecerdasan buatan kami melatih rangkaian neural yang berasingan untuk setiap kategori bagi memastikan 4D ramalan yang dihasilkan memiliki sensitiviti konteks yang tinggi. Pilih pasaran pilihan anda di bawah untuk mengakses carta ramalan terkini.
        </p>

        {/* Desktop: 2x3 grid */}
        <div className="hidden md:block grid grid-cols-2 gap-8 mb-12">
          {lotteries.map(lottery => (
            <div
              key={lottery.id}
              className={clsx(
                'glass-card hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)] transition-all duration-300',
                lottery.bgColor,
                'relative overflow-hidden group'
              )}
            >
              <div className="flex items-center justify-center h-16 mb-4">
                {lottery.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{lottery.name}</h3>
              <p className="text-sm text-center text-muted-foreground/80 mb-4">{lottery.title}</p>
              <p className="text-xs text-center text-muted-foreground/70 leading-relaxed mb-6">
                {lottery.text}
              </p>
              {/* Functional UI overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between space-x-3">
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4 text-gold-500" />
                </button>
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <Heart className="w-4 h-4 text-gold-500" />
                  <span className="ml-1 text-xs text-gold-600">1.2K</span>
                </button>
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-gold-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked grid (will become 1-column on mobile via CSS) */}
        <div className="md:hidden space-y-6">
          {lotteries.map(lottery => (
            <div
              key={lottery.id}
              className={clsx(
                'glass-card hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)] transition-all duration-300',
                lottery.bgColor,
                'relative overflow-hidden group'
              )}
            >
              <div className="flex items-center justify-start space-x-4 p-4">
                <div className="flex-shrink-0">
                  {lottery.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{lottery.name}</h3>
                  <p className="text-sm text-muted-foreground/80">{lottery.title}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-3">
                    {lottery.text}
                  </p>
                </div>
              </div>
              {/* Functional UI overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between space-x-3">
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4 text-gold-500" />
                </button>
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <Heart className="w-4 h-4 text-gold-500" />
                  <span className="ml-1 text-xs text-gold-600">1.2K</span>
                </button>
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-gold-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton loader */}
        <div className="hidden md:block grid grid-cols-2 gap-8 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card relative overflow-hidden group">
              <div className="flex items-center justify-center h-16 mb-4">
                <div className="w-5 h-5 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                <div className="h-4 w-24 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
              </h3>
              <p className="text-sm text-center text-muted-foreground/80 mb-4">
                <div className="h-2 w-32 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
              </p>
              <p className="text-xs text-center text-muted-foreground/70 leading-relaxed mb-6">
                <div className="h-2 w-40 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                <div className="h-2 w-32 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-1"></div>
                <div className="h-2 w-24 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-1"></div>
              </p>
              {/* Functional UI overlay skeleton */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between space-x-3">
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <div className="w-4 h-4 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
                </button>
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <div className="w-4 h-4 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
                  <span className="ml-1 text-xs text-gold-600">
                    <div className="h-2 w-16 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                  </span>
                </button>
                <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-colors">
                  <div className="w-4 h-4 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}