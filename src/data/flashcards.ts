export interface Flashcard {
  id: string;
  block: number;
  question: string;
  answer: string;
  hint: string;
  category: string;
}

export const flashcards: Flashcard[] = [
  // BLOQUE 1: Fundamentos y Entorno de Marketing (FC001 - FC030)
  {
    id: "FC001",
    block: 1,
    question: "¿Cómo definió Philip Kotler el concepto moderno de marketing?",
    answer: "Como un proceso social y administrativo mediante el cual individuos y grupos obtienen lo que necesitan y desean a través de crear e intercambiar valor con otros.",
    hint: "Involucra intercambio social, administración y la creación mutua de valor.",
    category: "Definiciones Básicas"
  },
  {
    id: "FC002",
    block: 1,
    question: "¿Qué es una necesidad humana en el contexto del marketing?",
    answer: "Un estado de carencia percibida, que puede ser física (comida, abrigo), social (pertenencia) o de autoexpresión individual.",
    hint: "Es un estado básico de privación, no moldeado aún por la cultura.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC003",
    block: 1,
    question: "¿En qué se diferencia un deseo de una necesidad?",
    answer: "El deseo es la forma concreta que toma una necesidad al ser moldeada por la cultura, la sociedad y la personalidad individual del consumidor.",
    hint: "Si tienes hambre (necesidad), quieres comer sushi (deseo).",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC004",
    block: 1,
    question: "¿Qué es la demanda en marketing?",
    answer: "Es un deseo humano de adquirir un producto o servicio específico que está respaldado por una capacidad y voluntad de pago real.",
    hint: "Deseo más poder adquisitivo.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC005",
    block: 1,
    question: "¿Qué es la 'Miopía de Marketing' según Theodore Levitt?",
    answer: "El error de centrar la atención en el producto físico que vende la empresa en lugar de enfocarse en la necesidad del cliente que dicho producto satisface.",
    hint: "Un fabricante de ferrocarriles que olvida que su negocio real es el transporte.",
    category: "Evolución y Filosofía"
  },
  {
    id: "FC006",
    block: 1,
    question: "¿En qué consiste la orientación a la producción?",
    answer: "Filosofía que asume que los consumidores prefieren productos disponibles y asequibles, por lo que la empresa se enfoca en la eficiencia y la distribución masiva.",
    hint: "Era de la producción industrial en masa (ej. Ford T).",
    category: "Evolución y Filosofía"
  },
  {
    id: "FC007",
    block: 1,
    question: "¿Cuál es el enfoque central de la orientación al producto?",
    answer: "Sostiene que los consumidores prefieren productos de gran calidad y rendimiento, por lo que la empresa se centra en hacer mejoras continuas al producto físico.",
    hint: "Puede generar miopía si ignora si el cliente realmente necesita ese producto.",
    category: "Evolución y Filosofía"
  },
  {
    id: "FC008",
    block: 1,
    question: "¿En qué se enfoca la orientación a las ventas?",
    answer: "En realizar esfuerzos agresivos de promoción y venta a corto plazo, asumiendo que los clientes no comprarán lo suficiente si no se les presiona.",
    hint: "Típico de bienes no buscados, como seguros o enciclopedias.",
    category: "Evolución y Filosofía"
  },
  {
    id: "FC009",
    block: 1,
    question: "¿Qué define a la orientación al marketing (orientación al mercado)?",
    answer: "La filosofía de identificar primero las necesidades del mercado meta para luego entregar la satisfacción deseada con mayor eficacia que los competidores.",
    hint: "Centrado en el cliente y en la creación de relaciones duraderas.",
    category: "Evolución y Filosofía"
  },
  {
    id: "FC010",
    block: 1,
    question: "¿Qué añade la orientación de marketing social a la orientación al mercado tradicional?",
    answer: "El imperativo de buscar el bienestar a largo plazo de la sociedad y del medio ambiente, equilibrando los beneficios corporativos y los deseos del cliente.",
    hint: "Marketing sostenible y ético con enfoque de triple impacto.",
    category: "Evolución y Filosofía"
  },
  {
    id: "FC011",
    block: 1,
    question: "¿Qué es el valor percibido por el cliente?",
    answer: "La evaluación de la diferencia entre todos los beneficios obtenidos y los costos incurridos al adquirir una oferta, en comparación con los de la competencia.",
    hint: "Relación costo-beneficio subjetiva evaluada por el comprador.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC012",
    block: 1,
    question: "¿Cómo se alcanza la satisfacción del cliente?",
    answer: "Cuando el rendimiento percibido del producto coincide o supera las expectativas previas que el cliente tenía antes de realizar la compra.",
    hint: "Depende del contraste entre expectativa y experiencia real.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC013",
    block: 1,
    question: "¿Qué es un intercambio comercial y qué condiciones requiere?",
    answer: "El acto de obtener un objeto deseado ofreciendo algo a cambio. Requiere al menos dos partes, comunicación, libertad de aceptar/rechazar y entrega de valor.",
    hint: "Es el núcleo operativo del marketing.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC014",
    block: 1,
    question: "¿Qué diferencia a una transacción de un intercambio?",
    answer: "La transacción es la unidad de medida cuantitativa del intercambio, que formaliza el acuerdo mediante un contrato, factura, fecha y lugar específicos.",
    hint: "El intercambio es el proceso general; la transacción es el evento mercantil.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC015",
    block: 1,
    question: "¿Cómo se define el 'mercado' en términos de marketing?",
    answer: "Como el conjunto de compradores reales y potenciales de un producto o servicio, quienes comparten una necesidad y tienen capacidad de intercambio.",
    hint: "No es solo un espacio físico, sino el colectivo de clientes.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC016",
    block: 1,
    question: "¿Qué es el microentorno de una empresa?",
    answer: "Son los actores cercanos e internos a la organización que afectan su capacidad de servir al mercado: clientes, proveedores, competidores, intermediarios y públicos.",
    hint: "Variables con las que la empresa interactúa directamente de forma diaria.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC017",
    block: 1,
    question: "¿Quiénes son los intermediarios de marketing?",
    answer: "Empresas externas que ayudan a la organización a promover, vender y distribuir sus productos a los consumidores finales (minoristas, mayoristas, agencias de logística).",
    hint: "Facilitan el flujo de bienes en el canal de distribución.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC018",
    block: 1,
    question: "¿Qué es el macroentorno de una empresa?",
    answer: "Son las grandes fuerzas externas y generales que afectan no solo a la empresa sino a todo su microentorno, y que son incontrolables para la organización.",
    hint: "Se analiza mediante el marco PESTEL.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC019",
    block: 1,
    question: "¿Qué variable del macroentorno estudia el tamaño, densidad, ubicación y tasas de crecimiento de la población?",
    answer: "El entorno demográfico.",
    hint: "Estudia las características de las poblaciones humanas.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC020",
    block: 1,
    question: "¿Qué factores analiza el entorno económico de una empresa?",
    answer: "Variables de poder adquisitivo y patrones de gasto del consumidor, como la inflación, el desempleo, las tasas de interés y los niveles de renta.",
    hint: "Afecta la capacidad del consumidor para gastar su dinero.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC021",
    block: 1,
    question: "¿Qué estudia el entorno sociocultural del macroentorno?",
    answer: "Las instituciones, valores básicos, percepciones, preferencias y comportamientos comunes de los individuos que conforman una sociedad determinada.",
    hint: "Cambios en estilos de vida, rol familiar, hábitos saludables.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC022",
    block: 1,
    question: "¿Qué comprende el entorno político-legal del macroentorno?",
    answer: "Las leyes, agencias gubernamentales y grupos de presión que influyen y limitan las actividades comerciales y a los individuos de una sociedad.",
    hint: "Leyes antimonopolio, de protección al consumidor y normativas fiscales.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC023",
    block: 1,
    question: "¿Qué abarca el entorno tecnológico?",
    answer: "Fuerzas que crean nuevas tecnologías, productos y oportunidades de mercado, acelerando la obsolescencia de los productos existentes.",
    hint: "Es quizás la fuerza más drástica en la actualidad (IA, internet).",
    category: "Entorno de Marketing"
  },
  {
    id: "FC024",
    block: 1,
    question: "¿A qué se refiere el entorno natural o ecológico?",
    answer: "Los recursos naturales necesarios para la producción comercial o que se ven afectados por las actividades de marketing (escasez de materias primas, contaminación).",
    hint: "Impulsa la necesidad del desarrollo sostenible.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC025",
    block: 1,
    question: "¿Qué es un público de interés en el microentorno?",
    answer: "Cualquier grupo que tiene un interés real o potencial en la capacidad de la empresa para alcanzar sus objetivos (ej. medios de comunicación, bancos, comunidades locales).",
    hint: "Grupos ajenos al canal comercial pero que ejercen presión sobre la empresa.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC026",
    block: 1,
    question: "¿En qué consiste la 'desintermediación' digital?",
    answer: "En la eliminación de intermediarios tradicionales del canal gracias a las tecnologías de internet, conectando directamente al productor con el cliente.",
    hint: "Comprar boletos de avión directo en la web de la aerolínea y no en agencia.",
    category: "Entorno de Marketing"
  },
  {
    id: "FC027",
    block: 1,
    question: "¿Qué es el 'greenwashing' o lavado verde?",
    answer: "Una práctica deshonesta donde una empresa promociona falsamente un producto o su marca como ecológica o sostenible, ocultando su impacto ambiental real.",
    hint: "Abuso de colores verdes y términos 'eco' sin certificación real.",
    category: "Ética y Entorno"
  },
  {
    id: "FC028",
    block: 1,
    question: "¿Qué es la soberanía del consumidor?",
    answer: "La idea de que los consumidores son los que determinan qué bienes y servicios se producen en función de sus elecciones de compra en el mercado libre.",
    hint: "El cliente vota con su billetera.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC029",
    block: 1,
    question: "¿Cuál es el objetivo principal del marketing de relaciones?",
    answer: "Construir relaciones duraderas y mutuamente beneficiosas con clientes clave, distribuidores y proveedores para retener su lealtad a largo plazo.",
    hint: "Es más barato retener a un cliente que conseguir uno nuevo.",
    category: "Conceptos Fundamentales"
  },
  {
    id: "FC030",
    block: 1,
    question: "¿Qué es el mercado B2B (Business-to-Business)?",
    answer: "Aquel donde las transacciones comerciales ocurren exclusivamente entre empresas, adquiriendo bienes para usarlos en sus propios procesos de producción.",
    hint: "Mercado industrial u organizacional.",
    category: "Conceptos Fundamentales"
  },

  // BLOQUE 2: Investigación de Mercados, Consumidor y Segmentación (STP) (FC031 - FC060)
  {
    id: "FC031",
    block: 2,
    question: "¿Qué es el Sistema de Información de Marketing (SIM)?",
    answer: "Es la estructura de personas, equipos y procedimientos diseñada para recopilar, clasificar, analizar, evaluar y distribuir información comercial útil para tomar decisiones.",
    hint: "Flujo continuo de datos internos y externos de la organización.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC032",
    block: 2,
    question: "¿Cuáles son las 4 etapas básicas de la Investigación de Mercados?",
    answer: "1. Definir el problema y objetivos. 2. Desarrollar el plan de investigación. 3. Implementar el plan y analizar los datos. 4. Interpretar e informar los resultados.",
    hint: "Comienza con una pregunta de negocio y termina con un reporte gerencial.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC033",
    block: 2,
    question: "¿Qué es la investigación exploratoria?",
    answer: "Investigación preliminar que busca obtener información cualitativa básica sobre un problema poco definido, ayudando a formular hipótesis.",
    hint: "Utiliza técnicas abiertas como focus groups o entrevistas a profundidad.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC034",
    block: 2,
    question: "¿Qué caracteriza a la investigación descriptiva?",
    answer: "Aquella diseñada para definir situaciones de mercado, perfiles de consumidores o comportamientos mediante la recolección de datos cuantitativos estandarizados.",
    hint: "Se apoya masivamente en la aplicación de encuestas estructuradas.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC035",
    block: 2,
    question: "¿Qué es la investigación causal?",
    answer: "Investigación orientada a probar hipótesis sobre relaciones causa-efecto en variables de marketing, aislando otros factores externos.",
    hint: "Suele recurrir al uso de experimentos de campo o laboratorio.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC036",
    block: 2,
    question: "¿Qué diferencia hay entre datos primarios y datos secundarios?",
    answer: "Los datos primarios se recopilan por primera vez para el propósito de la investigación actual; los secundarios ya existen porque fueron recopilados previamente para otro fin.",
    hint: "Secundarios: bases de datos, informes del INEGI; Primarios: tu encuesta de hoy.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC037",
    block: 2,
    question: "¿Qué es un Focus Group o sesión de grupo?",
    answer: "Técnica de investigación cualitativa donde un moderador dirige una entrevista semiestructurada de discusión con un grupo de 6 a 10 personas sobre un producto o marca.",
    hint: "Indaga motivaciones e ideas espontáneas en interacción grupal.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC038",
    block: 2,
    question: "¿Qué es la investigación etnográfica en marketing?",
    answer: "Método cualitativo que consiste en enviar observadores capacitados a convivir y ver a los consumidores en sus entornos naturales y reales de consumo.",
    hint: "Observar al comprador directo en su hogar o tienda sin alterar su rutina.",
    category: "Investigación de Mercados"
  },
  {
    id: "FC039",
    block: 2,
    question: "¿Qué representa la 'Caja Negra' del modelo de comportamiento del consumidor?",
    answer: "Es la mente inconsciente y cognitiva del comprador, donde interactúan las características del consumidor y el proceso de decisión ante estímulos externos.",
    hint: "El espacio inaccesible que procesa el estímulo antes de dar una respuesta de compra.",
    category: "Comportamiento del Consumidor"
  },
  {
    id: "FC040",
    block: 2,
    question: "¿Qué son los grupos de referencia de un consumidor?",
    answer: "Grupos sociales que sirven como punto de comparación directa o indirecta para moldear las actitudes o el comportamiento de una persona.",
    hint: "Amigos, celebridades o líderes de opinión a quienes el individuo emula.",
    category: "Comportamiento del Consumidor"
  },
  {
    id: "FC041",
    block: 2,
    question: "¿Qué es la percepción selectiva en el comportamiento del consumidor?",
    answer: "El proceso mediante el cual los individuos filtran, organizan e interpretan la información externa, reteniendo solo lo que se alinea con sus creencias.",
    hint: "Ignorar la publicidad de marcas competidoras y fijarse solo en la favorita.",
    category: "Comportamiento del Consumidor"
  },
  {
    id: "FC042",
    block: 2,
    question: "¿Cuáles son las 5 etapas del proceso de decisión de compra del consumidor final?",
    answer: "1. Reconocimiento de la necesidad. 2. Búsqueda de información. 3. Evaluación de alternativas. 4. Decisión de compra. 5. Comportamiento poscompra.",
    hint: "Comienza cuando se detecta una carencia y termina evaluando la satisfacción.",
    category: "Comportamiento del Consumidor"
  },
  {
    id: "FC043",
    block: 2,
    question: "¿Qué es la disonancia cognoscitiva?",
    answer: "La molestia o conflicto mental que experimenta el comprador después de la compra debido a dudas sobre si tomó la decisión correcta.",
    hint: "Arrepentimiento del comprador o tensión poscompra.",
    category: "Comportamiento del Consumidor"
  },
  {
    id: "FC044",
    block: 2,
    question: "¿En qué consiste el proceso STP del marketing estratégico?",
    answer: "Segmentación de mercado (Segmentation), Selección de mercado meta (Targeting) y Posicionamiento en el mercado (Positioning).",
    hint: "Dividir el mercado, elegir a quién venderle y definir tu lugar mental.",
    category: "Estrategia STP"
  },
  {
    id: "FC045",
    block: 2,
    question: "¿Qué es la segmentación de mercado?",
    answer: "Dividir un mercado total y heterogéneo en grupos más pequeños de compradores con necesidades, características o comportamientos homogéneos.",
    hint: "Crear subgrupos similares internamente pero distintos entre sí.",
    category: "Estrategia STP"
  },
  {
    id: "FC046",
    block: 2,
    question: "¿Qué criterios definen a la segmentación geográfica?",
    answer: "Dividir el mercado en unidades geográficas como naciones, regiones, estados, municipios, ciudades o vecindarios.",
    hint: "Basado en la ubicación física de las personas.",
    category: "Estrategia STP"
  },
  {
    id: "FC047",
    block: 2,
    question: "¿Qué variables se analizan en la segmentación demográfica?",
    answer: "Edad, género, tamaño de la familia, ciclo de vida familiar, ingreso, ocupación, educación, religión y nacionalidad.",
    hint: "Estadísticas vitales y medibles de la población.",
    category: "Estrategia STP"
  },
  {
    id: "FC048",
    block: 2,
    question: "¿Qué criterios se utilizan en la segmentación psicográfica?",
    answer: "Clase social, estilo de vida, valores personales y rasgos de personalidad del consumidor.",
    hint: "Va más allá del ingreso; analiza cómo piensa y actúa el individuo.",
    category: "Estrategia STP"
  },
  {
    id: "FC049",
    block: 2,
    question: "¿Qué criterios utiliza la segmentación conductual?",
    answer: "Conocimientos, actitudes, usos o respuestas de los consumidores hacia un producto (ej. frecuencia de uso, beneficios buscados, lealtad a la marca).",
    hint: "Basado en el comportamiento directo del cliente frente al producto.",
    category: "Estrategia STP"
  },
  {
    id: "FC050",
    block: 2,
    question: "¿Qué requisitos debe cumplir un segmento de mercado para ser útil?",
    answer: "Debe ser medible, accesible, sustancial (lo bastante grande o rentable), diferenciable y aplicable (con capacidad de ser atendido).",
    hint: "Criterios para validar la segmentación.",
    category: "Estrategia STP"
  },
  {
    id: "FC051",
    block: 2,
    question: "¿Qué es el marketing no diferenciado (masivo)?",
    answer: "Estrategia de cobertura en la que una empresa ignora las diferencias de los segmentos e introduce una única oferta para todo el mercado.",
    hint: "Bajo coste, pero riesgo de perder frente a ofertas especializadas.",
    category: "Estrategia STP"
  },
  {
    id: "FC052",
    block: 2,
    question: "¿Qué es el marketing diferenciado (segmentado)?",
    answer: "Estrategia en la que la empresa decide dirigirse a varios segmentos de mercado y diseña ofertas individuales y campañas de marketing específicas para cada uno.",
    hint: "Ej. Coca-Cola con refrescos regulares, Light, Zero y de sabores.",
    category: "Estrategia STP"
  },
  {
    id: "FC053",
    block: 2,
    question: "¿Qué es el marketing concentrado (de nicho)?",
    answer: "Estrategia en la que una empresa busca capturar una participación grande de uno o unos pocos segmentos o nichos pequeños.",
    hint: "Muy común en empresas pequeñas o startups con recursos limitados.",
    category: "Estrategia STP"
  },
  {
    id: "FC054",
    block: 2,
    question: "¿Qué es el micromarketing?",
    answer: "La práctica de personalizar productos y programas de marketing para adaptarlos a los gustos de individuos (marketing individual) o ubicaciones específicas (marketing local).",
    hint: "La máxima segmentación posible (segmento de uno).",
    category: "Estrategia STP"
  },
  {
    id: "FC055",
    block: 2,
    question: "¿Qué es una propuesta de valor?",
    answer: "El conjunto completo de beneficios o valores que una marca promete entregar a los consumidores para satisfacer sus necesidades.",
    hint: "La razón por la cual el cliente debería elegirte en vez de a la competencia.",
    category: "Estrategia STP"
  },
  {
    id: "FC056",
    block: 2,
    question: "¿Cómo se define el posicionamiento en el mercado?",
    answer: "Es el lugar que ocupa el producto en la mente de los consumidores en relación con los productos de la competencia, basándose en percepciones y atributos.",
    hint: "El espacio mental de la marca (ej. Volvo = Seguridad).",
    category: "Estrategia STP"
  },
  {
    id: "FC057",
    block: 2,
    question: "¿Qué es una ventaja competitiva?",
    answer: "Una ventaja sobre los competidores que se obtiene al ofrecer a los consumidores mayor valor, ya sea mediante precios más bajos o mayores beneficios.",
    hint: "Es el fundamento para construir la diferenciación del posicionamiento.",
    category: "Estrategia STP"
  },
  {
    id: "FC058",
    block: 2,
    question: "¿Qué es un mapa de posicionamiento (mapa perceptual)?",
    answer: "Herramienta visual que representa la ubicación de las marcas competidoras en la mente de los consumidores según dos ejes clave de comparación.",
    hint: "Ejemplo: Calidad vs. Precio.",
    category: "Estrategia STP"
  },
  {
    id: "FC059",
    block: 2,
    question: "¿Qué es la subsegmentación?",
    answer: "Error estratégico que consiste en crear segmentos demasiado pequeños, incrementando los costes operativos de la empresa sin suficiente justificación económica.",
    hint: "Hipersegmentación ineficiente.",
    category: "Estrategia STP"
  },
  {
    id: "FC060",
    block: 2,
    question: "¿Qué es el muestreo probabilístico?",
    answer: "Tipo de muestreo en investigación de mercados donde cada elemento de la población tiene una probabilidad conocida y distinta de cero de ser seleccionado.",
    hint: "Garantiza representatividad estadística y permite calcular el margen de error.",
    category: "Investigación de Mercados"
  },

  // BLOQUE 3: Decisiones de Producto, Marca y Estrategias de Precio (FC061 - FC090)
  {
    id: "FC061",
    block: 3,
    question: "¿Cuáles son los tres niveles del producto?",
    answer: "1. Producto Básico (beneficio esencial). 2. Producto Real (marca, calidad, diseño, empaque). 3. Producto Aumentado (servicios posventa, garantía, entrega).",
    hint: "Va desde el núcleo de la necesidad hasta los servicios adicionales periféricos.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC062",
    block: 3,
    question: "¿Qué es un bien de conveniencia o compra habitual?",
    answer: "Un producto de consumo que el cliente suele adquirir con frecuencia, de forma inmediata y con un mínimo esfuerzo de comparación (ej. pan, refrescos).",
    hint: "Bienes de compra diaria y bajo costo.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC063",
    block: 3,
    question: "¿Qué es un bien de compra comparada o de selección?",
    answer: "Producto de consumo que el cliente adquiere con menos frecuencia y compara en idoneidad, calidad, precio y estilo (ej. ropa de marca, electrodomésticos).",
    hint: "Requiere tiempo para evaluar y comparar alternativas en tiendas.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC064",
    block: 3,
    question: "¿Qué es un bien de especialidad?",
    answer: "Producto de consumo con características únicas o identificación de marca por el cual un grupo de compradores está dispuesto a hacer un esfuerzo de compra especial.",
    hint: "Coches de lujo, equipo fotográfico profesional (lealtad extrema sin comparativa).",
    category: "Decisiones de Producto"
  },
  {
    id: "FC065",
    block: 3,
    question: "¿Qué son los bienes no buscados?",
    answer: "Productos de consumo que el consumidor no conoce, o bien que conoce pero de forma normal no piensa comprar (ej. lápidas funerarias, donaciones de sangre).",
    hint: "Requieren una fuerte labor de ventas y publicidad agresiva.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC066",
    block: 3,
    question: "¿Qué es el Brand Equity (valor de marca)?",
    answer: "El valor comercial intangible derivado de la reputación y el conocimiento de una marca, que le permite vender productos a precios premium y retener clientes.",
    hint: "Es el poder de atracción de un nombre de marca sobre los consumidores.",
    category: "Gestión de Marca"
  },
  {
    id: "FC067",
    block: 3,
    question: "¿Qué es una extensión de línea?",
    answer: "Estrategia de marca consistente en introducir elementos adicionales en una categoría de productos existente bajo la misma marca (nuevos sabores, tamaños o colores).",
    hint: "Ej. Lanzar Coca-Cola sabor a Vainilla en lata pequeña.",
    category: "Gestión de Marca"
  },
  {
    id: "FC068",
    block: 3,
    question: "¿Qué es una extensión de marca?",
    answer: "Uso de una marca de éxito ya establecida para lanzar un producto nuevo en una categoría de producto completamente diferente.",
    hint: "Ej. Bic (conocido por bolígrafos) lanzando rasuradoras desechables.",
    category: "Gestión de Marca"
  },
  {
    id: "FC069",
    block: 3,
    question: "¿Cuáles son las 5 etapas del Ciclo de Vida del Producto (CVP)?",
    answer: "1. Desarrollo del producto. 2. Introducción. 3. Crecimiento. 4. Madurez. 5. Declive.",
    hint: "Curva que modela el volumen de ventas y beneficios históricos de una oferta.",
    category: "Ciclo de Vida"
  },
  {
    id: "FC070",
    block: 3,
    question: "¿Qué caracteriza a la etapa de madurez en el Ciclo de Vida del Producto?",
    answer: "Ventas máximas pero estables, alta competencia en precios, saturación del mercado y necesidad de defender la cuota de mercado mediante promociones.",
    hint: "Fase más larga del ciclo, donde se maximiza la rentabilidad financiera.",
    category: "Ciclo de Vida"
  },
  {
    id: "FC071",
    block: 3,
    question: "¿Cuáles son las 8 etapas del proceso de desarrollo de nuevos productos?",
    answer: "1. Generación de ideas. 2. Filtrado. 3. Desarrollo y prueba del concepto. 4. Estrategia de marketing. 5. Análisis de negocio. 6. Desarrollo del producto. 7. Mercado de prueba. 8. Comercialización.",
    hint: "Proceso sistemático para transformar una idea abstracta en un bien comercial.",
    category: "Ciclo de Vida"
  },
  {
    id: "FC072",
    block: 3,
    question: "¿Qué es el 'mercado de prueba'?",
    answer: "Fase del desarrollo de nuevos productos en la que el producto y su programa de marketing propuesto se introducen en entornos de mercado reales.",
    hint: "Venta piloto a escala reducida en una ciudad de control.",
    category: "Ciclo de Vida"
  },
  {
    id: "FC073",
    block: 3,
    question: "¿Qué es la obsolescencia programada?",
    answer: "La acción deliberada del fabricante para acortar artificialmente la vida útil de un producto con el fin de forzar la recompra por parte del consumidor.",
    hint: "Un dilema ético crítico en la durabilidad del producto.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC074",
    block: 3,
    question: "¿Qué es el precio desde el punto de vista del marketing?",
    answer: "La cantidad de dinero que se cobra por un producto o servicio, o la suma de valores que los consumidores intercambian por el beneficio de tener o usar algo.",
    hint: "La única variable del marketing mix que genera ingresos y no costes.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC075",
    block: 3,
    question: "¿Qué son los precios basados en costes?",
    answer: "Método que fija los precios sumando un margen de beneficio estándar a los costes totales de producción, distribución y comercialización del producto.",
    hint: "Orientado al interior de la empresa, no al valor que percibe el cliente.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC076",
    block: 3,
    question: "¿Qué son los precios basados en el valor percibido por el cliente?",
    answer: "Método de fijación que utiliza las percepciones de valor del comprador como clave y no el coste que tiene para el vendedor fabricar el producto.",
    hint: "Establece el precio máximo aceptable en el mercado meta.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC077",
    block: 3,
    question: "¿Qué es el descremado de precios (skimming)?",
    answer: "Fijar un precio inicial elevado para un producto nuevo con el fin de captar los ingresos máximos de las capas del mercado dispuestas a pagar esa tarifa.",
    hint: "Estrategia para capturar el excedente del consumidor inicial (ej. tecnología alta).",
    category: "Decisiones de Precio"
  },
  {
    id: "FC078",
    block: 3,
    question: "¿Qué es la penetración de precios?",
    answer: "Fijar un precio inicial muy bajo para un producto nuevo con el fin de atraer rápidamente a un gran número de compradores y ganar cuota de mercado.",
    hint: "Busca generar volumen de ventas e inhibir competidores desde el inicio.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC079",
    block: 3,
    question: "¿Qué es el punto de equilibrio o umbral de rentabilidad?",
    answer: "El volumen de ventas en unidades donde los ingresos totales de la empresa igualan exactamente a sus costes totales (fijos y variables).",
    hint: "El nivel de producción donde no hay ni ganancias ni pérdidas.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC080",
    block: 3,
    question: "¿Qué es la elasticidad precio de la demanda?",
    answer: "Una medida de la sensibilidad de la demanda de un producto ante los cambios realizados en su precio.",
    hint: "Si un cambio de precio altera mucho la demanda, es elástica; si no, es inelástica.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC081",
    block: 3,
    question: "¿En qué consiste la estrategia de precios de prestigio?",
    answer: "Fijar precios altos constantes para sugerir estatus, calidad superior o exclusividad en la mente del consumidor.",
    hint: "Estrategia común para bienes de lujo o de marcas aspiracionales.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC082",
    block: 3,
    question: "¿Qué es el cobro por producto cautivo?",
    answer: "Fijar precios bajos al producto principal y precios elevados a los consumibles necesarios para que funcione (ej. impresoras y cartuchos de tinta).",
    hint: "Estrategia para productos que deben usarse conjuntamente.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC083",
    block: 3,
    question: "¿Qué es la discriminación de precios o precios segmentados?",
    answer: "La práctica de vender el mismo producto a precios diferentes según el segmento de clientes, ubicación geográfica o momento del tiempo, sin costes proporcionales.",
    hint: "Descuento a estudiantes en cines o tarifas aéreas según horario.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC084",
    block: 3,
    question: "¿Qué es un precio de referencia interno del consumidor?",
    answer: "El precio que los compradores llevan en su mente y al que recurren para comparar cuando examinan un producto en el punto de venta.",
    hint: "Estándar mental de lo que debería costar un producto común.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC085",
    block: 3,
    question: "¿En qué consiste la fijación de precios psicológicos?",
    answer: "Estrategia de precios que apela a las emociones del cliente y no solo a la lógica matemática (ej. fijar precios terminados en impares como $9.99).",
    hint: "Hace que el precio parezca menor por un efecto de lectura perceptual.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC086",
    block: 3,
    question: "¿Qué es el 'descuento comercial o funcional'?",
    answer: "Reducción de precio que ofrece el fabricante a los miembros del canal de distribución a cambio de que realicen ciertas funciones como almacenar o vender.",
    hint: "Incentivo dentro del canal mayorista o minorista.",
    category: "Decisiones de Precio"
  },
  {
    id: "FC087",
    block: 3,
    question: "¿Qué es la 'canibalización de productos'?",
    answer: "La pérdida en ventas de un producto de la empresa debido a la introducción de un producto nuevo y similar de la misma marca.",
    hint: "Competencia interna autodestructiva dentro de tu cartera.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC088",
    block: 3,
    question: "¿Qué es la amplitud de la cartera de productos?",
    answer: "El número total de líneas de producto distintas que fabrica o comercializa una misma empresa.",
    hint: "Variedad de categorías de producto de la empresa.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC089",
    block: 3,
    question: "¿Qué es la profundidad de una línea de productos?",
    answer: "El número de versiones, variaciones de tamaño, colores o modelos que se ofrecen dentro de cada línea de productos individual.",
    hint: "Diversidad de opciones específicas dentro de una misma categoría.",
    category: "Decisiones de Producto"
  },
  {
    id: "FC090",
    block: 3,
    question: "¿Qué es el empaque secundario?",
    answer: "El contenedor o envoltura que protege al empaque primario del producto y que se desecha una vez que el producto se va a utilizar.",
    hint: "Ej. La caja de cartón que contiene al tubo de pasta de dientes.",
    category: "Decisiones de Producto"
  },

  // BLOQUE 4: Canales de Distribución, Logística y Mezcla de Comunicación (CIM) (FC091 - FC120)
  {
    id: "FC091",
    block: 4,
    question: "¿Qué es un canal de distribución comercial?",
    answer: "El conjunto de organizaciones interdependientes que facilitan el traslado del producto desde el fabricante hasta el consumidor final.",
    hint: "Formado por intermediarios como mayoristas, minoristas y agentes.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC092",
    block: 4,
    question: "¿Qué diferencia a un canal directo de un canal indirecto?",
    answer: "El canal directo no tiene intermediarios; el fabricante vende de forma directa al consumidor. El canal indirecto incluye uno o más niveles de intermediarios.",
    hint: "Canal directo: una sastrería a medida; canal indirecto: supermercado.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC093",
    block: 4,
    question: "¿Qué es la distribución intensiva?",
    answer: "Estrategia que busca abastecer el producto en la mayor cantidad posible de puntos de venta disponibles en el mercado.",
    hint: "Común para bienes de consumo masivo o de conveniencia (chicles, refrescos).",
    category: "Distribución y Plaza"
  },
  {
    id: "FC094",
    block: 4,
    question: "¿Qué es la distribución selectiva?",
    answer: "Estrategia consistente en vender el producto a través de un grupo limitado de distribuidores seleccionados con criterios específicos.",
    hint: "Bienes de compra comparada como electrodomésticos u ordenadores.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC095",
    block: 4,
    question: "¿Qué es la distribución exclusiva?",
    answer: "Conceder a un único distribuidor el derecho exclusivo de vender los productos de la empresa en una zona geográfica determinada.",
    hint: "Bienes de lujo, alta costura o automóviles de gama premium.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC096",
    block: 4,
    question: "¿Qué es un canal de marketing vertical (CMV)?",
    answer: "Estructura de canal donde productores, mayoristas y minoristas actúan como un sistema unificado, coordinados por propiedad, contrato o poder dominante.",
    hint: "Busca eliminar los conflictos tradicionales del canal y ahorrar costes.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC097",
    block: 4,
    question: "¿Qué es el conflicto horizontal de canal?",
    answer: "Desacuerdo u hostilidad que ocurre entre intermediarios que operan en el mismo nivel jerárquico dentro del canal de distribución.",
    hint: "Ej. Conflicto entre dos concesionarios de coches Ford de la misma ciudad.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC098",
    block: 4,
    question: "¿Qué es el conflicto vertical de canal?",
    answer: "Desacuerdo o disputa comercial entre diferentes niveles jerárquicos del mismo canal de distribución.",
    hint: "Ej. Conflicto de precios entre un fabricante y su distribuidor mayorista.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC099",
    block: 4,
    question: "¿Qué es el trade marketing?",
    answer: "Estrategias y acciones promocionales enfocadas en incentivar a los intermediarios del canal de distribución para que promuevan el producto frente a otros.",
    hint: "Marketing dirigido del fabricante hacia el minorista/distribuidor.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC100",
    block: 4,
    question: "¿Qué es la logística de marketing (distribución física)?",
    answer: "Planificación, ejecución y control del flujo físico de materiales y bienes terminados desde los puntos de origen hasta los de consumo para satisfacer las necesidades del cliente.",
    hint: "Gestión de almacenamiento, inventario, transporte y procesamiento de pedidos.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC101",
    block: 4,
    question: "¿Qué es la Mezcla de Comunicación Integrada de Marketing (CIM)?",
    answer: "Integración coordinada de todos los canales de comunicación de la empresa para transmitir un mensaje de marca coherente y claro a los públicos objetivo.",
    hint: "Busca sinergia entre publicidad, promoción, RRPP, ventas y marketing directo.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC102",
    block: 4,
    question: "¿Cómo se define la 'Publicidad' dentro de la CIM?",
    answer: "Cualquier forma no personal y pagada de presentación y promoción de ideas, bienes o servicios por parte de un patrocinador identificado.",
    hint: "Mensajes masivos a través de medios tradicionales y digitales pagados.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC103",
    block: 4,
    question: "¿Cuál es el objetivo principal de la 'Promoción de Ventas'?",
    answer: "Ofrecer incentivos económicos o materiales a corto plazo para estimular la compra inmediata de un producto o servicio por parte de los clientes.",
    hint: "Ej. Cupones de descuento, muestras gratuitas, ofertas 2x1.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC104",
    block: 4,
    question: "¿Qué son las 'Relaciones Públicas' (RRPP)?",
    answer: "Acciones para forjar buenas relaciones con los públicos clave mediante una publicidad favorable, la creación de una buena imagen y el manejo de rumores desfavorables.",
    hint: "Actividades no pagadas directamente a los medios, buscando cobertura orgánica.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC105",
    block: 4,
    question: "¿Qué caracteriza a la 'Venta Personal'?",
    answer: "La interacción directa cara a cara entre el vendedor y el prospecto para realizar ventas de alta implicación y construir relaciones interpersonales fuertes.",
    hint: "Herramienta flexible y costosa, típica del mercado industrial B2B.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC106",
    block: 4,
    question: "¿Qué es el 'Marketing Directo'?",
    answer: "Canal que busca una respuesta inmediata de consumidores individuales seleccionados, utilizando medios como correo directo, telemarketing o email personalizado.",
    hint: "Comunicación bidireccional y medible, orientada a una base de datos.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC107",
    block: 4,
    question: "¿En qué consiste la estrategia de comunicación 'Push' (Empuje)?",
    answer: "Dirigir los esfuerzos promocionales hacia los intermediarios del canal (mayoristas/minoristas) para que estos exhiban y empujen el producto hacia el usuario final.",
    hint: "El fabricante se apoya en los incentivos del canal para vender.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC108",
    block: 4,
    question: "¿En qué consiste la estrategia de comunicación 'Pull' (Atracción)?",
    answer: "Dirigir la promoción fuertemente hacia los consumidores finales para crear demanda, de modo que estos exijan el producto a los distribuidores.",
    hint: "Crear demanda desde la base del mercado (ej. anuncios masivos en TV).",
    category: "Comunicación Comercial"
  },
  {
    id: "FC109",
    block: 4,
    question: "¿Qué es el material POP (Point of Purchase)?",
    answer: "Artículos promocionales colocados directamente en el punto de compra física para captar la atención de los clientes e impulsar la compra de último minuto.",
    hint: "Exhibidores de cartón, carteles y stoppers en los pasillos de las tiendas.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC110",
    block: 4,
    question: "¿Qué es el patrocinio de marca?",
    answer: "Financiar un evento cultural, deportivo o social a cambio de asociar el nombre de la marca con los valores del evento ante los asistentes y la prensa.",
    hint: "Herramienta clave de Relaciones Públicas.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC111",
    block: 4,
    question: "¿Qué es el 'Publicity'?",
    answer: "La generación de noticias y comentarios gratuitos sobre la empresa en los medios de comunicación de forma orgánica y no patrocinada.",
    hint: "Es parte de las relaciones públicas con medios; publicidad sin pagar por el espacio.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC112",
    block: 4,
    question: "¿Qué es la distribución multicanal?",
    answer: "Estrategia donde una empresa establece dos o más canales de distribución para llegar a uno o más segmentos de clientes.",
    hint: "Vender en tienda física física propia, e-commerce y en supermercados asociados.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC113",
    block: 4,
    question: "¿Qué diferencia a la distribución multicanal de la omnicanalidad?",
    answer: "La multicanalidad ofrece varios canales independientes. La omnicanalidad integra todos esos canales de forma fluida para que la experiencia del cliente sea idéntica.",
    hint: "Consistencia de precios, inventario y atención en cualquier medio.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC114",
    block: 4,
    question: "¿Qué es el 'merchandising'?",
    answer: "Técnicas de exhibición, iluminación, música, colocación e incentivos en el punto de venta para hacer más atractivo el producto al comprador físico.",
    hint: "Gestión comercial directa del espacio de venta al por menor.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC115",
    block: 4,
    question: "¿Qué es el 'minorista de autoservicio'?",
    answer: "Tipo de minorista donde los compradores realizan su propio proceso de selección, comparación y cobro, reduciendo costes de dependientes (ej. supermercados).",
    hint: "El cliente hace la mayor parte del proceso físico por sí mismo.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC116",
    block: 4,
    question: "¿Qué es un canal de marketing horizontal?",
    answer: "Acuerdo en el que dos o más empresas del mismo nivel del canal se unen para aprovechar una nueva oportunidad de marketing (ej. McDonald's dentro de Walmart).",
    hint: "Alianza entre comercios en un mismo nivel para atraer más flujos de clientes.",
    category: "Distribución y Plaza"
  },
  {
    id: "FC117",
    block: 4,
    question: "¿Qué es la 'franquicia'?",
    answer: "Asociación contractual entre un franquiciador y un franquiciado, en la que este compra el derecho de operar un negocio bajo el formato y marca del franquiciador.",
    hint: "Canal CMV contractual muy común en comida rápida (ej. Subway).",
    category: "Distribución y Plaza"
  },
  {
    id: "FC118",
    block: 4,
    question: "¿Qué es la publicidad de recordatorio?",
    answer: "Campaña publicitaria diseñada para mantener la marca fresca en la mente de los consumidores en etapas avanzadas de madurez de producto.",
    hint: "Común en marcas consolidadas como Coca-Cola en época navideña.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC119",
    block: 4,
    question: "¿Qué es la publicidad persuasiva?",
    answer: "Campaña orientada a convencer al consumidor de que el producto de la marca es su mejor opción frente a los competidores, buscando generar preferencia y compra inmediata.",
    hint: "Suele usarse en la fase de crecimiento de la competencia de productos.",
    category: "Comunicación Comercial"
  },
  {
    id: "FC120",
    block: 4,
    question: "¿Qué es la publicidad informativa?",
    answer: "Campaña destinada a dar a conocer un nuevo producto en el mercado, explicando sus características, funcionamiento o beneficios iniciales.",
    hint: "Típica de la fase de introducción del ciclo de vida.",
    category: "Comunicación Comercial"
  },

  // BLOQUE 5: Planificación Estratégica, Métricas, Marketing Digital y Ética (FC121 - FC150)
  {
    id: "FC121",
    block: 5,
    question: "¿Qué es la Planificación Estratégica de Marketing?",
    answer: "El proceso de ajustar los objetivos, recursos y capacidades de la empresa a las cambiantes oportunidades del mercado externo a largo plazo.",
    hint: "Define la ruta macro de la organización antes del marketing operativo.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC122",
    block: 5,
    question: "¿Qué es un Análisis FODA (o DAFO)?",
    answer: "Evaluación diagnóstica que analiza las variables internas (Fortalezas, Debilidades) y externas (Oportunidades, Amenazas) de una organización.",
    hint: "Matriz que cruza el análisis interno y el entorno externo.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC123",
    block: 5,
    question: "¿Qué significa que un objetivo de marketing sea 'SMART'?",
    answer: "Específico (Specific), Medible (Measurable), Alcanzable (Achievable), Relevante (Relevant) y Acotado en el Tiempo (Time-bound).",
    hint: "Requisitos de redacción técnica de objetivos de gestión.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC124",
    block: 5,
    question: "¿Cuáles son las 4 estrategias de crecimiento según la Matriz de Ansoff?",
    answer: "1. Penetración de mercado. 2. Desarrollo de productos. 3. Desarrollo de mercados. 4. Diversificación.",
    hint: "Matriz que relaciona productos existentes/nuevos con mercados existentes/nuevos.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC125",
    block: 5,
    question: "En la Matriz de Ansoff, ¿qué es la 'Penetración de Mercado'?",
    answer: "Estrategia para crecer vendiendo más cantidad de los productos actuales en los mercados actuales de la empresa.",
    hint: "Incrementar frecuencia de compra u ofertas para capturar más cuota comercial.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC126",
    block: 5,
    question: "En la Matriz de Ansoff, ¿qué es el 'Desarrollo de Mercados'?",
    answer: "Estrategia que busca vender los productos actuales de la empresa en nuevos mercados o segmentos demográficos y geográficos.",
    hint: "Exportar el producto a otro país o vender a un segmento de edad diferente.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC127",
    block: 5,
    question: "En la Matriz de Ansoff, ¿qué es el 'Desarrollo de Productos'?",
    answer: "Estrategia que ofrece productos modificados o completamente nuevos a los mercados o segmentos actuales que ya tiene la empresa.",
    hint: "Ej. Una marca de pasta dental que introduce hilo dental y enjuague a sus clientes.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC128",
    block: 5,
    question: "En la Matriz de Ansoff, ¿qué es la 'Diversificación'?",
    answer: "Estrategia consistente en crear nuevos productos para lanzarlos en nuevos mercados fuera de la actividad tradicional de la organización.",
    hint: "Es la estrategia de crecimiento con mayor nivel de riesgo.",
    category: "Planificación Estratégica"
  },
  {
    id: "FC129",
    block: 5,
    question: "¿Qué es el ROMI (Return on Marketing Investment)?",
    answer: "Una métrica financiera que mide el rendimiento económico neto generado por las acciones de marketing en relación con los costes invertidos en ellas.",
    hint: "Fórmula: (Beneficio Neto de Marketing / Inversión de Marketing) * 100.",
    category: "Métricas y Control"
  },
  {
    id: "FC130",
    block: 5,
    question: "¿Qué es una auditoría de marketing?",
    answer: "Un examen sistemático, independiente, periódico y detallado del entorno, objetivos y estrategias de marketing de la empresa para detectar fallas y proponer mejoras.",
    hint: "Evaluación integral externa o interna del plan comercial.",
    category: "Métricas y Control"
  },
  {
    id: "FC131",
    block: 5,
    question: "¿Qué diferencia al SEO del SEM en marketing digital?",
    answer: "El SEO busca el posicionamiento orgánico gratuito en los resultados de motores de búsqueda mediante optimización. El SEM implica pagar por anuncios en dichos buscadores.",
    hint: "SEO es a largo plazo y sin coste por clic; SEM es inmediato mediante puja de pago.",
    category: "Marketing Digital"
  },
  {
    id: "FC132",
    block: 5,
    question: "¿Qué es el Inbound Marketing?",
    answer: "Metodología digital enfocada en atraer clientes aportándoles contenido útil y de alto valor en cada fase del proceso de compra, en vez de interrumpirlos.",
    hint: "Hacer que el cliente te busque orgánicamente (marketing de atracción).",
    category: "Marketing Digital"
  },
  {
    id: "FC133",
    block: 5,
    question: "¿Qué es una Landing Page o página de destino?",
    answer: "Página web diseñada específicamente con un solo objetivo de conversión, adonde se dirige el tráfico digital para capturar datos (leads) o realizar una venta.",
    hint: "Elimina distractores comunes y se enfoca en capturar un formulario.",
    category: "Marketing Digital"
  },
  {
    id: "FC134",
    block: 5,
    question: "¿Qué mide la Tasa de Conversión en e-commerce?",
    answer: "El porcentaje de visitantes de un sitio web que realizan una acción deseada (ej. completar una compra o suscribirse a un boletín) frente al total de visitas.",
    hint: "Refleja la efectividad del embudo de ventas digital.",
    category: "Marketing Digital"
  },
  {
    id: "FC135",
    block: 5,
    question: "¿Qué es el Retargeting o Remarketing?",
    answer: "Práctica publicitaria digital que muestra anuncios personalizados a usuarios que ya visitaron previamente el sitio web de la empresa pero no completaron la compra.",
    hint: "Hacer seguimiento con banners a usuarios interesados mientras navegan en otras redes.",
    category: "Marketing Digital"
  },
  {
    id: "FC136",
    block: 5,
    question: "¿Qué es el 'Marketing Socialmente Responsable'?",
    answer: "Filosofía comercial que sostiene que la empresa debe satisfacer las necesidades del mercado de manera que beneficie al bienestar colectivo global y al medio ambiente.",
    hint: "Va de la mano de la responsabilidad social corporativa (RSC).",
    category: "Ética y Sostenibilidad"
  },
  {
    id: "FC137",
    block: 5,
    question: "¿Qué es la obsolescencia percibida?",
    answer: "Consiste en convencer al consumidor de que el producto que posee ya está desactualizado o fuera de moda, motivando su reemplazo prematuro por mero deseo.",
    hint: "Es psicológica; el producto funciona pero estéticamente parece viejo (ej. moda).",
    category: "Ética y Sostenibilidad"
  },
  {
    id: "FC138",
    block: 5,
    question: "¿Qué es la fijación de precios depredadora (dumping)?",
    answer: "Establecer precios por debajo de los costes reales a corto plazo para expulsar a los competidores del mercado y establecer un monopolio.",
    hint: "Práctica comercial desleal y sancionada legalmente.",
    category: "Ética y Sostenibilidad"
  },
  {
    id: "FC139",
    block: 5,
    question: "¿Qué es el KPI (Key Performance Indicator) en marketing?",
    answer: "Un indicador clave de rendimiento que sirve para medir el nivel de éxito de una acción o estrategia específica de la empresa.",
    hint: "Métrica crítica de seguimiento estratégico.",
    category: "Métricas y Control"
  },
  {
    id: "FC140",
    block: 5,
    question: "¿Qué es el Coste de Adquisición de Cliente (CAC)?",
    answer: "La inversión económica media que realiza la empresa para convencer a un prospecto de convertirse en cliente final del negocio.",
    hint: "Inversión total de marketing y ventas dividida entre nuevos clientes.",
    category: "Métricas y Control"
  },
  {
    id: "FC141",
    block: 5,
    question: "¿Qué es el Valor de Vida del Cliente (Customer Lifetime Value - LTV)?",
    answer: "El valor financiero neto estimado que un cliente aportará a la empresa a lo largo de toda su relación comercial con la marca.",
    hint: "Indica cuántos ingresos generará el cliente antes de darse de baja.",
    category: "Métricas y Control"
  },
  {
    id: "FC142",
    block: 5,
    question: "¿Qué es el Inbound Marketing Hub (o Embudo de Inbound)?",
    answer: "El ciclo comercial que guía al cliente potencial por las fases de: Atraer (visitas), Interactuar (leads/clientes) y Deleitar (promotores de marca).",
    hint: "Metodología basada en aportar valor constante para fidelizar.",
    category: "Marketing Digital"
  },
  {
    id: "FC143",
    block: 5,
    question: "¿Qué es el e-commerce B2C (Business-to-Consumer)?",
    answer: "El modelo de comercio electrónico donde las empresas venden directamente sus productos o servicios finales al consumidor individual a través de internet.",
    hint: "Ejemplo: Comprar ropa en la tienda web de Zara.",
    category: "Marketing Digital"
  },
  {
    id: "FC144",
    block: 5,
    question: "¿Qué es el Marketing de Afiliados?",
    answer: "Modelo de marketing digital en el que una empresa paga una comisión a terceros (afiliados) por conseguir tráfico o ventas procedentes de sus enlaces promocionales.",
    hint: "Recomendación basada en enlaces personalizados rastreables.",
    category: "Marketing Digital"
  },
  {
    id: "FC145",
    block: 5,
    question: "¿Qué es la Tasa de Rebote (Bounce Rate) en analítica web?",
    answer: "El porcentaje de usuarios que entran en una página del sitio web y salen de ella de forma inmediata sin haber interactuado ni navegado hacia otra sección.",
    hint: "Indica problemas de relevancia del sitio o mal diseño de bienvenida.",
    category: "Marketing Digital"
  },
  {
    id: "FC146",
    block: 5,
    question: "¿Qué es el Marketing Móvil?",
    answer: "Estrategias de comunicación y ventas diseñadas específicamente para llegar a los consumidores en sus smartphones y tabletas mediante apps, SMS o geolocalización.",
    hint: "Enfocado en la alta portabilidad y respuesta rápida en dispositivos de bolsillo.",
    category: "Marketing Digital"
  },
  {
    id: "FC147",
    block: 5,
    question: "¿En qué consiste la auditoría ética de marketing?",
    answer: "La revisión formal y periódica de las campañas de publicidad, etiquetas y precios de la empresa para garantizar la veracidad y el respeto de la ley.",
    hint: "Control interno para prevenir engaños al consumidor y multas.",
    category: "Ética y Sostenibilidad"
  },
  {
    id: "FC148",
    block: 5,
    question: "¿Qué es el marketing de relaciones de causa?",
    answer: "Vincular la venta de un producto de la empresa con la donación de un porcentaje de ingresos a una causa social o ambiental sin ánimo de lucro.",
    hint: "Alianza entre marca comercial y causa social.",
    category: "Ética y Sostenibilidad"
  },
  {
    id: "FC149",
    block: 5,
    question: "¿Qué establece la matriz de penetración comercial como meta SMART?",
    answer: "Establecer la ganancia exacta de cuota de mercado en porcentaje para el producto existente en el segmento actual dentro de un período límite de meses.",
    hint: "Debe ser específico y medible (ej: subir 5% la cuota de mercado en 12 meses).",
    category: "Planificación Estratégica"
  },
  {
    id: "FC150",
    block: 5,
    question: "¿Qué es un plan de marketing de contingencia?",
    answer: "Un plan de reserva con acciones alternativas prediseñadas en caso de que ocurran cambios drásticos no deseados en el entorno (ej. una recesión repentina).",
    hint: "El plan 'B' de la estrategia comercial para mitigar riesgos imprevistos.",
    category: "Planificación Estratégica"
  }
];
