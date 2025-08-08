import { urlFor } from "@/sanity/lib/image";
import { ProductData } from "@/types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ item }: ProductData) => {
  return (
    <div>
      <div>
        <div>
          <Image
            src={urlFor(item?.image).url()}
            alt="Product Image"
            width={500}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
