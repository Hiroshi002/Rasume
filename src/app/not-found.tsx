"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { resumeConfig } from "@/config/resumeConfig";
import { 
  Home, 
  RefreshCw, 
  AlertTriangle, 
  Cpu, 
  Terminal, 
  Zap, 
  Rocket,
  ShieldAlert,
  Ghost,
  Compass,
  Layout,
  Database,
  Globe
} from "lucide-react";

export default function NotFound() {
  const { title, description, buttonText, buttonLink, terminalText: fullTerminalText } = resumeConfig.notFoundPage;
  const [traceId, setTraceId] = useState("");
  const [terminalText, setTerminalText] = useState("");

  useEffect(() => {
    setTraceId(Math.random().toString(36).substring(2, 15).toUpperCase());
    
    (window as any).is404 = true;
    window.dispatchEvent(new Event('music:stop'));

    // Typing effect for terminal
    let i = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(fullTerminalText.slice(0, i));
      i++;
      if (i > fullTerminalText.length) clearInterval(typingInterval);
    }, 50);

    return () => {
      (window as any).is404 = false;
      window.dispatchEvent(new Event('music:play'));
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* --- Premium Dynamic Background (Same as Home but darker) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-premium opacity-20"></div>
        {/* Orbiting Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-rose-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        
        {/* Hero Section of 404 */}
        <div className="relative mb-12 animate-fade-in">
          {/* Orbiting Icons (Premium feel from home) */}
          <div className="absolute inset-[-40px] md:inset-[-80px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-blue-400 shadow-xl shadow-blue-500/20">
              <Layout size={18} />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-purple-400 shadow-xl shadow-purple-500/20">
              <Cpu size={18} />
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
              <Database size={18} />
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-rose-400 shadow-xl shadow-rose-500/20">
              <Globe size={18} />
            </div>
          </div>

          {/* Central 404 Hexagon/Shield */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-600/40 to-rose-500/40 rounded-[4rem] rotate-12 blur-3xl group-hover:rotate-45 transition-transform duration-1000 opacity-50"></div>
            <div className="relative bg-slate-950/50 backdrop-blur-3xl border-2 border-white/10 rounded-[4rem] p-12 md:p-20 shadow-[0_0_100px_rgba(59,130,246,0.15)] overflow-hidden">
              {/* Inner Scanning Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent w-full h-1/2 animate-scan pointer-events-none"></div>
              
              <h1 className="text-9xl md:text-[14rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 drop-shadow-2xl">
                404
              </h1>
              
              {/* Floating Badge (Similar to Home's Hire Me) */}
              <div className="absolute -top-4 -right-4 bg-rose-500 text-white px-6 py-2 rounded-2xl font-black text-xs shadow-xl z-20 flex items-center gap-2 animate-bounce">
                <ShieldAlert size={14} />
                LOST IN SPACE
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center mb-16 animate-fade-in-up">
          {/* Terminal (Left side) */}
          <div className="glass-card bg-slate-950/80 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:border-blue-500/30 transition-all duration-500">
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-white/40 tracking-[0.3em] font-black uppercase">
                <Terminal size={12} />
                Recovery Console
              </div>
            </div>
            <div className="p-8 h-64 font-mono text-sm leading-relaxed overflow-hidden">
              <div className="text-blue-400 mb-3 flex items-center gap-2">
                <span className="opacity-50">system@krma:~$</span> 
                <span className="text-white">reconstruct --target=current_path</span>
              </div>
              <pre className="text-emerald-400/90 whitespace-pre-wrap font-medium">
                {terminalText}
                <span className="inline-block w-2.5 h-5 bg-blue-500 ml-1 animate-pulse"></span>
              </pre>
            </div>
          </div>

          {/* Text & Actions (Right side) */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                <Ghost size={16} className="text-blue-400" />
                <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Resource Not Found</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                {title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href={buttonLink}
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black rounded-3xl hover:scale-105 active:scale-95 transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
              >
                <Home size={20} className="group-hover:rotate-12 transition-transform" />
                {buttonText}
              </Link>
              <button 
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 group"
              >
                <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                RE-SYNC
              </button>
            </div>
          </div>
        </div>

        {/* Footer Technical Grid (Similar to Home Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pt-12 border-t border-white/5 animate-fade-in-up">
          {[
            { icon: <Cpu size={16} />, label: "NODE ID", value: typeof window !== 'undefined' ? window.location.hostname : 'SERVER_01', color: "blue" },
            { icon: <Zap size={16} />, label: "TRACE HASH", value: traceId, color: "amber" },
            { icon: <ShieldAlert size={16} />, label: "SECURITY", value: "ENCRYPTED", color: "rose" },
            { icon: <Compass size={16} />, label: "POSITION", value: "OUTER_RIM", color: "emerald" }
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center gap-2 group hover:bg-white/10 transition-all">
              <div className={`text-${item.color}-400 opacity-50 group-hover:opacity-100 transition-opacity`}>{item.icon}</div>
              <div className="text-[10px] font-black text-white/30 tracking-widest uppercase">{item.label}</div>
              <div className="text-xs font-bold text-white/80 truncate w-full text-center" suppressHydrationWarning>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-premium {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
