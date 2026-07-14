import Link from "next/link";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

interface BlogPostsListProps {
  posts: BlogPost[];
  categoryFilter?: string;
  searchQuery?: string;
}

export function BlogPostsList({
  posts,
  categoryFilter,
  searchQuery,
}: BlogPostsListProps) {
  // Filter by category from URL
  const categoryFilteredPosts = categoryFilter
    ? posts.filter((post) => post.category === categoryFilter)
    : posts;

  // Filter by search query (if provided)
  const searchFilteredPosts = searchQuery
    ? categoryFilteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : categoryFilteredPosts;

  const featuredPosts = searchFilteredPosts.filter((post) => post.featured);
  const regularPosts = searchFilteredPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-6 text-headline-md text-primary">Em Destaque</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <ContentCard variant="bordered" className="h-full">
                  <div className="mb-2 text-label-md uppercase text-primary">
                    {post.category}
                  </div>
                  <h3 className="mb-3 text-headline-sm text-on-surface">
                    {post.title}
                  </h3>
                  <BodyText size="sm" className="mb-4 text-on-surface-variant">
                    {post.excerpt}
                  </BodyText>
                  <div className="flex items-center gap-4 text-on-surface-variant text-label-md">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </ContentCard>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          <h2 className="mb-6 text-headline-md text-primary">
            Todos os Artigos
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <ContentCard variant="default" className="h-full">
                  <Label className="mb-2 block text-primary" size="sm">
                    {post.category}
                  </Label>
                  <h3 className="mb-3 text-headline-sm text-on-surface">
                    {post.title}
                  </h3>
                  <BodyText size="sm" className="mb-4 text-on-surface-variant">
                    {post.excerpt}
                  </BodyText>
                  <div className="text-on-surface-variant text-label-md">
                    {post.readTime}
                  </div>
                </ContentCard>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {searchFilteredPosts.length === 0 && (
        <ContentCard variant="default" className="text-center">
          <BodyText>
            Nenhum artigo encontrado. Tente buscar por outro termo ou categoria.
          </BodyText>
        </ContentCard>
      )}
    </>
  );
}
