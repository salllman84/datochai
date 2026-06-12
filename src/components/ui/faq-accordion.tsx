'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/cn';

export type FaqItem = { q: string; a: React.ReactNode };

export function FaqAccordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="glass-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-poppins text-base font-semibold text-foreground">{item.q}</span>
              <ChevronDown
                className={cn('h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300', isOpen && 'rotate-180')}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
