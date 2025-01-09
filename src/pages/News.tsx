import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Noite da Virada",
      date: "31 de Dezembro, 2024",
      description: "Venha você e sua família celebrar a Virada do Ano conosco!",
      image: "/images/newyear.png"
    },
    {
      id: 2,
      title: "Projeto de Vida",
      date: "15 de Dezembro, 2024",
      description: "Participe da campanha projeto de vidda, apresente a Deus os seus planos e ele os abençoará",
      image: "/images/projeto.png"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8">Notícias e Eventos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
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