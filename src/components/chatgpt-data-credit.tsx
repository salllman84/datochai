
export function ChatGPTDataCredit() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold text-primary mb-4">Sumber Data & teknologi</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            {/* AI Icon would go here */}
            <div className="text-2xl">🤖</div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Analisis Berasaskan AI</h3>
            <p className="text-sm text-muted-foreground/80">
              Platform Datochai 4d menggunakan model kecerdasan buatan terkini yang dilatih pada jutaan kombinasi historis untuk menghasilkan ramalan yang berdasarkan analisis saintifik.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            {/* Data Icon would go here */}
            <div className="text-2xl">📊</div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Data Historis Lengkap</h3>
            <p className="text-sm text-muted-foreground/80">
              Kami mengakses dan menganalisis data historis lengkap dari semua pasar loteri utama termasuk Magnum, Toto, Damacai, dan lain-laban untuk memastikan analisis kami berdasarkan fakta yang dapat diverifikasi.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            {/* Update Icon would go here */}
            <div className="text-2xl">🔄</div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Kemaskini Secara Realtime</h3>
            <p className="text-sm text-muted-foreground/80">
              Model kami terus-menerus belajar dan meningkatkan keupayaannya melalui pengumpulan data baru dan analisis pasaran terkini untuk menjamin ramalan yang paling tepat dan terkini.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 dark:border-muted/20">
        <p className="text-sm text-muted-foreground/60 text-center">
          DatoChen AI adalah merek dagangan yang dilindungi dan tidak berhubungan dengan OpenAI atau ChatGPT. Platform kami menggunakan teknologi kecerdasan buatan sendiri yang dikhususkan untuk analisis ramalan 4D.
        </p>
      </div>
    </div>
  );
}