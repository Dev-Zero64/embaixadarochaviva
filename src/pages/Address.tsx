const Address = () => {
  return (
    <div className="min-h-screen py-16 bg-church-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Nossa Localização
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3276460208513!2d-49.2934945!3d-16.7012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzA0LjQiUyA0OcKwMTcnMzYuNiJX!5e0!3m2!1spt-BR!2sbr!4v1625761234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-church-primary mb-4">
              Endereço
            </h2>
            <p className="text-gray-600 mb-2">
              Av. Independência, c, Alameda Alfredo Alves Pinto
            </p>
            <p className="text-gray-600 mb-2">St. Faicalville, Goiânia - GO</p>
            <p className="text-gray-600">CEP: 74350-040</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;