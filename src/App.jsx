import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Discografia from "./pages/Discografia";
import Cursos from "./pages/Cursos";
import Biografia from "./pages/Biografia"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/discografia" element={<Discografia />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/biografia" element={<Biografia />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        <Footer />
        {/* Botón flotante WhatsApp */}
        <a
          href="https://wa.me/59161000304?text=Hola%20me%20gustaria%20solicitar%20uno%20de%20tus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-15 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50
          transform transition-transform duration-300 hover:scale-110"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </Router>
  );
}


export default App;
