export interface NewsItem {
  id: number;
  title: string;
  dateSort: string;
  dateDisplay: string;
  description: string;
  image: string;
}

export const newsItems: NewsItem[] = [
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
