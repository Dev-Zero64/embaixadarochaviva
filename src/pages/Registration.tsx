import { Link } from "react-router-dom";

const Registration = () => {
  const handleQRCodeClick = () => {
    window.open("https://forms.gle/your-form-url", "_blank");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-church-primary mb-8">
          Cadastro de Membros
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Faça parte da nossa família! Escaneie o QR code abaixo ou clique nele para acessar o formulário de cadastro.
        </p>
        
        <div className="flex justify-center mb-12">
          <img
            src="/lovable-uploads/ad43283d-477a-4f15-ba63-d62fa2334d45.png"
            alt="QR Code para cadastro"
            className="w-64 h-64 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleQRCodeClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;