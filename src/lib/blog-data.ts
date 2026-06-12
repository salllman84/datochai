export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  likes: number;
  /** Tailwind gradient classes for the thumbnail (no external assets). */
  gradient: string;
  trending?: boolean;
  featured?: boolean;
};

export const BLOG_CATEGORIES = [
  'Semua',
  'Magnum 4D',
  'Sports Toto',
  '9 Lotto',
  'Metodologi',
  'Analisis AI',
  'Berita',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'platform-ramalan-4d-berasaskan-ai-paling-dipercayai',
    title: 'Platform Ramalan 4D Berasaskan AI Paling Dipercayai',
    excerpt:
      'Bagaimana DatoChai menggabungkan Deep Learning LSTM, ARIMA, dan Meta Prophet untuk menghasilkan carta ramalan 4D yang telus dan boleh disahkan secara matematik.',
    date: '12 Jun 2026',
    readTime: '8 min baca',
    category: 'Analisis AI',
    author: 'Yue Cao',
    likes: 412,
    gradient: 'from-forest-900 via-forest-700 to-slate-900',
    featured: true,
    trending: true,
  },
  {
    slug: 'mengapa-model-lstm-lebih-tepat-daripada-arima',
    title: 'Analisis Teknis: Mengapa Model LSTM Lebih Tepat daripada Model Tradisional',
    excerpt:
      'Perbandingan prestasi rangkaian neural LSTM dengan model statistik klasik seperti ARIMA dan exponential smoothing dalam meramal siri masa loteri 4D.',
    date: '10 Jun 2026',
    readTime: '6 min baca',
    category: 'Metodologi',
    author: 'Dr. Francesco Audrino',
    likes: 248,
    gradient: 'from-slate-900 via-forest-900 to-forest-700',
    trending: true,
  },
  {
    slug: 'panduan-membaca-carta-ramalan-4d',
    title: 'Panduan Pemula: Cara Membaca Carta Ramalan 4D DatoChai Secara Efektif',
    excerpt:
      'Panduan langkah demi langkah untuk mentafsir nombor panas, sejuk, dan tertunggak pada carta ramalan kami untuk membuat keputusan yang lebih berinformasi.',
    date: '8 Jun 2026',
    readTime: '7 min baca',
    category: 'Magnum 4D',
    author: 'Muhammad Faizan',
    likes: 310,
    gradient: 'from-gold-700 via-forest-900 to-slate-900',
    trending: true,
  },
  {
    slug: 'kemas-kini-model-jun-2026-integrasi-multi-pasaran',
    title: 'Kemas Kini Model Jun 2026: Peningkatan melalui Integrasi Multi-Pasaran',
    excerpt:
      'Versi terkini enjin ramalan DatoChai memperkenalkan integrasi data silang MTP/MKT untuk meningkatkan sensitiviti konteks ramalan merentas pasaran.',
    date: '5 Jun 2026',
    readTime: '4 min baca',
    category: 'Berita',
    author: 'Jiahui Yang',
    likes: 176,
    gradient: 'from-forest-700 via-slate-900 to-black',
  },
  {
    slug: 'dekoding-carta-planbee-dengan-computer-vision',
    title: 'Dekoding Carta Planbee 9 Lotto dengan Computer Vision',
    excerpt:
      'Bagaimana Convolutional Neural Networks membaca matriks Planbee, menghapuskan bias apophenia manusia dan mengekstrak kluster entropi rendah.',
    date: '3 Jun 2026',
    readTime: '6 min baca',
    category: '9 Lotto',
    author: 'Xinwu Ye',
    likes: 198,
    gradient: 'from-slate-900 via-slate-800 to-forest-900',
  },
  {
    slug: 'analisis-frekuensi-hujung-minggu-sports-toto',
    title: 'Analisis Pasaran: Corak Ketepatan Sports Toto pada Hujung Minggu',
    excerpt:
      'Analisis data lima tahun mendedahkan corak menarik tentang varians cabutan Sports Toto pada cabutan hujung minggu berbanding hari biasa.',
    date: '28 Mei 2026',
    readTime: '5 min baca',
    category: 'Sports Toto',
    author: 'Dr. Mingyang Sun',
    likes: 143,
    gradient: 'from-crimson-900 via-slate-900 to-forest-900',
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p]),
);

export const TAG_CLOUD = [
  'Magnum 4D',
  'Sports Toto',
  'Da Ma Cai',
  '9 Lotto',
  'Grand Dragon',
  'LSTM',
  'ARIMA',
  'Time-Series',
  'Hot Numbers',
  'Metodologi',
];
