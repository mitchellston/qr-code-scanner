import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  dts: true,
  outDir: "dist",
  format: ["esm"],
  entry: ["./index.ts", "./src/validator/**/*.ts"],
  clean: !opts.watch,
  minify: !opts.watch,
  esbuildOptions: (option) => {
    option.banner = {
      js: `"use client";`,
    };
  },
}));
