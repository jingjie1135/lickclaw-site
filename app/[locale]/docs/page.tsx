export const metadata = {
  title: "文档 — LickClaw",
};

export default function DocsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">文档</h1>
        <p className="mt-4 text-lg text-gray-400">
          安装指南、配置说明和使用文档
        </p>

        <div className="mt-12 space-y-12">
          {/* 安装指南 */}
          <section>
            <h2 className="text-2xl font-semibold text-brand-cyan">安装指南</h2>
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#111318] p-6">
              <h3 className="font-medium">1. 下载安装包</h3>
              <p className="mt-2 text-sm text-gray-400">
                前往下载页获取最新版本，支持 Windows、macOS 和 Linux。
              </p>
              <h3 className="mt-4 font-medium">2. 首次启动</h3>
              <p className="mt-2 text-sm text-gray-400">
                启动后进入设置向导，配置语言、AI Provider 和技能包。
              </p>
              <h3 className="mt-4 font-medium">3. 配置 API Key</h3>
              <p className="mt-2 text-sm text-gray-400">
                在设置 → AI Provider 中添加你的 API Key（支持 OpenAI、Anthropic、Google 等）。
              </p>
            </div>
          </section>

          {/* 压缩代理 */}
          <section>
            <h2 className="text-2xl font-semibold text-brand-cyan">压缩代理</h2>
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#111318] p-6">
              <p className="text-sm text-gray-400">
                LickClaw 内置 14 阶段 Fusion Pipeline 压缩引擎，自动压缩 LLM 对话上下文，
                节省 15-82% Token 消耗，零额外推理成本。
              </p>
              <div className="mt-4 rounded-lg bg-black/50 p-4 font-mono text-sm text-gray-300">
                设置 → Gateway → 压缩代理 → 开启
              </div>
            </div>
          </section>

          {/* 中转代理 */}
          <section>
            <h2 className="text-2xl font-semibold text-brand-cyan">中转代理</h2>
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#111318] p-6">
              <p className="text-sm text-gray-400">
                中转代理在请求层拦截 LLM 调用，支持运行时动态切换模型、品牌脱敏和请求日志。
              </p>
              <div className="mt-4 rounded-lg bg-black/50 p-4 font-mono text-sm text-gray-300">
                管理中心 → 渠道 → 中转代理模式
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
