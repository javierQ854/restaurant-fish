// src/components/Menu.jsx
import React from "react";
import { motion } from "framer-motion";

const dishes = [
  { name: "Sashimi Deluxe", price: "$20", img: "https://sushihousemenu.com/Media/Default/Menu%20Items/sashimi-deluxe-1.jpg" },
  { name: "Nigiri Variado", price: "$18", img: "https://thumbs.dreamstime.com/b/sushi-nigiri-variado-sobre-un-plato-de-hormig%C3%B3n-oscuro-vista-superior-261979068.jpg" },
  { name: "Roll Dragón", price: "$15", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFHnhQhxU6JP6qk-XaeP8U_2zGFcFKEMguLpL_KkY1m-AFDEvifiqOjOdjY0dQurXf-MjY9BUeV25gFxR4StMYjs3iz6jjfpLOuT_sf_srwG9khzUUpM5yC_ULHfeKmYNKE-YkmbbHXFs/s1600/Dragon-Roll-Sushi-Portada.jpg" },
  { name: "Tempura de Camarón", price: "$12", img: "https://buenprovecho.hn/wp-content/uploads/2023/03/Camarones_tempura_y_salsa_de_tamarindo.png" },
  { name: "Omakase Especial", price: "$35", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw6ja75EfZXLRySHcIz3eFOyv-lJHhBmSkg&s" },
  { name: "Maki de Salmón", price: "$14", img: "https://www.ahumadosdominguez.es/wp-content/uploads/2023/10/makis-de-salmon-ahumado-y-aguacate.jpg.webp" },
];

function Menu() {
  return (
    <section id="menu" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-yellow-500 mb-12">Menú destacado</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img src={dish.img} alt={dish.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">{dish.name}</h4>
                <p className="text-yellow-500">{dish.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
