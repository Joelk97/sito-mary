import { createClient } from "next-sanity";

const client = createClient({
  projectId: "i5ipip35",
  dataset: "production",
  apiVersion: "2022-10-26",
  useCdn: false,
});

export default client;
