import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Header2 from "@/components//header2";
import Footer from  "@/components/Footer";

const products = [
  { id: 1, name: "Special Item 1", price: 59.99, image: "/placeholder.svg" },
  { id: 2, name: "Special Item 2", price: 69.99, image: "/placeholder.svg" },
  { id: 3, name: "Special Item 3", price: 79.99, image: "/placeholder.svg" },
  { id: 4, name: "Special Item 4", price: 89.99, image: "/placeholder.svg" },
];

export default function Shop2() {
  return (
<div> 
  <Header2 /> 
    
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Shop 2 - Special Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={product.image}
                alt={product.name}
                width={200} // Explicit width
                height={200} // Explicit height
                className="w-full h-48 object-cover"
              />
              <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
