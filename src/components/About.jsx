// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 items-center">
        <motion.img
          src="./pez-about.jpeg"
          alt="Chef preparando sushi"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-yellow-500 mb-4">Nuestra historia</h3>
          <p className="mb-4">
            En SushiZen, combinamos técnicas tradicionales japonesas con un toque moderno. 
            Nuestros chefs seleccionan los ingredientes más frescos para ofrecerte una experiencia única.
          </p>
          <p>
            Desde el ambiente hasta cada plato, todo está diseñado para transportarte a Japón.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
