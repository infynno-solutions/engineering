import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Outfit as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontSans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
