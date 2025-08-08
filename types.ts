type imageAsset = {
  _ref: string;
  type: string;
};
export interface ProductData {
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
    image: imageAsset;
  };
}
