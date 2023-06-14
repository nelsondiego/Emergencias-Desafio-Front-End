/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'apod.nasa.gov',
      'img.youtube.com',
      'i.vimeocdn.com'
    
    ]
  }
}

module.exports = nextConfig
