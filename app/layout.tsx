import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Google_Sans_Flex as FontSans } from "next/font/google";
import type { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/infynno-solutions-llp.png",
    shortcut: "/infynno-solutions-llp.png",
    apple: "/infynno-solutions-llp.png",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontSans.className} suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
