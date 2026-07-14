import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareButton } from "~/components/common/share-button";
import { PublicLayout } from "~/components/layout/public-layout";
import { ContentWithSidebar } from "~/components/sections/content-with-sidebar";
import { SectionContainer } from "~/components/sections/section-container";
import {
  JsonLd,
  blogPostingSchema,
  breadcrumbSchema,
} from "~/components/seo/json-ld";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import { blogPosts, getBlogPost } from "~/data/blog-posts";
import {
  AutomotiveContent,
  CareerContent,
  ClientManagementContent,
  DigitalMarketingContent,
  DomesticCleaningContent,
  DomesticPaintingContent,
  ElectricalProblemsContent,
  FitnessContent,
  LegalServicesContent,
  MasonryContent,
  NutritionContent,
  PlumbingProblemsContent,
  ProfessionalManagementContent,
  PsychologyContent,
  TechnologyContent,
  TutorialsContent,
} from "./content";

const DEFAULT_OG_IMAGE = "/images/blog/og-default.jpg";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  const url = `/blog/${post.slug}`;
  const image = post.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = post.imageAlt ?? `Imagem do artigo: ${post.title}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Savoir Link",
      locale: "pt_BR",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modifiedDate ?? post.date,
      authors: [post.author],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      ...(post.tags && {
        articleSection: post.category,
        articleTag: post.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      site: "@savoirlink",
      creator: "@savoirlink",
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different slug)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Generate structured data
  const blogPosting = blogPostingSchema({
    headline: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.modifiedDate ?? post.date,
    authorName: post.author,
    image: post.image ?? DEFAULT_OG_IMAGE,
    keywords: [
      post.category,
      "savoir link",
      "tutorial",
      "guia",
      "serviços profissionais",
      "marketplace",
    ],
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.category, path: `/blog?category=${post.category}` },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const shareUrl = `/blog/${post.slug}`;

  const sidebar = (
    <div className="space-y-6">
      {/* Post Info */}
      <ContentCard variant="bordered">
        <Label className="mb-2 block text-on-surface-variant" size="sm">
          Categoria
        </Label>
        <p className="mb-4 font-bold uppercase text-primary">{post.category}</p>

        <Label className="mb-2 block text-on-surface-variant" size="sm">
          Publicado por
        </Label>
        <p className="mb-2 font-semibold text-on-surface">{post.author}</p>
        <p className="mb-4 text-on-surface-variant text-body-sm">{post.date}</p>

        <Label className="mb-2 block text-on-surface-variant" size="sm">
          Tempo de Leitura
        </Label>
        <p className="text-on-surface-variant text-body-sm">{post.readTime}</p>
      </ContentCard>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <ContentCard variant="bordered">
          <Label className="mb-4 block">Artigos Relacionados</Label>
          <ul className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <li key={relatedPost.slug}>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="block transition-colors hover:text-primary"
                >
                  <p className="mb-1 text-body-sm text-primary">
                    {relatedPost.category}
                  </p>
                  <p className="font-semibold text-on-surface text-body-sm">
                    {relatedPost.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </ContentCard>
      )}

      {/* CTA */}
      <ContentCard variant="accent" accentPosition="left">
        <p className="mb-4 font-semibold text-on-surface text-body-sm">
          Pronto para começar?
        </p>
        <Link href="/publicar">
          <PrimaryButton size="sm">Cadastrar Agora</PrimaryButton>
        </Link>
      </ContentCard>
    </div>
  );

  const mainContent = (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-6 text-on-surface-variant text-body-sm">
        <Link href="/" className="hover:text-primary">
          Início
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span className="mx-2">&gt;</span>
        <Link
          href={`/blog?category=${post.category}`}
          className="hover:text-primary"
        >
          {post.category}
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-on-surface-variant">{post.title}</span>
      </nav>

      {/* Title */}
      <Headline size="lg" className="mb-6">
        {post.title}
      </Headline>

      {/* Share Button - Top */}
      <div className="mb-8 flex items-center gap-2 sm:gap-4">
        <div className="h-px flex-1 bg-outline-variant" />
        <ShareButton
          data={{
            title: post.title,
            text: post.excerpt,
            url: shareUrl,
          }}
          contentType="blog"
          variant="outline"
          size="default"
          alwaysShowText={true}
        />
        <div className="h-px flex-1 bg-outline-variant" />
      </div>

      {/* Content - Dynamic based on slug */}
      <div className="space-y-6">
        <TutorialsContent post={post} />

        {/* Category Content Components */}
        <AutomotiveContent post={post} />
        <CareerContent post={post} />
        <ClientManagementContent post={post} />
        <DigitalMarketingContent post={post} />
        <DomesticCleaningContent post={post} />
        <DomesticPaintingContent post={post} />
        <ElectricalProblemsContent post={post} />
        <FitnessContent post={post} />
        <LegalServicesContent post={post} />
        <MasonryContent post={post} />
        <NutritionContent post={post} />
        <PlumbingProblemsContent post={post} />
        <ProfessionalManagementContent post={post} />
        <PsychologyContent post={post} />
        <TechnologyContent post={post} />
      </div>

      {/* Share Button - Bottom */}
      <div className="mt-12 mb-8 flex items-center justify-center gap-2 sm:gap-4">
        <div className="h-px w-12 bg-outline-variant sm:w-24" />
        <ShareButton
          data={{
            title: post.title,
            text: post.excerpt,
            url: shareUrl,
          }}
          contentType="blog"
          variant="outline"
          size="default"
          alwaysShowText={true}
        />
        <div className="h-px w-12 bg-outline-variant sm:w-24" />
      </div>

      {/* Bottom CTA */}
      <ContentCard
        variant="accent"
        accentPosition="corners"
        className="mt-12 text-center"
      >
        <BodyText size="lg" className="mb-6">
          Gostou do artigo? Comece a usar a Savoir Link hoje mesmo!
        </BodyText>
        <Link href="/publicar">
          <PrimaryButton>Criar Conta Gratuita</PrimaryButton>
        </Link>
      </ContentCard>
    </article>
  );

  return (
    <>
      <JsonLd data={blogPosting} />
      <JsonLd data={breadcrumb} />

      <PublicLayout>
        <SectionContainer>
          <ContentWithSidebar
            content={mainContent}
            sidebar={sidebar}
            sidebarPosition="right"
          />
        </SectionContainer>
      </PublicLayout>
    </>
  );
}
