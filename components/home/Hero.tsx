"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-16 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-brand-red/10 blur-[120px]" />
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 flex flex-col items-center gap-4"
      >
        <img
          src="/logo.svg"
          alt="LickClaw"
          className="h-64 w-64 drop-shadow-[0_0_80px_rgba(255,69,0,0.8)] md:h-[320px] md:w-[320px]"
        />
        <h2 className="bg-gradient-to-br from-brand-red via-brand-orange to-brand-cyan bg-clip-text text-5xl font-extrabold tracking-[0.2em] text-transparent drop-shadow-2xl md:text-7xl">
          LickClaw
        </h2>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 font-bold tracking-tight"
      >
        <div className="text-4xl md:text-6xl mb-4">
          <GradientText>{t("titleLine1")}</GradientText>
        </div>
        <div className="text-3xl md:text-5xl">
          <GradientText>{t("titleLine2")}</GradientText>
        </div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
      >
        {t("subtitle")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="/download">
          <Button>
            {t("download")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
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
      </motion.div>
    </section>
  );
}
