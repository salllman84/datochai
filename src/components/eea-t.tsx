import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';

export function EEA_T() {
  const experts = [
    {
      id: 1,
      name: 'Dr. Francesco Audrino',
      title: 'Professor Of Statistics',
      bio: 'Dr. Francesco membawa kepakaran lebih sedekad dalam model ekonometrik dan pembelajaran statistik (statistical learning) dari University of St. Gallen, Switzerland. Di Ramalan 4D Datochai, beliau memastikan setiap algoritma mematuhi piawaian akademik antarabangsa. Analisis deret masa (time-series) beliau ke atas dataset kewangan berskala besar kini diadaptasi secara khusus untuk menapis anomali dalam pasaran loteri, men jadikan setiap carta ramalan kami unik secara saintifik.',
      image: '/images/expernts/franceco-audrino.jpg' // placeholder
    },
    {
      id: 2,
      name: 'Yue Cao',
      title: 'AI / Deep Learning Specialist (NVIDIA)',
      bio: 'Yue Cao ialah pakar teknologi Deep Learning yang memfokuskan kepada pembinaan infrastruktur AI berprestasi tinggi. Pengalaman luas beliau dalam pengoptimuman pemprosesan selari (GPU computing) memAllowkan sistem Datochai 4d menjana dan memproses ratusan ribu iterasi 4D ramalan dalam masa nyata. Beliau merupakan nadi utama dalam merekabentuk seni bina Transformer dan LSTM untuk sistem kami.',
      image: '/images/experts/yue-cao.jpg' // placeholder
    },
    {
      id: 3,
      name: 'Muhammad Faizan',
      title: 'PhD Researcher in AI & Computational Genomics',
      bio: 'Sebagai penyelidik PhD di NUST, Faizan menerapkan teknik Bayesian Optimisation dan Predictive Modelling yang biasanya digunakan dalam genomik komputasi ke dalam ruang lingkup pemode lan nombor rawak. Beliau bertanggungjawab membangunkan matriks penjejakan corak (pattern recognition) yang menjadikan setiap angka pada carta ramalan kami disokong oleh nilai probabiliti yang sah, bukan sekadar kebetulan.',
      image: '/images/experts/muhammad-faizan.jpg' // placeholder
    },
    {
      id: 4,
      name: 'Xinwu Ye',
      title: 'AI PhD Candidate (HKU)',
      bio: 'Sedang menamatkan pengajian kedoktoran di The University of Hong Kong, Xinwu pakar dalam merekabentuk Large Language Models (LLM) dan penyelesaian masalah saintifik kompleks. Kepakaran beliau dalam mengekstrak i syarat (signals) dari hingar data (data noise) membolehkan Ramalan 4D Datochai mengasingkan corak nombor tulen daripada keputusan cabutan yang tidak konsisten.',
      image: '/images/experts/xinwu-ye.jpg' // placeholder
    },
    {
      id: 5,
      name: 'Dr. Mingyang Sun',
      title: 'Professor (Research) At Peking University',
      bio: 'Diiktiraf sebagai Top 2% Saintis Dunia oleh Stanford University, Dr. Sun pakar dalam Analitis Data Besar (Big Data Analytics). Algoritma peramalan tenaga yang dicipta beliau kini diaplikasikan oleh Datochai 4d untuk memetakan frekuensi taburan angka. Kepakaran beliau memastikan integriti statistik 4D ramalan kami berada pada tahap industri paling tinggi.',
      image: '/images/experts/mingyang-sun.jpg' // placeholder
    },
    {
      id: 6,
      name: 'Jiahui Yang',
      title: 'Senior Architect (NVIDIA)',
      bio: 'Sebagai Jurutera Kanan AI Compiler di NVIDIA, Jiahui mengoptimumkan pecutan Deep Learning. Beliau memastikan bahawa beban kerja komputasi sistem carta ramalan kami beroperasi tanpa lengah (latency), memberikan anda ramalan yang segar dan tepat pada masanya sebaik sahaja data cabutan lepas dikemas kini ke dalam pangkalan pelayan kami.',
      image: '/images/experts/jiahui-yang.jpg' // placeholder
    }
  ];

  return (
    <section className="py-16 bg-background/50 dark:bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-balance mb-12">
          Pasukan Pakar Saintifik Di Sebalik Ramalan 4D Datochai
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mb-16">
          Kredibiliti Datochai 4d dibina di atas kepakaran intelek manusia sebenar. Kami bukan sekadar skrip automatik; setiap carta ramalan yang diterbitkan telah melalui proses semakan dan pengesahan kualiti oleh pakar akademik dan jurutera industri berprestij global. Kenali arkitek di sebalik inovasi 4D ramalan kami.
        </p>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:block grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experts.map(expert => (
            <div key={expert.id} className="glass-card flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white/20 dark:border-slate-700/20"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-expert.svg'; // fallback
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{expert.name}</h3>
              <p className="text-sm text-muted-foreground/80 mb-4">{expert.title}</p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">{expert.bio}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scrolling carousel */}
        <div className="md:hidden overflow-x-auto space-x-4 pb-8">
          <div className="flex space-x-4">
            {experts.map(expert => (
              <div key={expert.id} className="flex-shrink-0 glass-card flex flex-col items-center text-center p-6 w-64">
                <div className="w-20 h-20 mb-3">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white/20 dark:border-slate-700/20"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-expert.svg'; // fallback
                    }}
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">{expert.name}</h3>
                <p className="text-xs text-muted-foreground/80 mb-2">{expert.title}</p>
                <p className="text-xs text-muted-foreground/70 leading-tight line-clamp-3">{expert.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skeleton loader */}
        <div className="hidden md:block grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4">
                <div className="w-24 h-24 rounded-full bg-white/30 dark:bg-white/20 animate-pulse"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <div className="h-4 w-24 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
              </h3>
              <p className="text-sm text-muted-foreground/80 mb-4">
                <div className="h-2 w-20 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                <div className="h-2 w-40 rounded bg-white/30 dark:bg-white/20 animate-pulse"></div>
                <div className="h-2 w-32 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-1"></div>
                <div className="h-2 w-24 rounded bg-white/30 dark:bg-white/20 animate-pulse mt-1"></div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}