'use client';

import { useEffect, useState } from 'react';

function nextDraw(): number {
  // Target the next 19:00 (typical Malaysian draw time) in the user's locale.
  const now = new Date();
  const target = new Date(now);
  target.setHours(19, 0, 0, 0);
  if (target.getTime() <= now.getTime()) target.setDate(target.getDate() + 1);
  return target.getTime();
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export function Countdown({ label = 'Cabutan Seterusnya' }: { label?: string }) {
  const [target] = useState(nextDraw);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const h = remaining === null ? null : Math.floor(remaining / 3_600_000);
  const m = remaining === null ? null : Math.floor((remaining % 3_600_000) / 60_000);
  const s = remaining === null ? null : Math.floor((remaining % 60_000) / 1000);

  const cells: [string, number | null][] = [
    ['Jam', h],
    ['Minit', m],
    ['Saat', s],
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-slate-300">{label}</span>
      <div className="flex items-center gap-1.5">
        {cells.map(([unit, value]) => (
          <div
            key={unit}
            className="grid min-w-[3rem] place-items-center rounded-xl border border-white/10 bg-white/10 px-2 py-1.5 backdrop-blur-md"
          >
            <span className="font-poppins text-xl font-bold tabular-nums text-gold-300">
              {value === null ? '--' : pad(value)}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
