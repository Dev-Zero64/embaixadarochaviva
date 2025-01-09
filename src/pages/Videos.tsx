import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Videos = () => {
  const videoItems = [
    {
      id: 1,
      title: "Apresentação das Crianças",
      embedUrl: "https://www.youtube.com/embed/dZs0nAwXGR4?si=b7itEr3bcEaBo6pz"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-church-primary mb-8">Vídeos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoItems.map((video) => (
          <Card key={video.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="mt-4">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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