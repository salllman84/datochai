import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { RefreshCw } from 'lucide-react';

// Sample prediction data - in a real app, this would come from an API
const getMockPredictionData = (type: string) => {
  // Different number ranges for different lottery types
  const ranges: Record<string, { min: number; max: number; count: number }> = {
    'magnum-4d': { min: 1, max: 9999, count: 4 },
    'sports-toto-4d': { min: 1, max: 9999, count: 4 },
    'damacai-4d': { min: 1, max: 9999, count: 4 },
    'perdana-4d': { min: 1, max: 9999, count: 4 },
    '9-lotto-4d': { min: 1, max: 99, count: 2 }, // 2 numbers for 9 Lotto
    'grand-dragon-lotto': { min: 1, max: 99, count: 2 },
    'singapore-pools': { min: 1, max: 999999, count: 6 }, // 6D
    'sabah-88': { min: 1, max: 99, count: 2 },
    'sarawak-cash-sweep': { min: 1, max: 9999, count: 4 },
    'stc': { min: 1, max: 99, count: 2 },
  };

  const range = ranges[type] || { min: 1, max: 9999, count: 4 };
  const numbers: number[] = [];

  for (let i = 0; i < range.count; i++) {
    numbers.push(Math.floor(Math.random() * (range.max - range.min + 1)) + range.min);
  }

  // Format numbers with leading zeros
  return numbers.map(num =>
    String(num).padStart(range.count <= 2 ? 2 : 4, '0')
  );
};

export function PredictionToday({ lotteryType }: { lotteryType: string }) {
  const numbers = getMockPredictionData(lotteryType);
  const ranges: Record<string, { min: number; max: number; count: number }> = {
    'magnum-4d': { min: 1, max: 9999, count: 4 },
    'sports-toto-4d': { min: 1, max: 9999, count: 4 },
    'damacai-4d': { min: 1, max: 9999, count: 4 },
    'perdana-4d': { min: 1, max: 9999, count: 4 },
    '9-lotto-4d': { min: 1, max: 99, count: 2 },
    'grand-dragon-lotto': { min: 1, max: 99, count: 2 },
    'singapore-pools': { min: 1, max: 999999, count: 6 },
    'sabah-88': { min: 1, max: 99, count: 2 },
    'sarawak-cash-sweep': { min: 1, max: 9999, count: 4 },
    'stc': { min: 1, max: 99, count: 2 },
  };

  const range = ranges[lotteryType] || { min: 1, max: 9999, count: 4 };
  const isHDigits = lotteryType === 'singapore-pools';

  return (
    <section className="mb-12">
      <div className="glass-card p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-primary">Ramalan Hari Ini</h2>
          <button className="p-2 hover:bg-primary/5 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="space-x-4 flex-wrap">
          {numbers.map((num, index) => (
            <div key={index} className="prediction-number flex items-center justify-center">
              <span className="text-2xl font-bold text-gold-600 dark:text-gold-400">{num}</span>
            </div>
          ))}
        </div>

        {/* Mini chart showing recent trends */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Trend 7 Hari Terakhir</h3>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart
              data={[
                { name: 'Hari 1', value: Math.floor(Math.random() * 100) },
                { name: 'Hari 2', value: Math.floor(Math.random() * 100) },
                { name: 'Hari 3', value: Math.floor(Math.random() * 100) },
                { name: 'Hari 4', value: Math.floor(Math.random() * 100) },
                { name: 'Hari 5', value: Math.floor(Math.random() * 100) },
                { name: 'Hari 6', value: Math.floor(Math.random() * 100) },
                { name: 'Hari 7', value: Math.floor(Math.random() * 100) },
              ]}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" tick={({ index }) => (
                index % 2 === 0 ? (
                  <text textAnchor="middle" fill="#94a3b8" fontSize={10}>
                    {index + 1}
                  </text>
                ) : null
              )} />
              <YAxis domain={[0, 100]} tickCount={4} tick={({ index }) => (
                <text textAnchor="end" fill="#94a3b8" fontSize={10}>
                  {index * 25}%
                </text>
              )} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend verticalAlign="bottom" height={36} />
              <Bar dataKey="value" fill="#D4AF37" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 text-sm text-muted-foreground/60 text-center">
          Ramalan di atas adalah ramalan untuk hari ini berdasarkan analisis AI dan statistik terkini.
          {' '}
          <span className="text-primary/80">Klik untuk melihat analisis lengkap</span>
        </div>
      </div>
    </section>
  );
}