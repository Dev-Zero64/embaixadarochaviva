import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Destaques } from "@/components/Destaques";
import { LatestEvent } from "@/components/LatestEvent";

const Home = () => {
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
          dots: false,
        },
      },
    ],
  };

  // Imagens para o carrossel
  const bannerImages = [
    "/images/church5.jpg",
    "/images/reunion.jpg",
    "/images/drums.jpg",
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
                className="w-full h-full object-cover" // Alterado para object-cover
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

      <LatestEvent />
      <Destaques />
    </div>
  );
};

export default Home;
