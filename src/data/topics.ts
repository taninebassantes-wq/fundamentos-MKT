export interface Topic {
  id: string;
  title: string;
  block: number;
  description: string;
}

export const topics: Topic[] = [
  {
    id: "T01",
    title: "Concepto y Evolución del Marketing",
    block: 1,
    description: "Estudio de las definiciones fundamentales del marketing, su evolución filosófica (producción, producto, ventas, marketing y marketing social) y la creación de valor en el intercambio."
  },
  {
    id: "T02",
    title: "El Entorno de Marketing",
    block: 1,
    description: "Análisis de las fuerzas internas y externas que afectan la capacidad de la empresa para servir a sus clientes: el microentorno (proveedores, competidores, intermediarios) y el macroentorno (demografía, economía, cultura, política)."
  },
  {
    id: "T03",
    title: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    block: 2,
    description: "Diseño y estructura de los flujos de información comercial, métodos de investigación de mercados (exploratoria, descriptiva, causal) y recolección de datos primarios y secundarios."
  },
  {
    id: "T04",
    title: "Comportamiento del Consumidor",
    block: 2,
    description: "Comprensión del proceso de decisión de compra del consumidor final y organizacional, analizando los factores culturales, sociales, personales y psicológicos que influyen en sus decisiones."
  },
  {
    id: "T05",
    title: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    block: 2,
    description: "Proceso STP (Segmentation, Targeting, Positioning): criterios de segmentación de mercados, selección de segmentos atractivos, diferenciación de la oferta y diseño del posicionamiento en la mente del consumidor."
  },
  {
    id: "T06",
    title: "Estrategia de Producto y Gestión de Marca",
    block: 3,
    description: "Decisiones sobre atributos de producto, niveles de producto (básico, real, aumentado), clasificaciones de bienes de consumo, y estrategias de branding (valor de marca, extensiones de línea y marca)."
  },
  {
    id: "T07",
    title: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    block: 3,
    description: "Fases del ciclo de vida del producto (introducción, crecimiento, madurez y declive) y las etapas del proceso formal de desarrollo de nuevos productos desde la generación de ideas hasta la comercialización."
  },
  {
    id: "T08",
    title: "Decisiones y Estrategias de Precio",
    block: 3,
    description: "Factores internos y externos en la fijación de precios, métodos basados en costes, valor y competencia, y estrategias de precios para nuevos productos (descremado y penetración)."
  },
  {
    id: "T09",
    title: "Canales de Distribución y Logística",
    block: 4,
    description: "Diseño y administración de los canales de distribución comercial, tipos de intermediarios, funciones del canal, estrategias de cobertura (intensiva, selectiva, exclusiva) y gestión de conflictos."
  },
  {
    id: "T10",
    title: "Mezcla de Comunicación Comercial",
    block: 4,
    description: "Elaboración de la mezcla de comunicación integrada de marketing (CIM): publicidad, promoción de ventas, relaciones públicas, venta personal y marketing directo."
  },
  {
    id: "T11",
    title: "Planificación Estratégica y Plan de Marketing",
    block: 5,
    description: "Proceso de planificación estratégica de marketing, análisis FODA (DAFO), formulación de objetivos comerciales y desarrollo de estrategias de crecimiento (matriz de Ansoff)."
  },
  {
    id: "T12",
    title: "Métricas y Control de Marketing",
    block: 5,
    description: "Evaluación del rendimiento de las acciones de marketing, auditoría comercial, cálculo del retorno de la inversión en marketing (ROMI) y control anual de desviaciones."
  },
  {
    id: "T13",
    title: "Marketing Digital y Redes Sociales",
    block: 5,
    description: "Principios del marketing digital, SEO, SEM, estrategias en redes sociales, inbound marketing y comercio electrónico (e-commerce)."
  },
  {
    id: "T14",
    title: "Ética y Responsabilidad Social en el Marketing",
    block: 5,
    description: "Análisis del impacto social de las decisiones comerciales, marketing sostenible, ética empresarial y cumplimiento de la normativa legal en el mercado."
  }
];
