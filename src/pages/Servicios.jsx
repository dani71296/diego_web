import React from "react";
import { FaMusic, FaFileAlt, FaDesktop, FaMicrophone, FaPenFancy, FaCogs } from "react-icons/fa";

export default function Servicios() {
  const servicios = [
    {
      title: "Arreglos Musicales",
      description:
        "Adaptamos y enriquecemos tus composiciones. Creamos arreglos profesionales para diferentes formatos instrumentales.",
      icon: <FaMusic className="text-4xl text-green-400 mb-2" />,
    },
    {
      title: "Transcripción de Partituras",
      description:
        "Convertimos cualquier audio (MP3, WAV, YouTube) en una partitura precisa y fácil de leer. Ideal para solistas, bandas y coros.",
      icon: <FaFileAlt className="text-4xl text-blue-400 mb-2" />,
    },
    {
      title: "Digitalización y Edición",
      description:
        "Modernizamos tus partituras escritas a mano o en formatos antiguos. Las entregamos en formato digital profesional (PDF, XML, SIB).",
      icon: <FaDesktop className="text-4xl text-purple-400 mb-2" />,
    },
    {
      title: "Producciones",
      description: "Grabamos y mezclamos tus canciones con calidad profesional.",
      icon: <FaMicrophone className="text-4xl text-red-400 mb-2" />,
    },
    {
      title: "Composición",
      description: "Creamos piezas musicales originales adaptadas a tu proyecto.",
      icon: <FaPenFancy className="text-4xl text-yellow-400 mb-2" />,
    },
    {
      title: "Orquestación",
      description: "Diseñamos arreglos para orquesta completa o secciones específicas.",
      icon: <FaCogs className="text-4xl text-pink-400 mb-2" />,
    },
  ];

  return (
    <div id="servicios"  className="py-16 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Nuestros Servicios Profesionales
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {servicios.map((serv, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            {serv.icon}
            <h2 className="text-xl font-semibold mb-2">{serv.title}</h2>
            <p className="text-gray-300">{serv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

