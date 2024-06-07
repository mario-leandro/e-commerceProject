/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        API_URL_CATEGORY: process.env.API_URL_CATEGORY,
        API_URL_IDS: process.env.API_URL_IDS,
    },
};

export default nextConfig;