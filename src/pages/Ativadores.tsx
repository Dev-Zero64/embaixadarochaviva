const Ativadores = () => {
  return (
    <div className="min-h-screen py-16 bg-church-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Ativadores
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              O ministério Ativadores é um grupo dinâmico e apaixonado por Deus,
              focado em ativar os jovens para uma vida de propósito e impacto no
              Reino de Deus.
            </p>
            <p className="text-lg text-gray-600">
              Através de encontros semanais, momentos de louvor, estudos bíblicos
              e atividades especiais, buscamos criar um ambiente onde os jovens
              possam crescer em sua fé e desenvolver seus dons e talentos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="public/images/teens3.jpg"
                alt="Ativadores"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="public/images/teens4.jpg"
                alt="Ativadores"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="public/images/teens1.jpg"
                alt="Ativadores"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src="public/images/teens2.jpg"
                alt="Ativadores"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ativadores;