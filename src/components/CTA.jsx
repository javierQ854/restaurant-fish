// src/components/CTA.jsx
import React from "react";

function CTA() {
  return (
    <section className="bg-black text-center py-12">
      <h3 className="text-yellow-500 text-2xl font-bold mb-4">
        Vive Japón en cada bocado
      </h3>
      <a
        href="#reservas"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
      >
        Reservar mesa
      </a>
    </section>
  );
}

export default CTA;
