import type { NextConfig } from "next";

const repositoryName = "findsy";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}`,
};

export default nextConfig;
