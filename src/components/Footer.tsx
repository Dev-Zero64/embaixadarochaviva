import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-church-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Embaixada da Rocha Viva</h3>
            <p className="text-sm">
              Uma igreja comprometida com a palavra de Deus e o crescimento
              espiritual.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm mb-2">Telefone:(62) 99626-4498</p>
            <p className="text-sm">
              Email: contato.embaixadarochaviva@gmail.com
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/embaixadarochaviva/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-church-secondary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/embaixadarochaviva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-church-secondary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://wa.me/5562996264498"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-church-secondary transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Embaixada da Rocha Viva. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
