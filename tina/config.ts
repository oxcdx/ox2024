import { defineConfig } from "tinacms";

import Post from "./collections/post";
import Page from "./collections/page";
import Project from "./collections/project";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  // just testing, switch back to use branch const later
  branch,

  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // clientId: "833e751e-bab6-4da0-bbf6-da3f2cada7f1", 
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // This should match the value in 
  // Get this from tina.io
  // token: process.env.TINA_TOKEN,
  // hardcode this later
  // token: "3d07cdaa8bbc02e44c8d3030343c8629a2766fb5",
  token:  process.env.TINA_TOKEN, // This should match the value in your .env file

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [ Post, Page, Project ],
  },
});
