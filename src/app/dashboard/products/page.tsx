import { ProductCard } from "@/products/components";

export default function ProductsPage() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2">
      {/*ProductCard*/}

      <ProductCard />
    </div>
  );
}