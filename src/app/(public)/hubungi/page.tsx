import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { SITE } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Hubungi DatoChai | Sokongan & Maklumat Perhubungan',
  description:
    'Hubungi pasukan DatoChai untuk sokongan, apa-apa soalan, atau maklumat berkaitan dengan platform ramalan 4D kami.',
};

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero
        tone="brand"
        eyebrow="Sokongan Pelanggan"
        title="Hubungi DatoChai"
        subtitle="Apakah anda ada sebarang soalan, maklumat, atau maklum balas? Kami di sini untuk membantu."
        crumbs={[{ label: 'Hubungi DatoChai' }]}
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
          <p>
            DatoChai berkomitmen untuk memberikan sokongan yang terbaik kepada semua pengguna platform kami.
            Sila gentengani salah satu dari kaedah di bawah ini untuk berhubung dengan pasukan kami.
          </p>
          <p>
            Masa gerak balas kami adalah selama 24 jam bekerja. Untuk urgensi yang berkaitan dengan
            keselamatan atau isu teknikal kritikal, sila gunakan nombor telefon kecemasan yang disediakan.
          </p>
        </div>

        {/* Quick contact methods */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-900/10 text-forest-700">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-poppins text-lg font-bold text-foreground">Surel Rasmi</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Untuk pertanyaan umum, sokongan, dan maklumat
                </p>
                <a href="mailto:info@datochai.com" className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-500">
                  info@datochai.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-900/10 text-forest-700">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-poppins text-lg font-bold text-foreground">Telefon Pejabat</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Untuk sokongan teknikal dan urgensi dalam jam pejabat
                </p>
                <a href="tel:+60312345678" className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-500">
                  +603 1234 5678
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-900/10 text-forest-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-poppins text-lg font-bold text-foreground">Alamat Pejabat</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pejabat Utama DatoChai
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Tingkat 15, Menara DatoChai<br />
                  Jalan Raja Chulan, 50200<br />
                  Kuala Lumpur, Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* ===== CONTACT FORM SECTION ===== */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Maklumat Camaran"
          title="Maklumat Camaran Sokongan"
          description="Untuk memastikan kami boleh membantu anda secara efisient, sila inkludikan maklumat berikut dalam mesej anda."
        />
        <div className="glass-card p-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-poppins text-xl font-bold text-foreground">Jarangan Sertai dalam Mesej Anda</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Nama penuh dan nombor telefon</strong> - agar kami boleh menghubungi anda balas
                </li>
                <li>
                  <strong>Pasaran 4D yang bersangkutan</strong> - Magnum, Toto, Damacai, Perdana, 9 Lotto, dll.
                </li>
                <li>
                  <strong>Butiran spesifik soalan atau isu</strong> - termasuk tarikh masa jika relevan
                </li>
                <li>
                  <strong>Skrim surat atau gambar yang berkaitan</strong> - jika anda ada bukti visual
                </li>
                <li>
                  <strong>Keputusan mengenai cara terbaik untuk menghubungi anda balas</strong> - telefon, surat, atau video panggil
                </li>
              </ul>
            </div>

            {/* Simple contact form (mockup since no backend) */}
            <form className="mt-6 space-y-4" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                  Nama Penuh
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="field w-full"
                  placeholder="Masukkan nama penuh anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="field w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">
                  Perkara
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="field w-full"
                >
                  <option value="">-- Pilih kategori --</option>
                  <option value="general">Soalan Umum</option>
                  <option value="technical">Isu Teknikal</option>
                  <option value="feedback">Maklum Balas & Cadangan</option>
                  <option value="partnership">Kerjasama & Perniagaan</option>
                  <option value="other">Lain-lain</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                  Mesej
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="field w-full"
                  placeholder="Beritahu kami bagaimana kami boleh membantu anda..."
                />
              </div>

              <button type="submit" className="btn-gold w-auto">
                Hantar Mesej <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground">
              Nota: Ini adalah paparan statik. Dalam versi produkti, borang ini akan menghubungkan
              ke sistem sokongan sebenar. Untuk sekarang, sila gunakan maklumat perhubungan di atas
              untuk berhubung dengan kami secara langsung.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== RESPONSE TIME INFO ===== */}
      <Section tone="white">
        <div className="glass-card p-8">
          <div className="space-y-6">
            <h2 className="font-poppins text-xl font-bold text-foreground">
              Masa Gerak Balas Sokongan Kami
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-10 w-10 rounded-2xl bg-forest-900/10 text-forest-700 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </span>
                </div>
                <p className="font-poppins text-2xl font-extrabold text-foreground">
                  1-2 Jam
                </p>
                <p className="text-sm text-muted-foreground">
                  Sokongan Live (Jam Pekant)
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-10 w-10 rounded-2xl bg-forest-900/10 text-forest-700 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </span>
                </div>
                <p className="font-poppins text-2xl font-extrabold text-foreground">
                  2-4 Jam
                </p>
                <p className="text-sm text-muted-foreground">
                  Sokongan Emel
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-10 w-10 rounded-2xl bg-forest-900/10 text-forest-700 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </span>
                </div>
                <p className="font-poppins text-2xl font-extrabold text-foreground">
                  1 Hari Kerja
                </p>
                <p className="text-sm text-muted-foreground">
                  Permohonan Formal
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-10 w-10 rounded-2xl bg-forest-900/10 text-forest-700 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-forest-600" />
                  </span>
                </div>
                <p className="font-poppins text-2xl font-extrabold text-foreground">
                  24 Jam
                </p>
                <p className="text-sm text-muted-foreground">
                  Maklumat Perbendaharaan
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}