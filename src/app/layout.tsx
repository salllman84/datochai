import './globals.css';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Ramalan 4D Datochai Hari Ini | AI Saintifik & Carta Ramalan',
  description: 'Dapatkan 4D ramalan paling saintifik di Malaysia dengan Datochai 4d. Akses carta ramalan Magnum, Toto & Damacai yang dijana oleh AI & pakar data hari ini.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Carta Ramalan 4D DatoChai | AI Saintifik & Statistik 10+ Tahun',
    description: 'Platform ramalan 4D berasaskan Kecerdasan Buatan (AI), Machine Learning & Analisis Statistik oleh Pakar NVIDIA & Penyelidik PhD.',
    images: [
      {
        url: '/uploads/banners/og-home-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Carta Ramalan 4D DatoChai',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carta Ramalan 4D DatoChai | AI Saintifik & Statistik 10+ Tahun',
    description: 'Platform ramalan 4D berasaskan Kecerdasan Buatan (AI), Machine Learning & Analisis Statistik oleh Pakar NVIDIA & Penyelidik PhD.',
    images: [
      {
        url: '/uploads/banners/og-home-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Carta Ramalan 4D DatoChai',
      },
    ],
  },
  alternates: {
    canonical: 'https://datochai.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}