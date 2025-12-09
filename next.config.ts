import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here - restart trigger 2 */
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
};


export default nextConfig;
