import { defineField } from "sanity";

export default defineField({
  name: "House",
  description: "House",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name of Property",
      type: "string",
    }),
    

    defineField({
      name: "Location",
      title: "Location",
      of: [{ type: "reference", to: [{ type: "location" }] }],
      type: "array",
    }),

    defineField({
      
    }))

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "number_of_rooms",
      title: "Number of rooms",
      type: "number",
    }),

    defineField({
      name: "number_of_bathrooms",
      title: "Number of Bathrooms",
      type: "number",
    }),

    defineField({
      name: "describe_location",
      title: "Describe Location",
      type: "string",
    }),

    defineField({
      name: "buying_price",
      title: "Buying Price",
      type: "number",
    }),

    defineField({
      name: "rent_price",
      title: "Rent Price",
      type: "number",
    }),

    defineField({
      name: "image",
      title: "Image",
      description: "Remember that the first image would be used as a barner",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      position: "position",
    },
  },
});
