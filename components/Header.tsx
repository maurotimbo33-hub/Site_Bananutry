
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'A Bananutry', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Atacado & Distribuidores', path: '/atacado' },
    { name: 'Qualidade & Nutrição', path: '/qualidade' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-4 border-[#F7E500]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="bg-[#F7E500] px-4 py-2 rounded-xl font-black text-[#4B3621] text-2xl tracking-tighter group-hover:scale-105 transition-transform">
            BANANUTRY
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-black uppercase tracking-tight transition-colors hover:text-[#4B3621] ${
                isActive(link.path) ? 'text-[#4B3621] border-b-4 border-[#F7E500]' : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="flex items-center bg-[#4B3621] text-white px-6 py-3 rounded-xl text-sm font-black uppercase hover:bg-black transition-all shadow-lg"
          >
            <FileText size={16} className="mr-2" />
            Orçamento
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#4B3621]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-xl font-black uppercase ${
                isActive(link.path) ? 'text-[#4B3621]' : 'text-gray-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center bg-[#4B3621] text-white px-8 py-4 rounded-2xl font-black uppercase text-center"
          >
            Solicitar Orçamento
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
