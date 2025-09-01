/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['gsap'],
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.birlatyre.com",
                pathname: "/uploads/**/*",
            },
        ],
    },
    env: {
        DOMAIN_NAME: process.env.DOMAIN_NAME,
    },
 
    // ✅ Redirect www → non-www
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.birlatyre.com' }],
                destination: 'https://birlatyre.com/:path*',
                permanent: true,
            },
        ]
    },
};
 
module.exports = nextConfig;