import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: "astro_blog"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "posts",
        label: "Articles",
        path: "src/articles",
        defaultItem: () => {
          return {
            title: 'Nuovo articolo',
            pubDate: new Date().toISOString()
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Date',
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'object',
            name: 'image',
            label: 'Add Image',
            fields: [
              {
                label: 'URL',
                name: 'url',
                type: 'string'
              },
              {
                label: 'Alt',
                name: 'alt',
                type: 'string'
              },
              {
                label: 'License',
                name: 'license',
                type: 'string'
              },
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
