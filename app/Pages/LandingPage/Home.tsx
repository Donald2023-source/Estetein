import Hero from "@/app/components/Hero";
import React from "react";
import Link from "next/link";
import { getHouse } from "@/lib/getData";
import ProductCard from "@/app/components/ProductCard";
const Home = async () => {
  const houseData = await getHouse();
  console.log(houseData);
  return (
    <div>
      <Hero />
      <Link href={"/studio"}>Studio</Link>

      <div>
        <h2>Featured Properties</h2>
        {houseData?.map((item: any) => (
          <ProductCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
