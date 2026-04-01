@echo off
cd /d "%~dp0"
echo.
echo  ╔══════════════════════════════════════╗
echo  ║       LickClaw Website Dev Server    ║
echo  ╚══════════════════════════════════════╝
echo.
echo  Installing dependencies...
call pnpm install --frozen-lockfile 2>nul || call pnpm install
echo.
echo  Starting dev server...
echo  Local:   http://localhost:3000
echo  Network: http://172.18.0.1:3000
echo.
echo  Press Ctrl+C to stop.
echo.
call pnpm dev
