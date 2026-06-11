import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-balance">
                Terma & Syarat DatoChai
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-center text-muted-foreground/80 mt-4">
                Terma dan syarat penggunaan untuk platform DatoChai. Sila bacalah dengan teliti sebelum menggunakan perkhidmatan kami.
              </p>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Penerimaan Terma</h2>
              <p className="text-muted-foreground/80">
                Bila anda mengakses atau menggunakan laman web DatoChai dan perkhidmatan berkaitan, anda bersepakat juga terikat oleh terma dan syarat penggunaan ini, sama ada anda merupakan pengguna yang terdaftar atau tidak. Sila bacalah terma ini dengan teliti. Jika anda tidak bersetuju dengan sebarang bahagian dalam terma ini, anda tidak dibenarkan menggunakan laman web DatoChai.
              </p>
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Perkonggunaan Platfrom</h2>
              <p className="text-muted-foreground/80">
                Platfrom DatoChai dirahsikan untuk memberikan maklumat ramalan 4D berdasarkan analisis kecerdasan buatan dan statistik. Penggunaplatfrom ini termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground/80">
                <li>Melihat ramalan 4D hari ini untuk berbagai pasar</li>
                <li>Mengakses carta ramalan dan analisis teknikal</li>
                <li>Menggunakan alat bantu seperti pilihan favorit, liking, dan menyalin nombor</li>
                <li>Mengakses educational content tentang statistik dan metodologi ramalan</li>
                <li>Berinteraksi dengan komuniti melalui komen dan perkongsian</li>
              </ul>
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Akaun Pengguna</h2>
              <p className="text-muted-foreground/80">
                Untuk mengakses sebarang fungsi tertentu dari platfrom DatoChai, anda mungkin perlu mencipta akaun. Dalam membuat akaun, anda bertanggungjawab untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground/80">
                <li>Menyediakan maklumat yang betul, terkini, dan lengkap semasa pendaftaran</li>
                <li>Menjaga kerahsiaan kata laluan anda dan tidak membenarkan orang lain menggunaka akaun anda</li>
                <li>Memberitahu kami segera jika anda kurang percaya bahawa akaun anda telah disalahgunakan</li>
                <li>Mematuhi semua undang-undang, peraturan, dan terma syarat yang terpakai</li>
              </ul>
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Takrifan Penyairan</h2>
              <p className="text-muted-foreground/80">
                Segala dan setiap maklumat ramalan, carta ramalan, analisis teknik, educational content, dan apa jua materi lain yang disediakan melalui platfrom DatoChai adalah untuk tujuan hiburan dan edukasi sahaja. Apa jua yang ditawarkan oleh DatoChai BUKAN:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground/80">
                <li>Jaminan kemenangan atau keuntungan dalam apa jua permainan nombor atau loteri</li>
                <li>Nasihat kewangan atau nasihat pelaburan</li>
                <li>Ajaran atau galakkan untuk berjudi melampaui batas yang selesa dan bertanggungjawab</li>
                <li>Ujian atau nasihat perubatan</li>
              </ul>
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Kebebasan dari Jaminan</h2>
              <p className="text-muted-foreground/80">
                Sehingga maksimal yang diijinkan oleh undang-undang yang terpakai, DatoChai dan jemawatannya, ejen, pegawai, dan perjekir tidak memberikan sebarang jaminan, Мыявление, atau representasi, sama ada suggestif atau tersurat, berkenaan dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground/80">
                <li>Ketepatan, kegunaan, atau kelulusan apa jua maklumat yang diberikan melalui platfrom</li>
                <li>Kesesuaian platfrom dengan keperluan tertentu anda</li>
                <li>Ketepatan dan kelulusan apa jua maklumat yang boleh diakses atau diturunkan</li>
                <li>Keesalian, kecepatan, atau keamanan platfrom</li>
                <li>Ketiadaan virus atau komponen berbahaya lain dalam platfrom</li>
              </ul>
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Kumpulanb Penggunaan</h2>
              <p className="text-muted-foreground/80">
                Dalam sesaat yang diijinkan oleh undang-undang yang terpakai, dalam hal sebarang tindakan atau tuntutan yang timbul daripada, berhubung dengan, atau akibat daripada penggunaan platfrom DatoChai, anda hereby setuju untuk membebaskan dan menahan DatoChai dan jemawatannya, ejen, pegawai, dan perjekir dari dan terhadap sebarang dan semua tuntutan, tuduhan, sembrava, ganti rugi, perduitan, belanja, dan kos (termasuk tetapi tidak hanya untuk tan latihan guaman dan kosu guaman) yang timbul daripada atau berkaitan dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground/80">
                <li>Penggunaan atau tidak mampu menggunakan platfrom DatoChai</li>
                <li>Bayanian atau pernyataan apa jua yang dibuat oleh DatoChai atau jemawatannya</li>
                <li>Pelanggaran sebarang undang-undang, peraturan, atau hak pihak ketiga</li>
                <li>Sebarang perkongsian atau penggunaan maklumat yang diberikan oleh DatoChai</li>
                <li>Susu atau penggunaan tawaran promocional</li>
                <li>Pelanggaran hak kekuatan intelektual</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground/80">
                Jika anda ada sebarang soalan tentang terma dan syarat ini, sila hubungi kami di:
              </p>
              <p className="text-sm text-muted-foreground/80">
                <span className="font-medium">Emel:</span>
                <a href="mailto:legal@datochai.com" className="text-primary hover:underline">
                  legal@datochai.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground/80">
                <span className="font-medium">Alamat pos:</span>
                Pejabat Undang-undang DatoChai, Tingkat 15, Menara DatoChai, Jalan Raja Chulan, 50200 Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}