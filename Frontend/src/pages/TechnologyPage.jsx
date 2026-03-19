import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, ShieldCheck, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { cn } from '../lib/utils';

const TechFeature = ({ title, desc }) => (
  <div className="flex gap-3 group">
    <div className="mt-0.5">
      <ShieldCheck className="text-blue-500" size={16} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-0.5 text-sm">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const TechnologyPage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <Cpu size={22} />,
      title: 'Ensemble Classifiers',
      features: [
        { title: 'XGBoost Architecture', desc: 'Optimized gradient boosting for high-precision fraud detection on tabular insurance claim data.' },
        { title: 'Random Forest Ensemble', desc: 'Robust decision trees that mitigate overfitting and handle missing values in Indian claim structures.' },
        { title: 'SHAP Explainability', desc: 'Game-theory based feature importance that generates plain-language reasons for every flagged claim.' },
      ]
    },
    {
      icon: <Network size={22} />,
      title: 'Scalable Infrastructure',
      features: [
        { title: 'Real-time Ingestion', desc: 'Secure API endpoints capable of handling 10,000+ claim requests per minute with sub-100ms latency.' },
        { title: 'Automated Preprocessing', desc: 'Stateless normalization and categorical encoding pipelines that deliver model-ready data instantly.' },
        { title: 'Audit-Safe Logging', desc: 'Every classification is logged with a permanent SHAP record to support IRDAI regulatory compliance.' },
      ]
    },
    {
      icon: <Database size={22} />,
      title: 'Data Pipeline',
      features: [
        { title: 'Schema Validation', desc: 'Automatic schema checks ensure all incoming claims are properly structured before scoring.' },
        { title: 'Feature Engineering', desc: 'Domain-specific features (policy tenure, claim-to-premium ratio) are auto-computed on ingestion.' },
        { title: 'Versioned Models', desc: 'Model weights are versioned with rollback support for continuous retraining without downtime.' },
      ]
    },
    {
      icon: <BarChart3 size={22} />,
      title: 'Analytics Layer',
      features: [
        { title: 'Risk Distribution Dashboard', desc: 'Live histograms and scatter plots show portfolio-level risk trends across all active claims.' },
        { title: 'Investigator Workload Balance', desc: 'AI assigns cases based on investigator availability and specialization for optimal throughput.' },
        { title: 'IRDAI Report Generation', desc: 'Automated, compliant PDF reports generated from every scored claim with full SHAP appendix.' },
      ]
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-40 overflow-hidden bg-white border-b border-slate-100">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.07}
          duration={3}
          className={cn(
            '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-20%] h-[140%]'
          )}
        />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-6">
              <Zap size={12} /> Core Engineering Stack
            </span>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              The Engineering Behind ClaimShield
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-8">
              State-of-the-art ensemble learning for fraud detection, with SHAP-powered explainability at every layer. Zero black-box decisions.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-sm shadow-blue-200"
            >
              See It Live <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {card.icon}
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-6">{card.title}</h2>
                <div className="space-y-5">
                  {card.features.map(f => <TechFeature key={f.title} {...f} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
