import React, { useState, useEffect } from 'react';

interface Category {
  id: string;
  name: string;
}

interface Brand {
  id: string;
  name: string;
}

interface OrderShipment {
  orderId: string;
  status: string;
  shipmentTracking: string;
  [key: string]: string | number | boolean;
}

async function fetchCategoryData(): Promise<Category[]> {
  try {
    const res = await fetch('/api/categories');
    if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchBrandData(): Promise<Brand[]> {
  try {
    const res = await fetch('/api/brands');
    if (!res.ok) throw new Error(`Failed to fetch brands: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchOrderAndShipmentData(orderId: string): Promise<OrderShipment | null> {
  try {
    const res = await fetch(`/api/orders/${orderId}`);
    if (!res.ok) throw new Error(`Failed to fetch order data: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { id } = params;
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [orderData, setOrderData] = useState<OrderShipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const categoryData = await fetchCategoryData();
      const brandData = await fetchBrandData();
      setCategories(categoryData);
      setBrands(brandData);
      setIsLoading(false);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (id) {
      async function fetchOrderDetails() {
        const orderDetails = await fetchOrderAndShipmentData(id);
        setOrderData(orderDetails);
      }
      fetchOrderDetails();
    }
  }, [id]);

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <section>
            <h2>Categories</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Brands</h2>
            <ul>
              {brands.map((brand) => (
                <li key={brand.id}>{brand.name}</li>
              ))}
            </ul>
          </section>
        </>
      )}
      {orderData ? (
        <section>
          <h2>Order and Shipment Details</h2>
          <pre>{JSON.stringify(orderData, null, 2)}</pre>
        </section>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default ProductPage;
