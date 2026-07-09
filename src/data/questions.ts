export interface Question {
  id: string;
  simulador: string; // "SIM-01" | "SIM-02" | "SIM-03" | "SIM-04" | "SIM-05" | "SIM-06"
  tema: string;
  subtema: string;
  dificultad: "básico" | "intermedio" | "avanzado";
  tipo: "conceptual" | "aplicación" | "caso" | "comparación";
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: string;
  explicacion: string;
  fuenteBase: "Fundamentos de Marketing";
}

export const questions: Question[] = [
  // ==========================================
  // SIM-01: Conceptos Básicos y Entorno (40 preguntas)
  // ==========================================
  {
    id: "Q-001",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Conceptos fundamentales",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es la diferencia fundamental entre una necesidad y un deseo dentro de la teoría del marketing?",
    opciones: [
      "La necesidad representa un estado de carencia biológica o social inherente al ser humano, mientras que el deseo es la forma específica en que se canaliza dicha carencia según la cultura y personalidad.",
      "Las necesidades son creadas artificialmente por la publicidad, mientras que los deseos son innatos en el ser humano.",
      "El deseo siempre cuenta con respaldo de poder adquisitivo, mientras que la necesidad es solo una aspiración teórica sin capacidad de compra.",
      "La necesidad se limita a bienes físicos esenciales, mientras que el deseo abarca únicamente intangibles o servicios de lujo."
    ],
    respuestaCorrecta: "La necesidad representa un estado de carencia biológica o social inherente al ser humano, mientras que el deseo es la forma específica en que se canaliza dicha carencia según la cultura y personalidad.",
    explicacion: "De acuerdo con Kotler, las necesidades preexisten en el ser humano y no son creadas por el marketing. En cambio, los deseos son moldeados por la cultura y el entorno del consumidor para satisfacer dichas necesidades básicas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-002",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Demanda",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuándo se considera que un deseo se transforma en una demanda de mercado?",
    opciones: [
      "Cuando el consumidor tiene el deseo de adquirir un producto y además posee la capacidad económica (poder adquisitivo) y la voluntad de compra.",
      "Cuando la empresa decide lanzar una campaña publicitaria masiva para dar a conocer un nuevo bien.",
      "Cuando el deseo se comparte de manera grupal en redes sociales logrando tendencias globales.",
      "Cuando el producto entra en la fase de madurez dentro de su ciclo de vida comercial."
    ],
    respuestaCorrecta: "Cuando el consumidor tiene el deseo de adquirir un producto y además posee la capacidad económica (poder adquisitivo) y la voluntad de compra.",
    explicacion: "La demanda representa el deseo humano respaldado por el poder adquisitivo. Sin recursos financieros suficientes para la compra, el deseo no se materializa en demanda real para la organización.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-003",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Valor para el cliente",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cómo definen los autores clásicos de marketing el 'valor percibido por el cliente'?",
    opciones: [
      "Es la diferencia subjetiva entre todos los beneficios obtenidos y los costos incurridos al adquirir una oferta, en comparación con los competidores.",
      "Es el precio monetario asignado al producto basado estrictamente en sus costos de producción directa.",
      "Es la utilidad real del producto medida en términos de durabilidad y desempeño tecnológico objetivo.",
      "Es la cantidad de dinero adicional que un cliente está dispuesto a donar para causas socialmente responsables de la empresa."
    ],
    respuestaCorrecta: "Es la diferencia subjetiva entre todos los beneficios obtenidos y los costos incurridos al adquirir una oferta, en comparación con los competidores.",
    explicacion: "El valor percibido es una evaluación subjetiva del cliente que balancea lo que obtiene (beneficios funcionales, emocionales, de imagen) frente a lo que da (dinero, tiempo, esfuerzo, estrés), relativo a las alternativas competitivas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-004",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Satisfacción del cliente",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Si un cliente adquiere una laptop cuyas prestaciones igualan exactamente lo que esperaba de ella, según el modelo de confirmación de expectativas, el cliente se encuentra en un estado de:",
    opciones: [
      "Satisfacción simple por confirmación de expectativas.",
      "Insatisfacción por falta de sorpresas o valor añadido.",
      "Deleite absoluto y lealtad incondicional a largo plazo.",
      "Disonancia cognoscitiva post-compra negativa."
    ],
    respuestaCorrecta: "Satisfacción simple por confirmación de expectativas.",
    explicacion: "El nivel de satisfacción se determina comparando las expectativas del comprador con el desempeño percibido del producto. Si el desempeño iguala las expectativas, el cliente queda satisfecho; si las supera, deleitado; y si no las alcanza, insatisfecho.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-005",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Evolución del marketing",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el enfoque principal de la filosofía corporativa conocida como 'Orientación a la producción'?",
    opciones: [
      "Sostener que los consumidores prefieren productos disponibles y asequibles, por lo que el esfuerzo clave debe concentrarse en mejorar la eficiencia operativa y de distribución.",
      "Buscar la personalización masiva de cada producto adaptándose a las necesidades individuales de cada cliente del segmento.",
      "Dar prioridad absoluta al diseño estético y calidad de ingeniería del producto descuidando los requerimientos de la demanda.",
      "Desarrollar agresivas promociones comerciales y ventas de alta presión para forzar el vaciado de los almacenes."
    ],
    respuestaCorrecta: "Sostener que los consumidores prefieren productos disponibles y asequibles, por lo que el esfuerzo clave debe concentrarse en mejorar la eficiencia operativa y de distribución.",
    explicacion: "La orientación a la producción es útil cuando la demanda supera la oferta o cuando el costo del producto es demasiado alto y requiere economías de escala para hacerlo accesible.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-006",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Evolución del marketing",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué riesgo estratégico asume una organización enfocada prioritariamente en la 'Orientación al producto'?",
    opciones: [
      "Caer en la miopía de marketing, al centrarse tanto en el bien físico que olvida la necesidad básica que este debe satisfacer en el mercado.",
      "Provocar un exceso de demanda que la fábrica no sea capaz de satisfacer en el corto plazo.",
      "Perder margen de rentabilidad unitario debido a una guerra de precios provocada por la alta disponibilidad del producto.",
      "Incumplir las normativas medioambientales debido a procesos de distribución intensivos."
    ],
    respuestaCorrecta: "Caer en la miopía de marketing, al centrarse tanto en el bien físico que olvida la necesidad básica que este debe satisfacer en el mercado.",
    explicacion: "La orientación al producto asume que los clientes comprarán lo que tiene mayor calidad o innovación. Si se concentran solo en el producto físico y no en la necesidad del consumidor, corren el riesgo de ser reemplazados por soluciones completamente diferentes (miopía de marketing).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-007",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Evolución del marketing",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es la premisa que distingue la 'Orientación a las ventas' de la 'Orientación al marketing'?",
    opciones: [
      "Las ventas se enfocan en las necesidades del vendedor para convertir el producto en dinero; el marketing se enfoca en satisfacer las necesidades del cliente mediante el producto.",
      "Las ventas buscan retener al cliente a largo plazo, mientras que el marketing persigue únicamente transacciones de corto plazo.",
      "Las ventas parten de un análisis riguroso de las necesidades del mercado meta; el marketing parte de lo que la empresa ya produce.",
      "No existe diferencia teórica alguna, ya que ambos términos se consideran sinónimos en la literatura académica."
    ],
    respuestaCorrecta: "Las ventas se enfocan en las necesidades del vendedor para convertir el producto en dinero; el marketing se enfoca en satisfacer las necesidades del cliente mediante el producto.",
    explicacion: "El enfoque de ventas es de adentro hacia afuera (empieza en la fábrica, se enfoca en el producto existente e induce a la compra con promoción). El enfoque de marketing es de afuera hacia adentro (empieza en el mercado, se enfoca en las necesidades del cliente e integra actividades de marketing para generar satisfacción).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-008",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Marketing social",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El concept de 'Marketing Social o Sostenible' propone que la estrategia comercial debe equilibrar tres componentes esenciales en sus decisiones. ¿Cuáles son?",
    opciones: [
      "Los deseos de los consumidores, los beneficios de la empresa y los intereses a largo plazo de la sociedad.",
      "Los costos de distribución, el margen neto de utilidad y la tasa impositiva estatal.",
      "El valor bursátil, la cuota de mercado relativa y la notoriedad de marca.",
      "La publicidad masiva, la venta directa y las relaciones públicas institucionales."
    ],
    respuestaCorrecta: "Los deseos de los consumidores, los beneficios de la empresa y los intereses a largo plazo de la sociedad.",
    explicacion: "El marketing social plantea que el marketing puro pasa por alto posibles conflictos entre los deseos a corto plazo del consumidor y su bienestar a largo plazo, y aboga por un equilibrio sostenible de estas tres dimensiones.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-009",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Intercambio y relaciones",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Para que un proceso de 'Intercambio' pueda tener lugar de manera efectiva, ¿cuál de las siguientes condiciones es estrictamente necesaria?",
    opciones: [
      "Debe haber al menos dos partes, cada una con algo que posea valor para la otra, y con plena libertad para aceptar o rechazar la oferta.",
      "Debe existir obligatoriamente un contrato legal firmado ante un notario público o intermediario estatal.",
      "La transacción debe realizarse empleando dinero en efectivo como único medio de pago permitido.",
      "Las partes deben compartir la misma cultura, idioma y ubicación geográfica para evitar barreras comunicativas."
    ],
    respuestaCorrecta: "Debe haber al menos dos partes, cada una con algo que posea valor para la otra, y con plena libertad para aceptar o rechazar la oferta.",
    explicacion: "El intercambio es el núcleo del marketing. Requiere dos o más partes, que cada una tenga algo de valor para la otra, capacidad de comunicación y entrega, libertad para aceptar o rechazar, y que consideren apropiado o deseable negociar.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-010",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Miopía de marketing",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una conocida empresa ferroviaria a principios del siglo XX quebró porque sus directivos pensaban que su negocio eran los trenes en lugar de comprender que estaban en el negocio del transporte y la movilidad. Este es un ejemplo clásico de:",
    opciones: [
      "Miopía de marketing descrita por Theodore Levitt.",
      "Efecto de obsolescencia tecnológica no planificada.",
      "Canibalización de servicios por segmentación errónea.",
      "Desalineación competitiva en el microentorno."
    ],
    respuestaCorrecta: "Miopía de marketing descrita por Theodore Levitt.",
    explicacion: "Theodore Levitt definió la miopía de marketing como el error de definir el negocio de una empresa en términos del producto en lugar de la necesidad que este satisface. Al definirse como 'ferrocarriles' en vez de 'transporte', no supieron reaccionar ante el auge de los aviones y automóviles.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-011",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Relaciones con clientes",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿En qué consiste el concepto de 'Valor del tiempo de vida del cliente' (Customer Lifetime Value - CLV)?",
    opciones: [
      "Es el valor acumulado de todas las compras netas que un cliente realiza en una empresa a lo largo de toda su relación comercial activa.",
      "Es el costo total incurrido por el departamento de marketing para captar a un cliente nuevo por primera vez.",
      "Es el tiempo promedio que un cliente pasa interactuando con la plataforma digital de la empresa durante un día de navegación.",
      "Es el margen de beneficio obtenido de una única venta transaccional en un punto físico."
    ],
    respuestaCorrecta: "Es el valor acumulado de todas las compras netas que un cliente realiza en una empresa a lo largo de toda su relación comercial activa.",
    explicacion: "El CLV mide el valor monetario neto de los flujos de compras de un cliente durante todo el ciclo de su relación con la marca. Mantener a los clientes leales incrementa el CLV, reduciendo los costos agregados de captación de clientes nuevos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-012",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "CRM",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "El principal objetivo estratégico de la 'Gestión de Relaciones con los Clientes' (CRM) es:",
    opciones: [
      "Crear y mantener relaciones rentables y duraderas con los clientes mediante la entrega de valor superior y satisfacción continua.",
      "Automatizar por completo el envío de correos electrónicos promocionales sin intervención de analistas.",
      "Monitorear la ubicación satelital de los repartidores de la empresa en tiempo real.",
      "Minimizar los costos de producción y embalaje para maximizar el margen de ganancia."
    ],
    respuestaCorrecta: "Crear y mantener relaciones rentables y duraderas con los clientes mediante la entrega de valor superior y satisfacción continua.",
    explicacion: "El CRM abarca la recopilación y análisis de información del cliente para optimizar la relación comercial, logrando una mayor lealtad, retención y rentabilidad conjunta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-013",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Co-creación de valor",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el término 'Co-creación de valor' en el marketing contemporáneo?",
    opciones: [
      "Al proceso interactivo donde los clientes participan de forma activa junto a la empresa en el diseño, desarrollo y personalización de sus productos o experiencias.",
      "A la alianza estratégica entre dos competidores líderes para fijar precios mínimos en el mercado.",
      "Al desarrollo conjunto de campañas publicitarias entre la empresa y su agencia de medios externa.",
      "A la externalización (outsourcing) de toda la cadena de suministro a fábricas en países emergentes."
    ],
    respuestaCorrecta: "Al proceso interactivo donde los clientes participan de forma activa junto a la empresa en el diseño, desarrollo y personalización de sus productos o experiencias.",
    explicacion: "La co-creación rompe el esquema tradicional donde el valor se produce dentro de la empresa y se vende al consumidor. En su lugar, el valor se crea de forma conjunta y colaborativa mediante el diálogo y la personalización activa.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-014",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Capital de clientes",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El 'Capital de clientes' (Customer Equity) se define como:",
    opciones: [
      "La suma combinada de los valores del tiempo de vida de todos los clientes actuales y potenciales de la empresa.",
      "Los fondos totales que los clientes han invertido en acciones preferenciales de la compañía.",
      "La cantidad de dinero líquida que una empresa reserva para indemnizar reclamaciones de garantía.",
      "La tasación financiera del valor comercial de los logotipos, patentes e infraestructura física."
    ],
    respuestaCorrecta: "La suma combinada de los valores del tiempo de vida de todos los clientes actuales y potenciales de la empresa.",
    explicacion: "El capital de clientes es una métrica clave del valor de una empresa a largo plazo. A mayor lealtad y valor de tiempo de vida de los clientes, mayor será el capital de clientes de la firma.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-015",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Estrategias de vinculación",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Según el modelo de clasificación de clientes basado en lealtad proyectada y rentabilidad, los clientes con alta rentabilidad pero baja lealtad proyectada son denominados:",
    opciones: [
      "Mariposas (Butterflies).",
      "Amigos verdaderos (True Friends).",
      "Lapas (Barnacles).",
      "Extraños (Strangers)."
    ],
    respuestaCorrecta: "Mariposas (Butterflies).",
    explicacion: "Las 'mariposas' son rentables pero poco leales. La empresa debe captar lo que pueda de ellas mientras estén con la marca, disfrutando de transacciones provechosas, sin realizar grandes inversiones en fidelización a largo plazo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-016",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Estrategias de vinculación",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En la misma tipología de clientes por lealtad y rentabilidad, aquellos que muestran baja rentabilidad pero una lealtad persistente a largo plazo se conocen como:",
    opciones: [
      "Lapas (Barnacles).",
      "Mariposas (Butterflies).",
      "Amigos verdaderos (True Friends).",
      "Extraños (Strangers)."
    ],
    respuestaCorrecta: "Lapas (Barnacles).",
    explicacion: "Las 'lapas' son clientes muy leales pero generan pocas ganancias debido al bajo volumen de compra o la necesidad constante de soporte. Son problemáticos porque sus costos de mantenimiento superan sus ingresos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-017",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Mercado de prueba",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Un fabricante de alimentos decide vender un nuevo cereal solo en una ciudad pequeña representativa antes del lanzamiento nacional. ¿Qué tipo de estrategia está utilizando?",
    opciones: [
      "Marketing de prueba o mercado piloto.",
      "Segmentación demográfica de alta concentración.",
      "Estrategia de penetración selectiva de precios.",
      "Distribución en canal cerrado de nivel dos."
    ],
    respuestaCorrecta: "Marketing de prueba o mercado piloto.",
    explicacion: "El marketing de prueba consiste en lanzar un producto en un entorno geográfico limitado pero representativo del mercado meta para evaluar la aceptación del producto y la efectividad del mix de marketing antes de un despliegue total.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-018",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Marketing de relaciones",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es el fin último del marketing de relaciones?",
    opciones: [
      "Construir una red de valor única con clientes, distribuidores y proveedores que genere ventajas competitivas sostenibles en el tiempo.",
      "Incrementar a toda costa el número de transacciones únicas sin importar la satisfacción post-compra.",
      "Sustituir las campañas publicitarias por fuerzas de venta masivas de puerta en puerta.",
      "Reducir a cero el número de quejas de servicio mediante la eliminación de los canales de contacto."
    ],
    respuestaCorrecta: "Construir una red de valor única con clientes, distribuidores y proveedores que genere ventajas competitivas sostenibles en el tiempo.",
    explicacion: "El marketing de relaciones busca ir más allá de la transacción individual inmediata. Su meta es forjar vínculos fuertes e interdependientes de largo plazo con todos los agentes involucrados en la cadena de valor.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-019",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Concepto de intercambio",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál de las siguientes afirmaciones sobre el intercambio en marketing es correcta?",
    opciones: [
      "El intercambio debe reportar beneficios mutuos para todas las partes que intervienen para ser considerado marketing de relaciones sano.",
      "El intercambio requiere forzosamente que una parte gane a expensas de las pérdidas o perjuicio de la otra parte.",
      "El intercambio comercial solo puede ocurrir en tiendas físicas autorizadas por la legislación fiscal correspondiente.",
      "El intercambio no se produce si el pago se realiza mediante trueque de bienes físicos."
    ],
    respuestaCorrecta: "El intercambio debe reportar beneficios mutuos para todas las partes que intervienen para ser considerado marketing de relaciones sano.",
    explicacion: "El marketing busca transacciones de mutuo beneficio (ganar-ganar). Si una parte se siente estafada, no se repetirán los intercambios y se dañará el capital de clientes a largo plazo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-020",
    simulador: "SIM-01",
    tema: "Concepto y Evolución del Marketing",
    subtema: "Utilidad",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué tipo de utilidad crea el marketing al colocar el producto al alcance físico del comprador en el momento exacto en que lo requiere?",
    opciones: [
      "Utilidad de lugar y utilidad de tiempo.",
      "Utilidad de forma y utilidad de posesión.",
      "Utilidad de información y utilidad de producción.",
      "Utilidad de imagen y utilidad de transacción."
    ],
    respuestaCorrecta: "Utilidad de lugar y utilidad de tiempo.",
    explicacion: "La distribución y la logística crean utilidad de lugar (donde el cliente quiere el producto) y de tiempo (cuando el cliente lo necesita). La fabricación crea utilidad de forma y la compra efectiva utilidad de posesión.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-021",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Microentorno",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cómo se define el microentorno de una organización en marketing?",
    opciones: [
      "Son los actores cercanos a la empresa que afectan directamente su capacidad para servir a sus clientes inmediatos.",
      "Son las fuerzas externas masivas y globales que influyen en toda la sociedad y no se pueden controlar en absoluto.",
      "Son los departamentos internos exclusivos del área de contabilidad y finanzas corporativas.",
      "Es el conjunto de normativas legales y fiscales que imponen los ministerios gubernamentales a nivel nacional."
    ],
    respuestaCorrecta: "Son los actores cercanos a la empresa que afectan directamente su capacidad para servir a sus clientes inmediatos.",
    explicacion: "El microentorno comprende a la empresa misma, proveedores, intermediarios de marketing, clientes, competidores y públicos. Estos actores influyen de manera directa y cotidiana en la gestión comercial.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-022",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál de las siguientes opciones describe el macroentorno de una organización?",
    opciones: [
      "Consiste en las grandes fuerzas sociales, demográficas, económicas, tecnológicas, políticas y culturales que afectan a todo el microentorno.",
      "Consiste únicamente en las redes de proveedores locales de materias primas directas.",
      "Consiste en el equipo de distribuidores mayoristas exclusivos que posee la organización en un país.",
      "Consiste en la estructura organizacional de mandos medios y directores de departamento de la empresa."
    ],
    respuestaCorrecta: "Consiste en las grandes fuerzas sociales, demográficas, económicas, tecnológicas, políticas y culturales que afectan a todo el microentorno.",
    explicacion: "El macroentorno está conformado por fuerzas globales que configuran oportunidades y amenazas para la empresa. A diferencia del microentorno, la organización apenas tiene poder para influir directamente sobre estas grandes variables.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-023",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno demográfico",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Si una marca de juguetes observa un envejecimiento progresivo de la población y una baja en la tasa de natalidad del país, ¿ante qué tipo de fuerza del entorno se encuentra?",
    opciones: [
      "Una amenaza proveniente del macroentorno demográfico.",
      "Una fortaleza originada en el microentorno de clientes.",
      "Una oportunidad del microentorno de intermediarios.",
      "Un factor de contingencia del macroentorno tecnológico."
    ],
    respuestaCorrecta: "Una amenaza proveniente del macroentorno demográfico.",
    explicacion: "La demografía estudia las poblaciones humanas en términos de tamaño, densidad, ubicación, edad, género, raza, ocupación y otros datos estadísticos. Los cambios demográficos representan tendencias estructurales del macroentorno.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-024",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Intermediarios financieros",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Dentro del microentorno, ¿qué papel juegan los intermediarios de marketing?",
    opciones: [
      "Ayudan a la empresa a promover, vender y distribuir sus productos a los compradores finales.",
      "Suministran a la empresa la energía, maquinaria y materias primas básicas para la manufactura.",
      "Son los encargados de regular la política arancelaria de importación del sector industrial.",
      "Están integrados por los sindicatos y representantes de los empleados directos de la empresa."
    ],
    respuestaCorrecta: "Ayudan a la empresa a promover, vender y distribuir sus productos a los compradores finales.",
    explicacion: "Los intermediarios de marketing (distribuidores, empresas de logística física, agencias de servicios de marketing e intermediarios financieros) facilitan la comercialización de la oferta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-025",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno económico",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál de los siguientes factores pertenece al entorno económico del macroentorno empresarial?",
    opciones: [
      "Los cambios en el poder adquisitivo y los patrones de gasto de los consumidores debido a la inflación y el desempleo.",
      "El aumento del nivel de escolaridad formal de los jóvenes de clase media.",
      "El desarrollo de nuevas tecnologías de inteligencia artificial aplicada al análisis de inventarios.",
      "Las regulaciones gubernamentales sobre el uso obligatorio de materiales reciclables en embalajes."
    ],
    respuestaCorrecta: "Los cambios en el poder adquisitivo y los patrones de gasto de los consumidores debido a la inflación y el desempleo.",
    explicacion: "El entorno económico incluye factores que afectan el poder adquisitivo del consumidor (como el nivel de ingresos, tasas de interés, inflación) y sus hábitos de consumo asociados a estas condiciones económicas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-026",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno ecológico/natural",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Una escasez mundial de litio que afecta los costos de fabricación de baterías de autos eléctricos pertenece al:",
    opciones: [
      "Macroentorno natural (ecológico).",
      "Microentorno de competidores.",
      "Macroentorno político-legal.",
      "Microentorno tecnológico sectorial."
    ],
    respuestaCorrecta: "Macroentorno natural (ecológico).",
    explicacion: "El entorno natural abarca los recursos naturales requeridos como insumos por los mercadólogos o que son afectados por las actividades de marketing. La escasez de materias primas clave es una fuerza del macroentorno natural.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-027",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno tecnológico",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "La sustitución masiva de cámaras de película tradicionales por fotografía digital a principios del siglo XXI es un ejemplo de cómo:",
    opciones: [
      "Las fuerzas del macroentorno tecnológico pueden destruir industrias enteras y crear nuevos mercados.",
      "El microentorno de proveedores impone precios abusivos a los distribuidores tradicionales.",
      "La demografía altera drásticamente los gustos culturales de los adultos mayores de forma repentina.",
      "La globalización económica homogeniza los precios de producción en todo el mundo."
    ],
    respuestaCorrecta: "Las fuerzas del macroentorno tecnológico pueden destruir industrias enteras y crear nuevos mercados.",
    explicacion: "La tecnología es una fuerza impulsora de cambios disruptivos. Cada nueva tecnología reemplaza a una anterior, provocando obsolescencia creadora si las marcas tradicionales no se adaptan a tiempo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-028",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno político-legal",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Por qué las leyes y reglamentos de defensa de la competencia y protección al consumidor forman parte del macroentorno de marketing?",
    opciones: [
      "Porque establecen las reglas de juego legal que limitan o guían las actividades comerciales y de publicidad para proteger a la sociedad y a los consumidores.",
      "Porque definen el monto neto del presupuesto de marketing interno que la junta de socios debe aprobar anualmente.",
      "Porque incrementan de manera automática las tasas de interés crediticias en los préstamos bancarios de fomento corporativo.",
      "Porque pertenecen de manera exclusiva al control de los departamentos de compras y logística de los competidores directos."
    ],
    respuestaCorrecta: "Porque establecen las reglas de juego legal que limitan o guían las actividades comerciales y de publicidad para proteger a la sociedad y a los consumidores.",
    explicacion: "El entorno político-legal está constituido por leyes, agencias gubernamentales y grupos de presión que limitan e influyen en las diversas organizaciones y personas de una sociedad determinada.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-029",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno socio-cultural",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué factor se enmarca dentro del macroentorno sociocultural de una empresa?",
    opciones: [
      "Los valores, percepciones, preferencias y comportamientos básicos de la sociedad que influyen en las decisiones de compra diarias.",
      "Las oscilaciones del tipo de cambio entre divisas de comercio exterior en mercados globales.",
      "El desarrollo de regulaciones gubernamentales contra el monopolio de distribución en el sector.",
      "El surgimiento de patentes electrónicas abiertas para el desarrollo de software de código libre."
    ],
    respuestaCorrecta: "Los valores, percepciones, preferencias y comportamientos básicos de la sociedad que influyen en las decisiones de compra diarias.",
    explicacion: "El entorno sociocultural está formado por instituciones y otras fuerzas que influyen en los valores básicos, percepciones, gustos y comportamientos de la sociedad. Afecta directamente qué productos se consumen y el significado detrás del consumo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-030",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Públicos de la empresa",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "Dentro del microentorno, ¿cómo se define a un 'Público' de la empresa?",
    opciones: [
      "Cualquier grupo de interés que tenga un impacto real o potencial en la capacidad de la organización para alcanzar sus objetivos comerciales.",
      "Únicamente el conjunto de consumidores finales que compran la marca repetidas veces en el punto de venta.",
      "Las agencias consultoras externas de investigación cualitativa de mercados contratadas temporalmente.",
      "Los socios fundadores y accionistas mayoritarios que tienen voto en la junta directiva."
    ],
    respuestaCorrecta: "Cualquier grupo de interés que tenga un impacto real o potencial en la capacidad de la organización para alcanzar sus objetivos comerciales.",
    explicacion: "Kotler identifica 7 tipos de públicos: financieros, de medios de comunicación, gubernamentales, de acción ciudadana, locales, generales e internos. Cada uno puede facilitar u obstaculizar las metas de la firma.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-031",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Gestión proactiva",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué diferencia la gestión reactiva de la gestión proactiva ante las fuerzas del entorno comercial?",
    opciones: [
      "La reactiva considera las variables del entorno como incontrolables y se adapta a ellas; la proactiva toma medidas para influir en las fuerzas que configuran dicho entorno.",
      "La reactiva realiza auditorías de marketing semestrales, mientras que la proactiva solo actúa en situaciones críticas o de quiebra.",
      "La reactiva depende del macroentorno tecnológico; la proactiva se limita al microentorno de proveedores exclusivos.",
      "No existe diferencia operativa, ya que el macroentorno no admite respuestas estratégicas por parte de ninguna corporación."
    ],
    respuestaCorrecta: "La reactiva considera las variables del entorno como incontrolables y se adapta a ellas; la proactiva toma medidas para influir en las fuerzas que configuran dicho entorno.",
    explicacion: "Las empresas reactivas aceptan el entorno y no intentan cambiarlo. Las empresas proactivas contratan cabilderos, lanzan campaigns públicas o desarrollan innovaciones disruptivas para redefinir el mercado a su favor.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-032",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno demográfico",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Una empresa que comercializa productos de lujo observa un aumento acelerado de hogares unipersonales (personas que viven solas). Este cambio corresponde a:",
    opciones: [
      "Una tendencia del macroentorno demográfico que altera la estructura familiar de los consumidores.",
      "Una variación económica coyuntural de ingresos netos promedio de la clase media alta.",
      "Un factor competitivo directo impulsado por marcas blancas de la gran distribución.",
      "Una modificación de la legislación civil de convivencia ciudadana."
    ],
    respuestaCorrecta: "Una tendencia del macroentorno demográfico que altera la estructura familiar de los consumidores.",
    explicacion: "El cambio en la estructura familiar (menos matrimonios, postergación de la maternidad, aumento de hogares unipersonales) es una variable demográfica clásica que fuerza a las marcas a ofrecer presentaciones de producto individuales.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-033",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Microentorno proveedores",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una fábrica de helados artesanales se enfrenta a un retraso de 3 semanas por parte de su proveedor exclusivo de vainilla de Madagascar. ¿Qué impacto inmediato genera esto?",
    opciones: [
      "Una crisis en su microentorno que amenaza su capacidad operativa para abastecer a los distribuidores a tiempo.",
      "Una amenaza macroambiental de carácter estrictamente sociocultural y religioso.",
      "Una fortaleza interna que permite justificar un aumento especulativo del precio al público.",
      "Una reestructuración sistémica de los canales de distribución mayoristas internacionales."
    ],
    respuestaCorrecta: "Una crisis en su microentorno que amenaza su capacidad operativa para abastecer a los distribuidores a tiempo.",
    explicacion: "Los proveedores constituyen un eslabón vital del sistema de entrega de valor de la empresa. Los problemas de suministro (escasez, huelgas, demoras) pueden dañar la satisfacción del cliente a corto plazo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-034",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno político-legal",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "El Parlamento aprueba una ley que restringe el uso de plásticos no biodegradables en empaques de bebidas. Este escenario representa para una empresa refresquera:",
    opciones: [
      "Una fuerza reguladora del macroentorno político-legal a la que debe adaptarse modificando sus envases.",
      "Una decisión discrecional del microentorno de intermediarios comerciales.",
      "Una variable del entorno económico directo que reduce la liquidez de caja de la empresa.",
      "Una variable del microentorno de clientes que altera la demanda neta."
    ],
    respuestaCorrecta: "Una fuerza reguladora del macroentorno político-legal a la que debe adaptarse modificando sus envases.",
    explicacion: "La legislación sobre envases es parte del macroentorno político-legal (y ecológico). Obliga a las organizaciones a reestructurar sus costes y procesos productivos bajo amenaza de sanciones civiles o multas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-035",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno sociocultural",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "El auge global por la salud, el bienestar físico y el consumo de alimentos orgánicos o libres de aditivos químicos es una fuerza del:",
    opciones: [
      "Macroentorno sociocultural.",
      "Macroentorno tecnológico.",
      "Microentorno corporativo de la empresa.",
      "Macroentorno político y legislativo."
    ],
    respuestaCorrecta: "Macroentorno sociocultural.",
    explicacion: "Las tendencias de estilo de vida saludable representan cambios en los valores culturales secundarios de la sociedad. Afectan las decisiones de marketing ya que exigen reformulaciones de producto y nuevos enfoques promocionales.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-036",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Microentorno competidores",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Por qué es fundamental el análisis de los competidores dentro de la estrategia de marketing en el microentorno?",
    opciones: [
      "Porque la empresa debe proporcionar mayor valor y satisfacción al cliente que sus competidores directos, posicionando su oferta en la mente del consumidor.",
      "Porque permite acordar conjuntamente las cuotas de producción mensual para evitar excedentes industriales en el sector.",
      "Porque faculta la copia exacta de campaigns publicitarias evitando incurrir en gastos de desarrollo creativo de marcas.",
      "Porque define la jerarquía organizativa interna y los sueldos del personal de ventas directas."
    ],
    respuestaCorrecta: "Porque la empresa debe proporcionar mayor valor y satisfacción al cliente que sus competidores directos, posicionando su oferta en la mente del consumidor.",
    explicacion: "En el microentorno, la empresa no solo debe preocuparse por los clientes, sino también lograr una ventaja estratégica competitiva que le permita diferenciarse de las alternativas del mercado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-037",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno económico",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el término 'patrón de distribución del ingreso' en el macroentorno económico?",
    opciones: [
      "A la división de la riqueza de una sociedad en clases (alta, media, baja) lo que determina qué segmentos tienen poder adquisitivo para bienes de lujo o básicos.",
      "Al costo de transporte logístico por milla recorrida entre la fábrica y los diferentes puntos de venta físicos del país.",
      "A la forma en que los bancos centrales asignan créditos preferenciales para el sector comercial mayorista.",
      "Al porcentaje de impuestos directos cobrados a las empresas de servicios en comparación con las de manufactura."
    ],
    respuestaCorrecta: "A la división de la riqueza de una sociedad en clases (alta, media, baja) lo que determina qué segmentos tienen poder adquisitivo para bienes de lujo o básicos.",
    explicacion: "La distribución del ingreso varía entre países y regiones. Algunas economías tienen distribución equitativa (clase media amplia), mientras que otras presentan brechas extremas que polarizan los mercados.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-038",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno natural/ecológico",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "El concepto de 'Marketing Sostenible o Verde' se define principalmente como:",
    opciones: [
      "El esfuerzo de las empresas por desarrollar, promover y comercializar productos que minimicen el impacto negativo sobre el medio ambiente natural.",
      "El uso exclusivo del color verde en logotipos e identidades de marca para evocar tranquilidad y ecología.",
      "La reducción absoluta de toda inversión en publicidad para ahorrar recursos físicos de papel y energía eléctrica.",
      "La venta de bonos de carbono corporativos a otras empresas del sector automotriz para evadir multas locales."
    ],
    respuestaCorrecta: "El esfuerzo de las empresas por desarrollar, promover y comercializar productos que minimicen el impacto negativo sobre el medio ambiente natural.",
    explicacion: "El marketing ecológico responde a la creciente conciencia del macroentorno natural, donde los consumidores penalizan a las marcas contaminantes y premian a las que muestran responsabilidad ambiental genuina.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-039",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Macroentorno sociocultural",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Cuál es la diferencia entre los 'valores culturales básicos' y los 'valores culturales secundarios' en el macroentorno?",
    opciones: [
      "Los básicos tienen alta persistencia y se transmiten de padres a hijos; los secundarios son más abiertos al cambio y pueden ser moldeados por campañas de marketing.",
      "Los básicos corresponden solo a dogmas de fe religiosos; los secundarios abarcan las leyes de tránsito locales.",
      "Los básicos cambian cada temporada de moda; los secundarios permanecen inalterados por siglos en una misma región.",
      "No existe diferencia teórica relevante, ya que ambos conceptos son estáticos y ajenos a la influencia de las marcas."
    ],
    respuestaCorrecta: "Los básicos tienen alta persistencia y se transmiten de padres a hijos; los secundarios son más abiertos al cambio y pueden ser moldeados por campañas de marketing.",
    explicacion: "Los valores básicos (ej. creer en el matrimonio, el trabajo duro) son difíciles de alterar. Los valores secundarios (ej. la creencia en que la gente debe casarse temprano) son más flexibles, abriendo oportunidades para los mercadólogos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-040",
    simulador: "SIM-01",
    tema: "El Entorno de Marketing",
    subtema: "Microentorno clientes",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Dentro del microentorno de clientes, ¿cuál de los siguientes describe a un 'mercado de distribuidores'?",
    opciones: [
      "Empresas que adquieren bienes y servicios con el único propósito de revenderlos con un margen de ganancia o utilidad.",
      "Individuos y hogares que compran bienes para su propio consumo final y no comercial.",
      "Organizaciones públicas que adquieren bienes para producir servicios públicos o transferirlos a necesitados.",
      "Empresas manufactureras que compran insumos industriales para procesarlos e incorporarlos a otros productos finales."
    ],
    respuestaCorrecta: "Empresas que adquieren bienes y servicios con el único propósito de revenderlos con un margen de ganancia o utilidad.",
    explicacion: "Los mercados de clientes se dividen en: de consumo, industriales, de distribuidores, gubernamentales e internacionales. Los de distribuidores actúan como intermediarios comerciales.",
    fuenteBase: "Fundamentos de Marketing"
  },

  // ==========================================
  // SIM-02: Investigación, Consumidor y Segmentación (STP) (40 preguntas)
  // ==========================================
  {
    id: "Q-041",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Estructura del SIM",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué es un Sistema de Información de Marketing (SIM)?",
    opciones: [
      "Es el conjunto de personas, equipos y procedimientos diseñados para recopilar, analizar, evaluar y distribuir información oportuna y precisa a los tomadores de decisiones de marketing.",
      "Es el software ERP central de la empresa encargado exclusivamente de la nómina y facturación de almacén.",
      "Es la base de datos externa de la oficina de patentes industriales nacionales de acceso restringido.",
      "Es el canal de comunicación y soporte telefónico que conecta a los clientes con el servicio técnico."
    ],
    respuestaCorrecta: "Es el conjunto de personas, equipos y procedimientos diseñados para recopilar, analizar, evaluar y distribuir información oportuna y precisa a los tomadores de decisiones de marketing.",
    explicacion: "El SIM interactúa con los gerentes de marketing para evaluar sus necesidades de información, desarrollar la información requerida a partir de registros internos, inteligencia y estudios de mercado, y entregarla a tiempo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-042",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Componentes del SIM",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuáles son los tres componentes fundamentales de origen que alimentan al SIM con datos comerciales?",
    opciones: [
      "Los registros internos de la empresa, la inteligencia competitiva de marketing y la investigación de mercados.",
      "La publicidad exterior, el diseño gráfico corporativo y las notas de prensa institucional.",
      "Los costos fijos de fabricación, el balance general anual y el flujo de caja operativo.",
      "Las hojas de vida de los empleados, el inventario físico de activos y la factura eléctrica."
    ],
    respuestaCorrecta: "Los registros internos de la empresa, la inteligencia competitiva de marketing y la investigación de mercados.",
    explicacion: "El SIM recopila información de tres fuentes: bases de datos internas (ventas, costes), inteligencia de marketing (datos cotidianos del entorno competitivo) e investigación de mercados (estudios sistemáticos de problemas específicos).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-043",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Datos primarios vs secundarios",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es la diferencia primordial entre datos primarios y datos secundarios en una investigación de mercados?",
    opciones: [
      "Los primarios son recopilados directamente por primera vez para el propósito específico del estudio; los secundarios ya existen porque fueron recopilados previamente para otro fin.",
      "Los primarios son de alta fidelidad científica; los secundarios carecen de validez estadística y no deben ser usados.",
      "Los primarios se obtienen de libros de texto antiguos; los secundarios se consiguen a través de encuestas actuales por internet.",
      "No existe diferencia metodológica alguna, ya que ambos tipos de datos se analizan con los mismos algoritmos matemáticos."
    ],
    respuestaCorrecta: "Los primarios son recopilados directamente por primera vez para el propósito específico del estudio; los secundarios ya existen porque fueron recopilados previamente para otro fin.",
    explicacion: "Los datos secundarios (informes de gobierno, estudios sectoriales, analítica web previa) se obtienen de forma rápida y a bajo costo, pero pueden estar desactualizados. Los primarios se recogen a medida pero requieren más tiempo y presupuesto.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-044",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Diseño de investigación",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el objetivo principal de una 'investigación exploratoria' de mercados?",
    opciones: [
      "Recopilar información preliminar que ayude a definir el problema comercial real y sugerir hipótesis de trabajo.",
      "Describir con precisión las características sociodemográficas de los compradores del segmento líder.",
      "Probar relaciones causales de tipo causa-efecto entre variables como el precio y la demanda del bien.",
      "Determinar la cuota de mercado exacta que la competencia ostenta en un periodo fiscal cerrado."
    ],
    respuestaCorrecta: "Recopilar información preliminar que ayude a definir el problema comercial real y sugerir hipótesis de trabajo.",
    explicacion: "La investigación exploratoria es cualitativa, flexible e informal. Sirve para familiarizarse con fenómenos poco conocidos y guiar el diseño de investigaciones concluyentes (descriptivas o causales).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-045",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Investigación descriptiva",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza a una 'investigación descriptiva' dentro de los tipos de investigación de mercados?",
    opciones: [
      "Busca describir situaciones o mercados, respondiendo a preguntas como qué, quién, cuándo, dónde y cómo de un fenómeno comercial.",
      "Busca exclusivamente indagar la motivación inconsciente de los consumidores mediante test proyectivos de psicología clínica.",
      "Busca demostrar de manera matemática que la reducción de un 10% del precio causará un aumento del 15% en las ventas de forma directa.",
      "Consiste en una prueba a ciegas de sabor realizada en un laboratorio controlado con sensores neuronales."
    ],
    respuestaCorrecta: "Busca describir situaciones o mercados, respondiendo a preguntas como qué, quién, cuándo, dónde y cómo de un fenómeno comercial.",
    explicacion: "La investigación descriptiva define variables de mercado (ej. demografía de usuarios, actitudes de compra). Requiere planes metodológicos estructurados y muestras representativas cuantificables.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-046",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Investigación causal",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Cuál de las siguientes metodologías es la más apropiada para realizar una 'investigación causal'?",
    opciones: [
      "La experimentación controlada de mercado (ejemplo: test A/B de precios o diseños en puntos de venta).",
      "El desarrollo de un Focus Group con 8 clientes leales moderado por un psicólogo organizacional.",
      "El análisis histórico de datos secundarios de informes públicos de la competencia en el sector comercial.",
      "La observación de campo no participativa de personas en los pasillos de un supermercado."
    ],
    respuestaCorrecta: "La experimentación controlada de mercado (ejemplo: test A/B de precios o designs en puntos de venta).",
    explicacion: "La investigación causal busca establecer relaciones causa-efecto. Para aislar las variables extrañas y confirmar la causalidad, se requiere el control experimental donde se manipula una variable independiente (ej. precio) y se mide el impacto en la dependiente (ej. ventas).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-047",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Focus Group",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿En qué consiste la técnica cualitativa conocida como 'Focus Group' (grupo de enfoque)?",
    opciones: [
      "En una entrevista grupal semiestructurada donde un moderador guía la discusión de 6 a 10 participantes sobre un producto o servicio de interés comercial.",
      "En el envío masivo de cuestionarios cerrados por correo postal a una muestra probabilística de mil suscriptores.",
      "En el análisis automatizado de millones de comentarios en redes sociales mediante algoritmos predictivos.",
      "En la infiltración de un investigador disfrazado de cliente en las tiendas físicas de la competencia directa."
    ],
    respuestaCorrecta: "En una entrevista grupal semiestructurada donde un moderador guía la discusión de 6 a 10 participantes sobre un producto o servicio de interés comercial.",
    explicacion: "El Focus Group busca captar opiniones, sentimientos y percepciones profundas mediante la interacción grupal espontánea. Es una herramienta clave en la fase exploratoria cualitativa.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-048",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Investigación etnográfica",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿A qué hace referencia la 'investigación etnográfica' aplicada al marketing?",
    opciones: [
      "Al estudio del comportamiento del consumidor en su entorno natural cotidiano por parte de observadores entrenados.",
      "A la recopilación de datos demográficos oficiales del censo de población nacional del último decenio.",
      "Al análisis estadístico de la variación genética y étnica en la resistencia física a ciertos medicamentos.",
      "A la realización de encuestas telefónicas rápidas utilizando marcación aleatoria por computadora."
    ],
    respuestaCorrecta: "Al estudio del comportamiento del consumidor en su entorno natural cotidiano por parte de observadores entrenados.",
    explicacion: "La etnografía en marketing observa a los consumidores interactuando con los productos en su vida real diaria (sus hogares, lugares de trabajo, tiendas), proporcionando hallazgos que las encuestas tradicionales a menudo omiten.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-049",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Muestreo probabilístico",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué define a un 'muestreo probabilístico' en la metodología de investigación de mercados?",
    opciones: [
      "Cada miembro de la población objetivo tiene una probabilidad conocida y distinta de cero de ser seleccionado para la muestra.",
      "El investigador selecciona a los sujetos a su propio juicio subjetivo por conveniencia o cercanía geográfica.",
      "Se recluta únicamente a voluntarios que deciden participar espontáneamente a través de un banner digital.",
      "Consiste en entrevistar a cualquier persona que transite por una calle transitada en un momento dado."
    ],
    respuestaCorrecta: "Cada miembro de la población objetivo tiene una probabilidad conocida y distinta de cero de ser seleccionado para la muestra.",
    explicacion: "El muestreo probabilístico (como el aleatorio simple, sistemático o estratificado) permite calcular el error muestral y proyectar los resultados de la muestra a toda la población bajo leyes de probabilidad.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-050",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Sesgo de respuesta",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "El 'sesgo de deseabilidad social' en el diseño de encuestas de mercado se presenta cuando el encuestado:",
    opciones: [
      "Responde de forma insincera para proyectar una imagen socialmente aceptable o de estatus superior ante el entrevistador.",
      "Abandona el cuestionario a mitad del proceso de respuesta debido a su excesiva longitud.",
      "Comete errores de lectura ortográfica al contestar preguntas con opciones de respuesta múltiple.",
      "Elige siempre la primera opción de la lista para terminar la encuesta lo más rápido posible."
    ],
    respuestaCorrecta: "Responde de forma insincera para proyectar una imagen socialmente aceptable o de estatus superior ante el entrevistador.",
    explicacion: "La deseabilidad social distorsiona los estudios de temas sensibles (ej. hábitos de higiene, consumo de tabaco, o conciencia ambiental) y se mitiga garantizando el anonimato absoluto en las respuestas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-051",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Neuromarketing",
    dificultad: "avanzado",
    tipo: "aplicación",
    pregunta: "Una marca de refrescos mide la actividad cerebral de los consumidores mediante electroencefalogramas (EEG) al exponerlos a un spot publicitario. Esta técnica se denomina:",
    opciones: [
      "Neuromarketing.",
      "Investigación etnográfica digital.",
      "Focus group dinámico asistido.",
      "Test de asociación libre predictiva."
    ],
    respuestaCorrecta: "Neuromarketing.",
    explicacion: "El neuromarketing aplica tecnologías neurocientíficas (EEG, fMRI, seguimiento ocular) para medir las respuestas fisiológicas inconscientes y emocionales de los consumidores ante los estímulos de marketing.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-052",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Diseño de cuestionarios",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué es una 'pregunta de escala Likert' en un cuestionario de investigación de mercados?",
    opciones: [
      "Es una pregunta cerrada que mide el nivel de acuerdo o desacuerdo de un encuestado frente a una afirmación específica.",
      "Es una pregunta abierta donde el consumidor describe libremente sus sentimientos de marca.",
      "Es una pregunta filtro que divide la muestra entre compradores y no compradores del producto.",
      "Es un tipo de test proyectivo basado en la interpretación de manchas de tinta amorfas."
    ],
    respuestaCorrecta: "Es una pregunta cerrada que mide el nivel de acuerdo o desacuerdo de un encuestado frente a una afirmación específica.",
    explicacion: "La escala Likert es ampliamente utilizada en marketing para medir actitudes y opiniones cuantitativamente (típicamente en niveles de 1 a 5, de 'Totalmente en desacuerdo' a 'Totalmente de acuerdo').",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-053",
    simulador: "SIM-02",
    tema: "El Sistema de Información de Marketing (SIM) e Investigación de Mercados",
    subtema: "Inteligencia de marketing",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el límite ético principal de la 'Inteligencia Competitiva de Marketing'?",
    opciones: [
      "Debe basarse en la obtención legítima de información de dominio público, evitando tácticas de espionaje industrial o robo de secretos comerciales.",
      "Debe prohibir la compra y lectura de informes anuales de competidores disponibles en bolsas de valores.",
      "Debe impedir que los vendedores de la empresa escuchen comentarios cotidianos de los distribuidores de la zona.",
      "Debe limitarse al análisis de la propia marca, ignorando por completo la existencia de ofertas rivales en el mercado."
    ],
    respuestaCorrecta: "Debe basarse en la obtención legítima de información de dominio público, evitando tácticas de espionaje industrial o robo de secretos comerciales.",
    explicacion: "La inteligencia de marketing analiza datos disponibles de forma legal y ética (ejemplo: folletos, webs de competidores, compras de misterio). Hackear sistemas o sobornar personal de la competencia cruza el límite de la legalidad y la ética comercial.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-054",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Caja negra del consumidor",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "En el modelo de comportamiento del consumidor, ¿a qué hace referencia la metáfora de la 'caja negra'?",
    opciones: [
      "A los procesos mentales inconscientes y la estructura psicológica del comprador que transforman los estímulos externos en respuestas de compra.",
      "A la base de datos digital encriptada donde se registran las transacciones de tarjetas de crédito del cliente.",
      "Al empaque de seguridad de alta resistencia utilizado para el transporte de mercancías valiosas en canales logísticos.",
      "A la porción del mercado meta que se niega sistemáticamente a contestar encuestas de satisfacción comercial."
    ],
    respuestaCorrecta: "A los procesos mentales inconscientes y la estructura psicológica del comprador que transforman los estímulos externos en respuestas de compra.",
    explicacion: "La caja negra del consumidor (compuesta por sus características personales y su proceso de decisión) recibe estímulos (las 4 P del marketing y fuerzas del entorno) y los procesa para producir respuestas (elección de marca, momento de compra).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-055",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Factores culturales",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Por qué la 'subcultura' es un factor crítico en el análisis del comportamiento del consumidor?",
    opciones: [
      "Porque representa grupos de personas que comparten sistemas de valores basados en experiencias y situaciones comunes en sus vidas (como la nacionalidad, religión o etnia).",
      "Porque determina de manera fija el nivel de ingresos mínimos y el salario básico que percibe un trabajador.",
      "Porque describe únicamente los pasatiempos deportivos de la población infantil menor a los 10 años.",
      "Porque corresponde al conjunto de leyes ambientales que restringen la publicidad exterior en el centro urbano."
    ],
    respuestaCorrecta: "Porque representa grupos de personas que comparten sistemas de valores basados en experiencias y situaciones comunes en sus vidas (como la nacionalidad, religión o etnia).",
    explicacion: "Las subculturas configuran segmentos de mercado importantes y las empresas a menudo diseñan productos y programas de marketing adaptados a sus valores y preferences particulares.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-056",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Clase social",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "La 'clase social' de un individuo en marketing no se mide únicamente por sus ingresos, sino que combina variables como:",
    opciones: [
      "La ocupación laboral, el nivel educativo formal y el área de residencia o riqueza acumulada.",
      "El número de seguidores en redes sociales y la velocidad de su conexión a internet.",
      "Su historial de créditos bancarios aprobados en el último semestre y sus ahorros líquidos.",
      "El tipo de transporte que utiliza para acudir a su centro de trabajo principal."
    ],
    respuestaCorrecta: "La ocupación laboral, el nivel educativo formal y el área de residencia o riqueza acumulada.",
    explicacion: "La clase social representa divisiones relativamente permanentes y ordenadas en una sociedad cuyos miembros comparten valores, intereses y conductas similares, determinados de forma multifactorial.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-057",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Factores sociales",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué papel cumple un 'líder de opinión' en el comportamiento de compra de un grupo de consumidores?",
    opciones: [
      "Es una persona dentro de un grupo de referencia que, debido a sus habilidades, conocimientos o personalidad especiales, ejerce influencia sobre otros.",
      "Es el directivo de la empresa encargado de autorizar los precios finales de venta al público en los locales comerciales.",
      "Es el legislador público encargado de sancionar normativas de publicidad engañosa en el parlamento.",
      "Es un cliente insatisfecho que interpone demandas judiciales formales contra los fabricantes."
    ],
    respuestaCorrecta: "Es una persona dentro de un grupo de referencia que, debido a sus habilidades, conocimientos o personalidad especiales, ejerce influencia sobre otros.",
    explicacion: "Las marcas buscan identificar y dirigir sus esfuerzos a los líderes de opinión (o 'influencers') de sus segmentos para que actúen como amplificadores y prescriptores de la oferta comercial.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-058",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Factores personales",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el concepto de 'estilo de vida' en la segmentación psicográfica del consumidor?",
    opciones: [
      "Al patrón de vida de una persona expresado en términos de sus actividades, intereses y opiniones (psicografía).",
      "Al nivel socioeconómico exacto medido por el patrimonio neto familiar disponible para gastos.",
      "Al ciclo de vida de la empresa fabricante desde su fundación hasta su posicionamiento actual.",
      "Al número de integrantes que habitan bajo el mismo techo y comparten la canasta de compras."
    ],
    respuestaCorrecta: "Al patrón de vida de una persona expresado en términos de sus actividades, intereses y opiniones (psicografía).",
    explicacion: "El estilo de vida perfila la forma de interactuar de una persona con el mundo. Dos personas con el mismo perfil demográfico y de ingresos pueden tomar decisiones de consumo radicalmente distintas según su estilo de vida.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-059",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Factores psicológicos",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Según Abraham Maslow, ¿cuál es la jerarquía correcta en la que se ordenan las necesidades humanas desde la base hasta la cima?",
    opciones: [
      "Fisiológicas, de seguridad, sociales, de estima y de autorrealización.",
      "De estima, sociales, de seguridad, fisiológicas y de autorrealización.",
      "Fisiológicas, sociales, de estima, de seguridad y de autorrealización.",
      "Seguridad, fisiológicas, sociales, de autorrealización y de estima."
    ],
    respuestaCorrecta: "Fisiológicas, de seguridad, sociales, de estima y de autorrealización.",
    explicacion: "La teoría de Maslow postula que las personas buscan satisfacer sus necesidades básicas (fisiológicas, seguridad) antes de pasar a necesidades de orden superior (sociales, estima, autorrealización).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-060",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Factores psicológicos",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué es la 'retención selectiva' en el proceso perceptivo del consumidor?",
    opciones: [
      "La tendencia de las personas a recordar los aspectos positivos de una marca que prefieren y a olvidar los de las marcas competidoras.",
      "El filtrado inconsciente que hace el cerebro para bloquear la gran mayoría de estímulos publicitarios a los que se expone.",
      "La distorsión del cliente de la información comercial para adaptarla a sus creencias previas.",
      "El almacenamiento permanente de datos de tarjetas de crédito para compras rápidas en una aplicación móvil."
    ],
    respuestaCorrecta: "La tendencia de las personas a recordar los aspectos positivos de una marca que prefieren y a olvidar los de las marcas competidoras.",
    explicacion: "El procesamiento de información humana es selectivo. Incluye la atención selectiva (qué notamos), la distorsión selectiva (cómo lo interpretamos) y la retención selectiva (qué recordamos a largo plazo).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-061",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Proceso de decisión de compra",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es el primer paso en el proceso de decisión de compra del consumidor final?",
    opciones: [
      "El reconocimiento de la necesidad o problema a resolver.",
      "La búsqueda activa de información comercial y técnica.",
      "La evaluación comparativa de las alternativas del mercado.",
      "La decisión final de compra del producto o marca elegida."
    ],
    respuestaCorrecta: "El reconocimiento de la necesidad o problema a resolver.",
    explicacion: "El proceso de decisión de compra inicia cuando el consumidor detecta una diferencia entre su estado real and un estado deseado, activado por estímulos internos (hambre, sed) o externos (publicidad, sugerencia de un amigo).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-062",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Disonancia cognoscitiva",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es la 'disonancia cognoscitiva' post-compra?",
    opciones: [
      "La tensión o incomodidad mental que experimenta el comprador después de la compra debido a las dudas sobre si tomó la decisión correcta frente a las alternativas rechazadas.",
      "El rechazo absoluto que siente el cliente al recibir un trato descortés en el punto de venta por parte del vendedor.",
      "La incapacidad del cliente para distinguir entre marcas similares al realizar una prueba de cata a ciegas.",
      "La satisfacción total de un cliente al recibir un descuento de última hora no planeado."
    ],
    respuestaCorrecta: "La tensión o incomodidad mental que experimenta el comprador después de la compra debido a las dudas sobre si tomó la decisión correcta frente a las alternativas rechazadas.",
    explicacion: "Casi todas las compras importantes generan disonancia cognoscitiva. El cliente experimenta malestar por haber descartado los beneficios de las otras marcas. Las marcas mitigan esto con garantías y comunicación post-venta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-063",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Proceso de adopción",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "Según Everett Rogers en la difusión de innovaciones, ¿cuáles son los cinco grupos de adoptantes de un nuevo producto según su rapidez de adopción?",
    opciones: [
      "Innovadores, adoptadores tempranos, mayoría temprana, mayoría tardía y rezagados.",
      "Líderes, seguidores, imitadores, indiferentes e inconformes.",
      "Pioneros, masa crítica, conservadores, escépticos e históricos.",
      "Consumidores leales, compradores habituales, buscadores de promociones, mariposas y lapas."
    ],
    respuestaCorrecta: "Innovadores, adoptadores tempranos, mayoría temprana, mayoría tardía y rezagados.",
    explicacion: "Rogers describe una curva de distribución normal donde los innovadores (2.5%) y adoptadores tempranos (13.5%) adoptan el bien al inicio, seguidos por la mayoría temprana y tardía (34% cada una), y finalmente los rezagados (16%).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-064",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Proceso de decisión de compra organizacional",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En el comportamiento de compra industrial (B2B), ¿qué es el 'centro de compras'?",
    opciones: [
      "El conjunto de todos los individuos y unidades que participan en el proceso de toma de decisiones de compra de la organización.",
      "El departamento de compras físico y la oficina del jefe de almacén general de la fábrica.",
      "La zona comercial geográfica donde se concentran los principales proveedores industriales.",
      "La plataforma de e-procurement mediante la cual se realizan las subastas inversas de insumos."
    ],
    respuestaCorrecta: "El conjunto de todos los individuos y unidades que participan en el proceso de toma de decisiones de compra de la organización.",
    explicacion: "El centro de compras no es una unidad fija ni estructurada formalmente en el organigrama, sino un grupo informal de personas con roles diversos (usuarios, influenciadores, compradores, decisores, guardianes) en el proceso de adquisición corporativa.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-065",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Tipos de comportamiento de compra",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Un comportamiento de compra que se caracteriza por una alta participación del consumidor debido al alto costo o riesgo del producto, pero donde percibe pocas diferencias entre marcas, se conoce como:",
    opciones: [
      "Comportamiento de compra que reduce la disonancia.",
      "Comportamiento de compra complejo.",
      "Comportamiento de compra habitual.",
      "Comportamiento de compra que busca la variedad."
    ],
    respuestaCorrecta: "Comportamiento de compra que reduce la disonancia.",
    explicacion: "Cuando el producto es caro o poco frecuente (alta participación) pero las marcas se perciben como idénticas, el consumidor compra con relativa rapidez basándose en el precio o conveniencia, y luego puede experimentar disonancia cognoscitiva post-compra.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-066",
    simulador: "SIM-02",
    tema: "Comportamiento del Consumidor",
    subtema: "Comportamiento de compra complejo",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza al 'comportamiento de compra complejo' del consumidor?",
    opciones: [
      "Alta participación del consumidor en la compra y diferencias significativas percibidas entre las marcas del mercado.",
      "Baja participación del consumidor en la compra y nula diferencia percibida entre los productos disponibles.",
      "Baja implicación emocional del comprador y búsqueda continua de variedad probando marcas de bajo costo.",
      "Decisión de compra automática e inconsciente basada en la disposición física del lineal de supermercado."
    ],
    respuestaCorrecta: "Alta participación del consumidor en la compra y diferencias significativas percibidas entre las marcas del mercado.",
    explicacion: "Se presenta ante compras costosas, poco frecuentes o con alto riesgo autopercibido (ejemplo: comprar un automóvil o una casa). El consumidor pasa por un proceso de aprendizaje activo, desarrollando creencias y actitudes antes de tomar la decisión.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-067",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Concepto de Segmentación",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿En qué consiste el proceso de 'segmentación de mercado'?",
    opciones: [
      "En dividir un mercado en grupos más pequeños de compradores con diferentes necesidades, características o comportamientos que podrían requerir productos o mezclas de marketing distintos.",
      "En vender el mismo producto con el mismo precio a toda la población sin distinción geográfica ni demográfica.",
      "En fusionar diferentes líneas de productos de marcas rivales bajo un mismo nombre comercial genérico.",
      "En fijar el precio de venta sugerido al público final a partir de los costos fijos de fabricación."
    ],
    respuestaCorrecta: "En dividir un mercado en grupos más pequeños de compradores con diferentes necesidades, características o comportamientos que podrían requerir productos o mezclas de marketing distintos.",
    explicacion: "La segmentación reconoce que los compradores no son homogéneos. Al segmentar, la empresa puede adaptar su propuesta de valor para atender de forma más precisa y eficiente a grupos con intereses específicos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-068",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Criterios demográficos",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál de las siguientes variables pertenece estrictamente a los criterios de 'segmentación demográfica'?",
    opciones: [
      "La edad, el género, el tamaño de la familia, el ciclo de vida familiar, los ingresos, la ocupación y la educación.",
      "La región geográfica, el clima, el tamaño de la ciudad y la densidad poblacional de la zona.",
      "La clase social, el estilo de vida de los consumidores y sus rasgos principales de personalidad.",
      "La frecuencia de uso del producto, el nivel de lealtad a la marca y los beneficios buscados en la compra."
    ],
    respuestaCorrecta: "La edad, el género, el tamaño de la familia, el ciclo de vida familiar, los ingresos, la ocupación y la educación.",
    explicacion: "Las variables demográficas son los criterios más populares para segmentar porque las necesidades y deseos de los clientes suelen variar de la mano con estas variables y son más fáciles de medir que otros factores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-069",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Segmentación psicográfica",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "La segmentación basada en la clase social, el estilo de vida o las características de la personalidad del consumidor se denomina:",
    opciones: [
      "Segmentación psicográfica.",
      "Segmentación demográfica.",
      "Segmentación conductual.",
      "Segmentación geográfica."
    ],
    respuestaCorrecta: "Segmentación psicográfica.",
    explicacion: "La psicografía ayuda a comprender el 'por qué' del consumo. Personas de un mismo grupo demográfico pueden exhibir perfiles psicográficos muy distintos, explicando sus diferentes preferences por marcas de nicho, aventura, ecología, etc.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-070",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Segmentación conductual",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Si una aerolínea segmenta a sus pasajeros en 'viajeros frecuentes', 'viajeros ocasionales' y 'no viajeros', está utilizando un criterio de segmentación de tipo:",
    opciones: [
      "Conductual o de comportamiento.",
      "Psicográfico por estilo de vida.",
      "Demográfico por ciclo familiar.",
      "Geográfico por densidad de población."
    ],
    respuestaCorrecta: "Conductual o de comportamiento.",
    explicacion: "La segmentación conductual clasifica a los compradores según sus conocimientos, actitudes, usos o respuestas a un producto (tasa de utilización, ocasiones de uso, lealtad de marca, beneficios buscados).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-071",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Requisitos para segmentar",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "Para que un segmento de mercado resulte verdaderamente útil para la empresa, debe cumplir con cinco condiciones básicas. Estas son:",
    opciones: [
      "Medible, accesible, sustancial, diferenciable y aplicable (procesable).",
      "Internacional, digital, económico, masivo y único.",
      "Temporal, regulado, legal, de bajo precio y homogéneo.",
      "Virtual, escalable, subsidiado por el gobierno, duradero y directo."
    ],
    respuestaCorrecta: "Medible, accesible, sustancial, diferenciable y aplicable (procesable).",
    explicacion: "Un segmento inútil sería aquel cuya dimensión no se pueda cuantificar (no medible), que la empresa no pueda alcanzar con su distribución (no accesible), que no sea lo suficientemente grande para ser rentable (no sustancial), que responda igual que otros segmentos a las campañas (no diferenciable) o que la empresa no tenga recursos para atender (no aplicable).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-072",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Targeting masivo",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "La estrategia de cobertura de mercado en la que la empresa decide ignorar las diferencias entre los segmentos y dirigirse a todo el mercado con una sola oferta masiva se denomina:",
    opciones: [
      "Marketing indiferenciado (o masivo).",
      "Marketing diferenciado (segmentado).",
      "Marketing concentrado (o de nicho).",
      "Micromarketing o marketing local."
    ],
    respuestaCorrecta: "Marketing indiferenciado (o masivo).",
    explicacion: "El marketing indiferenciado se enfoca en los aspectos comunes de las necesidades de los consumidores y no en sus diferencias. Su gran ventaja son los ahorros de costes de producción y distribución masiva, pero enfrenta fuerte competencia directa.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-073",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Marketing de nicho",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué define a una estrategia de 'marketing concentrado' (o de nicho)?",
    opciones: [
      "La empresa persigue una gran cuota dentro de uno o unos pocos submercados o nichos específicos, en lugar de buscar una pequeña cuota en un gran mercado.",
      "La empresa lanza múltiples ofertas personalizadas para cada segmento demográfico del país.",
      "La organización vende productos sin marca comercial a través de canales de bajo costo.",
      "El fabricante distribuye sus productos únicamente por medio de tiendas físicas propias excluyendo internet."
    ],
    respuestaCorrecta: "La empresa persigue una gran cuota dentro de uno o unos pocos submercados o nichos específicos, en lugar de buscar una pequeña cuota en un gran mercado.",
    explicacion: "El marketing concentrado es idóneo para empresas con recursos limitados. Permite lograr una posición sólida en el segmento gracias a un mayor conocimiento de las necesidades de ese grupo y una reputación especial.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-074",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Diferenciación",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cómo se define la 'diferenciación' en el desarrollo de la oferta comercial?",
    opciones: [
      "El acto de diseñar un conjunto de diferencias significativas en la oferta de la empresa para distinguirla de las ofertas de los competidores.",
      "El cambio semanal de precios de venta en base a las fluctuaciones cambiarias del mercado de valores.",
      "La variación del catálogo de productos únicamente de acuerdo a las estaciones climatológicas del año.",
      "El empaque de los productos de forma idéntica al líder de categoría para confundir al comprador."
    ],
    respuestaCorrecta: "El acto de diseñar un conjunto de diferencias significativas en la oferta de la empresa para distinguirla de las ofertas de los competidores.",
    explicacion: "La diferenciación es el cimiento de la ventaja competitiva. Puede basarse en los atributos físicos del producto, en el canal de distribución, en la imagen de la marca o en la calidad de los servicios asociados.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-075",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Posicionamiento",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "En el marketing clásico, el 'posicionamiento de un producto' se define como:",
    opciones: [
      "El lugar que ocupa el producto en la mente de los consumidores en relación con los productos de la competencia.",
      "La ubicación exacta en las góndolas y lineales del supermercado (zonas frías y calientes).",
      "La cuota de participación de mercado en volumen que la marca ostenta a nivel nacional.",
      "El puesto físico y coordenadas GPS de los centros de almacenamiento y distribución del producto."
    ],
    respuestaCorrecta: "El lugar que ocupa el producto en la mente de los consumidores en relación con los productos de la competencia.",
    explicacion: "El posicionamiento es la percepción mental que tiene el cliente del producto. Los mercadólogos planean posicionamientos que den a sus productos la mayor ventaja competitiva en los mercados meta seleccionados.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-076",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Propuesta de valor",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué es la 'propuesta de valor' completa de una marca?",
    opciones: [
      "La mezcla completa de beneficios sobre los cuales se posiciona la marca (la respuesta a la pregunta: ¿Por qué debería comprar su marca?).",
      "El precio de fábrica sugerido para los distribuidores mayoristas antes del IVA.",
      "El manifiesto de misión social impreso en los folletos de relaciones públicas de la empresa.",
      "La valoración en dólares que la empresa le da a su cartera total de marcas registradas."
    ],
    respuestaCorrecta: "La mezcla completa de beneficios sobre los cuales se posiciona la marca (la respuesta a la pregunta: ¿Por qué debería comprar su marca?).",
    explicacion: "La propuesta de valor representa el conjunto de beneficios y valores que promete entregar a los consumidores para satisfacer sus necesidades. Se expresa a menudo con enfoques como 'Más por más', 'Más por lo mismo', o 'Menos por mucho menos'.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-077",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Mapa de posicionamiento",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "¿Para qué sirve un 'mapa perceptivo de posicionamiento'?",
    opciones: [
      "Para graficar de forma bidimensional cómo perciben los consumidores a diferentes marcas frente a atributos clave como precio y calidad.",
      "Para marcar la ubicación física de las tiendas de la competencia en un plano cartográfico o satelital.",
      "Para detallar la estructura organizativa de los canales de intermediarios financieros de la región.",
      "Para estimar el presupuesto de publicidad necesario en las diversas plataformas de medios."
    ],
    respuestaCorrecta: "Para graficar de forma bidimensional cómo perciben los consumidores a diferentes marcas frente a atributos clave como precio y calidad.",
    explicacion: "Los mapas perceptivos o de posicionamiento muestran las percepciones del consumidor sobre las marcas de la competencia en comparación con la marca propia en dimensiones de compra importantes.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-078",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Estrategia de posicionamiento",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un fabricante de automóviles posiciona su nueva camioneta eléctrica como 'Más espacio y mayor autonomía al mismo precio que las camionetas de gasolina tradicionales'. ¿Qué tipo de estrategia de posicionamiento describe?",
    opciones: [
      "Más por lo mismo.",
      "Más por más.",
      "Lo mismo por menos.",
      "Menos por mucho menos."
    ],
    respuestaCorrecta: "Más por lo mismo.",
    explicacion: "La empresa ofrece una mayor propuesta de beneficios (más espacio y autonomía eléctrica) manteniendo el nivel de precios de la categoría tradicional ('al mismo precio'), lo que corresponde a la estrategia de 'Más por lo mismo'.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-079",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Micromarketing",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere la estrategia de 'micromarketing'?",
    opciones: [
      "A la práctica de adaptar los productos y los programas de marketing a las necesidades y preferences de clientes individuales y lugares específicos.",
      "A la exportación de pequeños volúmenes de manufactura a países con economías en recesión.",
      "A la comercialización de juguetes miniatura o bienes a microescala para mercados infantiles.",
      "Al uso exclusivo de micro-influencers de menos de mil seguidores en campañas publicitarias locales."
    ],
    respuestaCorrecta: "A la práctica de adaptar los productos y los programas de marketing a las necesidades y preferences de clientes individuales y lugares específicos.",
    explicacion: "El micromarketing incluye el marketing local (personalización para ciudades, tiendas) y el marketing individual o uno a uno (personalización masiva a la medida de cada comprador final).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-080",
    simulador: "SIM-02",
    tema: "Segmentación, Selección de Mercado Meta y Posicionamiento",
    subtema: "Diferenciación por el personal",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Una cadena de hoteles de lujo entrena rigurosamente a todos sus recepcionistas para que sean excepcionalmente corteses, serviciales y memoricen los nombres de los huéspedes frecuentes. Esta firma se está diferenciando a través de:",
    opciones: [
      "Las personas (personal).",
      "Los canales de distribución.",
      "El producto físico.",
      "La imagen visual y marca."
    ],
    respuestaCorrecta: "Las personas (personal).",
    explicacion: "La diferenciación por el personal ocurre cuando una compañía contrata y capacita mejor a sus empleados en comparación con los competidores. Es vital en empresas de servicios donde la interacción cara a cara define la experiencia.",
    fuenteBase: "Fundamentos de Marketing"
  },
  // ==========================================
  // SIM-03: Estrategia de Producto y Precios (40 preguntas)
  // ==========================================
  {
    id: "Q-081",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Definición de Producto",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "Dentro de la mezcla de marketing, ¿cómo se define técnicamente un 'producto'?",
    opciones: [
      "Cualquier cosa que se pueda ofrecer en un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad.",
      "Únicamente los bienes materiales tangibles que salen de una línea de ensamblaje industrial.",
      "La suma monetaria neta facturada al cliente final por concepto de compra de repuestos.",
      "El margen de beneficio bruto obtenido tras deducir los costes de fabricación de un servicio."
    ],
    respuestaCorrecta: "Cualquier cosa que se pueda ofrecer en un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad.",
    explicacion: "Un producto no es solo un objeto físico; abarca servicios, eventos, personas, lugares, organizaciones, ideas o combinaciones de estas entidades, todos capaces de generar valor e intercambio.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-082",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Niveles de producto",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuáles son los tres niveles principales de un producto descritos por Kotler?",
    opciones: [
      "Producto básico (o valor esencial), producto real y producto aumentado.",
      "Producto económico, producto comercial y producto premium.",
      "Producto primario, producto secundario y producto terciario.",
      "Producto físico, producto digital y producto híbrido."
    ],
    respuestaCorrecta: "Producto básico (o valor esencial), producto real y producto aumentado.",
    explicacion: "El valor esencial es el beneficio básico que busca el cliente (ej. comunicación). El producto real es el bien físico con marca, diseño, calidad, empaque. El producto aumentado son los servicios añadidos (garantía, entrega a domicilio, financiamiento).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-083",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Clasificación de bienes de consumo",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué define a un 'producto de conveniencia' dentro de los bienes de consumo?",
    opciones: [
      "Un bien de consumo que el cliente suele adquirir con frecuencia, de inmediato y con un mínimo esfuerzo de comparación y compra.",
      "Un producto costoso que requiere visitas a tiendas especializadas y meses de evaluación técnica previa.",
      "Un artículo que el consumidor no conoce o que normalmente no piensa comprar de manera voluntaria.",
      "Bienes con características únicas o identificación de marca por las cuales los clientes hacen un esfuerzo de compra especial."
    ],
    respuestaCorrecta: "Un bien de consumo que el cliente suele adquirir con frecuencia, de inmediato y con un mínimo esfuerzo de comparación y compra.",
    explicacion: "Los productos de conveniencia (pan, periódicos, refrescos) suelen ser de bajo precio y alta disponibilidad, requiriendo estrategias de distribución intensiva.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-084",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Productos de comparación",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál de las siguientes es una característica de los 'productos de comparación' o compra seleccionada?",
    opciones: [
      "El cliente compara la idoneidad, calidad, precio y estilo en varios establecimientos antes de comprar.",
      "Se compran con frecuencia habitual en tiendas de conveniencia de barrio.",
      "Los consumidores nunca realizan comparaciones de precio porque la marca es exclusiva.",
      "Son productos cuya demanda desaparece por completo en épocas de inflación."
    ],
    respuestaCorrecta: "El cliente compara la idoneidad, calidad, precio y estilo en varios establecimientos antes de comprar.",
    explicacion: "Ejemplos de bienes de comparación son la ropa, electrodomésticos y muebles. Los consumidores dedican tiempo y esfuerzo a recopilar datos y evaluar opciones antes de la compra.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-085",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Mezcla de productos",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En la gestión de la cartera de productos, ¿cuál es la diferencia entre 'consistencia' y 'amplitud' de la mezcla de productos?",
    opciones: [
      "La amplitud es el número de líneas de producto distintas que maneja la empresa; la consistencia se refiere al grado de relación entre las líneas en su uso final o distribución.",
      "La amplitud es la cantidad de variantes de colores de un mismo modelo; la consistencia es el número de fábricas que posee la empresa.",
      "La amplitud mide la duración física del empaque; la consistencia mide la densidad física del material del producto.",
      "No existe diferencia, dado que ambos términos son sinónimos del concepto de longitud de la mezcla."
    ],
    respuestaCorrecta: "La amplitud es el número de líneas de producto distintas que maneja la empresa; la consistencia se refiere al grado de relación entre las líneas en su uso final o distribución.",
    explicacion: "La mezcla de productos tiene cuatro dimensiones: amplitud (número de líneas), longitud (total de artículos), profundidad (versiones de cada producto) y consistencia (relación entre líneas).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-086",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Servicios",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuáles son las cuatro características fundamentales que diferencian a los servicios de los bienes físicos?",
    opciones: [
      "Intangibilidad, inseparabilidad, variabilidad (heterogeneidad) y caducidad (carácter perecedero).",
      "Bajo precio, distribución masiva, durabilidad física y diseño estético.",
      "Digitalización, importación libre, monopolio de marca y facilidad de empaque.",
      "Estandarización absoluta, tangibilidad física, almacenamiento perpetuo y propiedad inmediata."
    ],
    respuestaCorrecta: "Intangibilidad, inseparabilidad, variabilidad (heterogeneidad) y caducidad (carácter perecedero).",
    explicacion: "Los servicios no se pueden ver ni tocar antes de la compra (intangibles); se producen y consumen a la vez (inseparables); su calidad depende de quién, cuándo y dónde se presten (variables); y no se pueden almacenar para venta futura (caducan).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-087",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Valor de marca",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cómo se define el 'valor de marca' (Brand Equity)?",
    opciones: [
      "El efecto diferencial positivo que el conocimiento del nombre de la marca tiene en la respuesta del cliente ante el producto y su marketing.",
      "El valor total de los activos inmobiliarios e infraestructura física que tiene una empresa multinacional.",
      "El costo acumulado por concepto de registro de patentes y logotipos comerciales ante la ley.",
      "La cantidad de dinero que los competidores pagan por alquilar los camiones de reparto de la compañía."
    ],
    respuestaCorrecta: "El efecto diferencial positivo que el conocimiento del nombre de la marca tiene en la respuesta del cliente ante el producto y su marketing.",
    explicacion: "Una marca con sólido Brand Equity goza de mayor lealtad, preferencia, resistencia a las crisis competitivas de precio y facilidad para el lanzamiento de extensiones de línea.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-088",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Estrategia de branding",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "Una empresa con una marca de yogur consolidada decide lanzar una nueva línea de yogur líquido sabor coco-mango bajo la misma marca. Esta estrategia de marca se denomina:",
    opciones: [
      "Extensión de línea.",
      "Extensión de marca.",
      "Multimarcas.",
      "Marcas nuevas."
    ],
    respuestaCorrecta: "Extensión de línea.",
    explicacion: "Una extensión de línea introduce artículos adicionales en la misma categoría de productos y bajo el mismo nombre de marca (nuevos sabores, formas, colores, ingredientes).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-089",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Estrategia de branding",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "Si un fabricante de calzado deportivo de prestigio utiliza el mismo nombre de su marca para lanzar una nueva línea de relojes inteligentes de alta gama, está aplicando una estrategia de:",
    opciones: [
      "Extensión de marca.",
      "Extensión de línea.",
      "Co-branding corporativo.",
      "Licenciamiento de patentes."
    ],
    respuestaCorrecta: "Extensión de marca.",
    explicacion: "Una extensión de marca lanza un producto en una categoría completamente nueva utilizando la marca existente ya posicionada, aprovechando el prestigio del nombre para reducir los costes de introducción.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-090",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Co-branding",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Una marca de ropa deportiva diseña una línea de tenis de colección en alianza con una marca fabricante de llantas de carreras, incorporando ambos logotipos en el producto. Esta práctica es un ejemplo de:",
    opciones: [
      "Co-branding o alianza de marcas.",
      "Extensión de marca multicanal.",
      "Estrategia de marcas privadas.",
      "Distribución selectiva cruzada."
    ],
    respuestaCorrecta: "Co-branding o alianza de marcas.",
    explicacion: "El co-branding es el uso de dos marcas establecidas en un mismo producto o servicio para captar la atención de los clientes de ambas marcas y generar mayor valor percibido combinado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-091",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Marca privada",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es una 'marca privada' (también conocida como marca del distribuidor o marca blanca)?",
    opciones: [
      "Una marca creada y de propiedad del distribuidor (intermediario minorista) que este vende de forma exclusiva en sus propios establecimientos.",
      "Una marca protegida por secreto militar y de uso exclusivo en contrataciones públicas de defensa.",
      "Un nombre comercial registrado que la empresa fabricante se niega a publicitar en televisión.",
      "Un producto genérico sin nombre de marca que se vende a granel a los sectores agrarios."
    ],
    respuestaCorrecta: "Una marca creada y de propiedad del distribuidor (intermediario minorista) que este vende de forma exclusiva en sus propios establecimientos.",
    explicacion: "Las marcas privadas (ejemplo: las marcas de los supermercados) compiten fuertemente con las marcas de los fabricantes nacionales y suelen ofrecer márgenes más altos para el minorista y menores precios al consumidor.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-092",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Empaque",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "El empaque de un producto delempeña funciones críticas en el marketing mix, las cuales incluyen:",
    opciones: [
      "Proteger el producto, facilitar su manejo, comunicar los beneficios de la marca y llamar la atención en el punto de venta.",
      "Incrementar de manera artificial el peso del producto para cobrar tarifas logísticas más caras.",
      "Ocultar los ingredientes reales o químicos dañinos para evitar regulaciones del macroentorno político-legal.",
      "Evitar a toda costa que el cliente conozca el precio de venta al público en los lineales de supermercado."
    ],
    respuestaCorrecta: "Proteger el producto, facilitar su manejo, comunicar los beneficios de la marca y llamar la atención en el punto de venta.",
    explicacion: "El empaque ha evolucionado y hoy se considera 'el vendedor silencioso', siendo la última oportunidad de convencer al comprador en el lineal de la tienda.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-093",
    simulador: "SIM-03",
    tema: "Estrategia de Producto y Gestión de Marca",
    subtema: "Servicio de soporte al cliente",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Los servicios de soporte al cliente, como las garantías y la instalación gratuita, pertenecen al nivel de:",
    opciones: [
      "Producto aumentado.",
      "Producto real.",
      "Beneficio básico o esencial.",
      "Producto esperado o estándar."
    ],
    respuestaCorrecta: "Producto aumentado.",
    explicacion: "El producto aumentado engloba a todos los servicios y beneficios adicionales que rodean a la oferta real del producto (garantía, instalación, soporte telefónico, financiamiento).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-094",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Etapas del ciclo de vida",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuáles son las cinco etapas del ciclo de vida de un producto (CVP) en el orden cronológico estándar?",
    opciones: [
      "Desarrollo del producto, introducción, crecimiento, madurez y declive.",
      "Introducción, crecimiento, madurez, declive y obsolescencia total.",
      "Diseño, validación comercial, lanzamiento, masificación y quiebra.",
      "Investigación, penetración de mercado, auge competitivo, declinación y salida física."
    ],
    respuestaCorrecta: "Desarrollo del producto, introducción, crecimiento, madurez y declive.",
    explicacion: "El ciclo de vida del producto describe la evolución de las ventas y las utilidades de un producto a lo largo del tiempo, requiriendo diferentes estrategias de marketing mix para cada fase.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-095",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Etapa de introducción",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza a la etapa de 'introducción' del ciclo de vida de un producto?",
    opciones: [
      "Ventas de crecimiento lento, altas inversiones en promoción para educar al mercado y utilidades nulas o negativas debido a los altos costos de lanzamiento.",
      "Ventas máximas consolidadas, competencia feroz de precios y márgenes estables de rentabilidad masiva.",
      "Disminución drástica de la competencia e inicio de la retirada del producto del mercado minorista.",
      "Crecimiento explosivo de la demanda impulsado por recomendaciones boca a boca espontáneas."
    ],
    respuestaCorrecta: "Ventas de crecimiento lento, altas inversiones en promoción para educar al mercado y utilidades nulas o negativas debido a los altos costos de lanzamiento.",
    explicacion: "La etapa de introducción requiere un fuerte esfuerzo de comunicación comercial para dar a conocer la innovación y convencer a los adoptadores tempranos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-096",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Etapa de crecimiento",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué comportamiento muestran las ventas y utilidades en la etapa de 'crecimiento' del ciclo de vida del producto?",
    opciones: [
      "Las ventas aumentan rápidamente a medida que nuevos clientes adoptan el producto, y las utilidades comienzan a ser significativas y alcanzan su nivel máximo hacia el final de la etapa.",
      "Las ventas caen de forma sostenida y las utilidades se reducen a cero debido a la entrada de marcas blancas.",
      "Permanecen estáticas y estables en un mercado saturado sin presencia de nuevos competidores.",
      "Muestran fluctuaciones estacionales extremas asociadas a variables climáticas externas."
    ],
    respuestaCorrecta: "Las ventas aumentan rápidamente a medida que nuevos clientes adoptan el producto, y las utilidades comienzan a ser significativas y alcanzan su nivel máximo hacia el final de la etapa.",
    explicacion: "En la fase de crecimiento, los competidores ingresan al mercado atraídos por el potencial de utilidades. Las empresas deben expandir la distribución y mejorar la calidad del producto.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-097",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Etapa de madurez",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el principal reto de marketing en la etapa de 'madurez' del ciclo de vida del producto?",
    opciones: [
      "Sostener la cuota de mercado frente a una competencia intensa y diversificada, modificando el mercado, el producto o la mezcla de marketing.",
      "Educar por primera vez a los consumidores en los beneficios básicos del bien físico.",
      "Lograr la distribución exclusiva limitando los puntos de venta a boutiques de lujo.",
      "Aumentar drásticamente los precios unitarios para compensar la pérdida de clientes masivos."
    ],
    respuestaCorrecta: "Sostener la cuota de mercado frente a una competencia intensa y diversificada, modificando el mercado, el producto o la mezcla de marketing.",
    explicacion: "La madurez es la fase más larga para la mayoría de productos. Los mercadólogos recurren a defensas como modificar el producto (nuevas características) o la mezcla de marketing (bajar precios, promociones).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-098",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Etapa de declive",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué decisión de marketing es típica en la etapa de 'declive' de un producto?",
    opciones: [
      "Reducir los gastos de marketing al mínimo (estrategia de cosecha) o descontinuar el producto retirándolo del mercado.",
      "Duplicar el gasto en publicidad masiva en televisión nacional.",
      "Fijar precios elevados orientados a un segmento premium exclusivo.",
      "Modificar radicalmente el logotipo de la marca cada mes para simular innovación constante."
    ],
    respuestaCorrecta: "Reducir los gastos de marketing al mínimo (estrategia de cosecha) o descontinuar el producto retirándolo del mercado.",
    explicacion: "En el declive (por cambios tecnológicos o gustos de clientes), mantener el producto es costoso y distrae recursos. Cosechar (mantener la venta reduciendo costes al mínimo) o eliminarlo son las alternativas viables.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-099",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Desarrollo de nuevos productos",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Cuál es el orden secuencial correcto de las primeras cuatro etapas del proceso formal de desarrollo de nuevos productos?",
    opciones: [
      "Generación de ideas, depuración de ideas, desarrollo y prueba del concepto, y desarrollo de la estrategia de marketing.",
      "Prueba de mercado, comercialización, diseño de ingeniería y generación de ideas.",
      "Análisis de negocios, desarrollo del producto físico, generación de ideas y prueba de concepto.",
      "Comercialización, generación de ideas, depuración de ideas y análisis financiero."
    ],
    respuestaCorrecta: "Generación de ideas, depuración de ideas, desarrollo y prueba del concepto, y desarrollo de la estrategia de marketing.",
    explicacion: "El proceso de desarrollo consta de 8 fases secuenciales: 1. Generación de ideas, 2. Depuración de ideas, 3. Desarrollo y prueba del concepto, 4. Estrategia de marketing, 5. Análisis de negocios, 6. Desarrollo del producto, 7. Mercado de prueba, y 8. Comercialización.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-100",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Concepto vs Idea",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En el desarrollo de nuevos productos, ¿qué diferencia existe entre una 'idea de producto' y un 'concepto de producto'?",
    opciones: [
      "La idea es un producto posible que la empresa imagina ofrecer; el concepto es una versión detallada de la idea expresada en términos significativos para el consumidor.",
      "La idea es el boceto gráfico de ingeniería; el concepto es el análisis financiero de viabilidad comercial.",
      "El concepto es la patente legal registrada; la idea es el nombre de marca publicitario asociado.",
      "No existe distinción teórica, ambos términos describen la fase inicial de generación de propuestas corporativas."
    ],
    respuestaCorrecta: "La idea es un producto posible que la empresa imagina ofrecer; el concepto es una versión detallada de la idea expresada en términos significativos para el consumidor.",
    explicacion: "Una idea de auto eléctrico es solo una idea. El concepto define si es un auto deportivo premium para solteros de altos ingresos o un auto urbano compacto y económico para familias jóvenes.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-101",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Análisis de negocios",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En el proceso de desarrollo de nuevos productos, la etapa de 'Análisis de negocios' consiste en:",
    opciones: [
      "Evaluar el atractivo financiero del proyecto mediante la revisión de las proyecciones de ventas, costos y utilidades del nuevo producto.",
      "Desarrollar físicamente los primeros prototipos de prueba en el laboratorio técnico de la empresa.",
      "Observar de forma encubierta a los compradores interactuando con los anaqueles del supermercado.",
      "Lanzar campañas de publicidad digital para evaluar la tasa de clics en un banner ficticio."
    ],
    respuestaCorrecta: "Evaluar el atractivo financiero del proyecto mediante la revisión de las proyecciones de ventas, costos y utilidades del nuevo producto.",
    explicacion: "El análisis de negocios confirma si las proyecciones financieras se alinean con los objetivos de rentabilidad y retorno de inversión de la corporación para autorizar la producción física del prototipo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-102",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Mercado de prueba controlado",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es un 'mercado de prueba controlado'?",
    opciones: [
      "Un programa de prueba donde una empresa de investigación de mercados contrata a un grupo de minoristas para que ofrezcan el nuevo producto en sus tiendas a cambio de una tarifa.",
      "Un test a ciegas en el laboratorio de la empresa con empleados de la propia planta de producción.",
      "La distribución inmediata de muestras gratuitas puerta a puerta en todo el territorio nacional.",
      "La simulación por computadora del comportamiento de compra sin interacción con personas reales."
    ],
    respuestaCorrecta: "Un programa de prueba donde una empresa de investigación de mercados contrata a un grupo de minoristas para que ofrezcan el nuevo producto en sus tiendas a cambio de una tarifa.",
    explicacion: "El mercado de prueba controlado (o también el simulado) resulta más económico y rápido que un mercado de prueba estándar (lanzar en una ciudad entera) y reduce el riesgo de espionaje por parte de los competidores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-103",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Comercialización",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "La etapa final del desarrollo de nuevos productos, que implica introducir formalmente el producto al mercado general a gran escala, se denomina:",
    opciones: [
      "Comercialización.",
      "Lanzamiento preliminar.",
      "Prueba de concepto final.",
      "Auditoría comercial de salida."
    ],
    respuestaCorrecta: "Comercialización.",
    explicacion: "La comercialización requiere grandes inversiones en infraestructura de fabricación, inventarios y campañas masivas de publicidad y distribución en el mercado seleccionado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-104",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Moda pasajera",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En los estilos de ciclos de vida, una 'moda pasajera' (fad) se caracteriza por:",
    opciones: [
      "Un aumento rápido y extraordinario en las ventas impulsado por el entusiasmo del público, seguido de un declive igual de acelerado debido a la falta de valor duradero.",
      "Un ciclo de vida estable de décadas sin variaciones significativas en la demanda agregada.",
      "Una adopción lenta por parte de los rezagados que se mantiene estática en la fase de madurez.",
      "Un patrón cíclico de auge y caída que se repite de manera intermitente cada diez años."
    ],
    respuestaCorrecta: "Un aumento rápido y extraordinario en las ventas impulsado por el entusiasmo del público, seguido de un declive igual de acelerado debido a la falta de valor duradero.",
    explicacion: "Ejemplos de modas pasajeras son juguetes virales efímeros (como el Fidget Spinner). Los mercadólogos deben saber gestionar estas tendencias rápidas para recuperar la inversión antes del desplome inevitable.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-105",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Ciclo de vida",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cómo se diferencia un 'estilo' de una 'moda' dentro de las variaciones del ciclo de vida de un producto?",
    opciones: [
      "Un estilo es una forma de expresión básica y distintiva que puede durar generaciones; una moda es un estilo aceptado o popular que crece de forma gradual y declina lentamente.",
      "El estilo tiene un ciclo de vida de semanas; la moda dura siempre de manera inalterada.",
      "El estilo se limita a ropa de diseñador; la moda abarca únicamente aparatos electrónicos de consumo.",
      "No existe diferencia alguna, dado que ambos términos describen exactamente el mismo patrón de ventas."
    ],
    respuestaCorrecta: "Un estilo es una forma de expresión básica y distintiva que puede durar generaciones; una moda es un estilo aceptado o popular que crece de forma gradual y declina lentamente.",
    explicacion: "Los estilos en arquitectura (ej. colonial) o arte fluctúan en popularidad pero vuelven cíclicamente. Las modas tradicionales muestran curvas más marcadas de crecimiento, permanencia efímera y declive.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-106",
    simulador: "SIM-03",
    tema: "Ciclo de Vida del Producto y Desarrollo de Nuevos Productos",
    subtema: "Crowdsourcing",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué es el 'crowdsourcing' aplicado a la generación de ideas de nuevos productos?",
    opciones: [
      "Invitar a amplias comunidades de personas (clientes, científicos, investigadores, público en general) al proceso de innovación abierta de la empresa.",
      "Comprar de forma masiva ideas registradas en bases de datos de universidades nacionales.",
      "Monitorear las conversaciones telefónicas de los vendedores de los competidores directos.",
      "Contratar exclusivamente a agencias de diseño de alta gama para el desarrollo de marcas."
    ],
    respuestaCorrecta: "Invitar a amplias comunidades de personas (clientes, científicos, investigadores, público en general) al proceso de innovación abierta de la empresa.",
    explicacion: "El crowdsourcing democratiza la innovación de nuevos productos aprovechando la sabiduría colectiva externa para obtener propuestas disruptivas y alineadas con los deseos reales de los consumidores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-107",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Definición de precio",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "En el mix de marketing, ¿qué característica fundamental distingue al 'Precio' de las otras tres variables (Producto, Plaza y Promoción)?",
    opciones: [
      "El precio es la única variable que genera ingresos para la empresa; las otras representan costos.",
      "El precio es la variable más fácil y lenta de modificar ante una crisis competitiva.",
      "El precio representa únicamente el valor percibido intangible de los logotipos comerciales.",
      "El precio no influye en la demanda agregada de los consumidores finales."
    ],
    respuestaCorrecta: "El precio es la única variable que genera ingresos para la empresa; las otras representan costos.",
    explicacion: "Mientras las demás variables implican gastos de desarrollo, canales y campañas, el precio determina de forma directa la facturación y la rentabilidad neta de la organización.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-108",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Fijación por valor",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿En qué consiste la 'fijación de precios basada en el valor para el cliente'?",
    opciones: [
      "Establecer el precio basándose en las percepciones de valor del comprador en lugar de basarse en los costos del vendedor.",
      "Sumar un margen estándar de ganancia al costo total unitario de fabricación del producto.",
      "Fijar los precios exactamente al mismo nivel que los competidores líderes de la categoría comercial.",
      "Reducir el precio de venta al mínimo posible para acelerar la quiebra de los competidores locales."
    ],
    respuestaCorrecta: "Establecer el precio basándose en las percepciones de valor del comprador en lugar de basarse en los costos del vendedor.",
    explicacion: "En la fijación por valor, la empresa evalúa primero las necesidades y percepciones de valor del cliente, define un precio meta alineado a ello y luego diseña un producto con costos que hagan viable ese precio.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-109",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Fijación por costo",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿En qué consiste el método de 'fijación de precios mediante margen de beneficio (cost-plus pricing)'?",
    opciones: [
      "En sumar un recargo estándar o porcentaje de ganancia predeterminado al costo total unitario del producto.",
      "En estimar el valor intangible del logotipo y sumarlo al precio de las materias primas directas.",
      "En fijar el precio por debajo de los costos variables para desalentar la entrada de nuevos competidores.",
      "En realizar encuestas a los consumidores para preguntarles cuánto estarían dispuestos a pagar."
    ],
    respuestaCorrecta: "En sumar un recargo estándar o porcentaje de ganancia predeterminado al costo total unitario del producto.",
    explicacion: "Es el método más sencillo y utilizado. Su limitación principal es que ignora por completo la demanda del mercado y los precios de los competidores, lo que puede resultar en precios muy altos o muy bajos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-110",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Elasticidad precio",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué significa que la demanda de un producto sea 'inelástica' respecto al precio?",
    opciones: [
      "Que los cambios en el precio del producto provocan variaciones porcentuales muy pequeñas o nulas en la cantidad demandada.",
      "Que un pequeño aumento en el precio causa el colapso inmediato de las ventas a nivel nacional.",
      "Que el volumen de ventas aumenta de forma indefinida sin importar que el precio se duplique.",
      "Que la demanda se desplaza únicamente en respuesta a las campañas publicitarias del microentorno."
    ],
    respuestaCorrecta: "Que los cambios en el precio del producto provocan variaciones porcentuales muy pequeñas o nulas en la cantidad demandada.",
    explicacion: "Si la demanda es inelástica (ej. medicamentos esenciales, gasolina), la empresa puede subir los precios y la cantidad vendida apenas disminuirá, aumentando los ingresos totales. Si es elástica, una subida reduce fuertemente las ventas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-111",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Punto de equilibrio",
    dificultad: "avanzado",
    tipo: "aplicación",
    pregunta: "Una empresa tiene costos fijos de $100,000, un costo variable unitario de $10 y vende su producto a $20. ¿Cuántas unidades debe vender para alcanzar su 'punto de equilibrio'?",
    opciones: [
      "10,000 unidades.",
      "5,000 unidades.",
      "20,000 unidades.",
      "100,000 unidades."
    ],
    respuestaCorrecta: "10,000 unidades.",
    explicacion: "El punto de equilibrio se calcula dividiendo los Costos Fijos por el Margen de Contribución Unitario (Precio - Costo Variable Unitario). En este caso: $100,000 / ($20 - $10) = $100,000 / $10 = 10,000 unidades.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-112",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Estrategias de descremado",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Bajo qué condiciones es recomendable aplicar una estrategia de 'fijación de precios por descremado de mercado' (skimming) al lanzar una innovación?",
    opciones: [
      "Cuando la calidad e imagen del producto justifican un precio alto, existen suficientes compradores dispuestos a pagar ese precio premium, y los competidores no pueden entrar fácilmente al mercado.",
      "Cuando el mercado es altamente sensible al precio y la empresa busca ganar volumen de ventas rápidamente.",
      "Cuando los costos de producción unitarios son extremadamente altos y la demanda es perfectamente elástica.",
      "Cuando la empresa busca posicionarse como marca blanca de bajo costo en el supermercado minorista."
    ],
    respuestaCorrecta: "Cuando la calidad e imagen del producto justifican un precio alto, existen suficientes compradores dispuestos a pagar ese precio premium, y los competidores no pueden entrar fácilmente al mercado.",
    explicacion: "El descremado consiste en fijar un precio inicial elevado para 'descremar' las capas de ingresos del mercado dispuestas a pagar más, e ir bajando el precio gradualmente para atraer a los siguientes segmentos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-113",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Precios de penetración",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el objetivo principal de una estrategia de 'precios de penetración de mercado'?",
    opciones: [
      "Fijar un precio bajo inicial para penetrar en el mercado con rapidez y profundidad, atrayendo a un gran número de compradores y ganando una gran participación de mercado.",
      "Recuperar los costos de investigación y desarrollo (I+D) en el menor tiempo posible.",
      "Mantener márgenes unitarios de utilidad elevados limitando la producción a pocas unidades de lujo.",
      "Atraer exclusivamente a los adoptadores tempranos insensibles al nivel de precios."
    ],
    respuestaCorrecta: "Fijar un precio bajo inicial para penetrar en el mercado con rapidez y profundidad, atrayendo a un gran número de compradores y ganando una gran participación de mercado.",
    explicacion: "La penetración es adecuada en mercados elásticos y sensibles al precio, donde los costos unitarios bajan al aumentar el volumen de producción y ventas (efecto de curva de experiencia).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-114",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Precios geográficos",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En la fijación de precios geográfica, ¿qué significa la modalidad 'FOB en el origen' (Free On Board)?",
    opciones: [
      "Que el cliente se hace cargo de pagar el flete y transporte desde la fábrica hasta el destino de entrega final.",
      "Que el fabricante asume todos los costos de envío y entrega en el almacén del comprador sin cargo adicional.",
      "Que el precio cobrado por el flete es el mismo para todos los clientes sin importar su distancia física.",
      "Que el transporte se realiza de forma gratuita mediante vehículos de propiedad gubernamental."
    ],
    respuestaCorrecta: "Que el cliente se hace cargo de pagar el flete y transporte desde la fábrica hasta el destino de entrega final.",
    explicacion: "FOB (libre a bordo) implica que la propiedad y responsabilidad de las mercancías pasan al comprador en el momento en que se cargan en el medio de transporte en la fábrica, haciendo el flete un costo variable para el cliente.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-115",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Precios impares",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿A qué responde el uso de 'precios impares' o precios psicológicos como terminar un precio en $9.99 en lugar de $10.00?",
    opciones: [
      "A que los consumidores tienden a procesar los precios de izquierda a derecha, percibiendo la cifra en el rango de los $9 en lugar de los $10.",
      "A la obligación legal de deducir impuestos locales en transacciones minoristas directas.",
      "A la escasez física de monedas fraccionarias de baja denominación en los bancos nacionales.",
      "A la política interna de la empresa de evitar márgenes de ganancia redondos."
    ],
    respuestaCorrecta: "A que los consumidores tienden a procesar los precios de izquierda a derecha, percibiendo la cifra en el rango de los $9 en lugar de los $10.",
    explicacion: "Los precios psicológicos influyen en la percepción del consumidor. La terminación en 9 evoca una sensación de descuento o precio ajustado a la baja en la mente del comprador.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-116",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Precios promocionales",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué riesgo estratégico asume una marca si utiliza 'precios promocionales' y descuentos de forma excesivamente frecuente?",
    opciones: [
      "Erosionar el valor percibido de la marca en la mente del consumidor y acostumbrarlo a comprar solo cuando haya rebajas.",
      "Provocar un aumento insostenible de las utilidades que altere la declaración fiscal anual.",
      "Forzar a los distribuidores a comprar únicamente a precios de fábrica inflados.",
      "Eliminar por completo la competencia local al agotar la oferta de bienes sustitutos."
    ],
    respuestaCorrecta: "Erosionar el valor percibido de la marca en la mente del consumidor y acostumbrarlo a comprar solo cuando haya rebajas.",
    explicacion: "El uso excesivo de descuentos puede degradar la imagen de marca ('siempre está en oferta porque no vale lo que piden') y desatar guerras destructivas de precios con los competidores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-117",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Discriminación de precios",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un cine cobra tarifas diferenciadas para la misma película y sala en función de si el comprador es estudiante, adulto mayor o público general. Esta práctica es un ejemplo de:",
    opciones: [
      "Fijación de precios por segmentos de clientes (discriminación de precios).",
      "Fijación de precios por versión de producto.",
      "Estrategia de descremado temporal dinámico.",
      "Fijación de precios por costo marginal decreciente."
    ],
    respuestaCorrecta: "Fijación de precios por segmentos de clientes (discriminación de precios).",
    explicacion: "La discriminación por segmentos cobra precios distintos a grupos con diferente disposición a pagar (elasticidad) por el mismo servicio, requiriendo que los segmentos sean fácilmente identificables y no puedan revender las entradas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-118",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Precios dinámicos",
    dificultad: "avanzado",
    tipo: "aplicación",
    pregunta: "Las aplicaciones de transporte ajustan sus tarifas minuto a minuto en función de la demanda en tiempo real y la disponibilidad de conductores. Este modelo de precios se conoce como:",
    opciones: [
      "Precios dinámicos o de tarifa variable en tiempo real.",
      "Fijación de precios por línea de productos estándar.",
      "Fijación de precios por paquete o bundle comercial.",
      "Fijación de precios de costo unitario fijo ajustable."
    ],
    respuestaCorrecta: "Precios dinámicos o de tarifa variable en tiempo real.",
    explicacion: "Los precios dinámicos permiten optimizar el rendimiento del inventario o servicio adaptándose al balance instantáneo de oferta y demanda, facilitado hoy en día por el Big Data y los algoritmos automáticos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-119",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Fijación por paquete",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Un restaurante ofrece un menú combo que incluye hamburguesa, papas fritas y bebida por $12, mientras que comprados por separado sumarían $15. Esta estrategia de precios se conoce como:",
    opciones: [
      "Fijación de precios por paquete (product bundle pricing).",
      "Fijación de precios para subproductos marginales.",
      "Fijación de precios para productos cautivos indispensables.",
      "Fijación de precios por línea de productos diferenciados."
    ],
    respuestaCorrecta: "Fijación de precios por paquete (product bundle pricing).",
    explicacion: "La fijación por paquete agrupa varios productos para ofrecerlos con un descuento combinado, lo que incentiva la compra de artículos que el cliente de otro modo tal vez no adquiriría.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-120",
    simulador: "SIM-03",
    tema: "Decisiones y Estrategias de Precio",
    subtema: "Fijación cautiva",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es la 'fijación de precios para productos cautivos'?",
    opciones: [
      "Establecer un precio bajo para el producto principal (ej. impresora de inyección de tinta) y precios elevados para los insumos obligatorios (ej. cartuchos de tinta).",
      "Fijar el precio de venta en base a las limitaciones de espacio físico del almacén del distribuidor.",
      "Vender productos solo a través de tiendas físicas de acceso restringido para miembros del club.",
      "Establecer precios reducidos para clientes bajo contrato legal de exclusividad perpetua."
    ],
    respuestaCorrecta: "Establecer un precio bajo para el producto principal (ej. impresora de inyección de tinta) y precios elevados para los insumos obligatorios (ej. cartuchos de tinta).",
    explicacion: "En los servicios se conoce como 'fijación de precios en dos partes' (una tarifa básica fija por el derecho de uso más una tarifa de consumo variable).",
    fuenteBase: "Fundamentos de Marketing"
  },

  // ==========================================
  // SIM-04: Distribución y Comunicación Comercial (40 preguntas)
  // ==========================================
  {
    id: "Q-121",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Concepto de canal",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cómo se define un 'canal de distribución' en marketing?",
    opciones: [
      "El conjunto de organizaciones interdependientes que participan en el proceso de poner un producto o servicio a disposición del consumidor final o industrial.",
      "La ruta física de transporte terrestre de mercancías desde la fábrica hasta el puerto de salida marítimo.",
      "La campaña de publicidad en medios digitales elegida para dar a conocer un descuento comercial.",
      "El departamento de ventas directas corporativas encargado de redactar los contratos de suministro."
    ],
    respuestaCorrecta: "El conjunto de organizaciones interdependientes que participan en el proceso de poner un producto o servicio a disposición del consumidor final o industrial.",
    explicacion: "Los canales de distribución (o canales de marketing) conectan la producción con el consumo, reduciendo las discrepancias de cantidad y surtido mediante intermediarios de valor.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-122",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Funciones del canal",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Por qué los fabricantes delegan la venta de sus productos en intermediarios comerciales?",
    opciones: [
      "Porque los intermediarios reducen la cantidad de contactos transaccionales necesarios en el mercado de manera eficiente.",
      "Porque los intermediarios asumen por completo los costos fijos de fabricación directa de los productos.",
      "Porque la ley prohíbe a los fabricantes realizar ventas directas al consumidor final en todo el mundo.",
      "Porque de esta forma se elimina la necesidad de contar con logotipos e identidad de marca propia."
    ],
    respuestaCorrecta: "Porque los intermediarios reducen la cantidad de contactos transaccionales necesarios en el mercado de manera eficiente.",
    explicacion: "El uso de intermediarios aporta economías de escala y eficiencia al transformar los surtidos de productos de los fabricantes en los surtidos que desean los consumidores finales.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-123",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Niveles de canal",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza a un 'canal de distribución de nivel cero' (también llamado canal directo)?",
    opciones: [
      "El fabricante vende el producto de forma directa al consumidor final sin intermediarios en la transacción.",
      "El canal cuenta con al menos tres intermediarios: mayorista, distribuidor y minorista.",
      "Es un canal donde el transporte se realiza exclusivamente a través de medios públicos gratuitos.",
      "El producto se entrega sin empaque ni etiqueta para abaratar costos finales al cliente."
    ],
    respuestaCorrecta: "El fabricante vende el producto de forma directa al consumidor final sin intermediarios en la transacción.",
    explicacion: "Ejemplos de venta directa son la venta a domicilio, el comercio electrónico del propio fabricante o las tiendas propias de la fábrica.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-124",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Niveles de canal",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "Un canal de distribución que consta de un fabricante, un mayorista, un minorista y un consumidor final es un canal de:",
    opciones: [
      "Dos niveles (canal indirecto largo).",
      "Un nivel (canal directo corto).",
      "Nivel cero (canal directo absoluto).",
      "Tres niveles (canal cruzado integrado)."
    ],
    respuestaCorrecta: "Dos niveles (canal indirecto largo).",
    explicacion: "El número de intermediarios define la longitud del canal. En bienes de consumo, un nivel suele ser el minorista; dos niveles incorporan al mayorista; y tres niveles suman comisionistas o distribuidores regionales.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-125",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Conflicto de canal",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué diferencia existe entre un 'conflicto de canal horizontal' y uno 'vertical'?",
    opciones: [
      "El horizontal ocurre entre empresas del mismo nivel del canal; el vertical ocurre entre distintos niveles del mismo canal.",
      "El horizontal abarca únicamente disputas arancelarias; el vertical involucra quejas de los consumidores finales.",
      "El horizontal se resuelve en tribunales comerciales; el vertical se soluciona de forma automática por internet.",
      "No existe diferencia teórica relevante, ya que ambos conceptos aluden al desplome de la demanda neta."
    ],
    respuestaCorrecta: "El horizontal ocurre entre empresas del mismo nivel del canal; el vertical ocurre entre distintos niveles del mismo canal.",
    explicacion: "Un conflicto horizontal se daría entre dos concesionarios locales de una marca de autos por el territorio. Uno vertical se daría entre la marca de autos (fabricante) y sus distribuidores exclusivos por márgenes de ganancia.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-126",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Sistemas de canal",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza a un 'Sistema Vertical de Marketing' (SVM)?",
    opciones: [
      "Los productores, mayoristas y minoristas actúan como un sistema unificado bajo un propietario común, mediante contratos o poder de mercado.",
      "Los competidores minoristas acuerdan de manera informal la fijación de precios en una zona urbana determinada.",
      "La distribución se delega en su totalidad a flotas de transporte propiedad del estado.",
      "Los canales se limitan al uso de tiendas digitales eliminando almacenes físicos."
    ],
    respuestaCorrecta: "Los productores, mayoristas y minoristas actúan como un sistema unificado bajo un propietario común, mediante contratos o poder de mercado.",
    explicacion: "Los SVM (corporativos, contractuales o administrados) surgen para controlar la conducta del canal y eliminar los conflictos de canal que dañan la eficiencia global.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-127",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Franquicias",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Una franquicia comercial es un ejemplo clásico de un:",
    opciones: [
      "Sistema Vertical de Marketing Contractual.",
      "Sistema Horizontal de Distribución no regulado.",
      "Canal de distribución de nivel cero con intermediación financiera.",
      "Monopolio de distribución directa coordinado por el estado."
    ],
    respuestaCorrecta: "Sistema Vertical de Marketing Contractual.",
    explicacion: "El SVM contractual une a organizaciones independientes en diferentes niveles a través de contratos legales para lograr economías de escala e impacto comercial conjunto (el sistema de franquicias es el ejemplo más común).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-128",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Desintermediación",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El fenómeno de la 'desintermediación' en los canales de distribución ocurre cuando:",
    opciones: [
      "Los productores de bienes o servicios eliminan a los intermediarios tradicionales de sus canales para vender de forma directa mediante internet.",
      "Los minoristas deciden fabricar sus propios productos desplazando por completo a las marcas líderes.",
      "Las empresas de logística terrestre se declaran en quiebra forzando la paralización del transporte físico.",
      "El gobierno asume el control monopolístico de los canales mayoristas de alimentos."
    ],
    respuestaCorrecta: "Los productores de bienes o servicios eliminan a los intermediarios tradicionales de sus canales para vender de forma directa mediante internet.",
    explicacion: "La desintermediación abre grandes oportunidades de reducción de costes para los fabricantes (ej. aerolíneas vendiendo boletos directo en sus webs), pero genera severos conflictos de canal con las agencias tradicionales.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-129",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Distribución intensiva",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué es la 'distribución intensiva'?",
    opciones: [
      "Tener el producto disponible en tantos puntos de venta como sea posible para lograr la máxima cobertura (típico de bienes de conveniencia).",
      "Limitar la venta a un único distribuidor exclusivo en una amplia zona geográfica.",
      "Vender únicamente a través de canales digitales propios sin presencia física de tiendas.",
      "Distribución en la que el fabricante controla férreamente las ventas y la fijación de precios finales."
    ],
    respuestaCorrecta: "Tener el producto disponible en tantos puntos de venta como sea posible para lograr la máxima cobertura (típico de bienes de conveniencia).",
    explicacion: "La distribución intensiva busca garantizar que el producto esté disponible en el momento y lugar donde surge la necesidad del cliente, reduciendo el riesgo de compra de bienes sustitutos por falta de stock.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-130",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Distribución exclusiva",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿En qué consiste la estrategia de 'distribución exclusiva'?",
    opciones: [
      "Otorgar a un número muy limitado de concesionarios el derecho exclusivo de distribuir los productos de la empresa en sus territorios geográficos.",
      "Obligar a todos los supermercados nacionales a vender únicamente la marca de la empresa.",
      "Vender a granel únicamente a los sectores mayoristas agrícolas sin procesar el empaque.",
      "Lanzar el producto de forma simultánea en todas las plataformas de comercio electrónico globales."
    ],
    respuestaCorrecta: "Otorgar a un número muy limitado de concesionarios el derecho exclusivo de distribuir los productos de la empresa en sus territorios geográficos.",
    explicacion: "Típica de bienes de lujo o alta gama. El fabricante logra mayor control sobre la imagen, nivel de servicio y precios, y fortalece la lealtad y el esfuerzo del intermediario.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-131",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Distribución selectiva",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza a la 'distribución selectiva'?",
    opciones: [
      "El uso de más de uno, pero menos de todos los intermediarios que están dispuestos a vender el producto de la empresa.",
      "La venta en un solo punto exclusivo en todo el territorio de un país.",
      "La entrega del producto a domicilio de forma gratuita a clientes seleccionados por sorteo.",
      "La disposición física aleatoria de las mercancías en los centros comerciales minoristas."
    ],
    respuestaCorrecta: "El uso de más de uno, pero menos de todos los intermediarios que están dispuestos a vender el producto de la empresa.",
    explicacion: "La distribución selectiva (típica de electrodomésticos, ropa de marca mediana y tecnología) da al fabricante buena cobertura del mercado con mayor control y menores costos de distribución que la intensiva.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-132",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Distribución física",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el objetivo principal de la logística de marketing y la gestión de la cadena de suministro?",
    opciones: [
      "Lograr un nivel de servicio al cliente meta con el mínimo costo logístico total posible.",
      "Maximizar a toda costa el tamaño de los inventarios en bodega para evitar roturas de stock sin importar el costo.",
      "Sustituir el transporte terrestre por mensajería en drones para eliminar operarios.",
      "Reducir a cero el número de camiones de reparto subcontratando servicios del sector público."
    ],
    respuestaCorrecta: "Lograr un nivel de servicio al cliente meta con el mínimo costo logístico total posible.",
    explicacion: "La logística busca equilibrar el nivel de servicio (tiempos de entrega cortos, disponibilidad) y el costo logístico (transporte, almacenamiento, costo financiero del inventario) de forma rentable.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-133",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Just-In-Time",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "Los sistemas logísticos de 'inventario justo a tiempo' (Just-In-Time) tienen como objetivo primordial:",
    opciones: [
      "Minimizar los inventarios manteniendo los insumos requeridos solo en las cantidades necesarias y en el momento preciso en que se van a procesar.",
      "Aumentar las existencias de seguridad en bodega para anticiparse a huelgas portuarias de años futuros.",
      "Centralizar todos los despachos en un único camión de reparto mensual para ahorrar combustible.",
      "Obligar al cliente a pagar el 100% del valor del pedido antes de iniciar la manufactura física."
    ],
    respuestaCorrecta: "Minimizar los inventarios manteniendo los insumos requeridos solo en las cantidades necesarias y en el momento preciso en que se van a procesar.",
    explicacion: "El JIT requiere una coordinación excelente entre fabricante y proveedores mediante sistemas de información compartidos, reduciendo enormemente los costos de almacenamiento y obsolescencia de inventarios.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-134",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Venta al por mayor",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿A qué se dedican los mayoristas dentro de la estructura comercial?",
    opciones: [
      "A vender bienes y servicios a quienes los compran para reventa o uso comercial, no para el consumo final personal.",
      "A comercializar productos de consumo directo en tiendas físicas ubicadas en centros comerciales residenciales.",
      "A fabricar productos a gran escala utilizando insumos y materias primas directas.",
      "A auditar los presupuestos de comunicación comercial que aprueban los anunciantes de televisión."
    ],
    respuestaCorrecta: "A vender bienes y servicios a quienes los compran para reventa o uso comercial, no para el consumo final personal.",
    explicacion: "Los mayoristas añaden valor al facilitar funciones logísticas, de financiamiento, de asunción de riesgos y de fraccionamiento de grandes lotes en cantidades manejables para los minoristas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-135",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Showrooming",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En el entorno del retail multicanal, ¿qué describe la tendencia del 'Showrooming'?",
    opciones: [
      "Visitar tiendas físicas para examinar y probar un producto, para luego comprarlo en línea a un precio inferior.",
      "Ver un comercial de televisión y acudir al supermercado a adquirirlo de forma impulsiva.",
      "Realizar una compra en internet y acudir a la tienda física del distribuidor solo a retirarlo.",
      "El alquiler temporal de locales comerciales vacíos para subastas rápidas de excedentes de stock."
    ],
    respuestaCorrecta: "Visitar tiendas físicas para examinar y probar un producto, para luego comprarlo en línea a un precio inferior.",
    explicacion: "El showrooming representa un reto para las tiendas físicas tradicionales, forzándolas a igualar precios digitales o a ofrecer experiencias y asesorías exclusivas en el punto de venta que justifiquen la compra inmediata.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-136",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Omnicanalidad",
    dificultad: "avanzado",
    tipo: "aplicación",
    pregunta: "Un cliente compra una camisa en la aplicación móvil de una tienda, solicita retirarla en la sucursal física esa misma tarde y, al no quedarle la talla, realiza el cambio en el mostrador del establecimiento. Esta estrategia integrada se denomina:",
    opciones: [
      "Marketing omnicanal.",
      "Desintermediación digital masiva.",
      "Venta cruzada tradicional.",
      "Distribución selectiva de nivel dos."
    ],
    respuestaCorrecta: "Marketing omnicanal.",
    explicacion: "La omnicanalidad busca integrar de forma perfecta todos los canales de venta físicos y digitales disponibles para ofrecer una experiencia de usuario consistente, fluida y sin fricciones durante todo el viaje de compra.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-137",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Distribución multicanal",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Un fabricante que vende sus cosméticos mediante catálogos impresos a domicilio, a través de farmacias minoristas y por medio de su propio sitio web corporativo, emplea una estrategia de:",
    opciones: [
      "Distribución multicanal o híbrida.",
      "Distribución exclusiva nacional.",
      "Distribución concentrada intensiva.",
      "Desintermediación de nivel tres."
    ],
    respuestaCorrecta: "Distribución multicanal o híbrida.",
    explicacion: "Los canales multicanal surgen para atender a diferentes segmentos de clientes que compran por distintas vías, aunque incrementan la probabilidad de conflictos de canal por competencia entre vías propias.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-138",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Logística inversa",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el término 'logística inversa' en la administración de la cadena de suministro?",
    opciones: [
      "Al proceso de gestionar la devolución de productos defectuosos, empaques reutilizables o excedentes desde los clientes de vuelta hacia el fabricante.",
      "Al envío de materias primas desde la fábrica de vuelta al proveedor debido al impago de las facturas comerciales.",
      "Al transporte de mercancías desde las bodegas centrales hacia las tiendas minoristas locales.",
      "A la exportación de bienes que fueron rechazados por el mercado nacional debido a fallas de calidad."
    ],
    respuestaCorrecta: "Al proceso de gestionar la devolución de productos defectuosos, empaques reutilizables o excedentes desde los clientes de vuelta hacia el fabricante.",
    explicacion: "La logística inversa es clave para la satisfacción de garantías, reciclaje y sostenibilidad ambiental corporativa.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-139",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Centro de distribución",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué función tiene un 'centro de distribución logístico' frente a una bodega de almacenamiento tradicional?",
    opciones: [
      "Está diseñado para mover mercancías con rapidez y no solo guardarlas, actuando como nodo intermedio de recepción, consolidación y despacho ágil.",
      "Su función única es albergar inventario obsoleto de años anteriores para deducir pérdidas en impuestos.",
      "Se encarga exclusivamente del etiquetado de precios de venta final al público minorista.",
      "Sirve para realizar asambleas gremiales y negociaciones colectivas de conductores terrestres."
    ],
    respuestaCorrecta: "Está diseñado para mover mercancías con rapidez y no solo guardarlas, actuando como nodo intermedio de recepción, consolidación y despacho ágil.",
    explicacion: "Los centros de distribución modernos utilizan automatización y sistemas informáticos avanzados para optimizar flujos continuos (ej. cross-docking) y acortar tiempos de ciclo de pedido.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-140",
    simulador: "SIM-04",
    tema: "Canales de Distribución y Logística",
    subtema: "Distribución física",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El uso coordinado de más de un modo de transporte logístico (como camión y tren) para llevar un contenedor de mercancías se conoce como:",
    opciones: [
      "Transporte intermodal (o multimodal).",
      "Distribución en canal cerrado cruzado.",
      "Flujo de desintermediación física.",
      "Logística inversa de fletes compartidos."
    ],
    respuestaCorrecta: "Transporte intermodal (o multimodal).",
    explicacion: "El transporte intermodal combina las ventajas de costos e infraestructura de diferentes medios (ferroviario, terrestre, marítimo, aéreo) para lograr traslados eficientes de larga distancia.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-141",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Concepto CIM",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué es la 'Comunicación Integrada de Marketing' (CIM)?",
    opciones: [
      "La integración y coordinación cuidadosa de los múltiples canales de comunicación de la empresa para entregar un mensaje claro, congruente y persuasivo sobre la organización y sus marcas.",
      "El uso masivo de comerciales de televisión nacional como único medio publicitario oficial.",
      "La externalización del control de redes sociales a agencias creativas independientes sin supervisión corporativa.",
      "La prohibición de emitir folletos impresos para forzar el canal de publicidad exclusivamente digital."
    ],
    respuestaCorrecta: "La integración y coordinación cuidadosa de los múltiples canales de comunicación de la empresa para entregar un mensaje claro, congruente y persuasivo sobre la organización y sus marcas.",
    explicacion: "La CIM evita que el cliente reciba mensajes contradictorios (ej. un diseño lujoso en web pero una promoción barata y descuidada en punto de venta), unificando la voz de la marca.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-142",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Mezcla promocional",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuáles son las cinco herramientas principales que conforman la mezcla de comunicación de marketing tradicional (mezcla promocional)?",
    opciones: [
      "Publicidad, promoción de ventas, relaciones públicas, venta personal y marketing directo.",
      "Producto, precio, distribución, investigación de mercados y servicio post-venta.",
      "Logotipos, folletos impresos, correos de soporte, vallas públicas y patrocinio de eventos.",
      "SEO, SEM, marketing por correo, publicidad de display y marketing de redes sociales."
    ],
    respuestaCorrecta: "Publicidad, promoción de ventas, relaciones públicas, venta personal y marketing directo.",
    explicacion: "Cada una de estas herramientas tiene características de costo y alcance particulares, y deben coordinarse bajo la CIM para alcanzar los objetivos de comunicación.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-143",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Publicidad",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué define formalmente a la 'Publicidad' dentro de las herramientas de la CIM?",
    opciones: [
      "Cualquier forma pagada de presentación y promoción no personal de ideas, bienes o servicios por parte de un patrocinador identificado.",
      "Estímulos a corto plazo que alientan la compra de un producto mediante descuentos inmediatos.",
      "Crear buenas relaciones con los diversos públicos de la empresa mediante la obtención de publicidad favorable sin costo.",
      "Interacción personal y directa entre la fuerza de ventas y el cliente para cerrar acuerdos comerciales."
    ],
    respuestaCorrecta: "Cualquier forma pagada de presentación y promoción no personal de ideas, bienes o servicios por parte de un patrocinador identificado.",
    explicacion: "La publicidad permite llegar a masas geográficamente dispersas con bajo costo por exposición, y permite al anunciante repetir el mensaje múltiples veces, aunque carece de interactividad inmediata.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-144",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Promoción de ventas",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es el objetivo principal de la 'Promoción de ventas'?",
    opciones: [
      "Ofrecer incentivos a corto plazo para fomentar la compra o venta de un producto o servicio de manera inmediata.",
      "Desarrollar una imagen favorable y de prestigio para la corporación a largo plazo.",
      "Forjar relaciones estrechas e interdependientes de por vida con los clientes corporativos.",
      "Difundir información técnica detallada a través de conferencias de prensa sin costo publicitario."
    ],
    respuestaCorrecta: "Ofrecer incentivos a corto plazo para fomentar la compra o venta de un producto o servicio de manera inmediata.",
    explicacion: "Ejemplos de promoción de ventas son los cupones, descuentos temporales, sorteos, muestras gratis y exhibidores. Sirven para acelerar la venta inmediata o incentivar la prueba del producto.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-145",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Relaciones públicas",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Las 'Relaciones Públicas' (RRPP) se diferencian de la publicidad principalmente porque:",
    opciones: [
      "Buscan obtener cobertura mediática favorable no pagada directamente (prensa, artículos, noticias) y construir reputación corporativa.",
      "Consisten únicamente en llamadas en frío de telemercadeo a bases de datos compradas.",
      "Se limitan a colocar anuncios gráficos en revistas impresas de circulación restringida.",
      "Tienen como fin único y directo concretar cierres de transacciones financieras inmediatas."
    ],
    respuestaCorrecta: "Buscan obtener cobertura mediática favorable no pagada directamente (prensa, artículos, noticias) y construir reputación corporativa.",
    explicacion: "Las RRPP son consideradas altamente creíbles por los consumidores al presentarse en formato de noticia u opinión editorial en lugar de un anuncio comercial explícito.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-146",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Venta personal",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "La 'Venta Personal' es la herramienta más eficaz en las últimas etapas del proceso de compra debido a que:",
    opciones: [
      "Permite una interacción personal de doble vía que facilita resolver dudas inmediatas, adaptar la presentación y cerrar el trato directamente.",
      "Es la herramienta de menor costo por contacto que existe en el marketing mix.",
      "No requiere contar con empleados en nómina ni capacitar a profesionales en ventas.",
      "Genera un mensaje estándar e invariable que llega de forma masiva a millones de personas a la vez."
    ],
    respuestaCorrecta: "Permite una interacción personal de doble vía que facilita resolver dudas inmediatas, adaptar la presentación y cerrar el trato directamente.",
    explicacion: "A pesar de su efectividad, la venta personal es la herramienta de comunicación más costosa por exposición, requiriendo inversiones constantes en selección, entrenamiento y comisiones para la fuerza de ventas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-147",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Estrategia Push",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En las estrategias de mezcla de promoción, ¿qué es una 'estrategia de empuje' (Push)?",
    opciones: [
      "Utilizar la fuerza de ventas y las promociones comerciales para canalizar el producto a través de intermediarios, quienes a su vez lo promueven ante el consumidor final.",
      "Dirigir la publicidad de forma masiva al consumidor final para que demande el producto en los puntos de venta.",
      "Realizar huelgas patronales para forzar al gobierno a subsidiar la logística de fletes.",
      "Reducir las comisiones de los vendedores para obligarles a trabajar más horas al día."
    ],
    respuestaCorrecta: "Utilizar la fuerza de ventas y las promociones comerciales para canalizar el producto a través de intermediarios, quienes a su vez lo promueven ante el consumidor final.",
    explicacion: "La estrategia de empuje 'empuja' el producto por el canal de distribución. Los fabricantes incentivan a los mayoristas, estos a los minoristas y estos al público.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-148",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Estrategia Pull",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿En qué consiste una 'estrategia de atracción' (Pull) en la comunicación comercial?",
    opciones: [
      "Dirigir las actividades de marketing (principalmente publicidad y promoción al consumidor) al consumidor final para motivarlo a comprar el producto.",
      "Presionar a los mayoristas con amenazas de cancelación de contratos de distribución exclusiva.",
      "Vender a precios por debajo del costo unitario variable solo en las tiendas de fábrica.",
      "Desarrollar productos genéricos que se comercializan exclusivamente sin marca en internet."
    ],
    respuestaCorrecta: "Dirigir las actividades de marketing (principalmente publicidad y promoción al consumidor) al consumidor final para motivarlo a comprar el producto.",
    explicacion: "En la estrategia Pull, si el consumidor final es atraído por el mensaje, acudirá al minorista a exigir el producto, el minorista al mayorista, y este lo pedirá al fabricante, 'atrayendo' el flujo a lo largo de la cadena.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-149",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Presupuesto de publicidad",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿En qué consiste el método de presupuesto de publicidad basado en 'el porcentaje de ventas' y cuál es su principal debilidad?",
    opciones: [
      "Consiste en fijar el presupuesto según un porcentaje de las ventas actuales o proyectadas; su debilidad es que ve a las ventas como causa de la promoción en lugar de verla como resultado de esta.",
      "Consiste en igualar el gasto en dólares del competidor más cercano; su debilidad es que asume costos idénticos de operación.",
      "Consiste en gastar solo lo que la empresa se puede permitir financieramente; su debilidad es que ignora las oportunidades del entorno.",
      "Consiste en calcular costos por objetivos específicos; su debilidad es que es excesivamente sencillo de implementar."
    ],
    respuestaCorrecta: "Consiste en fijar el presupuesto según un porcentaje de las ventas actuales o proyectadas; su debilidad es que ve a las ventas como causa de la promoción en lugar de verla como resultado de esta.",
    explicacion: "El método de porcentaje de ventas asume que la publicidad es un gasto derivado del nivel de ventas históricas, impidiendo incrementar la inversión promocional cuando las ventas caen y más se necesita atraer demanda.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-150",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Presupuesto por objetivo",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El método más lógico y científicamente sólido para fijar el presupuesto de promoción, pero el más difícil de aplicar, es:",
    opciones: [
      "El método de objetivo y tarea.",
      "El método del porcentaje de ventas.",
      "El método de la paridad competitiva.",
      "El método de lo costeable."
    ],
    respuestaCorrecta: "El método de objetivo y tarea.",
    explicacion: "Este método requiere definir los objetivos de comunicación específicos, determinar las tareas necesarias para alcanzarlos y calcular los costos estimados de ejecutar dichas tareas, sumándolos para formar el presupuesto meta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-151",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Planificación de medios",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En planificación de medios publicitarios, ¿qué significan los conceptos de 'alcance' (reach) y 'frecuencia' (frequency)?",
    opciones: [
      "El alcance es el porcentaje de personas del mercado meta expuestas al anuncio en un periodo; la frecuencia es el número de veces promedio que se exponen al mensaje.",
      "El alcance es la distancia geográfica que cubren los repetidores de radio; la frecuencia representa las ondas hertzianas utilizadas.",
      "El alcance es la duración física del comercial en segundos; la frecuencia es la cantidad de canales de TV donde se emite.",
      "No hay distinción, ya que ambos términos miden el costo neto de producción de una campaña gráfica."
    ],
    respuestaCorrecta: "El alcance es el porcentaje de personas del mercado meta expuestas al anuncio en un periodo; la frecuencia es el número de veces promedio que se exponen al mensaje.",
    explicacion: "Los planificadores de medios buscan optimizar el alcance y la frecuencia dentro del presupuesto asignado para maximizar el impacto de recordación del mensaje publicitario.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-152",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Marketing directo",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza al 'marketing directo y de bases de datos'?",
    opciones: [
      "Conectar directamente con consumidores individuales seleccionados meticulosamente, a menudo en interacciones de uno a uno, para obtener una respuesta inmediata.",
      "Colocar vallas publicitarias gigantes en autopistas públicas concurridas.",
      "Patrocinar de forma millonaria a equipos de fútbol en ligas profesionales nacionales.",
      "Emitir boletines de prensa gubernamentales a los medios de comunicación escritos."
    ],
    respuestaCorrecta: "Conectar directamente con consumidores individuales seleccionados meticulosamente, a menudo en interacciones de uno a uno, para obtener una respuesta inmediata.",
    explicacion: "El marketing directo (telemercadeo, correos electrónicos personalizados, catálogos dirigidos) busca respuestas rápidas y medibles, construyendo bases de datos de clientes con perfiles de compra detallados.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-153",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Mensaje publicitario",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Un anuncio de champú para la caspa muestra una demostración científica en pantalla del folículo capilar bajo microscopio antes y después del uso del producto. ¿Qué estilo de ejecución de mensaje está utilizando?",
    opciones: [
      "Evidencia científica.",
      "Estilo de vida o aspiracional.",
      "Fantasía o animación irreal.",
      "Símbolo de personalidad de marca."
    ],
    respuestaCorrecta: "Evidencia científica.",
    explicacion: "El estilo de evidencia científica muestra encuestas o pruebas técnicas que respaldan la superioridad funcional del producto ante un problema específico de consumo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-154",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Mensaje publicitario",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Un comercial de café muestra a una familia desayunando alegremente un domingo por la mañana en un ambiente hogareño y acogedor. Este estilo de ejecución de mensaje publicitario se conoce como:",
    opciones: [
      "Rebanada de vida (slice of life).",
      "Fantasía o ficción creativa.",
      "Evidencia de testimonio de celebridad.",
      "Estado de ánimo o imagen emocional pura."
    ],
    respuestaCorrecta: "Rebanada de vida (slice of life).",
    explicacion: "El estilo 'rebanada de vida' muestra a personas comunes utilizando el producto en un escenario cotidiano real de la vida diaria, facilitando la empatía e identificación del público objetivo con la marca.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-155",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Publicidad cooperativa",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el término 'publicidad cooperativa' en la comunicación comercial?",
    opciones: [
      "A un acuerdo donde el fabricante comparte con el minorista los costos de hacer publicidad local de sus productos.",
      "A la publicidad que financia de manera conjunta el estado con cooperativas agrícolas locales.",
      "Al intercambio gratuito de banners publicitarios entre sitios web no lucrativos.",
      "A anuncios que promueven los valores de la responsabilidad social sin mostrar marcas comerciales."
    ],
    respuestaCorrecta: "A un acuerdo donde el fabricante comparte con el minorista los costos de hacer publicidad local de sus productos.",
    explicacion: "La publicidad cooperativa fortalece las relaciones en el canal de distribución y ayuda a que los mensajes locales del minorista se coordinen mejor con la campaña nacional del fabricante.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-156",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Fuerza de ventas",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es la diferencia entre una estructura de fuerza de ventas 'territorial' y una 'por producto'?",
    opciones: [
      "La territorial asigna un área geográfica exclusiva a cada vendedor para toda la cartera de productos; la de producto asigna vendedores especializados en cada línea de productos independientemente del territorio.",
      "La territorial vende solo a nivel internacional; la de producto se limita al comercio minorista local.",
      "La territorial depende de comisiones; la de producto se basa en sueldos fijos pagados por el estado.",
      "No existe diferencia operativa relevante, dado que ambas estructuras de venta emplean los mismos canales logísticos."
    ],
    respuestaCorrecta: "La territorial asigna un área geográfica exclusiva a cada vendedor para toda la cartera de productos; la de producto asigna vendedores especializados en cada línea de productos independientemente del territorio.",
    explicacion: "La estructura territorial es más económica al reducir tiempos de viaje de los vendedores; la estructura por producto es necesaria si los artículos de la empresa son altamente técnicos y complejos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-157",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Venta consultiva",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En las fases del proceso de venta personal, ¿qué es la 'venta consultiva' o solución de problemas?",
    opciones: [
      "Identificar las necesidades específicas del cliente para proponer soluciones integradas en lugar de limitarse a insistir en vender un producto existente.",
      "Cobrar tarifas horarias de asesoría al cliente antes de permitirle comprar un bien físico.",
      "Exigir al comprador que rellene formularios de consulta técnica en una plataforma de internet.",
      "Utilizar un guion de ventas estándar inalterable memorizado por todo el equipo de ventas."
    ],
    respuestaCorrecta: "Identificar las necesidades específicas del cliente para proponer soluciones integradas en lugar de limitarse a insistir en vender un producto existente.",
    explicacion: "La venta consultiva busca forjar relaciones estrechas de largo plazo. El vendedor actúa como un consultor o socio del cliente, ayudándole a resolver problemas reales de negocio.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-158",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Etapas de venta",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es el orden secuencial correcto de las primeras cuatro etapas del proceso de venta personal tradicional?",
    opciones: [
      "Búsqueda de prospectos (prospección), preacercamiento, acercamiento y presentación.",
      "Presentación, cierre, manejo de objeciones y seguimiento post-venta.",
      "Acercamiento, demostración de producto, negociación y cierre directo.",
      "Prospección, negociación de comisiones, firma de contrato y entrega física."
    ],
    respuestaCorrecta: "Búsqueda de prospectos (prospección), preacercamiento, acercamiento y presentación.",
    explicacion: "El proceso de venta consta de 7 etapas: 1. Prospección y calificación, 2. Preacercamiento (estudiar al cliente potencial), 3. Acercamiento (primer contacto), 4. Presentación y demostración, 5. Manejo de objeciones, 6. Cierre, y 7. Seguimiento.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-159",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "Promoción de ventas comercial",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En la promoción de ventas, ¿cuál es la diferencia entre las promociones dirigidas a los 'consumidores' y las promociones dirigidas al 'comercio' (trade promotion)?",
    opciones: [
      "Las de consumidores buscan incentivar la compra del cliente final (ej. cupones); las comerciales buscan convencer al minorista de exhibir y promover la marca (ej. descuentos por volumen).",
      "Las de consumidores se realizan únicamente por internet; las comerciales ocurren solo en ferias industriales internacionales.",
      "Las comerciales son pagadas por el gobierno; las de consumidores dependen del fabricante de forma directa.",
      "No hay distinción, dado que ambas herramientas buscan bajar de forma permanente los precios de lista del producto."
    ],
    respuestaCorrecta: "Las de consumidores buscan incentivar la compra del cliente final (ej. cupones); las comerciales buscan convencer al minorista de exhibir y promover la marca (ej. descuentos por volumen).",
    explicacion: "Los fabricantes dedican gran parte de sus presupuestos a promociones comerciales (descuentos en factura, mercancía gratis, subsidios de publicidad) para asegurar espacio en los anaqueles frente a la competencia.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-160",
    simulador: "SIM-04",
    tema: "Mezcla de Comunicación Comercial",
    subtema: "RRPP Publicity",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el concepto de 'Publicity' dentro del ámbito de las relaciones públicas?",
    opciones: [
      "A la obtención de cobertura de noticias o menciones gratuitas de la marca en medios masivos debido al interés del público por la información divulgada.",
      "A los comerciales pagados emitidos en horario estelar de radiodifusión nacional.",
      "Al envío de folletos publicitarios masivos por correo físico no solicitado.",
      "A la colocación de stands publicitarios propios en centros comerciales minoristas."
    ],
    respuestaCorrecta: "A la obtención de cobertura de noticias o menciones gratuitas de la marca en medios masivos debido al interés del público por la información divulgada.",
    explicacion: "La publicity (o notoriedad no pagada) tiene un gran impacto por su bajo coste y alta credibilidad, pero la empresa no tiene control total sobre cómo los medios reportarán la noticia.",
    fuenteBase: "Fundamentos de Marketing"
  },
  // ==========================================
  // SIM-05: Marketing Digital, Servicios e Internacional (40 preguntas)
  // ==========================================
  {
    id: "Q-161",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Concepto de marketing digital",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cómo se define el 'Marketing Digital' en el entorno empresarial contemporáneo?",
    opciones: [
      "El esfuerzo de marketing de una empresa por interactuar con los clientes a través de plataformas digitales, canales de internet, redes sociales y dispositivos móviles.",
      "La colocación de pantallas de televisión dentro de las plantas de ensamblaje industrial.",
      "La digitalización y escaneo de las facturas impresas emitidas en el siglo anterior.",
      "La venta directa puerta a puerta asistida por agendas o calculadoras de bolsillo."
    ],
    respuestaCorrecta: "El esfuerzo de marketing de una empresa por interactuar con los clientes a través de plataformas digitales, canales de internet, redes sociales y dispositivos móviles.",
    explicacion: "El marketing digital ha transformado la comunicación comercial, permitiendo interacciones directas, personalizadas y medibles en tiempo real con segmentos específicos de consumidores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-162",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "SEO vs SEM",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuál es la diferencia fundamental entre SEO (Search Engine Optimization) y SEM (Search Engine Marketing)?",
    opciones: [
      "El SEO se enfoca en obtener posicionamiento orgánico y gratuito en los resultados de búsqueda; el SEM implica pagar por anuncios patrocinados por clic (PPC).",
      "El SEO requiere obligatoriamente comprar dominios web caros; el SEM es gratuito y administrado por el gobierno.",
      "El SEO es exclusivo para redes sociales como Instagram; el SEM abarca únicamente el diseño de logotipos gráficos.",
      "No existe diferencia operativa, dado que ambos términos aluden a la velocidad de carga de la página web."
    ],
    respuestaCorrecta: "El SEO se enfoca en obtener posicionamiento orgánico y gratuito en los resultados de búsqueda; el SEM implica pagar por anuncios patrocinados por clic (PPC).",
    explicacion: "El SEO busca optimizar el contenido y la estructura técnica de una web para buscadores. El SEM (ej. Google Ads) coloca anuncios patrocinados que cobran una tarifa cada vez que el usuario hace clic (PPC).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-163",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Inbound Marketing",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué caracteriza al 'Inbound Marketing' (marketing de atracción) frente al marketing tradicional (Outbound)?",
    opciones: [
      "Atraer a los clientes aportando valor mediante contenido relevante e interesante, en lugar de interrumpirlos con publicidad intrusiva.",
      "Presionar al consumidor de forma constante mediante llamadas de telemercadeo en horas de descanso.",
      "Vender productos a precios inflados recurriendo a campañas de alta presión comercial.",
      "Ignorar los canales de internet y concentrar el 100% del presupuesto en vallas públicas físicas."
    ],
    respuestaCorrecta: "Atraer a los clientes aportando valor mediante contenido relevante e interesante, en lugar de interrumpirlos con publicidad intrusiva.",
    explicacion: "El Inbound Marketing utiliza blogs, SEO, redes sociales y contenido interactivo para educar y ganarse la confianza del consumidor, haciendo que sea él quien busque activamente a la marca.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-164",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Social Media Marketing",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es la principal ventaja del marketing de redes sociales para las pequeñas y medianas empresas?",
    opciones: [
      "Permite una comunicación bidireccional inmediata con los clientes y segmentar campañas con presupuestos flexibles y bajos.",
      "Garantiza que el 100% de los usuarios de internet compren el producto de forma instantánea.",
      "Elimina por completo la necesidad de contar con un canal de distribución físico o logístico.",
      "Faculta el espionaje de las cuentas bancarias personales de los seguidores de la competencia."
    ],
    respuestaCorrecta: "Permite una comunicación bidireccional inmediata con los clientes y segmentar campañas con presupuestos flexibles y bajos.",
    explicacion: "A diferencia de los medios masivos tradicionales (TV, radio), las redes sociales democratizan el alcance publicitario y permiten construir comunidades de marca interactivas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-165",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "E-commerce B2B vs B2C",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué distingue al comercio electrónico B2C del B2B?",
    opciones: [
      "El B2C comercializa productos de la empresa al consumidor final; el B2B realiza transacciones entre organizaciones comerciales.",
      "El B2C se realiza exclusivamente mediante trueque de bienes; el B2B utiliza criptomonedas como único pago.",
      "El B2C está regulado por leyes militares; el B2B carece de cualquier marco normativo o legal.",
      "No existe diferencia operativa relevante, dado que ambos modelos atienden al mismo segmento demográfico."
    ],
    respuestaCorrecta: "El B2C comercializa productos de la empresa al consumidor final; el B2B realiza transacciones entre organizaciones comerciales.",
    explicacion: "El e-commerce B2B (Business-to-Business) suele involucrar transacciones de mayor volumen, sistemas de compras integrados, precios negociados y procesos de decisión complejos en comparación con el B2C (Business-to-Consumer).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-166",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Email Marketing",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Para evitar ser considerado spam (correo no solicitado), las campañas de Email Marketing efectivas deben basarse en el principio de:",
    opciones: [
      "Marketing de permiso (opt-in), donde el usuario autoriza expresamente el envío de información comercial.",
      "Envíos masivos automatizados a millones de direcciones obtenidas mediante software de hackeo.",
      "Ocultar el nombre de la empresa y la dirección de remitente para evitar filtros informáticos.",
      "Enviar correos exclusivamente durante los fines de semana en horarios de madrugada."
    ],
    respuestaCorrecta: "Marketing de permiso (opt-in), donde el usuario autoriza expresamente el envío de información comercial.",
    explicacion: "El marketing de permiso genera mejores tasas de apertura y conversión, protege la reputación del dominio web de la empresa y respeta las normativas de protección de datos personales.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-167",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Métricas digitales",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En analítica web, ¿cómo se calcula la 'tasa de conversión' de un sitio de comercio electrónico?",
    opciones: [
      "Dividiendo el número de visitantes que realizan una compra (o acción meta) entre el número total de visitantes únicos, expresado en porcentaje.",
      "Restando los costos de distribución digital de las ventas brutas registradas en el mes.",
      "Multiplicando el número de seguidores en redes sociales por la tasa de rebote del sitio web.",
      "Dividiendo el número de clics en banners por el costo por clic pagado a la agencia de medios."
    ],
    respuestaCorrecta: "Dividiendo el número de visitantes que realizan una compra (o acción meta) entre el número total de visitantes únicos, expresado en porcentaje.",
    explicacion: "La tasa de conversión es un indicador clave de rendimiento (KPI) de la efectividad del diseño del sitio, la propuesta de valor y la experiencia de usuario.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-168",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Tasa de rebote",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué mide la 'tasa de rebote' (bounce rate) en un sitio web de marketing?",
    opciones: [
      "El porcentaje de visitantes que abandonan el sitio web después de ver una sola página, sin interactuar ni visitar otras secciones.",
      "La velocidad a la que un cliente devuelve físicamente un producto comprado en la plataforma digital.",
      "La cantidad de correos electrónicos que son rechazados por los servidores de los destinatarios.",
      "La tasa de clics accidentales que realizan los usuarios móviles en anuncios emergentes."
    ],
    respuestaCorrecta: "El porcentaje de visitantes que abandonan el sitio web después de ver una sola página, sin interactuar ni visitar otras secciones.",
    explicacion: "Una tasa de rebote alta suele indicar que la página de destino no es relevante para el visitante, tiene problemas de diseño, o la velocidad de carga es lenta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-169",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Marketing de afiliados",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿En qué consiste la estrategia digital conocida como 'Marketing de Afiliados'?",
    opciones: [
      "Un modelo de negocio donde un creador de contenido externo promociona el producto de un vendedor y gana una comisión por cada venta o registro realizado mediante su enlace exclusivo.",
      "La alianza formal entre cooperativas agrarias locales para regular precios en un mercado digital común.",
      "La contratación de distribuidores minoristas físicos para que se afilien a los sindicatos del sector.",
      "Un programa de suscripción de pago mensual donde el cliente recibe descuentos cautivos."
    ],
    respuestaCorrecta: "Un modelo de negocio donde un creador de contenido externo promociona el producto de un vendedor y gana una comisión por cada venta o registro realizado mediante su enlace exclusivo.",
    explicacion: "Es un canal de marketing basado en resultados, permitiendo a los anunciantes ampliar su alcance con costes controlados de adquisición de clientes.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-170",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Funnel de conversión",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Cuáles son las etapas tradicionales de un embudo o funnel de conversión digital?",
    opciones: [
      "Atracción (Tráfico), Interacción (Lead), Decisión (Cliente) y Fidelización (Promotor).",
      "Introducción, Crecimiento, Madurez, Declinación y Retiro.",
      "Prospección, Calificación de crédito, Firma de contrato y Cobro judicial.",
      "Generación de ideas, Filtro de conceptos, Análisis financiero y Lanzamiento final."
    ],
    respuestaCorrecta: "Atracción (Tráfico), Interacción (Lead), Decisión (Cliente) y Fidelización (Promotor).",
    explicacion: "El funnel de conversión digital guía al usuario a través del viaje de compra, optimizando las tasas de retención y conversión en cada etapa mediante contenidos y automatizaciones específicas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-171",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Intangibilidad",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "Dado que los servicios son 'intangibles', ¿qué estrategia de marketing se recomienda para mitigar la incertidumbre del cliente?",
    opciones: [
      "Tangibilizar el servicio ofreciendo pistas físicas visibles, tales como instalaciones limpias, uniformes ordenados y folletos de calidad.",
      "Reducir las tarifas del servicio al mínimo eliminando personal de atención en oficinas.",
      "Prometer en la publicidad resultados milagrosos e imposibles de comprobar científicamente.",
      "Evitar mostrar fotografías de las instalaciones para sorprender al cliente en su visita."
    ],
    respuestaCorrecta: "Tangibilizar el servicio ofreciendo pistas físicas visibles, tales como instalaciones limpias, uniformes ordenados y folletos de calidad.",
    explicacion: "Los clientes buscan señales físicas que demuestren la calidad potencial del servicio que no pueden examinar de antemano. La marca debe cuidar el 'ServiceScape' o ambiente del servicio.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-172",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Inseparabilidad",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "La 'inseparabilidad' en los servicios significa que el servicio se produce y se consume de forma simultánea. ¿Qué implicación directa tiene esto en el marketing?",
    opciones: [
      "Que el personal que entrega el servicio (contacto directo) forma parte esencial del producto y de la experiencia del cliente.",
      "Que el servicio se puede fabricar con meses de anticipación y almacenar en bodegas locales.",
      "Que los canales de distribución deben constar de al menos dos niveles de intermediarios mayoristas.",
      "Que el precio de los servicios es siempre inelástico frente a las variaciones estacionales."
    ],
    respuestaCorrecta: "Que el personal que entrega el servicio (contacto directo) forma parte esencial del producto y de la experiencia del cliente.",
    explicacion: "Dado que el cliente está presente durante la producción, la interacción entre el cliente y el personal de contacto es crítica, lo que exige estrategias fuertes de marketing interno (capacitar y motivar a empleados).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-173",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Caducidad de servicios",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Por qué la 'caducidad' (carácter perecedero) de los servicios representa un reto de marketing y cómo se gestiona?",
    opciones: [
      "Porque los servicios no se pueden almacenar para venta futura; se gestiona sincronizando la demanda y la oferta (ej. tarifas reducidas en horas de baja demanda).",
      "Porque los servicios tienen fechas de vencimiento químico impresas en su embalaje físico corporativo.",
      "Porque los competidores pueden duplicar los servicios de forma instantánea de forma gratuita por internet.",
      "Porque el personal del servicio se jubila obligatoriamente cada diez años de servicio activo."
    ],
    respuestaCorrecta: "Porque los servicios no se pueden almacenar para venta futura; se gestiona sincronizando la demanda y la oferta (ej. tarifas reducidas en horas de baja demanda).",
    explicacion: "Una habitación de hotel vacía un lunes no se puede guardar para venderla el sábado de alta demanda. Estrategias de precios diferenciales, contratación de personal temporal y reservas ayudan a equilibrar la capacidad.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-174",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Variabilidad de servicios",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "La calidad de un servicio dental varía según el humor del dentista y el día de la semana. ¿Ante qué característica del servicio nos encontramos y cómo se mitiga?",
    opciones: [
      "Variabilidad; se mitiga mediante la estandarización de procesos de atención, capacitación del personal y controles de calidad constantes.",
      "Intangibilidad; se mitiga comprando consultorios en zonas comerciales exclusivas.",
      "Caducidad; se mitiga cobrando tarifas duplicadas por adelantado al paciente.",
      "Inseparabilidad; se mitiga eliminando la consulta física y ofreciendo solo teleconsulta por correo."
    ],
    respuestaCorrecta: "Variabilidad; se mitiga mediante la estandarización de procesos de atención, capacitación del personal y controles de calidad constantes.",
    explicacion: "La variabilidad hace que estandarizar la experiencia del servicio sea complejo. Las firmas de servicios invierten en manuales de procedimiento de servicio y capacitación constante para homogenizar la calidad del servicio.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-175",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Triángulo del marketing de servicios",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El 'Triángulo del Marketing de Servicios' identifica tres formas de marketing necesarias para el éxito en servicios. ¿Cuáles son?",
    opciones: [
      "Marketing externo (hacer la promesa), marketing interno (habilitar la promesa) y marketing interactivo (entregar la promesa).",
      "Publicidad masiva, promoción en el punto de venta y relaciones públicas institucionales.",
      "Marketing demográfico, segmentación psicográfica y posicionamiento de marca.",
      "Logística de entrada, manufactura de forma y logística de salida física."
    ],
    respuestaCorrecta: "Marketing externo (hacer la promesa), marketing interno (habilitar la promesa) y marketing interactivo (entregar la promesa).",
    explicacion: "El marketing externo son las 4 P dirigidas al cliente. El interno entrena y motiva al personal. El interactivo ocurre durante la entrega del servicio ('momento de la verdad') entre el cliente y el empleado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-176",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Marketing interno",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es el 'Marketing Interno' en las empresas de servicios?",
    opciones: [
      "Orientar y motivar de manera eficaz a los empleados que están en contacto con los clientes y a todo el personal de soporte para trabajar en equipo y lograr la satisfacción del cliente.",
      "La colocación de banners publicitarios dirigidos exclusivamente a los socios accionistas de la firma.",
      "El rediseño estético y decoración de las oficinas de la gerencia general de la empresa.",
      "La auditoría anual de costos operativos de las oficinas comerciales de ventas del sector."
    ],
    respuestaCorrecta: "Orientar y motivar de manera eficaz a los empleados que están en contacto con los clientes y a todo el personal de soporte para trabajar en equipo y lograr la satisfacción del cliente.",
    explicacion: "El marketing interno postula que la empresa debe tratar a sus empleados como clientes internos, vendiéndoles primero la cultura y valores de servicio antes de exigirles atender adecuadamente a los clientes externos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-177",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Marketing interactivo",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere el término 'Marketing Interactivo' en los servicios?",
    opciones: [
      "A que la calidad percibida del servicio depende en gran medida de la calidad de la interacción entre el comprador y el proveedor del servicio durante la entrega de este.",
      "Al uso de pantallas táctiles e interactivas en las vitrinas de los almacenes minoristas.",
      "A las campañas de publicidad digital en las que los usuarios comentan en redes sociales.",
      "Al envío automatizado de correos electrónicos transaccionales interactivos post-compra."
    ],
    respuestaCorrecta: "A que la calidad percibida del servicio depende en gran medida de la calidad de la interacción entre el comprador y el proveedor del servicio durante la entrega de este.",
    explicacion: "En el marketing de bienes físicos, la calidad se evalúa de forma objetiva tras la producción. En servicios, el cliente evalúa tanto la calidad técnica (qué se entrega) como la calidad funcional (cómo se entrega).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-178",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Las 3 P adicionales",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Además de las 4 P tradicionales, ¿cuáles son las '3 P adicionales' específicas del marketing de servicios?",
    opciones: [
      "Personas (People), Procesos (Process) y Evidencia Física (Physical Evidence).",
      "Penetración (Penetration), Posicionamiento (Positioning) y Patrocinio (Patronage).",
      "Planificación (Planning), Presupuesto (Performance) y Post-compra (Post-purchase).",
      "Publicidad (Publicity), Mayoristas (Partners) y Plataformas (Platforms)."
    ],
    respuestaCorrecta: "Personas (People), Procesos (Process) y Evidencia Física (Physical Evidence).",
    explicacion: "Las personas son todos los actores humanos del servicio. Los procesos son los flujos de actividades de entrega. La evidencia física representa el entorno donde se presta el servicio.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-179",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "ServiceScape",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "El concepto de 'ServiceScape' (paisaje del servicio) se define como:",
    opciones: [
      "El entorno físico y los elementos espaciales tangibles donde se crea y se consume un servicio dental o comercial.",
      "La vista o paisaje natural que se aprecia desde las ventanas de las aerolíneas de aviación comercial.",
      "El plano de distribución logística de los camiones de reparto en las bodegas logísticas.",
      "La plataforma de comercio electrónico donde los clientes reservan servicios hoteleros."
    ],
    respuestaCorrecta: "El entorno físico y los elementos espaciales tangibles donde se crea y se consume un servicio dental o comercial.",
    explicacion: "El ServiceScape influye de manera importante en el comportamiento, humor e interpretación de calidad de los clientes (ejemplo: la iluminación, aromas y música en un spa de lujo).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-180",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Recuperación del servicio",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un hotel de lujo comete un error en la reservación de un cliente. Para solucionarlo, le otorga una suite de categoría superior sin costo adicional y una botella de vino de cortesía. Esta acción se conoce como:",
    opciones: [
      "Recuperación del servicio o gestión de fallas del servicio.",
      "Discriminación de precios dinámica de nivel dos.",
      "Estrategia de penetración selectiva de marca privada.",
      "Co-branding de servicios hoteleros compartidos."
    ],
    respuestaCorrecta: "Recuperación del servicio o gestión de fallas del servicio.",
    explicacion: "Dado que las fallas en servicios son inevitables por su variabilidad, las empresas deben diseñar planes de recuperación que transformen un cliente enojado en uno leal (paradoja de la recuperación del servicio).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-181",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Concepto de marketing internacional",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Qué es el 'Marketing Internacional'?",
    opciones: [
      "La planeación y conducción de transacciones a través de las fronteras nacionales para crear intercambios que satisfagan los objetivos de las personas y las organizaciones.",
      "La venta de bonos de exportación e importación en las bolsas de valores extranjeras.",
      "El diseño de campañas publicitarias en idiomas extranjeros sin exportar productos reales.",
      "La contratación de gerentes nacidos en el exterior para dirigir las plantas de producción nacionales."
    ],
    respuestaCorrecta: "La planeación y conducción de transacciones a través de las fronteras nacionales para crear intercambios que satisfagan los objetivos de las personas y las organizaciones.",
    explicacion: "El marketing internacional exige adaptar las estrategias de producto, precio, promoción y distribución a las diferencias socioculturales, legales y económicas de cada país meta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-182",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Aranceles y barreras",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es un 'arancel' dentro del macroentorno político-legal internacional?",
    opciones: [
      "Un impuesto o derecho de aduana cobrado por un gobierno sobre los bienes importados.",
      "Un límite físico a la cantidad neta de productos que pueden ingresar al país.",
      "Una prohibición total de importar mercancías de un país competidor por motivos militares.",
      "El costo cobrado por el puerto marítimo por cargar contenedores de exportación."
    ],
    respuestaCorrecta: "Un impuesto o derecho de aduana cobrado por un gobierno sobre los bienes importados.",
    explicacion: "Los aranceles son barreras comerciales destinadas a proteger a las industrias locales de la competencia de precios extranjeros o a recaudar ingresos fiscales para el estado importador.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-183",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Embargo comercial",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "Una restricción comercial extrema que prohíbe de manera absoluta cualquier tipo de comercio con un país específico se denomina:",
    opciones: [
      "Embargo.",
      "Cuota arancelaria marginal.",
      "Barrera no arancelaria burocrática.",
      "Control de tipo de cambio financiero."
    ],
    respuestaCorrecta: "Embargo.",
    explicacion: "El embargo es una medida política severa del macroentorno legal internacional que bloquea las transacciones comerciales bilaterales o multilaterales con el país sancionado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-184",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Estrategias de entrada",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Cuál es la forma más sencilla y de menor riesgo financiero para ingresar a un mercado internacional?",
    opciones: [
      "La exportación directa o indirecta de productos existentes.",
      "La inversión directa con la construcción de fábricas en el país de destino.",
      "La compra mayoritaria de acciones de una marca rival extranjera.",
      "El desarrollo de joint ventures conjuntas de propiedad compartida."
    ],
    respuestaCorrecta: "La exportación directa o indirecta de productos existentes.",
    explicacion: "La exportación aprovecha los excedentes de producción nacional y requiere mínimos cambios organizativos y de capital, aunque limita el control sobre la distribución final en el extranjero.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-185",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Licenciamiento",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En el marketing internacional, la estrategia de 'concesión de licencias' consiste en:",
    opciones: [
      "Un acuerdo contractual donde la empresa licenciante otorga a un comprador extranjero los derechos de uso de patentes, marcas y procesos a cambio del cobro de una regalía (royalty).",
      "El soborno legal a funcionarios de aduana para acelerar el ingreso de contenedores.",
      "La compra de permisos de exportación emitidos de forma excepcional por el ministerio de comercio local.",
      "La venta sin marca de bienes a granel a distribuidores no autorizados del extranjero."
    ],
    respuestaCorrecta: "Un acuerdo contractual donde la empresa licenciante otorga a un comprador extranjero los derechos de uso de patentes, marcas y procesos a cambio del cobro de una regalía (royalty).",
    explicacion: "El licenciamiento es una forma rápida de expansión internacional con bajo riesgo. La limitación principal es que el licenciante tiene poco control sobre la producción y comercialización del licenciatario.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-186",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Joint Venture",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Qué es una alianza de 'empresa conjunta' (Joint Venture) en el contexto de la internacionalización?",
    opciones: [
      "Una sociedad de coinversión donde la empresa se une a inversionistas locales del mercado extranjero para crear una entidad comercial local compartida.",
      "Una alianza publicitaria informal para compartir banners en páginas web internacionales.",
      "La fusión del departamento de ventas directas de dos empresas exportadoras nacionales.",
      "La expropiación de instalaciones extranjeras realizada por el gobierno local."
    ],
    respuestaCorrecta: "Una sociedad de coinversión donde la empresa se une a inversionistas locales del mercado extranjero para crear una entidad comercial local compartida.",
    explicacion: "Las Joint Ventures combinan el capital y conocimiento del mercado local del socio extranjero con la tecnología o producto de la empresa local, compartiendo riesgos y utilidades.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-187",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Inversión directa",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué ventaja y qué riesgo principal presenta la estrategia de 'inversión directa' en el extranjero?",
    opciones: [
      "Ventaja: control total y economías de escala locales. Riesgo: alta inversión de capital y exposición a riesgos políticos y económicos locales (como expropiaciones o devaluaciones).",
      "Ventaja: nulo riesgo de pérdida financiera. Riesgo: total desinterés de los clientes locales por el producto.",
      "Ventaja: exención perpetua del pago de impuestos de aduana. Riesgo: imposibilidad de registrar la marca localmente.",
      "No hay ventajas frente al licenciamiento tradicional, dado que los costes de flete son idénticos."
    ],
    respuestaCorrecta: "Ventaja: control total y economías de escala locales. Riesgo: alta inversión de capital y exposición a riesgos políticos y económicos locales (como expropiaciones o devaluaciones).",
    explicacion: "La inversión directa (construir fábricas de propiedad total) muestra el mayor compromiso con el mercado de destino y suele mejorar la imagen corporativa local al generar empleos directos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-188",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Estandarización vs Adaptación",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Cuál es el debate fundamental en la mezcla de marketing global?",
    opciones: [
      "Elegir entre estandarización global (vender el mismo producto con la misma promoción en todo el mundo) y adaptación local (modificar el mix según el mercado de destino).",
      "Definir si se utiliza el flete marítimo o el aéreo como único canal de logística comercial.",
      "Elegir entre contratar exclusivamente a traductores certificados o utilizar traductores automáticos.",
      "Elegir entre registrar las marcas en Suiza o registrarlas en el país de origen de la empresa."
    ],
    respuestaCorrecta: "Elegir entre estandarización global (vender el mismo producto con la misma promoción en todo el mundo) y adaptación local (modificar el mix según el mercado de destino).",
    explicacion: "La estandarización reduce enormemente los costes de diseño y producción (economías de escala). La adaptación responde de forma más precisa a las diferencias culturales y legales de los consumidores locales, logrando mayor aceptación.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-189",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Estrategias de producto global",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En la mezcla de producto internacional, la 'extensión directa de producto' consiste en:",
    opciones: [
      "Comercializar el producto en el mercado extranjero sin realizarle ningún tipo de cambio en su fórmula, diseño o características físicas.",
      "Desarrollar un producto completamente nuevo y exclusivo para el mercado emergente seleccionado.",
      "Modificar el empaque y el nombre de marca pero manteniendo idénticos los ingredientes químicos.",
      "Externalizar la fabricación directa del bien físico a plantas industriales del exterior."
    ],
    respuestaCorrecta: "Comercializar el producto en el mercado extranjero sin realizarle ningún tipo de cambio en su fórmula, diseño o características físicas.",
    explicacion: "Consiste en 'tomar el producto tal como está y venderlo en el extranjero' (ejemplo: refrescos de marca global). Es el camino más económico pero asume que la necesidad y hábitos de consumo son homogéneos a nivel global.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-190",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Dumping",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿A qué se refiere la práctica comercial prohibida conocida como 'Dumping'?",
    opciones: [
      "Vender un producto en el mercado extranjero a un precio inferior a su costo real de fabricación o por debajo de su precio en el mercado de origen.",
      "Desechar inventarios obsoletos o contaminantes en el territorio marítimo de países en desarrollo.",
      "El robo sistemático de códigos fuente de software de competidores internacionales.",
      "La fijación de precios en base a las devaluaciones diarias de la moneda del país importador."
    ],
    respuestaCorrecta: "Vender un producto en el mercado extranjero a un precio inferior a su costo real de fabricación o por debajo de su precio en el mercado de origen.",
    explicacion: "El dumping es una práctica de competencia desleal destinada a quebrar a los competidores locales del país importador para monopolizar el mercado. Los países imponen aranceles antidumping para neutralizarlo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-191",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Tasa de clics CTR",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En la publicidad digital, la métrica CTR (Click-Through Rate) se define como:",
    opciones: [
      "El número de clics que recibe un anuncio dividido entre el número de veces que se muestra (impresiones), expresado en porcentaje.",
      "El costo total de la campaña publicitaria dividido por las conversiones obtenidas.",
      "La cantidad de segundos promedio que un usuario pasa leyendo un anuncio gráfico.",
      "El porcentaje de rebote que registra la página de destino principal."
    ],
    respuestaCorrecta: "El número de clics que recibe un anuncio dividido entre el número de veces que se muestra (impresiones), expresado en porcentaje.",
    explicacion: "El CTR mide la relevancia y atractivo de la creatividad y copy del anuncio para el público objetivo seleccionado en la campaña.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-192",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "CPA Costo por adquisición",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "El CPA (Costo por Adquisición) en marketing de pago por clic mide:",
    opciones: [
      "El costo total invertido en la campaña dividido por la cantidad de conversiones o ventas generadas por el anuncio.",
      "El precio que cobra la agencia de marketing digital por diseñar el logotipo comercial.",
      "La inversión en servidores informáticos para alojar el sitio de comercio electrónico.",
      "El costo de envío logístico de cada producto comprado en línea."
    ],
    respuestaCorrecta: "El costo total invertido en la campaña dividido por la cantidad de conversiones o ventas generadas por el anuncio.",
    explicacion: "El CPA evalúa de forma directa la rentabilidad de las campañas de marketing digital, comparándose con el valor de vida del cliente (CLV) para medir la ganancia neta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-193",
    simulador: "SIM-05",
    tema: "Marketing Digital y Comercio Electrónico",
    subtema: "Marketing móvil",
    dificultad: "básico",
    tipo: "conceptual",
    pregunta: "¿Por qué el diseño adaptativo o responsive es obligatorio en los sitios web de marketing actuales?",
    opciones: [
      "Porque asegura que la página web se visualice de forma óptima en dispositivos móviles, los cuales concentran la mayoría del tráfico de internet actual.",
      "Porque es una exigencia de seguridad informática para evitar hackeos de contraseñas de las marcas.",
      "Porque permite cambiar de forma automática el idioma del sitio según el país del visitante.",
      "Porque reduce las tarifas por consumo de electricidad de los servidores informáticos de la empresa."
    ],
    respuestaCorrecta: "Porque asegura que la página web se visualice de forma óptima en dispositivos móviles, los cuales concentran la mayoría del tráfico de internet actual.",
    explicacion: "Un sitio web no responsive deteriora la experiencia del usuario y es penalizado gravemente por los motores de búsqueda en su clasificación orgánica (SEO).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-194",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Estandarización",
    dificultad: "intermedio",
    tipo: "aplicación",
    pregunta: "Una franquicia de hamburguesas estandariza el proceso de preparación y atención al cliente detallando los pasos exactos y segundos en pantallas de cocina. ¿Qué característica del servicio intenta mitigar?",
    opciones: [
      "La variabilidad.",
      "La intangibilidad.",
      "La inseparabilidad.",
      "La caducidad."
    ],
    respuestaCorrecta: "La variabilidad.",
    explicacion: "Al documentar procesos operativos (industrialización del servicio) se busca que cada cliente reciba una hamburguesa y atención idéntica en cualquier sucursal, minimizando la variabilidad inherente.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-195",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Service blueprinting",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué es un 'Blueprint de Servicio' (Service Blueprint)?",
    opciones: [
      "Un mapa visual estructurado que detalla los pasos del proceso de servicio, los puntos de contacto con el cliente y las acciones de soporte internas (detrás de escena).",
      "El plano de construcción arquitectónica de un local comercial minorista.",
      "El contrato legal firmado por los empleados de soporte técnico del contact center.",
      "El manual de identidad visual e imagen de marca con las especificaciones de colores."
    ],
    respuestaCorrecta: "Un mapa visual estructurado que detalla los pasos del proceso de servicio, los puntos de contacto con el cliente y las acciones de soporte internas (detrás de escena).",
    explicacion: "El Blueprint es una herramienta de ingeniería de servicios que permite identificar cuellos de botella, optimizar flujos interactivos y asegurar una entrega uniforme de calidad.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-196",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "Brechas de servicio",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "En el modelo de calidad del servicio (SERVQUAL), la 'brecha del cliente' se define como la diferencia entre:",
    opciones: [
      "El servicio esperado por el cliente (expectativas) y el servicio que percibe recibir realmente.",
      "El servicio de la empresa y la oferta comercial de la competencia directa.",
      "Lo que promete la publicidad de la marca y lo que la fábrica produce físicamente.",
      "Las expectativas del comprador y el presupuesto disponible para realizar el pago."
    ],
    respuestaCorrecta: "El servicio esperado por el cliente (expectativas) y el servicio que percibe recibir realmente.",
    explicacion: "Para cerrar la brecha del cliente, la empresa debe identificar y solucionar las brechas internas del proveedor (desconocimiento del cliente, diseño erróneo de estándares, deficiencias en el desempeño, o discrepancias comunicativas).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-197",
    simulador: "SIM-05",
    tema: "Marketing de Servicios",
    subtema: "SERVQUAL dimensiones",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Cuáles son las cinco dimensiones de calidad del servicio medidas por el modelo SERVQUAL?",
    opciones: [
      "Fiabilidad, capacidad de respuesta, seguridad, empatía y elementos tangibles.",
      "Precio, velocidad logística, marca corporativa, empaque de forma y durabilidad.",
      "Publicidad, promociones de venta, relaciones públicas, televentas y marketing directo.",
      "Segmentación, selección de mercados meta, diferenciación, posicionamiento y co-creación."
    ],
    respuestaCorrecta: "Fiabilidad, capacidad de respuesta, seguridad, empatía y elementos tangibles.",
    explicacion: "Estas dimensiones evalúan la calidad del servicio: fiabilidad (cumplir lo prometido), capacidad de respuesta (rapidez y ayuda), seguridad (conocimiento y cortesía), empatía (trato personalizado) y tangibles (instalaciones y personal).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-198",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Macroentorno cultural",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de comida rápida de EE. UU. abre locales en la India y decide eliminar la carne de res de su menú, reemplazándola por cordero y pollo. ¿A qué fuerza del entorno responde esta adaptación?",
    opciones: [
      "Macroentorno sociocultural de valores y creencias religiosas locales.",
      "Macroentorno demográfico de edad promedio de la población de la zona.",
      "Microentorno competitivo directo de marcas locales minoristas.",
      "Macroentorno tecnológico y de cadena de suministro refrigerada."
    ],
    respuestaCorrecta: "Macroentorno sociocultural de valores y creencias religiosas locales.",
    explicacion: "Dado que la res es sagrada en el hinduismo, no adaptar el producto habría provocado el rechazo inmediato de la marca en el mercado indio, demostrando la necesidad de la adaptación cultural.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-199",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Joint Venture Licenciamiento",
    dificultad: "intermedio",
    tipo: "comparación",
    pregunta: "¿Cuál es la diferencia clave entre una franquicia internacional y un licenciamiento?",
    opciones: [
      "La franquicia implica un control operativo y de marketing más estricto y un modelo de negocio completo; el licenciamiento suele limitarse a la producción bajo patente.",
      "La franquicia no cobra regalías; el licenciamiento exige comisiones mensuales del 50% de las ventas.",
      "La franquicia se limita a marcas de ropa; el licenciamiento abarca únicamente alimentos agrarios.",
      "No existe diferencia, ambos términos aluden a la inversión directa con fábricas propias en el extranjero."
    ],
    respuestaCorrecta: "La franquicia implica un control operativo y de marketing más estricto y un modelo de negocio completo; el licenciamiento suele limitarse a la producción bajo patente.",
    explicacion: "En la franquicia (ej. McDonald's), el franquiciatario compra los derechos de un sistema de negocio completo que debe seguir de forma estricta. El licenciamiento suele ser de uso de marca o manufactura.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-200",
    simulador: "SIM-05",
    tema: "Marketing Internacional y Mercados Globales",
    subtema: "Consorcio exportación",
    dificultad: "avanzado",
    tipo: "conceptual",
    pregunta: "¿Qué es un 'consorcio de exportación' en el marketing internacional?",
    opciones: [
      "Una alianza voluntaria de empresas (frecuentemente PyMEs) con el objetivo de promover y exportar de forma conjunta sus productos en mercados extranjeros.",
      "La adquisición hostil de un puerto de aduana privado por parte de un grupo de exportadores.",
      "Una cámara de comercio estatal que fija cuotas obligatorias de importación sectorial.",
      "La fusión permanente de los balances generales financieros de empresas multinacionales rivales."
    ],
    respuestaCorrecta: "Una alianza voluntaria de empresas (frecuentemente PyMEs) con el objetivo de promover y exportar de forma conjunta sus productos en mercados extranjeros.",
    explicacion: "Los consorcios facilitan el acceso al comercio exterior a empresas pequeñas compartiendo costos de estudios de mercado, publicidad y misiones comerciales conjuntas en el exterior.",
    fuenteBase: "Fundamentos de Marketing"
  },

  // ==========================================
  // SIM-06: Aplicación Práctica y Casos Integrales (40 preguntas)
  // ==========================================
  {
    id: "Q-201",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Análisis de decisiones estratégicas",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una marca de smartphones premium ve caer sus ventas ante marcas chinas de menor precio pero calidad técnica competitiva. ¿Qué acción estratégica basada en valor es la más adecuada?",
    opciones: [
      "Reforzar la diferenciación centrando la publicidad en el ecosistema, seguridad y estatus, y lanzar una segunda marca para competir en precio.",
      "Igualar de forma inmediata el precio de las marcas chinas reduciendo a la mitad los márgenes de utilidad.",
      "Suspender toda inversión en publicidad y diseño para reubicar fondos a logística terrestre.",
      "Iniciar una demanda judicial contra los competidores por precios de penetración abusivos."
    ],
    respuestaCorrecta: "Reforzar la diferenciación centrando la publicidad en el ecosistema, seguridad y estatus, y lanzar una segunda marca para competir en precio.",
    explicacion: "Reducir el precio a ciegas de una marca premium erosiona su posicionamiento de estatus. La diferenciación o la estrategia de flanqueo (segunda marca de combate) son soluciones clásicas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-202",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Estrategias de flanqueo",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una corporación cervecera internacional lanza una marca de bajo costo para neutralizar el crecimiento de una marca importada económica, protegiendo así su cerveza premium. Esta marca de bajo costo actúa como:",
    opciones: [
      "Una marca de combate (flanker brand).",
      "Una extensión de marca con co-branding.",
      "Un producto cautivo bajo discriminación de precios.",
      "Una marca privada monopolística regulada por el estado."
    ],
    respuestaCorrecta: "Una marca de combate (flanker brand).",
    explicacion: "Las marcas de combate se diseñan específicamente para proteger a las marcas líderes o estrellas (cash cows) de la empresa de los competidores que atacan por precio en los segmentos inferiores del mercado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-203",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Matriz BCG",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una línea de calzado de vestir tradicional genera flujos de efectivo estables y significativos para una corporación, pero se encuentra en un mercado de bajo crecimiento. Según la matriz BCG, este producto es:",
    opciones: [
      "Una vaca generadora de efectivo (cash cow).",
      "Un producto estrella (star).",
      "Un producto interrogante (question mark).",
      "Un producto perro (dog)."
    ],
    respuestaCorrecta: "Una vaca generadora de efectivo (cash cow).",
    explicacion: "Las vacas de efectivo tienen alta participación en mercados de bajo crecimiento. Requieren poca inversión y sus utilidades financian el crecimiento de productos estrella o interrogantes de alto potencial.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-204",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Matriz Ansoff",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de café decide vender sus bolsas de granos en cadenas de gimnasios y centros de bienestar donde antes no tenía presencia física. Según la matriz de Ansoff, esta estrategia de crecimiento se define como:",
    opciones: [
      "Desarrollo de mercado.",
      "Penetración de mercado.",
      "Desarrollo de producto.",
      "Diversificación pura."
    ],
    respuestaCorrecta: "Desarrollo de mercado.",
    explicacion: "El desarrollo de mercado consiste en identificar y desarrollar nuevos segmentos de mercado o canales de distribución para los productos actuales de la organización.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-205",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Matriz Ansoff",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de galletas dulces lanza galletas saladas sabor queso para venderlas a sus mismos clientes actuales a través de sus mismos canales habituales. Esta estrategia de la matriz de Ansoff es:",
    opciones: [
      "Desarrollo de producto.",
      "Penetración de mercado.",
      "Desarrollo de mercado.",
      "Diversificación relacionada."
    ],
    respuestaCorrecta: "Desarrollo de producto.",
    explicacion: "El desarrollo de productos implica ofrecer productos nuevos o modificados en los mercados en los que la empresa ya opera habitualmente.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-206",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Estrategias competitivas Kotler",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una marca de refrescos líder en el mercado nacional con 60% de participación decide ampliar la demanda total del sector atrayendo a no usuarios de refrescos. Esta estrategia es típica de una firma con el rol de:",
    opciones: [
      "Líder de mercado.",
      "Retador de mercado.",
      "Seguidor de mercado.",
      "Especialista en nichos."
    ],
    respuestaCorrecta: "Líder de mercado.",
    explicacion: "El líder de mercado es el que más se beneficia de la expansión de la demanda total. Puede lograrlo captando nuevos usuarios, promoviendo nuevos usos del producto o fomentando un mayor consumo por ocasión.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-207",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Estrategias de retador",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una marca de hamburguesas (segunda en el mercado) lanza una agresiva campaña publicitaria comparando directamente sus ingredientes frescos con los de la marca líder número uno. Esta estrategia se conoce como:",
    opciones: [
      "Ataque frontal de retador de mercado.",
      "Estrategia de defensa preventiva de líder.",
      "Enfoque de imitación rápida de seguidor.",
      "Posicionamiento pasivo en nicho cerrado."
    ],
    respuestaCorrecta: "Ataque frontal de retador de mercado.",
    explicacion: "Los retadores de mercado atacan de forma directa al líder igualando o superando su propuesta de valor (publicidad, precios o distribución) para arrebatarle cuota de mercado.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-208",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Estrategia especialista en nicho",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "¿Por qué resulta altamente rentable la estrategia de 'especialista en nichos de mercado' (market nicher) para pequeñas firmas?",
    opciones: [
      "Porque logran un profundo conocimiento de las necesidades de un grupo pequeño de clientes, cobrando precios premium gracias a una alta especialización y valor percibido.",
      "Porque acceden de forma directa a la fabricación masiva a bajo costo unitario (economías de escala).",
      "Porque el estado subsidia de forma perpetua los costos logísticos de las marcas de nicho.",
      "Porque no enfrentan ningún tipo de competidores ni nacionales ni internacionales."
    ],
    respuestaCorrecta: "Porque logran un profundo conocimiento de las necesidades de un grupo pequeño de clientes, cobrando precios premium gracias a una alta especialización y valor percibido.",
    explicacion: "La clave del especialista de nicho es la especialización (en clientes específicos, zonas geográficas, características de producto o servicios asociados) que ahuyenta a los competidores masivos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-209",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Métricas de marketing ROI",
    dificultad: "avanzado",
    tipo: "aplicación",
    pregunta: "Una campaña digital invierte $5,000 en publicidad y genera $15,000 en ingresos de ventas adicionales, con un margen de ganancia neto del 40% sobre esas ventas. ¿Cuál es el retorno de la inversión de marketing (ROMI)?",
    opciones: [
      "20% (con una ganancia neta de $1,000 sobre la inversión).",
      "200% (con una ganancia de $10,000 sobre los ingresos).",
      "40% (igualando el margen bruto neto de las ventas).",
      "300% (con ventas que triplicaron el costo publicitario)."
    ],
    respuestaCorrecta: "20% (con una ganancia neta de $1,000 sobre la inversión).",
    explicacion: "ROMI = (Beneficio Neto Adicional / Inversión de Marketing) * 100. El beneficio neto es: $15,000 de ventas * 40% = $6,000. Descontando el costo publicitario: $6,000 - $5,000 = $1,000 de beneficio neto. ROMI = ($1,000 / $5,000) * 100 = 20%.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-210",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Modelos de negocio",
    dificultad: "intermedio",
    tipo: "conceptual",
    pregunta: "En los modelos de negocio contemporáneos, ¿qué define al modelo de suscripción?",
    opciones: [
      "El cliente realiza un pago recurrente (mensual, anual) a cambio del acceso continuo a un catálogo de productos o servicios.",
      "El cliente paga de forma anticipada por la compra del bien físico adquiriendo su propiedad absoluta.",
      "El producto se entrega de forma gratuita y la empresa gana dinero únicamente mediante publicidad intrusiva.",
      "El precio se fija de mutuo acuerdo mediante subasta digital en tiempo real en internet."
    ],
    respuestaCorrecta: "El cliente realiza un pago recurrente (mensual, anual) a cambio del acceso continuo a un catálogo de productos o servicios.",
    explicacion: "El modelo de suscripción (ej. Netflix, software SaaS) genera flujos de ingresos predecibles y de largo plazo para la organización, aumentando el valor del tiempo de vida del cliente (CLV).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-211",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Fijación de precios dinámica",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una aerolínea vende el mismo asiento a $150 tres meses antes del vuelo, y a $450 un día antes de la salida debido a la urgencia del comprador de negocios. Este es un ejemplo de:",
    opciones: [
      "Precios dinámicos basados en la urgencia y el momento de compra.",
      "Fijación de precios por paquete o bundle comercial.",
      "Estrategia de penetración de mercado de bajo costo.",
      "Fijación de precios cautivos por discriminación en aduanas."
    ],
    respuestaCorrecta: "Precios dinámicos basados en la urgencia y el momento de compra.",
    explicacion: "Las aerolíneas optimizan sus rendimientos (yield management) cobrando tarifas más altas a los viajeros de última hora (usualmente de negocios, con demanda inelástica) que a los de ocio que compran con antelación.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-212",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Fracasos de nuevos productos",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Un fabricante de jugos lanza una nueva bebida sin realizar estudios de mercado preliminares y el producto es rechazado debido a su sabor inusual. ¿Cuál fue la principal causa del fracaso?",
    opciones: [
      "Falta de investigación de mercados y desalineación con las preferencias del consumidor meta.",
      "Elegir un precio de descremado excesivamente bajo para la categoría.",
      "La escasez física de materias primas ecológicas para el empaque.",
      "El aumento repentino de las tasas de interés por parte del banco central."
    ],
    respuestaCorrecta: "Falta de investigación de mercados y desalineación con las preferencias del consumidor meta.",
    explicacion: "La falta de validación del concepto con el mercado meta es una de las razones principales del fracaso de nuevos productos, provocando pérdidas millonarias en el lanzamiento.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-213",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Estrategias defensivas",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un competidor líder introduce mejoras tecnológicas en su maquinaria para evitar que un nuevo retador ingrese al mercado con costos inferiores. ¿Qué tipo de estrategia defensiva está aplicando?",
    opciones: [
      "Defensa preventiva o proactiva.",
      "Defensa de posición estática pasiva.",
      "Defensa de flancos con marca alternativa.",
      "Estrategia de contracampaña publicitaria."
    ],
    respuestaCorrecta: "Defensa preventiva o proactiva.",
    explicacion: "La defensa preventiva busca anticiparse a la agresión del retador modificando la estructura técnica o de canal para disuadirlo o limitar su probabilidad de éxito antes de que inicie el ataque.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-214",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Ciclo de vida del producto",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una videoconsola de videojuegos clásica ve caer sus ventas un 30% anual y el fabricante decide dejar de actualizar su software, reduciendo al mínimo los costos de distribución. Esta estrategia se conoce como:",
    opciones: [
      "Estrategia de cosecha en la etapa de declive.",
      "Estrategia de descremado en la etapa de introducción.",
      "Estrategia de penetración en la etapa de madurez.",
      "Diferenciación selectiva de marcas en crecimiento."
    ],
    respuestaCorrecta: "Estrategia de cosecha en la etapa de declive.",
    explicacion: "Cosechar implica reducir drásticamente todos los gastos operativos, logísticos y publicitarios para maximizar la rentabilidad de las últimas unidades vendidas a los clientes rezagados antes de retirar el producto.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-215",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "CRM casos",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una aerolínea utiliza su sistema de fidelización para felicitar a los clientes en sus cumpleaños y regalarles un pase de cortesía a salas VIP de aeropuertos. ¿A qué estrategia responde esta acción?",
    opciones: [
      "Gestión de Relaciones con los Clientes (CRM) y marketing relacional.",
      "Promoción de ventas comercial para intermediarios logísticos.",
      "Estrategia de posicionamiento de marca de combate de flanqueo.",
      "Fijación de precios por discriminación de segmentos dinámicos."
    ],
    respuestaCorrecta: "Gestión de Relaciones con los Clientes (CRM) y marketing relacional.",
    explicacion: "El CRM recopila información individualizada para personalizar el trato de la marca, estrechar la vinculación emocional y aumentar el valor de tiempo de vida del cliente (CLV).",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-216",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Fijación por paquete",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Un parque de diversiones vende una entrada que incluye acceso a todos los juegos, estacionamiento y un menú de hamburguesas por $50, lo que resulta más económico que adquirirlos individualmente. Esta estrategia es:",
    opciones: [
      "Fijación de precios por paquete (bundling).",
      "Fijación de precios para productos cautivos indispensables.",
      "Estrategia de discriminación por segmentos geográficos.",
      "Penetración selectiva de precios dinámicos."
    ],
    respuestaCorrecta: "Fijación de precios por paquete (bundling).",
    explicacion: "El empaquetamiento o bundling incentiva la compra combinada de servicios auxiliares, facilitando la conveniencia de pago único y aumentando los ingresos promedios por transacción del parque.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-217",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Canal largo",
    dificultad: "básico",
    tipo: "caso",
    pregunta: "Un fabricante de caramelos decide vender sus productos únicamente a grandes almacenes mayoristas para que estos los distribuyan en quioscos y pequeñas tiendas de barrio. Este canal de distribución es:",
    opciones: [
      "Canal largo de varios niveles de intermediación.",
      "Canal directo o de nivel cero sin intermediación.",
      "Canal corto exclusivo de distribución selectiva.",
      "Canal cerrado administrado por el minorista."
    ],
    respuestaCorrecta: "Canal largo de varios niveles de intermediación.",
    explicacion: "Para bienes de conveniencia con compras frecuentes y de bajo precio, el canal largo es eficiente al atomizar la entrega física en miles de quioscos que el fabricante no podría atender de forma directa.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-218",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Miopía de marketing",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de máquinas de escribir quiebra en la década de 1990 al insistir en que su negocio es fabricar las mejores cintas de escribir, en lugar de ingresar a los procesadores de textos digitales. ¿Qué error estratégico cometieron?",
    opciones: [
      "Miopía de marketing al centrarse en el producto y no en la necesidad básica de escritura.",
      "Precios de descremado temporal dinámico insostenibles.",
      "Conflictos de canal de distribución vertical con intermediarios.",
      "Falta de inversión en relaciones públicas corporativas."
    ],
    respuestaCorrecta: "Miopía de marketing al centrarse en el producto y no en la necesidad básica de escritura.",
    explicacion: "Definir el negocio de forma estricta por el objeto físico (máquinas de escribir) impidió a la firma ver que la necesidad básica de los consumidores era procesar textos y comunicarse, la cual fue absorbida por las computadoras.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-219",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Disonancia cognoscitiva",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Un cliente compra una laptop de alta gama. Dos días después de la compra lee un informe que describe fallas en el teclado del modelo adquirido y experimenta malestar y dudas sobre su decisión. ¿Qué fenómeno se presenta?",
    opciones: [
      "Disonancia cognoscitiva post-compra.",
      "Miopía de marketing post-transaccional.",
      "Falla de inseparabilidad del servicio técnico.",
      "Canibalización de producto por segmentación."
    ],
    respuestaCorrecta: "Disonancia cognoscitiva post-compra.",
    explicacion: "La disonancia cognoscitiva surge tras la compra cuando el consumidor se expone a información contradictoria o duda de su decisión. Se mitiga ofreciendo garantías sólidas y reafirmando los beneficios de la compra en la comunicación post-venta.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-220",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Marketing de relaciones",
    dificultad: "básico",
    tipo: "caso",
    pregunta: "Un taller mecánico ofrece cambio de aceite gratuito en la quinta visita del cliente, registrando el historial en una base de datos para recordarles cuándo toca su próxima afinación. ¿Qué estrategia está utilizando?",
    opciones: [
      "Marketing de relaciones y fidelización de clientes.",
      "Estrategia de penetración rápida de precios de fábrica.",
      "Fijación de precios de descremado por discriminación.",
      "Publicidad cooperativa de relaciones públicas de marca."
    ],
    respuestaCorrecta: "Marketing de relaciones y fidelización de clientes.",
    explicacion: "El taller busca incentivar visitas recurrentes y forjar una relación a largo plazo, aumentando el valor de vida del cliente (CLV) y desincentivando que el cliente acuda a talleres competidores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-221",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "SERVQUAL dimensiones",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una clínica médica rediseña su sala de espera incorporando sillones ergonómicos, música relajante y café de cortesía para los pacientes. ¿En qué dimensión de calidad del servicio del modelo SERVQUAL está incidiendo?",
    opciones: [
      "Elementos tangibles.",
      "Capacidad de respuesta.",
      "Empatía.",
      "Fiabilidad."
    ],
    respuestaCorrecta: "Elementos tangibles.",
    explicacion: "La dimensión de elementos tangibles evalúa la apariencia física de las instalaciones, equipos, personal y materiales de comunicación de la empresa de servicios, mejorando la comodidad del paciente.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-222",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Ansoff penetración",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una cafetería ofrece una tarjeta de fidelidad donde el cliente recibe un sello por cada café comprado; al juntar diez sellos obtiene uno gratis. ¿Qué estrategia de crecimiento describe según la matriz de Ansoff?",
    opciones: [
      "Penetración de mercado.",
      "Desarrollo de mercado.",
      "Desarrollo de producto.",
      "Diversificación."
    ],
    respuestaCorrecta: "Penetración de mercado.",
    explicacion: "La penetración busca vender más de los mismos productos actuales en los mismos mercados actuales de la empresa, estimulando un mayor consumo o frecuencia de compra de los clientes existentes.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-223",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "BCG perro",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una línea de cosméticos tradicionales tiene una participación de mercado insignificante en un sector que ya no registra crecimiento anual. Según la matriz BCG, esta línea de cosméticos es un producto:",
    opciones: [
      "Perro (dog).",
      "Estrella (star).",
      "Vaca (cash cow).",
      "Interrogante (question mark)."
    ],
    respuestaCorrecta: "Perro (dog).",
    explicacion: "Los productos 'perro' tienen baja participación relativa de mercado en un sector de bajo crecimiento. Pueden generar utilidades bajas pero suelen consumir recursos y tiempo, aconsejándose su descontinuación.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-224",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Precio cautivo",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de afeitadoras vende el mango de la rasuradora a un precio muy accesible de $5, pero vende los repuestos de hojas de afeitar a $15 la caja de cuatro unidades. ¿Qué estrategia de precios describe?",
    opciones: [
      "Fijación de precios para productos cautivos.",
      "Fijación de precios por paquete (bundling).",
      "Discriminación por segmento de clientes.",
      "Fijación de precios por descremado dinámico."
    ],
    respuestaCorrecta: "Fijación de precios para productos cautivos.",
    explicacion: "El mango es inútil sin las hojas de repuesto. Vender barato el equipo básico asegura la base de clientes, quienes quedan atados ('cautivos') a comprar los repuestos a precios elevados y de alto margen de ganancia.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-225",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Diferenciación por el canal",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de cosméticos artesanales decide no vender en tiendas físicas tradicionales y comercializa sus productos de forma exclusiva por medio de asesoras independientes a domicilio. Esta marca se diferencia por:",
    opciones: [
      "El canal de distribución.",
      "El personal de servicio dental.",
      "La imagen visual y marca privada.",
      "El diseño de ingeniería del empaque."
    ],
    respuestaCorrecta: "El canal de distribución.",
    explicacion: "La diferenciación por canal se logra diseñando de forma única la cobertura, experiencia o servicio del canal de distribución de la empresa para distinguirse de los canales de los competidores.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-226",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Valor de vida",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un cliente de un banco de negocios realiza transacciones mensuales que generan $100 de ganancia neta. Si se proyecta que la relación activa durará 5 años, ¿cuál es el valor del tiempo de vida del cliente (CLV) omitiendo tasas de descuento?",
    opciones: [
      "$6,000 (acumulado de 60 meses de transacciones activas).",
      "$500 (acumulado de los 5 años de relación anual).",
      "$100 (el margen neto transaccional unitario).",
      "$1,200 (el total facturado en el primer periodo fiscal comercial)."
    ],
    respuestaCorrecta: "$6,000 (acumulado de 60 meses de transacciones activas).",
    explicacion: "El CLV proyecta el flujo total de beneficios netos que generará el cliente durante todo su ciclo de relación comercial. En este caso: $100 netos mensuales * 12 meses * 5 años = $6,000.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-227",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Fijación por valor",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Un fabricante de chocolate fino gourmet establece el precio de su tableta en $8 después de confirmar que los amantes del chocolate perciben que sus ingredientes orgánicos y empaque artesanal justifican ese valor. ¿Qué enfoque utilizó?",
    opciones: [
      "Fijación de precios basada en el valor para el cliente.",
      "Fijación de precios basada en el costo total unitario.",
      "Estrategia de penetración dinámica de mercados.",
      "Fijación de precios por paridad competitiva sectorial."
    ],
    respuestaCorrecta: "Fijación de precios basada en el valor para el cliente.",
    explicacion: "El enfoque por valor empieza analizando el valor autopercibido por el consumidor para fijar el precio, determinando a partir de allí los costos permitidos de fabricación.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-228",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Inbound Marketing casos",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una consultora de negocios publica semanalmente guías y videos gratuitos sobre cómo administrar impuestos corporativos para captar contactos de empresas interesadas en sus asesorías de pago. Esta estrategia es:",
    opciones: [
      "Inbound Marketing o marketing de contenidos.",
      "Publicidad tradicional de empuje (Push).",
      "Ventas personales de alta presión comercial.",
      "Relaciones públicas con patrocinio de marcas."
    ],
    respuestaCorrecta: "Inbound Marketing o marketing de contenidos.",
    explicacion: "Al aportar valor y resolver dudas iniciales de forma gratuita mediante contenido de calidad, la consultora atrae orgánicamente a prospectos calificados que buscan sus servicios premium.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-229",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Franquicia internacional",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una cafetería de EE. UU. firma un acuerdo legal que autoriza a un inversionista de Chile a abrir diez cafeterías idénticas en Santiago, siguiendo su manual de operaciones y pagando regalías mensuales. Este acuerdo es:",
    opciones: [
      "Un acuerdo de franquicia internacional.",
      "Una joint venture de coinversión estatal.",
      "Un contrato de licenciamiento de marca blanca.",
      "Una estrategia de inversión directa masiva."
    ],
    respuestaCorrecta: "Un acuerdo de franquicia internacional.",
    explicacion: "La franquicia otorga los derechos de replicar un modelo de negocio completo y probado bajo supervisión y estándares del franquiciante a cambio de tarifas iniciales y regalías continuas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-230",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Discriminación precios",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una compañía de software cobra $10 al mes por su versión para estudiantes, $30 para profesionales y $150 para grandes corporaciones por la misma suite de programas. Esta estrategia es:",
    opciones: [
      "Fijación de precios por segmentos (discriminación de precios).",
      "Fijación de precios por productos cautivos obligatorios.",
      "Estrategia de penetración de mercado de bajo costo.",
      "Fijación de precios dinámicos basados en la demanda."
    ],
    respuestaCorrecta: "Fijación de precios por segmentos (discriminación de precios).",
    explicacion: "La empresa segmenta la demanda según la capacidad de pago y las necesidades de soporte técnico de cada grupo de usuarios, maximizando los ingresos de la suite de software.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-231",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Showrooming casos",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Un consumidor visita una gran tienda minorista para probar un par de audífonos de alta gama y confirmar su comodidad. En ese momento, busca en su celular y los compra en un sitio web con 20% de descuento. Este consumidor realizó:",
    opciones: [
      "Showrooming.",
      "Webrooming.",
      "Omnicanalidad integrada.",
      "Desintermediación física forzada."
    ],
    respuestaCorrecta: "Showrooming.",
    explicacion: "El showrooming consiste en usar la tienda física como sala de exhibición (showroom) y asesoría gratuita, para luego comprar en canales digitales que ofrecen precios inferiores al no tener costos fijos de tienda física.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-232",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "RRPP crisis",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una marca de alimentos sufre una contaminación accidental en un lote y emite un comunicado público transparente retirando el producto y cooperando con las autoridades sanitarias. ¿A qué área responde esto?",
    opciones: [
      "Relaciones públicas y gestión de comunicación de crisis.",
      "Promoción de ventas orientada al comercio minorista.",
      "Ventas personales y manejo de objeciones comerciales.",
      "Marketing directo dinámico para bases de datos selectas."
    ],
    respuestaCorrecta: "Relaciones públicas y gestión de comunicación de crisis.",
    explicacion: "Una gestión honesta y ágil de las RRPP ante incidentes graves protege la reputación de la marca a largo plazo, limitando el impacto del boca a boca negativo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-233",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Ciclo de vida madurez",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de champú tradicional con ventas consolidadas estables decide cambiar su fragancia e incorporar aceite de argán para relanzarla ante nuevos consumidores. ¿Qué estrategia está aplicando?",
    opciones: [
      "Modificación del producto en la etapa de madurez del ciclo de vida.",
      "Estrategia de descremado en la etapa de introducción comercial.",
      "Penetración selectiva por discriminación de precios de fábrica.",
      "Estrategia de cosecha en la etapa de declive tecnológico."
    ],
    respuestaCorrecta: "Modificación del producto en la etapa de madurez del ciclo de vida.",
    explicacion: "En la fase de madurez, modificar las características de calidad, desempeño o estilo del producto permite reavivar las ventas y competir contra marcas más recientes o marcas blancas.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-234",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Ansoff diversificación",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un fabricante de camiones industriales decide adquirir una empresa de desarrollo de videojuegos móviles infantiles para ingresar a ese sector. Según la matriz de Ansoff, esta estrategia de crecimiento es:",
    opciones: [
      "Diversificación pura (no relacionada).",
      "Desarrollo de mercado.",
      "Desarrollo de producto.",
      "Penetración de mercado."
    ],
    respuestaCorrecta: "Diversificación pura (no relacionada).",
    explicacion: "La diversificación pura implica ingresar a un negocio completamente nuevo, con productos nuevos en mercados en los que la empresa antes no tenía ningún tipo de presencia o conocimiento operativo.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-235",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Canal directo",
    dificultad: "básico",
    tipo: "caso",
    pregunta: "Un fabricante de quesos de campo instala un pequeño puesto de venta en la entrada de su granja para comercializar sus productos de forma directa a los automovilistas. Este canal de distribución es de:",
    opciones: [
      "Nivel cero (canal directo).",
      "Un nivel (canal corto indirecto).",
      "Dos niveles (canal minorista mayorista).",
      "Tres niveles (con intermediación de comisionista)."
    ],
    respuestaCorrecta: "Nivel cero (canal directo).",
    explicacion: "No existen intermediarios entre el productor del queso y el consumidor final de la autopista, lo que caracteriza al canal directo o de nivel cero.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-236",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Elasticidad elástica",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Un fabricante de pan dulce sube sus precios un 20% y ve caer sus ventas un 45%, registrando una caída en sus ingresos totales de fin de mes. ¿Qué tipo de demanda exhibe el producto?",
    opciones: [
      "Demanda elástica.",
      "Demanda inelástica.",
      "Demanda unitaria fija.",
      "Demanda perfectamente rígida."
    ],
    respuestaCorrecta: "Demanda elástica.",
    explicacion: "Una demanda elástica (elasticidad > 1) se presenta cuando el cambio porcentual en la cantidad demandada (45%) supera al cambio porcentual en el precio (20%). En este escenario, subir los precios reduce la facturación total.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-237",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Campaña Pull",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de juguetes patrocina una serie animada de televisión y lanza comerciales para motivar a los niños a pedir los juguetes en las jugueterías locales. ¿Qué estrategia promocional emplea?",
    opciones: [
      "Estrategia de atracción (Pull).",
      "Estrategia de empuje (Push).",
      "Marketing directo cooperativo.",
      "Venta consultiva de doble vía."
    ],
    respuestaCorrecta: "Estrategia de atracción (Pull).",
    explicacion: "La marca dirige el mensaje al consumidor final (los niños) para que exijan el juguete a los minoristas, quienes a su vez lo demandarán al fabricante, forzando la atracción del producto por el canal.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-238",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Co-branding casos",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Una marca de helados lanza un helado sabor a una conocida galleta de chocolate rellena, mostrando la marca y logotipo de la galleta en el envase comercial. Este es un caso de:",
    opciones: [
      "Co-branding de ingredientes.",
      "Extensión de línea genérica.",
      "Licenciamiento de marca blanca privada.",
      "Estrategia de marcas múltiples competidoras."
    ],
    respuestaCorrecta: "Co-branding de ingredientes.",
    explicacion: "El helado incorpora un ingrediente de marca reconocida y la destaca comercialmente para aprovechar el prestigio y preferencia asociada a dicha galleta, atrayendo a sus fanáticos.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-239",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Métricas CPA",
    dificultad: "avanzado",
    tipo: "caso",
    pregunta: "Una campaña digital invierte $1,000 y consigue 20 clientes nuevos de pago. ¿Cuál fue el costo de adquisición de cliente (CAC/CPA) de la campaña?",
    opciones: [
      "$50 por cliente.",
      "$20 por cliente.",
      "$1,000 por cliente.",
      "$5 por cliente."
    ],
    respuestaCorrecta: "$50 por cliente.",
    explicacion: "El CAC o CPA se obtiene dividiendo la inversión total entre el número de clientes captados: $1,000 / 20 = $50.",
    fuenteBase: "Fundamentos de Marketing"
  },
  {
    id: "Q-240",
    simulador: "SIM-06",
    tema: "Casos de Estudio y Análisis de Decisiones",
    subtema: "Marketing sostenible",
    dificultad: "intermedio",
    tipo: "caso",
    pregunta: "Un fabricante de cosméticos rediseña sus frascos utilizando vidrio 100% reciclado y dona un porcentaje de cada venta a la reforestación de bosques locales. ¿Qué enfoque estratégico de marketing aplica?",
    opciones: [
      "Marketing social o sostenible.",
      "Marketing de relaciones puras.",
      "Fijación de precios de descremado dinámico.",
      "Estrategia de marcas múltiples en canales largos."
    ],
    respuestaCorrecta: "Marketing social o sostenible.",
    explicacion: "El marketing social balancea las utilidades del fabricante, las preferencias del cliente y el bienestar colectivo a largo plazo del planeta y de la sociedad.",
    fuenteBase: "Fundamentos de Marketing"
  }
];

