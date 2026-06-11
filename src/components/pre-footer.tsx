import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { AlertTriangle } from 'lucide-react';

export function PreFooter() {
  return (
    <section className="border-l-4 border-crimson-600 bg-background/90 dark:bg-muted/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-start space-y-6">
          <h4 className="text-2xl font-bold text-crimson-600">
            Notis Pematuhan Undang-Undang & Dasar Permainan Bertanggungjawab
          </h4>
          <p className="text-lg max-w-2xl text-muted-foreground/80 leading-relaxed">
            Platform maklumat Ramalan 4D Datochai dan perkhidmatan analitis AI yang disediakannya bertujuan semata-mata untuk simulasi akademik, pembelajaran data statistik, dan hiburan peribadi. Nombor-nombor yang dijakan melalui enjin Datochai 4d adalah berdasarkan model pengiraan matematik siri masa dan tidak boleh ditafsirkan sebagai jaminan kewangan, tawaran pelaburan, mahupun gelaran rasmi untuk berjudi. Penarikan tiket loteri sentiasa melibatkan faktor risiko rawak yang bebas sepenuhnya (independent random variable). Penggunaan mana-mana 4D ramalan atau rujukan pada carta ramalan di laman web ini adalah tertakluk kepada risiko dan pertimbangan logik pengguna itu sendiri. Jangan sekali-kali mempertaruhkan wang pendahuluan, wang simpanan kritikal, atau berbelanja melebihi kemampuan peribadi anda. Jika anda merasakan aktiviti ini menjejaskan kesihatan mental, kesejahteraan keluarga, atau status kewangan anda, sila hentikan penggunaan serta merta dan dapatkan bantuan profesional melalui Talian Bantuan Kaunseling Kebangsaan Malaysia (seperti AKPK atau NGO berkaitan). Bermainlah dengan bijak, waras, dan bertanggungjawab penuh ke atas diri anda (Umur 18+ Tahun Sahaja).
          </p>
        </div>
      </div>
    </section>
  );
}