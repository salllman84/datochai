import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample historical accuracy data
const getMockHistoryData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    date: `2026-05-${String(i + 1).padStart(2, '0')}`,
    accuracy: Math.floor(Math.random() * 20) + 75, // 75-95%
  }));
};

export function PredictionHistory() {
  const historyData = getMockHistoryData();

  return (
    <section className="mb-12">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Keputusan & Ketepatan</h2>

        <div className="space-y-4">
          {/* Recent results */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span>Tarikan Terkini:</span>
              <span className="text-gold-600">4D: 1234</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>Tarikan Kemarin:</span>
              <span className="text-muted-foreground/60">4D: 5678</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>Tarikan 2 Hari Lepas:</span>
              <span className="text-muted-foreground/60">4D: 9012</span>
            </div>
          </div>

          {/* Accuracy chart */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Graf Ketepatan 30 Hari</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={historyData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={({ index }) => {
                  // Show date every 5 days
                  return index % 5 === 0 ? (
                    <text textAnchor="middle" fill="#94a3b8" fontSize={10}>
                      {index + 1}
                    </text>
                  ) : null;
                }} />
                <YAxis domain={[0, 100]} tickCount={5} tick={({ index }) => (
                  <text textAnchor="end" fill="#94a3b8" fontSize={10}>
                    {index * 25}%
                  </text>
                )} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend verticalAlign="bottom" height={36} />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#D4AF37"
                  strokeWidth={2}
                  dot={false}
                >
                  <circle cx={0} cy={0}
                    r={4}
                    fill="#D4AF37"
                  />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}