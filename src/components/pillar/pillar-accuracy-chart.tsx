'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Point = { day: string; date: string; accuracy: number };

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: Point }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-xl border border-gold-500/30 bg-slate-950/95 px-3 py-2 text-xs text-slate-100 shadow-xl">
      <p className="mb-1 font-semibold text-white">{d.date}</p>
      <p className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> Ketepatan: {d.accuracy}%
      </p>
      <p className="mt-1 text-[11px] text-slate-400">
        {d.accuracy >= 85 ? '1st Prize Hit' : d.accuracy >= 70 ? '3D Partial Match' : 'Miss'}
      </p>
    </div>
  );
}

export function PillarAccuracyChart({ seed = 0 }: { seed?: number }) {
  // Deterministic, market-specific series — phase-shifted by the seed.
  const data: Point[] = Array.from({ length: 30 }, (_, i) => {
    const trend = 68 + i * 0.5;
    const accuracy = Math.round(
      Math.min(95, Math.max(55, trend + 10 * Math.sin((i + seed) / 1.8))),
    );
    return { day: `${i + 1}`, date: `${i + 1} Mei 2026`, accuracy };
  });

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 12, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id={`pillarFill-${seed}`} x1="0" y1="0" x2="0" y2="1">
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
            width={40}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(212,175,55,0.4)' }} />
          <Area
            type="monotone"
            dataKey="accuracy"
            stroke="#D4AF37"
            strokeWidth={2.5}
            fill={`url(#pillarFill-${seed})`}
            dot={{ r: 2, fill: '#C8102E', strokeWidth: 0 }}
            activeDot={{ r: 5, fill: '#C8102E' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
