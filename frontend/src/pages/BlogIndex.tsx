import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import { useGetPosts } from "@workspace/api-client-react";

function formatDate(value?: string | null): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const { data: posts, isLoading, isError } = useGetPosts();

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-6 max-w-5xl py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Notes on AI, research, and building.
          </p>
        </motion.div>

        {isLoading && (
          <p className="text-muted-foreground">Loading posts…</p>
        )}
        {isError && (
          <p className="text-destructive">Couldn’t load posts. Try again later.</p>
        )}
        {!isLoading && !isError && posts?.length === 0 && (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {posts?.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-white/8 bg-card/40 hover:border-primary/40 hover:bg-card/70 transition-all"
              >
                {post.coverImage ? (
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-44 w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <BookOpen className="w-8 h-8 text-primary/40" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {post.publishedAt && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishedAt)}
                    </span>
                  )}
                  <h2 className="text-lg font-display font-semibold text-white leading-snug group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">
                      {post.summary}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
