import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export const metadata = {
  title: "LickClaw — 为 AI Agent 装上龙虾钳",
  description:
    "Token 节省 15-82%，零推理成本的 AI Agent 桌面客户端。基于 OpenClaw 开源生态，本地运行，数据永不上传。",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
