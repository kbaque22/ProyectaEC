// ============================================================================
// BASE DE DATOS CURRICULAR - PROYECTA S (MINEDUC ECUADOR - SUBNIVEL MEDIO)
// ============================================================================

const BANCO_PROYECTOS = {
    // ------------------------------------------------------------------------
    // 1. PROYECTOS DISCIPLINARES (10 OPCIONES POR ASIGNATURA)
    // ------------------------------------------------------------------------
    individuales: {
        "Ciencias Naturales": {
            dcd: {
                "5to": "CN.3.1.9. Indagar, con uso de las TIC y otros recursos, las características de los ecosistemas y sus clases, interpretar las interrelaciones de los seres vivos.",
                "6to": "CN.3.3.1. Explorar y demostrar las propiedades específicas de la materia, experimentar, probar las predicciones y comunicar los resultados.",
                "7mo": "CN.3.4.12. Indagar y explicar las características, elementos y factores del clima, diferenciarlo del tiempo atmosférico y registrar datos meteorológicos."
            },
            titulos: [
                "Ecomundo: Buscando las Riquezas Naturales del Ecuador",
                "Guardianes de la Biodiversidad y los Ecosistemas Locales",
                "Laboratorio Vivo: El Ciclo del Agua y Microclimas",
                "Detectives de la Materia y la Energía Renovable",
                "Rescate Verde: Reforestación y Suelos Fértiles",
                "Expedición Manglar: Pulmones Costeros del Ecuador",
                "Bio-Arquitectos: Adaptaciones de la Fauna Endémica",
                "Alerta Climática: Estación Meteorológica Escolar",
                "Nutrición Consciente y Cadenas Tróficas",
                "Agua Pura: Sistemas Caseros de Filtración y Conservación"
            ]
        },
        "Lengua y Literatura": {
            dcd: {
                "5to": "LL.3.4.10. Expresar sus ideas con precisión e integrar en las producciones escritas los diferentes tipos de sustantivo, pronombre, adjetivo, verbo.",
                "6to": "LL.3.2.2. Proponer intervenciones orales con una intención comunicativa, organizar el discurso según las estructuras básicas de la lengua oral.",
                "7mo": "LL.3.5.3. Elegir lecturas basándose en preferencias personales de autor, género o temas y el manejo de diversos soportes para formarse como lector autónomo."
            },
            titulos: [
                "Voces de Mi Tierra: Crónicas y Leyendas del Ecuador",
                "Periodistas en Acción: El Noticiero Escolar Comunitario",
                "Poemario Gigante: Versos de los Cuatro Mundos",
                "Cuentacuentos sin Fronteras: Teatro de Sombras y Oralidad",
                "Detectives de la Palabra: Revista Digital Cultural",
                "Cartas al Futuro: Relatos de Identidad y Memoria",
                "Fábrica de Historietas: Héroes de Nuestra Comunidad",
                "Oradores del Mañana: Debates y Discursos Ciudadanos",
                "Diccionario Vivo de Ancestralidades y Modismos",
                "Booktubers Ecuatorianos: Reseñas Literarias Creativas"
            ]
        },
        "Ciencias Sociales": {
            dcd: {
                "5to": "CS.3.2.1. Describir el territorio del Ecuador, destacando sus características principales como parte integrante del espacio andino.",
                "6to": "CS.3.1.12. Explicar la estructura de la sociedad colonial y la vida cotidiana con sus diferencias sociales y prácticas discriminatorias.",
                "7mo": "CS.3.1.45. Explicar las causas y consecuencias de la crisis económica y política que se dio entre los años veinte y cuarenta, y las respuestas de la insurgencia social."
            },
            titulos: [
                "Ecuador en Acción: Geografía, Producción y Regiones",
                "Rutas de la Historia: De Nuestros Ancestros a la República",
                "Mapa Vivo: Provincias, Relieves y Riqueza Cultural",
                "Guardianes del Patrimonio Tangible e Intangible",
                "Constructores de Democracia y Convivencia Armónica",
                "Economía Local: ¿De Dónde Viene lo que Consumimos?",
                "Pueblos y Nacionalidades: Tejido Intercultural del Ecuador",
                "Viajeros en el Tiempo: Museo Histórico del Aula",
                "Defensores de los Derechos Humanos y la Naturaleza",
                "Geopolítica Infantil: Ecuador en América Latina"
            ]
        },
        "Matemática": {
            dcd: {
                "5to": "M.3.1.11. Reconocer términos y realizar divisiones entre números naturales con residuo, con el dividendo mayor que el divisor, aplicando el algoritmo correspondiente.",
                "6to": "M.3.2.15. Reconocer el metro cuadrado como unidad de medida de superficie, los submúltiplos y múltiplos, y realizar conversiones en la resolución de problemas.",
                "7mo": "M.3.3.2. Analizar e interpretar el significado de calcular medidas de tendencia central (media, mediana y moda) de un conjunto de datos estadísticos."
            },
            titulos: [
                "Matemática en la Feria: Presupuestos y Comercio Justo",
                "Arquitectos a Escala: Geometría en Nuestras Construcciones",
                "Estadística Viva: Encuestas y Realidades de Nuestra Escuela",
                "El Juego de las Proporciones: Recetas y Medidas Exactas",
                "Olimpiadas Lógicas: Retos y Juegos de Mesa Matemáticos",
                "Cazadores de Patrones en la Naturaleza y el Arte",
                "Finanzas para Jóvenes: Ahorro, Porcentajes y Emprendimiento",
                "Topógrafos Escolares: Áreas, Perímetros y Planos",
                "Misión Espacial: Coordenadas, Ángulos y Trayectorias",
                "Datos que Hablan: Infografías Estadísticas del Ecuador"
            ]
        },
        "Educación Cultural y Artística": {
            dcd: {
                "5to": "ECA.3.1.12. Crear documentos sencillos (informes, catálogos, etc.) con información sobre los textiles del país, como resultado de un proceso de búsqueda.",
                "6to": "ECA.3.2.11. Inventar piezas musicales para instrumentos construidos con materiales naturales y objetos en desuso.",
                "7mo": "ECA.3.3.7. Recopilar imágenes de acontecimientos relevantes para la comunidad obtenidas personalmente por los estudiantes, proporcionadas por otros asistentes."
            },
            titulos: [
                "Arte Reciclado: Esculturas Gigantes con Identidad",
                "Sonidos de la Tierra: Orquesta de Instrumentos Andinos",
                "Muralismo Comunitario: Pintando Nuestros Valores",
                "Galería Fotográfica: Rostros y Oficios de Mi Barrio",
                "Teatro Foro: Dramatizando Soluciones Sociales",
                "Textiles y Colores: Diseño de Vestuario Tradicional",
                "Cine Minuto Escolar: Cortometrajes con Celular",
                "Máscaras y Rituales: Fiestas Populares del Ecuador",
                "Museo Portátil de Arte Precolombino",
                "Coreografías del Ecuador: Danza y Expresión Corporal"
            ]
        }
    },

    // ------------------------------------------------------------------------
    // 2. PROYECTOS INTERDISCIPLINARIOS (COMBINACIÓN DE 2 O MÁS MATERIAS)
    // ------------------------------------------------------------------------
    interdisciplinarios: [
        {
            id: "inter_1",
            titulo: "Ecuador en Acción: Territorio, Producción y Narrativa Viva",
            enfoque: "Articula el análisis geográfico y productivo de las regiones del Ecuador con la producción de textos expositivos, literarios y cálculo de escalas.",
            dcd_integrada: "Integración Mineduc: Comprensión del espacio geográfico y cadenas productivas (CS), producción de guiones y textos (LL), y manejo de escalas/estadísticas (M/CN)."
        },
        {
            id: "inter_2",
            titulo: "Bio-Emprendedores: Ciencia, Estadística y Comunicación Sostenible",
            enfoque: "Combina el estudio de ecosistemas y recursos naturales con el análisis matemático de impacto y campañas comunicacionales.",
            dcd_integrada: "Integración Mineduc: Conservación de ecosistemas (CN), interpretación de datos estadísticos (M) y persuasión oral/escrita (LL)."
        },
        {
            id: "inter_3",
            titulo: "Museo Interactivo del Ecuador: Historia, Arte y Geometría Ancestral",
            enfoque: "Explora el legado histórico de nuestros pueblos mediante reconstrucciones artísticas a escala y guías museográficas.",
            dcd_integrada: "Integración Mineduc: Procesos históricos (CS), formas geométricas y medidas (M), y expresión plástica tridimensional (ECA)."
        },
        {
            id: "inter_4",
            titulo: "Alerta Verde: Cambio Climático, Datos Reales y Acción Comunitaria",
            enfoque: "Investiga fenómenos climáticos locales, tabula registros de temperatura/lluvia y diseña soluciones creativas.",
            dcd_integrada: "Integración Mineduc: Factores del clima (CN), medidas de tendencia central (M), informes técnicos (LL) y cartelería artística (ECA)."
        },
        {
            id: "inter_5",
            titulo: "Sabores y Saberes de Mi Tierra: Nutrición, Agricultura y Cultura",
            enfoque: "Analiza la soberanía alimentaria del Ecuador desde los pisos climáticos, el valor nutricional y la tradición oral.",
            dcd_integrada: "Integración Mineduc: Piso climático y agricultura (CS/CN), proporciones y presupuestos (M) y recetarios ilustrados (LL/ECA)."
        }
    ]
};

// ============================================================================
// PLANTILLAS DE LOS 5 GRUPOS DE TRABAJO (FASES 1, 2 Y 3 + GUÍA INVESTIGATIVA)
// ============================================================================
const ESTRUCTURA_GRUPOS = [
    {
        letra: "Grupo A",
        subtema: "Región Litoral o Costa: Producción y Ecosistemas Costeros",
        producto: "Maqueta Productiva Funcional (Ruta del Camarón y Manglar)",
        guiaInvestigacion: {
            tituloGuia: "GUÍA DE INVESTIGACIÓN PRELIMINAR - EQUIPO A (REGIÓN COSTA)",
            objetivo: "Comprender el proceso productivo del camarón ecuatoriano y su equilibrio con el ecosistema de manglar.",
            preguntasGuia: [
                "1. ¿En qué provincias de la Costa ecuatoriana se concentra la mayor producción camaronera?",
                "2. ¿Cuáles son las 4 etapas principales desde el laboratorio de larvas hasta la exportación?",
                "3. ¿Por qué los manglares son vitales para proteger las costas y filtrar el agua?",
                "4. ¿Qué medidas ambientales aplican las camaroneras sostenibles hoy en día?"
            ],
            lecturaBase: "El camarón blanco (Litopenaeus vannamei) es uno de los principales productos de exportación no petrolera del Ecuador. Su ciclo inicia en laboratorios especializados donde se crían las postlarvas, luego pasan a piscinas de pre-cría y engorde en zonas estuarinas, y finalmente son cosechados y procesados bajo estrictas normas de frío para viajar a mercados internacionales.",
            archivoURL: "recursos/guia_base_grupoA.pdf"
        },
        fase2: {
            formato: "Maqueta Topográfica con Relieve",
            medidas: "Base rígida de 60 cm x 40 cm. Altura máxima: 15 cm.",
            bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                <rect x="10" y="10" width="220" height="90" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                <rect x="20" y="20" width="80" height="35" fill="#bae6fd" stroke="#0369a1"/>
                <text x="60" y="42" font-size="9" text-anchor="middle" fill="#0c4a6e">Piscinas de Cultivo</text>
                <rect x="115" y="20" width="105" height="35" fill="#fef3c7" stroke="#b45309"/>
                <text x="167" y="42" font-size="9" text-anchor="middle" fill="#78350f">Planta Empacadora</text>
                <path d="M 10 75 Q 120 60 230 75 L 230 100 L 10 100 Z" fill="#0ea5e9"/>
                <text x="120" y="90" font-size="9" text-anchor="middle" fill="white" font-weight="bold">Zona de Manglar y Océano (60 x 40 cm)</text>
            </svg>`,
            instrucciones: "Usar cartón prensado, botellas recicladas y plastilina. Colocar banderines numerados (1 al 4) para señalar el recorrido productivo."
        },
        fase3: {
            guion: "«Buenos días con todos. Somos el Grupo A y representamos a la Región Costa. En nuestra maqueta de 60x40 cm les mostraremos cómo funciona la cadena productiva del camarón ecuatoriano y cómo cuidamos nuestros manglares...»",
            dinamica: "Cada integrante explica una etapa señalando con un puntero los banderines numerados de la maqueta."
        }
    },
    {
        letra: "Grupo B",
        subtema: "Región Interandina o Sierra: Pisos Climáticos y Tradición Oral",
        producto: "Poemario Gigante Ilustrado en Relieve (Voces de los Andes)",
        guiaInvestigacion: {
            tituloGuia: "GUÍA DE INVESTIGACIÓN PRELIMINAR - EQUIPO B (REGIÓN SIERRA)",
            objetivo: "Relacionar la agricultura de altura de la Sierra ecuatoriana con sus expresiones literarias y culturales.",
            preguntasGuia: [
                "1. ¿Qué productos agrícolas crecen entre los 2.500 y 3.500 metros sobre el nivel del mar?",
                "2. ¿Qué significado tiene la festividad del Inti Raymi para las cosechas andinas?",
                "3. ¿Qué diferencia existe entre una copla, un amorfino y un poema tradicional?",
                "4. ¿Cómo se conservan los suelos inclinados en la cordillera de los Andes?"
            ],
            lecturaBase: "La Región Interandina se caracteriza por sus valles y elevaciones de la cordillera de los Andes. Gracias a sus pisos climáticos, es la despensa agrícola de productos como la papa, el maíz, la quinua y las hortalizas, cuya cosecha ha inspirado durante siglos cantos, coplas y relatos de gratitud a la tierra.",
            archivoURL: "recursos/guia_base_grupoB.pdf"
        },
        fase2: {
            formato: "Libro Gigante (Big Book) Articulado",
            medidas: "Formato A2 abierto (59.4 cm x 42 cm). 6 páginas de cartulina gruesa.",
            bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                <rect x="25" y="10" width="90" height="90" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
                <rect x="115" y="10" width="90" height="90" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
                <polygon points="40,70 70,25 100,70" fill="#78716c"/>
                <polygon points="60,40 70,25 80,40" fill="white"/>
                <line x1="125" y1="30" x2="190" y2="30" stroke="#92400e" stroke-width="2"/>
                <line x1="125" y1="48" x2="190" y2="48" stroke="#92400e" stroke-width="2"/>
                <line x1="125" y1="66" x2="175" y2="66" stroke="#92400e" stroke-width="2"/>
                <text x="115" y="108" font-size="9" text-anchor="middle" fill="#451a03">Libro Gigante (59.4 x 42 cm)</text>
            </svg>`,
            instrucciones: "Escribir con letra imprenta grande (mínimo 3 cm) e incluir texturas naturales (granos secos de maíz, lana de borrego, hojas secas)."
        },
        fase3: {
            guion: "«Desde las montañas de los Andes presentamos nuestro Poemario Gigante. Aquí unimos la ciencia de nuestros cultivos de altura con la poesía de nuestros pueblos...»",
            dinamica: "Lectura coral sincronizada: dos estudiantes sostienen y pasan las páginas gigantes mientras el equipo recita."
        }
    },
    {
        letra: "Grupo C",
        subtema: "Región Amazónica: Biodiversidad y Saberes Ancestrales",
        producto: "Escultura Modular: La Boa Gigante Guardiana de la Selva",
        guiaInvestigacion: {
            tituloGuia: "GUÍA DE INVESTIGACIÓN PRELIMINAR - EQUIPO C (REGIÓN AMAZÓNICA)",
            objetivo: "Analizar la importancia ecológica de la fauna amazónica y el uso sostenible de plantas medicinales.",
            preguntasGuia: [
                "1. ¿Qué papel cumple la boa o anaconda en el equilibrio de la cadena alimenticia amazónica?",
                "2. Menciona 3 plantas medicinales de la Amazonía y para qué se utilizan.",
                "3. ¿Qué consecuencias trae la tala indiscriminada de árboles para las comunidades y animales?",
                "4. ¿Cómo podemos proteger los ríos amazónicos desde nuestras acciones diarias?"
            ],
            lecturaBase: "La Amazonía ecuatoriana alberga una de las mayores concentraciones de biodiversidad del planeta. Sus bosques húmedos tropicales regulan el clima regional y son el hogar de nacionalidades indígenas que custodian conocimientos milenarios sobre botánica y conservación.",
            archivoURL: "recursos/guia_base_grupoC.pdf"
        },
        fase2: {
            formato: "Escultura Articulada con Fichas Abatibles",
            medidas: "Largo total: 2.50 metros (5 módulos de 50 cm). Diámetro: 25 cm.",
            bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                <path d="M 20 55 Q 65 15, 120 55 T 220 55" fill="none" stroke="#15803d" stroke-width="18" stroke-linecap="round"/>
                <circle cx="20" cy="55" r="11" fill="#166534"/>
                <circle cx="17" cy="52" r="2" fill="#facc15"/>
                <text x="120" y="95" font-size="9" text-anchor="middle" fill="#14532d">Longitud: 2.50 m (Escamas = Fichas de Datos)</text>
            </svg>`,
            instrucciones: "Unir botellas plásticas o tubos de cartón recubiertos con papel maché. Cada escama del lomo debe levantarse para mostrar un dato investigado."
        },
        fase3: {
            guion: "«Bienvenidos a la selva amazónica. Nuestra Boa Gigante de 2 metros y medio guarda en cada una de sus escamas un secreto sobre la vida y medicina de nuestra selva...»",
            dinamica: "Interacción directa: pedir al público visitante que elija y levante 3 escamas de la boa para leer los datos ocultos."
        }
    },
    {
        letra: "Grupo D",
        subtema: "Región Insular (Galápagos): Evolución y Especies Endémicas",
        producto: "Museo Portátil Tríptico: Laboratorio Natural del Mundo",
        guiaInvestigacion: {
            tituloGuia: "GUÍA DE INVESTIGACIÓN PRELIMINAR - EQUIPO D (REGIÓN INSULAR)",
            objetivo: "Diferenciar especies endémicas de introducidas y comprender la fragilidad del ecosistema insular.",
            preguntasGuia: [
                "1. ¿Cuál es la diferencia entre una especie nativa, una endémica y una invasora?",
                "2. ¿Por qué las tortugas gigantes y los pinzones tienen formas distintas según la isla?",
                "3. ¿Cómo influyen las corrientes marinas en el clima de Galápagos?",
                "4. ¿Qué protocolos de bioseguridad deben cumplir los turistas al llegar a las islas?"
            ],
            lecturaBase: "El archipiélago de Galápagos, ubicado a 1.000 km de la costa continental, posee un origen volcánico. Su aislamiento geográfico permitió que especies únicas evolucionaran adaptándose a cada isla, convirtiéndolo en Patrimonio Natural de la Humanidad.",
            archivoURL: "recursos/guia_base_grupoD.pdf"
        },
        fase2: {
            formato: "Diorama Tríptico Plegable de Mesa",
            medidas: "Panel central: 50 x 40 cm. Dos alas laterales: 25 x 40 cm cada una.",
            bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                <polygon points="20,25 60,15 60,95 20,85" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
                <rect x="60" y="15" width="120" height="80" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
                <polygon points="180,15 220,25 220,85 180,95" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
                <text x="120" y="58" font-size="9" text-anchor="middle" fill="#115e59">Tríptico abierto: 100 x 40 cm</text>
            </svg>`,
            instrucciones: "Construir un exhibidor tipo maleta que al abrirse muestre el relieve volcánico, figuras en 3D y tarjetas de semaforización ambiental."
        },
        fase3: {
            guion: "«Bienvenidos al Museo Portátil de Galápagos. Hoy viajaremos a 1.000 kilómetros de la costa para descubrir por qué estas islas son únicas en el planeta...»",
            dinamica: "Reto de cierre: realizar 3 preguntas de 'Verdadero o Falso' a los visitantes usando paletas de colores."
        }
    },
    {
        letra: "Grupo E",
        subtema: "Integración Nacional: Interculturalidad y Comercio entre Regiones",
        producto: "Juego de Mesa Gigante: Travesía por los 4 Mundos",
        guiaInvestigacion: {
            tituloGuia: "GUÍA DE INVESTIGACIÓN PRELIMINAR - EQUIPO E (INTEGRACIÓN NACIONAL)",
            objetivo: "Identificar los flujos de intercambio comercial, vial y cultural que conectan a todo el Ecuador.",
            preguntasGuia: [
                "1. ¿Qué productos de la Sierra se consumen en la Costa y viceversa?",
                "2. ¿Cuántas nacionalidades y pueblos indígenas coexisten en el Ecuador?",
                "3. ¿Qué importancia tienen las vías de comunicación para el desarrollo económico?",
                "4. Redacta 8 preguntas de trivia con sus respuestas basadas en las 4 regiones."
            ],
            lecturaBase: "El Ecuador es un país unitario, intercultural y plurinacional. Sus cuatro regiones naturales se complementan económica y culturalmente mediante el intercambio constante de alimentos, materias primas, artesanías y tradiciones.",
            archivoURL: "recursos/guia_base_grupoE.pdf"
        },
        fase2: {
            formato: "Tablero de Piso Interactivo + Dado Gigante",
            medidas: "Tablero de lona o cartón de 1.20 m x 1.20 m. Dado de 20 x 20 cm.",
            bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                <rect x="75" y="10" width="90" height="90" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
                <line x1="75" y1="40" x2="165" y2="40" stroke="#ca8a04"/>
                <line x1="75" y1="70" x2="165" y2="70" stroke="#ca8a04"/>
                <line x1="105" y1="10" x2="105" y2="100" stroke="#ca8a04"/>
                <line x1="135" y1="10" x2="135" y2="100" stroke="#ca8a04"/>
                <text x="120" y="108" font-size="9" text-anchor="middle" fill="#854d0e">Tablero de Piso (1.20 m x 1.20 m)</text>
            </svg>`,
            instrucciones: "Diseñar un recorrido con casillas de 4 colores (amarillo=Costa, azul=Sierra, verde=Amazonía, turquesa=Galápagos) y tarjetas de retos."
        },
        fase3: {
            guion: "«Ecuador es un solo corazón con cuatro mundos. Los invitamos a lanzar nuestro dado gigante y demostrar cuánto conocen de nuestro país...»",
            dinamica: "Los integrantes del Grupo E actúan como moderadores y árbitros del juego mientras los visitantes avanzan por el tablero."
        }
    }
];

// ============================================================================
// ADAPTACIONES BASADAS EN CAPACIDADES (ENFOQUE DUA - SIN ETIQUETAS LIMITANTES)
// ============================================================================
const ADAPTACIONES_CAPACIDADES = {
    dislexia: {
        nombre: "Dislexia",
        capacidadClave: "Pensamiento Visual, Comprensión Global y Oralidad",
        rol: "Director/a de Diseño Espacial y Vocero/a Visual",
        recursosNecesarios: "Guía impresa con tipografía limpia (Arial/Verdana 14pt), interlineado amplio, código de colores por ideas clave y apoyo de audiolibro/video.",
        fases: [
            "Fase 1: Accede a la guía preliminar mediante audio o lectura compartida, subrayando conceptos con resaltadores de colores.",
            "Fase 2: Lidera el armado tridimensional y la organización gráfica de la maqueta o producto.",
            "Fase 3: Expone señalando directamente las piezas visuales del producto con tarjetas de pictogramas (sin lectura improvisada de textos largos)."
        ]
    },
    discalculia: {
        nombre: "Discalculia",
        capacidadClave: "Narrativa Verbal, Empatía y Síntesis Cualitativa",
        rol: "Guionista Principal y Curador/a de Contenidos",
        recursosNecesarios: "Plantillas físicas de cartón pre-cortadas a la medida exacta (ej. tiras de 10 cm y 40 cm) para evitar cálculos abstractos.",
        fases: [
            "Fase 1: Se encarga de sintetizar los datos culturales, históricos y ecológicos de la guía.",
            "Fase 2: Utiliza reglas con códigos de color y plantillas físicas pre-medidas para trazar y cortar piezas sin estrés numérico.",
            "Fase 3: Lidera la narración del guion de bienvenida y cierre del equipo."
        ]
    },
    disgrafia: {
        nombre: "Disgrafía",
        capacidadClave: "Agilidad Mental, Oratoria y Manejo Digital",
        rol: "Coordinador/a de Rotulación Digital y Oratoria",
        recursosNecesarios: "Acceso a computadora/tablet para digitar etiquetas o grabadora de voz para registrar ideas.",
        fases: [
            "Fase 1: Registra sus respuestas de la guía mediante notas de voz o esquemas digitales.",
            "Fase 2: Diseña, imprime y pega los rótulos tipográficos del proyecto, o lidera el pintado de superficies amplias.",
            "Fase 3: Modera la ronda de preguntas del público visitante."
        ]
    },
    tdah: {
        nombre: "TDAH",
        capacidadClave: "Energía Dinámica, Resolución Rápida y Liderazgo Activo",
        rol: "Jefe/a de Logística, Ensamblaje y Demostración en Vivo",
        recursosNecesarios: "Lista de verificación (checklist) dividida en micro-metas de 15 minutos y materiales táctiles.",
        fases: [
            "Fase 1: Investiga 'datos curiosos o de impacto' en bloques cortos de tiempo con pausas activas.",
            "Fase 2: Gestiona las herramientas del grupo y ensambla las partes móviles o interactivas del producto.",
            "Fase 3: Opera la demostración práctica frente al público (pasa páginas gigantes, dirige el dado o manipula piezas)."
        ]
    },
    altas_capacidades: {
        nombre: "Dotación Superior / Altas Capacidades",
        capacidadClave: "Pensamiento Sistémico, Conexión Interdisciplinaria y Mentoría",
        rol: "Arquitecto/a de Retos Avanzados y Mentor/a de Equipo",
        recursosNecesarios: "Ficha de profundización con retos de análisis crítico o mecanismos de interactividad extra.",
        fases: [
            "Fase 1: Profundiza en causas/consecuencias globales del tema y apoya como tutor par dentro de su grupo.",
            "Fase 2: Diseña un elemento de ingeniería o interactividad adicional en el producto final.",
            "Fase 3: Responde las preguntas de mayor complejidad técnica realizadas por docentes o visitantes."
        ]
    }
};
