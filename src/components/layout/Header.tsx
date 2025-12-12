import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 h-20 md:h-24 ${isScrolled ? 'bg-black bg-opacity-70 shadow-lg' : 'bg-black bg-opacity-50'}`}>
      <div className="container-custom flex justify-between items-center h-full">
        <NavLink to="/" className="flex items-center h-full ml-2 md:ml-4" onClick={closeMenu}>
          <div className="flex items-center h-full overflow-visible">
  <img 
    src="/Logo Casa 521.png" 
    alt="" 
    className={`h-10 max-h-full w-auto object-contain transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
    onLoad={() => setLogoLoaded(true)}
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      target.src = '/Logo Casa 521.png';
      setLogoLoaded(true);
    }}
  />
</div>

        </NavLink>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Início
          </NavLink>
          <NavLink to="/historia" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Nossa História
          </NavLink>
          <NavLink to="/quem-somos" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Quem Somos
          </NavLink>
          {/* <NavLink to="/ibb" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            RadahCollege
          </NavLink> */}
          <NavLink to="/contato" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Contato
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
  aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 md:top-24 left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0 overflow-hidden'}`}>
        <div className="container-custom py-6 flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            onClick={closeMenu}
          >
            Início
          </NavLink>
          <NavLink 
            to="/historia" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            onClick={closeMenu}
          >
            Nossa História
          </NavLink>
          <NavLink 
            to="/quem-somos" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            onClick={closeMenu}
          >
            Quem Somos
          </NavLink>
          {/* <NavLink 
            to="/ibb" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            onClick={closeMenu}
          >
            RadahCollege
          </NavLink> */}
          <NavLink 
            to="/contato" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            onClick={closeMenu}
          >
            Contato
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;