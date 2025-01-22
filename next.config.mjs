/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['miro.medium.com',
        'www.worldbank.org',
        'd12aarmt01l54a.cloudfront.net',
        'd.newsweek.com',
        'aicontentfy-customer-images.s3.eu-central-1.amazonaws.com',
        'encrypted-tbn0.gstatic.com',
        'www.padok.fr',
        'swimburger.net'
      ], // Specify the domain without the full image URL
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
  