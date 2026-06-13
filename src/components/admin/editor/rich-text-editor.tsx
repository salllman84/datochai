"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Node, mergeAttributes } from '@tiptap/core';
import { Image as TiptapImage } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { CodeBlock } from '@tiptap/extension-code-block';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { Youtube } from '@tiptap/extension-youtube';
import TextAlign from '@tiptap/extension-text-align';

// FIXED: Cleaned up imports so there are no "Unused" errors
import { 
  Bold, Italic, Strikethrough, List, ListOrdered, 
  Heading2, Heading3, Quote, Code, 
  Image as ImageIcon, Link as LinkIcon, Video as YoutubeIcon, 
  Table as TableIcon, Undo, Redo, AlignLeft, AlignCenter, AlignRight, AlignJustify, Film, Type
} from 'lucide-react';
import { UploadButton } from "@/lib/uploadthing";

// ==========================================
// 1. CUSTOM NODE: HTML5 VIDEO PLAYER (TS Error Fixed)
// ==========================================
const CustomVideo = Node.create({
  name: 'video',
  group: 'block',
  selectable: true,
  draggable: true,
  addAttributes() {
    return { src: { default: null }, controls: { default: true } };
  },
  parseHTML() { return [{ tag: 'video' }]; },
  renderHTML({ HTMLAttributes }) {
    return ['video', mergeAttributes(HTMLAttributes, { class: 'w-full rounded-xl shadow-lg border border-slate-800 my-6' })];
  },
});

// ==========================================
// 1.5 CUSTOM NODE: SMART IMAGE (Allows Alignment Classes)
// ==========================================
const SmartImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: 'align-center rounded-xl shadow-lg border border-slate-800 my-6 max-w-full transition-all',
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          return { class: attributes.class };
        },
      },
    };
  },
});

// ==========================================
// 2. MAIN TOOLBAR
// ==========================================
const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) return;
    if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-col gap-2 p-2 border-b border-slate-800 bg-slate-900/80 rounded-t-xl">
      
      {/* NEW: DYNAMIC IMAGE MENU (Replaces BubbleMenu) */}
      {editor.isActive('image') && (
        <div className="flex flex-wrap items-center gap-1 p-2 bg-emerald-900/20 border border-emerald-500/30 rounded-lg animate-in fade-in slide-in-from-top-1">
          <span className="text-xs font-bold tracking-wider text-emerald-400 mr-2 uppercase">Image Alignment:</span>
          
          <button type="button" onClick={() => editor.chain().focus().updateAttributes('image', { class: 'align-left rounded-xl shadow-lg border border-slate-800 my-6 max-w-[50%]' }).run()} className="p-1.5 hover:bg-emerald-500/20 text-emerald-400 rounded"><AlignLeft className="w-4 h-4"/></button>
          <button type="button" onClick={() => editor.chain().focus().updateAttributes('image', { class: 'align-center rounded-xl shadow-lg border border-slate-800 my-6 max-w-full' }).run()} className="p-1.5 hover:bg-emerald-500/20 text-emerald-400 rounded"><AlignCenter className="w-4 h-4"/></button>
          <button type="button" onClick={() => editor.chain().focus().updateAttributes('image', { class: 'align-right rounded-xl shadow-lg border border-slate-800 my-6 max-w-[50%]' }).run()} className="p-1.5 hover:bg-emerald-500/20 text-emerald-400 rounded"><AlignRight className="w-4 h-4"/></button>
          
          <div className="w-px h-5 bg-emerald-500/30 mx-2"></div>
          
          <button type="button" onClick={() => {
            const currentAlt = editor.getAttributes('image').alt;
            const alt = prompt('Enter SEO Alt Text:', currentAlt || "");
            if (alt !== null) editor.chain().focus().updateAttributes('image', { alt }).run();
          }} className="flex items-center gap-1.5 p-1.5 hover:bg-emerald-500/20 text-emerald-400 rounded text-xs font-semibold">
            <Type className="w-3.5 h-3.5"/> Alt Text
          </button>
        </div>
      )}

      {/* ROW 1: Typography & Alignment */}
      <div className="flex flex-wrap items-center gap-1">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('bold') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Bold className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('italic') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Italic className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('strike') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Strikethrough className="w-4 h-4" /></button>
        <button type="button" onClick={setLink} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('link') ? 'text-blue-400 bg-slate-800' : 'text-slate-400'}`}><LinkIcon className="w-4 h-4" /></button>
        
        <div className="w-px h-6 bg-slate-800 mx-1"></div>

        <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive({ textAlign: 'left' }) ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><AlignLeft className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive({ textAlign: 'center' }) ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><AlignCenter className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive({ textAlign: 'right' }) ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><AlignRight className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive({ textAlign: 'justify' }) ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><AlignJustify className="w-4 h-4" /></button>

        <div className="w-px h-6 bg-slate-800 mx-1"></div>
        
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('heading', { level: 2 }) ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Heading2 className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('heading', { level: 3 }) ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Heading3 className="w-4 h-4" /></button>
        
        <div className="w-px h-6 bg-slate-800 mx-1"></div>

        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('bulletList') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><List className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('orderedList') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><ListOrdered className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('blockquote') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Quote className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`p-2 rounded hover:bg-slate-800 ${editor.isActive('codeBlock') ? 'text-emerald-400 bg-slate-800' : 'text-slate-400'}`}><Code className="w-4 h-4" /></button>

        <div className="w-px h-6 bg-slate-800 mx-1"></div>

        <button type="button" onClick={() => editor.chain().focus().undo().run()} className="p-2 rounded hover:bg-slate-800 text-slate-400"><Undo className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} className="p-2 rounded hover:bg-slate-800 text-slate-400"><Redo className="w-4 h-4" /></button>
      </div>

      {/* ROW 2: Media, Embeds & Data */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-950/50 rounded-lg border border-slate-800">
        
        <div className="relative flex items-center justify-center p-2 rounded hover:bg-slate-800 text-slate-400 cursor-pointer overflow-hidden group">
          <ImageIcon className="w-4 h-4" /> <span className="text-xs font-medium ml-2">Image</span>
          <div className="absolute inset-0 opacity-0 cursor-pointer">
            <UploadButton endpoint="imageUploader" onClientUploadComplete={(res) => { if (res && res[0]) editor.chain().focus().setImage({ src: res[0].url }).run(); }} onUploadError={(err) => alert(`Error: ${err.message}`)} />
          </div>
        </div>

        <div className="relative flex items-center justify-center p-2 rounded hover:bg-slate-800 text-slate-400 cursor-pointer overflow-hidden group">
          <Film className="w-4 h-4" /> <span className="text-xs font-medium ml-2">Video</span>
          <div className="absolute inset-0 opacity-0 cursor-pointer">
            {/* FIXED TS ERROR: Used insertContent instead of setVideo */}
            <UploadButton endpoint="videoUploader" onClientUploadComplete={(res) => { if (res && res[0]) editor.chain().focus().insertContent({ type: 'video', attrs: { src: res[0].url } }).run(); }} onUploadError={(err) => alert(`Error: ${err.message}`)} />
          </div>
        </div>

        <button type="button" onClick={() => { const url = prompt('YouTube URL'); if (url) editor.commands.setYoutubeVideo({ src: url }); }} className="flex items-center gap-2 p-2 rounded hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-colors">
          <YoutubeIcon className="w-4 h-4" /> <span className="text-xs font-medium">YouTube</span>
        </button>

        <div className="w-px h-6 bg-slate-800 mx-1"></div>

        <button type="button" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 text-slate-400">
          <TableIcon className="w-4 h-4" /> <span className="text-xs font-medium">Table</span>
        </button>
        
        {editor.isActive('table') && (
          <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs ml-2 border border-emerald-500/20">
            <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} className="hover:text-white px-2 border-r border-emerald-500/30">+ Col</button>
            <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} className="hover:text-white px-2 border-r border-emerald-500/30">+ Row</button>
            <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} className="hover:text-red-400 text-red-500 px-2">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN EDITOR EXPORT
// ==========================================
export default function RichTextEditor({ content, onChange }: { content: string, onChange: (content: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      SmartImage.configure({ inline: true }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-emerald-400 underline hover:text-emerald-300' } }),
      CodeBlock.configure({ HTMLAttributes: { class: 'bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm border border-slate-800 my-4' } }),
      Youtube.configure({ HTMLAttributes: { class: 'w-full aspect-video rounded-xl shadow-lg border border-slate-800 my-6' } }),
      Table.configure({ resizable: true, HTMLAttributes: { class: 'w-full border-collapse border border-slate-700 my-6' } }),
      TableRow.configure({ HTMLAttributes: { class: 'border-b border-slate-700' } }),
      TableHeader.configure({ HTMLAttributes: { class: 'bg-slate-900 border border-slate-700 p-3 text-left font-bold text-slate-200 min-w-[120px]' } }),
      TableCell.configure({ HTMLAttributes: { class: 'border border-slate-700 p-3 text-slate-300 relative min-w-[120px]' } }),
      CustomVideo,
    ],
    content: content,
    editorProps: {
      attributes: { class: 'prose prose-invert prose-emerald max-w-none w-full min-h-[500px] p-6 focus:outline-none' },
    },
    onUpdate: ({ editor }) => { onChange(editor.getHTML()); },
  });

  if (!editor) return null;

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}