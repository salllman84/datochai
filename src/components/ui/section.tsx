import { cn } from '@/lib/cn';

type Tone = 'base' | 'light' | 'white' | 'dark' | 'transparent';

const toneClass: Record<Tone, string> = {
  base: 'bg-transparent',
  light: 'bg-neutral-50 dark:bg-slate-950/40',
  white: 'bg-white dark:bg-slate-900/40',
  dark: 'bg-slate-900 text-slate-100 dark:bg-slate-950',
  transparent: 'bg-transparent',
};

export function Section({
  children,
  tone = 'base',
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-14 sm:py-20', toneClass[tone], className)}>
      <div className={cn('container-custom', containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  invert?: boolean;
}) {
  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow ? (
        <span className={cn('pill-gold mb-4', align === 'center' && 'mx-auto')}>{eyebrow}</span>
      ) : null}
      <h2 className={cn('h-2 text-balance', invert ? 'text-white' : 'text-foreground')}>{title}</h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed', invert ? 'text-slate-300' : 'text-muted-foreground')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
