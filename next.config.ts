import type { NextConfig } from "next";
import imageHostAllowlist from "./config/image-host-allowlist.json";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const remoteImageHosts = [...imageHostAllowlist.unsplash, ...imageHostAllowlist.notionThumbnails];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteImageHosts.map((hostname) => ({ protocol: "https", hostname })),
  },
};

export default withNextIntl(nextConfig);
