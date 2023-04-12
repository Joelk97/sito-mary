/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["it", "fr", "en"],
    defaultLocale: "it",
  },
};

module.exports = nextConfig;
