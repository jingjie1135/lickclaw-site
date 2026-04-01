"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Shield, Lock } from "lucide-react";

export function OpenSource() {
  const t = useTranslations("openSource");

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="h-5 w-5 text-brand-cyan" />
              <span className="text-sm">{t("localRun")}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Lock className="h-5 w-5 text-brand-cyan" />
              <span className="text-sm">API Key 加密存储</span>
            </div>
          </div>
          <p className="text-base text-gray-400">{t("description")}</p>
        </motion.div>
      </div>
    </section>
  );
}
