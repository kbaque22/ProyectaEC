// ============================================================================
// ARCHIVO 3: DATOS_GRUPOS.JS - SECUENCIA INVESTIGATIVA COMPLETA POR GRADO Y ÁREA
// ============================================================================

function obtenerDatosGrupos(grado) {
    const esQuinto = grado === "5to";

    function armarGuiaCompleta(cfg) {
        return {
            preguntaCentral: cfg.preguntaCentral,
            rolesEquipo: cfg.rolesEquipo,
            contenidoCompleto: `
                <div class="sec-box">
                    <div class="sec-title">1. OBJETIVO DE APRENDIZAJE Y PREGUNTA CENTRAL DE INVESTIGACIÓN</div>
                    <p><strong>Objetivo:</strong> ${cfg.objetivo}</p>
                    <p><strong>Pregunta central de investigación:</strong> ${cfg.preguntaCentral}</p>
                    <p><strong>Materiales necesarios:</strong> ${cfg.materiales}</p>
                </div>

                <div class="sec-box">
                    <div class="sec-title">2. EXPLORACIÓN DE CONOCIMIENTOS PREVIOS (Tiempo estimado: 10 min)</div>
                    <p><strong>Instrucción:</strong> Antes de leer el texto de referencia, dialoguen en equipo y respondan con sus propias ideas:</p>
                    <p>a) ${cfg.previos[0]}</p>
                    <div class="write-lines"></div>
                    <p>b) ${cfg.previos[1]}</p>
                    <div class="write-lines"></div>
                </div>

                <div class="sec-box">
                    <div class="sec-title">3. INFORMACIÓN DE REFERENCIA Y GLOSARIO (Tiempo estimado: 15 min)</div>
                    <div class="reading-box">
                        ${cfg.lecturaApartados}
                    </div>
                    <table class="work-table">
                        <thead>
                            <tr><th style="width:28%;">Término del Glosario</th><th>Definición contextualizada</th></tr>
                        </thead>
                        <tbody>
                            ${cfg.glosario.map(g => `<tr><td><strong>${g.term}</strong></td><td>${g.def}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="sec-box">
                    <div class="sec-title">4. COMPRENSIÓN LITERAL E INFERENCIAL (Tiempo estimado: 15 min)</div>
                    <p><strong>Instrucción:</strong> Marquen con una X la opción correcta y respondan la pregunta inferencial.</p>
                    <div class="mcq-grid">
                        ${cfg.preguntasMcq.map(q => `
                            <div class="mcq-item">
                                <p>${q.enunciado}</p>
                                <ul class="mcq-options">
                                    ${q.opciones.map(op => `<li>${op}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    <p style="margin-top:8px;"><strong>Pregunta inferencial (deduce a partir de las pistas del texto):</strong> ${cfg.inferencial}</p>
                    <div class="write-lines"></div><div class="write-lines"></div>
                </div>

                <div class="sec-box">
                    <div class="sec-title">5. REGISTRO Y COMPARACIÓN DE DOS FUENTES (Tiempo estimado: 20 min)</div>
                    <p><strong>Instrucción:</strong> Contrasten la <em>Fuente A (Lectura base)</em> con la <em>Fuente B (Dato complementario / registro local)</em> proporcionada a continuación:</p>
                    <div class="reading-box"><strong>Fuente B:</strong> ${cfg.fuenteB}</div>
                    <table class="work-table">
                        <thead>
                            <tr>
                                <th style="width:24%;">Criterio de comparación</th>
                                <th style="width:38%;">Hallazgo en Fuente A</th>
                                <th style="width:38%;">Hallazgo en Fuente B</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cfg.criteriosComparacion.map(c => `<tr><td><strong>${c}</strong></td><td style="height:34px;"></td><td></td></tr>`).join('')}
                        </tbody>
                    </table>
                    <p><strong>Evidencia esperada:</strong> Tabla comparativa completa con datos verificables de ambas fuentes.</p>
                </div>

                <div class="sec-box">
                    <div class="sec-title">6. PENSAMIENTO CRÍTICO: JUICIO FUNDAMENTADO CON EVIDENCIAS (Tiempo estimado: 15 min)</div>
                    <p><strong>Instrucción:</strong> ${cfg.pensamientoCritico}</p>
                    <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                </div>

                <div class="sec-box">
                    <div class="sec-title">7. APLICACIÓN DISCIPLINAR (${cfg.asignatura.toUpperCase()}) (Tiempo estimado: 25 min)</div>
                    ${cfg.aplicacionHtml}
                </div>

                <div class="sec-box">
                    <div class="sec-title">8. SÍNTESIS DE HALLAZGOS (INSUMO PARA FASE 2) Y AUTOEVALUACIÓN</div>
                    <p><strong>Ficha de transferencia a la Fase 2 (Desarrollo):</strong> Escriban 3 datos o ideas clave de esta investigación que deberán verse reflejados obligatoriamente en el producto de la Fase 2:</p>
                    <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    <table class="work-table" style="margin-top:10px;">
                        <thead>
                            <tr><th>Lista de Comprobación del Equipo</th><th style="width:14%; text-align:center;">Logrado</th><th style="width:14%; text-align:center;">En proceso</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Cumplimos los roles acordados al inicio de la guía.</td><td></td><td></td></tr>
                            <tr><td>Comparamos información de las dos fuentes utilizando evidencias.</td><td></td><td></td></tr>
                            <tr><td>Revisamos que las operaciones o redacciones sean claras y completas.</td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
            `
        };
    }

    return [
        // ====================================================================
        // GRUPO A: REGIÓN COSTA (EL CAMARÓN Y EL ESTUARIO)
        // ====================================================================
        {
            letra: "Grupo A",
            nombreCreativo: "Producción Acuícola y Ecosistema del Manglar (Región Costa)",
            enfoque: "Región Litoral o Costa",
            productoFinal: "Maqueta Topográfica del Criadero Sostenible y Ficha Informativa Regional",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: esQuinto ? "Comprender textos informativos sobre la producción camaronera de la Costa e identificar ideas principales y vocabulario nuevo." : "Analizar críticamente fuentes sobre la industria camaronera ecuatoriana, contrastar perspectivas y producir un texto argumentado con evidencias.",
                    preguntaCentral: "¿Cómo equilibrar el desarrollo económico de la producción camaronera en la Costa ecuatoriana con la protección de los manglares y el bienestar laboral?",
                    materiales: "Guía impresa, lápiz, resaltadores de dos colores y diccionario escolar.",
                    previos: [
                        "¿Qué productos del mar o de los ríos de la Costa ecuatoriana conocen y cómo llegan a nuestros hogares?",
                        "¿Qué saben sobre los manglares y por qué son importantes para los animales y las personas de la Costa?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Origen e importancia económica:</strong> El camarón (<em>Litopenaeus vannamei</em>) es un crustáceo decápodo que constituye uno de los principales rubros de exportación no petrolera del Ecuador. Su cultivo comercial en la Costa comenzó en las décadas de 1960 y 1970 en provincias como El Oro y Guayas, expandiéndose luego a Manabí, Esmeraldas y Santa Elena.</p>
                        <p><strong>Apartado 2. Desafíos socioambientales:</strong> Aunque genera miles de empleos directos e indirectos, la expansión de piscinas sin planificación afectó zonas de manglar en décadas pasadas. Actualmente se promueven certificaciones sostenibles, control de calidad del agua y mejoras en las condiciones laborales de los trabajadores acuícolas.</p>
                    `,
                    glosario: [
                        { term: "Crustáceo", def: "Animal invertebrado acuático con exoesqueleto articulado, como el camarón o el cangrejo." },
                        { term: "Estuario", def: "Desembocadura de un río caudaloso en el mar donde se mezcla agua dulce y salada." },
                        { term: "Sostenibilidad", def: "Aprovechamiento de recursos naturales sin agotar ni destruir el ecosistema para futuras generaciones." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿En qué décadas comenzó el desarrollo comercial del cultivo de camarón en Ecuador?", opciones: ["A) Años 20 y 30", "B) Años 60 y 70", "C) Años 90", "D) Después del 2010"] },
                        { enunciado: "2. (Literal) ¿Qué provincias costeras concentran la producción camaronera?", opciones: ["A) Cotopaxi y Tungurahua", "B) Napo y Pastaza", "C) El Oro, Guayas, Manabí, Esmeraldas y Santa Elena", "D) Loja y Azuay"] },
                        { enunciado: "3. (Inferencial) ¿Por qué el estuario es un ambiente clave para esta actividad?", opciones: ["A) Porque tiene nieve todo el año", "B) Porque combina agua dulce y salada rica en nutrientes", "C) Porque carece de vegetación", "D) Porque está a más de 3.000 metros de altitud"] }
                    ],
                    inferencial: "Si una granja camaronera obtiene una certificación de sostenibilidad, ¿qué cambios concretos esperas observar en su relación con el manglar vecino?",
                    fuenteB: "Informe técnico del sector acuícola (2023): Ecuador superó el millón de toneladas exportadas gracias a la tecnificación con alimentadores automáticos, pero los estudios ecológicos advierten que cada hectárea de manglar perdida reduce la protección natural contra inundaciones costeras.",
                    criteriosComparacion: ["Beneficio económico destacado", "Riesgo o desafío señalado", "Solución o medida propuesta"],
                    pensamientoCritico: "Formula una conclusión fundamentada en evidencias de las Fuentes A y B respondiendo: ¿Es posible aumentar las exportaciones sin destruir el manglar? Justifica con al menos dos datos del texto.",
                    rolesEquipo: [
                        { rol: "Lector/a de Referencia", tarea: "Dirige la lectura por apartados y consulta el glosario." },
                        { rol: "Analista de Comprensión", tarea: "Modera el acuerdo en las preguntas literales e inferenciales." },
                        { rol: "Contrastador/a de Fuentes", tarea: "Completa la tabla comparativa entre Fuente A y Fuente B." },
                        { rol: "Redactor/a de Síntesis", tarea: "Escribe el juicio fundamentado y la transferencia para Fase 2." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Producción escrita vinculada con la investigación (${esQuinto ? "Párrafo descriptivo de 5 líneas" : "Texto argumentativo de 2 párrafos"}):</strong><br>
                        Redacta un boletín informativo dirigido a las familias de la Costa explicando la importancia del camarón y cómo proteger los manglares, integrando al menos 2 palabras del glosario:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Matemática": armarGuiaCompleta({
                    asignatura: "Matemática",
                    objetivo: esQuinto ? "Interpretar tablas de producción camaronera, resolver operaciones con decimales y calcular áreas rectangulares." : "Analizar series estadísticas de exportación, calcular la media aritmética, resolver problemas con decimales y determinar áreas compuestas.",
                    preguntaCentral: "¿Qué revelan las cifras históricas de exportación y los cálculos de superficie y alimentación sobre la eficiencia de un criadero camaronero?",
                    materiales: "Guía impresa, regla graduada, lápiz, borrador y calculadora (solo si consta como apoyo autorizado para verificación).",
                    previos: [
                        "¿Para qué sirve calcular el promedio (media aritmética) cuando tenemos datos de producción de varios años?",
                        "¿Cómo se calcula el área de un terreno rectangular y qué unidades de medida se usan?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Evolución cuantitativa de las exportaciones:</strong> Entre 2017 y 2022, las exportaciones ecuatorianas de camarón registraron un crecimiento sostenido: 2017 (441.539 t), 2018 (512.108 t), 2019 (645.043 t), 2020 (688.489 t), 2021 (847.982 t) y 2022 (1.068.961 t).</p>
                        <p><strong>Apartado 2. Parámetros técnicos de granja:</strong> En un criadero modelo de 60 m de largo por 30 m de ancho se instalan piscinas cuadradas de crianza larval de 10 m de lado y se dosifica alimento balanceado en gramos por individuo según su etapa de crecimiento.</p>
                    `,
                    glosario: [
                        { term: "Tonelada (t)", def: "Unidad de masa equivalente a 1.000 kilogramos." },
                        { term: "Media aritmética", def: "Cociente que resulta de dividir la suma de todos los datos entre el número total de datos." },
                        { term: "Área libre", def: "Superficie resultante de restar el área ocupada por estructuras internas al área total del terreno." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿En qué año del periodo 2017-2022 se registró la mayor exportación?", opciones: ["A) 2018", "B) 2020", "C) 2021", "D) 2022"] },
                        { enunciado: "2. (Literal) ¿Cuánto aumentó aproximadamente la exportación entre 2017 y 2022?", opciones: ["A) Menos de 100.000 t", "B) Más de 600.000 t", "C) Exactamente 50.000 t", "D) Disminuyó"] },
                        { enunciado: "3. (Inferencial) Si se duplica el número de camarones en un estanque manteniendo la ración diaria por camarón, ¿qué ocurre con el gasto diario de alimento?", opciones: ["A) Se mantiene igual", "B) Se reduce a la mitad", "C) Se duplica", "D) No se puede saber"] }
                    ],
                    inferencial: "Observando los datos de 2019 (645.043 t) y 2020 (688.489 t), ¿el sector detuvo su crecimiento durante el año 2020? Explica con la diferencia numérica.",
                    fuenteB: "Registro de control de granja experimental: Un estanque con 12.350 camarones utiliza 0,15 g de alimento por camarón al día a un costo de $0,02 por gramo; mientras que un estanque de control reparte 9.720 g entre 3.240 camarones.",
                    criteriosComparacion: ["Variable medida (toneladas vs. gramos/costo)", "Escala (nacional vs. estanque)", "Utilidad para tomar decisiones"],
                    pensamientoCritico: "Con base en los cálculos realizados, formula una conclusión fundamentada sobre por qué el control exacto de gramos de alimento evita pérdidas económicas y contaminación del agua.",
                    rolesEquipo: [
                        { rol: "Analista Estadístico/a", tarea: "Organiza los datos de exportación y calcula la media aritmética." },
                        { rol: "Calculista de Decimales", tarea: "Resuelve los problemas de ración y costo de alimentación." },
                        { rol: "Geómetra de Superficies", tarea: "Calcula el área total del terreno y el área libre de las piscinas." },
                        { rol: "Verificador/a de Procedimientos", tarea: "Revisa que cada operación tenga procedimiento y respuesta escrita." }
                    ],
                    aplicacionHtml: esQuinto ? `
                        <p><strong>1. Diferencia de exportaciones:</strong> Calcula cuántas toneladas más se exportaron en 2022 (1.068.961 t) respecto a 2020 (688.489 t):</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Área del criadero:</strong> Calcula el área total de un criadero rectangular de <strong>60 m de largo por 30 m de ancho</strong> ($A = b \times h$):</p>
                        <div class="math-grid-box"></div>
                    ` : `
                        <p><strong>1. Media aritmética de exportaciones (2017 - 2022):</strong> Suma las exportaciones de los 6 años y divide para 6. Explica qué representa ese promedio:</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Decimales en alimentación:</strong> Cada camarón consume <strong>0,15 g</strong> al día. Si hay <strong>12.350 camarones</strong>, ¿cuántos gramos se necesitan al día y cuánto cuestan a <strong>$0,02</strong> por gramo?</p>
                        <div class="math-grid-box"></div>
                        <p><strong>3. Área libre del criadero:</strong> En el terreno rectangular de <strong>60 m &times; 30 m</strong> se colocan <strong>dos piscinas cuadradas de 10 m de lado</strong> cada una. Calcula el área libre exterior:</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Naturales": armarGuiaCompleta({
                    asignatura: "Ciencias Naturales",
                    objetivo: "Explicar el ciclo de vida del camarón, sus requerimientos físico-químicos de hábitat y el impacto ecológico de la actividad acuícola en los manglares.",
                    preguntaCentral: "¿Qué condiciones biológicas y ambientales requiere el camarón para desarrollarse y cómo prevenir la alteración del ecosistema de manglar?",
                    materiales: "Guía impresa, lápices de colores y esquema de ciclo biológico.",
                    previos: [
                        "¿Qué etapas de crecimiento creen que atraviesa un camarón desde que nace del huevo?",
                        "¿Qué animales y plantas viven entre las raíces de los manglares?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Ciclo biológico:</strong> El camarón atraviesa cinco etapas principales: huevo, nauplio (larva inicial), zoea, mysis y postlarva/adulto. En los laboratorios larvarios se controla la temperatura (28 °C a 30 °C) y la salinidad del agua.</p>
                        <p><strong>Apartado 2. Función ecológica del manglar:</strong> Los manglares actúan como biofiltros naturales que depuran el agua, retienen sedimentos y sirven de refugio para peces, moluscos y aves costeras.</p>
                    `,
                    glosario: [
                        { term: "Salinidad", def: "Concentración de sales minerales disueltas en un cuerpo de agua." },
                        { term: "Biofiltro", def: "Ecosistema capaz de retener contaminantes y exceso de nutrientes de forma natural." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuál es la primera fase larvaria tras eclosionar el huevo del camarón?", opciones: ["A) Adulto", "B) Nauplio", "C) Juvenil", "D) Pupa"] },
                        { enunciado: "2. (Inferencial) ¿Qué sucedería en el estuario si desaparecieran los manglares que rodean las piscinas?", opciones: ["A) Aumentaría la filtración natural", "B) Se perdería el biofiltro natural y el refugio de especies", "C) Bajaría la temperatura del mar", "D) No habría ningún efecto"] }
                    ],
                    inferencial: "¿Por qué el control del oxígeno disuelto y la temperatura es indispensable para evitar enfermedades en los estanques?",
                    fuenteB: "Monitoreo ambiental costero: Las granjas que mantienen franjas de reforestación de mangle rojo y recirculación de agua reducen en un 40% la descarga de materia orgánica al estuario.",
                    criteriosComparacion: ["Rol del manglar", "Manejo del agua", "Efecto en la biodiversidad"],
                    pensamientoCritico: "Redacta una conclusión científica justificando por qué la reforestación del manglar beneficia tanto al ecosistema como a la propia producción camaronera.",
                    rolesEquipo: [
                        { rol: "Biólogo/a de Ciclo Vital", tarea: "Describe las etapas de desarrollo del camarón." },
                        { rol: "Analista de Hábitat", tarea: "Registra los parámetros de temperatura y salinidad." },
                        { rol: "Auditor/a Ecológico/a", tarea: "Compara las fuentes sobre el impacto en el manglar." },
                        { rol: "Sintetizador/a Científico/a", tarea: "Redacta las medidas de prevención para la Fase 2." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Esquema y explicación causal:</strong> Dibuja las 5 etapas del ciclo de vida del camarón y escribe debajo dos medidas concretas de prevención ambiental:</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Sociales": armarGuiaCompleta({
                    asignatura: "Estudios Sociales",
                    objetivo: "Analizar el desarrollo histórico y territorial de la actividad camaronera en la Costa ecuatoriana, identificando causas, consecuencias y actores sociales.",
                    preguntaCentral: "¿Cómo transformó el auge camaronero desde los años 60 el territorio, el empleo y las comunidades de la Costa ecuatoriana?",
                    materiales: "Guía impresa y mapa político-físico del Ecuador.",
                    previos: [
                        "¿Qué actividades económicas tradicionales existían en la Costa antes del auge camaronero?",
                        "¿Qué cambios ocurren en un pueblo cuando llega una industria exportadora?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Transformación territorial (1960-actualidad):</strong> El cultivo de camarón inició en Santa Rosa (El Oro) a finales de los años 60 aprovechando salitrales naturales. Durante los años 70 y 80 se expandió hacia el golfo de Guayaquil y Manabí, convirtiendo zonas costeras en polos agroexportadores.</p>
                        <p><strong>Apartado 2. Actores y perspectivas:</strong> Mientras el sector exportador destaca la generación de divisas y empleo formal, las comunidades recolectoras ancestrales (concheros y cangrejeros) señalan la necesidad de garantizar el libre acceso a los manglares.</p>
                    `,
                    glosario: [
                        { term: "Divisas", def: "Moneda extranjera que ingresa al país producto de las exportaciones." },
                        { term: "Recolección ancestral", def: "Oficio tradicional de comunidades costeras que capturan conchas y cangrejos en el manglar." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿En qué provincia ecuatoriana se originaron los primeros estanques camaroneros a finales de los años 60?", opciones: ["A) Esmeraldas", "B) El Oro", "C) Carchi", "D) Sucumbíos"] },
                        { enunciado: "2. (Inferencial) ¿Por qué existen distintas perspectivas entre exportadores y recolectores tradicionales?", opciones: ["A) Porque usan distintos idiomas", "B) Porque compiten por el uso y conservación del espacio costero", "C) Porque no trabajan en la misma región
