const MinisterioRochinha = () => {
  return (
    <div className="min-h-screen py-16 bg-church-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Ministério Rochinha
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              O Ministério Rochinha é dedicado ao desenvolvimento espiritual de
              nossas crianças, proporcionando um ambiente acolhedor e divertido
              para que elas possam conhecer e experimentar o amor de Deus.
            </p>
            <p className="text-lg text-gray-600">
              Através de atividades lúdicas, músicas, histórias bíblicas e
              brincadeiras, ajudamos as crianças a desenvolverem uma base sólida
              de fé e valores cristãos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/rochinha1.jpg"
                alt="Ministério Rochinha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/rochinha2.jpg"
                alt="Ministério Rochinha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/rochinha3.jpg"
                alt="Ministério Rochinha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/rochinha4.jpg"
                alt="Ministério Rochinha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinisterioRochinha;