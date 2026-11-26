// ============================================================================
// ARCHIVO 4: RUBRICAS.JS - RÚBRICA ANALÍTICA PONDERADA, SOLUCIONARIO E IMPRESIÓN PDF
// ============================================================================

const CRITERIOS_RUBRICA_FASE1 = [
    {
        id: "c1",
        nombre: "Comprensión del tema y conceptos",
        peso: 20,
        evidenciaVinculada: "Apartados 2, 3 y 4 (Conocimientos previos, glosario, comprensión literal e inferencial)",
        n4: "Explica con precisión todos los conceptos del glosario y responde con rigor tanto las preguntas literales como las inferenciales.",
        n3: "Comprende los conceptos principales del texto y responde adecuadamente la mayoría de preguntas literales e inferenciales.",
        n2: "Identifica datos literales básicos, pero presenta dificultad para deducir relaciones implícitas o usar el glosario.",
        n1: "Muestra comprensión fragmentada del tema y confunde conceptos centrales de la lectura.",
        n0: "Sin evidencia: No entregó los apartados 2, 3 ni 4."
    },
    {
        id: "c2",
        nombre: "Búsqueda, selección y registro de fuentes",
        peso: 15,
        evidenciaVinculada: "Apartado 5 (Tabla de registro y comparación entre Fuente A y Fuente B)",
        n4: "Registra datos verificables de ambas fuentes en todos los criterios solicitados, distinguiendo claramente su procedencia.",
        n3: "Completa la tabla comparativa con datos pertinentes de la Fuente A y la Fuente B.",
        n2: "Registra información incompleta o copia fragmentos sin contrastar ambas fuentes.",
        n1: "Anota ideas sueltas sin relación con las fuentes proporcionadas.",
        n0: "Sin evidencia: Tabla comparativa del Apartado 5 en blanco."
    },
    {
        id: "c3",
        nombre: "Análisis y argumentación con evidencias",
        peso: 25,
        evidenciaVinculada: "Apartado 6 (Pensamiento crítico: juicio o conclusión fundamentada)",
        n4: "Formula una conclusión clara y sostiene su postura con al menos dos evidencias concretas extraídas de las fuentes.",
        n3: "Formula una conclusión coherente apoyada en al menos una evidencia verificable del texto o los cálculos.",
        n2: "Expresa una opinión personal válida, pero con escaso respaldo en las evidencias investigadas.",
        n1: "Escribe afirmaciones generales sin justificación ni conexión con los datos del equipo.",
        n0: "Sin evidencia: Apartado 6 sin responder."
    },
    {
        id: "c4",
        nombre: "Organización y aplicación de hallazgos",
        peso: 20,
        evidenciaVinculada: "Apartado 7 (Aplicación disciplinar: producción escrita, cálculos, esquemas o bocetos)",
        n4: "Aplica con exactitud los hallazgos investigados en el producto disciplinar (procedimientos completos, unidades o estructura textual).",
        n3: "Resuelve la actividad aplicada integrando correctamente los hallazgos de la investigación.",
        n2: "Aplica parcialmente los datos investigados o presenta errores de procedimiento/estructura.",
        n1: "La actividad aplicada no incorpora los datos obtenidos en la fase de investigación.",
        n0: "Sin evidencia: Apartado 7 sin desarrollar."
    },
    {
        id: "c5",
        nombre: "Participación y cumplimiento de acuerdos",
        peso: 10,
        evidenciaVinculada: "Tabla de roles elegibles y Lista de comprobación (Apartado 8)",
        n4: "Cumple responsablemente su rol asignado, aporta evidencias al equipo y respeta los acuerdos de apoyo inclusivo.",
        n3: "Cumple su rol y colabora en la mayoría de las sesiones de investigación.",
        n2: "Participa de manera intermitente o requiere recordatorios constantes para cumplir su tarea.",
        n1: "No asume el rol acordado ni aporta al trabajo colectivo del equipo.",
        n0: "Sin evidencia: No participó en las sesiones ni registró acuerdos."
    },
    {
        id: "c6",
        nombre: "Comunicación de conclusiones",
        peso: 10,
        evidenciaVinculada: "Apartado 8 (Ficha de síntesis de hallazgos para Fase 2)",
        n4: "Sintetiza con claridad, orden y vocabulario preciso los 3 insumos clave que orientarán la Fase 2 (Desarrollo).",
        n3: "Comunica de forma comprensible las conclusiones principales para continuar a la Fase 2.",
        n2: "Presenta ideas poco estructuradas que requieren aclaración antes de iniciar la Fase 2.",
        n1: "Las conclusiones son confusas o no guardan relación con la pregunta central.",
        n0: "Sin evidencia: Ficha de síntesis para Fase 2 vacía."
    }
];

const SOLUCIONARIO_DOCENTE = {
    "Grupo A": {
        "Lengua y Literatura": "MCQ: 1-B (Años 60 y 70), 2-C (El Oro, Guayas, Manabí, Esmeraldas y Santa Elena), 3-B (Combina agua dulce y salada rica en nutrientes). Inferencial: Se espera que identifique prácticas de protección del manglar, control de calidad del agua y respeto laboral. Juicio crítico: Debe articular la generación de divisas/empleo (Fuente A) con la protección de hectáreas de manglar como barrera ante inundaciones (Fuente B).",
        "Matemática": "MCQ: 1-D (2022), 2-B (Más de 600.000 t: 1.068.961 - 441.539 = 627.422 t), 3-C (Se duplica). Media aritmética (2017-2022): Suma = 4.074.122 t ÷ 6 = 679.020,33 t. Decimales: 12.350 × 0,15 g = 1.852,5 g/día; Costo: 1.852,5 × $0,02 = $37,05/día. Área libre: Área total = 60 × 30 = 1.800 m²; Dos piscinas = 2 × (10 × 10) = 200 m²; Área libre = 1.800 - 200 = 1.600 m².",
        "Ciencias Naturales": "MCQ: 1-B (Nauplio), 2-B (Se perdería el biofiltro natural). Respuesta abierta: El oxígeno disuelto y la temperatura (28-30 °C) regulan el metabolismo y previenen hipoxia y proliferación bacteriana.",
        "Ciencias Sociales": "MCQ: 1-B (El Oro), 2-B (Compiten por el uso y conservación del espacio costero). Hitos: 1968 (inicios en Santa Rosa), 1985 (expansión agroexportadora), Actualidad (acuerdos de uso sustentable y custodia de manglar).",
        "Educación Cultural y Artística": "MCQ: 1-B (Madera balsa, fibras naturales y conchas). Boceto: Debe diferenciar cromáticamente estanques, estuario y raíces de mangle."
    },
    "Grupo B": {
        "Lengua y Literatura": "MCQ: 1-B (Cotopaxi), 2-A (Inti Raymi), 3-B (Simbolizan fuerzas de la naturaleza y espiritualidad andina). Juicio crítico: Debe explicar que las máscaras transmiten valores comunitarios, ciclos agrícolas y memoria oral, no solo estética.",
        "Matemática": "MCQ: 1-B (María 10,5 días), 2-B (25%). Presupuesto: Distribuidor 1 = $10,55; Distribuidor 2 = $10,05 (Ahorro de $0,50 con Distribuidor 2). Media aritmética: (10,5 + 20,8 + 18,2 + 27,8 + 16,5) = 93,8 ÷ 5 = 18,76 días. Geometría: Área cuadrado = 12,5 × 12,5 = 156,25 cm²; Área sin pintar (25%) = 39,06 cm²; Área de un ojo circular = 3,14 × (2,8)² = 24,62 cm².",
        "Ciencias Naturales": "MCQ: 1-A (Chilca), 2-A (Biodegradable). Prevención: Uso de madera certificada de plantaciones manejadas, cartón reciclado y pigmentos vegetales.",
        "Ciencias Sociales": "MCQ: 1-B (Ciclo agrícola). Síntesis: El Inti Raymi agradece el solsticio y las cosechas; las máscaras mantienen viva la identidad mediante talleres familiares.",
        "Educación Cultural y Artística": "MCQ: 1-B (Simetría bilateral). Boceto: Eje vertical central con ojos equidistantes y contraste entre tonos cálidos y fríos."
    },
    "Grupo C": {
        "Lengua y Literatura": "MCQ: 1-B (Espinas curvas), 2-B (Permite regeneración natural). Juicio crítico: La ciencia valida principios activos mientras el saber ancestral garantiza recolección sostenible sin extinguir la especie.",
        "Matemática": "MCQ: 1-B (125 kg), 2-B ($0,30). Costos: Costo = 125 × $0,50 = $62,50; Ingreso = 125 × $0,80 = $100,00; Ganancia neta = $37,50. Envasado: 15 ÷ 0,25 = 60 frascos. Porcentaje: 45% de 200 = 90 unidades. Área circular: 3,14 × 4² = 50,24 m².",
        "Ciencias Naturales": "MCQ: 1-B (24 °C a 28 °C). Cadena causal: Tala → pérdida de raíces que retienen suelo → erosión y turbidez en ríos → desplazamiento de fauna.",
        "Ciencias Sociales": "MCQ: 1-B (6 provincias: Sucumbíos, Orellana, Napo, Pastaza, Morona Santiago, Zamora Chinchipe).",
        "Educación Cultural y Artística": "MCQ: 1-B (Nervaduras, tallos, espinas y proporciones)."
    },
    "Grupo D": {
        "Lengua y Literatura": "MCQ: 1-B (1.000 km), 2-A (Evolucionaron sin depredadores externos). Juicio crítico: Debe sustentar la regulación estricta (bioseguridad y capacidad de carga) porque el turismo financia la conservación si se controla el impacto.",
        "Matemática": "MCQ: 1-B (16 visitantes), 2-B (2.400 m). Población: 35% de 400 = 140 tortugas nuevas; Total = 540 tortugas. Nidos: 85% de 1.200 = 1.020 nidos. Capacidad diaria: 6 × 16 = 96 turistas/día.",
        "Ciencias Naturales": "MCQ: 1-B (Silla de montar). Comparación: Islas húmedas → vegetación baja → caparazón en cúpula; Islas áridas → cactus altos → cuello largo y caparazón en silla de montar.",
        "Ciencias Sociales": "MCQ: 1-C (97%). Hitos: 1832 (incorporación al Ecuador), 1959 (creación Parque Nacional), 1978 (Patrimonio Natural UNESCO).",
        "Educación Cultural y Artística": "MCQ: 1-B (Fondo en perspectiva y primer plano 3D)."
    },
    "Grupo E": {
        "Lengua y Literatura": "MCQ: 1-B (Cordillera, corrientes y cuenca amazónica), 2-A (Pisos climáticos distintos). Juicio crítico: El comercio justo elimina intermediarios abusivos y garantiza seguridad alimentaria interregional.",
        "Matemática": "MCQ: 1-C (8.500 kg), 2-C (7 horas: 420 ÷ 60). Distribución: Papas (40%) = 3.400 kg; Hortalizas (35%) = 2.975 kg; Frutas (25%) = 2.125 kg. Flete: 8,5 × $18,50 = $157,25; Con 10% descuento (-$15,73) = $141,52.",
        "Ciencias Naturales": "MCQ: 1-C (3.000 a 4.500 m). Función hídrica: El páramo retiene neblina y lluvia alimentando cuencas del Pacífico y del Amazonas.",
        "Ciencias Sociales": "MCQ: 1-B (1908). Síntesis: Articuló mercados de Costa y Sierra reduciendo tiempos de viaje.",
        "Educación Cultural y Artística": "MCQ: 1-B (Representar productos, rutas o lugares de forma clara)."
    }
};

function obtenerRubricaFase1() {
    return CRITERIOS_RUBRICA_FASE1;
}

function inicializarEstadoGrupo(grupoIdx) {
    if (!estadoEvaluacionPorGrupo[grupoIdx]) {
        estadoEvaluacionPorGrupo[grupoIdx] = {
            niveles: { c1: "pendiente", c2: "pendiente", c3: "pendiente", c4: "pendiente", c5: "pendiente", c6: "pendiente" },
            evidenciaGrupal: "",
            participacionIndividual: "",
            fortalezas: "",
            observaciones: "",
            siguientePaso: ""
        };
    }
    return estadoEvaluacionPorGrupo[grupoIdx];
}

function renderizarModuloRubrica(grupoIdx, grupoObj, materias) {
    const est = inicializarEstadoGrupo(grupoIdx);

    const filas = CRITERIOS_RUBRICA_FASE1.map(c => {
        const val = est.niveles[c.id];
        return `
            <tr>
                <td><strong>${c.nombre}</strong><br><span style="color:#0f766e; font-size:0.78rem;">Peso: ${c.peso}% | Evidencia: ${c.evidenciaVinculada}</span></td>
                <td>${c.n4}</td>
                <td>${c.n3}</td>
                <td>${c.n2}</td>
                <td>${c.n1}</td>
                <td>
                    <select onchange="actualizarNivelCriterio(${grupoIdx}, '${c.id}', this.value)" style="width:100%; font-size:0.82rem;">
                        <option value="pendiente" ${val === 'pendiente' ? 'selected' : ''}>⏳ Pendiente de evaluar</option>
                        <option value="4" ${val === '4' ? 'selected' : ''}>4 - Logrado con profundidad</option>
                        <option value="3" ${val === '3' ? 'selected' : ''}>3 - Logrado</option>
                        <option value="2" ${val === '2' ? 'selected' : ''}>2 - En proceso</option>
                        <option value="1" ${val === '1' ? 'selected' : ''}>1 - Inicial</option>
                        <option value="0" ${val === '0' ? 'selected' : ''}>0 - Sin evidencia</option>
                    </select>
                </td>
            </tr>
        `;
    }).join('');

    const calculo = calcularNotaSobreDiez(est.niveles);

    return `
        <div class="rubrica-box">
            <div class="phase-header">
                <h3>📊 Rúbrica Analítica de Evaluación — Fase 1 (${grupoObj.letra})</h3>
                <span style="font-size:0.82rem; color:#475569;">Nota: El uso de apoyos autorizados no reduce la calificación; se evalúa el aprendizaje previsto.</span>
            </div>

            <div style="overflow-x:auto;">
                <table class="rubrica-table">
                    <thead>
                        <tr>
                            <th style="width:18%;">Criterio y Peso</th>
                            <th style="width:17%;">4: Logrado con profundidad</th>
                            <th style="width:17%;">3: Logrado</th>
                            <th style="width:16%;">2: En proceso</th>
                            <th style="width:15%;">1: Inicial</th>
                            <th style="width:17%;">Estado / Nivel (0 = Sin evidencia)</th>
                        </tr>
                    </thead>
                    <tbody>${filas}</tbody>
                </table>
            </div>

            <div class="nota-panel" id="panelNota_${grupoIdx}">
                ${calculo.html}
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:10px; margin-top:12px;">
                <div>
                    <label style="font-size:0.82rem; font-weight:700;">Evidencia grupal verificada:</label>
                    <textarea rows="2" style="width:100%;" oninput="guardarCampoEval(${grupoIdx}, 'evidenciaGrupal', this.value)">${est.evidenciaGrupal}</textarea>
                </div>
                <div>
                    <label style="font-size:0.82rem; font-weight:700;">Registro de participación individual (por rol):</label>
                    <textarea rows="2" style="width:100%;" oninput="guardarCampoEval(${grupoIdx}, 'participacionIndividual', this.value)">${est.participacionIndividual}</textarea>
                </div>
                <div>
                    <label style="font-size:0.82rem; font-weight:700;">Fortalezas observadas:</label>
                    <textarea rows="2" style="width:100%;" oninput="guardarCampoEval(${grupoIdx}, 'fortalezas', this.value)">${est.fortalezas}</textarea>
                </div>
                <div>
                    <label style="font-size:0.82rem; font-weight:700;">Observaciones y siguiente paso de mejora:</label>
                    <textarea rows="2" style="width:100%;" oninput="guardarCampoEval(${grupoIdx}, 'siguientePaso', this.value)">${est.siguientePaso}</textarea>
                </div>
            </div>
        </div>
    `;
}

function actualizarNivelCriterio(grupoIdx, critId, valor) {
    const est = inicializarEstadoGrupo(grupoIdx);
    est.niveles[critId] = valor;
    const calculo = calcularNotaSobreDiez(est.niveles);
    const panel = document.getElementById(`panelNota_${grupoIdx}`);
    if (panel) panel.innerHTML = calculo.html;
}

function guardarCampoEval(grupoIdx, campo, valor) {
    const est = inicializarEstadoGrupo(grupoIdx);
    est[campo] = valor;
}

function calcularNotaSobreDiez(niveles) {
    let pendientes = 0;
    let sumaPonderada = 0;

    CRITERIOS_RUBRICA_FASE1.forEach(c => {
        const val = niveles[c.id];
        if (val === "pendiente") {
            pendientes++;
        } else {
            const num = parseFloat(val);
            sumaPonderada += (num / 4) * c.peso;
        }
    });

    const nota = (sumaPonderada / 10).toFixed(2);

    if (pendientes > 0) {
        return {
            definitiva: false,
            nota: null,
            html: `<span class="nota-pendiente">⏳ Evaluación en curso: Faltan ${pendientes} criterio(s) por calificar. La nota definitiva sobre 10 se mostrará al completar todos los criterios (Puntaje parcial acumulado: ${nota} / 10).</span>`
        };
    }

    return {
        definitiva: true,
        nota: nota,
        html: `<span class="nota-valor">✅ Nota Definitiva Fase 1: ${nota} / 10</span><span style="font-size:0.84rem; color:#334155;">Fórmula aplicada: &Sigma;[(nivel &divide; 4) &times; peso %] &divide; 10</span>`
    };
}

// ============================================================================
// MOTOR DE IMPRESIÓN PDF (A4, TIMES NEW ROMAN 12pt / ACCESIBLE, NEGRO PURO)
// ============================================================================
function abrirVentanaImpresionA4(tituloDoc, cuerpoHtml) {
    const accesible = document.getElementById('pdfAccesible') && document.getElementById('pdfAccesible').checked;
    const fontSize = accesible ? (document.getElementById('pdfFontSize').value + "pt") : "12pt";
    const lineHeight = accesible ? document.getElementById('pdfLineHeight').value : "1.35";

    const v = window.open('', '_blank', 'width=920,height=780');
    v.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${tituloDoc}</title>
            <style>
                @page { size: A4 portrait; margin: 1.5cm; }
                * { box-sizing: border-box; font-family: 'Times New Roman', Times, serif !important; color: #000000 !important; }
                body {
                    margin: 0; padding: 0; background: #ffffff;
                    font-size: ${fontSize}; line-height: ${lineHeight};
                }
                h1, h2, h3, h4, strong, th, .sec-title { font-weight: bold !important; color: #000000 !important; }
                .header-sheet {
                    border: 2px solid #000000; padding: 10px 12px; margin-bottom: 12px;
                }
                .header-sheet h1 { margin: 0 0 4px 0; font-size: 14pt; text-transform: uppercase; }
                .meta-table, .work-table {
                    width: 100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 10px;
                }
                .meta-table td, .meta-table th, .work-table td, .work-table th {
                    border: 1px solid #000000; padding: 5px 7px; text-align: left; vertical-align: top;
                }
                .sec-box {
                    border: 1px solid #000000; padding: 9px 11px; margin-bottom: 11px;
                    break-inside: avoid; page-break-inside: avoid;
                }
                .sec-title {
                    border-bottom: 1px solid #000000; padding-bottom: 3px; margin-bottom: 6px;
                    font-size: 12pt; text-transform: uppercase;
                }
                .reading-box {
                    border: 1px solid #000000; padding: 7px 9px; margin-bottom: 8px;
                }
                .mcq-item { margin-bottom: 7px; break-inside: avoid; }
                .mcq-options { list-style: none; padding-left: 12px; margin: 3px 0; }
                .write-lines {
                    border-bottom: 1px solid #000000; height: 22px; margin-top: 5px;
                }
                .math-grid-box {
                    border: 1px solid #000000; height: 95px; margin-top: 6px; margin-bottom: 8px;
                }
                tr, p { break-inside: avoid; page-break-inside: avoid; }
                @media print {
                    body { -webkit-print-color-adjust: exact; }
                }
            </style>
        </head>
        <body>
            ${cuerpoHtml}
            <script>
                window.onload = function() {
                    setTimeout(function() { window.print(); }, 250);
                };
            </script>
        </body>
        </html>
    `);
    v.document.close();
}

function imprimirGuiaCompleta(grupoIdx, materia) {
    const g = gruposGeneradosActuales[grupoIdx];
    const guia = g.guiasPorMateria[materia];
    const grado = document.getElementById('grado').value;
    const duracion = document.getElementById('duracion').value;
    const numSesiones = document.getElementById('numSesiones').value;
    const minPorSesion = document.getElementById('minPorSesion').value;
    const selTitulo = document.getElementById('selectorTitulo');
    const tituloProyecto = selTitulo.options[selTitulo.selectedIndex].text.replace(/^Propuesta \d+:\s*/, '');
    const apoyosGrupo = perfilesApoyo.filter(p => p.grupoIdx === grupoIdx);

    const htmlApoyos = generarHtmlApoyosConcretos(apoyosGrupo, materia);
    const rolesHtml = guia.rolesEquipo.map(r => `
        <tr>
            <td><strong>${r.rol}</strong></td>
            <td>${r.tarea}</td>
            <td style="width:28%;"></td>
        </tr>
    `).join('');

    const html = `
        <div class="header-sheet">
            <h1>GUÍA DE INVESTIGACIÓN (FASE 1) — ${materia.toUpperCase()}</h1>
            <div><strong>Proyecto:</strong> ${tituloProyecto}</div>
            <table class="meta-table">
                <tr>
                    <td><strong>Año EGB:</strong> ${grado} Año</td>
                    <td><strong>Equipo:</strong> ${g.letra}</td>
                    <td><strong>Región / Enfoque:</strong> ${g.enfoque}</td>
                </tr>
                <tr>
                    <td><strong>Asignatura:</strong> ${materia}</td>
                    <td><strong>Duración Proyecto:</strong> ${duracion}</td>
                    <td><strong>Tiempo Fase 1:</strong> ${numSesiones} sesiones (${minPorSesion} min c/u)</td>
                </tr>
            </table>
        </div>

        <div class="sec-box">
            <div class="sec-title">ORGANIZACIÓN DEL EQUIPO Y ROLES ELEGIBLES</div>
            <table class="work-table">
                <thead>
                    <tr><th style="width:28%;">Rol del Equipo</th><th>Responsabilidad concreta en esta guía</th><th>Estudiante responsable</th></tr>
                </thead>
                <tbody>${rolesHtml}</tbody>
            </table>
        </div>

        ${htmlApoyos}

        ${guia.contenidoCompleto}
    `;

    abrirVentanaImpresionA4(`Guia_Fase1_${g.letra}_${materia}`, html);
}

function imprimirSesionIndividual(grupoIdx, sesionIdx) {
    const g = gruposGeneradosActuales[grupoIdx];
    const grado = document.getElementById('grado').value;
    const numSesiones = parseInt(document.getElementById('numSesiones').value) || 6;
    const minPorSesion = parseInt(document.getElementById('minPorSesion').value) || 45;
    const materias = Array.from(document.querySelectorAll('input[name="materia"]:checked')).map(el => el.value);
    const cronograma = construirCronogramaSesiones(numSesiones, minPorSesion, materias, g);
    const ses = cronograma[sesionIdx];
    const apoyosGrupo = perfilesApoyo.filter(p => p.grupoIdx === grupoIdx);

    const html = `
        <div class="header-sheet">
            <h1>FICHA DE TRABAJO POR SESIÓN — FASE 1: INVESTIGACIÓN</h1>
            <table class="meta-table">
                <tr>
                    <td><strong>Año EGB:</strong> ${grado} Año</td>
                    <td><strong>Equipo:</strong> ${g.letra} (${g.enfoque})</td>
                    <td><strong>Sesión:</strong> ${ses.numero} de ${numSesiones} (${ses.minutos} min)</td>
                </tr>
                <tr>
                    <td colspan="3"><strong>Asignatura responsable en esta sesión:</strong> ${ses.asignatura}</td>
                </tr>
            </table>
        </div>

        ${generarHtmlApoyosConcretos(apoyosGrupo, ses.asignatura)}

        <div class="sec-box">
            <div class="sec-title">SESIÓN ${ses.numero}: ${ses.titulo.toUpperCase()}</div>
            <p><strong>Propósito de la sesión:</strong> ${ses.proposito}</p>
            <p><strong>Secuencia de actividades:</strong> ${ses.actividades}</p>
            <p><strong>Evidencia esperada al finalizar la sesión:</strong> ${ses.evidencia}</p>
            <p><strong>Registro de avances y acuerdos del equipo:</strong></p>
            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
        </div>
    `;

    abrirVentanaImpresionA4(`Sesion_${ses.numero}_${g.letra}`, html);
}

function imprimirRubrica(grupoIdx) {
    const g = gruposGeneradosActuales[grupoIdx];
    const est = inicializarEstadoGrupo(grupoIdx);
    const grado = document.getElementById('grado').value;
    const materias = Array.from(document.querySelectorAll('input[name="materia"]:checked')).map(el => el.value);
    const calculo = calcularNotaSobreDiez(est.niveles);

    const filas = CRITERIOS_RUBRICA_FASE1.map(c => {
        const val = est.niveles[c.id];
        const textoVal = val === "pendiente" ? "Pendiente" : `${val} / 4`;
        return `
            <tr>
                <td><strong>${c.nombre}</strong> (${c.peso}%)<br><em>${c.evidenciaVinculada}</em></td>
                <td>${c.n4}</td>
                <td>${c.n3}</td>
                <td>${c.n2}</td>
                <td>${c.n1}</td>
                <td style="text-align:center;"><strong>${textoVal}</strong></td>
            </tr>
        `;
    }).join('');

    const html = `
        <div class="header-sheet">
            <h1>RÚBRICA ANALÍTICA DE EVALUACIÓN — FASE 1: INVESTIGACIÓN</h1>
            <table class="meta-table">
                <tr>
                    <td><strong>Año EGB:</strong> ${grado} Año</td>
                    <td><strong>Equipo:</strong> ${g.letra} (${g.enfoque})</td>
                    <td><strong>Asignaturas:</strong> ${materias.join(', ')}</td>
                </tr>
            </table>
        </div>
        <table class="work-table">
            <thead>
                <tr>
                    <th>Criterio y Peso</th>
                    <th>4: Logrado con profundidad</th>
                    <th>3: Logrado</th>
                    <th>2: En proceso</th>
                    <th>1: Inicial</th>
                    <th>Nivel (0 = Sin evidencia)</th>
                </tr>
            </thead>
            <tbody>${filas}</tbody>
        </table>
        <div class="sec-box">
            <p><strong>Resultado de Evaluación:</strong> ${calculo.definitiva ? `Nota Definitiva: ${calculo.nota} / 10` : 'Evaluación en curso (existen criterios pendientes).'}</p>
            <p><strong>Evidencia grupal:</strong> ${est.evidenciaGrupal || '________________________________________________'}</p>
            <p><strong>Participación individual:</strong> ${est.participacionIndividual || '________________________________________________'}</p>
            <p><strong>Fortalezas y siguiente paso de mejora:</strong> ${est.fortalezas || ''} ${est.siguientePaso || ''}</p>
        </div>
    `;

    abrirVentanaImpresionA4(`Rubrica_Fase1_${g.letra}`, html);
}

function imprimirSolucionario(grupoIdx) {
    const g = gruposGeneradosActuales[grupoIdx];
    const materias = Array.from(document.querySelectorAll('input[name="materia"]:checked')).map(el => el.value);
    const solGrupo = SOLUCIONARIO_DOCENTE[g.letra] || {};

    const bloques = materias.map(mat => `
        <div class="sec-box">
            <div class="sec-title">CLAVES Y RESPUESTAS ORIENTATIVAS — ${mat.toUpperCase()}</div>
            <p>${solGrupo[mat] || 'Revisar coherencia con las evidencias de las Fuentes A y B.'}</p>
        </div>
    `).join('');

    const html = `
        <div class="header-sheet">
            <h1>SOLUCIONARIO DOCENTE (USO EXCLUSIVO DEL PROFESORADO) — ${g.letra}</h1>
            <div><strong>Enfoque Regional:</strong> ${g.enfoque} — ${g.nombreCreativo}</div>
        </div>
        ${bloques}
    `;

    abrirVentanaImpresionA4(`Solucionario_Docente_${g.letra}`, html);
}
