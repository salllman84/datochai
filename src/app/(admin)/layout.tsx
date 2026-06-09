'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  useEffect(() => {
    if (isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false)
    }
  }, [pathname, isMobileSidebarOpen])

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const isActive = (href: string) => pathname.startsWith(href)

  const lotteries = [
    { name: 'Carta Ramalan Magnum 4D', slug: 'carta-ramalan-magnum-4d-hari-ini' },
    { name: 'Carta 4D Ramalan Damacai 4D', slug: 'carta-4d-ramalan-damacai-kuda-hari-ini' },
    { name: 'Ramalan Lotto Sports Toto 4D', slug: 'ramalan-lotto-sports-toto-4d-hari-ini' },
    { name: 'Grand Dragon Lotto 4D', slug: 'ramalan-4d-grand-dragon-lotto-hari-ini' },
    { name: '9 Lotto 4D', slug: 'carta-planbee-9-lotto-4d-hari-ini' },
    { name: 'Perdana 4D', slug: 'carta-ramalan-4d-perdana-hari-ini' },
    { name: 'Singapore Pools', slug: 'carta-ramalan-4d-singapore-pools-hari-ini' },
    { name: 'Sabah 88', slug: 'carta-ramalan-4d-sabah-88' },
    { name: 'Sandakan Turf Club', slug: 'carta-ramalan-sandakan-turf-club' },
  ]

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-slate-900">
      {!isSidebarCollapsed && window.innerWidth < 768 && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={handleMobileSidebarToggle} />
      )}

      {!((window.innerWidth < 768) && !isMobileSidebarOpen) && (
        <aside className={`fixed left-0 top-14 bottom-0 z-40 flex w-[256px] ${isSidebarCollapsed ? 'w-16' : ''} transition-all duration-300 border-r border-white/10 dark:border-slate-700/50 bg-white/65 dark:bg-slate-900/65 backdrop-blur-md`}>
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center justify-center">
              <Link href="/admin/overview">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-white font-poppins">Dato</span>
                  <span className="h-4 w-4 bg-yellow-400"></span>
                </div>
              </Link>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 pt-4">
              <Link
                href="/admin/overview"
                className={`flex w-items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${isActive('/admin/overview') ? 'bg-yellow-50/50 text-yellow-400' : 'text-white/70 hover:bg-white/10 dark:hover:bg-slate-700/50'}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="shrink-0">
                    <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 011-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-3m-4 6l2-2m0 0l7-7 7 7M5 15V3a2 2 0 012-2h4a2 2 0 012 2v8m-7 3h10"/></svg>
                  </span>
                  {!isSidebarCollapsed && <span>Dashboard</span>}
                </div>
              </Link>

              <div className="mb-4">
                <button
                  onClick={() => { }}
                  className={`flex w-items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md mb-2 ${lotteries.some(l => isActive(`/admin/predictions/${l.slug}`)) ? 'bg-yellow-50/50 text-yellow-400' : 'text-white/70 hover:bg-white/10 dark:hover:bg-slate-700/50'}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="shrink-0">
                      <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 002 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v2m2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2-2v2a2 2 0 002 2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v2h2a2 2 0 002-2v-2a2 2 0 00-2-2H11a2 2 0 00-2 2v2a2 2 0 002 2z"/></svg>
                    </span>
                    {isSidebarCollapsed ? (
                      <span>Ramalan</span>
                    ) : (
                      <span>Ramalan Harian</span>
                    )}
                    {lotteries.some(l => isActive(`/admin/predictions/${l.slug}`)) && (
                      <span className="ml-auto transition-transform duration-200">
                        <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                      </span>
                    )}
                  </div>
                </button>
                <div className="hidden px-4 pt-2">
                  {lotteries.map((lottery) => (
                    <Link
                      key={lottery.slug}
                      href={`/admin/predictions/${lottery.slug}`}
                      className={`block px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md ${isActive(`/admin/predictions/${lottery.slug}`) ? 'bg-yellow-50/50 text-yellow-400' : 'text-white/60 hover:bg-white/10 dark:bg-slate-700/50'}`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="shrink-0">
                          <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
                        </span>
                        {isSidebarCollapsed ? (
                          <span>{lottery.name.substring(0, 4)}...</span>
                        ) : (
                          <span>{lottery.name}</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/admin/content"
                className={`flex w-items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${isActive('/admin/content') ? 'bg-yellow-50/50 text-yellow-400' : 'text-white/70 hover:bg-white/10 dark:bg-slate-700/50'}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="shrink-0">
                    <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 01-2 2v6a2 2 0 01-2-2h-4.586a1 1 0 00-.707.293l-1.414 1.414A2 2 0 013 16.414V9.586a1 1 0 00-.293-.707l-.98.49A2 2 0 014.586 3H9a2 2 0 000 4h10a2 2 0 000-2z"/></svg>
                  </span>
                  {isSidebarCollapsed ? (
                    <span>K&B</span>
                  ) : (
                    <span>Kandungan & Blog</span>
                  )}
                </div>
              </Link>
            </nav>
            <div className="px-4 pb-4">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs text-white/50 dark:text-slate-400">Quick Actions</span>
              </div>
              <div className="flex space-x-2">
                <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
                <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
                <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {isMobileSidebarOpen && window.innerWidth < 768 && (
        <div className="fixed inset-0 z-30 flex items-end bg-black/50">
          <div className="w-64 bg-white/65 dark:bg-slate-900/65 backdrop-blur-md border border-white/10 dark:border-slate-700/50">
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-center">
                <Link href="/admin/overview">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white font-poppins">Dato</span>
                    <span className="h-4 w-4 bg-yellow-400"></span>
                  </div>
                </Link>
              </div>
              <nav className="flex-1 overflow-y-auto px-2 pt-4">
                <Link
                  href="/admin/overview"
                  className={`flex w-items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md mb-2 ${isActive('/admin/overview') ? 'bg-yellow-50/50 text-yellow-400' : 'text-white/70 hover:bg-white/10 dark:bg-slate-700/50'}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="shrink-0">
                      <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 011-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-3m-4 6l2-2m0 0l7-7 7 7M5 15V3a2 2 0 012-2h4a2 2 0 012 2v8m-7 3h10"/></svg>
                    </span>
                    {!isSidebarCollapsed && <span>Dashboard</span>}
                  </div>
                </Link>
              </nav>
              <div className="px-4 pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-xs text-white/50 dark:text-slate-400">Quick Actions</span>
                </div>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
                  <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
                  <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className={`${!isSidebarCollapsed && window.innerWidth >= 768 ? 'left-64' : 'left-16'} fixed top-0 right-0 z-50 flex h-16 items-center px-4 bg-white/65 dark:bg-slate-900/65 backdrop-blur-md border-b border-white/10 dark:border-slate-700/50 transition-all duration-300`}>
        <div className="flex items-center space-x-2">
          <button
            onClick={!isSidebarCollapsed && window.innerWidth < 768 ? handleMobileSidebarToggle : handleSidebarToggle}
            className="p-2 rounded-md hover:bg-white/10 dark:hover:bg-slate-700/50 transition-colors"
          >
            <span className="h-4 w-4 bg-white"></span>
          </button>
          <Link href="/admin/overview">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white font-poppins">Dato</span>
              <span className="h-4 w-4 bg-yellow-400"></span>
            </div>
          </Link>
        </div>

        <div className="flex-1 mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search... (Ctrl+K)"
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 bg-slate-400"></span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 rounded-md hover:bg-white/10 dark:bg-slate-700/50 transition-colors">
              <span className="h-4 w-4 bg-white"></span>
              <span className="absolute -top-1 -right-1 flex h-2 w-2 items-center justify-center bg-yellow-400 text-xs font-bold text-white rounded-full">
                3
              </span>
            </button>
          </div>

          <div className="relative">
            <button className="p-2 rounded-md hover:bg-white/10 dark:bg-slate-700/50 transition-colors">
              EN
            </button>
          </div>

          <button
            className="p-2 rounded-md hover:bg-white/10 dark:bg-slate-700/50 transition-colors"
            onClick={() => {
              const isDark = document.documentElement.classList.contains('dark')
              if (isDark) {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
              } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
              }
            }}
          >
            {document.documentElement.classList.contains('dark') ? (
              <span className="h-4 w-4 bg-yellow-400"></span>
            ) : (
              <span className="h-4 w-4 bg-yellow-400"></span>
            )}
          </button>

          <div className="relative">
            <div className="p-2 rounded-md hover:bg-white/10 dark:bg-slate-700/50 transition-colors">
              {session?.user?.image ? (
                <div className="h-8 w-8">
                  <img src={session.user.image} alt="User avatar" className="object-cover w-full h-full rounded-full" />
                </div>
              ) : (
                <div className="h-8 w-8 bg-yellow-400 flex items-center justify-center text-white text-sm">
                  {session?.user?.name?.charAt(0) ?? 'U'}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className={`${!isSidebarCollapsed && window.innerWidth >= 768 ? 'ml-64' : 'ml-16'} mt-14 flex-1 p-6`}>
        {children}
      </main>
    </div>
  )
}