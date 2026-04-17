import type { NextConfig } from "next";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  turbopack: {
    root: dirname(__filename),
  },
};

export default nextConfig;
