export interface Concept {
  id: string;
  name: string;
  definition: string;
  block: number;
  topicId: string;
  example: string;
}

export const concepts: Concept[] = [
  {
    id: "C01",
    name: "Marketing (Mercadotecnia)",
    definition: "Proceso social y administrativo mediante el cual los grupos e individuos obtienen lo que necesitan y desean a través de la creación, ofrecimiento e intercambio de productos de valor con sus semejantes.",
    block: 1,
    topicId: "T01",
    example: "Una empresa de software desarrolla una plataforma de gestión para pequeñas empresas, identifica sus necesidades y promueve el valor del ahorro de tiempo para captar clientes."
  },
  {
    id: "C02",
    name: "Necesidad",
    definition: "Estado de carencia percibida en el ser humano, que incluye necesidades físicas básicas, necesidades sociales de pertenencia y afecto, y necesidades individuales de conocimiento y expresión personal.",
    block: 1,
    topicId: "T01",
    example: "La sensación física de hambre que experimenta una persona a mitad de su jornada laboral, requiriendo alimento para continuar sus actividades."
  },
  {
    id: "C03",
    name: "Deseo",
    definition: "Forma que adopta una necesidad humana al ser moldeada por la cultura y la personalidad individual. Los deseos están orientados a objetos específicos que satisfacen la necesidad.",
    block: 1,
    topicId: "T01",
    example: "Tener la necesidad de comer (hambre) y desear específicamente una hamburguesa de una marca determinada en lugar de fruta o verdura."
  },
  {
    id: "C04",
    name: "Demanda",
    definition: "Deseo humano respaldado por el poder de compra. Representa la cantidad de un bien o servicio que los consumidores están dispuestos y tienen la capacidad de adquirir a un precio dado.",
    block: 1,
    topicId: "T01",
    example: "Millones de personas desean un automóvil de lujo, pero solo unas miles cuentan con el poder adquisitivo real para comprarlo, constituyendo la demanda real del mercado."
  },
  {
    id: "C05",
    name: "Valor para el cliente",
    definition: "Evaluación subjetiva que hace el cliente de la diferencia entre todos los beneficios y todos los costos de una oferta de marketing en comparación con las ofertas de la competencia.",
    block: 1,
    topicId: "T01",
    example: "Un pasajero prefiere pagar una tarifa más alta en una aerolínea porque valora la puntualidad, el espacio adicional para las piernas y la atención al cliente recibida."
  },
  {
    id: "C06",
    name: "Satisfacción del cliente",
    definition: "Grado en el que el desempeño percibido de un producto concuerda con las expectativas previas del comprador. Si el desempeño es menor, el cliente queda insatisfecho; si iguala o supera, queda satisfecho.",
    block: 1,
    topicId: "T01",
    example: "Un cliente compra un teléfono esperando que la batería dure un día entero y descubre con agrado que la carga rinde hasta dos días de uso continuo."
  },
  {
    id: "C07",
    name: "Intercambio",
    definition: "Acto de obtener de alguien un objeto deseado mediante el ofrecimiento de algo a cambio. Requiere al menos dos partes, libertad de aceptación o rechazo y comunicación fluida.",
    block: 1,
    topicId: "T01",
    example: "Una persona entrega una cantidad fija de dinero en efectivo a cambio de un libro de texto en una librería local."
  },
  {
    id: "C08",
    name: "Transacción",
    definition: "Unidad de medida del intercambio comercial que consiste en un comercio de valores entre dos partes. Por lo general, incluye al menos dos cosas de valor, condiciones convenidas, un momento de acuerdo y un lugar.",
    block: 1,
    topicId: "T01",
    example: "La firma de un contrato de arrendamiento donde se estipula el pago mensual de un local comercial a partir de una fecha determinada."
  },
  {
    id: "C09",
    name: "Mercado",
    definition: "Conjunto de todos los compradores reales y potenciales de un producto o servicio. Comparten una necesidad o deseo particular que puede satisfacerse mediante relaciones de intercambio.",
    block: 1,
    topicId: "T01",
    example: "El grupo global de personas interesadas en adquirir calzado deportivo para correr y que disponen de los medios para pagarlo."
  },
  {
    id: "C10",
    name: "Orientación a la producción",
    definition: "Filosofía administrativa que sostiene que los consumidores favorecerán los productos que estén disponibles y sean muy accesibles. Se enfoca en mejorar la eficiencia de producción y distribución.",
    block: 1,
    topicId: "T01",
    example: "El modelo original del coche Ford T, fabricado en masa en un solo color negro para minimizar costos de producción y venderse a bajo precio."
  },
  {
    id: "C11",
    name: "Orientación al producto",
    definition: "Filosofía comercial que sostiene que los consumidores preferirán los productos que ofrezcan la mayor calidad, rendimiento e innovación. La organización enfoca sus esfuerzos a hacer mejoras continuas al producto.",
    block: 1,
    topicId: "T01",
    example: "Una marca de relojes que se concentra únicamente en agregar complejidades mecánicas extremas al diseño, descuidando si el mercado prefiere relojes digitales inteligentes."
  },
  {
    id: "C12",
    name: "Orientación a las ventas",
    definition: "Filosofía que afirma que los consumidores no comprarán suficiente cantidad de productos de la organización a menos que esta emprenda una labor de ventas y promoción a gran escala.",
    block: 1,
    topicId: "T01",
    example: "Las agencias de seguros de vida o funerarias, que aplican técnicas de venta agresiva porque comercializan bienes no buscados espontáneamente por el consumidor."
  },
  {
    id: "C13",
    name: "Orientación al marketing",
    definition: "Filosofía en la que el logro de las metas organizacionales depende de conocer las necesidades y los deseos de los mercados meta, y de proporcionar las satisfacciones deseadas de mejor manera que los competidores.",
    block: 1,
    topicId: "T01",
    example: "Una cadena hotelera que realiza encuestas previas para personalizar el tipo de almohada y la temperatura de la habitación según los gustos individuales de cada huésped."
  },
  {
    id: "C14",
    name: "Orientación al marketing social",
    definition: "Filosofía que cuestiona si la orientación al marketing puro pasa por alto los conflictos potenciales entre los deseos a corto plazo del consumidor y su bienestar a largo plazo. Busca equilibrar las utilidades de la empresa, los deseos del cliente y los intereses de la sociedad.",
    block: 1,
    topicId: "T01",
    example: "Una cadena de comida rápida que rediseña sus envases para utilizar cartón reciclable y reduce el contenido de sodio en sus menús para combatir la obesidad infantil."
  },
  {
    id: "C15",
    name: "Miopía de marketing",
    definition: "Error que consiste en prestar más atención a los productos específicos que ofrece una empresa que a los beneficios y experiencias generados por dichos productos.",
    block: 1,
    topicId: "T01",
    example: "Las compañías de ferrocarriles que quebraron al creer que su negocio eran los trenes en lugar del transporte de pasajeros y carga, ignorando la competencia de aviones y camiones."
  },
  {
    id: "C16",
    name: "Microentorno",
    definition: "Fuerzas cercanas a la empresa que afectan su capacidad para servir a sus clientes: la propia empresa, los proveedores, los intermediarios de marketing, los mercados de clientes, los competidores y los públicos.",
    block: 1,
    topicId: "T02",
    example: "La huelga laboral imprevista en la planta de un proveedor de microchips que paraliza la línea de ensamblaje de una corporación tecnológica."
  },
  {
    id: "C17",
    name: "Macroentorno",
    definition: "Grandes fuerzas sociales que influyen en todo el microentorno: fuerzas demográficas, económicas, naturales, tecnológicas, políticas y socioculturales.",
    block: 1,
    topicId: "T02",
    example: "La promulgación de una ley nacional que prohíbe el uso de plásticos de un solo uso, obligando a toda una industria a reformular sus empaques."
  },
  {
    id: "C18",
    name: "Demografía",
    definition: "Estudio de las poblaciones humanas en términos de magnitud, densidad, ubicación, edad, género, raza, ocupación y otros datos estadísticos relevantes para el análisis de mercados.",
    block: 1,
    topicId: "T02",
    example: "El envejecimiento progresivo de la población en Europa occidental, lo que incrementa la demanda de productos de salud y ocio especializado para la tercera edad."
  },
  {
    id: "C19",
    name: "Entorno económico",
    definition: "Factores económicos que influyen en el poder de compra y en los patrones de gasto de los consumidores, tales como la inflación, las tasas de interés y los niveles de desempleo.",
    block: 1,
    topicId: "T02",
    example: "Una recesión económica nacional que provoca que los consumidores reduzcan el gasto en bienes de lujo y opten por marcas de distribuidor (marcas blancas)."
  },
  {
    id: "C20",
    name: "Entorno político-legal",
    definition: "Leyes, dependencias gubernamentales y grupos de presión que influyen en diversas organizaciones e individuos de una sociedad determinada y los limitan.",
    block: 1,
    topicId: "T02",
    example: "La normativa europea RGPD que obliga a las empresas digitales a rediseñar la forma en que solicitan consentimiento para almacenar cookies de sus usuarios."
  },
  {
    id: "C21",
    name: "Entorno sociocultural",
    definition: "Instituciones y otras fuerzas que influyen en los valores básicos, percepciones, preferencias y comportamientos fundamentales de una sociedad.",
    block: 1,
    topicId: "T02",
    example: "La creciente tendencia hacia un estilo de vida saludable y de bienestar físico, impulsando las ventas de comida orgánica y membresías de gimnasios."
  },
  {
    id: "C22",
    name: "Entorno tecnológico",
    definition: "Fuerzas que crean nuevas tecnologías, las cuales a su vez generan nuevos productos y oportunidades de mercado, al tiempo que vuelven obsoletas las tecnologías existentes.",
    block: 1,
    topicId: "T02",
    example: "La llegada del streaming de música en la nube, que sustituyó casi por completo las ventas de soportes físicos como los discos compactos."
  },
  {
    id: "C23",
    name: "Entorno medioambiental",
    definition: "Recursos naturales requeridos como insumos por los mercadólogos o que resultan afectados por las actividades de marketing, incluyendo la escasez de materias primas y la contaminación.",
    block: 1,
    topicId: "T02",
    example: "La escasez de agua dulce que obliga a las plantas embotelladoras a invertir en tecnologías de reciclaje hídrico para mantener sus licencias operativas."
  },
  {
    id: "C24",
    name: "Intermediarios de marketing",
    definition: "Empresas que ayudan a la compañía a promover, vender y distribuir sus productos a los compradores finales; incluye distribuidores, mayoristas, minoristas y agencias de publicidad.",
    block: 1,
    topicId: "T02",
    example: "Una cadena de supermercados que compra directamente a los agricultores locales y distribuye las frutas en sus tiendas minoristas para el cliente final."
  },
  {
    id: "C25",
    name: "Sistema de Información de Marketing (SIM)",
    definition: "Personal, equipo y procedimientos para obtener, clasificar, analizar, evaluar y distribuir información necesaria, oportuna y exacta para la toma de decisiones de marketing.",
    block: 2,
    topicId: "T03",
    example: "Una base de datos integrada que recopila información de ventas diarias, quejas del servicio técnico y precios de competidores para generar reportes semanales al director de marketing."
  },
  {
    id: "C26",
    name: "Investigación de mercados",
    definition: "Diseño, recopilación, análisis e informe sistemático de datos pertinentes a una situación de marketing específica que enfrenta una organización.",
    block: 2,
    topicId: "T03",
    example: "Una compañía telefónica realiza encuestas telefónicas y grupos focales para entender por qué los clientes cancelan sus contratos."
  },
  {
    id: "C27",
    name: "Datos primarios",
    definition: "Información recopilada por primera vez con el propósito específico de responder al problema de investigación de marketing que se está analizando.",
    block: 2,
    topicId: "T03",
    example: "La realización de encuestas cara a cara en un centro comercial para evaluar la aceptación del sabor de un nuevo helado."
  },
  {
    id: "C28",
    name: "Datos secundarios",
    definition: "Información que ya existe en alguna parte, por haberse recopilado con anterioridad para otros propósitos diferentes a los del estudio actual.",
    block: 2,
    topicId: "T03",
    example: "Consultar los informes oficiales de crecimiento demográfico publicados por el Instituto Nacional de Estadística (INE) para proyectar el tamaño del mercado de bebés."
  },
  {
    id: "C29",
    name: "Investigación exploratoria",
    definition: "Investigación de marketing que busca recabar información preliminar para ayudar a definir problemas y sugerir hipótesis de trabajo de forma flexible e informal.",
    block: 2,
    topicId: "T03",
    example: "Reunirse de manera informal con un pequeño grupo de consumidores para platicar sobre sus sentimientos hacia la inteligencia artificial en la banca."
  },
  {
    id: "C30",
    name: "Investigación descriptiva",
    definition: "Investigación de marketing que busca caracterizar de manera detallada situaciones o mercados, como las características demográficas o las actitudes de los compradores de un producto.",
    block: 2,
    topicId: "T03",
    example: "Aplicar un cuestionario estructurado a 1,000 conductores para determinar con precisión la edad promedio, el nivel de ingresos y la marca de automóvil favorita de los encuestados."
  },
  {
    id: "C31",
    name: "Investigación causal",
    definition: "Investigación de marketing que busca probar hipótesis acerca de las relaciones de causa y efecto entre variables del marketing mix.",
    block: 2,
    topicId: "T03",
    example: "Realizar un experimento de campo mostrando dos precios diferentes para un mismo producto en dos tiendas web similares para medir el impacto directo en la tasa de conversión."
  },
  {
    id: "C32",
    name: "Focus Group (Grupo de discusión)",
    definition: "Técnica de investigación cualitativa consistente en reunir a un grupo pequeño de 6 a 10 personas con un moderador capacitado para hablar sobre un producto, servicio u organización de manera espontánea.",
    block: 2,
    topicId: "T03",
    example: "Invitar a 8 jóvenes universitarios a una sala con cámara Gesell para opinar libremente sobre el diseño del empaque de una nueva bebida energética."
  },
  {
    id: "C33",
    name: "Comportamiento del consumidor",
    definition: "Estudio de los procesos que intervienen cuando personas o grupos eligen, compran, usan o desechan productos, servicios, ideas o experiencias para satisfacer sus necesidades y deseos.",
    block: 2,
    topicId: "T04",
    example: "Analizar por qué los compradores prefieren adquirir marcas caras de cosméticos en tiendas departamentales en lugar de supermercados."
  },
  {
    id: "C34",
    name: "Proceso de decisión de compra",
    definition: "Etapas que atraviesa el comprador para tomar una decisión de adquisición: reconocimiento de la necesidad, búsqueda de información, evaluación de alternativas, decisión de compra y comportamiento poscompra.",
    block: 2,
    topicId: "T04",
    example: "Un estudiante nota que su laptop falló (necesidad), busca opciones en internet (información), compara procesadores y precios (alternativas), la compra y luego evalúa si funciona bien (poscompra)."
  },
  {
    id: "C35",
    name: "Caja negra del consumidor",
    definition: "Modelo conceptual que describe cómo los estímulos de marketing y otros factores externos entran en la mente del consumidor, donde interactúan con sus características y procesos de decisión internos, resultando en respuestas de compra.",
    block: 2,
    topicId: "T04",
    example: "El diseño de una campaña publicitaria que provoca un deseo interno no observable en el consumidor, que culmina semanas después con la compra física del producto."
  },
  {
    id: "C36",
    name: "Factores culturales",
    definition: "Conjunto de valores, percepciones, deseos y comportamientos básicos que un miembro de la sociedad aprende de su familia y otras instituciones importantes, influyendo profundamente en su conducta de compra.",
    block: 2,
    topicId: "T04",
    example: "La preferencia generalizada por el consumo de pavo durante las fiestas de fin de año en ciertos países de Latinoamérica debido a tradiciones arraigadas."
  },
  {
    id: "C37",
    name: "Factores sociales",
    definition: "Grupos de referencia, redes sociales de pertenencia, la estructura familiar, y el rol y estatus social que influyen de manera directa en el comportamiento de compra del individuo.",
    block: 2,
    topicId: "T04",
    example: "Un adolescente insiste en comprar zapatillas de una marca de moda específica porque todos sus compañeros de equipo deportivo (grupo de referencia) las usan."
  },
  {
    id: "C38",
    name: "Factores personales",
    definition: "Características externas de un consumidor que impactan sus decisiones de compra: la edad, etapa del ciclo de vida familiar, ocupación, situación económica, estilo de vida y personalidad.",
    block: 2,
    topicId: "T04",
    example: "Un ejecutivo de finanzas compra trajes formales de sastre y maletines de cuero, mientras que un diseñador gráfico prefiere jeans y mochilas informales."
  },
  {
    id: "C39",
    name: "Factores psicológicos",
    definition: "Factores internos que motivan e impulsan las elecciones del consumidor: la motivación, la percepción, el aprendizaje y las creencias y actitudes.",
    block: 2,
    topicId: "T04",
    example: "Un comprador percibe de forma selectiva los anuncios de seguros médicos tras enterarse de la hospitalización de un colega cercano (percepción y motivación)."
  },
  {
    id: "C40",
    name: "Disonancia cognoscitiva",
    definition: "Incomodidad o conflicto interno que siente el comprador después de la compra como consecuencia de las dudas que le genera haber elegido una opción en lugar de otra atractiva.",
    block: 2,
    topicId: "T04",
    example: "Sentir arrepentimiento y ansiedad tras gastar una fuerte suma de dinero en un auto deportivo, cuestionándose si debió comprar un modelo familiar más económico."
  },
  {
    id: "C41",
    name: "Segmentación de mercado",
    definition: "División de un mercado en grupos más pequeños de compradores con necesidades, características o conductas diferentes, que podrían requerir mezclas de marketing o productos independientes.",
    block: 2,
    topicId: "T05",
    example: "Dividir el mercado de refrescos en personas que prefieren bebidas con azúcar, sin azúcar, y bebidas con cafeína natural."
  },
  {
    id: "C42",
    name: "Segmentación demográfica",
    definition: "División del mercado en grupos basados en variables demográficas cuantitativas y cualitativas de la población como edad, género, tamaño de familia, ingresos, ocupación, religión e idioma.",
    block: 2,
    topicId: "T05",
    example: "Una marca de maquillaje que diseña y promociona una línea de productos exclusivamente para adolescentes entre 13 y 18 años."
  },
  {
    id: "C43",
    name: "Segmentación psicográfica",
    definition: "División de un mercado en diferentes grupos según su clase social, estilo de vida, valores o rasgos de la personalidad de los consumidores.",
    block: 2,
    topicId: "T05",
    example: "Una marca de café premium que dirige su publicidad a personas con estilo de vida urbano, sofisticado e interesado en la sostenibilidad del cultivo."
  },
  {
    id: "C44",
    name: "Segmentación conductual",
    definition: "División del mercado basada en los conocimientos, actitudes, usos o respuestas del consumidor hacia un producto en función de ocasiones de uso, beneficios buscados y frecuencia de compra.",
    block: 2,
    topicId: "T05",
    example: "Las aerolíneas que dividen su base de datos de clientes entre viajeros frecuentes de negocios (viajan semanalmente) y viajeros ocasionales de vacaciones."
  },
  {
    id: "C45",
    name: "Mercado meta (Targeting)",
    definition: "Proceso de evaluación del atractivo de cada segmento de mercado y selección de uno o más segmentos para incursionar con una oferta comercial específica.",
    block: 2,
    topicId: "T05",
    example: "Un desarrollador de videojuegos independientes decide enfocar todos sus recursos publicitarios exclusivamente en adultos jóvenes aficionados a los juegos retro."
  },
  {
    id: "C46",
    name: "Posicionamiento",
    definition: "Arreglo de un producto para que ocupe un lugar claro, distintivo y deseable en la mente de los consumidores meta, en relación con los productos de los competidores.",
    block: 2,
    topicId: "T05",
    example: "La marca Volvo, que a lo largo de décadas ha logrado posicionarse en el mercado global bajo el concepto central e indiscutible de 'Seguridad'."
  },
  {
    id: "C47",
    name: "Propuesta de valor",
    definition: "Conjunto completo de beneficios o valores que una marca promete entregar a los consumidores para satisfacer sus necesidades y diferenciarse de la competencia.",
    block: 2,
    topicId: "T05",
    example: "La propuesta de valor de Uber: 'El viaje que deseas, la forma más sencilla de moverte a un solo toque en tu teléfono móvil'."
  },
  {
    id: "C48",
    name: "Diferenciación",
    definition: "Proceso de crear características únicas y valiosas en la oferta de mercado de la empresa para distinguirse claramente de las ofertas de los competidores.",
    block: 2,
    topicId: "T05",
    example: "Un restaurante de hamburguesas que utiliza pan artesanal horneado al momento y carnes certificadas de origen orgánico local."
  },
  {
    id: "C49",
    name: "Mezcla de marketing (Marketing Mix)",
    definition: "Conjunto de herramientas tácticas y controlables de marketing (las 4 P: producto, precio, plaza y promoción) que la empresa combina para producir la respuesta deseada en el mercado meta.",
    block: 3,
    topicId: "T06",
    example: "La combinación de lanzar un refresco dietético (Producto), venderlo a 1.50€ (Precio), distribuirlo en supermercados (Plaza) y hacer anuncios en redes sociales (Promoción)."
  },
  {
    id: "C50",
    name: "Producto básico",
    definition: "Nivel fundamental del producto que resuelve el problema o necesidad del consumidor. Consiste en el beneficio o servicio esencial que busca el comprador.",
    block: 3,
    topicId: "T06",
    example: "El producto básico de un labial no es el maquillaje físico, sino la esperanza de lucir más atractiva y segura de sí misma."
  },
  {
    id: "C51",
    name: "Producto real",
    definition: "Nivel del producto que contiene sus partes tangibles y atributos físicos combinados: su nivel de calidad, funciones, diseño, nombre de marca y empaque.",
    block: 3,
    topicId: "T06",
    example: "El teléfono inteligente iPhone en sí, con su carcasa de aluminio, pantalla OLED táctil de 6.1 pulgadas y la marca Apple grabada al reverso."
  },
  {
    id: "C52",
    name: "Producto aumentado",
    definition: "Servicios y beneficios adicionales agregados que giran alrededor de los niveles básico y real del producto, como la garantía, entrega a domicilio, instalación y servicio posventa.",
    block: 3,
    topicId: "T06",
    example: "Un concesionario que vende un automóvil e incluye mantenimiento gratuito por 3 años, asistencia vial las 24 horas y financiación sin intereses."
  },
  {
    id: "C53",
    name: "Bienes de conveniencia",
    definition: "Bienes de consumo que el cliente suele comprar con frecuencia, de inmediato y con un mínimo esfuerzo de comparación y compra.",
    block: 3,
    topicId: "T06",
    example: "Una barra de pan, una caja de cerillas o un periódico que se adquieren en la tienda de la esquina sin mayor reflexión."
  },
  {
    id: "C54",
    name: "Bienes de compra comparada",
    definition: "Bienes de consumo adquiridos con menor frecuencia, en los que el cliente compara cuidadosamente atributos como idoneidad, calidad, precio y estilo antes de la compra.",
    block: 3,
    topicId: "T06",
    example: "Comprar un televisor de alta definición visitando varias tiendas electrónicas y leyendo reseñas de especificaciones en internet."
  },
  {
    id: "C55",
    name: "Bienes de especialidad",
    definition: "Bienes de consumo con características únicas o identificación de marca por las cuales un grupo significativo de compradores está dispuesto a realizar un esfuerzo de compra especial.",
    block: 3,
    topicId: "T06",
    example: "La adquisición de un automóvil deportivo Porsche, donde el comprador viaja a otra ciudad solo para visitar el concesionario oficial de la marca."
  },
  {
    id: "C56",
    name: "Marca (Brand)",
    definition: "Nombre, término, letrero, símbolo, diseño o combinación de estos elementos que identifica los productos o servicios de un vendedor y los distingue de los competidores.",
    block: 3,
    topicId: "T06",
    example: "El nombre 'Nike' junto con el famoso logotipo del 'Swoosh' grabado en la ropa y calzado deportivo."
  },
  {
    id: "C57",
    name: "Capital de marca (Brand Equity)",
    definition: "Efecto diferencial positivo que el conocimiento del nombre de la marca tiene sobre la respuesta del cliente ante el producto y su comercialización. Mide la lealtad y el valor financiero de la marca.",
    block: 3,
    topicId: "T06",
    example: "Los clientes de Starbucks están dispuestos a pagar hasta tres veces más por un café simplemente por la marca que lleva el vaso y la experiencia asociada."
  },
  {
    id: "C58",
    name: "Extensión de marca",
    definition: "Estrategia de branding que consiste en el uso de un nombre de marca existente y exitoso para lanzar productos nuevos o modificados en una categoría de mercado totalmente diferente.",
    block: 3,
    topicId: "T06",
    example: "La empresa de neumáticos Michelin que utilizó su prestigiosa marca para lanzar guías de viaje y recomendaciones gastronómicas premium."
  },
  {
    id: "C59",
    name: "Ciclo de vida del producto (CVP)",
    definition: "Curso de las ventas y utilidades de un producto a lo largo de su existencia histórica. Consta de cinco etapas: desarrollo del producto, introducción, crecimiento, madurez y declive.",
    block: 3,
    topicId: "T07",
    example: "Los reproductores de DVD se encuentran actualmente en la etapa de declive, registrando ventas mínimas en comparación con su época de madurez en la década del 2000."
  },
  {
    id: "C60",
    name: "Precio",
    definition: "Cantidad de dinero que se cobra por un producto o servicio, o la suma de los valores que los consumidores intercambian por los beneficios de tener o usar el producto o servicio.",
    block: 3,
    topicId: "T08",
    example: "La tarifa de 12€ mensuales que cobra una plataforma de streaming de series a cambio de acceso ilimitado a su catálogo de contenido."
  },
  {
    id: "C61",
    name: "Elasticidad precio de la demanda",
    definition: "Medida de la sensibilidad de la demanda de un producto ante los cambios en su precio. Se calcula dividiendo el cambio porcentual de la cantidad demandada entre el cambio porcentual del precio.",
    block: 3,
    topicId: "T08",
    example: "Si el precio de la sal sube un 50%, la demanda apenas cambia (demanda inelástica); si el precio de un boleto de avión sube un 50%, la venta cae de inmediato (demanda elástica)."
  },
  {
    id: "C62",
    name: "Fijación de precios por valor para el cliente",
    definition: "Establecimiento del precio basándose en las percepciones de valor del comprador en lugar de basarse en los costos de fabricación del vendedor.",
    block: 3,
    topicId: "T08",
    example: "Un diseñador gráfico independiente cobra 1,500€ por un logotipo sabiendo que ese diseño redefinirá el éxito de una marca, aunque le haya tomado 4 horas de trabajo técnico."
  },
  {
    id: "C63",
    name: "Fijación de precios por costo",
    definition: "Establecimiento del precio basado en los costos de producción, distribución y venta del producto más una tasa de rendimiento justa por el esfuerzo y los riesgos asumidos.",
    block: 3,
    topicId: "T08",
    example: "Un fabricante calcula que fabricar un mueble de madera le cuesta 100€ en total y decide venderlo a 130€ para asegurar un margen de ganancia del 30%."
  },
  {
    id: "C64",
    name: "Descremado de precios (Price Skimming)",
    definition: "Estrategia de fijar un precio elevado para un producto nuevo con el fin de obtener los máximos ingresos capa por capa de los segmentos dispuestos a pagar ese precio alto; la empresa vende menos pero con mayor margen.",
    block: 3,
    topicId: "T08",
    example: "Lanzar al mercado una consola de videojuegos de última generación a 700€ para captar a los fanáticos entusiastas, reduciendo el precio a 500€ al año siguiente."
  },
  {
    id: "C65",
    name: "Precios de penetración",
    definition: "Estrategia de fijar un precio bajo para un producto nuevo con el fin de atraer rápidamente a un gran número de compradores y conseguir una gran participación de mercado.",
    block: 3,
    topicId: "T08",
    example: "Una nueva marca de detergente que ingresa al mercado ofreciendo su botella gigante a la mitad del precio regular de las marcas consolidadas para incentivar la prueba."
  },
  {
    id: "C66",
    name: "Canal de distribución",
    definition: "Conjunto de organizaciones interdependientes que participan en el proceso de poner un producto o servicio a disposición del consumidor o usuario final.",
    block: 4,
    topicId: "T09",
    example: "La ruta que sigue una botella de refresco desde la fábrica, pasando por los mayoristas, almacenes minoristas hasta llegar a la mesa del consumidor."
  },
  {
    id: "C67",
    name: "Canal directo",
    definition: "Canal de distribución de marketing que no tiene niveles de intermediarios; el fabricante vende de manera directa e inmediata a los consumidores.",
    block: 4,
    topicId: "T09",
    example: "Un panadero local que amasa el pan por la mañana y lo vende en su propia ventanilla al público del barrio."
  },
  {
    id: "C68",
    name: "Canal indirecto",
    definition: "Canal de distribución que contiene uno o más niveles de intermediarios (como mayoristas, agentes o detallistas) entre el productor y el consumidor final.",
    block: 4,
    topicId: "T09",
    example: "Una marca de electrodomésticos japonesa que vende sus productos a importadores nacionales, que luego los revenden a grandes almacenes que finalmente los ofrecen al público."
  },
  {
    id: "C69",
    name: "Distribución intensiva",
    definition: "Estrategia de cobertura de mercado que consiste en tener en existencia un producto en la mayor cantidad posible de expendios comerciales.",
    block: 4,
    topicId: "T09",
    example: "Las marcas de chicles y refrescos, que pueden adquirirse en supermercados, quioscos, gasolineras, farmacias y máquinas expendedoras."
  },
  {
    id: "C70",
    name: "Distribución selectiva",
    definition: "Estrategia de cobertura que consiste en el uso de más de uno, pero no de todos los intermediarios que están dispuestos a comercializar los productos de la empresa.",
    block: 4,
    topicId: "T09",
    example: "Marcas de electrodomésticos de gama media-alta que solo se comercializan en tiendas especializadas de electrónica y no en supermercados generales."
  },
  {
    id: "C71",
    name: "Distribución exclusiva",
    definition: "Estrategia de cobertura de mercado consistente en conceder a un número limitado de concesionarios el derecho exclusivo de distribuir los productos de la empresa en sus territorios geográficos.",
    block: 4,
    topicId: "T09",
    example: "La firma de alta joyería Tiffany & Co., cuyos productos solo se pueden comprar en sus selectas boutiques oficiales a nivel global."
  },
  {
    id: "C72",
    name: "Conflicto de canal",
    definition: "Desacuerdo entre los miembros del canal de marketing sobre metas, funciones y recompensas comerciales. Puede ser vertical (distintos niveles) u horizontal (mismo nivel).",
    block: 4,
    topicId: "T09",
    example: "Una marca de cosméticos que empieza a vender a menor precio en su sitio web oficial, enfureciendo a las tiendas minoristas físicas que venden la misma marca."
  },
  {
    id: "C73",
    name: "Mezcla de comunicación de marketing",
    definition: "Integración de los canales de comunicación de la empresa para entregar un mensaje claro, congruente y convincente sobre la organización y sus marcas. También conocida como Promoción comercial.",
    block: 4,
    topicId: "T10",
    example: "Coordinar un anuncio televisivo, un descuento temporal en tiendas, comunicados de prensa y publicaciones de influencers bajo un mismo eslogan unificado."
  },
  {
    id: "C74",
    name: "Publicidad",
    definition: "Cualquier forma pagada de presentación y promoción no personal de ideas, bienes o servicios por parte de un patrocinador identificado, empleando medios masivos o digitales.",
    block: 4,
    topicId: "T10",
    example: "El pago que realiza una marca automotriz para colocar un banner publicitario de su nuevo auto eléctrico en el sitio web de un importante periódico digital."
  },
  {
    id: "C75",
    name: "Promoción de ventas",
    definition: "Incentivos a corto plazo que fomentan la compra o la venta de un producto o servicio de manera inmediata.",
    block: 4,
    topicId: "T10",
    example: "Una oferta de 'Compre uno y llévese el segundo a mitad de precio' disponible únicamente durante el próximo fin de semana."
  },
  {
    id: "C76",
    name: "Relaciones públicas (RRPP)",
    definition: "Creación de buenas relaciones con los diversos públicos de una empresa mediante la obtención de publicidad favorable, la creación de una buena imagen corporativa y el manejo de rumores negativos.",
    block: 4,
    topicId: "T10",
    example: "Organizar una conferencia de prensa y un evento benéfico para anunciar la donación de equipos tecnológicos a escuelas de escasos recursos."
  },
  {
    id: "C77",
    name: "Venta personal",
    definition: "Presentación personal que realiza la fuerza de ventas de la empresa con el fin de efectuar ventas y cultivar relaciones sólidas y de largo plazo con los clientes.",
    block: 4,
    topicId: "T10",
    example: "Un asesor comercial corporativo que agenda una reunión de demostración técnica para vender maquinaria industrial pesada al director de operaciones de una fábrica."
  },
  {
    id: "C78",
    name: "Marketing directo y digital",
    definition: "Conexión directa con consumidores individuales o comunidades de clientes seleccionados cuidadosamente con el fin de obtener una respuesta inmediata y cultivar relaciones duraderas.",
    block: 4,
    topicId: "T10",
    example: "El envío de un correo electrónico personalizado con recomendaciones de compra específicas basadas en el historial del cliente en una tienda online."
  },
  {
    id: "C79",
    name: "Plan de marketing",
    definition: "Documento escrito que resume lo que el mercadólogo ha aprendido sobre el mercado, indica cómo la empresa planea alcanzar sus metas de marketing e incluye pautas para dirigir el programa comercial.",
    block: 5,
    topicId: "T11",
    example: "Un reporte de 30 páginas estructurado que detalla los objetivos de ventas, el análisis DAFO, el presupuesto publicitario y el calendario de acciones de marketing mix del año entrante."
  },
  {
    id: "C80",
    name: "Responsabilidad Social Corporativa (RSC)",
    definition: "Compromiso de las empresas de gestionar sus operaciones comerciales con un impacto ético, social y ambiental positivo, asumiendo su corresponsabilidad sobre el bienestar social general.",
    block: 5,
    topicId: "T14",
    example: "Una empresa textil que certifica condiciones de trabajo dignas y salarios justos para todos sus empleados de maquila y utiliza tintes ecológicos biodegradables."
  }
];
