import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Flame,
  Mail,
  Search,
  Sparkles,
  User,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { UtilityBar } from '@/components/ui/utility-bar';
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  TAG_CLOUD,
  type BlogPost,
} from '@/lib/blog-data';
import { SITE } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Ramalan 4D DatoChai Blog | Berita, Analisis AI & Tip Loteri',
  description:
    'Terokai blog rasmi DatoChai untuk analisis mendalam, strategi Rangkaian Neural, dan berita terkini mengenai pasaran loteri Magnum, Toto & Da Ma Cai.',
  alternates: { canonical: `${SITE.domain}/blog` },
  openGraph: {
    title: 'Ramalan 4D DatoChai Blog | Berita, Analisis AI & Tip Loteri',
    description:
      'Terokai blog rasmi DatoChai untuk analisis mendalam, strategi Rangkaian Neural, dan berita terkini mengenai pasaran loteri Magnum, Toto & Da Ma Cai.',
    url: `${SITE.domain}/blog`,
    type: 'website',
  },
};

const featured: BlogPost | undefined = BLOG_POSTS.find((p) => p.featured);
const restPosts: BlogPost[] = BLOG_POSTS.filter((p) => p.slug !== featured?.slug);
const trendingPosts: BlogPost[] = BLOG_POSTS.filter((p) => p.trending);

function PostMeta({
  post,
  className = '',
}: {
  post: BlogPost;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground ${className}`}
    >
      <span className="flex items-center gap-1">
        <User className="h-3.5 w-3.5" /> {post.author}
      </span>
      <span className="flex items-center gap-1">
        <CalendarDays className="h-3.5 w-3.5" /> {post.date}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" /> {post.readTime}
      </span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Section tone="light">
      <SectionHeader
        eyebrow="Blog DatoChai"
        title="Hebahan, Analisis AI & Tip Loteri 4D"
        description="Analisis mendalam, strategi Rangkaian Neural, dan berita terkini mengenai pasaran loteri Magnum, Sports Toto, Da Ma Cai dan banyak lagi — daripada pasukan penyelidik kami."
        align="left"
      />

      {/* ===== MOBILE: horizontally scrollable category pill bar ===== */}
      <div className="sticky top-[4.75rem] z-20 -mx-4 mb-6 bg-neutral-50/85 px-4 py-3 backdrop-blur-md dark:bg-slate-950/70 lg:hidden">
        <div className="flex snap-x snap-mandatory items-center gap-2 overflow-x-auto no-scrollbar">
          {BLOG_CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              className={
                i === 0
                  ? 'pill-forest shrink-0 snap-start whitespace-nowrap'
                  : 'pill-glass shrink-0 snap-start whitespace-nowrap'
              }
            >
              {cat}
            </span>
          ))}
          <span className="grid h-9 w-9 shrink-0 snap-start place-items-center rounded-full border border-border bg-white/60 text-muted-foreground dark:bg-white/5">
            <Search className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* ===================== LEFT: MAIN FEED ===================== */}
        <div className="lg:col-span-8">
          {/* ----- Featured hero card ----- */}
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className={`group relative block min-h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br ${featured.gradient} glass-hover`}
            >
              <span className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/35 to-slate-900/10" />
              <span className="pill-gold absolute left-5 top-5 z-10 shadow-lg">
                <Sparkles className="h-3.5 w-3.5" /> Artikel Pilihan
              </span>
              <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end p-6 sm:p-8">
                <span className="pill-glass mb-3 w-fit text-white">{featured.category}</span>
                <h2 className="font-poppins text-2xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/90 line-clamp-2">
                  {featured.excerpt}
                </p>
                <PostMeta post={featured} className="mt-4 text-slate-200/80" />
                <div className="mt-5">
                  <UtilityBar
                    likes={featured.likes}
                    copyText={`${SITE.domain}/blog/${featured.slug}`}
                  />
                </div>
              </div>
            </Link>
          ) : null}

          {/* ----- DESKTOP: 2-column grid of remaining posts ----- */}
          <div className="mt-8 hidden grid-cols-2 gap-6 lg:grid">
            {restPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-card glass-hover flex flex-col overflow-hidden p-0"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className={`relative h-44 bg-gradient-to-br ${post.gradient}`}>
                    <span className="pill-glass absolute left-3 top-3 text-white">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-poppins text-base font-bold leading-snug text-foreground transition-colors hover:text-forest-700 dark:hover:text-forest-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <PostMeta post={post} className="mt-4" />
                  <div className="mt-4 border-t border-border/60 pt-4">
                    <UtilityBar
                      compact
                      likes={post.likes}
                      copyText={`${SITE.domain}/blog/${post.slug}`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ----- MOBILE: vertical list view ----- */}
          <div className="mt-8 flex flex-col gap-5 lg:hidden">
            {restPosts.map((post) => (
              <article key={post.slug} className="glass-card flex gap-4 p-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="shrink-0"
                  aria-label={post.title}
                >
                  <span
                    className={`block h-24 w-24 rounded-2xl bg-gradient-to-br ${post.gradient}`}
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="pill-glass mb-1.5 w-fit text-[0.65rem]">
                    {post.category}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-poppins text-sm font-bold leading-snug text-foreground">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-3">
                    <UtilityBar
                      compact
                      likes={post.likes}
                      copyText={`${SITE.domain}/blog/${post.slug}`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ===================== RIGHT: STICKY SIDEBAR ===================== */}
        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 space-y-6">
            {/* Widget 1 — Search */}
            <div className="glass-card p-5">
              <h2 className="mb-3 font-poppins text-base font-bold text-foreground">
                Cari Artikel
              </h2>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  name="blog-search"
                  placeholder="Cari analisis, tip atau pasaran…"
                  aria-label="Cari artikel blog"
                  className="w-full rounded-full border border-input bg-white/70 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-ring/40 dark:bg-slate-900/50"
                />
              </div>
            </div>

            {/* Widget 2 — Trending predictions */}
            <div className="glass-card p-5">
              <h2 className="mb-4 font-poppins text-base font-bold text-foreground">
                Ramalan Popular
              </h2>
              <ul className="space-y-1">
                {trendingPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-forest-900/5 dark:hover:bg-white/5"
                    >
                      <Flame className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-forest-700 dark:group-hover:text-forest-300">
                          {post.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3 — Category tag cloud */}
            <div className="glass-card p-5">
              <h2 className="mb-4 font-poppins text-base font-bold text-foreground">
                Kategori Loteri
              </h2>
              <div className="flex flex-wrap gap-2">
                {TAG_CLOUD.map((tag) => (
                  <span
                    key={tag}
                    className="pill-glass cursor-default transition hover:border-gold-500/60 hover:text-gold-700 dark:hover:text-gold-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Widget 4 — Newsletter */}
            <div className="glass-card overflow-hidden p-5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-900/10 text-forest-700 dark:text-forest-300">
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="mt-3 font-poppins text-base font-bold text-foreground">
                Langgan Hebahan
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Terima analisis AI terkini dan kemas kini model 4D terus ke peti masuk anda.
              </p>
              <form className="mt-4 space-y-3" action="#">
                <input
                  type="email"
                  name="newsletter-email"
                  required
                  placeholder="Alamat e-mel anda"
                  aria-label="Alamat e-mel untuk hebahan"
                  className="field"
                />
                <button type="submit" className="btn-forest w-full">
                  Langgan Sekarang <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-3 text-[0.7rem] leading-relaxed text-muted-foreground">
                Kami menghormati privasi anda. Berhenti melanggan pada bila-bila masa.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
