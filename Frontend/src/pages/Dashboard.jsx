import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Download, MoreHorizontal, AlertCircle, 
  CheckCircle2, Clock, Shield, LayoutDashboard, FileStack, 
  Users, Settings, LogOut, X, BarChart2, ChevronRight, 
  Plus, HelpCircle, Wallet, UserCheck, MessageSquare, ClipboardCheck, Activity
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const MOCK_CLAIMS = [
  { id: 'C-38291', user: 'Alan Smith', type: 'Auto Accident', date: 'Oct 24', status: 'Under Review', score: 92, risk: 'High', reasons: ['Multiple recent claims (3)', 'High damage amount vs. history', 'Geo-location mismatch'] },
  { id: 'C-38290', user: 'Sarah Jones', type: 'Home Damage', date: 'Oct 24', status: 'Pending', score: 58, risk: 'Medium', reasons: ['Inconsistent loss date', 'Missing supporting documents'] },
  { id: 'C-38289', user: 'David Chen', type: 'Auto Theft', date: 'Oct 23', status: 'Approved', score: 12, risk: 'Low', reasons: ['No anomalies detected'] },
  { id: 'C-38288', user: 'Emma Wilson', type: 'Medical', date: 'Oct 23', status: 'Under Review', score: 85, risk: 'High', reasons: ['Duplicate provider billing', 'Unusually high medication costs'] },
  { id: 'C-38287', user: 'Michael Brown', type: 'Home Damage', date: 'Oct 22', status: 'Pending', score: 42, risk: 'Medium', reasons: ['Weather data mismatch'] },
];

export const Dashboard = () => {
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [activeTab, setActiveTab] = useState('Shipping & returns');
  const [activeSidebar, setActiveSidebar] = useState('Products');

  const tabs = [
    'Basic information', 'Vital information', 'Variations and price', 
    'Images', 'Descriptions', 'Shipping & returns'
  ];

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview' },
    { icon: <FileStack size={20} />, label: 'Claims Queue' },
    { icon: <ClipboardCheck size={20} />, label: 'Investigations' },
    { icon: <UserCheck size={20} />, label: 'Policyholders' },
    { icon: <Activity size={20} />, label: 'Risk Analytics' },
    { icon: <BarChart2 size={20} />, label: 'Audit Logs' },
    { icon: <HelpCircle size={20} />, label: 'Help Center' },
    { icon: <Wallet size={20} />, label: 'Payouts' },
    { icon: <Users size={20} />, label: 'Team access' },
    { icon: <Settings size={20} />, label: 'Account Settings' },
  ];

  const stats = [
    { label: 'Total Claims', value: '1,284', change: '+12%', icon: <FileStack className="text-blue-500" /> },
    { label: 'High Risk Flags', value: '42', change: '-4%', icon: <AlertCircle className="text-red-500" /> },
    { label: 'Fraud Prevented', value: '₹4.2 Cr', change: '+22%', icon: <Shield className="text-emerald-500" /> },
    { label: 'Avg. Settlement', value: '4.2 Days', change: '-2 Days', icon: <Clock className="text-amber-500" /> },
  ];

  const getRiskColor = (risk) => {
    if (risk === 'High') return 'text-red-500 bg-red-50';
    if (risk === 'Medium') return 'text-amber-500 bg-amber-50';
    return 'text-emerald-500 bg-emerald-50';
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-slate-200 hidden md:flex flex-col p-6 fixed h-full left-0 top-0">
        <div className="flex items-center gap-3 mb-10 mt-4 px-2">
          <Shield className="text-blue-600" size={28} />
          <span className="text-2xl font-900 tracking-tight">ClaimShield</span>
        </div>
        
        <div className="space-y-1 flex-1 overflow-y-auto pr-2 scrollbar-hide">
          {sidebarItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => setActiveSidebar(item.label)}
              className={`sidebar-item ${activeSidebar === item.label ? 'active' : ''}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-slate-200">
           <button className="sidebar-item">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-2xl font-800 text-slate-900 mb-2">Claim Investigation</h1>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="hover:text-blue-600 cursor-pointer">Claims</span>
                <ChevronRight size={14} />
                <span className="font-600 text-slate-900">Analysis & Triage</span>
              </div>
            </div>
            <button className="btn-black flex items-center gap-2">
              <Plus size={18} /> New Investigation
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="dashboard-card p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                  <span className={`text-xs font-700 ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-900 text-slate-900">{stat.value}</div>
                  <div className="text-xs font-600 text-slate-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-light mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs.map((tab) => (
              <div 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-link ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="dashboard-card mb-8">
            <h2 className="text-xl font-800 mb-8">Shipping</h2>
            
            <div className="space-y-8">
              {/* Shipping Method */}
              <div>
                <label className="form-label">Shipping method</label>
                <div className="relative">
                  <select className="form-input appearance-none bg-white pr-10">
                    <option>Standard shipping: small to medium items</option>
                    <option>Express shipping: priority handling</option>
                    <option>International: cross-border logistics</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Weight & Dimensions */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="form-label">Package weight (kg)</label>
                  <input type="text" className="form-input" placeholder="0.5" />
                </div>
                <div>
                  <label className="form-label">Package dimensions (cm)</label>
                  <div className="grid grid-cols-3 gap-3">
                    <input type="text" className="form-input" placeholder="Length" />
                    <input type="text" className="form-input" placeholder="Width" />
                    <input type="text" className="form-input" placeholder="Height" />
                  </div>
                </div>
              </div>

              {/* Free Shipping Check */}
              <div className="p-4 border border-slate-200 rounded-lg flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm font-600 text-slate-900">Offer free shipping</span>
              </div>

              {/* Return Policy */}
              <div>
                <h3 className="text-lg font-800 mb-4 mt-12">Return policy</h3>
                <label className="form-label">Return</label>
                <div className="relative mb-4">
                  <select className="form-input appearance-none bg-white pr-10">
                    <option>Free and easy returns</option>
                    <option>Standard 30-day window</option>
                    <option>No returns accepted</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  You have 15 days from the date your order is shipped to request a prepaid return shipping label online. Visit our <span className="text-blue-600 underline cursor-pointer">FAQ</span> for our full return policy.
                </p>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center pt-8 border-t border-light mt-12">
                <button className="btn-gray">Save Draft</button>
                <div className="flex gap-4">
                  <button className="btn-gray">Preview</button>
                  <button className="btn-black">Submit</button>
                </div>
              </div>
            </div>
          </div>

          {/* Triage Queue Preview (optional, keeping it for functionality) */}
          <div className="dashboard-card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-800">Recent Claims Queue</h2>
              <Button onClick={() => setSelectedClaim(MOCK_CLAIMS[0])} variant="outline" className="text-xs">View Full Queue</Button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-light text-xs font-700 text-slate-400 uppercase tracking-widest">
                      <th className="pb-4">Claim ID</th>
                      <th className="pb-4">Policyholder</th>
                      <th className="pb-4">Risk Score</th>
                      <th className="pb-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-light">
                    {MOCK_CLAIMS.slice(0, 3).map(claim => (
                      <tr key={claim.id} className="text-sm">
                        <td className="py-4 font-700">{claim.id}</td>
                        <td className="py-4 font-500 text-slate-600">{claim.user}</td>
                        <td className="py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-800 uppercase ${getRiskColor(claim.risk)}`}>
                            {claim.score} {claim.risk}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="text-blue-600 font-600 hover:underline">Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </div>
        </div>
      </main>

      {/* Side Panel (Explainability) */}
      <AnimatePresence>
        {selectedClaim && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[1001]"
              onClick={() => setSelectedClaim(null)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[450px] bg-white shadow-2xl z-[1002] border-l border-slate-200 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <Shield className="text-blue-600" />
                    <h2 className="text-xl font-800">Claim Details</h2>
                  </div>
                  <button onClick={() => setSelectedClaim(null)} className="p-2 hover:bg-slate-100 rounded-full">
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>
                {/* ... Detail Content ... */}
                <div className="space-y-6">
                   <div>
                     <p className="text-xs font-800 text-slate-400 uppercase tracking-widest mb-1">Policyholder</p>
                     <p className="text-2xl font-800">{selectedClaim.user}</p>
                   </div>
                   <div className="p-4 bg-slate-50 rounded-xl">
                      <p className="text-sm font-700 text-slate-900 mb-2">Risk Explainability</p>
                      <ul className="space-y-2">
                        {selectedClaim.reasons.map((r, i) => (
                          <li key={i} className="text-xs text-slate-600 flex gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChevronDownIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
