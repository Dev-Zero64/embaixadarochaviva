import { Link } from "react-router-dom";

export const Destaques = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-church-primary mb-12">
          Conheça Nossa Igreja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/noticias" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="/images/reunion.jpg"
                alt="Notícias"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Notícias</h3>
              </div>
            </div>
          </Link>
          <Link to="/ministerio-rochinha" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="/images/rochinha1.jpg"
                alt="Ministério Rochinha"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  Ministério Rochinha
                </h3>
              </div>
            </div>
          </Link>
          <Link to="/ativadores" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="/images/ativadores1.jpg"
                alt="Ativadores"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Ativadores</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
