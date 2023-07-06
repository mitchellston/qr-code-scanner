import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
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
