import Image from 'next/image';
import { Bookmark, Heart, Copy } from 'lucide-react';
import Link from 'next/link';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    thumbnail: string;
    likes: number;
    bookmarks: number;
    slug: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)] transition-all duration-300">
      <div className="glass-card overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={640}
            height={360}
            className="w-full h-48 object-cover"
            priority
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground/60">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <Bookmark className="w-4 h-4 text-gold-500" />
                <span className="text-xs">{post.bookmarks}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-gold-500" />
                <span className="text-xs">{post.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Copy className="w-4 h-4 text-gold-500" />
              </div>
            </div>
          </div>
        </div>
    </Link>
  );
}
