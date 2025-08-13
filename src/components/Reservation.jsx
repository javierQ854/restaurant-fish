// src/components/Reservations.jsx
import React from "react";
import { motion } from "framer-motion";

function Reservations() {
  return (
    <section id="reservas" className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          Reserva tu mesa
        </h3>
        <motion.form
          className="bg-black p-6 rounded-lg shadow-lg grid gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input type="text" placeholder="Nombre" className="p-2 rounded bg-gray-800 border border-gray-700" />
          <input type="tel" placeholder="Teléfono" className="p-2 rounded bg-gray-800 border border-gray-700" />
          <input type="date" className="p-2 rounded bg-gray-800 border border-gray-700" />
          <input type="time" className="p-2 rounded bg-gray-800 border border-gray-700" />
          <input type="number" placeholder="Personas" className="p-2 rounded bg-gray-800 border border-gray-700" />
          <button className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition">
            Confirmar reserva
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Reservations;
