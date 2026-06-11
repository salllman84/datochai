import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';

export function Hero() {
  return (
    <section className={clsx(
      'min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8',
      'hero-gradient relative overflow-hidden'
    )}>
      {/* Particle.js neural network simulation - simplified with Tailwind */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(var(--tw-gradient-stops))] from-[#006400] via-black opacity-80"
             style={{ '--tw-gradient-stops': '0%, 100%' }}></div>
        {/* Neural network dots and lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[80%] h-[80%]">
            {/* Generate some dots and lines for neural network effect */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute">
                <div className="w-2 h-2 bg-gold-500/60 rounded-full
                              animate-[pulse_3s_ease-in-out_infinite]
                              delay-[${i * 0.2}s]"></div>
              </div>
            ))}
            {/* Connecting lines */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-[2px] h-[20px] bg-gold-500/30
                              rotate-[${i * 45}deg] origin-bottom
                              animate-[pulse_3s_ease-in-out_infinite]
                              delay-[${i * 0.15}s]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-neutral-900 dark:text-neutral-50 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
          Carta Ramalan 4D DatoChai | Platform Analisis AI Saintifik & Rangkaian Neural Terkini
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
          Dikuasakan oleh Artificial Intelligence, Machine Learning & Analisis Statistik 10+ Tahun yang dipantau oleh Pakar NVIDIA Senior AI Architect dan Penyelidik PhD.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-muted-foreground/80">
          Selamat datang ke pusat kecemerlangan sains data terunggul di Malaysia. Berbeza dengan platform tekaan rawak tradisional, Ramalan 4D Datochai memanfaatkan kuasa pengkomputeran berprestasi tinggi untuk merungkai corak tersembunyi di sebalik siri nombor. Model AI kami memproses jutaan kombinasi cabutan dari pangkalan data sejarah melebihi sepuluh tahun untuk menghasilkan carta ramalan yang mempunyai nilai kebarangkalian tertinggi. Kepakaran sains data kami mengubah industri 4D ramalan daripada seka dar permainan nasib kepada simulasi statistik empirikal. Sertai ribuan pengguna yang kini menggunakan Datochai 4d sebagai kompas rujukan utama mereka setiap hari cabutan.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center mt-8">
          <a href="#/predictions" className="btn-gold flex-1 sm:flex-nowrap">
            Lihat Ramalan Hari Ini
          </a>
          <a href="#/lottery" className="btn-gold-outline flex-1 sm:flex-nowrap">
            Pilih Loteri Anda
          </a>
        </div>

        {/* Skeleton loader for Hero */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[60vh] h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent animate-pulse-slow"></div>
            <div className="flex space-x-4">
              <div className="w-24 h-2 bg-white/30 dark:bg-white/20 rounded-full animate-pulse-slow"></div>
              <div className="w-24 h-2 bg-white/30 dark:bg-white/20 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}