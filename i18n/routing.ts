import { createNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["zh", "en"],
  defaultLocale: "zh",
} as const;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
