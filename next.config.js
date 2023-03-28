/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/barkle",
        destination: "https://barkle.chat/@Avunite",
        permanent: false,
      }
    ];
  },
};
