import type { Collection } from "tinacms";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/english/pages",
  // ui: {
  //   router: ({ document }) => {
  //     if (document._sys.filename === "home") {
  //       return `/`;
  //     }
  //     if (document._sys.filename === "about") {
  //       return `/about`;
  //     }
  //     return undefined;
  //   },
  // },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Meta Title",
      name: "meta_title",
      description:
        "",
      required: false,
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      description:
        "",
      required: false,
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default Page;