/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // basePath:"",
output: 'export',
  // assetPrefix: '',

};

export default nextConfig;
