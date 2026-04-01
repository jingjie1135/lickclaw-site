"use client";

import { useTranslations } from "next-intl";
import { Monitor, Apple, Laptop, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DownloadPage() {
  const t = useTranslations("download");

  const platforms = [
    {
      name: "Windows",
      icon: <Monitor className="h-8 w-8" />,
      arch: ["x64", "arm64"],
      ext: ".exe",
    },
    {
      name: "macOS",
      icon: <Apple className="h-8 w-8" />,
      arch: ["Intel", "Apple Silicon"],
      ext: ".dmg",
    },
    {
      name: "Linux",
      icon: <Laptop className="h-8 w-8" />,
      arch: ["x64"],
      ext: ".AppImage",
    },
  ];

  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray-400">{t("subtitle")}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-white/[0.06] bg-[#111318] p-8 transition-colors hover:border-brand-cyan/30"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-brand-cyan">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {p.arch.join(" / ")} {p.ext}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full">
                    <Download className="h-4 w-4" />
                    {t("feishuDoc")}
                  </Button>
                </a>
                <Button variant="secondary" disabled className="w-full cursor-not-allowed opacity-50">
                  <Download className="h-4 w-4" />
                  {t("directDownload")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            {t("version")} v0.3.2 · {t("released")} 2026-03
          </p>
          <a
            href="https://github.com/jingjie1135/lickclaw-site/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-brand-cyan hover:text-white"
          >
            {t("changelog")}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
