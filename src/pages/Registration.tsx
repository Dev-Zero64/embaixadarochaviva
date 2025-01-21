import { Link } from "react-router-dom";

const Registration = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeyJopZp8OHiod2H8dIU5WlTQ7mvitmcJkjjbFfDYLkMHm3hA/viewform";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8 text-center">
        Cadastro de Membros
      </h1>
      
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-lg text-gray-700">
          Seja bem-vindo à nossa família! Para se cadastrar como membro da Embaixada da Rocha Viva,
          clique na imagem abaixo ou escaneie o QR Code para preencher o formulário.
        </p>
      </div>

      <div className="flex justify-center">
        <a href={formUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/qrcode.png"
            alt="QR Code para formulário de cadastro"
            className="w-64 h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Registration;
