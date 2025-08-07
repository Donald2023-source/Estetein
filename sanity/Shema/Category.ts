import { defineField } from "sanity";

export default defineField({
  name: "category",
  description: "Category",
  title: "Category",
  type: "document",

  fields: [
    defineField({
      name: "property_type",
      title: "What type of property is this?",
      type: "string",
    }),
  ],
});
