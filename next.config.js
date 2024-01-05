/** @type {import('next').NextConfig} */
const nextConfig = {}

if (!process.env.API_KEY) {
  throw new Error('API_KEY not set!');
}

if (!process.env.SESSION_KEY) {
  throw new Error('SESSION_KEY not set!');
}

if (!process.env.UPSTASH_REDIS_REST_URL) {
  throw new Error('UPSTASH_REDIS_REST_URL not set!');
}

if (!process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('UPSTASH_REDIS_REST_TOKEN not set!');
}

module.exports = nextConfig
