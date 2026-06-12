import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { UtilityBar } from '@/components/ui/utility-bar';
import { BLOG_POSTS } from '@/lib/blog-data';

const latest = BLOG_POSTS.slice(0, 3);

export function BlogFeed() {
  return (
    <Section tone="base">
      <SectionHeader
        eyebrow="Terbitan Terkini"
        title="Hebahan & Terbitan Artikel Saintifik Terkini"
        description="Terus kekal di hadapan pasaran dengan laporan analitikal, kemas kini perisian algoritma, dan pandangan intelektual terkini daripada kumpulan penganalisis Ramalan 4D Datochai."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {latest.map((post) => (
          <article key={post.slug} className="glass-card glass-hover flex flex-col overflow-hidden p-0">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className={`relative h-44 bg-gradient-to-br ${post.gradient}`}>
                <span className="pill-glass absolute left-4 top-4 text-white">{post.category}</span>
              </div>
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="font-poppins text-base font-bold leading-snug text-foreground transition hover:text-forest-700 dark:hover:text-forest-300">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                <UtilityBar likes={post.likes} copyText={`${post.title} — DatoChai`} compact />
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 dark:text-forest-300"
                >
                  Baca <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/blog" className="btn-ghost">
          Lihat Semua Artikel <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
