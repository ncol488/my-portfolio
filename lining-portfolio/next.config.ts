import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // This must match your GitHub repository name exactly
  basePath: "/my-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
