import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Culto de Celebração",
      date: "28 de Março, 2024",
      description: "Venha participar do nosso culto especial de celebração neste domingo às 19h.",
      image: "/images/reunion.jpg"
    },
    {
      id: 2,
      title: "Encontro de Jovens",
      date: "30 de Março, 2024",
      description: "Grande encontro de jovens com louvor, palavra e muita comunhão.",
      image: "/images/choir.jpg"
    }
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