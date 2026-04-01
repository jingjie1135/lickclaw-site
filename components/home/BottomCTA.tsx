"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";

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
            <Button>
              {t("download")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="https://github.com/jingjie1135/lickclaw-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <Github className="h-4 w-4" />
                {t("github")}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
