import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left: Branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-slate-900 p-12">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Shield size={18} className="text-white" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white uppercase">ClaimShield</span>
        </div>
        <div>
          <blockquote className="text-2xl font-bold text-white leading-snug mb-4">
            "ClaimShield caught a ₹14 lakh fraudulent claim that would have slipped through our old rule engine."
          </blockquote>
          <p className="text-slate-400 text-sm font-medium">— Senior Claims Investigator, Leading Indian Insurer</p>
        </div>
        <div className="flex gap-6 text-xs text-slate-500 font-medium">
          <span>IRDAI Compliant</span>
          <span>SOC 2 Architecture</span>
          <span>98.7% Accuracy</span>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <span className="font-extrabold tracking-tight text-slate-900 uppercase">ClaimShield</span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome back</h1>
          <p className="text-slate-500 mb-8">Secure investigator portal — authorized access only.</p>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600" />
                Keep me logged in
              </label>
              <a href="#" className="font-semibold text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-sm shadow-blue-200"
            >
              Login to Console <ArrowRight size={16} />
            </button>
          </form>

          <p className="mt-8 text-xs text-slate-400 text-center leading-relaxed">
            Designated for authorized investigators only.<br />IP logging and session recording are active.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
