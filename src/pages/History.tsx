import React from "react";

const History = () => {
  const historyEvents = [
    {
      year: "2008",
      description: "Fundação da Igreja Embaixada da Rocha Viva.",
      image: "/images/genesis.jpg",
    },
    {
      year: "2013",
      description: "Primeira grande reforma do templo.",
      image: "/images/outside.png",
    },
    {
      year: "2019",
      description: "Início dos projetos sociais e missionários.",
      image: "/images/semeando.png",
    },
    {
      year: "2024",
      description: "Celebração dos 30 anos da igreja.",
      image: "/images/church5.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Nossa História
        </h1>

        <div className="space-y-12">
          {historyEvents.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start md:space-x-8"
            >
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={`História da igreja - ${event.year}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold text-church-primary mb-4">
                  {event.year}
                </h2>
                <p className="text-lg text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
