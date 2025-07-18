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
    title: "Culto de Celebração",
    dateSort: "2025-01-15",
    dateDisplay: "Domingo as 18:30",
    description: "Momentos especiais do culto de domingo com a presença do Senhor.",
    image: "/images/cultocelebra.jpeg",
  },
  {
    id: 2,
    title: "Culto da Família",
    dateSort: "2025-01-10",
    dateDisplay: "Domingo as 09h",
    description: "Traga sua familia e venha participar deste momento de comunhão",
    image: "/images/cultofamilia.jpeg",
  },
  {
    id: 3,
    title: "Culto Milagres",
    dateSort: "2025-01-08",
    dateDisplay: "Quarta-feira as 20h",
    description: "O seu milagre está te aguardando, basta crer, o senhor é contigo",
    image: "/images/cultomilagres.jpeg",
  },
];