import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import type { CSSProperties } from "react";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const containerStyle = {
    "--fd-layout-width": "100%",
  } as CSSProperties;

  return (
    <DocsLayout
      tree={source.getPageTree()}
      containerProps={{ style: containerStyle }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
