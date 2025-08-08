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
  };
}
const ProductCard = ({ item }: ProductCardProps) => {
  return <div>  
    <div>
        {item?.name}
        
    </div>
  </div>;
};

export default ProductCard;
