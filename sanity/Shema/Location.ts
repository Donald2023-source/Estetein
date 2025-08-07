import { defineField } from "sanity";

export default defineField({
  name: "location",
  title: "Location",
  type: "document",

  fields: [
    defineField({
        name: "country", 
        title: "Country",
        type: "string"
    }),

    defineField({
      name: "state",
      title: "State",
      type: "string",
    }),
  ],
});
