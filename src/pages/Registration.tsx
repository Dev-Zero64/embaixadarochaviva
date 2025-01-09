const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-church-primary mb-8 text-center">
        Ficha de Cadastro
      </h1>
      <div className="w-full max-w-4xl mx-auto aspect-[3/4]">
        <iframe
          src="SUBSTITUA_PELO_SEU_LINK_DO_GOOGLE_FORMS"
          className="w-full h-full border-0"
          title="Formulário de Cadastro"
        >
          Carregando...
        </iframe>
      </div>
    </div>
  );
};

export default Registration;