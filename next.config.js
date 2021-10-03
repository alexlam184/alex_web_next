module.exports = {
  // reactStrictMode: true,
  // basePath:'/alex_web_next',  // work in github page but not work in localhost
  // assetPrefix:'/alex_web_next', // work in github page but not work in localhost
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'imgix',
    path: '', 
  },
}
