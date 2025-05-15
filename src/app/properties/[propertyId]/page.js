
import { getPropertyById } from "@/api/properties";
import ProductDetail from "@/components/properties/PropertyDetails";

export default async function ProductByIdPage({ params }) {
  const response = await getPropertyById(params.propertyId);
  const product = response.data;

  return <ProductDetail product={product} />;
}
