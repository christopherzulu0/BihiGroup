/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['miro.medium.com'], // Specify the domain without the full image URL
    },
    reactStrictMode: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    // experimental: {
    //   appDir: true, // Uncomment this only if you're using the app directory
    // },
  };
  
  export default nextConfig;
  