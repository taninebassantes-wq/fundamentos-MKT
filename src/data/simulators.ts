export interface Simulator {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  blockTarget: string;
}

export const simulators: Simulator[] = [
  {
    id: "SIM-01",
    title: "Simulador 1: Conceptos Básicos y Entorno",
    description: "Evaluación sobre los fundamentos teóricos del marketing, su evolución histórica y el análisis de las fuerzas macro y microambientales que inciden en la estrategia empresarial.",
    totalQuestions: 40,
    timeLimitMinutes: 40,
    blockTarget: "Bloque 1"
  },
  {
    id: "SIM-02",
    title: "Simulador 2: Investigación, Consumidor y Segmentación (STP)",
    description: "Evaluación centrada en los Sistemas de Información de Marketing, métodos cuantitativos/cualitativos de investigación, la psicología de compra del consumidor y la estrategia de segmentación, mercado meta y posicionamiento.",
    totalQuestions: 40,
    timeLimitMinutes: 40,
    blockTarget: "Bloque 2"
  },
  {
    id: "SIM-03",
    title: "Simulador 3: Estrategia de Producto y Precios",
    description: "Evaluación sobre la gestión del mix de productos, valor de marca, fases del ciclo de vida del producto, desarrollo de innovaciones y las estrategias complejas para fijar y ajustar precios.",
    totalQuestions: 40,
    timeLimitMinutes: 40,
    blockTarget: "Bloque 3"
  },
  {
    id: "SIM-04",
    title: "Simulador 4: Distribución y Comunicación Comercial",
    description: "Evaluación sobre los intermediarios comerciales, logística física, conflictos de canal, y las herramientas de la comunicación integrada de marketing (CIM): publicidad, RRPP, promoción y venta personal.",
    totalQuestions: 40,
    timeLimitMinutes: 40,
    blockTarget: "Bloque 4"
  },
  {
    id: "SIM-05",
    title: "Simulador 5: Plan de Marketing, Métricas y Tendencias",
    description: "Evaluación enfocada en la planificación estratégica, análisis DAFO, matriz de Ansoff, control y cálculo del ROI comercial, marketing digital, e-commerce y ética comercial.",
    totalQuestions: 40,
    timeLimitMinutes: 40,
    blockTarget: "Bloque 5"
  },
  {
    id: "SIM-06",
    title: "Simulador 6: Examen General Integrador",
    description: "Prueba general de simulación completa que contiene preguntas aleatorias y complejas de todos los 5 bloques del curso, diseñada para emular el examen final de la asignatura.",
    totalQuestions: 40,
    timeLimitMinutes: 50,
    blockTarget: "Todos los Bloques"
  }
];
