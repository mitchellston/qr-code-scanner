import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  splitting: true,
  sourcemap: false,
  dts: true,
  outDir: "dist",
  format: ["esm"],
  entry: ["./index.ts"],
  clean: !opts.watch,
  esbuildOptions: (option) => {
    option.banner = {
      js: `"use client";`,
    };
  },
}));
