import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    // Validate the ID parameter
    if (!id) {
      return NextResponse.json(
        { message: "Product ID is missing" },
        { status: 400 }
      );
    }

    // Fetch the product data from Sanity
    const data = await client.fetch(
      `*[_type == "product" && _id == $id]{
        _id,
        heading,
        subheading,
        image,
        price {
          originalPrice,
          discountPrice
        }
      }`,
      { id }
    );

    // Handle case where the product is not found
    if (!data || data.length === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Return the product data
    return NextResponse.json(data[0], { status: 200 });
  } catch (error) {
    console.error("Error fetching product data:", error);
    return NextResponse.json(
      { message: "Error fetching product data" },
      { status: 500 }
    );
  }
}
