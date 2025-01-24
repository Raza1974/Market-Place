"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";


// Initialize the Sanity client
const sanity = createClient({
  projectId: "od6izupd", // Replace with your actual projectId
  dataset: "market-place",
  apiVersion: "2025-01-13", // Use your schema's API version
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

// Helper function to generate image URLs
function urlFor(source: string) {
  return builder.image(source);
}

// Define the Product interface
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

// Main ProductCards component
const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          description,
          price,
          discountPercentage,
          productImage {
            asset {
              _ref
            }
          },
          tags
        }
      `;
      const data: Product[] = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Add product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Helper function to truncate descriptions
  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From APIs Data
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id || `${product.title}-${product.price}`} // Ensure a unique key
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={
                urlFor(product.productImage.asset._ref)
                  .width(800)
                  .height(800)
                  .url() || "/fallback-image.jpg"
              }
              alt={product.title || "Fallback image"}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% off
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`} // Use index as fallback key
                    className="text-xs bg-slate-600 text-white rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-slate-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id || `${item.title}-${item.price}`} // Ensure a unique key
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Image
                  src={urlFor(item.productImage.asset._ref).url()}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart is Empty. Please Add Products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
