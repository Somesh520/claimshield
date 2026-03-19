import React, { useState } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MotionButton from '../ui/motion-button';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'The Problem', href: '/#problem' },
    { label: 'Our Solution', href: '/#solution' },
    { label: 'Technology', href: '/technology', isRoute: true },
  ];

  const isActive = (href) => {
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-sm">
              <Shield size={16} className="text-white" />
            </div>
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Claim<span className="text-slate-950">Shield</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-slate-950 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-all duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <MotionButton 
              label="Login" 
              onClick={() => navigate('/login')}
              classes="w-32 h-9" 
            />
            <MotionButton 
              label="Live Demo" 
              onClick={() => navigate('/dashboard')}
              classes="w-36 h-9" 
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-1 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 p-3 md:hidden"
            >
              <div className="space-y-0.5">
                {links.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-all"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-all"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
              <div className="border-t border-slate-100 mt-2 pt-4 space-y-4">
                <MotionButton 
                  label="Login" 
                  onClick={() => { navigate('/login'); setMobileOpen(false); }}
                  classes="w-full h-11" 
                />
                <MotionButton 
                  label="Live Demo" 
                  onClick={() => { navigate('/dashboard'); setMobileOpen(false); }}
                  classes="w-full h-11" 
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
