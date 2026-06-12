import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PillarPage } from '@/components/pillar/pillar-page';
import { MARKETS, MARKETS_BY_SLUG, SITE } from '@/lib/site-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return MARKETS.map((m) => ({ market: m.slug }));
}

export function generateMetadata({ params }: { params: { market: string } }): Metadata {
  const market = MARKETS_BY_SLUG[params.market];
  if (!market) return {};
  const title = `${market.heroTitle} | DatoChai`;
  const description = `${market.blurb.slice(0, 155)}`;
  const url = `${SITE.domain}/${market.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function MarketPillarPage({ params }: { params: { market: string } }) {
  const market = MARKETS_BY_SLUG[params.market];
  if (!market) notFound();
  return <PillarPage market={market} />;
}
