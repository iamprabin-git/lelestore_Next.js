import React from "react";
import ProductCard from "@/components/properties/Card";
import { getBrands, getCategories, getProperties } from "@/api/properties";
import PropertyDrawer from "@/components/properties/Drawer";
import PropertyFilters from "@/components/properties/Filters";

export const metadata = {
  title: "Properties",
};

async function PropertiesPage({ searchParams }) {
  const response = await getProperties(await searchParams);
  const brandsResponse = await getBrands();
  const categoriesresponse = await getCategories();

  const products = response?.data;
  const brands = brandsResponse?.data;
  const categories = categoriesresponse?.data;

  return (
    <section>
      <div className="grid grid-cols-[1fr_auto] ">
        <h1 className="text-3xl font-bold underline pt-6 justify-self-center">
          Popular Properties
        </h1>
        <PropertyFilters brands={brands} categories={categories} />
        <div className="container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 ">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertiesPage;
