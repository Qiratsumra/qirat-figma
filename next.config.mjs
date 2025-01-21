/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true
    }
};

module = {
    output: 'export',
  };
export default {nextConfig,module};
