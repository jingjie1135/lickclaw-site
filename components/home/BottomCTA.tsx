"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export function BottomCTA() {
  const t = useTranslations("bottomCta");

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[300px] w-[500px] rounded-full bg-brand-red/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            <GradientText>{t("title")}</GradientText>
          </h2>
          <p className="mt-4 text-lg text-gray-400">{t("subtitle")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/download">
              <Button>
                {t("download")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href={siteConfig.links.feishuDoc}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <ExternalLink className="h-4 w-4" />
                {t("feishuDoc")}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
