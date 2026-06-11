import { clsx } from 'clsx';
import { TwMerge } from '@/lib/tw-merge';
import { Sun, Moon, Globe, ArrowUpRight, List } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 dark:border-muted/20">
      {/* Top Section: Main Grid (4 Columns) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand Identity & Pasukan Pakar (E-E-A-T) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo would go here - using text for now */}
              <div className="w-10 h-10 bg-forest-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                DC
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-primary">DatoChai</p>
                <p className="text-sm text-muted-foreground/80">Platform Ramalan 4D Berasaskan AI</p>
              </div>
            </div>

            <h5 className="text-lg font-semibold mb-4">Pasukan Pakar (E-E-A-T)</h5>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground/70 flex items-center space-x-2">
                • Dr Francesco (Prof. Statistik, St.Gallen)
              </p>
              <p className="text-sm text-muted-foreground/70 flex items-center space-x-2">
                • MD. Faizan (PhD AI, NUST)
              </p>
              <p className="text-sm text-muted-foreground/70 flex items-center space-x-2">
                • Xinwu ye (PhD AI, HKU)
              </p>
              <p className="text-sm text-muted-foreground/70 flex items-center space-x-2">
                • MingYang Sun (Prof., Peking Univ)
              </p>
              <p className="text-sm text-muted-foreground/70 flex items-center space-x-2">
                • Jiahui Yang (Sr. Architect, NVIDIA)
              </p>
              <p className="text-sm text-muted-foreground/70 flex items-center space-x-2">
                • YuoCao (AI Specialist, NVIDIA)
              </p>
            </div>
          </div>

          {/* Column 2: Pautan Utama (Quick Links) */}
          <div className="space-y-6">
            <h5 className="text-lg font-semibold mb-4">Pautan Utama</h5>
            <div className="space-y-3">
              <a href="/" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Laman Utama
              </a>
              <a href="/mengenai-datochai" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Mengenai DatoChai
              </a>
              <a href="/pakar-datochai" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Pakar DatoChai
              </a>
              <a href="/metodologi-ramalan-4d" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Metodologi
              </a>
              <a href="/ketepatan-carta-ramalan-4d" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Ketepatan
              </a>
              <a href="/soalan-lazim-tentang-carta-4d" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Soalan Lazim
              </a>
              <a href="/blog" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Blog
              </a>
              <a href="/hubungi" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Column 3: Semua Ramalan 4D (Core Markets) */}
          <div className="space-y-6">
            <h5 className="text-lg font-semibold mb-4">Semua Ramalan 4D</h5>
            <div className="space-y-3">
              <a href="/carta-4d-ramalan-magnum-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Magnum 4D
              </a>
              <a href="/carta-ramalan-lotto-damacai-4d-kuda-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Da Ma Cai 1+3
              </a>
              <a href="/carta-ramalan-4d-sports-toto-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Sports Toto 4D
              </a>
              <a href="/carta-ramalan-4d-grand-dragon-lotto-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Grand Dragon Lotto
              </a>
              <a href="/carta-planbee-9-lotto-4d-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                9 Lotto 4D
              </a>
              <a href="/nobor-ramalan-perdana-4d-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Perdana 4D
              </a>
              <a href="/nobor-ramalan-6d-singapore-pools" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Singapore Pools
              </a>
              <a href="/nobor-ramalan-4d-sabah-88" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                4D Sabah 88
              </a>
              <a href="/nobor-berutuah-4d-sarwak-cash-sweep-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Sarawak Cash Sweep
              </a>
              <a href="/nobor-berutuah-4d-stc-hari-ini" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                4D STC
              </a>
            </div>
          </div>

          {/* Column 4: Perundangan (Legal & Policies) */}
          <div className="space-y-6">
            <h5 className="text-lg font-semibold mb-4">Perundangan</h5>
            <div className="space-y-3">
              <a href="/permainan-bertanggungjawab" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Permainan Bertanggungjawab
              </a>
              <a href="/penapian" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Penafian
              </a>
              <a href="/terma-syarat" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Terma & Syarat
              </a>
              <a href="/dasar-kuki" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Dasar Kuki
              </a>
              <a href="/dasar-privasi" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                Dasar Privasi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Utility Bar */}
      <div className="border-t border-border/50 dark:border-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
            {/* Left Anchor: Copyright information */}
            <div className="text-sm text-muted-foreground/60">
              © 2026 DatoChai. All rights reserved.
            </div>

            {/* Center Alignment: Global Site Toggles */}
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center space-x-2 text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200 p-2 rounded hover:bg-primary/5">
                  <Globe className="w-4 h-4" />
                  <span>MS</span> {/* Would be dynamic based on language */}
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                /* Dropdown would go here in a real implementation */
              </div>

              {/* Theme Mode */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200 p-2 rounded hover:bg-primary/5">
                  <Sun className="w-4 h-4" />
                  <Moon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Right Anchor: Back to Top functionality */}
            <div className="text-sm text-muted-foreground/60">
              <a href="#" className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
                <ArrowUpRight className="w-4 h-4" />
                Kembali ke Atas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}