import Skeleton from '@/components/ui/skeleton'

export default function OverviewLoading() {
  return (
    <div className="flex h-[calc(100vh-4.5rem)] flex-col overflow-hidden">
      {/* Hero Welcome State Skeleton */}
      <div className="h-16 flex items-center px-6">
        <Skeleton className="h-6 w-40" />
      </div>
      {/* KPI Matrix Skeleton */}
      <div className="flex-0 flex flex-col md:flex-row md:flex-wrap gap-6 p-6">
        <Skeleton className="flex-1 min-w-0 h-16" />
        <Skeleton className="flex-1 min-w-0 h-16" />
        <Skeleton className="flex-1 min-w-0 h-16" />
        <Skeleton className="flex-1 min-w-0 h-16" />
      </div>
      {/* Split-Column Analytics Layout Skeleton */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 p-6">
        {/* Left Pane Skeleton */}
        <div className="flex-1 flex flex-col gap-4">
          <Skeleton className="h-20" /> {/* Card title */}
          <Skeleton className="h-48" /> {/* Chart */}
        </div>
        {/* Right Pane Skeleton */}
        <div className="flex-1 flex flex-col gap-4">
          <Skeleton className="h-20" /> {/* Recent activity title */}
          <Skeleton className="h-24" /> {/* Activity item */}
          <Skeleton className="h-24" /> {/* Activity item */}
          <Skeleton className="h-24" /> {/* Activity item */}
          <Skeleton className="h-12 w-full" /> {/* CTA button */}
        </div>
      </div>
      {/* Draw Calendar Matrix Skeleton */}
      <div className="flex-0 flex flex-col md:flex-row md:flex-wrap gap-4 p-6">
        {/* 9 lottery cards */}
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} className="flex-1 min-w-0 h-24" />
        ))}
      </div>
    </div>
  )
}