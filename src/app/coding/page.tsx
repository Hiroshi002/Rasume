"use client";
import Link from "next/link";
import {
  Code,
  ArrowLeft,
  Terminal,
  ChevronRight,
  Sparkles,
  Cpu,
  Braces,
  GitBranch,
  Package,
} from "lucide-react";
import { resumeConfig } from "../../config/resumeConfig";
import { themeConfig } from "../../config/themeConfig";
import React from "react";

interface Project {
  title: string;
  icon: React.ReactNode;
  description: string;
  tech?: string;
  link?: string;
}

export default function CodingPage() {
  const { codingPage } = resumeConfig;
  const theme = themeConfig.pages.coding;

  if (!codingPage) return null;

  return (
    <div
      className={`min-h-screen pb-40 ${theme.background} relative overflow-hidden text-slate-100 selection:bg-blue-500/30`}
    >
      {/* ─── Background ─── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial top fade */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_50%_-10%,rgba(59,130,246,0.18),transparent_65%)]" />
        {/* Orbs */}
        <div
          className={`absolute -top-40 -right-40 w-[700px] h-[700px] ${theme.decorativeCircles[0]} rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] ${theme.decorativeCircles[1]} rounded-full blur-[130px] animate-[pulse_14s_ease-in-out_infinite_2s]`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 relative z-10">
        {/* ─── Navigation ─── */}
        <div className="flex items-center justify-between mb-14 md:mb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-400"
          >
            <ArrowLeft
              size={16}
              className="text-blue-400 group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-white transition-colors">
              Back to Me
            </span>
          </Link>

          {/* Page label */}
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Code size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
              System Dev
            </span>
          </div>
        </div>

        {/* ─── Hero Header ─── */}
        <header className="relative mb-20 md:mb-28 text-center">
          {/* Giant BG number */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[18rem] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter leading-none">
            &lt;/&gt;
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-5 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div
                  className={`relative p-7 md:p-10 bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] border border-white/10 ${theme.header.glow} animate-[float_6s_ease-in-out_infinite]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem]" />
                  <Code
                    strokeWidth={1.5}
                    className="relative z-10 text-blue-400 w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  />
                </div>
                {/* Orbiting badge */}
                <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-slate-900 rounded-xl border border-blue-500/50 flex items-center justify-center">
                  <Sparkles size={14} className="text-blue-400 animate-pulse" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              <span className="text-white/80">SYSTEM</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor}, ${theme.secondaryAccent})`,
                }}
              >
                DEVELOPMENT
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
                Production Environment v4.0
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
            </div>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              {codingPage.subtitle}
            </p>
          </div>
        </header>

        {/* ─── Projects ─── */}
        {codingPage.projects.length > 0 ? (
          <div className="space-y-6 md:space-y-8">
            {(codingPage.projects as any[]).map((project: Project, idx) => (
              <div
                key={project.title}
                className="group relative bg-slate-900/50 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-white/8 hover:border-blue-500/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Index watermark */}
                <div className="absolute -top-4 -right-4 text-[8rem] font-black text-white/[0.018] select-none pointer-events-none tracking-tighter">
                  0{idx + 1}
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-br-[5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-10">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                    <div className="relative p-6 md:p-8 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-2xl md:rounded-[2rem] border border-white/5 group-hover:scale-105 group-hover:rotate-3 transition-all duration-700">
                      {React.isValidElement(project.icon) &&
                        React.cloneElement(
                          project.icon as React.ReactElement<
                            React.SVGProps<SVGSVGElement>
                          >,
                          {
                            className:
                              "text-blue-300 w-10 h-10 md:w-12 md:h-12",
                          },
                        )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal size={12} className="text-blue-500/50" />
                        <span className="text-[9px] font-black text-blue-500/50 uppercase tracking-[0.3em]">
                          Project Manifest
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors duration-500">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech?.split(", ").map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-blue-500/8 text-blue-300 text-[9px] font-black rounded-lg uppercase tracking-widest border border-blue-500/15 group-hover:border-blue-500/30 transition-all duration-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      {project.link ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-black text-[10px] uppercase tracking-[0.2em] group/btn transition-colors"
                        >
                          Inspect Core{" "}
                          <ChevronRight
                            size={14}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-blue-400/50 font-black text-[10px] uppercase tracking-[0.2em]">
                          Inspect Core <ChevronRight size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom hover glow */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center text-center gap-10 py-24 bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] border border-white/8">
            <div className="relative">
              <div className="p-12 bg-blue-500/8 rounded-[2.5rem] border border-white/5">
                <Braces
                  size={80}
                  strokeWidth={1}
                  className="text-blue-500/30"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full animate-ping" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-white tracking-tight">
                DEPLOYMENT <span className="text-blue-400">IN PROGRESS</span>
              </h2>
              <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
                Systems are being initialized. New technical frameworks will be
                integrated shortly.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" />
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce delay-150" />
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        )}

        {/* ─── Footer Accent ─── */}
        <div className="flex flex-col items-center gap-4 py-20 mt-20 border-t border-white/5">
          <div className="w-px h-16 bg-gradient-to-b from-blue-500/40 to-transparent" />
          <div className="flex items-center gap-3">
            <GitBranch size={12} className="text-slate-600" />
            <p className="text-slate-600 font-black tracking-[0.4em] text-[10px]">
              SYSTEM_DEV • ALL MODULES LOADED
            </p>
            <Package size={12} className="text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
