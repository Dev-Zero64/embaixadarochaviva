const Schedule = () => {
  const services = [
    {
      day: "Domingo",
      time: "18:30",
      description: "Culto de Celebração",
    },
    {
      day: "Quarta",
      time: "19:45",
      description: "Culto de Ensino",
    },
    {
      day: "Sábado",
      time: "18:30",
      description: "Culto de Jovens",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-church-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Horários dos Cultos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.day}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-church-primary mb-4">
                {service.day}
              </h2>
              <p className="text-4xl font-bold text-church-secondary mb-4">
                {service.time}
              </p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Venha participar dos nossos cultos e faça parte desta família!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;