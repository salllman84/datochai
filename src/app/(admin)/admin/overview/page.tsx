import { Suspense } from 'react'
import HeroWelcome from './HeroWelcome'
import KPIMatrix from './KPIMatrix'
import AnalyticsLeft from './AnalyticsLeft'
import AnalyticsRight from './AnalyticsRight'
import LotteryMatrix from './LotteryMatrix'
import Skeleton from '@/components/ui/skeleton'

export default function OverviewPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Hero Welcome State */}
      <Suspense fallback={<Skeleton className="h-16 w-full" />}>
        <HeroWelcome />
      </Suspense>

      {/* KPI Matrix */}
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-16" />
        ))}
      </div>}>
        <KPIMatrix />
      </Suspense>

      {/* Split-Column Analytics Layout */}
      <Suspense fallback={<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <Skeleton className="h-20" />
          <Skeleton className="h-48" />
        </div>
        <div className="lg:col-span-5">
          <Skeleton className="h-20" />
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <AnalyticsLeft />
          </div>
          <div className="lg:col-span-5">
            <AnalyticsRight />
          </div>
        </div>
      </Suspense>

      {/* Draw Calendar Matrix (Lotteries) */}
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>}>
        <LotteryMatrix />
      </Suspense>
    </div>
  )
}