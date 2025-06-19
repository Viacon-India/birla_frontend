/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['gsap'],
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "birlatyres.viaconprojects.com",
                pathname: "/uploads/**/*",
            },
        ],
    },
    env: {
        DOMAIN_NAME: process.env.DOMAIN_NAME,
    },
};

module.exports = nextConfig
