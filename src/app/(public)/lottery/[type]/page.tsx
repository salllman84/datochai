import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PredictionToday } from '@/components/prediction-today';
import { PredictionHistory } from '@/components/prediction-history';
import { PredictionAnalysis } from '@/components/prediction-analysis';
import { ChatGPTDataCredit } from '@/components/chatgpt-data-credit';

export const generateStaticParams = async () => {
  return [
    { type: 'magnum-4d' },
    { type: 'sports-toto-4d' },
    { type: 'damacai-4d' },
    { type: 'perdana-4d' },
    { type: '9-lotto-4d' },
    { type: 'grand-dragon-lotto' },
    { type: 'singapore-pools' },
    { type: 'sabah-88' },
    { type: 'sarawak-cash-sweep' },
    { type: 'stc' },
  ];
};

export default function LotteryPage({ params }: { params: { type: string } }) {
  const lotteryType = params.type;

  // Map route names to display names
  const lotteryNames: Record<string, string> = {
    'magnum-4d': 'Magnum 4D',
    'sports-toto-4d': 'Sports Toto 4D',
    'damacai-4d': 'Damacai 4D (Kuda)',
    'perdana-4d': 'Perdana 4D',
    '9-lotto-4d': '9 Lotto 4D',
    'grand-dragon-lotto': 'Grand Dragon Lotto (GDL)',
    'singapore-pools': 'Singapore Pools',
    'sabah-88': '4D Sabah 88',
    'sarawak-cash-sweep': 'Sarawak Cash Sweep',
    'stc': '4D STC',
  };

  const displayName = lotteryNames[lotteryType] || lotteryType;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-balance">
                Carta Ramalan {displayName} Hari Ini
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mt-4">
                Dapatkan ramalan {displayName} paling terkini yang dijana menggunakan AI dan analisis statistik terkini.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Prediction Column */}
              <div className="lg:col-span-2">
                <PredictionToday lotteryType={lotteryType} />
                <PredictionHistory lotteryType={lotteryType} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <PredictionAnalysis lotteryType={lotteryType} />
                <ChatGPTDataCredit />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}