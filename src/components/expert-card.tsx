import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';

interface ExpertCardProps {
  expert: {
    id: number;
    name: string;
    title: string;
    bio: string;
    image: string;
  };
}

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="glass-card flex flex-col items-center text-center p-6">
      <div className="w-24 h-24 mb-4">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-full h-full object-cover rounded-full border-2 border-white/20 dark:border-slate-700/20"
          onError={(e) => {
            e.target.src = '/images/placeholder-expert.svg'; // fallback
          }}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{expert.name}</h3>
      <p className="text-sm text-muted-foreground/80 mb-4">{expert.title}</p>
      <p className="text-sm text-muted-foreground/70 leading-relaxed">{expert.bio}</p>
    </div>
  );
}