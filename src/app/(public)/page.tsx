'use client';

import { useEffect, useState } from 'react';
import PredictionCard from '@/components/public/PredictionCard';
import { Suspense } from 'react';

// Skeleton loader for prediction card
const PredictionCardSkeleton = () => (
  <div className="bg-white/80 dark:bg-slate-900/80 rounded-3xl backdrop-blur-md p-6 h-full">
    <div className="h-4 w-full rounded mb-2 animate-pulse"></div>
    <div className="space-y-2">
      <div className="h-3 w-1/2 rounded animate-pulse"></div>
      <div className="h-2 w-1/3 rounded animate-pulse"></div>
      <div className="flex items-center space-x-2">
        <div className="h-2 w-4 rounded animate-pulse"></div>
        <div className="h-2 w-4 rounded animate-pulse"></div>
        <div className="h-2 w-4 rounded animate-pulse"></div>
      </div>
      <div className="h-2 w-full rounded animate-pulse"></div>
    </div>
  </div>
);

// Simulate fetching published predictions from Prisma
async function fetchPublishedPredictions(): Promise<Array<{
  id: string;
  numbers: string[];
  lottery: { name: string };
  createdAt: Date;
}>> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data - in real app, replace with Prisma query
  return [
    {
      id: '1',
      numbers: ['1', '2', '3', '4'],
      lottery: { name: 'Magnum 4D' },
      createdAt: new Date(),
    },
    {
      id: '2',
      numbers: ['5', '6', '7', '8'],
      lottery: { name: 'Sports Toto' },
      createdAt: new Date(Date.now() - 3600000),
    },
    {
      id: '3',
      numbers: ['9', '0', '1', '2'],
      lottery: { name: 'Damacai' },
      createdAt: new Date(Date.now() - 7200000),
    },
    {
      id: '4',
      numbers: ['3', '3', '3', '3'],
      lottery: { name: 'Sabah 4D' },
      createdAt: new Date(Date.now() - 10800000),
    },
    {
      id: '5',
      numbers: ['7', '7', '8', '8'],
      lottery: { name: 'Sarawak 4D' },
      createdAt: new Date(Date.now() - 14400000),
    },
  ];
}

export default function PublicHomePage() {
  const [predictions, setPredictions] = useState<Array<{
    id: string;
    numbers: string[];
    lottery: { name: string };
    createdAt: Date;
  }> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedPredictions()
      .then((data) => {
        if (!cancelled) {
          setPredictions(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch predictions:', error);
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-background/50 backdrop-blur-sm min-h-[60vh] flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Platform Analitik 4D Berkuasa AI
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Dapatkan ramalan 4D terkini yang dianalisis oleh kecerdasan buatan untuk meningkatkan peluang kemenangan anda.
          </p>
          <button
            onClick={() => {
              document.getElementById('lottery-feed')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-nvidia-green/20 hover:bg-nvidia-green/30 text-nvidia-green font-medium px-6 py-3 rounded-lg backdrop-blur-sm border border-nvidia-green/50 hover:border-nvidia-green/100 transition-all duration-300"
          >
            Lihat Ramalan Terkini
          </button>
        </div>
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-nvidia-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-nvidia-green/10 rounded-full blur-3xl animate-pulse-slow delay-1500"></div>
        </div>
      </section>

      {/* Lottery Feed Grid */}
      <section id="lottery-feed" className="px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Ramalan Terkini
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            // Show skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <Suspense key={index} fallback={<PredictionCardSkeleton />}>
                <PredictionCardSkeleton />
              </Suspense>
            ))
          ) : predictions === null ? (
            <p className="col-span-full text-center text-foreground/50">
              Gagal memuat ramalan. Sila cuba lagi nanti.
            </p>
          ) : predictions.length === 0 ? (
            <p className="col-span-full text-center text-foreground/50">
              Tiada ramalan yang ditemui.
            </p>
          ) : (
            predictions.map((pred) => (
              <Suspense key={pred.id} fallback={<PredictionCardSkeleton />}>
                <PredictionCard
                  numbers={pred.numbers}
                  lottery={pred.lottery}
                  createdAt={pred.createdAt}
                />
              </Suspense>
            ))
          )}
        </div>
      </section>
    </main>
  );
}