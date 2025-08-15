import React from 'react';

export default function Biografia() {
  return (
    <section className=" py-16 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
        Sobre Diego-Sounds
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Foto */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/maradona.webp" // cámbiala por tu imagen
            alt="Diego-Sounds"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-2/3 text-white space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            Diego-Sounds es un músico, productor y arreglista apasionado por la creación de experiencias musicales únicas. Con años de trayectoria en arreglos, producción, composición y orquestación, busca transmitir emociones a través de cada nota y cada instrumento.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Su enfoque combina la técnica profesional con la sensibilidad artística, adaptando sus proyectos a distintos géneros y formatos. Cada composición refleja su compromiso por conectar la música con el corazón de quienes la escuchan.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Además, Diego comparte su conocimiento a través de cursos y talleres, formando nuevas generaciones de músicos y productores con la misma pasión y dedicación que caracteriza su trabajo.
          </p>
        </div>
      </div>
    </section>
  );
}
