'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Tukar mod gelap atau terang"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-white/60 px-1 transition dark:bg-slate-800/70',
        className,
      )}
    >
      <span
        className={cn(
          'grid h-7 w-7 place-items-center rounded-full bg-gold-500 text-slate-950 shadow transition-transform duration-300',
          isDark ? 'translate-x-7' : 'translate-x-0',
        )}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}
