import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const carouselImages = [
    "/images/reunion.jpg",
    "/images/outside.png",
    "/images/pastor.jpg",
    "/images/church5.jpg",
  ];

  const nextEvent = {
    title: "Encontro de Casais",
    date: "15 de Junho",
    image: "/images/casais.jpg",
    link: "/noticias",
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] bg-church-primary overflow-hidden">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                    <div className="text-center">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Bem-vindo à Embaixada da Rocha Viva
                      </h1>
                      <p className="text-xl md:text-2xl">
                        Uma igreja que transforma vidas através do amor de Cristo
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Banner do Próximo Evento */}
      <section className="py-8 bg-church-accent">
        <div className="max-w-7xl mx-auto px-4">
          <Link to={nextEvent.link}>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={nextEvent.image}
                alt={nextEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="text-white px-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Próximo Evento: {nextEvent.title}
                  </h3>
                  <p className="text-lg md:text-xl">{nextEvent.date}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-church-primary mb-12">
            Destaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/ministerio-rochinha" className="group">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/rochinha1.jpg"
                  alt="Ministério Rochinha"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">Ministério Rochinha</h3>
                </div>
              </div>
            </Link>
            <Link to="/ativadores" className="group">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ativadores1.jpg"
                  alt="Ativadores"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">Ativadores</h3>
                </div>
              </div>
            </Link>
            <Link to="/noticias" className="group">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/evento3.png"
                  alt="Notícias"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">Últimas Notícias</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;