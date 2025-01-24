import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const nextEvent = {
    title: "Qahal - Ajunta-me este povo!",
    date: "25 de janeiro, 2025",
    description: "Serão sete horas de adoração, oração e palavra. Deus tem algo tremendo para sua vida!",
    image: "/images/qahal.jpg",
    link: "/noticias"
  };

  // Configurações do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }
    ]
  };

  // Imagens para o carrossel
  const bannerImages = [
    "/images/church5.jpg",
    "/images/reunion.jpg",
    "/images/drums.jpg",
    "/images/choir.jpg",
    "/images/outside.png"
  ];

  return (
    <div className="min-h-screen">
        {/* Carrossel Principal */}
        <section className="relative h-[60vh] bg-church-primary overflow-hidden">
          <Slider {...sliderSettings}>
            {bannerImages.map((image, index) => (
              <div key={index} className="relative h-[60vh]">
                {/* Imagem com proporção natural (cobre o espaço sem distorcer) */}
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"  // Alterado para object-cover
                />
                
                {/* Overlay suave e texto */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex items-center justify-center text-white z-10">
                  <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                      Bem-vindo à Embaixada da Rocha Viva
                    </h1>
                    <p className="text-xl md:text-2xl drop-shadow-lg">
                      Uma igreja que transforma vidas através do amor de Cristo
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

      {/* Banner do Próximo Evento */}
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

      {/* Seção de Destaques */}
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
                  <h3 className="text-2xl font-bold text-white">Ministério Rochinha</h3>
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
    </div>
  );
};

export default Home;