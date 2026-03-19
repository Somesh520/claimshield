import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  CheckCircle, ShieldCheck, FileText, ChevronRight, Shield,
  Clock, XCircle, Eye, Zap, Users, TrendingUp, Building2,
  Stethoscope, Car, Layers, ArrowRight, Sparkles, Activity,
  Award, Target, Twitter, Linkedin, Github, Mail, AlertTriangle, Plus, Check
} from 'lucide-react';
import { Footer } from '../components/ui/modem-animated-footer';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { cn } from '../lib/utils';
import Navbar from '../components/layout/Navbar';

/* ─── ANIMATION VARIANTS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

/* ─── ANIMATED COUNTER ─── */
const AnimatedStat = ({ end, suffix = '', prefix = '', label, duration = 2.5 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const targetEnd = typeof end === 'number' ? end : 0;
  const CountUpComponent = typeof CountUp === 'function' ? CountUp : null;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black text-slate-950 mb-1">
        {prefix}
        {inView && CountUpComponent
          ? <CountUpComponent end={targetEnd} duration={duration} separator="," />
          : <span>{targetEnd}</span>}
        {suffix}
      </div>
      <div className="text-sm font-black text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

/* ─── SECTION HEADER ─── */
const SectionHeader = ({ badge, title, subtitle }) => (
  <motion.div
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-150px' }}
    variants={fadeUp}
    className="text-center mb-16 max-w-4xl mx-auto"
  >
    {badge && (
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold mb-4 bg-slate-900/5 text-slate-900 border border-slate-900/10 uppercase tracking-[0.2em] shadow-sm backdrop-blur-md">
        <Sparkles size={11} className="text-amber-500 fill-amber-500" /> {badge}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight drop-shadow-sm">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-bold max-w-2xl mx-auto opacity-95">{subtitle}</p>}
  </motion.div>
);

/* ─── MAIN PAGE ─── */
export const LandingPage = () => {
  const navigate = useNavigate();

  const competitors = [
    {
      name: 'Major Private Insurer', icon: <Building2 size={18} />,
      problems: ['Manual verification dependency', 'Limited transparency in decisions', 'Expensive policies, hidden terms', 'Customer complaint backlog']
    },
    {
      name: 'Legacy General Insurer', icon: <Car size={18} />,
      problems: ['30–60 day settlement delays', 'Customer dissatisfaction trends', 'Rule-based fraud detection only', 'No explainability layer']
    },
    {
      name: 'Digital-First Insurer', icon: <Layers size={18} />,
      problems: ['Claim processing bottlenecks', 'Manual inspection dependency', 'Poor real-time communication', 'High escalaion rates']
    },
    {
      name: 'Leading Multinational JV', icon: <TrendingUp size={18} />,
      problems: ['Complicated claim process', 'No live claim status updates', 'Manual operational bottlenecks', 'Slow investigator pipelines']
    },
    {
      name: 'Health Insurance Specialist', icon: <Stethoscope size={18} />,
      problems: ['Cashless claim rejections', 'Hospital coordination failures', 'Delayed reimbursement cycles', 'Opaque exclusion logic']
    }
  ];

  const industryProblems = [
    { icon: <Clock size={22} />, title: 'Claim Delays', desc: 'Average settlement takes 30–90 days across Indian insurers.' },
    { icon: <Users size={22} />, title: 'Poor Communication', desc: 'Policyholders are left in the dark with no real-time updates.' },
    { icon: <Eye size={22} />, title: 'Zero Clarity', desc: 'Customers never understand WHY their claims were rejected.' },
    { icon: <FileText size={22} />, title: 'Lengthy Documentation', desc: 'Redundant paperwork slows every stage of the process.' },
    { icon: <XCircle size={22} />, title: 'Unclear Rejections', desc: 'Black-box decisions erode trust and trigger IRDAI complaints.' },
    { icon: <AlertTriangle size={22} />, title: 'Slow Processing', desc: 'Manual verification costs ₹30,000 Cr+ annually in fraud losses.' }
  ];

  const solutions = [
    { icon: <Zap size={22} />, title: 'Instant Risk Scoring', desc: 'XGBoost + Random Forest ensemble classifiers analyze claims in milliseconds.', tag: 'Fixes Slow Processing' },
    { icon: <Eye size={22} />, title: 'Explainable AI Decisions', desc: 'SHAP-powered plain-language reasons for every flag — no more black-box rejections.', tag: 'Fixes Unclear Rejections' },
    { icon: <Activity size={22} />, title: 'Real-Time Claim Tracking', desc: 'Live dashboard shows every claim\'s status, risk band, and progress.', tag: 'Fixes Poor Communication' },
    { icon: <FileText size={22} />, title: 'One-Click Audit Reports', desc: 'Auto-generated PDF reports with SHAP explanations and IRDAI compliance data.', tag: 'Fixes Documentation Overhead' },
    { icon: <ShieldCheck size={22} />, title: 'Human-in-the-Loop AI', desc: 'Investigators review AI recommendations, not raw data. The AI surfaces signal; humans decide.', tag: 'Fixes Manual Dependency' },
    { icon: <Award size={22} />, title: 'Customer Trust Engine', desc: 'Transparent decisions, faster settlements, and proactive communication.', tag: 'Fixes Customer Dissatisfaction' }
  ];

  const comparisonFeatures = [
    { 
      metric: "Detection Speed", 
      legacy: "30-90 Days (Manual)", 
      claimshield: "Milliseconds (AI)",
      legacyStatus: "fail", 
      csStatus: "pass" 
    },
    { 
      metric: "Decision Accuracy", 
      legacy: "Rule-based / Subjective", 
      claimshield: "98.7% Precision (ML)",
      legacyStatus: "fail", 
      csStatus: "pass" 
    },
    { 
      metric: "Transparency", 
      legacy: "Black-Box / Opaque", 
      claimshield: "SHAP Explainable AI",
      legacyStatus: "fail", 
      csStatus: "pass" 
    },
    { 
      metric: "Operational Effort", 
      legacy: "High Manual Overhead", 
      claimshield: "Human-in-the-Loop AI",
      legacyStatus: "fail", 
      csStatus: "pass" 
    },
    { 
      metric: "Compliance (IRDAI)", 
      legacy: "Manual Audit Trails", 
      claimshield: "Auto-Generated Reports",
      legacyStatus: "fail", 
      csStatus: "pass" 
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50/30 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      <Navbar />

      {/* Ambient Blue Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[-20%] w-[30%] h-[30%] bg-blue-300/10 rounded-full blur-[100px]" />
      </div>

      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <AnimatedGridPattern
          width={60}
          height={60}
          numSquares={40}
          maxOpacity={0.07}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 skew-y-12"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10 overflow-hidden">
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-500 font-black text-xs uppercase tracking-widest">Insurance Tech 2.0</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8"
              >
                DETECT FRAUD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-900">
                  IN MILLISECONDS.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-xl leading-relaxed"
              >
                ClaimShield uses state-of-the-art AI to protect the Indian insurance ecosystem from sophisticated fraudulent claims.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="relative z-20 flex flex-col sm:flex-row items-center gap-6 mb-20"
              >
                <button
                  onClick={() => navigate('/dashboard')}
                  className="group relative flex items-center justify-center gap-4 bg-blue-600 text-white min-w-[280px] px-10 py-6 rounded-2xl font-black text-xl transition-all duration-500 shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:-translate-y-2 hover:bg-blue-700 active:scale-95"
                >
                  <span className="shrink-0 leading-none font-bold">Launch Live Demo</span>
                  <ArrowRight size={24} className="shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <a 
                  href="#problem" 
                  className="group flex items-center justify-center gap-3 text-blue-900 font-extrabold hover:text-blue-600 transition-all text-xl tracking-tight min-w-[280px] px-10 py-6 rounded-2xl border-2 border-blue-100/50 hover:border-blue-200 hover:bg-white shadow-sm"
                >
                  <span className="shrink-0 leading-none">See Industry Pain Points</span>
                  <ChevronRight size={22} className="shrink-0 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Premium Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full scale-110 animate-pulse" />
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <img 
                  src="/images/hero_dashboard.png" 
                  alt="ClaimShield Dashboard Mockup" 
                  className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] rounded-2xl transform hover:scale-[1.02] transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white/50 backdrop-blur-md border-y border-slate-100 overflow-hidden relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-shrink-0">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Trusted By America's & India's Leading Providers</p>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Industry Partnerships</h3>
            </div>
            <div className="flex-1 max-w-3xl overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/images/partner_logos.png" 
                alt="ClaimShield Industry Partners" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-blue-500/5 backdrop-blur-sm border-y border-blue-100 overflow-hidden relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Annual Fraud Losses", value: 30000, prefix: "₹", suffix: " Cr+" },
              { label: "Detection Accuracy", value: 98.7, suffix: "%" },
              { label: "Faster Than Manual", value: 14, suffix: "x" },
              { label: "Explainable Decisions", value: 100, suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <AnimatedStat end={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India's Top Insurers Are Struggling */}
      <section className="py-32 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            badge="Industry-Wide Pain Points"
            title="Why India's Top Insurers Are Struggling"
            subtitle="Documented operational failures across leading insurance providers — before ClaimShield."
          />
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-150px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {competitors.map((cp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-10 rounded-[40px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-blue-500/20 transition-all duration-500 group relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-white shadow-inner flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all duration-500">
                    {cp.icon}
                  </div>
                  <span className="font-extrabold text-lg text-slate-900 uppercase tracking-tight leading-tight">{cp.name}</span>
                </div>

                <ul className="space-y-6 relative z-10">
                  {cp.problems.map((p, pidx) => (
                    <li key={pidx} className="flex gap-4 items-start group/item">
                      <div className="mt-1 shrink-0 p-1 rounded-lg bg-red-50 group-hover/item:bg-red-500 transition-colors duration-300">
                        <AlertTriangle size={12} className="text-red-500 group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-slate-600 leading-snug group-hover/item:text-slate-950 transition-colors">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-100/50">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-red-500 to-red-400"
                    />
                  </div>
                  <div className="mt-2 text-[10px] font-black text-red-500/60 uppercase tracking-widest">Efficiency Gap Identified</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      </section>

      {/* ─── FEATURE COMPARISON SECTION ─── */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            badge="ClaimShield vs. The Status Quo"
            title="Why Leading Insurers Are Switching"
            subtitle="A side-by-side breakdown of why legacy systems can't keep up with modern fraud."
          />

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-150px' }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            {/* ─── ULTIMATE STABLE COMPARISON TABLE ─── */}
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 mb-32 relative z-10">
              <div className="flex flex-col gap-0 w-full overflow-visible">
                {/* Header: Fixed Proportional Grid */}
                <div className="hidden md:grid grid-cols-[1.5fr_1fr_1.2fr] gap-8 py-10 px-10 opacity-60 border-b border-slate-200">
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 pl-4 border-l-2 border-blue-500">Operational Metric</div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 text-center uppercase">Traditional</div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 text-center pr-4 font-bold uppercase">ClaimShield</div>
                </div>

                {/* Rows: Nuclear Stability Grid */}
                <div className="flex flex-col gap-6 mt-10">
                  {comparisonFeatures.map((f, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.4 }}
                      className="group relative grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] items-center gap-8 md:gap-8 px-8 md:px-10 py-10 rounded-[40px] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-700"
                    >
                      {/* Metric Column */}
                      <div className="flex flex-col justify-center pl-0 md:pl-4 text-center md:text-left">
                        <span className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition-colors duration-500">{f.metric}</span>
                      </div>
                      
                      {/* Divider for mobile stack */}
                      <div className="w-full h-px bg-slate-100 md:hidden opacity-50" />

                      {/* Legacy Column */}
                      <div className="flex items-center justify-between md:justify-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 md:hidden uppercase">Traditional</span>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-400 shrink-0">
                            <XCircle size={16} strokeWidth={2.5} />
                          </div>
                          <span className="text-sm font-bold text-slate-400 group-hover:text-slate-500 transition-colors uppercase tracking-tight">{f.legacy}</span>
                        </div>
                      </div>

                      {/* ClaimShield Column: INDESTRUCTIBLE MOTION PILL */}
                      <div className="relative">
                        <motion.div 
                          whileHover={{ backgroundColor: '#0f172a', borderColor: '#0f172a' }}
                          className="flex items-center justify-between md:justify-center gap-4 py-5 px-8 rounded-3xl bg-blue-50 border border-blue-100 group-hover:text-white transition-all duration-500 shadow-sm pr-8 min-w-0"
                        >
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 group-hover:text-blue-300 md:hidden italic font-black uppercase">Winner</span>
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                              <CheckCircle size={16} strokeWidth={3} />
                            </div>
                            <span className="text-sm md:text-base font-black tracking-tight uppercase whitespace-nowrap">{f.claimshield}</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
               <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-blue-600/60 font-bold mb-6 text-sm uppercase tracking-[0.2em]">Ready to upgrade your infrastructure?</p>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="group relative flex items-center justify-center gap-4 bg-blue-600 text-white min-w-[320px] px-16 py-8 rounded-2xl font-black text-2xl transition-all duration-500 shadow-[0_25px_60px_rgba(37,99,235,0.35)] hover:-translate-y-2 hover:bg-blue-700 active:scale-95 mx-auto"
                >
                  <span className="shrink-0 leading-none">Start Integration</span>
                  <ArrowRight size={28} className="shrink-0 group-hover:translate-x-3 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            badge="Industry-Wide Failures"
            title="Six Critical Failures Across the Board"
            subtitle="These aren't isolated issues — they define India's ₹8.5 billion insurance fraud industry."
          />

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-150px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {industryProblems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[32px] bg-white/80 backdrop-blur-md border border-blue-50 shadow-lg relative overflow-hidden group hover:border-blue-200 transition-all"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black text-blue-950 mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-blue-900/60 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative flex items-center justify-center gap-4 bg-blue-600 text-white min-w-[320px] px-16 py-8 rounded-2xl font-black text-2xl transition-all duration-500 shadow-[0_25px_60px_rgba(37,99,235,0.35)] hover:-translate-y-2 hover:bg-blue-700 active:scale-95 mx-auto"
            >
              <span className="shrink-0 leading-none">Try ClaimShield Now</span>
              <ArrowRight size={28} className="shrink-0 group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Investigation Section */}
      <section id="solution" className="py-24 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            badge="The ClaimShield Answer"
            title="Every Problem. One Platform."
            subtitle="ClaimShield is purpose-built to eliminate every challenge the Indian insurance industry faces."
          />

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-150px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {solutions.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] border border-blue-50 shadow-xl relative group hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-blue-950 mb-3 tracking-tight">{item.title}</h4>
                <p className="text-blue-900/60 font-medium text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-blue-600 tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  {item.tag}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative flex items-center justify-center gap-4 bg-blue-600 text-white min-w-[320px] px-16 py-8 rounded-2xl font-black text-2xl transition-all duration-500 shadow-[0_25px_60px_rgba(37,99,235,0.35)] hover:-translate-y-2 hover:bg-blue-700 active:scale-95 mx-auto"
            >
              <span className="shrink-0 leading-none">Get Started for Free</span>
              <ArrowRight size={28} className="shrink-0 group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>



      {/* Cybernetic Tech Showcase */}
      <section className="py-24 relative z-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Tech Visual */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full animate-pulse" />
              <img 
                src="/images/tech_viz.png" 
                alt="ClaimShield AI Technology" 
                className="w-full h-auto rounded-[40px] shadow-[0_40px_100px_rgba(37,99,235,0.2)] border border-white/5"
              />
            </motion.div>

            {/* Tech Text */}
            <div className="text-left order-1 lg:order-2">
              <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">The Cybernetic Backbone</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                BUILT BY <br />
                <span className="text-blue-500">ENGINEERS,</span> <br />
                DRIVEN BY AI.
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 max-w-lg">
                We've combined decades of insurance expertise with cutting-edge Graph Neural Networks and Explainable AI (SHAP) to create an indestructible fraud defense system.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Algorithm Ensembles</h4>
                  <p className="text-slate-500 text-xs">XGBoost, Random Forest, & GNNs working in harmony.</p>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Explainable Proof</h4>
                  <p className="text-slate-500 text-xs">Mathematical evidence for every single risk flag.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-24 relative z-10 overflow-hidden bg-white">
        <div className="container relative z-10 mx-auto px-4">
          <SectionHeader 
            badge="Simple 5-Step Process"
            title="From Claim to Decision in Minutes"
            subtitle="ClaimShield's automated pipeline eliminates bottlenecks at every stage."
          />

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-150px' }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { step: "01", title: "Upload Claim Data", desc: "Structured CSV or JSON input via secure API or dashboard upload." },
              { step: "02", title: "AI Risk Scoring", desc: "Ensemble of XGBoost + Random Forest scores fraud probability in ms." },
              { step: "03", title: "SHAP Explainability", desc: "Feature importance is computed and translated to plain language." },
              { step: "04", title: "Investigator Review", desc: "Human-in-the-loop: investigator approves, escalates, or rejects." },
              { step: "05", title: "Audit Report Export", desc: "One-click PDF with full SHAP explanation for IRDAI compliance." }
            ].map((s, idx) => (
              <motion.div 
                key={s.step}
                variants={fadeUp}
                className="group relative flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] bg-white/90 backdrop-blur-sm border border-slate-100 rounded-[32px] p-8 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black mb-10 shadow-lg">
                  {s.step}
                </div>
                <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight leading-tight">{s.title}</h3>
                <p className="text-sm font-bold text-slate-500 leading-relaxed">{s.desc}</p>
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-200">
                    <ChevronRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 skew-y-6" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none mb-12">
            SECURING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-slate-900">
              FUTURE.
            </span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative flex items-center justify-center gap-6 bg-blue-600 text-white min-w-[320px] px-16 py-8 rounded-2xl font-black text-2xl transition-all duration-500 shadow-[0_25px_60px_rgba(37,99,235,0.35)] hover:-translate-y-2 hover:bg-blue-700 active:scale-95"
            >
              <span className="shrink-0 leading-none">Launch Live Demo</span>
              <ArrowRight size={32} className="shrink-0 group-hover:translate-x-3 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => navigate('/technology')}
              className="group flex items-center justify-center gap-4 bg-white text-blue-900 min-w-[320px] px-16 py-8 rounded-2xl border-4 border-blue-100/50 font-black text-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-blue-50 hover:border-blue-200 active:scale-95"
            >
              <span className="shrink-0 leading-none">Read the Tech Stack</span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer 
        brandName="ClaimShield"
        brandDescription="AI-powered fraud detection for the Indian insurance ecosystem. AI Arena Hackathon 2026."
        socialLinks={[
          { icon: <Twitter />, href: "#", label: "Twitter" },
          { icon: <Linkedin />, href: "#", label: "LinkedIn" },
          { icon: <Github />, href: "#", label: "GitHub" },
          { icon: <Mail />, href: "#", label: "Email" },
        ]}
        navLinks={[
          { label: "The Problem", href: "#problem" },
          { label: "Our Solution", href: "#solution" },
          { label: "Technology", href: "/technology" },
          { label: "Live Demo", href: "/dashboard" },
        ]}
        creatorName="Team HackStorm"
        creatorUrl="https://github.com"
        brandIcon={<Shield className="w-11 h-11 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />}
      />
    </div>
  );
};
