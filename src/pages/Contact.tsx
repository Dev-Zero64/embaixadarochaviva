import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-16 bg-church-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Entre em Contato
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-church-primary mb-6">
            Informações de Contato
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-church-primary" size={24} />
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-gray-600">(62) 99626-4498</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-church-primary" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contato@embaixadarochaviva.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-church-primary" size={24} />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-gray-600">
                  Av. Independência, c, Alameda Alfredo Alves Pinto
                  <br/>
                  St. Faicalville, Goiânia - GO
                  <br/>
                  CEP: 74350-040
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
