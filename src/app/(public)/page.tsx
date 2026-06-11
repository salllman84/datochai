import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Hero } from '@/components/hero';
import { EEA_T } from '@/components/eea-t';
import { LotteryOverview } from '@/components/lottery-overview';
import { Methodology } from '@/components/methodology';
import { AnalyticsAccuracy } from '@/components/analytics-accuracy';
import { BlogFeed } from '@/components/blog-feed';
import { PreFooter } from '@/components/pre-footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <EEA_T />
      <LotteryOverview />
      <Methodology />
      <AnalyticsAccuracy />
      <BlogFeed />
      <PreFooter />
    </main>
  );
}