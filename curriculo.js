// ============================================================================
// ARCHIVO 2: CURRICULO.JS - PROGRESIÓN POR GRADO, SESIONES Y RECURSOS DE APOYO
// ============================================================================

const ENFOQUE_POR_GRADO = {
    "Lengua y Literatura": {
        "5to": "Comprensión literal e inferencial básica, ampliación de vocabulario contextual y redacción de párrafos descriptivos guiados.",
        "6to": "Identificación de ideas principales, contraste de dos fuentes informativas y producción de textos explicativos con conectores.",
        "7mo": "Lectura crítica, inferencia compleja, contraste de perspectivas y argumentación escrita fundamentada en evidencias."
    },
    "Matemática": {
        "5to": "Lectura de tablas estadísticas simples, operaciones con números naturales/decimales básicos y perímetros/áreas elementales.",
        "6to": "Cálculo de promedios sencillos, operaciones con decimales en contextos reales y áreas de cuadrados y rectángulos.",
        "7mo": "Cálculo e interpretación de media aritmética, porcentajes, áreas compuestas/circulares y análisis de costos y presupuestos."
    },
    "Ciencias Naturales": {
        "5to": "Observación de características de seres vivos y ecosistemas locales, identificando necesidades básicas y cuidados.",
        "6to": "Relación entre factores ambientales y adaptaciones de organismos, analizando causas de alteración ecológica.",
        "7mo": "Análisis sistémico de interacciones ecológicas, aprovechamiento sostenible de recursos y evaluación de impacto ambiental."
    },
    "Ciencias Sociales": {
        "5to": "Ubicación geográfica en el mapa del Ecuador y reconocimiento de actividades productivas y culturales de la región.",
        "6to": "Relación entre relieve, clima y desarrollo económico regional, identificando actores sociales.",
        "7mo": "Análisis de procesos históricos, comparación de cambios en el tiempo y argumentación de causas y consecuencias socioambientales."
    },
    "Educación Cultural y Artística": {
        "5to": "Exploración de formas, colores y materiales tradicionales de la región mediante bocetos descriptivos.",
        "6to": "Análisis de referentes culturales y simbología local para planificar diseños tridimensionales.",
        "7mo": "Investigación estética y patrimonial de técnicas artesanales, fundamentando bocetos a escala con identidad cultural."
    }
};

function generarPropuestasCurriculares(materias, grado) {
    const key = [...materias].sort().join("+");
    const enfoqueLista = materias.map(m => `<strong>${m} (${grado}):</strong> ${ENFOQUE_POR_GRADO[m][grado]}`).join("<br>");

    if (key === "Lengua y Literatura+Matemática") {
        return {
            porQue: "Articula la comprensión crítica de textos informativos y culturales con el análisis cuantitativo de datos reales del Ecuador, evitando que los números se trabajen aislados de su contexto social.",
            queQuiere: "Que el alumnado comprenda fuentes escritas, contraste datos estadísticos y geométricos, y redacte conclusiones fundamentadas con evidencias.",
            estrategias: "Lectura por apartados con glosario, registro en tablas comparativas, resolución de problemas paso a paso y argumentación escrita.",
            dcd: enfoqueLista,
            titulos: [
                "Ecuador en Cifras y Letras: Comprensión Lectora y Matemática Regional",
                "Del Texto al Cálculo: Producción, Cultura y Estadística del Ecuador",
                "Palabras y Números de Mi Tierra: Crónicas y Datos Reales",
                "Detectives de Datos y Relatos: Explorando las Cuatro Regiones",
                "Lectura Crítica y Geometría Aplicada en el Ecuador"
            ]
        };
    }

    if (materias.length === 1) {
        const m = materias[0];
        const bancos = {
            "Lengua y Literatura": [
                "Voces y Relatos de las Cuatro Regiones del Ecuador",
                "Lectores Críticos: Territorio, Memoria y Tradición Oral",
                "Crónicas y Leyendas de Nuestra Biodiversidad",
                "Periodistas Escolares: Investigación y Reportaje Regional",
                "Palabras que Explican Nuestro Entorno Natural y Cultural"
            ],
            "Matemática": [
                "Matemática Aplicada: Datos, Áreas y Presupuestos del Ecuador",
                "Estadística Real: Promedios y Producción en las Cuatro Regiones",
                "Geometría en Contexto: Superficies, Círculos y Escalas",
                "Análisis Numérico de Recursos y Costos Regionales",
                "Resolución de Problemas Reales del Territorio Ecuatoriano"
            ],
            "Ciencias Naturales": [
                "Ecosistemas del Ecuador: Observación, Evidencias y Sostenibilidad",
                "Biodiversidad Regional: Ciclos Vitales e Impacto Ambiental",
                "Recursos Naturales y Conservación en los Cuatro Mundos",
                "Indagación Científica sobre Flora, Fauna y Geología Local",
                "Guardianes de los Ecosistemas Ecuatorianos"
            ],
            "Ciencias Sociales": [
                "Ecuador en el Tiempo: Territorio, Procesos Históricos y Producción",
                "Cartografía y Cambios Socioeconómicos Regionales",
                "Patrimonio, Identidad y Desarrollo Sostenible en el Ecuador",
                "Causas y Consecuencias de la Actividad Humana en Nuestras Regiones",
                "Historia Viva y Geografía Humana del Ecuador"
            ],
            "Educación Cultural y Artística": [
                "Patrimonio Visual y Artesanía Viva del Ecuador",
                "Referentes Culturales, Simbología y Diseño con Identidad",
                "Arte, Territorio y Técnicas Tradicionales Regionales",
                "Bocetos Fundamentados de la Diversidad Cultural Ecuatoriana",
                "Estética y Memoria Material de las Cuatro Regiones"
            ]
        };
        return {
            porQue: `Profundización disciplinar en ${m} para ${grado} Año EGB, conectando las habilidades propias del área con problemáticas reales de cada región ecuatoriana.`,
            queQuiere: `Desarrollar autonomía investigativa en ${m} mediante fuentes estructuradas, registro de hallazgos y síntesis aplicables.`,
            estrategias: "Secuencia investigativa en sesiones progresivas: exploración previa, análisis de fuentes, contrastación y síntesis.",
            dcd: enfoqueLista,
            titulos: bancos[m]
        };
    }

    return {
        porQue: `Integra ${materias.join(", ")} alrededor de un fenómeno regional real para que cada asignatura aporte herramientas específicas sin repetir tareas.`,
        queQuiere: `Que cada equipo distribuya el tiempo de investigación entre ${materias.join(", ")} y consolide hallazgos verificables.`,
        estrategias: "Investigación colaborativa por sesiones, contraste de fuentes, análisis de evidencias y síntesis interdisciplinaria.",
        dcd: enfoqueLista,
        titulos: [
            `Ecuador en Acción: Indagación en ${materias.join(" y ")}`,
            `Exploradores de los Cuatro Mundos (${materias.join(" + ")})`,
            `Ciencia, Cultura y Datos Reales del Ecuador`,
            `Territorio, Evidencias y Saberes Regionales`,
            `Laboratorio Investigativo ProyectaEC: Ecuador Vivo`
        ]
    };
}

// ============================================================================
// DISTRIBUCIÓN DE SESIONES DE INVESTIGACIÓN (SIN DUPLICAR CARGA)
// ============================================================================
function construirCronogramaSesiones(numSesiones, minPorSesion, materias, grupo) {
    const sesiones = [];
    for (let i = 0; i < numSesiones; i++) {
        const num = i + 1;
        const mat = materias[i % materias.length];
        const ciclo = Math.floor(i / materias.length);

        if (ciclo === 0) {
            sesiones.push({
                numero: num,
                asignatura: mat,
                minutos: minPorSesion,
                titulo: `Exploración inicial y comprensión de fuentes (${mat})`,
                proposito: `Activar conocimientos previos, acordar roles de equipo y analizar la fuente base de ${mat}.`,
                actividades: `1) Conformación de roles elegibles (5 min). 2) Exploración de conocimientos previos y lectura con glosario (${Math.round(minPorSesion * 0.45)} min). 3) Resolución de comprensión literal e inferencial (${Math.round(minPorSesion * 0.4)} min).`,
                evidenciaCorta: "Cuestionario de comprensión y glosario",
                evidencia: `Apartados 1, 2, 3 y 4 de la guía de ${mat} completados con acuerdos de equipo.`
            });
        } else if (ciclo === 1) {
            sesiones.push({
                numero: num,
                asignatura: mat,
                minutos: minPorSesion,
                titulo: `Contraste de fuentes, análisis crítico y aplicación (${mat})`,
                proposito: `Comparar dos fuentes de información, resolver la aplicación disciplinar y redactar una conclusión fundamentada en evidencias.`,
                actividades: `1) Registro de datos en tabla comparativa de dos fuentes (${Math.round(minPorSesion * 0.35)} min). 2) Resolución de actividad aplicada de ${mat} (${Math.round(minPorSesion * 0.4)} min). 3) Redacción de juicio fundamentado con evidencias (${Math.round(minPorSesion * 0.25)} min).`,
                evidenciaCorta: "Tabla comparativa y juicio crítico",
                evidencia: `Apartados 5, 6 y 7 de ${mat}: tabla de contraste, ejercicio aplicado y conclusión argumentada.`
            });
        } else {
            sesiones.push({
                numero: num,
                asignatura: mat,
                minutos: minPorSesion,
                titulo: `Revisión, síntesis para Fase 2 y autoevaluación (${mat})`,
                proposito: `Verificar la calidad de los hallazgos, consolidar la ficha de transferencia para la Fase 2 y completar la lista de comprobación.`,
                actividades: `1) Revisión cruzada entre pares con lista de comprobación (${Math.round(minPorSesion * 0.3)} min). 2) Redacción de la síntesis de hallazgos para el producto de Fase 2 (${Math.round(minPorSesion * 0.45)} min). 3) Autoevaluación del equipo (${Math.round(minPorSesion * 0.25)} min).`,
                evidenciaCorta: "Síntesis final y autoevaluación",
                evidencia: `Apartado 8 de ${mat}: ficha de síntesis de hallazgos validada y autoevaluación completada.`
            });
        }
    }
    return sesiones;
}

// ============================================================================
// GENERADOR DE RECURSOS UTILIZABLES DE APOYO (SIN DIAGNÓSTICOS)
// ============================================================================
function generarHtmlApoyosConcretos(apoyosGrupo, materia) {
    if (!apoyosGrupo || apoyosGrupo.length === 0) return "";

    const bloques = apoyosGrupo.map(ap => {
        let recursoEspecifico = "";

        if (ap.tipo === "lectura") {
            recursoEspecifico = `
                <div style="margin-top:6px;">
                    <strong>Organizador previo de lectura (para usar durante el Apartado 3):</strong>
                    <table class="work-table" style="margin-top:5px;">
                        <tr>
                            <th>1. ¿De qué trata este apartado?</th>
                            <th>2. Palabra clave del glosario</th>
                            <th>3. Dato o evidencia importante</th>
                        </tr>
                        <tr>
                            <td style="height:34px;"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <div style="font-size:11pt; margin-top:4px;"><em>Instrucción paso a paso: Lee un apartado corto a la vez, subraya el dato principal y compáralo con tu compañero/a de lectura antes de responder.</em></div>
                </div>
            `;
        } else if (ap.tipo === "escritura") {
            recursoEspecifico = `
                <div style="margin-top:6px;">
                    <strong>Banco de palabras e iniciadores de frases (para usar en Apartados 6, 7 y 8):</strong>
                    <div style="border:1px solid #000; padding:6px; margin:5px 0; font-size:11pt;">
                        <strong>Conectores útiles:</strong> <em>En primer lugar, Por otra parte, Según los datos revisados, Esto demuestra que, En conclusión.</em>
                    </div>
                    <div style="font-size:11pt;">
                        • <strong>Para explicar un hallazgo:</strong> "A partir de la información revisada, observamos que ________________________________________."<br>
                        • <strong>Para defender una conclusión:</strong> "Consideramos que ______________________________ porque la evidencia muestra que ______________________________."
                    </div>
                </div>
            `;
        } else if (ap.tipo === "calculo") {
            recursoEspecifico = `
                <div style="margin-top:6px;">
                    <strong>Tabla de valor posicional y secuencia de resolución (para usar en Apartado 7):</strong>
                    <table class="work-table" style="margin-top:5px; text-align:center;">
                        <tr>
                            <th>Centenas (C)</th><th>Decenas (D)</th><th>Unidades (U)</th><th>,</th><th>Décimas (d)</th><th>Centésimas (c)</th>
                        </tr>
                        <tr>
                            <td style="height:26px;"></td><td></td><td></td><td>,</td><td></td><td></td>
                        </tr>
                        <tr>
                            <td style="height:26px;"></td><td></td><td></td><td>,</td><td></td><td></td>
                        </tr>
                    </table>
                    <div style="font-size:11pt; margin-top:4px;">
                        <strong>Ejemplo resuelto de referencia (4 pasos):</strong><br>
                        <em>Problema modelo:</em> Si 100 camarones consumen 0,15 g cada uno, ¿cuánto consumen en total?<br>
                        Paso 1 (Datos): 100 camarones y 0,15 g/camarón. &rarr; Paso 2 (Operación): Multiplicación (100 &times; 0,15). &rarr; Paso 3 (Cálculo): 15,00 g. &rarr; Paso 4 (Verificación): Puedes usar calculadora para comprobar el resultado final cuando el objetivo sea resolver el problema y no el cálculo mental aislado.
                    </div>
                </div>
            `;
        } else {
            recursoEspecifico = `
                <div style="margin-top:6px;">
                    <strong>Lista de pasos y metas visibles (para marcar al avanzar en la guía):</strong>
                    <div style="font-size:11pt; margin-top:4px;">
                        [ &nbsp; ] Meta 1: Elegí mi rol en la tabla inicial y respondí los conocimientos previos.<br>
                        [ &nbsp; ] Meta 2: Leí los apartados con el glosario y respondí la comprensión literal e inferencial.<br>
                        [ &nbsp; ] Meta 3: Completé la tabla de comparación entre Fuente A y Fuente B.<br>
                        [ &nbsp; ] Meta 4: Redacté la conclusión con evidencias, la aplicación y la autoevaluación.
                    </div>
                </div>
            `;
        }

        return `
            <div style="border:1.5px solid #000; padding:9px 11px; margin-bottom:10px; break-inside:avoid;">
                <div style="font-weight:bold; font-size:12pt; border-bottom:1px solid #000; padding-bottom:3px;">
                    Apoyos para realizar la actividad — ${ap.alias}
                </div>
                <div style="font-size:11pt; margin-top:4px;">
                    <strong>Fortaleza observada:</strong> ${ap.fortaleza} &nbsp;|&nbsp;
                    <strong>Forma de respuesta acordada:</strong> ${ap.respuesta} &nbsp;|&nbsp;
                    <strong>Objetivo:</strong> ${ap.modObj ? 'Ajustado explícitamente por el docente' : 'Objetivo compartido del equipo'}
                </div>
                ${recursoEspecifico}
            </div>
        `;
    }).join('');

    return `
        <div style="margin-bottom:12px;">
            <div style="font-weight:bold; font-size:12.5pt; text-transform:uppercase; margin-bottom:5px;">
                Apoyos para realizar la actividad
            </div>
            ${bloques}
        </div>
    `;
}
