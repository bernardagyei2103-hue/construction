/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Static export for production builds only. Applying `output: 'export'` during `next dev` is a
   * known source of "missing required error components" and unstable dev overlay behavior.
   * @see https://github.com/vercel/next.js/issues/61905
   */
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
