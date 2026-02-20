import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "secure.notion-static.com" },
      { protocol: "https", hostname: "prod-files-secure.s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "www.notion.so" },
      { protocol: "https", hostname: "file.notion.so" },
      { protocol: "https", hostname: "s3.us-west-2.amazonaws.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
