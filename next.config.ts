import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/beddr/:path*",
        destination: "https://beddr.app/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
