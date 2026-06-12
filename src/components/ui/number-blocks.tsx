import { cn } from '@/lib/cn';

type Variant = 'gold' | 'crimson' | 'ghost';

const variantClass: Record<Variant, string> = {
  gold: 'number-block',
  crimson: 'number-block-crimson',
  ghost: 'number-block-ghost',
};

export function NumberBlocks({
  numbers,
  variant = 'gold',
  size = 'md',
  className,
}: {
  numbers: string[];
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClass =
    size === 'lg'
      ? 'h-16 min-w-16 px-3 text-2xl sm:h-20 sm:min-w-20 sm:text-3xl'
      : size === 'sm'
        ? 'h-10 min-w-10 px-2 text-base'
        : 'h-14 min-w-14 px-2.5 text-xl';

  return (
    <div className={cn('flex flex-wrap gap-2.5', className)}>
      {numbers.map((n, i) => (
        <span key={`${n}-${i}`} className={cn(variantClass[variant], sizeClass, 'tracking-wider')}>
          {n}
        </span>
      ))}
    </div>
  );
}
