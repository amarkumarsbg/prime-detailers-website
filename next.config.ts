import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "primedetailers.com" }],
        destination: "https://www.primedetailers.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
