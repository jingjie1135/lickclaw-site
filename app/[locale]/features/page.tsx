"use client";

import { useTranslations } from "next-intl";
import { FeatureSection } from "@/components/home/FeatureSection";

export default function FeaturesPage() {
  const t = useTranslations("features");

  const features = [
    {
      id: "relay-proxy",
      title: t("relayProxy.title"),
      description: t("relayProxy.description"),
      imageSrc: "/screenshots/relay-proxy.svg",
      imageAlt: "LickClaw 模型热切换",
      color: "#FF4500",
      reverse: false,
      highlights: t.raw("relayProxy.highlights") as string[],
    },
    {
      id: "compactor",
      title: t("compactor.title"),
      description: t("compactor.description"),
      imageSrc: "/screenshots/compactor.svg",
      imageAlt: "LickClaw Token 压缩引擎",
      color: "#00D4FF",
      reverse: true,
      highlights: t.raw("compactor.highlights") as string[],
    },
    {
      id: "management",
      title: t("management.title"),
      description: t("management.description"),
      imageSrc: "/screenshots/management.svg",
      imageAlt: "LickClaw 管理中心",
      color: "#8B5CF6",
      reverse: false,
      highlights: t.raw("management.highlights") as string[],
    },
    {
      id: "agents",
      title: t("agents.title"),
      description: t("agents.description"),
      imageSrc: "/screenshots/agents.svg",
      imageAlt: "LickClaw Agent 配置",
      color: "#F59E0B",
      reverse: true,
      highlights: t.raw("agents.highlights") as string[],
    },
    {
      id: "gateway",
      title: t("gateway.title"),
      description: t("gateway.description"),
      imageSrc: "/screenshots/gateway.svg",
      imageAlt: "LickClaw Gateway 隔离",
      color: "#00D4FF",
      reverse: false,
      highlights: t.raw("gateway.highlights") as string[],
    },
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg text-gray-400">{t("pageSubtitle")}</p>
      </div>
      {features.map((f) => (
        <FeatureSection key={f.id} {...f} />
      ))}
    </div>
  );
}
