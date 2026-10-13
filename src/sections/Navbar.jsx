import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            <img src="/assets/avatar.png" alt="logo" className="w-10 h-10" />
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden items-center gap-6">
            <NavItems />
            <a
              href="/assets/K.V.N.T.Liyanage.pdf"
              download="K.V.N.T.Liyanage.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-white/70 hover:border-white shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_18px_rgba(255,255,255,0.4)] text-white px-5 py-2 rounded-md font-semibold transition-all inline-block"
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5 flex flex-col gap-5">
          <NavItems onClick={closeMenu} />
          <a
            href="/assets/K.V.N.T.Liyanage.pdf"
            download="K.V.N.T.Liyanage.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="bg-black border border-white/70 hover:border-white shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_18px_rgba(255,255,255,0.4)] text-white px-5 py-3 rounded-md font-semibold transition-all w-full text-center"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
