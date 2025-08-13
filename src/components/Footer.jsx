// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto text-center text-sm">
        <p>© 2025 nn. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:underline">Términos</a>
          <a href="#" className="mx-2 hover:underline">Privacidad</a>
          <a href="#" className="mx-2 hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
