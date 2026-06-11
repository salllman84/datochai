import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Methodology() {
  const sections = [
    {
      id: 1,
      title: 'Panduan Komprehensif',
      content: 'Dalam panduan komprehensif ini, kami akan menerangkan secara terperinci metodologi yang digunakan oleh plataforma Datochai 4d dalam menghasilkan ramalan 4D yang saintifik dan tepat. Pendekatan kami menggabungkan kecerdasan buatan, pembelajaran mesin, dan analisis statistik yang rigoureux untuk memberikan ramalan yang tidak hanya berasaskan kebangkitan, melainkan juga berdasarkan prinsip-prinsip saintifik yang telah diuji dan diprovekansisasikan.',
      isOpen: false
    },
    {
      id: 2,
      title: 'Evolusi Pengiraan',
      content: 'Sejak awal pembentukan, metodologi pengiraan Datochai 4d telah melibatkan beberapa tahap evolusi yang signifikan. Dari model statistik tradicionale yang bergantung hanya pada analisis frekuensian dasar, kami telah maju ke dalam era kecerdasan buatan yang menggunakan rangkaian neural dalam bentuk LSTM (Long Short-Term Memory) untuk menangkap pola-pola kompleks yang tersembunyi dalam data sejarah. Evolusi ini tidak hanya meningkatkan keakuratan ramalan, tetapi juga membolehkan kami untuk beradaptasi dengan perubahan dalam dinamik pasaran loteri.',
      isOpen: false
    },
    {
      id: 3,
      title: 'Metodologi \'Deep Learning\'',
      content: 'Metodologi deep learning yang digunakan oleh Datochai 4d berasaskan rangkaian neural LSTM yang direkannya khusus untuk menangkap dependensi jangka panjang dalam data seri waktu loteri. LSTM dipilih karenachemicalajahnya dalam menanggang masalah vanishing gradient yang sering dikenali dalam rangkaian neural tradisional ketika sedang memproses data dengan banyak langkah waktu. Arsitektur model kami terdiri dari beberapa lapis LSTM yang bertumpuk, diikuti oleh lapisan dense untuk interpretasi hasil sebelum menghasilkan output akhir dalam bentuk probabiliti untuk setiap nombor yang mungkin dit�arikan.',
      isOpen: false,
      technical: true
    },
    {
      id: 4,
      title: 'Konsep Nombor \'Panas\' dan \'Sejuk\'',
      content: 'Dalam konteks ramalan 4D Datochai, nombor \'panas\' merujuk kepada nombor-nombor yang menunjukkan jangkauan positif yang konsisten dalam beberapa tarikan terkini, manakala nombor \'sejuk\' adalah nombor-nombor yang menunjukkan jangkauan negatif yang signifikan. Konsep ini tidak sekadar berdasarkanアイdea cabar biasa, melainkan didasarkan pada analisis statistik yang rigoureux menggunakan teknik seperti analisis rangkaian waktu (time series analysis) dan model regresi vektor autoregresif (VAR). Kami menggunakan pendekatan hybrid yang menggabungkan signal dari lebih than one market untuk meningkatkan keapanarutan prediksi.',
      isOpen: false
    },
    {
      id: 5,
      title: 'Peranan Manusia',
      content: 'Walaupun plataforma Datochai 4d sangat bergantung pada teknologi kecerdasan buatan dan pembelajaran mesin, peranan manusia tetap amat penting dalam ekosistem ini. Pakar-pakar kita, yang terdiri daripada pakar statistik, pristawal pakar dalam bidang kecerdasan buatan, dan jurutera komputer senior, bertugas untuk menyelia, mentafsir, dan memvalidasi hasil yang hidup daripada model-model komputer kami. Mereka juga bertanggungjawab untuk terus-menerus menyelia model berdasarkan temuan terbaru dalam bidang statistik dan kecerdasan buatan, manakala juga memberi wawasan tentang faktor-faktor eksternal yang mungkin mempengaruhi hasil tarikan loteri seperti perubahan dalam peraturan permainan atau fenomena sosial yang besar.',
      isOpen: false
    },
    {
      id: 6,
      title: 'Mitos Berkenaan Kepastian',
      content: 'Salah satu mito yang paling meluas dalam komuniti penggemar loteri adalah keyakinan bahawa systèmes ramalan boleh menjamin kepastian dalam meramalan nombor yang akan dit�arikan. Dalam kenyataan, tiada sistem ramalan apa pun boleh memberikan jaminan kepastian 100% disebabkan oleh kebetulan inheren dalam permainan loteri itu sendiri. Apa yang Datochai 4d tawarkan bukanlah jaminan kepastian, tetapi derajat keyakinan yang sangat tinggi berbasis pada analisis saintifik yang ketat. Kami berusaha untuk menjurus penguna untuk memahami bahawa ramalan 4D adalah alat bantu dalam membuat keputusan, bukannya giustifikasi untuk berjudi, dan sentiasa menyoroti pentingnya permainan bertanggungjawab.',
      isOpen: false
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex space-x-8">
          {/* Desktop: Sticky Table of Contents */}
          <aside className="w-64 shrink-0 flex-shrink-0">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-50">Isi Kandungan</h3>
            <nav className="space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    // In a real implementation, this would toggle the section
                    // For now, we'll just console.log
                    console.log(`Toggled section: ${section.title}`);
                  }}
                  className={clsx(
                    'w-full text-left text-sm font-medium px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-slate-700/50 transition-colors duration-200',
                    sections.find(s => s.id === section.id)?.isOpen ? 'bg-neutral-100 dark:bg-slate-700/50' : ''
                  )}
                >
                  {section.title}
                  <div className="ml-auto transition-transform duration-200">
                    {sections.find(s => s.id === section.id)?.isOpen ? (
                      <ChevronUp className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-12 text-dark-800 dark:text-neutral-50">
            {sections.map(section => (
              <div key={section.id} className="mb-12 last:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
                  {section.title}
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>{section.content}</p>
                  {section.technical && (
                    <div className="bg-neutral-50 dark:bg-slate-800/50 p-6 rounded-lg mt-6 border-l-4 border-primary">
                      <p className="font-semibold mb-4">Nota Teknis:</p>
                      <p>Analisis matematikal yang lebih lanjut menunjukkan bahawa pendekatan hierarchical ensemble yang digunakan oleh Datochai 4d memberikan peningkatan signifikan dalam keupanarutan model berbanding dengan model tunggal seperti ARIMA atau LSTM sahaja. Kombinasi dari modèles ARIMA, Prophet, dan LSTM dalam bentuk stacked hybrid ensemble membolehkan platform untuk menangkap baik trend jangka panjang maupun pola-pola non-linear yang kompleks dalam data sejarah.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="md:hidden space-y-8">
          {sections.map(section => (
            <div key={section.id} className="mb-8 last:mb-0">
              <div className="flex justify-between items-center p-4 bg-neutral-50 dark:bg-slate-800/50 rounded-lg hover:bg-neutral-100 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  // Toggle section in real implementation
                  const updatedSections = sections.map(s =>
                    s.id === section.id ? { ...s, isOpen: !s.isOpen } : s
                  );
                  // In a real app, we'd update state here
                  console.log(`Toggled section: ${section.title}`);
                }}
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {section.title}
                </h3>
                <div className="transition-transform duration-200">
                  {section.isOpen ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                  )}
                </div>
              </div>
              {section.isOpen && (
                <div className="mt-4 p-4 bg-neutral-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{section.content}</p>
                    {section.technical && (
                      <div className="bg-neutral-50 dark:bg-slate-800/50 p-4 rounded-lg mt-4 border-l-4 border-primary">
                        <p className="font-semibold mb-2">Nota Teknis:</p>
                        <p>Analisis matematikal yang lebih lanjut menunjukkan bahawa pendekatan hierarchical ensemble yang digunakan oleh Datochai 4d memberikan peningkatan signifikan dalam keupanarutan model berbanding dengan model tunggal seperti ARIMA atau LSTM sahaja. Kombinasi dari modèles ARIMA, Prophet, dan LSTM dalam bentuk stacked hybrid ensemble membolehkan platform untuk menangkap baik trend jangka panjang maupun pola-pola non-linear yang kompleks dalam data sejarah.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skeleton loader */}
        <div className="hidden md:flex space-x-8">
          <aside className="w-64 shrink-0 flex-shrink-0">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-50">
              <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
            </h3>
            <nav className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full text-left text-sm font-medium px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-slate-700/50 transition-colors duration-200">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                    <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          <div className="flex-1 space-y-12 text-dark-800 dark:text-neutral-50">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-12 last:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
                  <div className="h-6 w-32 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                </h2>
                <div className="space-y-4">
                  <div className="h-4 w-64 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                  <div className="h-4 w-48 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                  <div className="h-4 w-56 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                  <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                  {true && (
                    <div className="mt-4 p-4 bg-neutral-200 dark:bg-slate-600/50 rounded-lg">
                      <p className="font-semibold mb-2">
                        <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                      </p>
                      <p>
                        <div className="h-4 w-40 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse"></div>
                        <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-slate-600/50 animate-pulse mt-2"></div>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}