"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const t = useTranslations("comparison");

  const features = [
    { name: t("items.tokenCompress"), lickclaw: true, clawx: false, saas: false },
    { name: t("items.relayProxy"), lickclaw: true, clawx: false, saas: false },
    { name: t("items.pluginManage"), lickclaw: true, clawx: false, saas: false },
    { name: t("items.agentConfig"), lickclaw: true, clawx: false, saas: false },
    { name: t("items.gatewayIso"), lickclaw: true, clawx: false, saas: false },
    { name: t("items.sourceProtect"), lickclaw: true, clawx: false, saas: true },
    { name: t("items.dataSecurity"), lickclaw: true, clawx: false, saas: false },
    { name: t("items.localRun"), lickclaw: true, clawx: true, saas: false },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-gray-400">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 overflow-hidden rounded-xl border border-white/[0.06]"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                <th className="px-6 py-4 text-left font-medium text-gray-300">
                  {t("header.feature")}
                </th>
                <th className="px-4 py-4 text-center font-medium text-brand-red">
                  LickClaw
                </th>
                <th className="px-4 py-4 text-center font-medium text-gray-400">
                  {t("header.clawx")}
                </th>
                <th className="px-4 py-4 text-center font-medium text-gray-400">
                  {t("header.saas")}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.name}
                  className="border-b border-white/[0.03] last:border-0"
                >
                  <td className="px-6 py-3 text-gray-300">{f.name}</td>
                  <td className="px-4 py-3 text-center">
                    {f.lickclaw ? (
                      <Check className="mx-auto h-4 w-4 text-green-400" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-gray-600" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {f.clawx ? (
                      <Check className="mx-auto h-4 w-4 text-green-400" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-gray-600" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {f.saas ? (
                      <Check className="mx-auto h-4 w-4 text-green-400" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-gray-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
