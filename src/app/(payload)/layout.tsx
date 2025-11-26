import React from 'react'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '@/payload/payload.config'
import '@payloadcms/next/css'

type Args = {
  children: React.ReactNode
}

import { importMap } from './admin/importMap'

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={async () => { 'use server' }}>
    {children}
  </RootLayout>
)

export default Layout
