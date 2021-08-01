module.exports = {
  // reactStrictMode: true,
  basePAth:'/alex_web_next',
  assetPrefix:'/alex_web_next',
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
