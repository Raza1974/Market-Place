import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { Product } from '../../types'

export async function GET() {
  try {
    const products: Product[] = await client.fetch(`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      slug,
      description,
      price,
      inventory,
      "image": image.asset->url,
      "category": category->name
    }`)
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products from Sanity:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

