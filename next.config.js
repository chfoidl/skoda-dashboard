/** @type {import('next').NextConfig} */
const nextConfig = {}

if (!process.env.API_KEY) {
  throw new Error('API_KEY not set!');
}

if (!process.env.SESSION_KEY) {
  throw new Error('SESSION_KEY not set!');
}

module.exports = nextConfig
