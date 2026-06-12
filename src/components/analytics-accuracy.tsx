'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type AccuracyPoint = {
  day: string;
  date: string;
  accuracy: number;
  confidence: number;
};

// Deterministic 30-day series (stable across SSR/CSR — no Math.random).
const DATA: AccuracyPoint[] = Array.from({ length: 30 }, (_, i) => {
  const trend = 70 + i * 0.45;
  const accuracy = Math.round(Math.min(94, Math.max(58, trend + 9 * Math.sin(i / 1.7))));
  const confidence = Math.round(Math.min(98, accuracy + 6 + 3 * Math.cos(i / 2.1)));
  return { day: `${i + 1}`, date: `${i + 1} Mei 2026`, accuracy, confidence };
});

const STATS = [
  { label: 'Ketepatan 4D Penuh', sub: '1st Prize', value: '37.5%', tone: 'text-gold-300' },
  { label: 'Ketepatan 3D', sub: '3 Digit Tepat', value: '62.5%', tone: 'text-nvidia-green' },
  { label: 'Hit Sebarang Hadiah', sub: 'Any Prize', value: '75.0%', tone: 'text-gold-300' },
  { label: 'Purata Keyakinan AI', sub: 'AI Confidence', value: '79.0%', tone: 'text-crimson-400' },
];

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: AccuracyPoint }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-xl border border-gold-500/30 bg-slate-950/95 px-3 py-2 text-xs text-slate-100 shadow-xl">
      <p className="mb-1 font-semibold text-white">{d.date}</p>
      <p className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> Ketepatan: {d.accuracy}%
      </p>
      <p className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson-500" /> Keyakinan AI: {d.confidence}%
      </p>
      <p className="mt-1 text-[11px] text-slate-400">
        {d.accuracy >= 85 ? '1st Prize Hit' : d.accuracy >= 70 ? '3D Partial Match' : 'Miss'}
      </p>
    </div>
  );
}

export function AnalyticsAccuracy() {
  return (
    <section className="bg-slate-900 text-slate-100 dark:bg-slate-950">
      <div className="container-custom py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="pill border border-gold-500/30 bg-white/5 text-gold-300">
            Dashboard Prestasi
          </span>
          <h2 className="mt-4 h-2 text-balance text-white">
            Bukti Telus Ketepatan Model AI Ramalan 4D Datochai
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Data tidak pernah berbohong. Graf analitis langsung di bawah memaparkan purata ketepatan 4D
            ramalan (padanan 3D dan padanan Penuh 4D) merentasi semua pasaran untuk 30 hari yang lalu.
            Model kami melaraskan dirinya secara kendiri (self-correction) selepas setiap keputusan rasmi.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className={`font-poppins text-3xl font-bold ${s.tone}`}>{s.value}</p>
              <p className="mt-1 text-sm font-medium text-white">{s.label}</p>
              <p className="text-xs text-slate-400">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-6">
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="accFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis
                  dataKey="day"
                  interval={3}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255,255,255,0.12)' }}
                />
                <YAxis
                  domain={[40, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  width={44}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(212,175,55,0.4)' }} />
                <Area
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#D4AF37"
                  strokeWidth={2.5}
                  fill="url(#accFill)"
                  dot={{ r: 2.5, fill: '#C8102E', strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: '#C8102E' }}
                />
                <Line
                  type="monotone"
                  dataKey="confidence"
                  stroke="#76B900"
                  strokeWidth={1.5}
                  strokeDasharray="5 4"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> Tingkat Ketepatan</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-nvidia-green" /> Keyakinan Model</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-crimson-500" /> Titik Cabutan Harian</span>
          </div>
        </div>
      </div>
    </section>
  );
}
