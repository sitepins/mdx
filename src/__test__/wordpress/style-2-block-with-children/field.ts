import { RichTextField } from "@/types";

export const field: RichTextField = {
  name: "body",
  type: "rich-text",
  parser: { type: "markdown" },
  templates: [
    {
      name: "someFeature",
      label: "Some feature",
      match: { start: "[", end: "]", name: "recent-posts" },
      fields: [
        { name: "posts", type: "string" },
        { name: "children", type: "rich-text" },
      ],
    },
  ],
};
