import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Dot
} from 'recharts';

// Sample data for the last 30 days - in a real app, this would come from an API
const mockData = Array.from({ length: 30 }, (_, i) => ({
  date: `2026-05-${String(i + 1).padStart(2, '0')}`,
  accuracy: Math.floor(Math.random() * 20) + 75, // 75-95% accuracy
  confidence: Math.floor(Math.random() * 20) + 80, // 80-100% confidence
  hitType: Math.random() > 0.7 ? '1st Prize' : Math.random() > 0.4 ? '3D Partial' : 'Miss'
}));

export function AnalyticsAccuracy() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-balance mb-12">
          Bukti Telus Ketepatan Model AI Ramalan 4D Datochai
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mb-16">
          Data tidak pernah berbohong. Di Datochai 4d, ketepatan bukan sekadar tuntutan pemasaran kosong; ia adalah metrik telus yang kami paparkan kepada awam. Graf analitis langsung di bawah memaparkan purata ketepatan 4D ramalan (padanan 3D dan padanan Penuh 4D) merentasi semua pasaran untuk tempoh 30 hari yang lalu. Model pembelajaran mesin kami melaraskan dirinya secara kendiri (self-correction) selepas setiap keputusan rasmi diumumkan, membolehkan lengkung prestasi carta ramalan kami menunjukkan traj ektori menaik yang konsisten setiap suku tahun. Semak log perbandingan ramalan harian vs keputusan sebenar kami tanpa sebarang tapisan. Kepercayaan anda, dijamin oleh matematik.
        </p>

        {/* Chart container */}
        <div className="mt-10">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={mockData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={({ index }) => {
                // Show date every 5 days to avoid crowding
                return index % 5 === 0 ? (
                  <text textAnchor="middle" fill="#94a3b8" fontSize={12}>
                    {index + 1}
                  </text>
                ) : null;
              }} />
              <YAxis domain={[0, 100]} tickCount={5} tick={({ index }) => (
                <text textAnchor="end" fill="#94a3b8" fontSize={12}>
                  {index * 20}%
                </text>
              )} />
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '4px', padding: '8px' }}
                labelStyle={{ color: '#f8fafc', fontSize: '13px', fontWeight: '600' }}
                wrapperStyle={{ }}
                itemStyle={{ }}
                itemSeparator={': '}
                cursor={{ }}
                isAnimationActive={false}
              >
                {(props) => {
                  const { active, payload } = props;
                  if (active && payload && payload.length) {
                    const datum = payload[0].payload;
                    const dateIndex = mockData.findIndex(d => d.date === datum.date);
                    const dayData = mockData[dateIndex];

                    return (
                      <div className="text-sm space-y-2">
                        <div className="font-medium">
                          Hari {datum.date.split('-')[2]} Bulan 5, 2026
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gold-500 rounded-full mr-2"></div>
                            <span>Ketepatan: {datum.accuracy}%</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-crimson-600 rounded-full mr-2"></div>
                            <span>Keyakinan AI: {datum.confidence}%</span>
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                          <span>Jenis Hasil: {dayData.hitType}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              </Tooltip>
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => value === 'accuracy' ? 'Tingkat Ketepatan' : 'Keyakinan Model'}
                wrapperStyle={{ }}
                itemStyle={{
                  marginRight: 16,
                  fontSize: 14
                }}
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#D4AF37"
                strokeWidth={2}
                dot={false}
              >
                <Dot
                  r={4}
                  fill="#D4AF37"
                />
              </Line>
              <Line
                type="monotone"
                dataKey="confidence"
                stroke="#C8102E"
                strokeWidth={2}
                dot={false}
              >
                <Dot
                  r={4}
                  fill="#C8102E"
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skeleton loader */}
        <div className="mt-10">
          <div className="h-6 w-32 rounded bg-slate-800/50 mb-4 animate-pulse"></div>
          <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mb-8">
            <span className="inline-block h-4 w-24 rounded bg-slate-800/50 animate-pulse"></span>
            <span className="inline-block h-4 w-32 rounded bg-slate-800/50 animate-pulse ms-2"></span>
            <span className="inline-block h-4 w-28 rounded bg-slate-800/50 animate-pulse block mt-2"></span>
            <span className="inline-block h-4 w-20 rounded bg-slate-800/50 animate-pulse inline-block"></span>
            <span className="inline-block h-4 w-16 rounded bg-slate-800/50 animate-pulse inline-block ms-2"></span>
          </p>
          <div className="h-40 w-full bg-slate-800/50 rounded animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}