import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
