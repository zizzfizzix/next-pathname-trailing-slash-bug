/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about/",
        permanent: true,
      },
    ];
  }
}

module.exports = config
