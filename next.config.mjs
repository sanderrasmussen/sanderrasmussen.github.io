/** @type {import('next').NextConfig} */
/*const nextConfig = {};

export default nextConfig;
*/ 

const nextConfig = {
    basePath: "/nextjs-github-pages",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig; 