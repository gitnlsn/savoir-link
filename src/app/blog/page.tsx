import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogCategoryFilter } from "~/components/blog/blog-category-filter";
import { BlogPostsList } from "~/components/blog/blog-posts-list";
import { BlogSearchBar } from "~/components/blog/blog-search-bar";
import { PublicLayout } from "~/components/layout/public-layout";
import { SectionContainer } from "~/components/sections/section-container";
import {
  JsonLd,
  breadcrumbSchema,
  collectionPageSchema,
} from "~/components/seo/json-ld";
import { SectionHeader } from "~/components/ui/section-header";
import { blogPosts, getBlogCategories } from "~/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog - Savoir Link | Tutoriais, Guias e Dicas",
  description:
    "Artigos, tutoriais e guias completos sobre como usar a Savoir Link. Aprenda a contratar serviços, oferecer seus serviços profissionais e muito mais.",
  keywords: [
    "blog savoir link",
    "tutoriais plataforma",
    "guias serviços",
    "como usar savoir link",
    "dicas profissionais",
    "artigos marketplace",
  ],
  openGraph: {
    title: "Blog - Savoir Link",
    description:
      "Tutoriais e guias para você aproveitar melhor a plataforma Savoir Link.",
    url: "/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const categories = getBlogCategories();

  const collectionSchema = collectionPageSchema({
    name: "Blog - Savoir Link",
    description:
      "Artigos, guias e dicas para você aproveitar melhor a plataforma",
    path: "/blog",
    numberOfItems: blogPosts.length,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumb} />

      <PublicLayout>
        <SectionContainer>
          <SectionHeader
            title="Blog"
            subtitle="Artigos, guias e dicas para você aproveitar melhor a plataforma"
          />

          <Suspense fallback={<div>Carregando busca...</div>}>
            <BlogSearchBar />
          </Suspense>

          <Suspense fallback={<div>Carregando categorias...</div>}>
            <BlogCategoryFilter categories={categories} />
          </Suspense>

          <BlogPostsList
            posts={blogPosts}
            categoryFilter={params.category}
            searchQuery={params.search}
          />
        </SectionContainer>
      </PublicLayout>
    </>
  );
}
