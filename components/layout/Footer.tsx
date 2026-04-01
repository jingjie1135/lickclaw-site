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
                href="https://github.com/jingjie1135/lickclaw-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-white"
              >
                GitHub
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
          <div className="flex items-center gap-4">
            <a
              href="https://space.bilibili.com/1499434734"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-[#00AEEC]"
              title="Bilibili 主页"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.813 4.653h.002c.089 0 .175.034.24.095l.006.006 2.083 2.083c.125.125.132.324.017.457l-.004.004a.31.31 0 0 1-.202.09l-.013.001H20.4c1.42 0 2.583 1.134 2.599 2.545l.001.055v8.02c0 1.436-1.164 2.6-2.6 2.6H3.6c-1.436 0-2.6-1.164-2.6-2.6v-8.02c0-1.42 1.134-2.583 2.545-2.599L3.6 7.39h.459a.309.309 0 0 1 .215-.091l.011-.001c.088 0 .174.035.239.096l.006.005 2.083-2.083a.326.326 0 0 1 .442-.016l.004.004.015.016 1.155 1.155a.324.324 0 0 1 .015.442l-.004.004-.016.015-1.155 1.155H17.2l-1.155-1.155a.326.326 0 0 1-.016-.442l.004-.004.016-.015 1.155-1.155zM20.4 9.19H3.6c-.543 0-.988.432-1.018.97l-.002.05v8.02c0 .552.448 1 1 1h16.8c.552 0 1-.448 1-1v-8.02c0-.552-.448-1-1-1Zm-11.602 3.02a1.2 1.2 0 0 1 1.196 1.107l.004.093v1.8a1.2 1.2 0 0 1-2.396.093l-.004-.093v-1.8a1.2 1.2 0 0 1 1.2-1.2Zm6.4 0a1.2 1.2 0 0 1 1.196 1.107l.004.093v1.8a1.2 1.2 0 0 1-2.396.093l-.004-.093v-1.8a1.2 1.2 0 0 1 1.2-1.2Z" />
              </svg>
            </a>
            <a
              href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4_0kWfOz7kfi_Z5pSPvHe_fJ_kGrxnmr&authKey=hfFpsAEaE%2BF2cpcs21YPzPBYxjMM8w6UpeP5TDEpCdcSLZZ81lc1gjobOs9gTJ22&noverify=0&group_code=146896556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-white"
              title="QQ 交流群 1"
            >
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium">QQ群1</span>
              </div>
            </a>
            <a
              href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=0H7bE7KaKShsMChFuuxkJf9XbTwAoC5r&authKey=JXfM2YepDZVwnc3AG4LR4Qa3wJP3W9BU9Xpw06TLdwEeOYk6Hw4pn0c1jLtmkj88&noverify=0&group_code=180456079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-white"
              title="QQ 交流群 2"
            >
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium">QQ群2</span>
              </div>
            </a>
            <a
              href="https://github.com/jingjie1135/lickclaw-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-white"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
