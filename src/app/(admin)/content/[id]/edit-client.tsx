"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, Save, AlertCircle, Loader2, Settings, Briefcase, 
  FileJson, Share2, TrendingUp, Trash2, Send, X, Eye, CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import { updateArticle, deleteArticle, setArticleStatus } from "@/lib/actions/content";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import RichTextEditor from "@/components/admin/editor/rich-text-editor";

// NEW: Utility to strip HTML tags from TipTap output so we can analyze plain text
const stripHtml = (html: string) => {
  if (typeof window === 'undefined') return html.replace(/<[^>]*>?/gm, '');
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export default function EditArticleClient({ post, rawText }: { post: any, rawText: string }) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(rawText);
  const [slug, setSlug] = useState(post.slug || "");
  const [seoTitle, setSeoTitle] = useState(post.seo?.title || "");
  const [seoDesc, setSeoDesc] = useState(post.seo?.description || "");
  const [focusKeyword, setFocusKeyword] = useState(post.seo?.focusKeyphrase || "");
  const [featuredImage, setFeaturedImage] = useState(post.featuredImage || ""); 
  
  // ==========================================
  // NEW: ADVANCED SEO STATES
  // ==========================================
  const [canonicalUrl, setCanonicalUrl] = useState(post.seo?.canonicalUrl || "");
  const [robotsMeta, setRobotsMeta] = useState("index");
  const [redirectUrl, setRedirectUrl] = useState(""); 

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState(""); 

  // ==========================================
  // RANK MATH STYLE SEO ENGINE
  // ==========================================
  const [seoScore, setSeoScore] = useState(post.seo?.seoScore || 0);
  const [seoChecklist, setSeoChecklist] = useState<{label: string, passed: boolean}[]>([]);
  const [autoSnippet, setAutoSnippet] = useState("");

  useEffect(() => {
    let score = 0;
    const checks = [];
    const plainText = stripHtml(content);
    const wordCount = plainText.split(/\s+/).filter(w => w.length > 0).length;

    const keyword = focusKeyword.trim().toLowerCase();
    const sTitle = (seoTitle || title).toLowerCase();
    const sDesc = seoDesc.toLowerCase();
    const cText = plainText.toLowerCase();

    // 1. Focus Keyword Checks
    if (keyword) {
      checks.push({ label: "Focus Keyword is set", passed: true });
      score += 15;

      if (sTitle.includes(keyword)) { checks.push({ label: "Focus Keyword found in SEO Title", passed: true }); score += 20; } 
      else { checks.push({ label: "Focus Keyword missing from SEO Title", passed: false }); }

      if (sDesc.includes(keyword)) { checks.push({ label: "Focus Keyword found in Meta Description", passed: true }); score += 20; } 
      else { checks.push({ label: "Focus Keyword missing from Meta Description", passed: false }); }

      if (cText.includes(keyword)) { checks.push({ label: "Focus Keyword found in Content", passed: true }); score += 20; } 
      else { checks.push({ label: "Focus Keyword missing from Content", passed: false }); }
    } else {
      checks.push({ label: "Focus Keyword is set", passed: false });
      checks.push({ label: "Focus Keyword in SEO Title", passed: false });
      checks.push({ label: "Focus Keyword in Meta Description", passed: false });
      checks.push({ label: "Focus Keyword in Content", passed: false });
    }

    // 2. Length Checks
    if (sTitle.length >= 40 && sTitle.length <= 60) { checks.push({ label: "Title length is optimal (40-60 chars)", passed: true }); score += 10; } 
    else { checks.push({ label: "Title length should be 40-60 characters", passed: false }); }

    if (sDesc.length >= 120 && sDesc.length <= 160) { checks.push({ label: "Description length is optimal (120-160 chars)", passed: true }); score += 5; } 
    else { checks.push({ label: "Description should be 120-160 characters", passed: false }); }

    if (wordCount >= 300) { checks.push({ label: `Content is ${wordCount} words (Minimum 300)`, passed: true }); score += 10; } 
    else { checks.push({ label: `Content is too short (${wordCount} words. Target: 300+)`, passed: false }); }

    setSeoScore(score);
    setSeoChecklist(checks);

    // 3. Auto Snippet Generation
    if (!seoDesc) {
      const fallback = plainText.substring(0, 160);
      setAutoSnippet(fallback.length > 0 ? fallback + "..." : "Please provide a description or start writing your article to generate a preview.");
    }

  }, [title, content, seoTitle, seoDesc, focusKeyword]);


  const handleSave = async (formData: FormData) => {
    setIsSaving(true);
    setError(""); 
    setSuccessMsg("");

    const result = await updateArticle(formData);
    
    if (result?.error) {
      setError(result.error);
    } else {
      setSuccessMsg("Draft saved successfully!");
      setTimeout(() => setSuccessMsg(""), 3000); 
    }
    setIsSaving(false);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to permanently delete this article?")) return;
    setIsDeleting(true);
    const result = await deleteArticle(post.id);
    if (result?.error) {
      setError(result.error);
      setIsDeleting(false);
    } else {
      router.push("/content");
    }
  };

  const handlePublishToggle = async () => {
    setIsPublishing(true);
    const newStatus = post.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    const result = await setArticleStatus(post.id, newStatus);
    
    if (result?.error) {
      setError(result.error);
    } else {
      setSuccessMsg(`Article successfully ${newStatus.toLowerCase()}!`);
      setTimeout(() => setSuccessMsg(""), 3000);
      router.refresh(); 
    }
    setIsPublishing(false);
  };

  const displaySeoTitle = seoTitle || title || "Your Awesome Article Title Here";
  const displaySlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || "auto-draft";

  return (
    <div className="space-y-6 font-sans">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/content" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Edit Article</h1>
            <p className="text-slate-400 text-sm">
              Current Status: <span className={post.status === "PUBLISHED" ? "text-emerald-400" : "text-amber-400"}>{post.status}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            href={`/article/${post.slug}`} 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium transition-colors border border-blue-500/20"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Link>

          <button 
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg text-sm font-medium transition-colors border border-red-500/20"
          >
            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            Delete Article
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}
      {successMsg && (
        <div className="flex items-start gap-3 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{successMsg}</p>
        </div>
      )}

      <form action={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <input type="hidden" name="id" value={post.id} />
        <input type="hidden" name="featuredImage" value={featuredImage} />
        <input type="hidden" name="content" value={content} />
        <input type="hidden" name="seoScore" value={seoScore} />
        
        {/* NEW: Hidden inputs for the Advanced SEO Tab variables */}
        <input type="hidden" name="canonicalUrl" value={canonicalUrl} />
        <input type="hidden" name="robotsMeta" value={robotsMeta} />
        <input type="hidden" name="redirectUrl" value={redirectUrl} />

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-transparent text-3xl font-bold text-white placeholder-slate-600 focus:outline-none mb-6" required />
            
            <div className="mb-6 border-b border-slate-800 pb-6">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Featured Image
              </label>
              
              {featuredImage ? (
                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-slate-700 group">
                  <img src={featuredImage} alt="Featured" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      type="button"
                      onClick={() => setFeaturedImage("")}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <X className="w-4 h-4" /> Remove Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-950/50 border border-slate-800 border-dashed rounded-xl p-4 custom-uploadthing">
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res[0]) {
                        setFeaturedImage(res[0].url);
                      }
                    }}
                    onUploadError={(error: Error) => {
                      setError("File size is too large. Please upload an image smaller than 4MB.");
                    }}
                    appearance={{
                      button: "bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-4 py-2 mt-4",
                      label: "text-emerald-400 hover:text-emerald-300",
                      container: "border-none p-4",
                      allowedContent: "text-slate-500"
                    }}
                  />
                </div>
              )}
            </div>

            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden flex flex-col">
            <div className="flex border-b border-slate-800 bg-slate-950/50">
              <button type="button" onClick={() => setActiveTab("general")} className={`flex-1 p-3 flex justify-center border-b-2 transition-colors ${activeTab === "general" ? "border-emerald-500 text-emerald-400 bg-slate-900/50" : "border-transparent text-slate-500 hover:text-slate-300"}`}><Settings className="w-4 h-4" /></button>
              <button type="button" onClick={() => setActiveTab("advanced")} className={`flex-1 p-3 flex justify-center border-b-2 transition-colors ${activeTab === "advanced" ? "border-emerald-500 text-emerald-400 bg-slate-900/50" : "border-transparent text-slate-500 hover:text-slate-300"}`}><Briefcase className="w-4 h-4" /></button>
            </div>

            <div className="p-6 space-y-6 flex-1">
              {activeTab === "general" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                      <h3 className="text-sm font-bold text-white">E-E-A-T SEO Score</h3>
                      <span className={`text-xl font-black ${seoScore >= 80 ? 'text-emerald-400' : seoScore >= 50 ? 'text-amber-400' : 'text-red-400'}`}>
                        {seoScore}/100
                      </span>
                    </div>
                    <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                      {seoChecklist.map((check, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          {check.passed ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> : <X className="w-4 h-4 text-red-500 shrink-0" />}
                          <span className={check.passed ? "text-slate-300" : "text-slate-500"}>{check.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                    <p className="text-xs text-slate-500 mb-1">Google Snippet Preview</p>
                    <p className="text-sm text-slate-400 truncate">https://datochai.com/{displaySlug}</p>
                    <p className="text-lg text-blue-500 font-medium truncate mt-1 hover:underline cursor-pointer">{displaySeoTitle}</p>
                    <p className="text-sm text-slate-300 mt-1 line-clamp-2">{seoDesc || autoSnippet}</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">Focus Keyword <TrendingUp className="w-3 h-3 text-emerald-500" /></label>
                    <input type="text" name="focusKeyword" value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">SEO Title</label>
                    <input type="text" name="seoTitle" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Meta Description</label>
                    <textarea name="seoDescription" value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} rows={3} className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">URL Slug</label>
                    <input type="text" name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                  </div>
                </div>
              )}
              
              {/* NEW: UPGRADED ADVANCED TAB */}
              {activeTab === "advanced" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* Fixed Robots Meta (Radio Buttons) */}
                  <div>
                    <p className="text-sm font-semibold text-slate-300 border-b border-slate-800 pb-2 mb-4">Robots Meta</p>
                    <div className="flex gap-6 text-sm text-slate-400">
                      <label className="flex items-center gap-2 cursor-pointer hover:text-slate-300 transition-colors">
                        <input type="radio" name="robots" value="index" checked={robotsMeta === "index"} onChange={() => setRobotsMeta("index")} className="text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                        Index
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer hover:text-slate-300 transition-colors">
                        <input type="radio" name="robots" value="noindex" checked={robotsMeta === "noindex"} onChange={() => setRobotsMeta("noindex")} className="text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                        No Index
                      </label>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2">Determines if search engines are allowed to show this page in search results.</p>
                  </div>

                  {/* Canonical URL & Redirect Options */}
                  <div>
                    <p className="text-sm font-semibold text-slate-300 border-b border-slate-800 pb-2 mb-4">Advanced URLs</p>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">Canonical URL</label>
                        <input type="text" name="canonicalUrl" value={canonicalUrl} onChange={(e) => setCanonicalUrl(e.target.value)} placeholder={`https://datochai.com/${displaySlug}`} className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                        <p className="text-[10px] text-slate-500 mt-1">Leave blank to use the default post URL.</p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">301 Redirect URL</label>
                        <input type="text" name="redirectUrl" value={redirectUrl} onChange={(e) => setRedirectUrl(e.target.value)} placeholder="e.g., /new-article-destination" className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                        <p className="text-[10px] text-slate-500 mt-1">Entering a URL here will permanently redirect traffic away from this post.</p>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex flex-col gap-3 mt-auto">
              <button type="submit" disabled={isSaving || isPublishing} className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all border border-slate-700 disabled:opacity-50">
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Draft
              </button>

              <button 
                type="button" 
                onClick={handlePublishToggle}
                disabled={isSaving || isPublishing} 
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all disabled:opacity-50 ${
                  post.status === "PUBLISHED" 
                    ? "bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.3)]" 
                    : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                }`}
              >
                {isPublishing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {post.status === "PUBLISHED" ? "Revert to Draft" : "Publish to Live"}
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}