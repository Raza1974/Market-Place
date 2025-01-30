import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

// Initialize Sanity client with environment variables
const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, 
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

// Helper function to build image URLs
function urlFor(source) {
  return builder.image(source);
}

const ProductDetail = ({ product }) => {
  const router = useRouter();

  // Handle fallback state during ISR (Incremental Static Regeneration)
  if (router.isFallback) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  // Handle case where no product is found
  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
        <p className="text-gray-600">The product you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 border rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        src={product.productImage ? urlFor(product.productImage).url() : "/default-image.jpg"}
        alt={product.title || "Product"}
        width={300}
        height={300}
        className="mt-4 border rounded-lg"
      />
      <p className="text-lg font-semibold mt-4 text-gray-700">${product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>
      {product.discountPercentage > 0 && (
        <p className="text-green-600 mt-2 font-semibold">
          Discount: {product.discountPercentage}%
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-blue-200 text-blue-800 rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;

// Fetch data for a specific product using its ID
export async function getStaticProps({ params }) {
  try {
    const query = `*[_type == "product" && _id == $id][0]`;
    const product = await sanity.fetch(query, { id: params.id });

    if (!product) {
      return { notFound: true }; // Show 404 page if no product is found
    }

    return {
      props: { product },
      revalidate: 10, // ISR: Rebuild the page every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null },
    };
  }
}

// Generate paths for all products
export async function getStaticPaths() {
  const query = `*[_type == "product"][0...10]{ _id }`; // Fetch a limited number of products
  const products = await sanity.fetch(query);

  const paths = products.map((product) => ({
    params: { id: product._id }, // Generate a dynamic route for each product
  }));

  return {
    paths,
    fallback: "blocking", // Ensures full SSR for missing paths
  };
}
