import type { Metadata } from "next";

import "@/style/globals.css";


export const metadata: Metadata = {
  title: "goat-notes",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
        {children}
      </body>
    </html>
  );
}
