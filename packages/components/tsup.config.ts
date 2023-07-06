import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  splitting: true,
  sourcemap: false,
  dts: true,
  outDir: "../../dist/libs/react-simple-qr-code-scanner",
  format: ["esm"],
  entry: ["./index.ts"],
  clean: !opts.watch,
  esbuildOptions: (option) => {
    option.banner = {
      js: `"use client";`,
    };
  },
}));
