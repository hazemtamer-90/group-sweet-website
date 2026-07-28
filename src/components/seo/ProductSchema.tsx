interface Props {
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function ProductSchema({
  name,
  description,
  image,
  price,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name,
    description,

    image,

    brand: {
      "@type": "Brand",
      name: "Group Sweet",
    },

    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "EGP",
      availability: "https://schema.org/InStock",
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