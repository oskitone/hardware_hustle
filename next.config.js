const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withMDX(nextConfig);
