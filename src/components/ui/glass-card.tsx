import { cn } from '@/lib/cn';

export function GlassCard({
  children,
  className,
  hover = false,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn('glass-card p-6', hover && 'glass-hover', className)}>{children}</Tag>
  );
}
