// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // necessário para GitHub Pages
  basePath: isProd ? '/ra1461392111005' : '',
  assetPrefix: isProd ? '/ra1461392111005/' : '',
  images: {
    unoptimized: true, // GitHub Pages não suporta otimizador de imagens
  },
  trailingSlash: true, // gera URLs com barra no final (evita 404 no Pages)
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/ra1461392111005' : '',
  },
}

export default nextConfig
