// src/app/Products/[id]/page.tsx

import React from 'react';

interface ProductPage {
  params: { id: string };
  productData: { id: string; /* define other properties as needed */ };
}

// Server Component that fetches data and passes it to the ProductPage component
export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch product data from an API or database
  const productData = await fetchProductData(id);

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Render product data */}
      <pre>{JSON.stringify(productData, null, 2)}</pre>
    </div>
  );
}

// Helper function to fetch product data
async function fetchProductData(id: string) {
  const res = await fetch(`https://api.example.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }
  return res.json();
}
