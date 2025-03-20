import type { Metadata } from "next";
import "@/style/globals.css";
import { ThemeProvider } from "@/providers/providers";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header"; // Import Header component

export const metadata: Metadata = {
  title: "Goat Note",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
          <Header /> {/* Corrected component name */}
          <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">{children}</main>
          </div>
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
