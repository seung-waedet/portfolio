import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    reactCompiler: false,
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      'lodash',
      '@payloadcms/ui',
      '@payloadcms/next',
      '@payloadcms/richtext-lexical',
      'framer-motion',
      'react-syntax-highlighter'
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
}

export default withPayload(nextConfig)
