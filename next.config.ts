import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compress: true,

  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 31536000,

    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
