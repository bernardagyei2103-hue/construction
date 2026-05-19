import {
  ADDRESS_LOCALITY,
  ADDRESS_COUNTRY,
  DEFAULT_PHONE,
  getSiteOrigin,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/site";

function parseSameAs(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(/[\s,|]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function StructuredData() {
  const origin = getSiteOrigin().replace(/\/$/, "");
  const orgId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const sameAs = parseSameAs(process.env.NEXT_PUBLIC_ORGANIZATION_SAME_AS);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_NAME,
      url: origin,
      logo: {
        "@type": "ImageObject",
        url: `${origin}/images/rodemann-logo.png`,
      },
      description: SITE_DESCRIPTION,
      telephone: DEFAULT_PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS_LOCALITY,
        addressCountry: ADDRESS_COUNTRY,
      },
      areaServed: [
        "Saudi Arabia",
        "Middle East",
        "GCC",
        "International",
      ],
      knowsAbout: [
        "Road construction",
        "Earthworks",
        "Drainage engineering",
        "Construction logistics",
        "Heavy equipment hire",
      ],
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: origin,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-SA",
      publisher: { "@id": orgId },
      isPartOf: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${origin}/#homepage`,
      url: `${origin}/`,
      name: `${SITE_NAME} | Civil engineering & infrastructure logistics`,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      publisher: { "@id": orgId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${origin}/images/img-hero-road.png`,
      },
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
