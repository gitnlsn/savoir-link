import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    // Explicit `~` → src alias, independent of tsconfig include/exclude (test files are
    // excluded from tsconfig so they don't leak into the Next production build's type-check).
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.ts"],
    // Integration tests hit the Pagar.me sandbox over the network.
    testTimeout: 20_000,
    hookTimeout: 20_000,
  },
});
