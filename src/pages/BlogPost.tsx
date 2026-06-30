import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { useGetPostBySlug } from "@/api-client";

function formatDate(value?: string | null): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  // This component only renders when the /blog/:slug route matches, so slug is set.
  const slug = params?.slug ?? "";
  const { data: post, isLoading, isError } = useGetPostBySlug(slug);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <article className="container mx-auto px-6 max-w-3xl py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All posts
        </Link>

        {isLoading && <p className="text-muted-foreground">Loading…</p>}
        {isError && (
          <p className="text-destructive">
            This post couldn’t be found.{" "}
            <Link href="/blog" className="underline">
              Back to the blog
            </Link>
            .
          </p>
        )}

        {post && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.publishedAt && (
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full rounded-2xl border border-white/8 mb-10"
              />
            )}

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-img:rounded-xl">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
              >
                {post.body}
              </ReactMarkdown>
            </div>

            {post.links && post.links.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/8">
                <h3 className="text-sm font-semibold text-white/70 mb-3">
                  Also published on
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </article>
    </div>
  );
}
