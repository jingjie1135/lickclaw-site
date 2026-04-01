import { Link } from "@/i18n/routing";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="LickClaw" className="h-6 w-6" />
              <span className="font-semibold">LickClaw</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              基于 OpenClaw 的开源 AI Agent 桌面客户端
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-300">产品</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/features"
                className="text-sm text-gray-500 hover:text-white"
              >
                功能
              </Link>
              <Link
                href="/download"
                className="text-sm text-gray-500 hover:text-white"
              >
                下载
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-300">文档</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/docs"
                className="text-sm text-gray-500 hover:text-white"
              >
                安装指南
              </Link>
              <Link
                href="/docs"
                className="text-sm text-gray-500 hover:text-white"
              >
                配置说明
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-300">社区</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/jingjie1135/LickClawX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white"
              >
                Discord
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                飞书
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/[0.06] pt-6">
          <p className="text-xs text-gray-600">
            © 2026 LickClaw. MIT License.
          </p>
          <a
            href="https://github.com/jingjie1135/LickClawX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
