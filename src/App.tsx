import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/HistoryPage';
import TeamPage from './pages/TeamPage';
import IBBPage from './pages/IBBPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url('/Elementos casa 7.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
            minHeight: '100vh',
            minWidth: '100vw',
            width: '100%',
            height: '100%'
          }}
        />
        <div className="relative z-10">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/historia" element={<HistoryPage />} />
              <Route path="/quem-somos" element={<TeamPage />} />
              <Route path="/ibb" element={<IBBPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;