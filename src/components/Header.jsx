// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header className="fixed w-full bg-black bg-opacity-80 text-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-yellow-500">SushiZen</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#menu" className="hover:text-yellow-500">Menú</a>
          <a href="#about" className="hover:text-yellow-500">Nosotros</a>
          <a href="#reservas" className="hover:text-yellow-500">Reservas</a>
          <a href="#contacto" className="hover:text-yellow-500">Contacto</a>
        </nav>
        <a
          href="#reservas"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

export default Header;
