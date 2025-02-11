import { Link } from "react-router-dom";

const nextEvent = {
  title: "Encontro de Casais em Caldas Novas",
  date: "28 a 30 de Março, 2025",
  description:
    "Venha participar do nosso encontro de casais em Caldas Novas, um final de semana de muito amor e comunhão..",
  image: "/images/casais.jpg",
  link: "/noticias",
};

export const LatestEvent = () => {
  return (
    <section className="py-12 bg-church-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-church-primary mb-8">
          Próximo Evento
        </h2>
        <Link to={nextEvent.link}>
          <div className="relative group overflow-hidden rounded-lg shadow-lg max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <img
              src={nextEvent.image}
              alt={nextEvent.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{nextEvent.title}</h3>
              <p className="text-lg mb-2">{nextEvent.date}</p>
              <p className="text-sm opacity-90">{nextEvent.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
