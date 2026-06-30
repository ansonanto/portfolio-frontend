import { Link, useLocation } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2, ExternalLink, LogOut } from "lucide-react";
import {
  useAdminListPosts,
  useDeletePost,
  getAdminListPostsQueryKey,
  getGetPostsQueryKey,
} from "@workspace/api-client-react";
import { setToken } from "@/lib/adminAuth";
import { Button } from "@/components/ui/button";

function formatDate(value?: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const { data: posts, isLoading } = useAdminListPosts();
  const deletePost = useDeletePost();

  const onDelete = (id: string, title: string) => {
    if (!confirm(`Delete “${title}”? This cannot be undone.`)) return;
    deletePost.mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: getAdminListPostsQueryKey() });
          queryClient.invalidateQueries({ queryKey: getGetPostsQueryKey() });
        },
      },
    );
  };

  const logout = () => {
    setToken(null);
    navigate("/admin/login");
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-6 max-w-5xl py-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-display font-bold text-white">Posts</h1>
          <div className="flex items-center gap-3">
            <Link href="/admin/posts/new">
              <Button className="gap-2">
                <Plus className="w-4 h-4" /> New post
              </Button>
            </Link>
            <Button variant="ghost" onClick={logout} className="gap-2 text-muted-foreground">
              <LogOut className="w-4 h-4" /> Sign out
            </Button>
          </div>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading…</p>}
        {!isLoading && posts?.length === 0 && (
          <p className="text-muted-foreground">No posts yet. Create your first one.</p>
        )}

        <div className="space-y-2">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="flex items-center gap-4 rounded-xl border border-white/8 bg-card/40 px-5 py-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white truncate">{post.title}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      post.status === "published"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-white/10 text-muted-foreground"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  /{post.slug} · {formatDate(post.publishedAt ?? post.createdAt)}
                </div>
              </div>

              {post.status === "published" && (
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="View"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link
                href={`/admin/posts/${post.id}/edit`}
                className="text-muted-foreground hover:text-primary"
                aria-label="Edit"
              >
                <Pencil className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onDelete(post.id, post.title)}
                className="text-muted-foreground hover:text-destructive"
                aria-label="Delete"
                disabled={deletePost.isPending}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
