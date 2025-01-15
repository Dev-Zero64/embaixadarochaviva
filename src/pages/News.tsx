import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Dia da Família",
      date: "08 de Fevereiro, 2025",
      description: "Um dia de celebração das familias em Cristo Jesus, venha participar, você e toda sua família.",
      image: "/images/diafamilia.png",
    },
    {
      id: 2,
      title: "Qahal - Ajunta-me este povo !",
      date: "25 de Janeiro, 2025",
      description: "Serão sete horas de adoração, oração e palavra, Deus tem algo tremendo para sua vida, venha participar, traga 1kg de alimento não perecível!",
      image: "/images/qahal.jpg",
    },
    {
      id: 3,
      title: "Edificando Uma Casa Sólida",
      date: "12 de Janeiro, 2025",
      description: "Campanha mês de Janeiro. Todo domingo uma palavra direcionada para a família. Pois, acreditamos que família é um presente de Deus, um alicerce construído com amor, união e fé.",
      image: "/images/eventocasa.png",
    },
    {
      id: 4,
      title: "Unção da Vida",
      date: "05 de Janeiro, 2025",
      description: "E servireis ao SENHOR vosso Deus, e ele abençoará o vosso pão e a vossa água; e Eu tirarei do meio de vós as enfermidades.Êxodo 23:25.",
      image: "/images/evento3.png",
    },
    {
      id: 5,
      title: "Noite da Virada",
      date: "31 de Dezembro, 2024",
      description: "Venha você e sua família celebrar a Virada do Ano conosco!",
      image: "/images/newyear.png",
    },
    {
      id: 6,
      title: "Projeto de Vida",
      date: "15 de Dezembro, 2024",
      description: "Participe da campanha projeto de vida, apresente a Deus os seus planos e ele os abençoará.",
      image: "/images/projeto.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8">Notícias e Eventos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fill rounded-t-lg"
                />
              </div>
              <CardTitle className="mt-4">{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
