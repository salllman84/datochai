import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogPostCard } from '@/components/blog-post-card';

export default function BlogPage() {
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
      bookmarks: 89,
      slug: 'analisis-teknik-model-lstm-lebih-tepat'
    },
    {
      id: 2,
      title: 'Panduan Pemula: Cara Membaca Carta Ramalan 4D Datochai Secara Efektif',
      excerpt: 'Baru menggunakan platform Datochai 4d? Panduan ini akan membimbing anda melalui setiap komponen carta ramalan 4D kami dan menjelaskan cara menginterpretasikan nomor-nomor yang diberikan untuk meningkatkan peluang menang anda.',
      date: '2026-06-08',
      readTime: '7 min baca',
      thumbnail: '/uploads/blog/beginners-guide.webp',
      likes: 210,
      bookmarks: 156,
      slug: 'panduan-pemula-carta-ramalan-4d'
    },
    {
      id: 3,
      title: 'Update Model Mei 2026: Peningkatan Kepredangan melalui Integrasi Multi-Pasar',
      excerpt: 'Kami gembira mengumumkan versi terkini model prediksi Datochai 4d yang merupakan hasil dari beberapa minggu penyelidikan dan pengujian intensif. Update ini memperkenalkan integrasi data dari tambahan 3 pasar loteri internasonaal untuk meningkatkanensitifin konteks ramalan kami.',
      date: '2026-06-05',
      readTime: '4 min baca',
      thumbnail: '/uploads/blog/may-2026-update.webp',
      likes: 98,
      bookmarks: 67,
      slug: 'update-model-mei-2026'
    },
    {
      id: 4,
      title: 'Metodologi Baru: Menggunakan Analisis Gelombang Eliot dalam Ramalan 4D',
      excerpt: 'Dalam upaya terus-menerus meningkatkan keupayaan prediktif platform kami, tim penelitian Datochai 4d telah mengintegrasikan prinsip-prinsip Teori Gelombang Eliot ke dalam rangkaian penanalisis model kami.',
      date: '2026-06-03',
      readTime: '6 min baca',
      thumbnail: '/uploads/blog/elliott-wave.webp',
      likes: 176,
      bookmarks: 134,
      slug: 'metodologi-baru-gelombang-eliot'
    },
    {
      id: 5,
      title: 'Interview Pakar: Prof. Francesco Audrino tentang Statistik dalam Ramalan Loteri',
      excerpt: 'Kami berkesempatan menéwawancarai Prof. Francesco Audrino, pakar statistik ternama dari University of St. Gallen, untuk mendapatkan pandangannya tentang aplikasi statistik dalam konteks ramalan loteri dan ramalan 4D secara spesifik.',
      date: '2026-05-31',
      readTime: '8 min baca',
      thumbnail: '/uploads/blog/interview-francesco.webp',
      likes: 302,
      bookmarks: 228,
      slug: 'interview-pakar-francesco-audrino'
    },
    {
      id: 6,
      title: 'Analisis Pasaran: Mengapa Ramalan 4D Selalu Lebih Tepat pada Akhir Pekan',
      excerpt: 'Melalui analisis data historis selama lima tahun terakhir, tim analytics Datochai 4d telah mengidentifikasi pola menarik yang menunjukkan ketepatan ramalan 4D cenderung lebih tinggi pada tarikan yang jatuh pada hari Sabtu dan Minggu berbanding hari-hari kerja.',
      date: '2026-05-28',
      readTime: '5 min baca',
      thumbnail: '/uploads/blog/weekend-pattern.webp',
      likes: 143,
      bookmarks: 105,
      slug: 'analisis-pasaran-akhir-pekan'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-balance">
                Blog DatoChai: Analisis Teknik & Pendidikan
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mt-4">
                Terus kekal di hadapan kök pasaran dengan laporan analitikal, kemas kini perisian algoritma, dan pandangan intelektual (insights) terkini daripada kumpulan penganalisis Ramalan 4D Datochai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}