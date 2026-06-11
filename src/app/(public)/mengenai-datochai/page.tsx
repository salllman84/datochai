import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ExpertCard } from '@/components/expert-card';

export default function AboutPage() {
  const experts = [
    {
      id: 1,
      name: 'Dr. Francesco Audrino',
      title: 'Professor Of Statistics',
      bio: 'Dr. Francesco membawa kepakaran lebih sedekad dalam model ekonometrik dan pembelajaran statistik (statistical learning) dari University of St. Gallen, Switzerland. Di Ramalan 4D Datochai, beliau memastikan setiap algoritma mematuhi piawaian akademik antarabangsa. Analisis deret masa (time-series) beliau ke atas dataset kewangan berskala besar kini diadaptasi secara khusus untuk menapis anomali dalam pasaran loteri, men jadikan setiap carta ramalan kami unik secara saintifik.',
      image: '/images/experts/francesco-audrino.jpg'
    },
    {
      id: 2,
      name: 'Yue Cao',
      title: 'AI / Deep Learning Specialist (NVIDIA)',
      bio: 'Yue Cao ialah pakar teknologi Deep Learning yang memfokuskan kepada pembinaan infrastruktur AI berprestasi tinggi. Pengalaman luas beliau dalam pengoptimuman pemprosesan selari (GPU computing) memAllowkan sistem Datochai 4d menjana dan memproses ratusan ribu iterasi 4D ramalan dalam masa nyata. Beliau merupakan nadi utama dalam merekabhet seni bina Transformer dan LSTM untuk sistem kami.',
      image: '/images/experts/yue-cao.jpg'
    },
    {
      id: 3,
      name: 'Muhammad Faizan',
      title: 'PhD Researcher in AI & Computational Genomics',
      bio: 'Sebagai penyelidik PhD di NUST, Faizan menerapkan teknik Bayesian Optimisation dan Predictive Modelling yang biasanya digunakan dalam genomik komputasi ke dalam ruang lingkup pemode lan nombor rawak. Beliau bertanggungjawab membangunkan matriks penjejakan corak (pattern recognition) yang menjadikan setiap angka pada carta ramalan kami disokong oleh nilai probabiliti yang sah, bukan sekadar kebetulan.',
      image: '/images/experts/muhammad-faizan.jpg'
    },
    {
      id: 4,
      name: 'Xinwu Ye',
      title: 'AI PhD Candidate (HKU)',
      bio: 'Sedang menamatkan pengajian kedoktoran di The University of Hong Kong, Xinwu pakar dalam merekabentuk Large Language Models (LLM) dan penyelesaian masalah saintifik kompleks. Kepakaran beliau dalam mengekstrak i syarat (signals) dari hingar data (data noise) membolehkan Ramalan 4D Datochai mengasingkan corak nombor tulen daripada keputusan cabutan yang tidak konsisten.',
      image: '/images/experts/xinwu-ye.jpg'
    },
    {
      id: 5,
      name: 'Dr. Mingyang Sun',
      title: 'Professor (Research) At Peking University',
      bio: 'Diiktiraf sebagai Top 2% Saintis Dunia oleh Stanford University, Dr. Sun pakar dalam Analitis Data Besar (Big Data Analytics). Algoritma peramalan tenaga yang dicipta beliau kini diaplikasikan oleh Datochai 4d untuk memetakan frekuensi taburan angka. Kepakaran beliau memastikan integriti statistik 4D ramalan kami berada pada tahap industri paling tinggi.',
      image: '/images/experts/mingyang-sun.jpg'
    },
    {
      id: 6,
      name: 'Jiahui Yang',
      title: 'Senior Architect (NVIDIA)',
      bio: 'Sebagai Jurutera Kanan AI Compiler di NVIDIA, Jiahui mengoptimumkan pecutan Deep Learning. Beliau memastikan bahawa beban kerja komputasi sistem carta ramalan kami beroperasi tanpa lengah (latency), memberikan anda ramalan yang segar dan tepat pada masanya sebaik sahaja data cabutan lepas dikemas kini ke dalam pangkalan pelayan kami.',
      image: '/images/experts/jiahui-yang.jpg'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-balance">
                Mengenai DatoChai
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mt-4">
                DatoChai adalah platform ramalan 4D pioneer di Malaysia yang menggabungkan kecerdasan buatan terkini, pembelajaran mesin, dan analisis statistik untuk menyediakan ramalan yang paling tepat dan terkini untuk berbagai pasar loteri utama.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-6">
                <h2 className="text-3xl font-bold text-primary mb-4">Visi DatoChai</h2>
                <p className="text-muted-foreground/80">
                  Menjadi platform ramalan 4D terobosa di Asia Tenggara yang menyediakan ramalan berdasarkan analisis saintifik dan teknologi kecerdasan buatan terdepan, sekaligus mempromosikan permainan yang bertanggungjawab dan edukasi tentang statistik dan probabiliti.
                </p>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-3xl font-bold text-primary mb-4">Misi DatoChai</h2>
                <p className="text-muted-foreground/80">
                  Untuk memberikan ramalan 4D yang paling tepat dan terkini melalui penggunaan model kecerdasan buatan terkini, menyediakan educational content tentang statistik dan analisis data, dan menciptakan komunisti yang bijak dalam permainan nombor.
                </p>
              </div>
            </div>

            {/* Our Story */}
            <div className="glass-card p-6 mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Kisah Kami</h2>
              <p className="text-muted-foreground/80">
                DatoChai didirikan pada tahun 2024 oleh kumpulan pakar statistik, pakar kecerdasan buatan, dan jurutera yang bersemangat dalam menggunakan teknologi terdepan untuk meningkatkan analisis dalam dunia ramalan 4D. setelah bertahun-tahun menggunakan platform-platform tradisional yang didominasi oleh teka-teki dan kepercayaan pada keberuntungan, kami berpendapat bahwa waktunya untuk perubahan.
              </p>
              <p className="text-muted-foreground/80 mt-4">
                Dengan menggabungkan pakar-profesor dari University of St. Gallen, pakar AI dari NVIDIA, dan penyelidik PhD dari berbagai prestigiosa istituisi, kami telah menciptakan suatu platform yang bukan sekadar memberi ramalan, tetapi juga menjelaskan mengapa dan seperti apa ramalan tsb dihasilkan. Kami percaya bahwa transparansi dan pendidikan adalah kunci untuk menciptakan platform yang boleh dipercaya dan berkelanjutan.
              </p>
            </div>

            {/* Meet the Team */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Pasukan Pakar Kami
              </h2>
              <p className="text-lg text-center text-muted-foreground/80 mb-8">
                Kenali pakar-pakar yang di sebalik keberhasilan DatoChai 4d
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {experts.map(expert => (
                  <ExpertCard key={expert.id} expert={expert} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}