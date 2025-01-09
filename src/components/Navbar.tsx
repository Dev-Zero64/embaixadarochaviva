import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Notícias", path: "/noticias" },
    { name: "Vídeos", path: "/videos" },
    { name: "Contato", path: "/contato" },
    { name: "Horários", path: "/horarios" },
    { name: "Endereço", path: "/endereco" },
    { name: "Ministério Rochinha", path: "/ministerio-rochinha" },
    { name: "Ativadores", path: "/ativadores" },
    { name: "Cadastro", path: "https://docs.google.com/forms/d/e/1FAIpQLSeyJopZp8OHiod2H8dIU5WlTQ7mvitmcJkjjbFfDYLkMHm3hA/viewform?pli=1&fbzx=-1167983075323601713"},
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-church-primary">
                Embaixada da Rocha Viva
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-church-primary hover:text-church-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-church-primary hover:text-church-secondary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;