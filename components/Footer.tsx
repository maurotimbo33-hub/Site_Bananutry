
import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B3621] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-[#F7E500] text-3xl font-black mb-6 uppercase tracking-tighter italic">BANANUTRY</h3>
          <p className="text-white/60 text-sm leading-relaxed font-medium">
            Sabor que nutre. Fábrica especializada em doces de banana sem adição de açúcar. Mais de 20 anos de tradição em alimentação saudável em Brasília.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://www.instagram.com/bananutry_zero_/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#F7E500] hover:text-[#4B3621] transition-all"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/Bananutry" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#F7E500] hover:text-[#4B3621] transition-all"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[#F7E500] font-black mb-8 uppercase text-xs tracking-[0.2em]">Navegação</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link to="/" className="hover:translate-x-2 inline-block transition-transform">Início</Link></li>
            <li><Link to="/sobre" className="hover:translate-x-2 inline-block transition-transform">História</Link></li>
            <li><Link to="/produtos" className="hover:translate-x-2 inline-block transition-transform">Catálogo</Link></li>
            <li><Link to="/contato" className="hover:translate-x-2 inline-block transition-transform">Contato</Link></li>
          </ul>
        </div>

        {/* Wholesale */}
        <div>
          <h4 className="text-[#F7E500] font-black mb-8 uppercase text-xs tracking-[0.2em]">Canais de Venda</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li>Atacado Industrial</li>
            <li>Redes de Supermercado</li>
            <li>Lojas de Suplementos</li>
            <li>Distribuidores Regionais</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#F7E500] font-black mb-8 uppercase text-xs tracking-[0.2em]">Fábrica</h4>
          <ul className="space-y-5 text-sm font-medium">
            <li className="flex items-start">
              <MapPin size={20} className="mr-4 text-[#F7E500] shrink-0" />
              <span>Zona Industrial (Guará)<br/>Brasília-DF</span>
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-4 text-[#F7E500] shrink-0" />
              <span>(61) 99999-3281</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        <p className="font-bold">&copy; {new Date().getFullYear()} BANANUTRY ALIMENTOS INDÚSTRIA E COMÉRCIO LTDA.</p>
      </div>
    </footer>
  );
};

export default Footer;
