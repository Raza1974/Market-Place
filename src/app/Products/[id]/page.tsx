// src/app/Products/[id]/page.tsx

import React from 'react';

interface ProductPageProps {
  params: { id: string };
  productData: {
    // Define the structure of productData based on your API response
    id: string;
    name: string;
    price: number;
    // Add other properties as needed
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params, productData }) => {
  const { id } = params;

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Render product data */}
      <pre>{JSON.stringify(productData, null, 2)}</pre>
    </div>
  );
};

// This function will fetch product data at build time or during server-side rendering
export async function getProductData(id: string) {
  // Replace this with your actual data fetching logic (e.g., fetch from an API or database)
  const res = await fetch(`https://api.example.com/products/${id}`);
  const data = await res.json();
  return data;
}

// Server Component that fetches data and passes it to the ProductPage component
export default async function ProductPageWrapper({ params }: { params: { id: string } }) {
  const productData = await getProductData(params.id);
  return <ProductPage params={params} productData={productData} />;
}
