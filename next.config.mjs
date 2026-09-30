/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old /products/:slug URLs to /products so they don't 404.
      {
        source: "/products/:slug((?!$)[^/]+)",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
