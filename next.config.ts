import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/findsy`,
  assetPrefix: `/findsy`,
};

export default nextConfig;
