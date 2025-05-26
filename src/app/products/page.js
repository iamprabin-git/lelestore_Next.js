import React from "react";
import ProductCard from "@/components/products/Card";
import { getBrands, getCategories, getProducts } from "@/api/products";
import PropertyDrawer from "@/components/products/Drawer";
import PropertyFilters from "@/components/products/Filters";
import SearchProperty from "@/components/products/Search";

export const metadata = {
  title: "Products",
};

async function ProductsPage({ searchParams }) {
  const response = await getProducts(await searchParams);
  const brandsResponse = await getBrands();
  const categoriesResponse = await getCategories();

  const products = response?.data;
  const brands = brandsResponse?.data;
  const categories = categoriesResponse?.data;

  return (
    <section className="container mx-auto px-4">
      <div className=" grid grid-cols-[1fr_auto_auto] items-center gap-3">
        <h1 className="text-3xl font-bold underline pt-6 justify-between">
          Popular Products
        </h1>
        <SearchProperty />
        <PropertyFilters brands={brands} categories={categories} />
      </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 ">
          {products?.length > 0 ? (
            products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))):(
            <div className="text-center text-2xl text-red-600 ">No Properties Found</div>
          )
        }
        </div>
    </section>
  );
}

export default ProductsPage;
