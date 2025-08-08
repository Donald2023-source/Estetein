import { client } from "@/sanity/lib/client";
import { houseQuery } from "./query";

const getHouse = async () => {
  const houseData = await client.fetch(houseQuery);
  return houseData;
};
