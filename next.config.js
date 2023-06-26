/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_API_URL).hostname],
  },
};
