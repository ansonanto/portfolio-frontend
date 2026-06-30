import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { ArrowLeft, ImagePlus, Loader2 } from "lucide-react";
import {
  useAdminGetPost,
  useCreatePost,
  useUpdatePost,
  useUploadMedia,
  getAdminGetPostQueryKey,
  getAdminListPostsQueryKey,
  getGetPostsQueryKey,
  type PostInput,
  type PostLink,
} from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type LinkRow = PostLink;

export default function AdminEditor() {
  const [, navigate] = useLocation();
  const [isEdit, editParams] = useRoute("/admin/posts/:id/edit");
  const id = isEdit ? (editParams?.id ?? "") : "";
  const queryClient = useQueryClient();

  const existing = useAdminGetPost(id, {
    query: { enabled: isEdit, queryKey: getAdminGetPostQueryKey(id) },
  });
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const upload = useUploadMedia();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [links, setLinks] = useState<LinkRow[]>([]);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [error, setError] = useState<string | null>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  // Hydrate form when editing.
  useEffect(() => {
    const p = existing.data;
    if (isEdit && p) {
      setTitle(p.title);
      setSlug(p.slug);
      setSummary(p.summary ?? "");
      setBody(p.body ?? "");
      setCoverImage(p.coverImage ?? "");
      setTags((p.tags ?? []).join(", "));
      setLinks(p.links ?? []);
      setStatus(p.status);
    }
  }, [isEdit, existing.data]);

  const saving = createPost.isPending || updatePost.isPending;

  const buildPayload = (): PostInput => ({
    title: title.trim(),
    slug: slug.trim() || undefined,
    summary: summary.trim(),
    body,
    coverImage: coverImage.trim() || null,
    tags: tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    links: links.filter((l) => l.label && l.url),
    status,
  });

  const onSave = () => {
    setError(null);
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    const data = buildPayload();
    const onSuccess = () => {
      queryClient.invalidateQueries({ queryKey: getAdminListPostsQueryKey() });
      queryClient.invalidateQueries({ queryKey: getGetPostsQueryKey() });
      navigate("/admin");
    };
    const onError = (e: unknown) => {
      const msg =
        e && typeof e === "object" && "status" in e && (e as { status: number }).status === 409
          ? "A post with this slug already exists."
          : "Could not save the post.";
      setError(msg);
    };

    if (isEdit) {
      updatePost.mutate({ id, data }, { onSuccess, onError });
    } else {
      createPost.mutate({ data }, { onSuccess, onError });
    }
  };

  // Upload a file; return its public URL.
  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      const res = await upload.mutateAsync({ data: { file } });
      return res.url;
    } catch {
      setError("Upload failed.");
      return null;
    }
  };

  const onCoverSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadFile(file);
    if (url) setCoverImage(url);
    e.target.value = "";
  };

  const onBodyMediaSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadFile(file);
    if (url) {
      const snippet = file.type.startsWith("video/")
        ? `\n\n<video src="${url}" controls></video>\n\n`
        : `\n\n![${file.name}](${url})\n\n`;
      const el = bodyRef.current;
      const pos = el?.selectionStart ?? body.length;
      setBody(body.slice(0, pos) + snippet + body.slice(pos));
    }
    e.target.value = "";
  };

  if (isEdit && existing.isLoading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center text-muted-foreground">
        Loading…
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <div className="flex items-center gap-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="rounded-lg bg-card border border-white/10 text-sm px-3 py-2 text-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <Button onClick={onSave} disabled={saving} className="gap-2">
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {isEdit ? "Save changes" : "Create post"}
            </Button>
          </div>
        </div>

        {error && <p className="text-sm text-destructive mb-4">{error}</p>}

        {/* Meta fields */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div>
            <Label className="text-sm text-muted-foreground">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2"
              placeholder="Post title"
            />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">
              Slug (optional — auto from title)
            </Label>
            <Input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="mt-2"
              placeholder="my-post-slug"
            />
          </div>
          <div className="md:col-span-2">
            <Label className="text-sm text-muted-foreground">Summary</Label>
            <Input
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="mt-2"
              placeholder="One-line excerpt for cards and SEO"
            />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">
              Tags (comma-separated)
            </Label>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-2"
              placeholder="ai, research, ml"
            />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">Cover image</Label>
            <div className="mt-2 flex gap-2">
              <Input
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://… or upload"
              />
              <label className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 cursor-pointer text-sm text-muted-foreground hover:text-primary hover:border-primary/40">
                <ImagePlus className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onCoverSelected}
                />
              </label>
            </div>
          </div>
        </div>

        {/* External links */}
        <div className="mb-6">
          <Label className="text-sm text-muted-foreground">
            External links (Medium, Substack, LinkedIn…)
          </Label>
          <div className="mt-2 space-y-2">
            {links.map((link, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  value={link.label}
                  onChange={(e) => {
                    const next = [...links];
                    next[i] = { ...next[i], label: e.target.value };
                    setLinks(next);
                  }}
                  placeholder="Label"
                  className="max-w-[160px]"
                />
                <Input
                  value={link.url}
                  onChange={(e) => {
                    const next = [...links];
                    next[i] = { ...next[i], url: e.target.value };
                    setLinks(next);
                  }}
                  placeholder="https://…"
                />
                <Button
                  variant="ghost"
                  onClick={() => setLinks(links.filter((_, j) => j !== i))}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLinks([...links, { label: "", url: "" }])}
            >
              Add link
            </Button>
          </div>
        </div>

        {/* Split-pane markdown editor */}
        <div className="flex items-center justify-between mb-2">
          <Label className="text-sm text-muted-foreground">Body (Markdown)</Label>
          <label className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary cursor-pointer">
            {upload.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ImagePlus className="w-4 h-4" />
            )}
            Insert media
            <input
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={onBodyMediaSelected}
            />
          </label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Textarea
            ref={bodyRef}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post in Markdown…"
            className="min-h-[480px] font-mono text-sm leading-relaxed"
          />
          <div className="min-h-[480px] rounded-lg border border-white/10 bg-card/30 p-6 overflow-auto prose prose-invert max-w-none prose-headings:font-display prose-a:text-primary prose-img:rounded-xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize]}
            >
              {body || "_Preview will appear here…_"}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
