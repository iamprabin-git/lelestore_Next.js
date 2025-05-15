import { getPropertyById } from "@/api/properties";





async function ProductByIdPage({params}) {
  const productId= (await params).productId;
   const response = await getPropertyById(productId);

  const product = response?.data;
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <p>Rs.{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductByIdPage;

