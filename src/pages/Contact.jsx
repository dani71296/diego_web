import React from "react";

export default function Contact() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12">
            {/* Formulario */}
      <form
        action="https://formspree.io/f/your_form_id" // reemplaza con tu ID
        method="POST"
        className="md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contáctame</h2>

        <label className="block mb-4">
          <span className="text-white">Nombre</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md bg-black border border-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md bg-black border border-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Mensaje</span>
          <textarea
            name="message"
            required
            rows="5"
            className="mt-1 block w-full rounded-md bg-black border border-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 px-4 rounded-md font-bold text-white"
        >
          Enviar
        </button>
      </form>
       {/* Imagen al lado */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/contact-image.jpg" // aquí cambias por tu imagen
          alt="Contacto"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
