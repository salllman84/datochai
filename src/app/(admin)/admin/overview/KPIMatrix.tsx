export default function KPIMatrix() {
  // Mock data
  const kpis = [
    {
      title: 'Ramalan Hari Ini',
      value: '12',
      trend: 'up', // green upward trend arrow
    },
    {
      title: 'Trafik Organik',
      value: '1.2K',
      trend: null, // no trend for now
    },
    {
      title: 'Ketepatan Purata',
      value: '68%',
      trend: null, // we would have a sparkline here, but we'll mock with a simple text
    },
    {
      title: 'Post Diterbitkan Bulan Ini',
      value: '5',
      trend: null,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 flex flex-col items-start gap-2"
        >
          <h2 className="font-inter text-sm text-muted-foreground">
            {kpi.title}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="font-poppins text-2xl font-bold">
              {kpi.value}
            </span>
            {kpi.trend === 'up' && (
              <span className="text-green-500">
                ↑
              </span>
            )}
          </div>
          {kpi.title === 'Ketepatan Purata' && (
            <>
              <div className="w-10 h-2 bg-green-500 rounded" />
              {/* Mock sparkline */}
            </>
          )}
        </div>
      ))}
    </div>
  )
}