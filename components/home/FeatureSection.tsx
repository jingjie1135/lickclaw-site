"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
  reverse?: boolean;
  highlights?: string[];
}

export function FeatureSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  color,
  reverse = false,
  highlights = [],
}: FeatureSectionProps) {
  return (
    <section id={id} className="relative py-12">
      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-12",
          reverse && "lg:flex-row-reverse"
        )}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative w-full lg:w-3/5"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-2xl opacity-20 blur-2xl"
            style={{ backgroundColor: color }}
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative w-full rounded-lg border border-white/[0.06] shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-2/5"
        >
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: `${color}20`,
              color: color,
            }}
          >
            {title}
          </span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400">
            {description}
          </p>
          {highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color }}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
