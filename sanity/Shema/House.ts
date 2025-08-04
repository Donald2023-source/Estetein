import { defineField } from "sanity";

export default defineField({
  name: "House",
  description: "House",
  type: "document",

  fields: [
    defineField({
      name: "Name of Property",
      title: "Name of Property",
      type: "string",
    }),

    defineField({
      name: "Location",
      title: "Location",
      of: [{ type: "reference", to: [{ type: "States" }] }],
      type: "array",
    }),

    defineField({
        name: "number of rooms",
        title: "Number of rooms",
        type: "number"
    }),

    defineField({
        name: "number of bathrooms", 
        title: "Number of Bathrooms", 
        type: "number"
    }),

    defineField({
      name: "describe location",
      title: "Describe Location",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
  ],
});
