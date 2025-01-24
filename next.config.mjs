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
        'swimburger.net',
        'media.licdn.com',
        'res.cloudinary.com',
        'www.botanicgardens.org.au',
        'vijayimpex.co.in',
        'goodineverygrain.ca',
        'i.guim.co.uk',
        'oritain.com',
        'cyfairanimalhospital.com',
        'beefmaster.co.za',
        'cdn.britannica.com',
        'emedenkenyafarmers.co.ke',
        'www.graygroupintl.com',
        'www.market-prospects.com',
        'www.roofingcontractor.com',
        'www.stahlroofing.ca',
        'static.theprint.in',
        'www.afdb.org',
        'hivelife.com',
        'www.kerry.com',
        'www.coca-cola.com',
        'www.holar.com.tw',
        'www.preservemania.com',
        'assets.epicurious.com',
        'www.kapilabakers.com'
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
  