import { defineConfig } from "@opennextjs/cloudflare/config";
import cache from "@opennextjs/cloudflare/cache";

export default defineConfig({
  middleware: undefined,
  cache: cache(),
});