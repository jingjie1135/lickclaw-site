import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LickClaw — 立刻使用龙虾并享受词元压缩",
  description: "Token 节省 15-82%，零推理成本的 AI Agent 桌面客户端。",
  icons: {
    icon: "/title.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="dark">
      <body className="min-h-screen bg-black font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
