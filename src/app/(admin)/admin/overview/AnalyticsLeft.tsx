export default function AnalyticsLeft() {
  // Mock data for the chart
  // In a real app, we would fetch this data and use Recharts
  return (
    <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6">
      <h2 className="font-poppins text-lg font-bold mb-4">
        Trafik Pillar Pages & Ketepatan 30 Hari
      </h2>
      {/* Mock chart - in reality, use Recharts Line Chart */}
      <div className="h-48 w-full bg-muted/50 rounded-lg">
        {/* Placeholder for chart */}
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Line Chart (Mocked)
        </div>
      </div>
    </div>
  )
}