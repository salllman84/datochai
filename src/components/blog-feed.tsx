import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Image } from 'next/image';
import { Bookmark, Heart, Copy } from 'lucide-react';

// Sample blog posts - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Analisis Teknis: Mengapa Model LSTM Kami Lebih Tepat daripada Model Tradisional',
    excerpt: 'Dalam artikel teknis ini, kami akan membandingkan prestasi model LSTM yang digunakan oleh Datochai 4d dengan model statistik tradisional seperti ARIMA dan ekspansial smoothing untuk meramalan hasil loteri 4D.',
    date: '2026-06-10',
    readTime: '5 min baca',
    thumbnail: '/uploads/blog/lstm-vs-traditional.webp',
    likes: 124,
    bookmarks: 89
  },
  {
    id: 2,
    title: 'Panduan Pemula: Cara Membaca Carta Ramalan 4D Datochai Secara Efektif',
    excerpt: 'Baru menggunakan platform Datochai 4d? Panduan ini akan membimbing anda melalui setiap komponen carta ramalan 4D kami dan menjelaskan cara menginterpretasikan nomor-nomor yang diberikan untuk meningkatkan peluang menang anda.',
    date: '2026-06-08',
    readTime: '7 min baca',
    thumbnail: '/uploads/blog/beginners-guide.webp',
    likes: 210,
    bookmarks: 156
  },
  {
    id: 3,
    title: 'Update Model Mei 2026: Peningkatan Kepredangan melalui Integrasi Multi-Pasar',
    excerpt: 'Kami gembira mengumumkan versi terkini model prediksi Datochai 4d yang merupakan hasil dari beberapa minggu penyelidikan dan pengujian intensif. Update ini memperkenalkan integrasi data dari tambahan 3 pasar loteri internasionaal untuk meningkatkanensitifin konteks ramalan kami.',
    date: '2026-06-05',
    readTime: '4 min baca',
    thumbnail: '/uploads/blog/may-2026-update.webp',
    likes: 98,
    bookmarks: 67
  },
  {
    id: 4,
    title: 'Metodologi Baru: Menggunakan Analisis Gelombang Eliot dalam Ramalan 4D',
    excerpt: 'Dalam upaya terus-menerus meningkatkan keupayaan prediktif platform kami, tim penelitian Datochai 4d telah mengintegrasikan prinsip-prinsip Teori Gelombang Eliot ke dalam rangkaian penanalisis model kami.',
    date: '2026-06-03',
    readTime: '6 min baca',
    thumbnail: '/uploads/blog/elliott-wave.webp',
    likes: 176,
    bookmarks: 134
  },
  {
    id: 5,
    title: 'Interview Pakar: Prof. Francesco Audrino tentang Statistik dalam Ramalan Loteri',
    excerpt: 'Kami berkesempatan menéwawancarai Prof. Francesco Audrino, pakar statistik ternama dari University of St. Gallen, untuk mendapatkan pandangannya tentang aplikasi statistik dalam konteks ramalan loteri dan ramalan 4D secara spesifik.',
    date: '2026-05-31',
    readTime: '8 min baca',
    thumbnail: '/uploads/blog/interview-francesco.webp',
    likes: 302,
    bookmarks: 228
  },
  {
    id: 6,
    title: 'Analisis Pasaran: Mengapa Ramalan 4D Selalu Lebih Tepat pada Akhir Pekan',
    excerpt: 'Melalui analisis data historis selama lima tahun terakhir, tim analytics Datochai 4d telah mengidentifikasi pola menarik yang menunjukkan ketepatan ramalan 4D cenderung lebih tinggi pada tarikan yang jatuh pada hari Sabtu dan Minggu berbanding hari-hari kerja.',
    date: '2026-05-28',
    readTime: '5 min baca',
    thumbnail: '/uploads/blog/weekend-pattern.webp',
    likes: 143,
    bookmarks: 105
  }
];

export function BlogFeed() {
  return (
    <section className="py-16 bg-background/50 dark:bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-balance mb-12">
          Hebahan & Terbitan Artikel Saintifik Terkini
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mb-16">
          Terus kekal di hadapan kök pasaran dengan laporan analitikal, kemas kini perisian algoritma, dan pandangan intelektual (insights) terkini daripada kumpulan penganalisis Ramalan 4D Datochai. Rujuk ulasan teknikal tentang perubahan aliran nombor dan cara memaksimumkan penggunaan carta ramalan sistem AI kami.
        </p>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:block grid grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <div key={post.id} className="glass-card hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden">
              <Image
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    <Bookmark className="w-4 h-4 text-gold-500" />
                    <span className="text-xs">{post.bookmarks}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-gold-500" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Copy className="w-4 h-4 text-gold-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked grid */}
        <div className="md:hidden space-y-6">
          {blogPosts.map(post => (
            <div key={post.id} className="glass-card hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden">
              <div className="flex flex-col">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-[200px] object-cover mb-4"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      <Bookmark className="w-4 h-4 text-gold-500" />
                      <span className="text-xs">{post.bookmarks}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-gold-500" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Copy className="w-4 h-4 text-gold-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton loader */}
        <div className="hidden md:block grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex space-y-4">
              {[...Array(3)].map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="glass-card overflow-hidden">
                  <Image
                    src="/uploads/placeholder.webp"
                    alt="Placeholder"
                    className="w-full h-48 object-cover animate-pulse"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                      <div className="h-4 w-32 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                      <div className="h-4 w-24 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-2"></div>
                    </h3>
                    <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-3">
                      <div className="h-2 w-40 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                      <div className="h-2 w-32 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-1"></div>
                      <div className="h-2 w-24 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-1"></div>
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                      <span>
                        <div className="h-2 w-16 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                      </span>
                      <span>
                        <div className="h-2 w-20 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
                        <span className="text-xs">
                          <div className="h-2 w-16 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
                        <span className="text-xs">
                          <div className="h-2 w-16 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white/30 dark:bg-white/20 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}