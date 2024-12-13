import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "sqlite",
  schema: "./src/db/index.ts",
  dbCredentials:{
    url: process.env.EXPO_PUBLIC_DB_FILE_NAME
  },
  entities:{
    roles: true
  },
  breakpoints: false,
});
