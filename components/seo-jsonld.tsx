import { site } from "@/lib/site";

type JsonLdProps = {
  type?: "LocalBusiness" | "WebPage" | "Service";
  name?: string;
  description?: string;
  url?: string;
};

export default function SeoJsonLd({
  type = "LocalBusiness",
  name,
  description,
  url,
}: JsonLdProps) {
  const data =
    type === "LocalBusiness"
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.legalName,
          url: site.url,
          telephone: site.phone,
          email: site.email,
          description: site.description,
          foundingDate: String(site.founded),
          areaServed: site.area.map((a) => ({
            "@type": "City",
            name: a,
          })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: String(site.reviewsCount),
          },
        }
      : {
          "@context": "https://schema.org",
          "@type": type,
          name: name ?? site.name,
          description: description ?? site.description,
          url: url ?? site.url,
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
