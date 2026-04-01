"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 400],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const borderBottomColor = useTransform(
    scrollY,
    [0, 400],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.06)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 400],
    ["blur(0px)", "blur(24px)"]
  );

  const links = [
    { href: "/", label: t("home") },
    { href: "/features", label: t("features") },
    { href: "/docs", label: t("docs") },
    { href: "/download", label: t("download") },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, borderBottomColor, backdropFilter }}
      className="fixed top-0 z-50 w-full border-b"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="LickClaw" className="h-8 w-8" />
          <span className="text-lg font-semibold">LickClaw</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/jingjie1135/lickclaw-site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <Link href="/" locale="zh">
            <button className="text-xs text-gray-500 hover:text-white">
              ZH
            </button>
          </Link>
          <span className="text-xs text-gray-600">/</span>
          <Link href="/" locale="en">
            <button className="text-xs text-gray-500 hover:text-white">
              EN
            </button>
          </Link>
        </div>

        <button
          className="text-gray-400 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-black/95 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-gray-400 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-3">
            <Link href="/" locale="zh">
              <button className="text-xs text-gray-500 hover:text-white">
                中文
              </button>
            </Link>
            <Link href="/" locale="en">
              <button className="text-xs text-gray-500 hover:text-white">
                English
              </button>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
