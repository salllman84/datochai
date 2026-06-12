import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

// Deterministic node field (no Math.random — stable across SSR/CSR).
const NODES = [
  { x: 12, y: 22 }, { x: 26, y: 64 }, { x: 38, y: 30 }, { x: 50, y: 72 },
  { x: 62, y: 26 }, { x: 74, y: 58 }, { x: 86, y: 34 }, { x: 20, y: 44 },
  { x: 44, y: 52 }, { x: 68, y: 44 }, { x: 90, y: 70 }, { x: 8, y: 78 },
];
const EDGES: [number, number][] = [
  [0, 7], [7, 1], [1, 8], [8, 2], [2, 4], [4, 9], [9, 5], [5, 3],
  [3, 8], [9, 6], [6, 10], [5, 10], [11, 1], [0, 2], [4, 6],
];

function NeuralField() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="#D4AF37"
          strokeWidth="0.12"
          strokeOpacity="0.28"
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="0.55"
          fill="#D4AF37"
          className="animate-pulse-slow"
          style={{ animationDelay: `${(i % 6) * 0.35}s` }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero-gradient relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <NeuralField />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container-custom relative z-10 flex min-h-[88vh] flex-col items-center justify-center py-20 text-center">
        <span className="pill border border-gold-500/40 bg-white/5 text-gold-200 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" /> AI Saintifik · Rangkaian Neural · Statistik 10+ Tahun
        </span>

        <h1 className="mt-6 max-w-4xl font-poppins text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          Carta Ramalan 4D DatoChai
          <span className="mt-2 block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 bg-clip-text text-transparent">
            Platform Analisis AI Saintifik &amp; Rangkaian Neural Terkini
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base font-medium text-gold-100/90 sm:text-lg">
          Dikuasakan oleh Artificial Intelligence, Machine Learning &amp; Analisis Statistik 10+ Tahun
          yang dipantau oleh Pakar NVIDIA Senior AI Architect dan Penyelidik PhD.
        </p>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
          Selamat datang ke pusat kecemerlangan sains data terunggul di Malaysia. Berbeza dengan platform
          tekaan rawak tradisional, Ramalan 4D Datochai memanfaatkan kuasa pengkomputeran berprestasi tinggi
          untuk merungkai corak tersembunyi di sebalik siri nombor. Model AI kami memproses jutaan kombinasi
          cabutan dari pangkalan data sejarah melebihi sepuluh tahun untuk menghasilkan carta ramalan yang
          mempunyai nilai kebarangkalian tertinggi.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Link href="#hab-ramalan" className="btn-gold w-full sm:w-auto">
            Lihat Ramalan Hari Ini <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#hab-ramalan" className="btn-gold-outline w-full border-gold-300/60 text-gold-100 hover:bg-white/10 sm:w-auto">
            Pilih Loteri Anda
          </Link>
        </div>

        <dl className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['10+', 'Tahun Data'],
            ['6', 'Pakar AI & Statistik'],
            ['10', 'Pasaran 4D'],
            ['100%', 'Telus & Boleh Disahkan'],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-md">
              <dt className="font-poppins text-2xl font-bold text-gold-300">{v}</dt>
              <dd className="mt-1 text-xs text-slate-300">{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
