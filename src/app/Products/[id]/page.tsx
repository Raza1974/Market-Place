// src/app/Products/[id]/page.tsx

interface PageProps {
  params: { id: string };
}

const ProductPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  // Logic for rendering the page based on the product ID
  return <div>Product ID: {id}</div>;
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  // You can fetch data for the product here
  return {
    props: {
      params
    }
  }
}

export default ProductPage;
