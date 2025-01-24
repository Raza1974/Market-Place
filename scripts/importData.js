import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: "fiycteh6",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: '2025-01-13',
//   token: "skuCOWEZLao0aQWCFiOtG86621uAaciuS8RsnmieG03wgnqWqScimpEqRyzMwBPAWWDPJ6vrEevnSLnV88b9EZeiNImEMYCD2ddmD9NlkviQRJMDhS0ya4O3hqqFsxRa4fNoqoiHMUogwyaLbJgWfcgVfst5b1wLv0JmK1Fda9sdz2rzOCVf"
// });


const client = createClient({
  projectId: "",
  dataset: "market-place",
  useCdn: true,
  apiVersion: '2025-01-13',
  token: "sk7MIccL2gGb1O31rtQOfz5j9ApatXMZmicNbFMZkPw6FWjfzXB1Ko7H2hFTX4Sc0KJsVYmAEI5cCIIJMt3qyNzoRUyYBVOi9M9aZXldesPjcZL2Wy0Elej9W2ZO8JB3PpOyotFcOvOqdj4M8dMsHyD3c54RlwXZbP0FW3WrDSNE477YANdC"
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();