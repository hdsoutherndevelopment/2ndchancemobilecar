/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 828, 1080, 1200, 1600, 1920, 2048],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
