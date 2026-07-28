export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Group Sweet",
    url: "https://groupsweet.com",
    description:
      "Premium Egyptian sweets, Mawlid sweets, gift boxes and corporate orders.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://groupsweet.com/ar/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}