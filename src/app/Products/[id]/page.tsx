

import { Metadata } from "next";

interface ProductPageProps {
  params: { id: string }; // Ensure params matches the dynamic route segment type
}

// Generate metadata for the product page (optional)
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  return {
    title: `Product: ${params.id}`,
  };
}

// Dynamic Product Page
export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  );
}