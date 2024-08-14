// import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//   schema: "./utils/schema.jsx",
//   out: "./drizzle",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DATABASE_URL,
//   },
// })


// export default {
//   schema: "./utils/schema.jsx",
//   out: "./drizzle",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DATABASE_URL,
//     connectionStrings: process.env.NEXT_PUBLIC_DATABASE_URL
//   },
// }

import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";
config({ path: '.env.local' });
export default defineConfig({
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});