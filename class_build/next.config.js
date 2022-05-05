/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "wonywony",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;

//  exportPathMap: () => ({
//   "/": { page: "/" },
//   "/boards": { page: "/boards" },
//   "/404": { page: "/404" },
// }),  이 부분은 서버사이드렌더링을 시켜주지 않는 부분이다
