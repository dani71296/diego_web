import React from 'react';
import { Link } from "react-router-dom";

export default function Cursos() {
  const cursos = [
    {
      title: "Producción Musical",
      description: "Cursos prácticos de producción musical aplicando técnicas profesionales.",
      image: "/curso1.webp", // cambia por tus imágenes
    },
    {
      title: "Arreglos y Composición",
      description: "Aprende a crear arreglos y composiciones adaptadas a distintos estilos.",
      image: "/curso2.webp",
    },
    {
      title: "Orquestación",
      description: "Domina la orquestación y cómo organizar instrumentos para lograr un sonido profesional.",
      image: "/curso3.webp",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
        Cursos y Experiencia
      </h2>
      <p className="text-center text-white mb-12 text-lg md:text-xl">
        Diego-Sounds cuenta con varios años de experiencia impartiendo cursos de manera particular y en institutos reconocidos de su ciudad, compartiendo su pasión y conocimiento musical con nuevos talentos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cursos.map((curso, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 flex flex-col"
          >
            <img
              src={curso.image}
              alt={curso.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white  flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{curso.title}</h3>
              <p className="mb-4 flex-grow">{curso.description}</p>
            </div>
            {/* Botón de solicitud */}
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center mt-auto"
            >
              Solicitar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
