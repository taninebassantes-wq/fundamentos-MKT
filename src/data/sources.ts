export interface Source {
  id: string;
  author: string;
  title: string;
  year: number;
  publisher: string;
  edition: string;
  url?: string;
  description: string;
}

export const sources: Source[] = [
  {
    id: "S01",
    author: "Kotler, Philip y Armstrong, Gary",
    title: "Principios de Marketing",
    year: 2018,
    publisher: "Pearson Educación",
    edition: "17ª Edición",
    description: "La obra de referencia global más utilizada en la enseñanza universitaria de marketing. Ofrece un enfoque práctico e integrador centrado en la creación de valor para el cliente."
  },
  {
    id: "S02",
    author: "Santesmases Mestre, Miguel",
    title: "Marketing: Conceptos y Estrategias",
    year: 2012,
    publisher: "Ediciones Pirámide",
    edition: "6ª Edición",
    description: "Texto clásico fundamental en el ámbito académico hispanohablante. Desarrolla de manera exhaustiva y rigurosa la teoría comercial con ejemplos del mercado iberoamericano."
  },
  {
    id: "S03",
    author: "Esteban Talaya, Águeda y Mondéjar Jiménez, Juan Antonio",
    title: "Introducción al Marketing",
    year: 2013,
    publisher: "ESIC Editorial",
    edition: "1ª Edición",
    description: "Manual adaptado a los planes de estudio del Espacio Europeo de Educación Superior. Enfoca los conceptos clave de la disciplina con un lenguaje didáctico e ilustrativo."
  },
  {
    id: "S04",
    author: "Lambin, Jean-Jacques",
    title: "Marketing Estratégico",
    year: 2013,
    publisher: "McGraw-Hill",
    edition: "6ª Edición",
    description: "Obra especializada que profundiza en el análisis de necesidades, segmentación y posicionamiento desde un prisma analítico y estratégico para la toma de decisiones corporativas."
  },
  {
    id: "S05",
    author: "Stanton, William J., Etzel, Michael J. y Walker, Bruce J.",
    title: "Fundamentos de Marketing",
    year: 2007,
    publisher: "McGraw-Hill",
    edition: "14ª Edición",
    description: "Libro de texto introductorio con una estructura clara y lógica, enfocado en cómo el marketing afecta a las organizaciones individuales y a la sociedad."
  },
  {
    id: "S06",
    author: "Kerin, Roger A. y Hartley, Steven W.",
    title: "Marketing",
    year: 2020,
    publisher: "McGraw-Hill",
    edition: "14ª Edición",
    description: "Una perspectiva dinámica y contemporánea sobre la aplicación del marketing mix en el entorno actual de los negocios globales, la digitalización y el e-commerce."
  }
];
