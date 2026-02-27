import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import Admissions from './pages/Admissions';
import ApplyNow from './pages/ApplyNow';
import LabPage from './pages/LabPage';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/labs/:labId" element={<LabPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
