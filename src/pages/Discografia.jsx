import React from 'react'
const discografiaItems = [
  {
    type: "audio",
    src: "/audio1.mp3",
    title: "Arreglo Musical 1",
    description: "Adaptamos y enriquecemos tus composiciones."
  },
  {
    type: "audio",
    src: "/audio2.mp3",
    title: "Transcripción de Partituras",
    description: "Convertimos cualquier audio en partitura precisa."
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/xK8XoL1TBHc?si=wuQ2iPnjJ9Gg93Ve&amp;start=0",
    title: "Producción Musical",
    description: "Video tampoco echo por diego pero que buena cancion he."
    },
  {
    type: "video",
    src: "https://www.youtube.com/embed/BQgc51MOQ9M?si=D5n1DSagdeNdVjZR&amp;start=0",
    title: "Producción Musical 3",
    description: "Video no echo por diego pero la rola esta chida."
  },
  {
    type: "pdf",
    src: "/cvditp act.pdf",
    title: "Prueba de pdf",
    description: "oooo se ve bonito con este estilo de pdf."
  }
];


export default function Discografia() {
  return (
    <div className="flex flex-col space-y-12 px-4 py-8 pt-25">
  {discografiaItems.map((item, index) => (
  <div
    key={index}
    className={`flex flex-col md:flex-row items-center md:space-x-6 ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
  >
    {item.type === "audio" ? (
      <audio controls className="w-full md:w-1/3">
        <source src={item.src} type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    ) : item.type === "video" ? (
      <iframe
        className="w-full md:w-1/3 aspect-video"
        src={item.src}
        title={item.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : item.type === "pdf" ? (
      <iframe
        src={item.src}
        title={item.title}
        className="w-full md:w-1/3 h-64 border rounded-lg"
      ></iframe>
    ) : null}

    <div className="mt-4 md:mt-0 md:w-2/3 text-white">
      <p className="font-bold text-lg">{item.title}</p>
      <p>{item.description}</p>
    </div>
  </div>
))}


</div>

  )
}
