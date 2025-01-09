const Home = () => {
  const images = [
    "/church1.jpg",
    "/church2.jpg",
    "/church3.jpg",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] bg-church-primary">
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
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-church-primary mb-12">
            Nossa Igreja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`Igreja ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-church-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-primary mb-8">
            Venha nos Conhecer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos uma comunidade acolhedora e vibrante, comprometida em compartilhar
            o amor de Deus e transformar vidas através da Sua palavra.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;