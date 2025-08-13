import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  
const scrollToServicios = () => {
  if (window.location.pathname === "/") {
    const element = document.getElementById("servicios");
    element?.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/?scroll=servicios"); // pasamos query param
  }
  setMenuOpen(false);
};




  return (
      <header className='bg-transparent border-b border-gray-300 px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50'>
          {/* logo nombre */}
          <div className='text-xl font-bold text-white'>
              Diego-Sounds
          </div>
          {/* menu escritorio */}
          <nav className='hidden md:flex space-x-6 text-white'>
                <Link to="/">Home</Link>
                <button
                  onClick={scrollToServicios} // llama a tu función
                  className="text-white cursor-pointer"
                >
                  Arreglos y Producciones
                </button>
                <Link to="/discografia">Discografía</Link>
                <Link to="/cursos">Cursos</Link>
                <Link to="/biografia">Biografía</Link>
                <Link to="/contact">Contáctame</Link>
          </nav>
         {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* Icono hamburguesa: 3 líneas */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            // Ícono "X" para cerrar
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            // Ícono hamburguesa
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
          </button>
          {/* Menú móvil desplegable */}
      {menuOpen && (
  <nav className="absolute top-full right-0 w-48 bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 z-50 md:hidden shadow-lg">
    <Link
      to="/"
      className="py-2 w-full text-center border-b border-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>
    <button
      className="py-2 w-full text-center border-b border-gray-700 text-white"
      onClick={scrollToServicios} // llama a tu función
    >
      Arreglos y Producciones
    </button>
    <Link
      to="/discografia"
      className="py-2 w-full text-center border-b border-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      Discografía
    </Link>
    <Link
      to="/cursos"
      className="py-2 w-full text-center border-b border-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      Cursos
    </Link>
    <Link
      to="/biografia"
      className="py-2 w-full text-center border-b border-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      Biografía
    </Link>
    <Link
      to="/contact"
      className="py-2 w-full text-center"
      onClick={() => setMenuOpen(false)}
    >
      Contáctame
    </Link>
  </nav>
)}


          
    </header>
  )
}
