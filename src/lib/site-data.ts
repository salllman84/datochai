import {
  Activity,
  Dices,
  Flame,
  Globe2,
  MapPin,
  Mountain,
  ScanLine,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const SITE = {
  name: 'DatoChai',
  tagline: 'Platform Ramalan 4D Berasaskan AI',
  valueProp:
    'Di mana sains data bertemu intuisi ramalan — carta ramalan 4D paling saintifik di Malaysia.',
  email: 'support@datochai.com',
  domain: 'https://datochai.com',
};

export type Market = {
  /** SEO slug (legacy URL preserved) — the route segment. */
  slug: string;
  /** Internal key. */
  key: string;
  name: string;
  shortName: string;
  region: 'peninsula' | 'regional' | 'international';
  icon: LucideIcon;
  /** Hero H1 for the pillar page. */
  heroTitle: string;
  tagline: string;
  /** Home overview card description (exact copy). */
  blurb: string;
  drawSchedule: string;
  /** Optional badge e.g. daily-draw markets. */
  badge?: string;
  /** Inline CSS background for the pillar hero. */
  heroGradient: string;
  /** Stable sample arrays for the prediction grid (no backend). */
  sample: { main: string[]; hot: string[]; cold: string[]; overdue: string[] };
};

const PENINSULA_GRADIENT =
  'radial-gradient(circle at 50% -10%, rgba(0,100,0,0.55), transparent 60%), radial-gradient(circle at 85% 90%, rgba(212,175,55,0.10), transparent 55%), linear-gradient(160deg,#04210a 0%,#021405 48%,#000000 100%)';
const TOTO_GRADIENT =
  'radial-gradient(circle at 50% -10%, rgba(0,100,0,0.5), transparent 58%), radial-gradient(circle at 82% 88%, rgba(200,16,46,0.20), transparent 52%), linear-gradient(160deg,#04210a 0%,#0b0406 50%,#000000 100%)';
const INTERNATIONAL_GRADIENT =
  'radial-gradient(circle at 50% -10%, rgba(0,100,0,0.45), transparent 55%), radial-gradient(circle at 80% 85%, rgba(118,185,0,0.12), transparent 50%), linear-gradient(160deg,#0a1f0c 0%,#070a10 50%,#000000 100%)';
const PLANBEE_GRADIENT =
  'radial-gradient(circle at 50% 0%, rgba(0,100,0,0.4), transparent 55%), linear-gradient(160deg,#0b1220 0%,#111827 55%,#000000 100%)';

export const MARKETS: Market[] = [
  {
    slug: 'carta-4d-ramalan-magnum-hari-ini',
    key: 'magnum-4d',
    name: 'Magnum 4D',
    shortName: 'Magnum 4D',
    region: 'peninsula',
    icon: Target,
    heroTitle: 'Carta Ramalan Magnum 4D Hari Ini',
    tagline: 'Sinergi MTP 4D & Deep Learning LSTM',
    blurb:
      'Dapatkan ramalan Magnum 4D hari ini yang dijana menggunakan Artificial Intelligence dan statistik terkini. Model LSTM kami telah meneliti lebih sedekad data sejarah Magnum untuk mengekstrak Hot & Cold numbers dengan ketepatan terperinci.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: PENINSULA_GRADIENT,
    sample: { main: ['4827', '1593', '7064', '2918', '6350'], hot: ['82', '17', '49', '06'], cold: ['33', '70', '95'], overdue: ['11', '58', '24'] },
  },
  {
    slug: 'carta-ramalan-4d-sports-toto-hari-ini',
    key: 'sports-toto-4d',
    name: 'Sports Toto 4D',
    shortName: 'Sports Toto',
    region: 'peninsula',
    icon: Zap,
    heroTitle: 'Carta Ramalan 4D Sports Toto Terkini – MTP & MKT Hari Ini',
    tagline: 'Validasi Makro & Pengoptimuman Bayesian',
    blurb:
      'Ramalan Sports Toto 4D hari ini dengan teknologi AI dan Machine Learning. Enjin analitis Datochai 4d memberikan pencerahan mendalam tentang analisis trend, ujian frekuensi, serta kebarangkalian empirikal bagi MTP 4D dan MKT 4D.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: TOTO_GRADIENT,
    sample: { main: ['5441', '9036', '3175', '8820', '2607'], hot: ['44', '01', '57', '88'], cold: ['29', '63', '10'], overdue: ['37', '92', '05'] },
  },
  {
    slug: 'carta-ramalan-lotto-damacai-4d-kuda-hari-ini',
    key: 'damacai-4d',
    name: 'Da Ma Cai 1+3D (Kuda)',
    shortName: 'Da Ma Cai',
    region: 'peninsula',
    icon: Activity,
    heroTitle: 'Carta Ramalan Damacai 4D (Kuda) Hari Ini',
    tagline: 'Warisan Kuda & Pengembangan Probabilistik 1+3D',
    blurb:
      'Carta ramalan Damacai 4D hari ini atau Kuda 4D yang paling saintifik. Dijana menggunakan AI dan data statistik 10+ tahun. Pasukan pakar kami menggunakan kaedah pemodelan prediktif untuk menjejak corak khusus pasaran Da Ma Cai.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: PENINSULA_GRADIENT,
    sample: { main: ['6713', '2480', '9155', '3026', '7891'], hot: ['13', '80', '55', '26'], cold: ['47', '02', '99'], overdue: ['61', '38', '14'] },
  },
  {
    slug: 'nombor-ramalan-perdana-4d-hari-ini',
    key: 'perdana-4d',
    name: 'Perdana 4D',
    shortName: 'Perdana 4D',
    region: 'international',
    icon: TrendingUp,
    heroTitle: 'Carta Ramalan Perdana 4D Terkini – Analisis AI Saintifik Hari Ini',
    tagline: 'Aliran Data Berterusan & Time-Series Forecasting',
    blurb:
      'Ramalan Perdana 4D hari ini berasaskan Artificial Intelligence dan model statistik lanjutan. Melalui teknik Time-Series Forecasting, kami menjana nombor ramalan paling tepat dan telus di Malaysia berserta rekod ketepatan telus.',
    drawSchedule: 'Setiap Hari',
    badge: 'Kemas Kini Harian',
    heroGradient: INTERNATIONAL_GRADIENT,
    sample: { main: ['3092', '7415', '1860', '5238', '9647'], hot: ['09', '41', '60', '38'], cold: ['52', '17', '83'], overdue: ['26', '74', '00'] },
  },
  {
    slug: 'carta-planbee-9-lotto-4d-hari-ini',
    key: '9-lotto-4d',
    name: '9 Lotto 4D',
    shortName: '9 Lotto',
    region: 'international',
    icon: ScanLine,
    heroTitle: 'Carta Planbee 9 Lotto: Ramalan 9 Lotto 4D Terkini Hari Ini',
    tagline: 'Dekoding Matriks Planbee via Computer Vision',
    blurb:
      'Dapatkan ramalan 9 Lotto 4D hari ini menggunakan teknologi AI terkini. Kami mengaplikasikan analisis pola dan teknologi Pattern Recognition (Carta Planbee) ke atas rangkaian data besar untuk memberikan nombor 4D ramalan paling komprehensif.',
    drawSchedule: 'Setiap Hari',
    badge: 'Dekoding Carta Planbee',
    heroGradient: PLANBEE_GRADIENT,
    sample: { main: ['8124', '4790', '2356', '6018', '9473'], hot: ['24', '90', '56', '18'], cold: ['73', '01', '47'], overdue: ['35', '62', '09'] },
  },
  {
    slug: 'carta-ramalan-4d-grand-dragon-lotto-hari-ini',
    key: 'grand-dragon-lotto',
    name: 'Grand Dragon Lotto (GDL)',
    shortName: 'Grand Dragon Lotto',
    region: 'international',
    icon: Flame,
    heroTitle: 'Carta 4D Ramalan Grand Dragon Lotto (GDL) Hari Ini',
    tagline: 'Mekanik Harian Berkelajuan Tinggi & LSTM',
    blurb:
      'Ramalan Grand Dragon Lotto 4D hari ini yang dijana dengan AI dan Deep Learning. Carta ramalan GDLotto paling saintifik dan premium di Malaysia. Sistem kami menelusuri data silang untuk menghasilkan angka yang berpotensi tinggi.',
    drawSchedule: 'Setiap Hari',
    badge: 'Kemas Kini Harian GDL',
    heroGradient: INTERNATIONAL_GRADIENT,
    sample: { main: ['1947', '5283', '8016', '3759', '6402'], hot: ['47', '83', '16', '02'], cold: ['59', '20', '75'], overdue: ['38', '91', '04'] },
  },
  {
    slug: 'nombor-ramalan-6d-singapore-pools',
    key: 'singapore-pools',
    name: 'Singapore Pools 6D',
    shortName: 'Singapore Pools',
    region: 'international',
    icon: Globe2,
    heroTitle: 'Nombor Ramalan 6D Singapore Pools Hari Ini',
    tagline: 'Analisis Rentas Sempadan & Varians 6D',
    blurb:
      'Ramalan 6D Singapore Pools hari ini yang dijana melalui analisis statistik mendalam dan rangkaian neural. Sistem AI kami menapis varians cabutan rentas sempadan untuk menghasilkan unjuran yang paling tepat dan telus.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: INTERNATIONAL_GRADIENT,
    sample: { main: ['492037', '815640', '273918'], hot: ['49', '20', '37', '81'], cold: ['56', '40', '27'], overdue: ['39', '18', '00'] },
  },
  {
    slug: 'nombor-ramalan-4d-sabah-88',
    key: 'sabah-88',
    name: '4D Sabah 88',
    shortName: 'Sabah 88',
    region: 'regional',
    icon: Mountain,
    heroTitle: 'Nombor Ramalan 4D Sabah 88 Hari Ini',
    tagline: 'Penjejakan Geomaterial East Malaysia',
    blurb:
      'Nombor ramalan 4D Sabah 88 hari ini berasaskan AI dan analisis frekuensi serantau. Model kami mengambil kira dinamik cabutan unik pasaran East Malaysia untuk menghasilkan carta ramalan yang grounded secara statistik.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: INTERNATIONAL_GRADIENT,
    sample: { main: ['7320', '1685', '9047', '4218', '6593'], hot: ['20', '85', '47', '18'], cold: ['93', '06', '32'], overdue: ['61', '74', '09'] },
  },
  {
    slug: 'nombor-bertuah-4d-sarawak-cash-sweep-hari-ini',
    key: 'sarawak-cash-sweep',
    name: 'Sarawak Cash Sweep',
    shortName: 'Cash Sweep',
    region: 'regional',
    icon: MapPin,
    heroTitle: 'Nombor Bertuah 4D Sarawak Cash Sweep Hari Ini',
    tagline: 'Filter Sentimen Serantau Sarawak',
    blurb:
      'Nombor bertuah 4D Sarawak Cash Sweep hari ini yang dijana dengan model AI dan analisis sejarah cabutan. Kami menapis bias panik beli-belah serantau supaya output kekal grounded pada kebarangkalian statistik tulen.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: INTERNATIONAL_GRADIENT,
    sample: { main: ['2954', '8137', '6402', '1789', '5063'], hot: ['54', '37', '02', '89'], cold: ['78', '13', '40'], overdue: ['29', '63', '05'] },
  },
  {
    slug: 'nombor-bertuah-4d-stc-hari-ini',
    key: 'stc',
    name: '4D STC',
    shortName: 'STC 4D',
    region: 'regional',
    icon: Dices,
    heroTitle: 'Nombor Bertuah 4D STC Hari Ini',
    tagline: 'Analisis Frekuensi & Hukum Nombor Besar',
    blurb:
      'Nombor bertuah 4D STC hari ini yang disokong oleh enjin AI dan rangkaian neural LSTM. Sistem kami menganalisis selang masa dan korelasi silang untuk menjejak angka panas, sejuk dan tertunggak pasaran STC.',
    drawSchedule: 'Rabu, Sabtu & Ahad',
    heroGradient: INTERNATIONAL_GRADIENT,
    sample: { main: ['6178', '3409', '8725', '1560', '9341'], hot: ['17', '40', '25', '60'], cold: ['34', '09', '78'], overdue: ['56', '91', '03'] },
  },
];

export const MARKETS_BY_SLUG: Record<string, Market> = Object.fromEntries(
  MARKETS.map((m) => [m.slug, m]),
);

/** Home overview order (6 cornerstone markets). */
export const HOME_MARKET_KEYS = [
  'magnum-4d',
  'sports-toto-4d',
  'damacai-4d',
  'perdana-4d',
  '9-lotto-4d',
  'grand-dragon-lotto',
];

const m = (key: string) => MARKETS.find((x) => x.key === key)!;

/** Mega-menu "Semua Ramalan 4D" — 3 disciplined columns. */
export const MEGA_MARKETS = [
  { title: 'Operator Utama Semenanjung', markets: [m('magnum-4d'), m('damacai-4d'), m('sports-toto-4d')] },
  { title: 'Serantau & East Malaysia', markets: [m('sabah-88'), m('sarawak-cash-sweep'), m('stc')] },
  {
    title: 'Antarabangsa & Frekuensi Tinggi',
    markets: [m('grand-dragon-lotto'), m('perdana-4d'), m('singapore-pools'), m('9-lotto-4d')],
  },
];

export const METHODOLOGY_LINKS = [
  { href: '/metodologi-ramalan-4d', label: 'Metodologi Ramalan 4D', desc: 'Kertas putih seni bina AI & statistik' },
  { href: '/soalan-lazim-tentang-carta-4d', label: 'Soalan Lazim Tentang Carta 4D', desc: 'Jawapan kepada pertanyaan lazim' },
  { href: '/ketepatan-carta-ramalan-4d', label: 'Ketepatan Carta Ramalan 4D', desc: 'Rekod prestasi telus 100%' },
];

export const PRIMARY_NAV = [
  { href: '/', label: 'Laman Utama' },
  { href: '/pakar-datochai', label: 'Pakar DatoChai' },
  { href: '/blog', label: 'Blog' },
  { href: '/mengenai-datochai', label: 'Mengenai DatoChai' },
];

export type Expert = {
  name: string;
  role: string;
  org: string;
  short: string; // footer roster line
  bio: string;
  tags: string[];
  initials: string;
  linkedin?: string;
};

export const EXPERTS: Expert[] = [
  {
    name: 'Yue Cao',
    role: 'AI / Deep Learning Specialist',
    org: 'NVIDIA',
    short: 'Yue Cao (AI Specialist, NVIDIA)',
    bio: 'Pakar AI yang memfokuskan teknologi Deep Learning di NVIDIA. Di DatoChai, beliau memimpin pembangunan model LSTM dan Transformer yang menjadi teras sistem ramalan 4D kami, memastikan setiap nombor melalui proses analisis komprehensif.',
    tags: ['Real-Time AI', 'Predictive Modelling', 'LSTM Architecture'],
    initials: 'YC',
    linkedin: 'https://www.linkedin.com/in/yue-cao-18027b47',
  },
  {
    name: 'Dr. Francesco Audrino',
    role: 'Professor of Statistics',
    org: 'University of St. Gallen, Switzerland',
    short: 'Dr Francesco (Prof. Statistik, St.Gallen)',
    bio: 'Membawa kepakaran lebih sedekad dalam model ekonometrik dan pembelajaran statistik dari University of St. Gallen. Analisis deret masa beliau ke atas dataset kewangan berskala besar kini diadaptasi untuk menapis anomali dalam pasaran loteri.',
    tags: ['Time-Series Analysis', 'Ekonometrik', 'Big Data Statistics'],
    initials: 'FA',
  },
  {
    name: 'Muhammad Faizan',
    role: 'PhD Researcher, AI & Computational Genomics',
    org: 'NUST',
    short: 'MD. Faizan (PhD AI, NUST)',
    bio: 'Menerapkan teknik Bayesian Optimisation dan Predictive Modelling dari genomik komputasi ke dalam pemodelan nombor rawak. Beliau membangunkan matriks penjejakan corak yang menjadikan setiap angka disokong nilai probabiliti yang sah.',
    tags: ['Bayesian Optimisation', 'Pattern Recognition', 'Predictive Modelling'],
    initials: 'MF',
  },
  {
    name: 'Xinwu Ye',
    role: 'AI PhD Candidate',
    org: 'The University of Hong Kong (HKU)',
    short: 'Xinwu Ye (PhD AI, HKU)',
    bio: 'Pakar dalam merekabentuk Large Language Models (LLM) dan penyelesaian masalah saintifik kompleks. Kepakaran beliau dalam mengekstrak isyarat dari hingar data membolehkan kami mengasingkan corak nombor tulen dari keputusan tidak konsisten.',
    tags: ['Large Language Models', 'Signal Extraction', 'Deep Learning'],
    initials: 'XY',
  },
  {
    name: 'Dr. Mingyang Sun',
    role: 'Professor (Research)',
    org: 'Peking University',
    short: 'MingYang Sun (Prof., Peking Univ)',
    bio: 'Diiktiraf sebagai Top 2% Saintis Dunia oleh Stanford University. Algoritma peramalan tenaga yang dicipta beliau kini diaplikasikan oleh DatoChai untuk memetakan frekuensi taburan angka pada tahap integriti tertinggi.',
    tags: ['Big Data Analytics', 'Top 2% Saintis Dunia', 'Forecasting'],
    initials: 'MS',
  },
  {
    name: 'Jiahui Yang',
    role: 'Senior AI Compiler Architect',
    org: 'NVIDIA',
    short: 'Jiahui Yang (Sr. Architect, NVIDIA)',
    bio: 'Jurutera Kanan AI Compiler di NVIDIA yang mengoptimumkan pecutan Deep Learning. Beliau memastikan beban kerja komputasi sistem carta ramalan kami beroperasi tanpa lengah, memberikan ramalan yang segar dan tepat pada masanya.',
    tags: ['AI Compiler', 'Deep Learning Acceleration', 'Low Latency'],
    initials: 'JY',
  },
];

export const FOOTER_QUICK_LINKS = [
  { href: '/', label: 'Laman Utama' },
  { href: '/mengenai-datochai', label: 'Mengenai DatoChai' },
  { href: '/pakar-datochai', label: 'Pakar DatoChai' },
  { href: '/metodologi-ramalan-4d', label: 'Metodologi' },
  { href: '/ketepatan-carta-ramalan-4d', label: 'Ketepatan' },
  { href: '/soalan-lazim-tentang-carta-4d', label: 'Soalan Lazim' },
  { href: '/blog', label: 'Blog' },
  { href: '/hubungi', label: 'Hubungi' },
];

export const FOOTER_LEGAL_LINKS = [
  { href: '/permainan-bertanggungjawab', label: 'Permainan Bertanggungjawab' },
  { href: '/penafian', label: 'Penafian' },
  { href: '/terma-syarat', label: 'Terma & Syarat' },
  { href: '/dasar-kuki', label: 'Dasar Kuki' },
  { href: '/dasar-privasi', label: 'Dasar Privasi' },
];

/** General FAQ (used by the Soalan Lazim page + accuracy schema). */
export const GENERAL_FAQ = [
  {
    q: 'Adakah ramalan DatoChai dijamin tepat?',
    a: 'Tidak. Ramalan DatoChai adalah hasil analisis statistik dan AI. Loteri kekal sebagai permainan rawak. Tiada teknologi yang boleh menjamin kemenangan. Kami menggalakkan permainan bertanggungjawab.',
  },
  {
    q: 'Berapa kerap halaman ini dikemas kini?',
    a: 'Halaman ini dikemas kini secara berkala dengan rekod ramalan terkini. Tarikh kemaskini terakhir sentiasa dipaparkan di bahagian atas halaman.',
  },
  {
    q: 'Bolehkah saya mengesahkan data ini sendiri?',
    a: 'Ya. Semua keputusan yang dipaparkan boleh disahkan terhadap keputusan rasmi yang diterbitkan oleh setiap loteri (Magnum 4D, Sports Toto, Damacai 1+3D, Perdana 4D, 9 Lotto 4D, Grand Dragon Lotto, Sabah 88, STC 4D, Sarawak Cash Sweep, Singapore Pools). Kami menggalakkan anda berbuat demikian.',
  },
  {
    q: 'Mengapa ada ramalan yang tidak tepat?',
    a: 'Ramalan yang tidak tepat adalah sebahagian daripada realiti mana-mana model ramalan. Tiada model AI yang sempurna, dan loteri melibatkan unsur rawak yang signifikan. Kami memaparkan ramalan yang tidak tepat sebagai bukti ketelusan, bukan sebagai kelemahan.',
  },
];

/** National support directory for Responsible Gaming + pre-footer. */
export const SUPPORT_LINES = [
  { name: 'Befrienders Kuala Lumpur', detail: 'Talian krisis kecemasan 24 jam', phone: '03-7627 2929', tel: '+60376272929' },
  { name: 'Befrienders Pulau Pinang', detail: 'Sokongan emosi & kaunseling serantau', phone: '04-281 5161', tel: '+6042815161' },
  { name: 'Befrienders Ipoh', detail: 'Sokongan emosi serantau utara', phone: '05-547 7933', tel: '+6055477933' },
  { name: 'KKM — Talian HEAL', detail: 'Sokongan kesihatan mental kerajaan', phone: '+603-8883 3888', tel: '+60388833888' },
  { name: 'AKPK', detail: 'Penstrukturan semula bebanan hutang', phone: '+603-2616 7766', tel: '+60326167766' },
];

export const DISCLAIMER_BODY =
  'Platform maklumat Ramalan 4D DatoChai dan perkhidmatan analitis AI yang disediakannya bertujuan semata-mata untuk simulasi akademik, pembelajaran data statistik, dan hiburan peribadi. Nombor yang dijana adalah berdasarkan model pengiraan matematik siri masa dan tidak boleh ditafsirkan sebagai jaminan kewangan, tawaran pelaburan, mahupun galakan rasmi untuk berjudi. Penarikan tiket loteri sentiasa melibatkan faktor risiko rawak yang bebas sepenuhnya. Jangan sekali-kali mempertaruhkan wang pendahuluan, simpanan kritikal, atau berbelanja melebihi kemampuan peribadi anda. Bermainlah dengan bijak, waras, dan bertanggungjawab penuh ke atas diri anda (Umur 18+ Tahun Sahaja).';
