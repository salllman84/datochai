
interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {!!content && (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}