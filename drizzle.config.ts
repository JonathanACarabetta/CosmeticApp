import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: "expo",
  dialect: "sqlite",
  out: "./drizzle",
  schema: "./src/db/index.ts",
});
