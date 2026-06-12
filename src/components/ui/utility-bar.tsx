'use client';

import { Bookmark, Check, Copy, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * Engagement utility bar mandated for every post/data card:
 * Favorite (Bookmark), Like (Heart + count), Copy (to clipboard).
 * Implements "Prominent Visibility with Gated Actuation" — the visual state
 * updates optimistically while an inline prompt nudges guests to sign in.
 */
export function UtilityBar({
  likes = 0,
  copyText = '',
  className,
  compact = false,
}: {
  likes?: number;
  copyText?: string;
  className?: string;
  compact?: boolean;
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(id);
  }, [toast]);

  const flash = (msg: string) => setToast(msg);

  const onCopy = async () => {
    try {
      if (copyText && typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(copyText);
      }
      setCopied(true);
      flash('Disalin ke papan klip');
      setTimeout(() => setCopied(false), 1600);
    } catch {
      flash('Tidak dapat menyalin');
    }
  };

  const iconBtn =
    'grid place-items-center rounded-full border border-border bg-white/50 text-muted-foreground transition hover:border-gold-500/60 hover:text-foreground dark:bg-white/5';
  const size = compact ? 'h-9 w-9' : 'h-10 w-10';

  return (
    <div className={cn('relative flex items-center gap-2', className)}>
      <button
        type="button"
        aria-pressed={saved}
        aria-label="Simpan ke kegemaran"
        onClick={() => {
          setSaved((v) => !v);
          flash(saved ? 'Dialih keluar' : 'Log masuk untuk segerakkan kegemaran');
        }}
        className={cn(iconBtn, size, saved && 'border-gold-500 text-gold-600')}
      >
        <Bookmark className={cn('h-4 w-4', saved && 'fill-gold-500')} />
      </button>

      <button
        type="button"
        aria-pressed={liked}
        aria-label="Suka"
        onClick={() => {
          setLiked((v) => !v);
          flash(liked ? 'Dialih keluar' : 'Log masuk untuk simpan suka anda');
        }}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border border-border bg-white/50 px-3 text-sm text-muted-foreground transition hover:border-crimson-500/60 hover:text-foreground dark:bg-white/5',
          compact ? 'h-9' : 'h-10',
          liked && 'border-crimson-500 text-crimson-600',
        )}
      >
        <Heart className={cn('h-4 w-4', liked && 'fill-crimson-500 text-crimson-500')} />
        <span className="tabular-nums">{likes + (liked ? 1 : 0)}</span>
      </button>

      <button
        type="button"
        aria-label="Salin ke papan klip"
        onClick={onCopy}
        className={cn(iconBtn, size, copied && 'border-forest-600 text-forest-700')}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>

      <span
        role="status"
        className={cn(
          'pointer-events-none absolute -top-10 left-0 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-200 dark:bg-white dark:text-slate-900',
          toast ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
        )}
      >
        {toast}
      </span>
    </div>
  );
}
