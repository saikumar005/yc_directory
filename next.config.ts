import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.freepik.com'], // Add the external domain here
  },
  experimental:{
    ppr:'incremental'
  },
  devIndicators:{
    appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:'bottom-right'
  }
};

export default nextConfig;
