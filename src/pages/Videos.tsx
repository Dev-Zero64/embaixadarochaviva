import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Videos = () => {
  const videoItems = [
    {
      id: 1,
      title: "Louvor e Adoração",
      thumbnail: "/images/choir.jpg",
      embedUrl: "https://www.youtube.com/embed/your-video-id"
    },
    {
      id: 2,
      title: "Palavra da Semana",
      thumbnail: "/images/pastor.jpg",
      embedUrl: "https://www.youtube.com/embed/your-video-id"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8">Vídeos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoItems.map((video) => (
          <Card key={video.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
              />
              <CardTitle className="mt-4">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Videos;