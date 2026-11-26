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
                        <p><strong>2. Área del criadero:</strong> Calcula el área total de un criadero rectangular de <strong>60 m de largo por 30 m de ancho</strong> (A = b × h):</p>
                        <div class="math-grid-box"></div>
                    ` : `
                        <p><strong>1. Media aritmética de exportaciones (2017 - 2022):</strong> Suma las exportaciones de los 6 años y divide para 6. Explica qué representa ese promedio:</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Decimales en alimentación:</strong> Cada camarón consume <strong>0,15 g</strong> al día. Si hay <strong>12.350 camarones</strong>, ¿cuántos gramos se necesitan al día y cuánto cuestan a <strong>$0,02</strong> por gramo?</p>
                        <div class="math-grid-box"></div>
                        <p><strong>3. Área libre del criadero:</strong> En el terreno rectangular de <strong>60 m × 30 m</strong> se colocan <strong>dos piscinas cuadradas de 10 m de lado</strong> cada una. Calcula el área libre exterior:</p>
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
                        { enunciado: "2. (Inferencial) ¿Por qué existen distintas perspectivas entre exportadores y recolectores tradicionales?", opciones: ["A) Porque usan distintos idiomas", "B) Porque compiten por el uso y conservación del espacio costero", "C) Porque no trabajan en la misma región", "D) Porque no existe comercio"] }
                    ],
                    inferencial: "¿Qué relación existe entre la ubicación geográfica del golfo de Guayas y el liderazgo exportador de esa provincia?",
                    fuenteB: "Testimonio de asociaciones de cangrejeros del Golfo de Guayaquil: Los acuerdos de uso sustentable y custodia de manglar permiten que las comunidades protejan el ecosistema y mantengan su sustento familiar.",
                    criteriosComparacion: ["Perspectiva económica nacional", "Perspectiva comunitaria local", "Acuerdo de convivencia territorial"],
                    pensamientoCritico: "Elabora un juicio histórico-social fundamentado: explica dos causas de la expansión camaronera desde los años 60 y dos consecuencias en las comunidades costeras, proponiendo cómo conciliar ambas perspectivas.",
                    rolesEquipo: [
                        { rol: "Cartógrafo/a Regional", tarea: "Identifica provincias, puertos y zonas de estuario." },
                        { rol: "Historiador/a de Procesos", tarea: "Ordena los cambios ocurridos desde los años 60." },
                        { rol: "Analista de Perspectivas", tarea: "Contrasta los puntos de vista de exportadores y recolectores." },
                        { rol: "Redactor/a de Conclusiones", tarea: "Formula el juicio histórico con causas y consecuencias." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Línea de tiempo y mapa conceptual:</strong> Completa tres hitos de la evolución camaronera (1968 → 1985 → Actualidad) y señala qué provincias deben aparecer en el mapa de la Fase 2:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Educación Cultural y Artística": armarGuiaCompleta({
                    asignatura: "Educación Cultural y Artística",
                    objetivo: "Investigar referentes visuales de la cultura costera y diseñar bocetos fundamentados para la representación tridimensional del estuario.",
                    preguntaCentral: "¿Cómo representar mediante texturas, colores y simbología visual la relación entre la cultura costera y el ecosistema de manglar?",
                    materiales: "Guía impresa, lápiz HB, lápices de colores y regla.",
                    previos: [
                        "¿Qué colores y texturas predominan en un paisaje de manglar y estuario?",
                        "¿Qué materiales reciclados permiten imitar raíces de mangle y agua?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Estética del litoral y artesanía sostenible:</strong> Los artistas y artesanos de la Costa ecuatoriana emplean fibras naturales, conchas, madera balsa y pigmentos térreos y aguamarina para representar la vida marítima y estuarina.</p>
                    `,
                    glosario: [
                        { term: "Boceto fundamentado", def: "Dibujo previo que justifica proporciones, paleta cromática y materiales según la investigación." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué materiales tradicionales destacan en la artesanía costera?", opciones: ["A) Lana de borrego", "B) Madera balsa, fibras naturales y conchas", "C) Piedra volcánica andina", "D) Mármol"] }
                    ],
                    inferencial: "¿Por qué es importante planificar la escala y leyenda visual antes de construir una maqueta?",
                    fuenteB: "Guía de diseño museográfico escolar: Una maqueta didáctica requiere contraste cromático entre zonas de agua, vegetación y estructuras productivas para facilitar su lectura visual.",
                    criteriosComparacion: ["Paleta cromática", "Materiales sugeridos", "Claridad comunicativa"],
                    pensamientoCritico: "Justifica por qué el uso de materiales reutilizables en tu diseño artístico refuerza el mensaje ecológico de la investigación.",
                    rolesEquipo: [
                        { rol: "Investigador/a Visual", tarea: "Define la paleta de colores y texturas del estuario." },
                        { rol: "Diseñador/a de Iconografía", tarea: "Crea los símbolos de leyenda para el plano." },
                        { rol: "Bocetista Principal", tarea: "Traza el boceto a escala con cotas de medida." },
                        { rol: "Gestor/a de Materiales", tarea: "Selecciona materiales reciclados y seguros." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Boceto fundamentado a escala:</strong> Dibuja la vista superior de la maqueta indicando colores, texturas y materiales reutilizables:</p>
                        <div class="math-grid-box"></div>
                    `
                })
            },
            fase2: {
                formato: "Maqueta Topográfica del Criadero Sostenible (60 × 40 cm)",
                medidas: "Base rígida de 60 cm × 40 cm (Escala 1:100). Altura máxima: 15 cm.",
                bocetoSVG: `<svg width="240" height="105" viewBox="0 0 240 105"><rect x="10" y="10" width="220" height="85" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><rect x="20" y="20" width="55" height="32" fill="#bae6fd" stroke="#0369a1"/><text x="47" y="39" font-size="8" text-anchor="middle">Piscina 1</text><rect x="85" y="20" width="55" height="32" fill="#bae6fd" stroke="#0369a1"/><text x="112" y="39" font-size="8" text-anchor="middle">Piscina 2</text><path d="M 10 68 Q 120 56 230 68 L 230 95 L 10 95 Z" fill="#0d9488"/><text x="120" y="85" font-size="9" text-anchor="middle" fill="white" font-weight="bold">Franja de Manglar (60 × 40 cm)</text></svg>`,
                instrucciones: "Integrar los hallazgos de la Fase 1 (datos estadísticos, superficie libre y franja de manglar protegido)."
            },
            fase3: {
                guion: "«Presentamos los hallazgos del Grupo A sobre la Región Costa, sustentando con datos reales cómo equilibrar la producción acuícola y la protección del manglar...»",
                dinamica: "Exposición de evidencias investigadas y demostración sobre la maqueta."
            }
        },

        // ====================================================================
        // GRUPO B: REGIÓN SIERRA (LAS MÁSCARAS DE TIGUA)
        // ====================================================================
        {
            letra: "Grupo B",
            nombreCreativo: "Arte Ancestral, Geometría y Cosmovisión en Tigua (Región Sierra)",
            enfoque: "Región Interandina o Sierra",
            productoFinal: "Máscara de Tigua en Relieve Geométrico y Ficha Cultural",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: "Interpretar textos culturales sobre las máscaras de Tigua, contrastar fuentes sobre su tradición y producir un relato fundamentado en la cosmovisión andina.",
                    preguntaCentral: "¿De qué manera las máscaras de Tigua comunican la cosmovisión andina, la relación con la naturaleza y la memoria cultural de Cotopaxi?",
                    materiales: "Guía impresa, lápiz y resaltadores.",
                    previos: [
                        "¿Qué celebraciones tradicionales de la Sierra ecuatoriana conocen donde se utilicen danzas y máscaras?",
                        "¿Qué animales de los Andes (como el cóndor o el puma) suelen aparecer en las artesanías ecuatorianas?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Origen en Tigua (Cotopaxi):</strong> Las máscaras de Tigua son expresiones artísticas originarias de las comunidades indígenas de la parroquia Tigua, en la provincia de Cotopaxi. Se distinguen por sus colores vibrantes y la representación de animales sagrados (cóndor, puma, lobo de páramo, serpiente) y personajes míticos.</p>
                        <p><strong>Apartado 2. Función ritual y transmisión:</strong> Se emplean en festividades vinculadas al ciclo agrícola como el <em>Inti Raymi</em> (Fiesta del Sol) y celebraciones comunitarias. Los artesanos tallan madera blanda o moldean papel maché y transmiten sus técnicas de padres a hijos.</p>
                    `,
                    glosario: [
                        { term: "Cosmovisión", def: "Manera de ver e interpretar el mundo, la naturaleza y la espiritualidad propia de una cultura." },
                        { term: "Inti Raymi", def: "Festividad andina del solsticio de verano dedicada a agradecer al Sol y a la tierra por las cosechas." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿En qué provincia ecuatoriana se ubica la parroquia Tigua?", opciones: ["A) Imbabura", "B) Cotopaxi", "C) Chimborazo", "D) Azuay"] },
                        { enunciado: "2. (Literal) ¿En qué festividad agrícola se utilizan principalmente estas máscaras?", opciones: ["A) Inti Raymi", "B) Fundación de Guayaquil", "C) Rodeo Montubio", "D) Fiesta de la Chonta"] },
                        { enunciado: "3. (Inferencial) ¿Por qué los artesanos representan animales como el cóndor o el puma en las máscaras?", opciones: ["A) Porque son mascotas domésticas", "B) Porque simbolizan fuerzas de la naturaleza y espiritualidad andina", "C) Porque son fáciles de dibujar", "D) Porque lo exige una ley"] }
                    ],
                    inferencial: "¿Qué ocurriría con el significado cultural de las máscaras si se fabricaran en serie con plástico sin conocer su simbolismo?",
                    fuenteB: "Entrevista a maestros artesanos de Tigua (2023): Antes de tallar la madera de pino o pucará, el artesano planifica los patrones geométricos del rostro porque cada línea representa las montañas, los surcos de cultivo y el equilibrio comunitario.",
                    criteriosComparacion: ["Materiales y técnica", "Significado de los diseños", "Transmisión del saber"],
                    pensamientoCritico: "Redacta un juicio fundamentado explicando por qué las máscaras de Tigua constituyen un lenguaje cultural vivo y no un simple adorno.",
                    rolesEquipo: [
                        { rol: "Lector/a Cultural", tarea: "Dirige la lectura sobre Tigua e Inti Raymi." },
                        { rol: "Analista de Comprensión", tarea: "Coordina las respuestas literales e inferenciales." },
                        { rol: "Contrastador/a de Fuentes", tarea: "Compara el texto base con el testimonio artesanal." },
                        { rol: "Narrador/a Andino/a", tarea: "Redacta el relato fundamentado de aplicación." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Relato cultural fundamentado:</strong> Escribe una leyenda breve protagonizada por uno de los animales representados en Tigua (cóndor, puma o lobo) durante el Inti Raymi, integrando 2 términos del glosario:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Matemática": armarGuiaCompleta({
                    asignatura: "Matemática",
                    objetivo: "Comparar presupuestos de materiales, calcular el promedio de tiempos de elaboración artesanal y determinar áreas cuadradas, circulares y porcentajes.",
                    preguntaCentral: "¿Cómo aplicar presupuestos comparativos, promedios estadísticos y cálculo de áreas geométricas en el diseño de una máscara de Tigua?",
                    materiales: "Guía impresa, regla, compás y calculadora (si está autorizada como apoyo).",
                    previos: [
                        "¿Cómo comparamos dos presupuestos para elegir la opción más conveniente sin perder calidad?",
                        "¿Qué fórmulas permiten calcular el área de un cuadrado y el área de un círculo?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Tiempos de elaboración artesanal:</strong> Cinco artesanos registraron los días empleados en tallar y pintar una máscara: María (10,5 días), Carlos (20,8 días), Ana (18,2 días), Pablo (27,8 días) y Sofía (16,5 días).</p>
                        <p><strong>Apartado 2. Dimensiones geométricas del diseño:</strong> Una máscara base cuadrada mide <strong>12,5 cm de lado</strong> y lleva dos ojos circulares idénticos de <strong>2,8 cm de radio</strong> cada uno.</p>
                    `,
                    glosario: [
                        { term: "Presupuesto comparativo", def: "Tabla que contrasta precios unitarios y totales de distintos proveedores." },
                        { term: "Radio (r)", def: "Segmento que une el centro de un círculo con cualquier punto de su circunferencia." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Quién tardó menos días en completar su máscara?", opciones: ["A) Carlos", "B) María (10,5 días)", "C) Pablo", "D) Ana"] },
                        { enunciado: "2. (Inferencial) Si se pinta el 75% del área de la base cuadrada, ¿qué porcentaje queda sin pintar?", opciones: ["A) 15%", "B) 25%", "C) 50%", "D) 75%"] }
                    ],
                    inferencial: "¿Por qué existe diferencia en los días de elaboración entre María (10,5 días) y Pablo (27,8 días)?",
                    fuenteB: "Cotización de insumos escolares: Distribuidor 1 (Base madera $3,50; pigmentos $4,80; pinceles $2,25) vs. Distribuidor 2 (Base madera $2,90; pigmentos $5,20; pinceles $1,95).",
                    criteriosComparacion: ["Costo total por distribuidor", "Rubro más económico", "Diferencia neta en dólares"],
                    pensamientoCritico: "Con los resultados obtenidos, argumenta cuál distribuidor conviene elegir y cuánto dinero ahorra el equipo.",
                    rolesEquipo: [
                        { rol: "Cotizador/a de Insumos", tarea: "Completa la tabla comparativa de distribuidores." },
                        { rol: "Estadístico/a de Producción", tarea: "Calcula la media aritmética de los 5 artesanos." },
                        { rol: "Geómetra de Diseño", tarea: "Calcula áreas cuadrada, circular y porcentaje sin pintar." },
                        { rol: "Verificador/a de Resultados", tarea: "Revisa procedimientos y unidades (cm²)." }
                    ],
                    aplicacionHtml: `
                        <table class="work-table">
                            <thead><tr><th>Material</th><th>Distribuidor 1</th><th>Distribuidor 2</th><th>Diferencia</th></tr></thead>
                            <tbody>
                                <tr><td>Base de madera / cartón</td><td>$ 3,50</td><td>$ 2,90</td><td></td></tr>
                                <tr><td>Pigmentos / pinturas</td><td>$ 4,80</td><td>$ 5,20</td><td></td></tr>
                                <tr><td>Pinceles finos y lija</td><td>$ 2,25</td><td>$ 1,95</td><td></td></tr>
                                <tr><td><strong>TOTAL ($)</strong></td><td></td><td></td><td></td></tr>
                            </tbody>
                        </table>
                        <p><strong>1. Tiempo promedio de los 5 artesanos:</strong> Calcula la media aritmética:</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Geometría de la máscara:</strong> a) Calcula el área de la base cuadrada de <strong>12,5 cm de lado</strong> y cuántos cm² quedan sin pintar si se pinta el <strong>75%</strong>. b) Calcula el área de un ojo circular de <strong>2,8 cm de radio</strong> (π ≈ 3,14):</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Naturales": armarGuiaCompleta({
                    asignatura: "Ciencias Naturales",
                    objetivo: "Analizar los recursos forestales de la Sierra, el uso de tintes naturales frente a sintéticos y las medidas de prevención contra la deforestación.",
                    preguntaCentral: "¿Cómo aprovechar la madera y los tintes naturales de la Sierra ecuatoriana sin contribuir a la deforestación?",
                    materiales: "Guía impresa y muestras o imágenes de plantas tintóreas.",
                    previos: ["¿De qué plantas o alimentos se pueden obtener colores naturales?", "¿Qué ocurre con el suelo de las montañas cuando se talan los árboles?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Madera y tintes locales:</strong> En la Sierra se emplean maderas blandas como el pino o pucará y tintes obtenidos de plantas como el nogal (café), la chilca (verde) o la cochinilla (rojo), evitando químicos contaminantes.</p>
                        <p><strong>Apartado 2. Prevención de la deforestación:</strong> La tala indiscriminada provoca erosión del suelo y pérdida de fuentes de agua en los páramos y valles interandinos.</p>
                    `,
                    glosario: [
                        { term: "Tinte natural", def: "Pigmento extraído de plantas, insectos o minerales sin procesos petroquímicos." },
                        { term: "Erosión", def: "Desgaste y pérdida de la capa fértil del suelo por acción del agua o el viento." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué planta andina permite obtener tonalidades verdes naturales?", opciones: ["A) Chilca", "B) Mangle", "C) Cacao", "D) Palma"] },
                        { enunciado: "2. (Inferencial) ¿Qué ventaja ambiental tiene un tinte natural sobre uno sintético?", opciones: ["A) Es biodegradable y no contamina el agua al lavarse", "B) Dura menos", "C) Es más tóxico", "D) Requiere petróleo"] }
                    ],
                    inferencial: "¿Por qué la reforestación con especies nativas protege las reservas de agua de la Sierra?",
                    fuenteB: "Programa de manejo forestal andino: Sustituir maderas nativas en peligro por madera certificada de plantaciones manejadas y cartón reciclado reduce la presión sobre los bosques andinos.",
                    criteriosComparacion: ["Recurso utilizado", "Impacto en el suelo y agua", "Alternativa sostenible"],
                    pensamientoCritico: "Propón dos medidas concretas para disminuir el impacto ambiental de la deforestación en la Sierra ecuatoriana fundamentadas en las fuentes.",
                    rolesEquipo: [
                        { rol: "Botánico/a Andino/a", tarea: "Identifica árboles y plantas tintóreas." },
                        { rol: "Analista Ambiental", tarea: "Explica los efectos de la deforestación." },
                        { rol: "Contrastador/a de Recursos", tarea: "Compara tintes naturales vs. sintéticos." },
                        { rol: "Redactor/a de Prevención", tarea: "Formula las medidas de conservación." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Cuadro de pigmentos y prevención:</strong> Completa 2 fuentes de tintes naturales y explica qué material sostenible usará tu equipo en la Fase 2:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Ciencias Sociales": armarGuiaCompleta({
                    asignatura: "Estudios Sociales",
                    objetivo: "Comprender el origen histórico y comunitario de las tradiciones festivas de la Sierra ecuatoriana y su permanencia en el tiempo.",
                    preguntaCentral: "¿Por qué festividades como el Inti Raymi y el arte de Tigua han permanecido vigentes a lo largo de la historia andina?",
                    materiales: "Guía impresa y mapa de la región Interandina.",
                    previos: ["¿Qué significa agradecer a la tierra por las cosechas en los pueblos andinos?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Continuidad histórica:</strong> Desde épocas prehispánicas, los pueblos andinos celebran los solsticios y equinoccios vinculando la astronomía, la agricultura y el arte comunitario.</p>
                    `,
                    glosario: [
                        { term: "Solsticio", def: "Momento del año en que el Sol alcanza su mayor o menor altura aparente en el cielo." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Con qué actividad productiva se vincula históricamente el Inti Raymi?", opciones: ["A) Pesca industrial", "B) Ciclo agrícola y cosechas", "C) Minería", "D) Navegación"] }
                    ],
                    inferencial: "¿Cómo logra una comunidad mantener sus tradiciones vivas mientras adapta sus artesanías al comercio actual?",
                    fuenteB: "Registro cultural de Cotopaxi: Las escuelas comunitarias y talleres familiares de Tigua enseñan pintura y tallado a niños y jóvenes para fortalecer su identidad.",
                    criteriosComparacion: ["Práctica ancestral", "Cambio o adaptación actual", "Valor identitario"],
                    pensamientoCritico: "Explica una causa histórica y una consecuencia social de la transmisión intergeneracional del arte de Tigua.",
                    rolesEquipo: [
                        { rol: "Historiador/a Cultural", tarea: "Contextualiza el Inti Raymi." },
                        { rol: "Analista Comunitario/a", tarea: "Identifica el rol de los talleres familiares." },
                        { rol: "Contrastador/a Histórico/a", tarea: "Compara tradición y actualidad." },
                        { rol: "Sintetizador/a Social", tarea: "Redacta las conclusiones para Fase 2." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Síntesis histórica:</strong> Explica en 3 líneas la relación entre el calendario agrícola andino y las máscaras de Tigua:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Educación Cultural y Artística": armarGuiaCompleta({
                    asignatura: "Educación Cultural y Artística",
                    objetivo: "Analizar la simetría, el cromatismo y los patrones geométricos de Tigua para elaborar un boceto fundamentado.",
                    preguntaCentral: "¿Cómo estructurar simétricamente los rasgos animales y patrones geométricos característicos de una máscara de Tigua?",
                    materiales: "Guía impresa, compás, regla y colores.",
                    previos: ["¿Qué es un eje de simetría en un rostro o máscara?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Composición visual en Tigua:</strong> Las máscaras combinan ejes de simetría bilateral con contrastes cromáticos cálidos (rojo, amarillo, naranja) y fríos (azul, verde).</p>
                    `,
                    glosario: [
                        { term: "Simetría bilateral", def: "Correspondencia exacta en forma, tamaño y posición de las partes a ambos lados de un eje central." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué tipo de simetría organiza los ojos y rasgos principales de la máscara?", opciones: ["A) Asimetría total", "B) Simetría bilateral", "C) Espiral", "D) Aleatoria"] }
                    ],
                    inferencial: "¿Qué efecto visual producen los colores vibrantes sobre un fondo oscuro o cálido?",
                    fuenteB: "Ficha técnica de taller: El uso de pinceles finos permite delinear plumas, escamas y montañas en relieve.",
                    criteriosComparacion: ["Uso del color", "Geometría", "Relieve"],
                    pensamientoCritico: "Justifica la elección de colores y figuras geométricas de tu boceto según el animal andino elegido.",
                    rolesEquipo: [
                        { rol: "Analista Cromático", tarea: "Define la paleta de colores vibrantes." },
                        { rol: "Trazador/a de Simetría", tarea: "Marca los ejes geométricos." },
                        { rol: "Bocetista Principal", tarea: "Dibuja el diseño de la máscara." },
                        { rol: "Curador/a de Ficha", tarea: "Redacta la explicación artística." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Boceto simétrico de la máscara:</strong> Traza el eje vertical y dibuja tu propuesta de máscara de Tigua:</p>
                        <div class="math-grid-box"></div>
                    `
                })
            },
            fase2: {
                formato: "Máscara Tradicional en Relieve Geométrico (25 × 25 cm)",
                medidas: "Base de 25 cm × 25 cm (escala 2:1). Relieve: 8 cm.",
                bocetoSVG: `<svg width="240" height="105" viewBox="0 0 240 105"><rect x="75" y="8" width="90" height="90" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/><circle cx="102" cy="40" r="10" fill="#fff" stroke="#b45309" stroke-width="2"/><circle cx="138" cy="40" r="10" fill="#fff" stroke="#b45309" stroke-width="2"/><polygon points="120,46 112,66 128,66" fill="#dc2626"/><path d="M 98 78 Q 120 90 142 78" fill="none" stroke="#15803d" stroke-width="3"/></svg>`,
                instrucciones: "Construir la máscara aplicando las medidas geométricas y los colores investigados."
            },
            fase3: {
                guion: "«Presentamos los hallazgos del Grupo B sobre la Región Sierra y las Máscaras de Tigua, explicando su simbolismo cultural y cálculos geométricos...»",
                dinamica: "Exposición de la máscara en relieve y lectura de conclusiones."
            }
        },

        // ====================================================================
        // GRUPO C: REGIÓN AMAZÓNICA (UÑA DE GATO Y BIODIVERSIDAD)
        // ====================================================================
        {
            letra: "Grupo C",
            nombreCreativo: "Saberes Ancestrales, Botánica y Cálculos en la Selva (Región Amazonía)",
            enfoque: "Región Amazónica u Oriente",
            productoFinal: "Herbario Técnico Tridimensional y Ficha Etnobotánica",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: "Comprender textos expositivos sobre la biodiversidad amazónica y los saberes ancestrales, contrastar información y redactar textos informativos con rigor.",
                    preguntaCentral: "¿Cómo protegen y transmiten los pueblos originarios de la Amazonía ecuatoriana los conocimientos sobre plantas medicinales como la uña de gato?",
                    materiales: "Guía impresa, lápiz y resaltadores.",
                    previos: [
                        "¿Qué plantas medicinales utilizan en sus hogares o comunidades y para qué sirven?",
                        "¿Qué nacionalidades indígenas de la Amazonía ecuatoriana conocen?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Etnobotánica amazónica:</strong> La Amazonía ecuatoriana alberga una de las mayores biodiversidades del planeta. Nacionalidades como la Kichwa, Shuar y Waorani han transmitido por generaciones el conocimiento sobre plantas medicinales como la <em>uña de gato</em> (<em>Uncaria tomentosa</em>), una liana trepadora de espinas curvas utilizada tradicionalmente por sus propiedades antiinflamatorias.</p>
                        <p><strong>Apartado 2. Conservación del saber y del bosque:</strong> La recolección responsable corta únicamente segmentos de la liana madura sin arrancar la raíz, permitiendo que la planta vuelva a brotar y evitando la deforestación.</p>
                    `,
                    glosario: [
                        { term: "Etnobotánica", def: "Ciencia que estudia la relación tradicional entre los grupos humanos y las plantas de su entorno." },
                        { term: "Liana trepadora", def: "Planta de tallo largo y leñoso que se apoya en árboles altos para alcanzar la luz del dosel." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Por qué recibe su nombre común la planta Uncaria tomentosa?", opciones: ["A) Por el color de sus flores", "B) Por sus espinas curvas semejantes a uñas de gato", "C) Por el tamaño de sus semillas", "D) Por el olor de su raíz"] },
                        { enunciado: "2. (Inferencial) ¿Qué diferencia existe entre cortar un segmento de liana madura y arrancar la raíz completa?", opciones: ["A) Ninguna", "B) Cortar la liana permite la regeneración natural sin matar la planta", "C) Arrancar la raíz produce más hojas", "D) Cortar la liana seca el suelo"] }
                    ],
                    inferencial: "¿Por qué la pérdida de lenguas y tradiciones orales amazónicas pondría también en riesgo el conocimiento médico sobre la selva?",
                    fuenteB: "Boletín de investigación fitoterapéutica (Ecuador): Los estudios científicos confirman compuestos bioactivos en la corteza de Uncaria tomentosa, pero advierten que la sobreexplotación comercial sin cultivo controlado amenaza las poblaciones silvestres.",
                    criteriosComparacion: ["Valor reconocido de la planta", "Riesgo identificado", "Práctica de cuidado sugerida"],
                    pensamientoCritico: "Redacta una conclusión fundamentada en las Fuentes A y B sobre por qué el conocimiento científico moderno necesita dialogar con los saberes ancestrales amazónicos.",
                    rolesEquipo: [
                        { rol: "Lector/a de Etnobotánica", tarea: "Lee los apartados y explica los términos del glosario." },
                        { rol: "Analista de Comprensión", tarea: "Coordina las respuestas literales e inferenciales." },
                        { rol: "Contrastador/a de Fuentes", tarea: "Completa la comparación entre saberes tradicionales y ciencia." },
                        { rol: "Redactor/a de Ficha", tarea: "Escribe el artículo informativo de aplicación." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Artículo divulgativo escolar:</strong> Escribe un texto informativo de 2 párrafos titulado <em>"La farmacia viva de la Amazonía y su cuidado"</em>, empleando las dos palabras del glosario:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Matemática": armarGuiaCompleta({
                    asignatura: "Matemática",
                    objetivo: "Resolver problemas de proporcionalidad, porcentajes, costos de dosificación y áreas circulares aplicadas a la conservación amazónica.",
                    preguntaCentral: "¿Cómo calcular costos de extractos naturales, porcentajes de distribución y áreas circulares de reserva botánica?",
                    materiales: "Guía impresa, compás, regla y calculadora (si consta como apoyo autorizado).",
                    previos: ["¿Cómo calculamos el 25% o el 50% de una cantidad?", "¿Cuál es la fórmula del área del círculo (A = π · r²)?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Datos de recolección y costo:</strong> En una parcela comunitaria se cosechan <strong>125 kg de corteza</strong>. El costo de procesamiento es de <strong>$0,50 por kilogramo</strong> y el precio de venta justa es de <strong>$0,80 por kilogramo</strong>.</p>
                        <p><strong>Apartado 2. Distribución en frascos y área de reserva:</strong> Si 15 litros de extracto se envasan en frascos de 0,25 litros, y el jardín botánico circular tiene un <strong>radio de 4 m</strong>, podemos modelar la producción exacta.</p>
                    `,
                    glosario: [
                        { term: "Ganancia neta", def: "Diferencia obtenida al restar el costo total de producción al ingreso total por ventas." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuántos kilogramos de corteza se cosechan en la parcela comunitaria?", opciones: ["A) 50 kg", "B) 125 kg", "C) 250 kg", "D) 80 kg"] },
                        { enunciado: "2. (Inferencial) Si el costo por kg es $0,50 y la venta es $0,80, ¿cuánto se gana por cada kilogramo vendido?", opciones: ["A) $1,30", "B) $0,30", "C) $0,50", "D) $0,80"] }
                    ],
                    inferencial: "¿Qué ocurre con la ganancia neta si aumenta el costo de transporte en $12,50?",
                    fuenteB: "Registro de distribución comunitaria: De 200 unidades procesadas, el 45% se destina a centros de salud comunitarios, el 35% a comercio justo nacional y el resto a reserva educativa.",
                    criteriosComparacion: ["Datos de producción", "Porcentajes de destino", "Beneficio comunitario"],
                    pensamientoCritico: "Justifica matemáticamente por qué conocer el costo unitario y la ganancia neta permite a una asociación comunitaria fijar precios justos.",
                    rolesEquipo: [
                        { rol: "Calculista de Costos", tarea: "Determina costo total, ingreso y ganancia neta." },
                        { rol: "Analista de Capacidad", tarea: "Calcula cuántos frascos de 0,25 L se llenan con 15 L." },
                        { rol: "Geómetra Circular", tarea: "Calcula el área del jardín botánico circular (r = 4 m)." },
                        { rol: "Analista de Porcentajes", tarea: "Calcula las cantidades exactas de 45%, 35% y 20%." }
                    ],
                    aplicacionHtml: `
                        <p><strong>1. Costo y ganancia neta:</strong> Con <strong>125 kg</strong> (costo $0,50/kg y venta $0,80/kg), calcula: a) Costo total, b) Ingreso por venta y c) Ganancia neta:</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Envasado y porcentaje:</strong> ¿Cuántos frascos de <strong>0,25 L</strong> se obtienen de <strong>15 L</strong>? Además, calcula cuántas unidades equivalen al <strong>45%</strong> de 200 unidades:</p>
                        <div class="math-grid-box"></div>
                        <p><strong>3. Área circular de reserva:</strong> Calcula el área de un jardín botánico circular de <strong>4 m de radio</strong> (π ≈ 3,14):</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Naturales": armarGuiaCompleta({
                    asignatura: "Ciencias Naturales",
                    objetivo: "Identificar las partes anatómicas de la planta, las condiciones climáticas del bosque húmedo tropical y las amenazas de la deforestación.",
                    preguntaCentral: "¿Qué factores abióticos del bosque húmedo tropical permiten el desarrollo de la biodiversidad amazónica y qué ocurre al talar el bosque?",
                    materiales: "Guía impresa y esquema del estrato arbóreo.",
                    previos: ["¿Por qué llueve con tanta frecuencia en la Amazonía ecuatoriana?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Ecosistema del bosque húmedo tropical:</strong> Presenta temperaturas medias entre 24 °C y 28 °C, alta humedad relativa y lluvias abundantes durante todo el año, lo que favorece bosques estratificados con árboles de hasta 40 metros.</p>
                    `,
                    glosario: [
                        { term: "Factores abióticos", def: "Componentes físicos y químicos no vivos de un ecosistema, como temperatura, humedad, luz y suelo." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuál es el rango promedio de temperatura en el bosque húmedo tropical amazónico?", opciones: ["A) 5 °C a 10 °C", "B) 24 °C a 28 °C", "C) 38 °C a 42 °C", "D) Menos de 0 °C"] }
                    ],
                    inferencial: "¿Por qué las lianas trepadoras desarrollan tallos largos que suben hasta las copas de los árboles?",
                    fuenteB: "Informe ecológico amazónico: La deforestación fragmenta el hábitat de polinizadores y dispersores de semillas, reduciendo la regeneración natural del bosque.",
                    criteriosComparacion: ["Condiciones originales del bosque", "Alteración por deforestación", "Medida de mitigación"],
                    pensamientoCritico: "Formula una explicación científica sobre las consecuencias de la tala indiscriminada en el ciclo del agua y la biodiversidad amazónica.",
                    rolesEquipo: [
                        { rol: "Climatólogo/a Amazónico/a", tarea: "Describe temperatura y humedad." },
                        { rol: "Botánico/a Estructural", tarea: "Explica las partes de la planta trepadora." },
                        { rol: "Ecólogo/a de Conservación", tarea: "Analiza el impacto de la deforestación." },
                        { rol: "Sintetizador/a", tarea: "Prepara la ficha científica para Fase 2." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Diagrama causal:</strong> Escribe la cadena de efectos que ocurre cuando se tala una hectárea de bosque amazónico (Suelo → Agua → Fauna):</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Ciencias Sociales": armarGuiaCompleta({
                    asignatura: "Estudios Sociales",
                    objetivo: "Reconocer la diversidad de nacionalidades indígenas de la Amazonía ecuatoriana y analizar los conflictos territoriales entre conservación y actividades extractivas.",
                    preguntaCentral: "¿Cómo defienden los pueblos y nacionalidades amazónicas su territorio, su cultura y el equilibrio ambiental en el Ecuador?",
                    materiales: "Guía impresa y mapa de provincias y nacionalidades de la Amazonía.",
                    previos: ["¿En qué provincias se divide la región Amazónica del Ecuador?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Territorio y nacionalidades:</strong> La Amazonía comprende seis provincias (Sucumbíos, Orellana, Napo, Pastaza, Morona Santiago y Zamora Chinchipe) donde habitan nacionalidades como Kichwa, Shuar, Achuar, Waorani, Siona, Secoya, Cofán, Zápara, Shiwiar y Andoa.</p>
                    `,
                    glosario: [
                        { term: "Territorio ancestral", def: "Espacio geográfico históricamente ocupado y cuidado por un pueblo indígena como base de su vida y cultura." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuántas provincias conforman la Región Amazónica del Ecuador?", opciones: ["A) 4", "B) 6", "C) 10", "D) 2"] }
                    ],
                    inferencial: "¿Por qué la Constitución ecuatoriana reconoce los derechos colectivos de los pueblos y nacionalidades indígenas?",
                    fuenteB: "Relato comunitario de Pastaza: Los proyectos de bioemprendimiento y turismo comunitario permiten generar ingresos sin destruir la selva.",
                    criteriosComparacion: ["Actividad extractiva", "Bioemprendimiento comunitario", "Impacto social y territorial"],
                    pensamientoCritico: "Elabora un juicio histórico-territorial comparando los efectos de las actividades extractivas no reguladas frente a los bioemprendimientos comunitarios.",
                    rolesEquipo: [
                        { rol: "Geógrafo/a Provincial", tarea: "Ubica las 6 provincias amazónicas." },
                        { rol: "Analista Cultural", tarea: "Identifica las nacionalidades indígenas." },
                        { rol: "Comparador/a Territorial", tarea: "Contrasta modelos de desarrollo." },
                        { rol: "Redactor/a", tarea: "Consolida conclusiones." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Ficha territorial:</strong> Enumera las 6 provincias amazónicas y menciona dos nacionalidades indígenas junto con una propuesta de desarrollo sostenible:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Educación Cultural y Artística": armarGuiaCompleta({
                    asignatura: "Educación Cultural y Artística",
                    objetivo: "Investigar la simbología y texturas de la flora amazónica para diseñar un herbario técnico ilustrado.",
                    preguntaCentral: "¿Cómo registrar mediante ilustración botánica y composición tridimensional las características de una especie amazónica?",
                    materiales: "Guía impresa, lápices de colores y hojas de boceto.",
                    previos: ["¿Qué detalles debe tener una ilustración científica para que permita reconocer una planta?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Ilustración botánica:</strong> Combina precisión científica y sensibilidad artística al detallar nervaduras de hojas, tallos, espinas y proporciones reales.</p>
                    `,
                    glosario: [
                        { term: "Ilustración botánica", def: "Representación visual detallada de las partes de una planta con fines científicos y educativos." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué elementos detalla una ilustración botánica?", opciones: ["A) Solo el precio", "B) Nervaduras, tallos, espinas y proporciones", "C) Únicamente el cielo", "D) Edificios"] }
                    ],
                    inferencial: "¿Por qué la ilustración botánica sigue siendo útil junto con la fotografía?",
                    fuenteB: "Manual de museografía natural: El contraste de verdes y texturas en relieve ayuda al público a distinguir las partes de la planta.",
                    criteriosComparacion: ["Detalle anatómico", "Uso del color", "Claridad de etiquetas"],
                    pensamientoCritico: "Explica cómo el arte de la ilustración contribuye a valorar y proteger la biodiversidad amazónica.",
                    rolesEquipo: [
                        { rol: "Ilustrador/a Botánico/a", tarea: "Dibuja tallo, hojas y espinas curvas." },
                        { rol: "Diseñador/a de Relieve", tarea: "Define texturas para la Fase 2." },
                        { rol: "Rotulador/a Técnico/a", tarea: "Coloca nombres comunes y científicos." },
                        { rol: "Curador/a", tarea: "Verifica limpieza y composición." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Boceto de ilustración botánica:</strong> Dibuja la liana, hojas opuestas y espinas curvas con sus respectivas etiquetas:</p>
                        <div class="math-grid-box"></div>
                    `
                })
            },
            fase2: {
                formato: "Herbario Técnico Tridimensional (35 × 25 cm)",
                medidas: "Soporte rígido de 35 cm × 25 cm (escala 1:1). Relieve máximo: 5 cm.",
                bocetoSVG: `<svg width="240" height="105" viewBox="0 0 240 105"><rect x="35" y="10" width="170" height="85" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/><path d="M 65 82 Q 115 45 165 24" stroke="#78350f" stroke-width="4" fill="none"/><ellipse cx="102" cy="48" rx="14" ry="7" fill="#16a34a" transform="rotate(-25 102 48)"/><ellipse cx="142" cy="34" rx="14" ry="7" fill="#16a34a" transform="rotate(-25 142 34)"/><path d="M 118 52 Q 126 60 116 64" stroke="#991b1b" stroke-width="2" fill="none"/></svg>`,
                instrucciones: "Representar tallo, hojas, espinas y ficha técnica con los datos calculados en Fase 1."
            },
            fase3: {
                guion: "«Presentamos los hallazgos del Grupo C sobre la Región Amazónica, integrando saberes ancestrales, análisis económico y conservación del bosque...»",
                dinamica: "Exposición del herbario técnico y sustentación con evidencias."
            }
        },

        // ====================================================================
        // GRUPO D: REGIÓN INSULAR / GALÁPAGOS (TORTUGAS GIGANTES Y TURISMO)
        // ====================================================================
        {
            letra: "Grupo D",
            nombreCreativo: "Evolución, Conservación y Capacidad de Carga en Galápagos (Región Insular)",
            enfoque: "Región Insular o Galápagos",
            productoFinal: "Diorama del Hábitat Insular y Propuesta de Turismo Sostenible",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: "Analizar textos expositivos y argumentativos sobre la conservación de las islas Galápagos y redactar una propuesta fundamentada de turismo responsable.",
                    preguntaCentral: "¿Cómo conciliar la conservación de especies únicas en Galápagos con la actividad turística que sustenta a la población local?",
                    materiales: "Guía impresa, lápiz y resaltadores.",
                    previos: [
                        "¿Por qué las islas Galápagos son reconocidas mundialmente como Patrimonio Natural de la Humanidad?",
                        "¿Qué reglas debe cumplir un visitante al recorrer un parque nacional?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Laboratorio natural de evolución:</strong> El archipiélago de Galápagos, situado a unos 1.000 km de la costa continental ecuatoriana, alberga especies endémicas únicas como las tortugas gigantes (<em>Chelonoidis</em>), iguanas marinas y pinzones que inspiraron la teoría de la evolución por selección natural.</p>
                        <p><strong>Apartado 2. Retos de conservación:</strong> La introducción de especies invasoras (ratas, cabras, plantas foráneas) y la presión del turismo masivo exigen estrictos controles de bioseguridad y límites de visitantes por sendero.</p>
                    `,
                    glosario: [
                        { term: "Especie endémica", def: "Especie biológica que habita exclusivamente en una región geográfica determinada y en ningún otro lugar." },
                        { term: "Bioseguridad", def: "Conjunto de medidas preventivas destinadas a evitar el ingreso de plagas o especies invasoras." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿A qué distancia aproximada de la costa continental se ubica Galápagos?", opciones: ["A) 100 km", "B) 1.000 km", "C) 5.000 km", "D) 50 km"] },
                        { enunciado: "2. (Inferencial) ¿Por qué el ingreso de una especie invasora es especialmente peligroso en una isla?", opciones: ["A) Porque las especies endémicas evolucionaron sin depredadores ni competencia externa", "B) Porque hace frío", "C) Porque no hay agua", "D) Porque las islas se hunden"] }
                    ],
                    inferencial: "¿Por qué prohibir llevar semillas o alimentos sin control en el equipaje hacia Galápagos protege a las tortugas gigantes?",
                    fuenteB: "Informe de manejo del Parque Nacional Galápagos: El turismo ecológico regulado financia proyectos de crianza en cautiverio y erradicación de especies invasoras, siempre que se respete la capacidad de carga de cada sitio de visita.",
                    criteriosComparacion: ["Importancia ecológica", "Principal amenaza", "Estrategia de regulación"],
                    pensamientoCritico: "Redacta una postura fundamentada con evidencias de ambas fuentes respondiendo: ¿Debe prohibirse el turismo en Galápagos o regularse estrictamente? Sustenta tu juicio.",
                    rolesEquipo: [
                        { rol: "Lector/a de Conservación", tarea: "Dirige la lectura sobre endemismo y bioseguridad." },
                        { rol: "Analista de Comprensión", tarea: "Modera las preguntas literales e inferenciales." },
                        { rol: "Contrastador/a de Fuentes", tarea: "Completa la tabla entre amenaza y regulación turística." },
                        { rol: "Redactor/a de Propuesta", tarea: "Escribe la carta o manifiesto de turismo responsable." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Manifiesto del visitante responsable:</strong> Redacta un texto persuasivo de 2 párrafos dirigido a turistas que llegan a Galápagos, integrando los conceptos de <em>especie endémica</em> y <em>bioseguridad</em>:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Matemática": armarGuiaCompleta({
                    asignatura: "Matemática",
                    objetivo: "Resolver problemas de proporcionalidad, porcentajes de crecimiento poblacional, conversión de unidades y áreas de zonas protegidas en Galápagos.",
                    preguntaCentral: "¿Cómo utilizan los guardaparques y biólogos la proporcionalidad, los porcentajes y las mediciones de superficie para gestionar Galápagos?",
                    materiales: "Guía impresa, regla y calculadora (si está autorizada como apoyo).",
                    previos: ["¿Cómo calculamos un aumento porcentual sobre una población inicial?", "¿Cuántos metros tiene un kilómetro?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Recuperación poblacional:</strong> Gracias a programas de reproducción asistida, una subespecie de tortuga gigante pasó de <strong>400 individuos</strong> a incrementarse en un <strong>35%</strong> en una década.</p>
                        <p><strong>Apartado 2. Capacidad de carga en senderos:</strong> Un sendero de observación tiene una longitud de <strong>2,4 km</strong> y permite grupos máximos de <strong>16 visitantes</strong> por guía cada 45 minutos.</p>
                    `,
                    glosario: [
                        { term: "Capacidad de carga", def: "Número máximo de visitantes que puede soportar un espacio natural sin sufrir deterioro." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuál es el máximo de visitantes por guía en el sendero descrito?", opciones: ["A) 10", "B) 16", "C) 24", "D) 45"] },
                        { enunciado: "2. (Inferencial) Si la longitud del sendero es 2,4 km, ¿a cuántos metros equivale?", opciones: ["A) 240 m", "B) 2.400 m", "C) 24.000 m", "D) 24 m"] }
                    ],
                    inferencial: "¿Por qué es necesario dividir el flujo diario en grupos pequeños de 16 personas en lugar de permitir 160 juntas?",
                    fuenteB: "Estadística de monitoreo insular: De 1.200 nidos monitoreados en la temporada, el 85% eclosionó exitosamente bajo protección.",
                    criteriosComparacion: ["Población o muestra inicial", "Porcentaje de éxito o aumento", "Resultado numérico final"],
                    pensamientoCritico: "Con base en los cálculos realizados, argumenta por qué los datos cuantitativos son indispensables para evaluar si un programa de conservación funciona.",
                    rolesEquipo: [
                        { rol: "Biólogo/a Estadístico/a", tarea: "Calcula el incremento del 35% y la población final." },
                        { rol: "Calculista de Eclosión", tarea: "Determina cuántos nidos representan el 85% de 1.200." },
                        { rol: "Analista de Capacidad", tarea: "Calcula cuántos turistas pasan en 6 turnos de 16 personas." },
                        { rol: "Verificador/a", tarea: "Comprueba conversiones y procedimientos." }
                    ],
                    aplicacionHtml: `
                        <p><strong>1. Crecimiento poblacional:</strong> Una población inicial de <strong>400 tortugas</strong> aumentó en un <strong>35%</strong>. Calcula cuántas tortugas nuevas se sumaron y cuál es el total actual:</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Nidos protegidos y capacidad de carga:</strong> a) Calcula el <strong>85%</strong> de <strong>1.200 nidos</strong>. b) Si pasan <strong>6 grupos diarios de 16 visitantes</strong> cada uno, ¿cuántos turistas recorren el sendero al día?</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Naturales": armarGuiaCompleta({
                    asignatura: "Ciencias Naturales",
                    objetivo: "Explicar las adaptaciones evolutivas de las tortugas gigantes y pinzones de Galápagos y las medidas de erradicación de especies invasoras.",
                    preguntaCentral: "¿Cómo se adaptaron las especies de Galápagos a las condiciones de cada isla y por qué son vulnerables a especies introducidas?",
                    materiales: "Guía impresa y esquema comparativo de caparazones.",
                    previos: ["¿Por qué existen tortugas con caparazón en forma de cúpula y otras en forma de silla de montar?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Adaptación al entorno insular:</strong> En islas húmedas con vegetación baja predominan tortugas de caparazón en cúpula; en islas áridas donde los cactus son altos, evolucionaron tortugas de cuello largo y caparazón en silla de montar.</p>
                    `,
                    glosario: [
                        { term: "Adaptación evolutiva", def: "Característica física o conductual que mejora la supervivencia y reproducción de una especie en su ambiente." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué forma de caparazón tienen las tortugas de islas áridas con cactus altos?", opciones: ["A) Plano", "B) Silla de montar", "C) Triangular", "D) Esférico"] }
                    ],
                    inferencial: "¿Qué ocurriría con las tortugas de islas áridas si una especie invasora como la cabra consumiera todos los cactus?",
                    fuenteB: "Registro científico insular: Las corrientes marinas (Humboldt, Panamá y Cromwell) determinan el clima único del archipiélago.",
                    criteriosComparacion: ["Tipo de isla (húmeda vs. árida)", "Adaptación del caparazón", "Amenaza principal"],
                    pensamientoCritico: "Explica con evidencias cómo la interacción entre clima, vegetación y selección natural originó distintas subespecies en Galápagos.",
                    rolesEquipo: [
                        { rol: "Evolucionista", tarea: "Compara los tipos de caparazón." },
                        { rol: "Oceanógrafo/a", tarea: "Identifica las corrientes marinas." },
                        { rol: "Analista de Bioseguridad", tarea: "Evalúa el riesgo de especies invasoras." },
                        { rol: "Sintetizador/a", tarea: "Redacta las conclusiones para el diorama." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Cuadro comparativo de adaptación:</strong> Contrasta las características de las tortugas de islas húmedas frente a las de islas áridas:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Ciencias Sociales": armarGuiaCompleta({
                    asignatura: "Estudios Sociales",
                    objetivo: "Analizar la evolución histórica de Galápagos desde archipiélago aislado hasta Patrimonio Natural de la Humanidad y provincia con régimen especial.",
                    preguntaCentral: "¿Qué decisiones históricas y legales permitieron proteger el 97% de la superficie terrestre de Galápagos como Parque Nacional?",
                    materiales: "Guía impresa y mapa del archipiélago.",
                    previos: ["¿Por qué Galápagos tiene leyes migratorias y ambientales distintas al resto del país?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Hitos de conservación:</strong> En 1832 Ecuador incorporó oficialmente el archipiélago. En 1959 se creó el Parque Nacional Galápagos protegiendo el 97% del territorio terrestre, y en 1978 la UNESCO lo declaró Patrimonio Natural de la Humanidad.</p>
                    `,
                    glosario: [
                        { term: "Régimen especial", def: "Normativa constitucional específica que prioriza la conservación ambiental sobre el crecimiento urbano descontrolado." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué porcentaje de la superficie terrestre de Galápagos está protegido como Parque Nacional desde 1959?", opciones: ["A) 30%", "B) 50%", "C) 97%", "D) 10%"] }
                    ],
                    inferencial: "¿Qué habría pasado con el archipiélago si en 1959 no se hubiera limitado la urbanización al 3% del territorio?",
                    fuenteB: "Ley Orgánica de Régimen Especial de Galápagos: Regula la residencia, el transporte de carga y las actividades económicas para garantizar la sostenibilidad.",
                    criteriosComparacion: ["Situación antes de 1959", "Cambio tras crear el Parque Nacional", "Consecuencia actual"],
                    pensamientoCritico: "Formula un juicio histórico sobre la importancia de la creación del Parque Nacional Galápagos en 1959 y la declaratoria de la UNESCO en 1978.",
                    rolesEquipo: [
                        { rol: "Historiador/a Insular", tarea: "Ordena los hitos 1832, 1959 y 1978." },
                        { rol: "Cartógrafo/a", tarea: "Identifica las islas principales." },
                        { rol: "Analista Normativo/a", tarea: "Explica el sentido del régimen especial." },
                        { rol: "Sintetizador/a", tarea: "Redacta conclusiones." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Línea de tiempo insular:</strong> Explica el significado de los hitos 1832, 1959 y 1978 para la conservación del Ecuador:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Educación Cultural y Artística": armarGuiaCompleta({
                    asignatura: "Educación Cultural y Artística",
                    objetivo: "Diseñar un diorama tridimensional fundamentado en las texturas volcánicas y fauna endémica de Galápagos.",
                    preguntaCentral: "¿Cómo representar mediante relieve volcánico y escala proporcionada el hábitat de las tortugas gigantes?",
                    materiales: "Guía impresa, lápiz y colores.",
                    previos: ["¿Qué colores y formas caracterizan el paisaje volcánico de Galápagos?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Composición de diorama:</strong> Un diorama integra un fondo pintado en perspectiva con elementos tridimensionales en primer plano (roca volcánica, cactus opuntia y fauna).</p>
                    `,
                    glosario: [
                        { term: "Diorama", def: "Representación tridimensional de una escena natural o histórica dentro de una caja o base escénica." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué elementos combina un diorama?", opciones: ["A) Solo texto", "B) Fondo en perspectiva y elementos tridimensionales en primer plano", "C) Únicamente números", "D) Audio sin imagen"] }
                    ],
                    inferencial: "¿Cómo ayuda la perspectiva en el fondo del diorama a dar sensación de profundidad?",
                    fuenteB: "Guía de modelado ecológico: El uso de papel maché y cartón reciclado permite recrear rocas basálticas y caparazones sin emplear plásticos de un solo uso.",
                    criteriosComparacion: ["Plano de fondo", "Primer plano 3D", "Materiales reciclados"],
                    pensamientoCritico: "Justifica el diseño de tu diorama explicando cómo muestra la relación entre el entorno volcánico y la especie endémica.",
                    rolesEquipo: [
                        { rol: "Escenógrafo/a", tarea: "Diseña el fondo en perspectiva." },
                        { rol: "Modelador/a 3D", tarea: "Planifica rocas volcánicas y tortuga." },
                        { rol: "Rotulador/a", tarea: "Prepara fichas informativas." },
                        { rol: "Coordinador/a de Materiales", tarea: "Organiza insumos reciclados." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Boceto de diorama:</strong> Dibuja el esquema frontal señalando fondo, primer plano y materiales reciclados:</p>
                        <div class="math-grid-box"></div>
                    `
                })
            },
            fase2: {
                formato: "Diorama del Hábitat Insular (45 × 30 cm)",
                medidas: "Caja escénica de 45 cm × 30 cm × 25 cm (escala 1:50).",
                bocetoSVG: `<svg width="240" height="105" viewBox="0 0 240 105"><rect x="25" y="10" width="190" height="85" fill="#fef9c3" stroke="#854d0e" stroke-width="2"/><polygon points="25,75 85,35 145,75" fill="#78716c"/><ellipse cx="155" cy="72" rx="24" ry="14" fill="#3f6212"/><circle cx="183" cy="68" r="6" fill="#4d7c0f"/><text x="120" y="91" font-size="8.5" text-anchor="middle">Hábitat Volcánico y Tortuga Gigante</text></svg>`,
                instrucciones: "Construir el diorama integrando los datos de población, capacidad de carga y adaptaciones investigadas."
            },
            fase3: {
                guion: "«Presentamos los hallazgos del Grupo D sobre la Región Insular de Galápagos, demostrando con cifras cómo la bioseguridad y la capacidad de carga protegen especies únicas...»",
                dinamica: "Sustentación del diorama y debate sobre turismo responsable."
            }
        },

        // ====================================================================
        // GRUPO E: INTEGRACIÓN NACIONAL (CORREDOR DE LOS CUATRO MUNDOS)
        // ====================================================================
        {
            letra: "Grupo E",
            nombreCreativo: "Interdependencia Regional, Comercio Justo y Transporte en Ecuador (4 Regiones)",
            enfoque: "Integración Nacional (Costa, Sierra, Amazonía y Galápagos)",
            productoFinal: "Mapa Interactivo en Relieve de Intercambio Regional y Balance Comercial",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: "Sintetizar información de múltiples regiones del Ecuador, analizar crónicas de intercambio cultural y redactar un reportaje integrador con evidencias.",
                    preguntaCentral: "¿De qué manera el intercambio de productos, saberes y tradiciones entre Costa, Sierra, Amazonía y Galápagos fortalece la identidad del Ecuador?",
                    materiales: "Guía impresa, lápiz y resaltadores.",
                    previos: [
                        "¿Qué alimentos que consumimos diariamente provienen de una región distinta a la nuestra?",
                        "¿Por qué se dice que Ecuador es un país megadiverso y pluricultural?"
                    ],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Complementariedad de los cuatro mundos:</strong> Gracias a la cordillera de los Andes, las corrientes oceánicas y la cuenca amazónica, Ecuador produce en distancias cortas banano, cacao y camarón en la Costa; papas, hortalizas y artesanías en la Sierra; plantas medicinales y frutas exóticas en la Amazonía; y conservación científica en Galápagos.</p>
                        <p><strong>Apartado 2. Diálogo intercultural:</strong> El comercio justo y el respeto entre pueblos montubios, afroecuatorianos, indígenas y mestizos permiten construir bienestar compartido.</p>
                    `,
                    glosario: [
                        { term: "Complementariedad", def: "Relación en la que distintas regiones aportan recursos diferentes que se necesitan mutuamente." },
                        { term: "Comercio justo", def: "Sistema comercial basado en el diálogo, la transparencia y el pago equitativo a los productores." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué factores geográficos explican la diversidad productiva en distancias cortas en Ecuador?", opciones: ["A) El desierto polar", "B) La cordillera de los Andes, corrientes oceánicas y cuenca amazónica", "C) La ausencia de ríos", "D) Un solo piso climático"] },
                        { enunciado: "2. (Inferencial) ¿Por qué una región no puede abastecerse únicamente de sus propios productos sin intercambiar con las demás?", opciones: ["A) Porque cada piso climático produce alimentos y recursos distintos", "B) Porque no existen carreteras", "C) Porque está prohibido cultivar", "D) Porque todas producen exactamente lo mismo"] }
                    ],
                    inferencial: "¿Qué ocurriría con la alimentación en la Costa si se interrumpiera el transporte desde la Sierra, o viceversa?",
                    fuenteB: "Crónica de mercados comunitarios ecuatorianos: Cuando los productores venden directamente en ferias interregionales sin intermediarios abusivos, los agricultores reciben mejores ingresos y las familias acceden a alimentos frescos a precios accesibles.",
                    criteriosComparacion: ["Productos aportados por región", "Papel del transporte e intercambio", "Beneficio del comercio justo"],
                    pensamientoCritico: "Redacta un juicio fundamentado con evidencias explicando por qué la cooperación interregional y el comercio justo son clave para el desarrollo del Ecuador.",
                    rolesEquipo: [
                        { rol: "Lector/a Integrador/a", tarea: "Dirige la lectura sobre complementariedad regional." },
                        { rol: "Analista de Comprensión", tarea: "Coordina las respuestas literales e inferenciales." },
                        { rol: "Contrastador/a de Fuentes", tarea: "Compara el texto base con la crónica de mercados." },
                        { rol: "Periodista Escolar", tarea: "Redacta el reportaje integrador de aplicación." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Reportaje periodístico interregional:</strong> Escribe un reportaje breve titulado <em>"Viaje de los alimentos y saberes por las cuatro regiones del Ecuador"</em>, integrando <em>complementariedad</em> y <em>comercio justo</em>:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Matemática": armarGuiaCompleta({
                    asignatura: "Matemática",
                    objetivo: "Resolver problemas combinados de transporte interregional, promedios de carga, porcentajes de distribución y escalas cartográficas.",
                    preguntaCentral: "¿Cómo calcular tiempos de traslado, costos de transporte por tonelada y distancias reales a partir de un mapa a escala?",
                    materiales: "Guía impresa, regla graduada y calculadora (si está autorizada como apoyo).",
                    previos: ["¿Qué significa una escala 1:1.000.000 en un mapa?", "¿Cómo calculamos el costo total cuando conocemos el costo por tonelada y la distancia?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Logística de transporte interregional:</strong> Un camión transporta <strong>8,5 toneladas</strong> de productos agrícolas desde la Sierra hacia la Costa recorriendo <strong>420 km</strong> a una velocidad promedio de <strong>60 km/h</strong>.</p>
                        <p><strong>Apartado 2. Distribución de carga:</strong> Del total de 8,5 toneladas (8.500 kg), el <strong>40%</strong> corresponde a papas, el <strong>35%</strong> a hortalizas y el <strong>25%</strong> a frutas templadas.</p>
                    `,
                    glosario: [
                        { term: "Escala cartográfica", def: "Relación matemática entre una distancia medida en el mapa y su distancia real en el terreno." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuántos kilogramos equivalen a 8,5 toneladas?", opciones: ["A) 85 kg", "B) 850 kg", "C) 8.500 kg", "D) 85.000 kg"] },
                        { enunciado: "2. (Inferencial) Si se recorren 420 km a 60 km/h constantes, ¿cuántas horas dura el viaje?", opciones: ["A) 5 horas", "B) 6 horas", "C) 7 horas", "D) 8 horas"] }
                    ],
                    inferencial: "¿Por qué calcular correctamente los porcentajes de carga evita sobrepasar el peso máximo permitido en carreteras de montaña?",
                    fuenteB: "Tabla de fletes regionales: El costo de transporte es de $18,50 por cada tonelada trasladada. Si se aplica un descuento del 10% por transporte asociativo, el costo final disminuye.",
                    criteriosComparacion: ["Variable calculada", "Fórmula o procedimiento usado", "Resultado final con unidad"],
                    pensamientoCritico: "Con base en los cálculos realizados, justifica cuánto ahorra una asociación de agricultores al organizar envíos colectivos con descuento del 10%.",
                    rolesEquipo: [
                        { rol: "Calculista de Rutas", tarea: "Determina tiempo de viaje y distancia en mapa." },
                        { rol: "Analista de Carga", tarea: "Calcula los kilogramos de cada porcentaje (40%, 35%, 25%)." },
                        { rol: "Calculista de Fletes", tarea: "Determina costo total y ahorro del 10%." },
                        { rol: "Verificador/a", tarea: "Revisa unidades (kg, horas, $, km)." }
                    ],
                    aplicacionHtml: `
                        <p><strong>1. Distribución de carga en kilogramos:</strong> Convierte <strong>8,5 toneladas</strong> a kilogramos y calcula cuántos kg corresponden a papas (<strong>40%</strong>), hortalizas (<strong>35%</strong>) y frutas (<strong>25%</strong>):</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Costo de flete y ahorro asociativo:</strong> Si el traslado cuesta <strong>$18,50 por tonelada</strong> para las <strong>8,5 toneladas</strong>, calcula el costo total y cuánto se paga si se aplica un <strong>10% de descuento</strong>:</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Naturales": armarGuiaCompleta({
                    asignatura: "Ciencias Naturales",
                    objetivo: "Comparar los pisos climáticos del Ecuador y explicar cómo la altitud y las corrientes marinas determinan la biodiversidad de cada región.",
                    preguntaCentral: "¿Por qué Ecuador posee tantos pisos climáticos y ecosistemas diferentes a pesar de encontrarse en la zona ecuatorial?",
                    materiales: "Guía impresa y perfil altitudinal de los Andes.",
                    previos: ["¿Cómo cambia la temperatura a medida que subimos una montaña?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Pisos climáticos:</strong> La presencia de la cordillera de los Andes modifica el clima según la altitud: cálido (0 - 1.000 m), templado (1.000 - 2.000 m), frío (2.000 - 3.000 m), páramo (3.000 - 4.500 m) y glacial (más de 4.500 m).</p>
                    `,
                    glosario: [
                        { term: "Piso climático", def: "Franja altitudinal con condiciones específicas de temperatura, presión y vegetación." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Entre qué altitudes se ubica el piso climático de páramo en Ecuador?", opciones: ["A) 0 a 1.000 m", "B) 1.000 a 2.000 m", "C) 3.000 a 4.500 m", "D) Más de 5.000 m"] }
                    ],
                    inferencial: "¿Qué papel cumple el páramo como 'esponja de agua' para las ciudades y cultivos ubicados más abajo?",
                    fuenteB: "Informe hidrográfico nacional: Los páramos andinos almacenan agua de lluvia y neblina que alimenta ríos que desembocan tanto en el océano Pacífico como en el río Amazonas.",
                    criteriosComparacion: ["Altitud y clima", "Vegetación característica", "Importancia hídrica"],
                    pensamientoCritico: "Explica con evidencias por qué proteger los páramos andinos garantiza el agua para la agricultura de la Sierra, la Costa y la Amazonía.",
                    rolesEquipo: [
                        { rol: "Climatólogo/a de Pisos", tarea: "Clasifica los 5 pisos altitudinales." },
                        { rol: "Hidrólogo/a", tarea: "Explica el rol del páramo como reserva de agua." },
                        { rol: "Ecólogo/a Comparativo/a", tarea: "Relaciona clima con cultivos." },
                        { rol: "Sintetizador/a", tarea: "Redacta conclusiones." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Perfil altitudinal:</strong> Relaciona cada piso climático con un cultivo o especie representativa del Ecuador:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Ciencias Sociales": armarGuiaCompleta({
                    asignatura: "Estudios Sociales",
                    objetivo: "Analizar la organización regional del Ecuador, la integración histórica mediante vías de comunicación y la diversidad cultural de sus pueblos.",
                    preguntaCentral: "¿Cómo contribuyeron históricamente las vías de comunicación y el intercambio comercial a integrar las regiones del Ecuador?",
                    materiales: "Guía impresa y mapa físico-político del Ecuador.",
                    previos: ["¿Qué importancia tuvo el ferrocarril transandino para unir la Costa y la Sierra?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Integración histórica del territorio:</strong> Durante siglos, las barreras geográficas dificultaron la comunicación entre regiones. Obras como el ferrocarril Guayaquil-Quito (1908) y las redes viales posteriores impulsaron el intercambio comercial y cultural entre regiones.</p>
                    `,
                    glosario: [
                        { term: "Integración territorial", def: "Articulación económica, social y vial entre distintas regiones de un mismo país." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿En qué año se inauguró el ferrocarril que unió Guayaquil con Quito?", opciones: ["A) 1830", "B) 1908", "C) 1978", "D) 2000"] }
                    ],
                    inferencial: "¿Por qué la integración vial debe planificarse respetando las áreas protegidas y territorios indígenas?",
                    fuenteB: "Síntesis geográfica del Ecuador: El país cuenta con 24 provincias distribuidas en 4 regiones naturales con identidad propia.",
                    criteriosComparacion: ["Barrera geográfica", "Obra o medio de integración", "Consecuencia social y ambiental"],
                    pensamientoCritico: "Formula un juicio histórico sobre las causas y consecuencias de la integración vial entre Costa, Sierra y Amazonía.",
                    rolesEquipo: [
                        { rol: "Historiador/a de Integración", tarea: "Explica el impacto del ferrocarril y carreteras." },
                        { rol: "Geógrafo/a Nacional", tarea: "Ubica las 4 regiones y puertos principales." },
                        { rol: "Analista Socioambiental", tarea: "Evalúa beneficios y cuidados." },
                        { rol: "Sintetizador/a", tarea: "Prepara la ficha territorial." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Síntesis de integración:</strong> Explica dos beneficios económicos y un cuidado ambiental necesario en las rutas interregionales:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Educación Cultural y Artística": armarGuiaCompleta({
                    asignatura: "Educación Cultural y Artística",
                    objetivo: "Diseñar un mapa en relieve simbólico que integre iconos culturales y pisos altitudinales de las cuatro regiones del Ecuador.",
                    preguntaCentral: "¿Cómo representar visualmente en un mapa tridimensional la diversidad geográfica y cultural de los cuatro mundos del Ecuador?",
                    materiales: "Guía impresa, lápiz y colores.",
                    previos: ["¿Qué colores permiten diferenciar en un mapa la Costa, la Sierra, la Amazonía y Galápagos?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Cartografía artística y relieve:</strong> El mapa en relieve combina códigos de color altitudinal (verde para llanuras, café/blanco para cordillera, azul para océano y ríos) con pictogramas culturales.</p>
                    `,
                    glosario: [
                        { term: "Pictograma", def: "Signo gráfico sencillo y claro que representa un objeto, producto o lugar en un mapa." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Para qué sirven los pictogramas en un mapa temático?", opciones: ["A) Para decorar sin sentido", "B) Para representar productos, rutas o lugares de forma clara", "C) Para ocultar información", "D) Para reemplazar el título"] }
                    ],
                    inferencial: "¿Por qué es necesario incluir una leyenda o simbología en una esquina del mapa?",
                    fuenteB: "Manual de diseño gráfico educativo: Una buena leyenda utiliza máximo 6 símbolos claros y contrastados.",
                    criteriosComparacion: ["Código de color", "Relieve altitudinal", "Claridad de pictogramas"],
                    pensamientoCritico: "Justifica los colores y pictogramas seleccionados para representar equitativamente a las cuatro regiones.",
                    rolesEquipo: [
                        { rol: "Cartógrafo/a Artístico/a", tarea: "Traza el contorno y relieve de los Andes." },
                        { rol: "Diseñador/a de Pictogramas", tarea: "Crea los iconos de productos regionales." },
                        { rol: "Colorista", tarea: "Define la paleta por pisos climáticos." },
                        { rol: "Curador/a de Leyenda", tarea: "Organiza el cuadro de simbología." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Boceto de mapa en relieve y leyenda:</strong> Dibuja el esquema del Ecuador con las rutas de intercambio y 4 pictogramas:</p>
                        <div class="math-grid-box"></div>
                    `
                })
            },
            fase2: {
                formato: "Mapa Interactivo en Relieve de las 4 Regiones (50 × 40 cm)",
                medidas: "Base de 50 cm × 40 cm (escala 1:2.000.000). Altura de cordillera: 6 cm.",
                bocetoSVG: `<svg width="240" height="105" viewBox="0 0 240 105"><rect x="15" y="10" width="210" height="85" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/><rect x="30" y="25" width="32" height="25" fill="#86efac" stroke="#15803d"/><text x="46" y="40" font-size="7" text-anchor="middle">Galápagos</text><path d="M 85 20 L 115 20 L 105 85 L 80 85 Z" fill="#fde047"/><path d="M 115 20 L 140 20 L 135 85 L 105 85 Z" fill="#a8a29e"/><path d="M 140 20 L 195 20 L 185 85 L 135 85 Z" fill="#4ade80"/><line x1="92" y1="50" x2="155" y2="50" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/></svg>`,
                instrucciones: "Construir el mapa en relieve mostrando las rutas de comercio justo y datos calculados en Fase 1."
            },
            fase3: {
                guion: "«Presentamos los hallazgos del Grupo E sobre la integración de los cuatro mundos del Ecuador, demostrando cómo el comercio justo y la complementariedad fortalecen al país...»",
                dinamica: "Sustentación del mapa en relieve y balance comercial."
            }
        }
    ];
}
