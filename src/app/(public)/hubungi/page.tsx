import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-balance">
                Hubungi Kami
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mt-4">
                Ada sebarang pertanyaan, cadangan, atau membutuhkan bantuan? Sila hubungi kami menggunakan borang di bawah atau melalui saluran-sosial media kami.
              </p>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-6">
              <h2 className="text-3xl font-bold text-primary mb-6">Mesej Kami</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Nama Penuh</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input bg-background/50 dark:bg-muted/20 text-primary placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-lg"
                      placeholder="Masukkan nama penuh anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-input bg-background/50 dark:bg-muted/20 text-primary placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Subjek</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-input bg-background/50 dark:bg-muted/20 text-primary placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-lg"
                    placeholder="Masukkan subjek mesej anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Mesej</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-input bg-background/50 dark:bg-muted/20 text-primary placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-lg resize-none"
                    placeholder="Tulis mesej anda di sini..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-gold px-6 py-3 text-sm font-medium"
                  >
                    Hantar Mesej
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Maklumat Perhubungan</h3>
                <p className="text-sm text-muted-foreground/80 space-y-2">
                  <span className="font-medium">Alamat:</span>
                  Tingkat 12, Menara DatoChai, Jalan Raja Chulan, 50200 Kuala Lumpur, Malaysia
                </p>
                <p className="text-sm text-muted-foreground/80 space-y-2">
                  <span className="font-medium">Telefon:</span>
                  +603-1234 5678
                </p>
                <p className="text-sm text-muted-foreground/80 space-y-2">
                  <span className="font-medium">Emel:</span>
                  <a href="mailto:info@datochai.com" className="text-primary hover:underline">
                    info@datochai.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground/80 space-y-2">
                  <span className="font-medium">Waktu Operasi:</span>
                  Isnin - Jumaat: 9.00 pagi - 6.00 petang
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Ikuti Kami di Media Sosial</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 rounded hover:bg-primary/5 transition-colors duration-200">
                    {/* Facebook Icon */}
                    <div className="text-2xl">📘</div>
                  </a>
                  <a href="#" className="p-3 rounded hover:bg-primary/5 transition-colors duration-200">
                    {/* Twitter Icon */}
                    <div className="text-2xl">🐦</div>
                  </a>
                  <a href="#" className="p-3 rounded hover:bg-primary/5 transition-colors duration-200">
                    {/* Instagram Icon */}
                    <div className="text-2xl">📷</div>
                  </a>
                  <a href="#" className="p-3 rounded hover:bg-primary/5 transition-colors duration-200">
                    {/* YouTube Icon */}
                    <div className="text-2xl">📺</div>
                  </a>
                  <a href="#" className="p-3 rounded hover:bg-primary/5 transition-colors duration-200">
                    {/* Telegram Icon */}
                    <div className="text-2xl">✈️</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}