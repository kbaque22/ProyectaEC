// ============================================================================
// ARCHIVO 2: CURRICULO.JS - MATRIZ MINEDUC ECUADOR Y ADAPTACIONES DUA
// ============================================================================

const DESTREZAS_MINEDUC = {
    "Lengua y Literatura": {
        "5to": "LL.3.3.4. Autorregular la comprensión de textos mediante el uso de estrategias cognitivas de comprensión y producción escrita.",
        "6to": "LL.3.4.10. Expresar sus ideas con precisión e integrar en las producciones escritas descripciones y relatos.",
        "7mo": "LL.3.5.1. Reconocer en un texto literario (poesía, mito, leyenda) los elementos característicos y producir textos creativos con intención comunicativa."
    },
    "Matemática": {
        "5to": "M.3.1.11. Resolver divisiones y operaciones combinadas en problemas reales de producción y distribución.",
        "6to": "M.3.2.15. Calcular el área de figuras geométricas (cuadrado, rectángulo, círculo) en diseños reales.",
        "7mo": "M.3.3.2. Calcular medidas de tendencia central (media aritmética) de datos estadísticos reales y resolver operaciones con decimales y áreas."
    },
    "Ciencias Naturales": {
        "5to": "CN.3.1.9. Indagar las características de los ecosistemas del Ecuador y las interrelaciones de los seres vivos.",
        "6to": "CN.3.1.11. Explicar las adaptaciones de plantas y animales a las condiciones ambientales de cada región.",
        "7mo": "CN.3.5.5. Planificar y realizar indagaciones sobre recursos naturales del Ecuador, su uso sostenible e impacto ambiental."
    },
    "Ciencias Sociales": {
        "5to": "CS.3.2.1. Describir el territorio del Ecuador y sus regiones naturales.",
        "6to": "CS.3.2.4. Describir relieves, sistemas fluviales y espacios agrícolas/productivos de cada región.",
        "7mo": "CS.3.2.10. Identificar la diversidad cultural, económica y productiva de las regiones del Ecuador."
    },
    "Educación Cultural y Artística": {
        "5to": "ECA.3.1.12. Crear catálogos o piezas visuales sobre la riqueza natural y cultural del país.",
        "6to": "ECA.3.2.11. Construir piezas tridimensionales con materiales naturales y reciclados.",
        "7mo": "ECA.3.3.7. Diseñar obras artísticas representativas de las tradiciones y oficios de cada región."
    }
};

function generarPropuestasCurriculares(materias, grado) {
    const key = [...materias].sort().join("+");
    const dcdLista = materias.map(m => `<strong>${m}:</strong> ${DESTREZAS_MINEDUC[m][grado]}`).join("<br>");

    // Caso 1: Exclusivamente Lengua y Literatura + Matemática
    if (key === "Lengua y Literatura+Matemática") {
        return {
            porQue: "Se vinculan Lengua y Literatura y Matemática para que el estudiante desarrolle comprensión lectora crítica sobre realidades productivas y culturales del Ecuador, traduciendo esa información textual en modelos matemáticos (áreas, presupuestos, decimales y promedios) y en producciones escritas argumentadas.",
            queQuiere: "Lograr que los estudiantes lean, analicen datos reales de cada región del Ecuador, resuelvan problemas geométricos/estadísticos contextualizados y redacten textos literarios o informativos respaldados por cifras exactas.",
            estrategias: "Lectura comprensiva con cuestionarios de opción múltiple, resolución de casos matemáticos aplicados a la producción real, comparación de tablas de costos y creación literaria guiada (poesía, leyendas y entrevistas).",
            dcd: dcdLista,
            titulos: [
                "Ecuador en Cifras y Letras: Comprensión Lectora y Matemática Regional",
                "Del Texto al Cálculo: Producción, Cultura y Estadística del Ecuador",
                "Palabras y Números de Mi Tierra: Crónicas y Datos Reales",
                "Detectives de Datos y Relatos: Explorando las Cuatro Regiones",
                "Versos y Proporciones: Literatura y Geometría en el Ecuador"
            ]
        };
    }

    // Caso 2: Ciencias Naturales + Matemática (con o sin Lengua/Sociales, sin ECA)
    if (materias.includes("Ciencias Naturales") && materias.includes("Matemática") && !materias.includes("Educación Cultural y Artística")) {
        return {
            porQue: "Se articulan Ciencias Naturales y Matemática (junto con las áreas seleccionadas) para cuantificar fenómenos biológicos, ecológicos y productivos del Ecuador mediante estadística, áreas y operaciones decimales.",
            queQuiere: "Que el estudiante comprenda el ciclo de vida, hábitat e impacto ambiental de los recursos emblemáticos de cada región y calcule superficies, costos de producción y promedios reales.",
            estrategias: "Indagación científica guiada, análisis de tablas estadísticas reales, cálculo de áreas y decimales en cuadrícula de trabajo y comprensión lectora.",
            dcd: dcdLista,
            titulos: [
                "Ecuador en Acción: Ciencia, Producción y Cálculo Estadístico",
                "Bio-Matemática Regional: Ecosistemas, Datos y Conservación",
                "Laboratorio Natural y Numérico de las Regiones del Ecuador",
                "Recursos Vivos del Ecuador: Indagación Científica y Análisis Matemático",
                "Sostenibilidad en Cifras: Naturaleza y Producción Ecuatoriana"
            ]
        };
    }

    // Caso 3: Una sola asignatura (10 propuestas específicas)
    if (materias.length === 1) {
        const m = materias[0];
        const bancos10 = {
            "Lengua y Literatura": [
                "Versos y Relatos de los Cuatro Mundos del Ecuador",
                "El Guardián del Estuario: Poesía y Tradición Costera",
                "Leyendas de Tigua y los Andes: Narrativa Ancestral",
                "Crónicas de la Selva: Mitos y Saberes Amazónicos",
                "Voces de Galápagos: Entrevistas y Reportajes Naturales",
                "Antología Poética de Nuestra Biodiversidad",
                "Periodistas Escolares: Boletín Cultural del Ecuador",
                "Cuentacuentos Regionales: Oralidad y Escritura Creativa",
                "Palabras que Protegen la Naturaleza Ecuatoriana",
                "Taller de Lectura Crítica y Creación Literaria Regional"
            ],
            "Matemática": [
                "Matemática Productiva: Áreas, Decimales y Exportación",
                "Estadística Viva: Promedios Reales del Ecuador",
                "Geometría en Nuestra Cultura: Diseños, Círculos y Superficies",
                "Presupuestos y Costos: Comparando Materiales y Producción",
                "Topógrafos Escolares: Cálculo de Áreas en Regiones Naturales",
                "El Reto de los Decimales en la Producción Nacional",
                "Datos Sísmicos y Turísticos: Análisis Estadístico en Galápagos",
                "Números del Campo y el Mar: Cosechas y Exportaciones",
                "Olimpiadas de Resolución de Casos Reales",
                "Matemática Aplicada a la Conservación Ambiental"
            ],
            "Ciencias Naturales": [
                "Ecomundo: Riquezas Naturales y Biodiversidad del Ecuador",
                "Ciclos de Vida y Ecosistemas: Del Manglar al Páramo",
                "Botánica Medicinal y Conservación de Bosques",
                "Geología y Volcanes: El Laboratorio Natural de Galápagos",
                "Guardianes del Ambiente: Impacto y Prevención Ecológica",
                "Tintes Naturales y Recursos Renovables de la Sierra",
                "Fauna Endémica y Adaptaciones en las Cuatro Regiones",
                "Acuicultura Sostenible y Protección de Estuarios",
                "Suelos, Climas y Cultivos del Ecuador",
                "Expedición Científica por los Ecosistemas Ecuatorianos"
            ],
            "Ciencias Sociales": [
                "Ecuador en Acción: Geografía, Historia y Producción",
                "Cartografía Viva: Zonas Productivas de las Regiones",
                "Identidad Cultural: Festividades y Tradiciones Ancestrales",
                "Rutas Comerciales y Desarrollo Económico Regional",
                "Patrimonio Natural y Cultural de la Humanidad",
                "Pueblos, Oficios y Saberes de Nuestro Territorio",
                "Líneas de Tiempo y Memoria Histórica Regional",
                "Economía Local y Trabajo en el Ecuador",
                "Mapa Físico y Humano de los Cuatro Mundos",
                "Interculturalidad y Sostenibilidad en el Ecuador"
            ],
            "Educación Cultural y Artística": [
                "Arte con Identidad: Máscaras, Maquetas y Tradición",
                "Colores de Tigua: Simbología y Geometría Andina",
                "Libros Objeto y Poemarios Ilustrados",
                "Esculturas Vivas de la Biodiversidad Ecuatoriana",
                "Dioramas y Museos Portátiles Regionales",
                "Tintes Naturales y Expresión Plástica",
                "Cartografía Artística en Relieve",
                "Diseño Sostenible con Material Reciclado",
                "Galería Visual de los Cuatro Mundos",
                "Artesanía y Cultura Viva del Ecuador"
            ]
        };
        return {
            porQue: `Enfoque disciplinar profundo en ${m} para ${grado} Año EGB, aplicando los contenidos del currículo nacional a las 4 regiones del Ecuador.`,
            queQuiere: `Desarrollar dominio conceptual y procedimental en ${m} mediante lecturas base, cuestionarios estructurados y resolución de actividades por equipos regionales.`,
            estrategias: `Aprendizaje cooperativo por regiones, análisis de casos reales y guías de trabajo estructuradas paso a paso.`,
            dcd: dcdLista,
            titulos: bancos10[m]
        };
    }

    // Caso 4: Combinación general de varias materias
    return {
        porQue: `Se integran ${materias.join(", ")} para abordar las realidades naturales, culturales y económicas del Ecuador desde múltiples lenguajes sin fragmentar el aprendizaje.`,
        queQuiere: `Que cada equipo investigue una región del Ecuador resolviendo actividades específicas de ${materias.join(", ")} en sus respectivas guías de trabajo.`,
        estrategias: `Aprendizaje Basado en Proyectos (ABP), comprensión lectora con ítems de opción múltiple, resolución de problemas matemáticos reales y producción creativa.`,
        dcd: dcdLista,
        titulos: [
            `Ecuador en Acción: Integración de ${materias.join(" y ")}`,
            `Exploradores de los Cuatro Mundos (${materias.join(" + ")})`,
            `Ciencia, Cultura y Datos Reales del Ecuador`,
            `Saberes, Territorio y Producción Regional`,
            `Laboratorio Interdisciplinario ProyectaEC: Ecuador Vivo`
        ]
    };
}

// ============================================================================
// ADAPTACIONES BASADAS EN CAPACIDADES (ENFOQUE DUA)
// ============================================================================
const ADAPTACIONES_CAPACIDADES = {
    dislexia: {
        nombre: "Dislexia",
        capacidadClave: "Pensamiento Visual, Comprensión Global y Oralidad",
        rol: "Director/a de Diseño Visual y Vocero/a Principal",
        recursosNecesarios: "Guía impresa con letra grande (14pt), interlineado amplio, código de colores y lectura compartida.",
        fases: [
            "Fase 1: Realiza la lectura base en pareja con apoyo auditivo/visual y responde las preguntas de opción múltiple con resaltador de colores.",
            "Fase 2: Lidera el armado tridimensional de la maqueta o máscara.",
            "Fase 3: Expone explicando directamente las piezas visuales del producto sin lectura improvisada."
        ]
    },
    discalculia: {
        nombre: "Discalculia",
        capacidadClave: "Narrativa Verbal, Creatividad Literaria y Síntesis",
        rol: "Guionista Principal y Editor/a Literario",
        recursosNecesarios: "Calculadora básica de apoyo para verificación de decimales y plantillas físicas pre-medidas para la maqueta.",
        fases: [
            "Fase 1: Lidera la guía de Lengua y Literatura (comprensión lectora y creación de poemas/leyendas) y usa apoyo visual/calculadora en los casos numéricos.",
            "Fase 2: Usa reglas con códigos de color y plantillas de cartón pre-cortadas.",
            "Fase 3: Lidera la narración del guion de bienvenida y cierre."
        ]
    },
    disgrafia: {
        nombre: "Disgrafía",
        capacidadClave: "Agilidad Mental, Oratoria y Manejo Digital",
        rol: "Coordinador/a de Rotulación Digital y Oratoria",
        recursosNecesarios: "Acceso a computadora/tablet para digitar respuestas o notas de voz.",
        fases: [
            "Fase 1: Marca las opciones múltiples y digita su texto literario en dispositivo.",
            "Fase 2: Diseña e imprime las etiquetas del proyecto.",
            "Fase 3: Modera la ronda de preguntas del público."
        ]
    },
    tdah: {
        nombre: "TDAH",
        capacidadClave: "Energía Dinámica, Resolución Rápida y Liderazgo Activo",
        rol: "Jefe/a de Logística, Ensamblaje y Demostración en Vivo",
        recursosNecesarios: "Lista de verificación en bloques cortos de 15 minutos y materiales táctiles.",
        fases: [
            "Fase 1: Alterna bloques cortos entre las preguntas de opción múltiple y los casos prácticos.",
            "Fase 2: Gestiona los materiales y ensambla las piezas estructurales.",
            "Fase 3: Dirige la demostración práctica frente al público."
        ]
    },
    altas_capacidades: {
        nombre: "Dotación Superior / Altas Capacidades",
        capacidadClave: "Pensamiento Sistémico, Conexión Interdisciplinaria y Mentoría",
        rol: "Arquitecto/a de Retos Avanzados y Mentor/a de Equipo",
        recursosNecesarios: "Reto de profundización estadística y rol de tutoría entre pares.",
        fases: [
            "Fase 1: Completa los cálculos avanzados y apoya como mentor de sus compañeros.",
            "Fase 2: Diseña un elemento de escala o interactividad adicional.",
            "Fase 3: Responde las preguntas de profundización de los docentes visitantes."
        ]
    }
};
