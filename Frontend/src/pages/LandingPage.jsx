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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
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
      name: 'HDFC ERGO', icon: <Building2 size={18} />,
      problems: ['Manual verification dependency', 'Limited transparency in decisions', 'Expensive policies, hidden terms', 'Customer complaint backlog']
    },
    {
      name: 'Bajaj Allianz', icon: <Car size={18} />,
      problems: ['30–60 day settlement delays', 'Customer dissatisfaction trends', 'Rule-based fraud detection only', 'No explainability layer']
    },
    {
      name: 'Go Digit', icon: <Layers size={18} />,
      problems: ['Claim processing bottlenecks', 'Manual inspection dependency', 'Poor real-time communication', 'High escalaion rates']
    },
    {
      name: 'Tata AIG', icon: <TrendingUp size={18} />,
      problems: ['Complicated claim process', 'No live claim status updates', 'Manual operational bottlenecks', 'Slow investigator pipelines']
    },
    {
      name: 'Star Health', icon: <Stethoscope size={18} />,
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

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      <Navbar />

      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <AnimatedGridPattern
          width={60}
          height={60}
          numSquares={40}
          maxOpacity={0.05}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 skew-y-12"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 z-10">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-500 font-black text-xs uppercase tracking-widest">Insurance Tech 2.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-8"
            >
              DETECT FRAUD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-slate-900">
                IN MILLISECONDS.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              ClaimShield uses state-of-the-art AI to protect the Indian insurance ecosystem from sophisticated fraudulent claims.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <button
                onClick={() => navigate('/dashboard')}
                style={{ backgroundColor: '#000000', color: '#ffffff', padding: '1.25rem 2.5rem', borderRadius: '20px' }}
                className="group inline-flex items-center gap-3 font-black text-lg transition-all duration-300 shadow-2xl shadow-blue-500/10 hover:-translate-y-1"
              >
                Run Live Demo <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            <a href="#problem" className="inline-flex items-center gap-2 text-slate-950 font-black hover:text-slate-700 transition-colors text-lg tracking-tight px-6 py-4">
              See Industry Problems <ChevronRight size={20} />
            </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50/50 backdrop-blur-sm border-y border-slate-200 overflow-hidden relative z-10">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {competitors.map((cp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
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
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      </section>

      <section id="problem" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            badge="Industry-Wide Failures"
            title="Six Critical Failures Across the Board"
            subtitle="These aren't isolated issues — they define India's ₹8.5 billion insurance fraud industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryProblems.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[32px] bg-white/80 backdrop-blur-md border border-slate-100 shadow-lg relative overflow-hidden group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/dashboard')}
              style={{ backgroundColor: '#000000', color: '#ffffff', padding: '1.25rem 2.5rem', borderRadius: '20px' }}
              className="group inline-flex items-center gap-3 font-black text-lg transition-all duration-300 shadow-2xl shadow-blue-500/10 hover:-translate-y-1"
            >
              Try ClaimShield Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {solutions.map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] border border-slate-200 shadow-xl relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-3 tracking-tight">{item.title}</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-blue-600 tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  {item.tag}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/dashboard')}
              style={{ backgroundColor: '#000000', color: '#ffffff', padding: '1.25rem 2.5rem', borderRadius: '20px' }}
              className="group inline-flex items-center gap-3 font-black text-lg transition-all duration-300 shadow-2xl shadow-black/5 hover:-translate-y-1"
            >
              Get Started for Free <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>



      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-24 relative z-10 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <SectionHeader 
            badge="Simple 5-Step Process"
            title="From Claim to Decision in Minutes"
            subtitle="ClaimShield's automated pipeline eliminates bottlenecks at every stage."
          />

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { step: "01", title: "Upload Claim Data", desc: "Structured CSV or JSON input via secure API or dashboard upload." },
              { step: "02", title: "AI Risk Scoring", desc: "Ensemble of XGBoost + Random Forest scores fraud probability in ms." },
              { step: "03", title: "SHAP Explainability", desc: "Feature importance is computed and translated to plain language." },
              { step: "04", title: "Investigator Review", desc: "Human-in-the-loop: investigator approves, escalates, or rejects." },
              { step: "05", title: "Audit Report Export", desc: "One-click PDF with full SHAP explanation for IRDAI compliance." }
            ].map((s, idx) => (
              <motion.div 
                key={s.step}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
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
          </div>
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
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button
              onClick={() => navigate('/dashboard')}
              style={{ backgroundColor: '#000000', color: '#ffffff', padding: '1.25rem 2.5rem', borderRadius: '20px' }}
              className="group inline-flex items-center gap-3 font-black text-lg transition-all duration-300 shadow-2xl shadow-black/5 hover:-translate-y-1"
            >
              Launch Live Demo <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/technology')}
              style={{ border: '2px solid #cbd5e1', color: '#000000', padding: '1.25rem 2.5rem', borderRadius: '20px' }}
              className="inline-flex items-center gap-3 font-black text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              Read the Tech Stack
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
        brandIcon={<Shield className="w-10 h-10 text-slate-950" />}
      />
    </div>
  );
};
