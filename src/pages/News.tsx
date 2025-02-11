import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { NewsItem, newsItems } from "@/lib/news";

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

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
              className="w-full h-70 object-fill rounded-lg"
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
