import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { DemoOne } from './pages/DemoOne';
import ShimmerDemo from './pages/ShimmerDemo';
import ErrorBoundary from './components/ErrorBoundary';

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard' && location.pathname !== '/demo';

  return (
    <div className="min-h-screen bg-slate-50">
      {showNavbar && <Navbar />}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/demo" element={<DemoOne />} />
          <Route path="/shimmer" element={<ShimmerDemo />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
