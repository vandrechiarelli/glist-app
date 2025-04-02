import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TODO: check what is the correct value for this
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.1.41'],
};

export default nextConfig;
