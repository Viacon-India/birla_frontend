/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['gsap'],
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "birlatyres.viaconprojects.com",
                port: "1337",
                pathname: "/uploads/**/*",
            },
        ],
    },
    env: {
        DOMAIN_NAME: process.env.DOMAIN_NAME,
    },
};

module.exports = nextConfig
