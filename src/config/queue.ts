import { Client } from "@upstash/qstash";

const queueClient = new Client({
  // Add your token to a .env file
  token: process.env.QSTASH_TOKEN!,
});

export default queueClient;
