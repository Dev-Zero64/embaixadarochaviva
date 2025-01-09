import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen py-16 bg-church-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-church-primary mb-12">
          Entre em Contato
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-church-primary mb-6">
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-church-primary focus:border-church-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-church-primary focus:border-church-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-church-primary focus:border-church-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-church-primary text-white py-2 px-4 rounded-md hover:bg-church-primary/90 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-church-primary mb-6">
              Informações de Contato
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-church-primary" size={24} />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">(62) 9999-9999</p>
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
                    <br />
                    St. Faicalville, Goiânia - GO
                    <br />
                    CEP: 74350-040
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;