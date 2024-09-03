/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['gsap'],
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "birlatyres.viaconprojects.com",
                port: "1337",
                pathname: "/uploads/**/*",
            },
        ],
    },
};

module.exports = nextConfig
