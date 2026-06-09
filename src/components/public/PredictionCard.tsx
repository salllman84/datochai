import { useState } from 'react';

interface PredictionCardProps {
  numbers: string[];
  lottery: { name: string };
  createdAt: Date;
}

export default function PredictionCard({
  numbers,
  lottery,
  createdAt,
}: PredictionCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(numbers.join(' '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 rounded-3xl backdrop-blur-md p-6 h-full border border-border/50">
      <div className="mb-4">
        <span className="text-xs font-medium text-nvidia-green/80 bg-nvidia-green/10 px-2 py-1 rounded">
          {lottery.name}
        </span>
        <span className="ml-2 text-xs text-muted-foreground">
          {/* Format date as DD/MM/YYYY */}
          {createdAt.toLocaleDateString('ms-MY', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </span>
      </div>

      <div className="text-2xl font-mono font-bold text-foreground mb-4 letter-spacing-wider">
        {numbers.map((num, index) => (
          <span key={index} className="mx-1">
            {num}
          </span>
        ))}
      </div>

      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center px-4 py-2 bg-background/50 hover:bg-background/100 text-sm font-medium rounded-lg border border-border/200 hover:border-border/300 transition-all duration-200 backdrop-blur-sm"
      >
        {copied ? 'Disalin!' : 'Salin Ramalan'}
      </button>
    </div>
  );
}