import React from "react";
import { Link } from "react-router-dom";
import Servicios from "./Servicios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scroll") === "servicios") {
      const element = document.getElementById("servicios");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/promsuic.webp')" }}
    >
      {/* Overlay semitransparente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gray-950/20"></div>

      {/* Contenido con texto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg fade-down">
          Diego-Sounds
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-xl drop-shadow-md">
          Música que conecta con tu alma. Arreglos, producciones, composición, orquestación y más.
        </p>
        <Link to="/contact"
          className=" text-white px-6 py-2 hover:scale-105 transition mt-10 text-2xl "
        >
          Realiza tu pedido
          
        </Link>
      </div>
      
      </section>
      <Servicios />
      </>
  );
}
