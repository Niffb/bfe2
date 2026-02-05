import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import FieldOps from './pages/FieldOps'; 
import Evidence from './pages/Evidence'; 
import Philosophy from './pages/Philosophy'; 
import Contact from './pages/Contact';

// New Pages
import Governance from './pages/Governance';
import Management from './pages/Management';
import Advisory from './pages/Advisory';
import Reconciliation from './pages/Reconciliation';
import TreatyRelationships from './pages/TreatyRelationships';
import OurStaff from './pages/OurStaff';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-green selection:text-white flex flex-col font-sans">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/management" element={<Management />} />
                <Route path="/advisory" element={<Advisory />} />
                <Route path="/reconciliation" element={<Reconciliation />} />
                <Route path="/treaty-relationships" element={<TreatyRelationships />} />
                <Route path="/staff" element={<OurStaff />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Legacy routes kept for safety */}
                <Route path="/field-ops" element={<FieldOps />} />
                <Route path="/evidence" element={<Evidence />} />
                <Route path="/philosophy" element={<Philosophy />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;