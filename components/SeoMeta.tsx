import { DefaultSeo, NextSeo } from 'next-seo';
import seoMetadata from '@/data/seoMetadata';

interface SeoMetaProps {
  pageKey: keyof typeof seoMetadata;
  customMeta?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      image?: string;
    };
  };
}

const SeoMeta: React.FC<SeoMetaProps> = ({ pageKey, customMeta }) => {
  const meta = seoMetadata[pageKey];

  const finalMeta = {
    title: customMeta?.title || meta.title,
    description: customMeta?.description || meta.description,
    keywords: customMeta?.keywords || meta.keywords,
    canonical: customMeta?.canonical || meta.canonical,
    openGraph: {
      title: customMeta?.openGraph?.title || meta.openGraph.title,
      description: customMeta?.openGraph?.description || meta.openGraph.description,
      url: customMeta?.openGraph?.url || meta.openGraph.url,
      image: customMeta?.openGraph?.image || meta.openGraph.image,
    },
  };

  return (
    <>
      {/* Default SEO configuration */}
      <DefaultSeo
        titleTemplate="%s | KKLC Explore"
        defaultTitle="KKLC Explore - Kugenuma Kaigan Local Community"
        description="Explore Kugenuma Kaigan with KKLC Explore. Discover restaurants, shops, health & beauty services, and much more!"
      />

      {/* Page-specific SEO */}
      <NextSeo
        title={finalMeta.title}
        description={finalMeta.description}
        canonical={finalMeta.canonical}
        openGraph={{
          title: finalMeta.openGraph.title,
          description: finalMeta.openGraph.description,
          url: finalMeta.openGraph.url,
          images: [
            {
              url: finalMeta.openGraph.image,
              width: 1200,
              height: 630,
              alt: finalMeta.openGraph.title,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: finalMeta.keywords,
          },
        ]}
      />
    </>
  );
};

export default SeoMeta;
