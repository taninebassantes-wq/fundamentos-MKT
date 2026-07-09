export interface StudyGuideBlock {
  id: string;
  blockNumber: number;
  title: string;
  importance: string;
  explanation: string;
  keyConcepts: {
    concept: string;
    description: string;
  }[];
  example: string;
  commonError: string;
  reflection: string;
  summary: string;
}

export const studyGuide: StudyGuideBlock[] = [
  {
    id: "B01",
    blockNumber: 1,
    title: "Bloque 1: Fundamentos y Entorno de Marketing",
    importance: "Este bloque constituye los cimientos de la disciplina comercial. Comprender qué es el marketing (y qué no es), su evolución filosófica y el ecosistema en el que operan las organizaciones es indispensable para tomar decisiones estratégicas coherentes que eviten la miopía comercial.",
    explanation: "El marketing es un proceso social y administrativo orientado a la creación de valor y al establecimiento de relaciones rentables y duraderas con los clientes. Lejos de limitarse a la publicidad y las ventas, el marketing comienza antes de que exista el producto, identificando necesidades insatisfechas y traduciéndolas en deseos específicos que puedan ser respaldados por la capacidad de compra (demanda). A lo largo de la historia, las orientaciones de las empresas han evolucionado: desde un enfoque centrado en la producción de bienes estandarizados a bajo coste, pasando por la primacía del producto de calidad y la agresividad de las ventas, hasta llegar a la orientación al mercado (satisfacer necesidades mejor que la competencia) y la orientación de marketing social (equilibrar beneficios de la empresa, satisfacción del cliente y bienestar colectivo a largo plazo).\n\nParalelamente, las organizaciones no operan en el vacío, sino inmersas en un entorno dinámico. El Microentorno comprende los actores cercanos a la organización que afectan directamente su capacidad para servir al mercado: proveedores, intermediarios de marketing, competidores, públicos de interés y los propios clientes. Por su parte, el Macroentorno engloba las grandes fuerzas demográficas, económicas, naturales, tecnológicas, políticas, legales y socioculturales (entorno PESTEL). Un análisis riguroso de estas variables permite identificar amenazas que pongan en riesgo la viabilidad de la empresa, así como oportunidades de mercado para capitalizar ventajas competitivas.",
    keyConcepts: [
      {
        concept: "Necesidad vs. Deseo vs. Demanda",
        description: "Las necesidades son estados de carencia biológica o social percibidos. Los deseos son la forma concreta que toman las necesidades según la cultura y personalidad. La demanda es el deseo respaldado por el poder adquisitivo."
      },
      {
        concept: "Miopía de Marketing",
        description: "Error estratégico definido por Theodore Levitt, consistente en centrar la atención en el producto físico y no en la necesidad subyacente que este satisface."
      },
      {
        concept: "Microentorno",
        description: "Fuerzas del entorno inmediato de la empresa (competencia directa, proveedores, clientes, intermediarios) que influyen en sus operaciones diarias."
      },
      {
        concept: "Macroentorno (PESTEL)",
        description: "Grandes fuerzas externas e incontrolables (políticas, económicas, sociales, tecnológicas, ecológicas y legales) que configuran las reglas de juego del mercado."
      }
    ],
    example: "Una empresa proveedora de servicios de taxi tradicional que se resiste a adoptar plataformas tecnológicas comete miopía de marketing si asume que su negocio es 'conducir coches' en lugar de 'proveer soluciones de transporte convenientes'. Al no anticipar las fuerzas tecnológicas y socioculturales del macroentorno, es desplazada por aplicaciones de movilidad compartida.",
    commonError: "Confundir el marketing con la publicidad y las ventas a corto plazo. Las ventas y la promoción son solo la 'punta del iceberg' del marketing. Si la empresa no investiga el mercado, no diseña un producto adecuado y no fija un precio correcto, la publicidad será inútil a mediano plazo.",
    reflection: "¿De qué manera la evolución sociocultural del macroentorno actual (como la concienciación ecológica y la digitalización acelerada) ha redefinido los deseos de transporte de las generaciones más jóvenes?",
    summary: "El marketing busca crear valor e intercambios de beneficio mutuo fundamentados en las necesidades del cliente. El éxito estratégico depende de una lectura correcta de las fuerzas del micro y macroentorno para adaptar la propuesta de valor organizacional."
  },
  {
    id: "B02",
    blockNumber: 2,
    title: "Bloque 2: Investigación de Mercados, Consumidor y Segmentación (STP)",
    importance: "Conocer profundamente al cliente y seleccionar el terreno de juego adecuado es la diferencia entre el éxito empresarial y el desperdicio de recursos. Este bloque proporciona herramientas de análisis de datos y metodologías para enfocar el esfuerzo comercial con precisión quirúrgica.",
    explanation: "El proceso de toma de decisiones comerciales requiere información objetiva, fiable y oportuna. El Sistema de Información de Marketing (SIM) es el conjunto de personas, equipos y procedimientos destinados a recopilar, procesar, analizar y distribuir información necesaria para los responsables de marketing. La Investigación de Mercados, elemento clave del SIM, es el diseño, obtención, análisis y presentación sistemática de datos relevantes. Este proceso inicia con la definición del problema y de los objetivos de la investigación (exploratoria, descriptiva o causal), prosigue con el desarrollo del plan de investigación (datos primarios a través de encuestas, focus groups u observación, y datos secundarios preexistentes) y concluye con la interpretación del informe.\n\nUna vez obtenida la información, se analiza el Comportamiento del Consumidor, estudiando los estímulos de marketing y del entorno que entran en la 'caja negra' del comprador. Factores culturales, sociales (grupos de referencia, roles, familia), personales (edad, estilo de vida, ocupación) y psicológicos (motivación, percepción, aprendizaje, actitudes) determinan el proceso de decisión de compra (reconocimiento del problema, búsqueda de información, evaluación de alternativas, decisión de compra y comportamiento poscompra).\n\nCon este entendimiento, la empresa aplica el proceso estratégico STP:\n1. Segmentación de Mercado: Dividir un mercado heterogéneo en subgrupos homogéneos mediante criterios demográficos, geográficos, psicográficos (personalidad, valores) y conductuales (frecuencia de uso, beneficios buscados).\n2. Selección de Mercado Meta (Targeting): Evaluar el atractivo de cada segmento y seleccionar uno o varios en los que competir mediante estrategias de marketing indiferenciado, diferenciado, concentrado o micromarketing.\n3. Posicionamiento: Diseñar la oferta de la empresa para que ocupe un lugar claro, distintivo y deseable en la mente de los consumidores en relación con sus competidores, sustentado en una sólida propuesta de valor.",
    keyConcepts: [
      {
        concept: "Investigación Causal",
        description: "Investigación de mercados diseñada para probar hipótesis de relaciones de causa y efecto, habitualmente mediante experimentos controlados."
      },
      {
        concept: "Caja Negra del Consumidor",
        description: "Modelo conceptual que representa la mente del consumidor, donde los estímulos del exterior se procesan y transforman en respuestas de compra específicas."
      },
      {
        concept: "Segmentación Psicográfica",
        description: "División del mercado basada en estilos de vida, valores, actitudes y rasgos de personalidad de los individuos."
      },
      {
        concept: "Posicionamiento",
        description: "La forma en que los consumidores definen un producto con base en sus atributos sobresalientes, determinando su lugar mental frente a la competencia."
      }
    ],
    example: "Una marca de telefonía móvil no vende el mismo aparato de la misma forma a todo el mundo. Segmenta conductualmente por intensidad de uso (gamers vs. profesionales de oficina) y psicográficamente por estatus. Al mercado meta joven le posiciona el móvil destacando la calidad de su cámara frontal en redes sociales, y al mercado corporativo le destaca la seguridad de datos y la duración de la batería.",
    commonError: "Pensar que 'nuestro producto va dirigido a todo el mundo'. Intentar ser todo para todos diluye la propuesta de valor y satura los costes de comunicación. Es indispensable elegir mercados meta claros y descartar segmentos no rentables.",
    reflection: "¿Cómo influyen los sesgos cognitivos en la etapa de evaluación de alternativas cuando un consumidor adquiere un producto de alta implicación emocional?",
    summary: "La investigación de mercados nutre al SIM para reducir la incertidumbre. A partir de la comprensión del consumidor, el proceso STP permite segmentar el mercado, elegir los clientes idóneos y construir un posicionamiento sólido que diferencie la marca."
  },
  {
    id: "B03",
    blockNumber: 3,
    title: "Bloque 3: Decisiones de Producto, Marca y Estrategias de Precio",
    importance: "El producto representa la oferta tangible o intangible que soluciona la necesidad del cliente, mientras que el precio es la única variable del marketing mix que genera ingresos. Ambos configuran el núcleo del intercambio de valor comercial.",
    explanation: "El Producto es todo aquello que se ofrece en un mercado para su atención, adquisición, uso o consumo, y que satisface un deseo o necesidad. Se analiza en tres niveles: el producto básico (el beneficio fundamental que el cliente compra), el producto real (atributos, marca, calidad, diseño, envase) y el producto aumentado (servicios adicionales como garantía, entrega, instalación y soporte posventa). Las marcas desempeñan un rol vital al identificar al fabricante y transferirle un valor intangible conocido como Brand Equity (valor de marca). La gestión de marcas incluye decisiones de extensión de línea (nuevos formatos de un producto existente) y extensiones de marca (entrar a categorías nuevas bajo el mismo nombre).\n\nTodo producto recorre un Ciclo de Vida del Producto (CVP) caracterizado por cinco etapas: Desarrollo, Introducción (bajas ventas, altos costes), Crecimiento (rápida aceptación del mercado, economías de escala), Madurez (ventas máximas, alta competencia de precios) y Declive (caída de ventas por obsolescencia tecnológica o cambio de preferencias). Gestionar esta evolución requiere el Desarrollo de Nuevos Productos a través de un proceso formal: generación de ideas, filtrado, desarrollo del concepto, estrategia de marketing, análisis de negocio, desarrollo del producto físico, pruebas de mercado y comercialización.\n\nPor otro lado, el Precio es la cantidad de dinero que se cobra por un producto o servicio. Su fijación determina los márgenes de rentabilidad y la percepción de valor de la marca. Los métodos de fijación de precios pueden centrarse en los costes (coste más margen o umbral de rentabilidad), en la competencia (alineamiento comercial) o en el valor percibido por el cliente (límite máximo de precio tolerado). Al lanzar nuevos productos, las empresas aplican dos estrategias opuestas: Descremado de Precios (fijar un precio inicial elevado para capturar los segmentos dispuestos a pagar más) o Precios de Penetración (precio inicial bajo para captar rápidamente gran cuota de mercado e impedir la entrada de competidores).",
    keyConcepts: [
      {
        concept: "Producto Aumentado",
        description: "Servicios y beneficios adicionales que rodean al producto básico y real, diseñados para superar las expectativas del consumidor (ej. mantenimiento gratuito)."
      },
      {
        concept: "Brand Equity (Valor de Marca)",
        description: "Efecto diferencial positivo que el conocimiento del nombre de la marca tiene sobre la respuesta del cliente ante el producto y su mercadotecnia."
      },
      {
        concept: "Descremado de Precios",
        description: "Estrategia consistente en fijar un precio inicial muy alto para un producto nuevo con el fin de obtener los máximos ingresos capa por capa de los segmentos de mercado."
      },
      {
        concept: "Precios basados en el Valor",
        description: "Fijación del precio basada en la percepción de los compradores sobre el beneficio recibido y no en el coste incurrido por el fabricante."
      }
    ],
    example: "Apple lanza un nuevo iPhone utilizando descremado de precios: establece un precio alto que pagan los adoptadores tempranos ansiosos de novedad. A medida que pasa el tiempo y el producto entra en madurez, reduce gradualmente el precio o introduce modelos más económicos para acceder a otros segmentos de consumidores.",
    commonError: "Fijar precios calculando únicamente los costes de fabricación y sumando un porcentaje fijo de ganancia sin considerar el valor percibido por el comprador ni la elasticidad de la demanda. Esto suele resultar en precios demasiado altos para el mercado o en la pérdida de ingresos potenciales.",
    reflection: "Si los costos de fabricación de una bebida gaseosa son casi idénticos entre marcas, ¿por qué el consumidor está dispuesto a pagar hasta tres veces más por una marca líder frente a una marca blanca?",
    summary: "Los productos deben estructurarse en niveles que excedan el beneficio básico, apalancando el valor de marca. El precio debe coordinarse con el posicionamiento y los costes, utilizando estrategias de penetración o descremado según el ciclo de vida del producto."
  },
  {
    id: "B04",
    blockNumber: 4,
    title: "Bloque 4: Canales de Distribución, Logística y Mezcla de Comunicación (CIM)",
    importance: "Hacer accesible el producto en el lugar y momento adecuados y comunicarlo de forma persuasiva constituye el puente operativo entre la producción y el consumo. Este bloque aborda la gestión de la plaza y la promoción.",
    explanation: "La Distribución Comercial tiene la misión de salvar las brechas de tiempo, lugar y posesión que separan los bienes de quienes los necesitan. Los Canales de Distribución son organizaciones interdependientes que participan en el proceso de poner un producto a disposición del consumidor. Los intermediarios (mayoristas, minoristas, agentes) añaden valor al realizar funciones esenciales: logística física, financiación, asunción de riesgos, información de mercado y contacto con el cliente. Las empresas deben decidir el diseño del canal (longitud directa o indirecta) y la cobertura de distribución: intensiva (máxima exposición en todo punto de venta), selectiva (uso de un grupo limitado de distribuidores) o exclusiva (un solo distribuidor por área geográfica para mantener el estatus y control). La gestión del canal requiere resolver conflictos horizontales (entre miembros del mismo nivel) y verticales (entre diferentes niveles del canal).\n\nEn paralelo, la Mezcla de Comunicación Comercial o Comunicación Integrada de Marketing (CIM) coordina todos los canales de comunicación de la empresa para entregar un mensaje claro, congruente y convincente sobre la organización y sus marcas. Se compone de cinco herramientas promocionales principales:\n1. Publicidad: Comunicación masiva no personal y pagada para promocionar ideas o bienes.\n2. Promoción de Ventas: Incentivos a corto plazo (cupones, descuentos, muestras gratis) para fomentar la compra inmediata.\n3. Relaciones Públicas: Actividades destinadas a construir buenas relaciones con los diversos públicos de la empresa y forjar una imagen corporativa favorable.\n4. Venta Personal: Interacción cara a cara con el cliente para realizar ventas y forjar relaciones sólidas.\n5. Marketing Directo: Conexiones directas con consumidores individuales seleccionados de manera meticulosa para obtener una respuesta inmediata (telemarketing, email marketing).",
    keyConcepts: [
      {
        concept: "Distribución Exclusiva",
        description: "Estrategia que limita severamente el número de intermediarios, concediendo el derecho exclusivo de venta en una zona geográfica a un único distribuidor."
      },
      {
        concept: "Comunicación Integrada de Marketing (CIM)",
        description: "Concepto bajo el cual la empresa integra y coordina cuidadosamente sus múltiples canales de comunicación para transmitir un mensaje coherente."
      },
      {
        concept: "Estrategia de Empuje (Push) vs. Atracción (Pull)",
        description: "La estrategia Push enfoca la promoción en los canales de distribución para que empujen el producto hacia el usuario. La estrategia Pull dirige la promoción al consumidor final para que demande el producto a través del canal."
      },
      {
        concept: "Conflicto Vertical de Canal",
        description: "Desacuerdos u hostilidades que ocurren entre diferentes niveles del mismo canal de distribución, por ejemplo, entre un fabricante y sus minoristas."
      }
    ],
    example: "Una marca de cosmética natural de gama alta utiliza distribución selectiva para vender solo en salones de belleza autorizados. A nivel de comunicación, aplica una estrategia Pull invirtiendo fuertemente en publicidad digital y relaciones públicas con influencers (CIM) para que las consumidoras vayan a los salones a exigir su producto.",
    commonError: "Lanzar campañas de publicidad digital y promociones de ventas desconectadas entre sí, con mensajes de marca contradictorios. Sin un enfoque CIM, el consumidor se confunde y la marca pierde credibilidad e impacto.",
    reflection: "¿De qué forma la digitalización y el e-commerce han desintermediado canales de distribución tradicionales y cómo afecta esto a la lealtad hacia la marca?",
    summary: "Los canales de distribución garantizan la disponibilidad física del producto, eligiendo la intensidad de cobertura apropiada. Por su parte, la CIM alinea publicidad, promoción, RRPP, venta directa y personal en un mensaje unificado y sinérgico."
  },
  {
    id: "B05",
    blockNumber: 5,
    title: "Bloque 5: Planificación Estratégica, Métricas, Marketing Digital y Ética",
    importance: "El marketing debe ser estratégico, medible, digitalmente ágil y éticamente responsable. Este bloque de cierre integra la visión de largo plazo del plan comercial con las métricas financieras de control y las nuevas realidades éticas y de internet.",
    explanation: "La Planificación Estratégica de Marketing es el proceso de desarrollar y mantener un ajuste estratégico entre los objetivos de la organización, sus peculiaridades y las cambiantes oportunidades del mercado. Se estructura a través del Plan de Marketing, que comienza con un diagnóstico de la situación mediante el Análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas), el establecimiento de objetivos SMART (específicos, medibles, alcanzables, relevantes y acotados en el tiempo) y la formulación de estrategias de crecimiento comercial como la Matriz de Ansoff (Penetración de mercado, Desarrollo de productos, Desarrollo de mercados, Diversificación).\n\nToda acción estratégica carece de sentido si no se mide. Las Métricas de Marketing permiten evaluar el desempeño comercial y comprobar si se cumplen los objetivos. El Retorno de la Inversión en Marketing (ROMI) mide la rentabilidad financiera neta de las campañas comerciales. El Control de Marketing implica monitorizar desviaciones anuales y auditorías comerciales permanentes.\n\nEn la actualidad, esta planificación se desenvuelve mayoritariamente en el ecosistema del Marketing Digital. Las empresas deben combinar estrategias de SEO (optimización orgánica en buscadores), SEM (campañas pagadas en buscadores), marketing de contenidos, comercio electrónico (e-commerce) e Inbound Marketing (atraer clientes aportando valor en lugar de interrumpir con publicidad tradicional).\n\nFinalmente, la Ética y Responsabilidad Social en el Marketing dictaminan que las decisiones comerciales no deben limitarse a generar beneficios inmediatos, sino velar por el bienestar a largo plazo de la sociedad y del planeta. Esto implica combatir prácticas abusivas (como el lavado verde o greenwashing, la obsolescencia programada y los precios engañosos) adoptando principios de marketing sostenible que refuercen la reputación de la organización.",
    keyConcepts: [
      {
        concept: "Matriz de Ansoff",
        description: "Herramienta estratégica para identificar opciones de crecimiento de la empresa cruzando productos (existentes/nuevos) con mercados (existentes/nuevos)."
      },
      {
        concept: "ROMI (Return on Marketing Investment)",
        description: "Indicador financiero que calcula el beneficio neto generado por una campaña de marketing en relación con la inversión económica realizada en ella."
      },
      {
        concept: "Inbound Marketing",
        description: "Metodología comercial que atrae a los clientes creando contenido valioso y experiencias personalizadas a la medida de sus necesidades."
      },
      {
        concept: "Marketing Sostenible",
        description: "Filosofía comercial que exige un marketing social y ecológicamente responsable, que satisfaga las necesidades actuales sin comprometer a las generaciones futuras."
      }
    ],
    example: "Una empresa de café tradicional aplica una estrategia de desarrollo de mercado (Ansoff) vendiendo su producto por primera vez en Asia a través de canales e-commerce. Para medir la efectividad de sus anuncios en redes sociales, calcula el ROMI. Además, certifica su café como 'Comercio Justo', garantizando un comportamiento ético y sostenible que comunica con total transparencia.",
    commonError: "Establecer objetivos vagos en el plan de marketing como 'incrementar la notoriedad de marca' sin definir métricas precisas ni plazos temporales. Si el objetivo no es medible y acotado, resulta imposible calcular el ROMI o aplicar acciones correctivas.",
    reflection: "¿En qué medida el marketing digital desafía los límites éticos de la privacidad de los consumidores con el uso de datos predictivos y algoritmos de microsegmentación?",
    summary: "El plan de marketing estructura la estrategia a través del FODA y la matriz de Ansoff. Las métricas de control (ROMI) aseguran la eficacia financiera. El marketing digital aporta herramientas de tracción ágil bajo un estricto paraguas ético y sostenible."
  }
];
