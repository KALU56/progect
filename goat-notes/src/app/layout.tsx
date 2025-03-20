import type { Metadata } from "next";
import "@/style/globals.css";
import { ThemeProvider } from "@/providers/providers";
import { Toaster } from "@/components/ui/sonner";

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
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
