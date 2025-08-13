// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-black text-white pt-28 pb-16 relative">
      <img
        src="./hero-logo.jpeg"
        alt="Sushi gourmet"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="max-w-6xl mx-auto relative z-10 text-center px-6">
        <motion.h2
          className="text-5xl font-bold mb-4 text-yellow-500"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          La experiencia japonesa que estabas esperando
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Sushi artesanal, ingredientes frescos y ambiente exclusivo.
        </motion.p>
        <div className="flex justify-center gap-4">
          <a
            href="#reservas"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Reservar ahora
          </a>
          <a
            href="#menu"
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Ver menú
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
