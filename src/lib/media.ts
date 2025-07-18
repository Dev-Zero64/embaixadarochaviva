export interface MediaItem {
  id: number;
  title: string;
  dateSort: string;
  dateDisplay: string;
  description: string;
  image: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Culto de Domingo",
    dateSort: "2025-01-15",
    dateDisplay: "15 de janeiro, 2025",
    description: "Momentos especiais do culto de domingo com a presença do Senhor.",
    image: "/images/church5.jpg",
  },
  {
    id: 2,
    title: "Ministério de Louvor",
    dateSort: "2025-01-10",
    dateDisplay: "10 de janeiro, 2025",
    description: "Nossa equipe de louvor em ação durante o culto.",
    image: "/images/choir.jpg",
  },
  {
    id: 3,
    title: "Palavra do Pastor",
    dateSort: "2025-01-08",
    dateDisplay: "08 de janeiro, 2025",
    description: "Pastor ministrando a palavra de Deus com unção.",
    image: "/images/pastor.jpg",
  },
  {
    id: 4,
    title: "Congregação Adorando",
    dateSort: "2025-01-05",
    dateDisplay: "05 de janeiro, 2025",
    description: "A igreja reunida em adoração ao Senhor.",
    image: "/images/reunion.jpg",
  },
  {
    id: 5,
    title: "Instrumentos de Louvor",
    dateSort: "2025-01-03",
    dateDisplay: "03 de janeiro, 2025",
    description: "Bateria e guitarra sendo usados para glorificar a Deus.",
    image: "/images/drums.jpg",
  },
  {
    id: 6,
    title: "Momento de Adoração",
    dateSort: "2025-01-01",
    dateDisplay: "01 de janeiro, 2025",
    description: "Guitarra conduzindo a congregação em adoração.",
    image: "/images/guitar.jpg",
  },
];