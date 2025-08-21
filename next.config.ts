const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
    basePath: '/PortFolio',
    assetPrefix: '/PortFolio/',
  eslint: {
    ignoreDuringBuilds: false, // 👈 disables ESLint check in CI
  },
};

module.exports = nextConfig;
