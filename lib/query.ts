import { groq } from "next-sanity";

export const houseQuery = groq`*[_type == 'House']{...} | order(createdAt, asc)`;
