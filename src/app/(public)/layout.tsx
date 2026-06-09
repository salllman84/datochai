import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeToggle from '@/components/ui/theme-toggle';
import LanguageToggle from '@/components/ui/language-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DatoChai',
  description: 'AI-Powered 4D Analytics Platform',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background min-h-screen flex flex-col">
        <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
          <nav className="mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <span className="text-2xl font-bold text-nvidia-green">DatoChai</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-background/80 backdrop-blur-md border-t border-border/50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Lotteries */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Lotteries</h3>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>Magnum 4D</li>
                  <li>Sports Toto</li>
                  <li>Damacai</li>
                  <li>Sabah 4D</li>
                  <li>Sarawak 4D</li>
                  <li>STC</li>
                  <li>Poker</li>
                  <li>Lotto</li>
                  <li>Powerball</li>
                </ul>
              </div>

              {/* About Us */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">About Us</h3>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>
                    <a href="/about" className="hover:text-foreground/100 transition-colors">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="/about#team" className="hover:text-foreground/100 transition-colors">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="/about#mission" className="hover:text-foreground/100 transition-colors">
                      Mission & Vision
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Legal</h3>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>
                    <a href="/legal/terms" className="hover:text-foreground/100 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/legal/privacy" className="hover:text-foreground/100 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/legal/cookies" className="hover:text-foreground/100 transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Compliance */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Compliance</h3>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>
                    <a href="/compliance" className="hover:text-foreground/100 transition-colors">
                      Regulatory Compliance
                    </a>
                  </li>
                  <li>
                    <a href="/compliance/responsible-gaming" className="hover:text-foreground/100 transition-colors">
                      Responsible Gaming
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-foreground/60">
              © {new Date().getFullYear()} DatoChai. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}