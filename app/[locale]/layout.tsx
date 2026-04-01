import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export const metadata = {
  title: "LickClaw — 立刻为龙虾装上词元压缩",
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
      {/* 动态美化背景层 */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute top-[-10%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-cyan/20 mix-blend-screen blur-[120px] animate-blob pointer-events-none"></div>
        <div
          className="absolute top-[20%] right-[-10%] h-[35rem] w-[35rem] rounded-full bg-brand-purple/20 mix-blend-screen blur-[120px] animate-blob pointer-events-none"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-[-10%] left-[20%] h-[25rem] w-[25rem] rounded-full bg-brand-orange/20 mix-blend-screen blur-[120px] animate-blob pointer-events-none"
          style={{ animationDelay: "4s", animationDuration: "9s" }}
        ></div>
        <div className="absolute inset-0 bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
      </div>

      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
