import { PrismaClient } from "@prisma/client";
import { FileText, Plus, Search, Filter, Edit3, Globe, MoreHorizontal } from "lucide-react";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function ContentHub() {
  // Fetch all posts, including the new SEO relationship data
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { seo: true } // This pulls in the Rank Math data!
  }).catch(() => []);

  return (
    <div className="space-y-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <FileText className="w-8 h-8 text-emerald-400" />
            Content Hub
          </h1>
          <p className="text-slate-400 mt-1">
            Manage E-E-A-T articles, SEO pillars, and automated drafts.
          </p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/content/new"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            <Plus className="w-4 h-4" />
            Create Article
          </Link>
        </div>
      </div>

      {/* Main Data Table Card */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by title, keyword, or author..." 
              className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:border-slate-700 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-950/50 text-slate-400 border-b border-slate-800 uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-4">Article Title</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">SEO Target</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {posts.map((post: any) => (
                <tr key={post.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">
                    {post.title}
                  </td>
                  <td className="px-6 py-4">
                    {/* Fixed Status Badge */}
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      post.status === "PUBLISHED" ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 
                      post.status === "DRAFT" ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 
                      'text-blue-400 bg-blue-500/10 border-blue-500/20'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {post.seo?.focusKeyphrase || "Not Set"}
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {new Intl.DateTimeFormat('en-US', { 
                      month: 'short', day: 'numeric', year: 'numeric' 
                    }).format(post.createdAt || new Date())}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-slate-500">
                      {/* WIRED UP EDIT BUTTON */}
                      <Link href={`/content/${post.id}`} className="hover:text-emerald-400 transition-colors p-1" title="Edit Article">
                        <Edit3 className="w-4 h-4" />
                      </Link>
                      {/* WIRED UP LIVE PREVIEW BUTTON */}
                      <Link href={`/article/${post.slug}`} target="_blank" className="hover:text-blue-400 transition-colors p-1" title="View Live">
                        <Globe className="w-4 h-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {posts.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-4 border border-slate-700/50">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Content Found</h3>
              <Link 
                href="/content/new"
                className="mt-4 flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all border border-slate-700"
              >
                <Plus className="w-4 h-4" />
                Start Writing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}