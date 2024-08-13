import { defineConfig } from "drizzle-kit";
config({ path: '.env' });
export default defineConfig({
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
})