import React from "react";

// Para los iconos usaremos SVG inline simples (puedes cambiar por tus íconos preferidos)
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/DiegoSounds",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/DiegoSounds",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/DiegoSounds",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.938 4.938 0 002.163-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.38 4.482A13.978 13.978 0 011.671 3.15 4.92 4.92 0 003.195 9.72a4.902 4.902 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.927 4.927 0 004.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.057 0 14.01-7.496 14.01-13.985 0-.21 0-.423-.015-.634A10.025 10.025 0 0024 4.59z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-700 border-t border-gray-300 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white">
      <p className="text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Diego-Sounds. Todos los derechos reservados.
      </p>
      <div className="flex space-x-6">
        {socialLinks.map(({ name, href, svg }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="hover:text-gray-400 transition-colors"
          >
            {svg}
          </a>
        ))}
      </div>
    </footer>
  );
}
