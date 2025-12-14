import React from "react";
import { RootLayout as PayloadRootLayout } from "@payloadcms/next/layouts";
import config from "@/payload/payload.config";
import "@payloadcms/next/css";

type Args = {
  children: React.ReactNode;
};

import { importMap } from "./admin/importMap";

// This layout is only for the Payload admin routes
// The RootLayout from Payload handles the complete HTML structure for admin pages
const Layout = ({ children }: Args) => (
  <PayloadRootLayout
    config={config}
    importMap={importMap}
    serverFunction={async () => {
      "use server";
    }}
  >
    {children}
  </PayloadRootLayout>
);

export default Layout;
