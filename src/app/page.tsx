"use client";

import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Code2, 
  Monitor, 
  Gamepad2, 
  Music, 
  Code, 
  Book, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Zap,
  Layout,
  Cpu,
  Database,
  Globe,
  Layers,
  Rocket
} from "lucide-react";
import { resumeConfig } from "../config/resumeConfig";
import { themeConfig } from "../config/themeConfig";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { 
    profile, 
    contact, 
    frontendSkills, 
    backendSkills, 
    softwareSkills, 
    interests, 
    socials,
    experience,
    education,
    stats,
    currentFocus
  } = resumeConfig;
  const theme = themeConfig.pages.main;

  return (
    <main className={`min-h-screen pb-24 ${theme.background} relative overflow-hidden selection:bg-blue-500/30`}>
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-premium opacity-30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        {/* Neural Link Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
      <div className="fixed top-1/2 -right-24 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-float pointer-events-none"></div>
      <div className="fixed -bottom-24 left-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] animate-pulse-slow pointer-events-none"></div>

      {/* Hero Section */}
      <div 
        className="w-full pt-48 pb-24 px-4 text-center text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative w-64 h-64 mx-auto mb-12 group">
            {/* Orbiting Icons */}
            <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 shadow-xl">
                <Layout size={18} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-purple-400 shadow-xl">
                <Cpu size={18} />
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 shadow-xl">
                <Database size={18} />
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-rose-400 shadow-xl">
                <Globe size={18} />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[4rem] rotate-6 group-hover:rotate-12 transition-transform duration-700 blur-xl"></div>
            <div className="absolute inset-0 bg-white/10 rounded-[4rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700 backdrop-blur-md border border-white/20"></div>
            <div className="relative w-full h-full rounded-[4rem] overflow-hidden border-4 border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.2)] z-10 group-hover:scale-105 transition-transform duration-700">
              <Image 
                src={profile.image} 
                alt={profile.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 px-4 py-2 rounded-2xl font-black text-xs shadow-2xl z-20 flex items-center gap-2 animate-bounce">
              <Rocket size={14} className="text-blue-600" />
              HIRE ME
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 animate-glow">
            {profile.name}
          </h1>
          
          <div className="inline-flex items-center gap-3 px-6 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group hover:bg-white/20 transition-all duration-500">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
            <p className="text-xs md:text-base font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/90 group-hover:tracking-[0.6em] transition-all duration-500">{profile.role}</p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto px-4">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl group hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-700 hover:scale-110 hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/80 mb-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 border border-white/10 group-hover:border-blue-500/50 group-hover:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-700 tracking-tighter">{stat.value}</div>
                  <div className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em] group-hover:text-white/60 transition-colors">{stat.label}</div>
                  <div className="text-[10px] font-bold text-blue-400 mt-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">{stat.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Contact Section */}
            <section className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-xl">
              <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-blue-500"></span> Contact Info
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <Phone size={20} />, label: "Phone", value: contact.phone, href: contact.phoneHref, color: "blue" },
                  { icon: <Mail size={20} />, label: "Email", value: contact.email, href: contact.emailHref, color: "purple" },
                  { icon: <MapPin size={20} />, label: "Location", value: contact.location, color: "pink" }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    className={`flex items-center gap-6 group ${!item.href && 'pointer-events-none'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-${item.color}-500/30 group-hover:scale-110 group-hover:-rotate-6`}>
                      {item.icon}
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-slate-200 truncate group-hover:text-white transition-colors break-all" title={item.value}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Social Presence */}
            <section className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-xl">
              <h2 className="text-xs font-black text-purple-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-purple-500"></span> Connect
              </h2>
              <div className="flex flex-wrap gap-5">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:scale-110 hover:rotate-6 transition-all duration-500 shadow-xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </section>

            {/* Interests Navigation */}
            <section className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-xl">
              <h2 className="text-xs font-black text-pink-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-pink-500"></span> Explore
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <Link 
                    key={interest.name} 
                    href={interest.href}
                    className="group p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-transparent transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-lg"
                  >
                    <div className="p-3 bg-white/5 rounded-2xl text-slate-400 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {interest.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white/90">
                      {interest.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Current Focus Section */}
            <section className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-xl overflow-hidden relative group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125 group-hover:-rotate-12">
                <TrendingUp size={180} className="text-blue-500" />
              </div>
              <h2 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-blue-400"></span> Current Focus
              </h2>
              <div className="space-y-10">
                {currentFocus.map((focus, i) => (
                  <div key={i} className="group/item relative z-10">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all border border-white/5">
                        {focus.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-black text-white group-hover/item:text-blue-400 transition-colors">{focus.title}</h4>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight leading-none mt-1">{focus.description}</p>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden border border-white/5 p-[1px]">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 rounded-full group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-1000 relative"
                        style={{ width: `${focus.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer"></div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] font-black text-blue-500/70">{focus.progress}% COMPLETE</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* About Section */}
            <section className="glass-card p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-10 flex items-center gap-5">
                About Me <span className="h-1.5 w-12 md:w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg md:text-2xl font-medium group-hover:text-slate-200 transition-colors duration-500">
                {profile.bio}
              </p>
            </section>

            {/* Experience & Education Grid */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Experience Section */}
              <section className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-xl relative group">
                <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
                  <Briefcase className="text-blue-500" size={24} /> Experience
                </h2>
                <div className="space-y-10 relative">
                  <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent"></div>
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-12 md:pl-14 group/item">
                      <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-400 z-10 group-hover/item:scale-110 group-hover/item:border-blue-500/50 transition-all duration-500 shadow-xl">
                        {exp.icon}
                      </div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white group-hover/item:text-blue-400 transition-colors">{exp.role}</h3>
                      <p className="text-slate-500 font-bold mb-4">{exp.company}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-xl relative group">
                <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
                  <GraduationCap className="text-purple-500" size={24} /> Education
                </h2>
                <div className="space-y-10 relative">
                  <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent"></div>
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-12 md:pl-14 group/item">
                      <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-purple-400 z-10 group-hover/item:scale-110 group-hover/item:border-purple-500/50 transition-all duration-500 shadow-xl">
                        {edu.icon}
                      </div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white group-hover/item:text-purple-400 transition-colors">{edu.degree}</h3>
                      <p className="text-slate-500 font-bold mb-4">{edu.school}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Technical Mastery Section */}
            <section className="glass-card p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-10 md:mb-16 flex items-center gap-6">
                Technical Mastery <span className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
              </h2>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20"><Code2 size={24} /></div> Backend Infrastructure
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                    {backendSkills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between text-[11px] font-black text-slate-500 uppercase mb-4 tracking-widest group-hover:text-blue-400 transition-colors">
                          <span>{skill.name}</span>
                          <span className="text-blue-500">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-slate-900 rounded-full overflow-hidden p-[2px] border border-white/5">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black text-purple-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20"><Monitor size={24} /></div> Frontend Experience
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                    {frontendSkills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between text-[11px] font-black text-slate-500 uppercase mb-4 tracking-widest group-hover:text-purple-400 transition-colors">
                          <span>{skill.name}</span>
                          <span className="text-purple-500">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-slate-900 rounded-full overflow-hidden p-[2px] border border-white/5">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-pink-400 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Software Tools */}
            <section className="glass-card p-12 rounded-[3.5rem] border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-5">
                Creative Stack <span className="h-1.5 w-16 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full"></span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {softwareSkills.map((soft) => (
                  <div key={soft.name} className="group">
                    <div className="flex justify-between text-[11px] font-black text-slate-500 uppercase mb-4 tracking-widest group-hover:text-white transition-colors">
                      <span>{soft.name}</span>
                      <span className="text-slate-300">{soft.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-900 rounded-full overflow-hidden p-[2px] border border-white/5">
                      <div 
                        className="h-full bg-slate-600 rounded-full transition-all duration-1000 group-hover:bg-slate-400 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        style={{ width: `${soft.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote / Philosophy Section */}
            <section className="relative p-12 rounded-[3.5rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                <Sparkles size={120} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 italic">
                  "Turning complex logic into elegant, high-performance digital experiences."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-blue-500"></div>
                  <span className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">Coding Philosophy</span>
                  <div className="h-px w-8 bg-blue-500"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <footer className="mt-32 py-20 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent mx-auto mb-10 opacity-20"></div>
          <p className="text-slate-500 font-black tracking-[0.5em] text-xs mb-4">DESIGNED BY KRMA</p>
          <p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">&copy; 2026 NEXUS PROTOCOL. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
