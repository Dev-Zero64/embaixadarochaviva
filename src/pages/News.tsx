import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  dateSort: string;
  dateDisplay: string;
  description: string;
  image: string;
}

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Dia da Família",
      dateSort: "2025-02-08",
      dateDisplay: "08 de fevereiro, 2025",
      description:
        "Um dia de celebração das famílias em Cristo Jesus, venha participar, você e toda sua família.",
      image: "/images/diafamilia.png",
    },
    {
      id: 2,
      title: "Qahal - Ajunta-me este povo!",
      dateSort: "2025-01-25",
      dateDisplay: "25 de janeiro, 2025",
      description:
        "Serão sete horas de adoração, oração e palavra, Deus tem algo tremendo para sua vida, venha participar, traga 1kg de alimento não perecível!",
      image: "/images/qahal.jpg",
    },
    {
      id: 3,
      title: "Edificando Uma Casa Sólida",
      dateSort: "2025-01-12",
      dateDisplay: "12 de janeiro, 2025",
      description:
        "Campanha mês de Janeiro. Todo domingo uma palavra direcionada para a família. Pois, acreditamos que família é um presente de Deus, um alicerce construído com amor, união e fé.",
      image: "/images/eventocasa.png",
    },
    {
      id: 4,
      title: "Unção da Vida",
      dateSort: "2025-01-05",
      dateDisplay: "05 de janeiro, 2025",
      description:
        "E servireis ao SENHOR vosso Deus, e ele abençoará o vosso pão e a vossa água; e Eu tirarei do meio de vós as enfermidades. Êxodo 23:25.",
      image: "/images/evento3.png",
    },
    {
      id: 5,
      title: "Noite da Virada",
      dateSort: "2024-12-31",
      dateDisplay: "31 de dezembro, 2024",
      description: "Venha você e sua família celebrar a Virada do Ano conosco!",
      image: "/images/newyear.png",
    },
    {
      id: 6,
      title: "Projeto de Vida",
      dateSort: "2024-12-15",
      dateDisplay: "15 de dezembro, 2024",
      description:
        "Participe da campanha projeto de vida, apresente a Deus os seus planos e ele os abençoará.",
      image: "/images/projeto.png",
    },
    {
      id: 7,
      title: "Elas e o Pai",
      dateSort: "2025-01-20",
      dateDisplay: "20 de janeiro, 2025",
      description:
        "Reunião de oração e intercessão para as mulheres. Agora, minha filha, não tenha medo; farei por você tudo o que me pedir. Todos os meus concidadãos sabem que você é mulher virtuosa. Rute 3:11.",
      image: "/images/elas.png",
    },
    {
      id: 8,
      title: "Noite de Gratidão",
      dateSort: "2024-07-28",
      dateDisplay: "28 de Julho, 2024",
      description:
        "Convidamos você a se juntar a nós para esse culto de gratidão… Um momento especial de agradecimento por todas as bênçãos recebidas… Venha celebrar conosco em um ambiente de fé e comunhão.",
      image: "/images/gratidao1.png",
    },
    {
      id: 9,
      title: "Encontro de Casais em Caldas Novas",
      dateSort: "2025-03-28",
      dateDisplay: "28 a 30 de Março, 2025",
      description:
        "Venha participar do nosso encontro de casais em Caldas Novas, um final de semana de muito amor e comunhão.",
      image: "/images/casais.jpg",
    },
  ];

  const sortedNewsItems = [...newsItems].sort(
    (a, b) => new Date(b.dateSort).getTime() - new Date(a.dateSort).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8">
        Notícias e Eventos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedNewsItems.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedNews(item)}
          >
            <CardHeader>
              <div className="w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fill rounded-t-lg"
                />
              </div>
              <CardTitle className="mt-4">{item.title}</CardTitle>
              <CardDescription>{item.dateDisplay}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 rounded-full transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-48 object-fill rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedNews.title}</h2>
            <p className="text-gray-600 mt-2">{selectedNews.dateDisplay}</p>
            <p className="text-gray-700 mt-4">{selectedNews.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
