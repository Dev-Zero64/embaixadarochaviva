import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MediaItem, mediaItems } from "@/lib/media";

const Media: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const sortedMediaItems = [...mediaItems].sort(
    (a, b) => new Date(b.dateSort).getTime() - new Date(a.dateSort).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8">
        Galeria de Mídias
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedMediaItems.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedMedia(item)}
          >
            <CardHeader>
              <div className="w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-lg"
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
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 rounded-full transition duration-300 z-10"
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
              src={selectedMedia.image}
              alt={selectedMedia.title}
              className="w-full h-auto object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedMedia.title}</h2>
            <p className="text-gray-600 mt-2">{selectedMedia.dateDisplay}</p>
            <p className="text-gray-700 mt-4">{selectedMedia.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;