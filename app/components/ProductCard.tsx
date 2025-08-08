import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  item: {
    id: string;
    title: string;
    name: string;
    slug: string;
    location: string;
    number_of_rooms: number;
    number_of_bathrooms: number;
    description: string;
    describe_location: string;
    image: [
      asset: {
        _ref: string
      }
    ]
  };
}
const ProductCard = ({ item }: ProductCardProps) => {
  return <div>  
    <div>
       <div>
        <Image src={urlFor(item?.image)} alt="Product Image" width={500} height={300} className="w-full h-64 object-cover rounded-lg" />
       </div>
        
    </div>
  </div>;
};

export default ProductCard;
