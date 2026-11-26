// ============================================================================
// ARCHIVO 3: DATOS_GRUPOS.JS - SECUENCIA INVESTIGATIVA COMPLETA POR GRADO Y ÁREA
// ============================================================================

function obtenerDatosGrupos(grado) {
    const esQuinto = grado === "5to";
    const esSexto = grado === "6to";

    // Helper para construir la estructura pedagógica completa de cada guía
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
                        <p><strong>Línea de tiempo y mapa conceptual:</strong> Completa tres hitos de la evolución camaronera (1968 &rarr; 1985 &rarr; Actualidad) y señala qué provincias deben aparecer en el mapa de la Fase 2:</p>
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
                        { rol: "Verificador/a de Resultados", tarea: "Revisa procedimientos y unidades ($cm^2$)." }
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
                        <p><strong>2. Geometría de la máscara:</strong> a) Calcula el área de la base cuadrada de <strong>12,5 cm de lado</strong> y cuántos $cm^2$ quedan sin pintar si se pinta el <strong>75%</strong>. b) Calcula el área de un ojo circular de <strong>2,8 cm de radio</strong> ($\pi \approx 3,14$):</p>
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
        // GRUPO C: REGIÓN AMAZÓNICA (LA UÑA DE GATO - UNCARIA TOMENTOSA)
        // ====================================================================
        {
            letra: "Grupo C",
            nombreCreativo: "Botánica Medicinal y Comercio Sostenible en la Amazonía",
            enfoque: "Región Amazónica",
            productoFinal: "Maqueta del Hábitat de Uncaria tomentosa y Ficha Botánica",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: "Comprender textos informativos sobre la uña de gato (Uncaria tomentosa), analizar la transmisión oral de saberes indígenas y argumentar sobre su conservación.",
                    preguntaCentral: "¿Cómo proteger los saberes ancestrales y la biodiversidad amazónica frente a la creciente demanda internacional de plantas medicinales?",
                    materiales: "Guía impresa, lápiz y resaltadores.",
                    previos: ["¿Qué plantas medicinales utilizan en sus hogares y cómo aprendieron sus familias a prepararlas?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Saberes ancestrales:</strong> La uña de gato (<em>Uncaria tomentosa</em>) es una liana trepadora de la selva amazónica cuyo nombre proviene de sus espinas curvas. Los pueblos indígenas han transmitido mediante relatos orales sus propiedades antiinflamatorias y fortalecedoras del sistema inmunológico.</p>
                        <p><strong>Apartado 2. Retos de conservación:</strong> Su reconocimiento internacional genera ingresos, pero exige técnicas de poda sostenible para evitar la sobreexplotación del bosque húmedo tropical.</p>
                    `,
                    glosario: [
                        { term: "Transmisión oral", def: "Paso de conocimientos, historias y prácticas de una generación a otra mediante la palabra hablada." },
                        { term: "Sobreexplotación", def: "Extracción excesiva de un recurso natural que impide su regeneración." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuál es el nombre científico de la uña de gato?", opciones: ["A) Uncaria tomentosa", "B) Litopenaeus vannamei", "C) Solanum tuberosum", "D) Cinchona officinalis"] },
                        { enunciado: "2. (Inferencial) ¿Por qué la transmisión oral requiere ser valorada y documentada con respeto?", opciones: ["A) Porque sustituye a los bosques", "B) Porque resguarda siglos de observación medicinal de los pueblos indígenas", "C) Porque no tiene utilidad práctica", "D) Porque solo sirve para turistas"] }
                    ],
                    inferencial: "¿Qué diferencia existe entre recolectar la corteza mediante poda controlada y arrancar la planta de raíz?",
                    fuenteB: "Boletín de bioética amazónica: El comercio justo exige reconocer la propiedad intelectual comunitaria y garantizar que la cosecha no provoque deforestación.",
                    criteriosComparacion: ["Valor medicinal", "Forma de transmisión", "Condición para el comercio justo"],
                    pensamientoCritico: "Redacta una conclusión fundamentada defendiendo por qué el aprovechamiento de la uña de gato debe respetar tanto el conocimiento indígena como los límites ecológicos.",
                    rolesEquipo: [
                        { rol: "Lector/a de Saberes", tarea: "Lee los apartados y explica el glosario." },
                        { rol: "Analista de Comprensión", tarea: "Resuelve los ítems literales e inferenciales." },
                        { rol: "Contrastador/a de Fuentes", tarea: "Compara Fuente A y Fuente B." },
                        { rol: "Redactor/a de Síntesis", tarea: "Escribe la argumentación y la síntesis para Fase 2." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Crónica o relato informativo:</strong> Redacta un texto de 2 párrafos explicando cómo un sabio amazónico enseña la recolección sostenible de la uña de gato:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Matemática": armarGuiaCompleta({
                    asignatura: "Matemática",
                    objetivo: "Calcular medias aritméticas de madurez y producción, áreas de cultivo rectangular e ingresos, costos y ganancia neta de exportación.",
                    preguntaCentral: "¿Cómo determinar la productividad promedio, el área de cultivo y la ganancia neta de una asociación exportadora de uña de gato?",
                    materiales: "Guía impresa, lápiz y calculadora (si está autorizada como apoyo).",
                    previos: ["¿Cuál es la diferencia entre el ingreso total por ventas y la ganancia neta de una empresa?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Datos de cultivo y procesamiento:</strong> Cinco plantas registraron tiempos de madurez de 3,8; 4,5; 4,2; 5,1 y 3,9 años. Una planta procesadora produjo durante 6 días: 142,5 kg; 155,8 kg; 168,3 kg; 140,2 kg; 170,7 kg y 160,4 kg.</p>
                        <p><strong>Apartado 2. Superficie y exportación:</strong> Se delimita una parcela rectangular de <strong>120 m de largo por 85 m de ancho</strong>. Se exportan <strong>8.750 kg a $9,25/kg</strong> con un costo de producción de <strong>$3,40/kg</strong>.</p>
                    `,
                    glosario: [
                        { term: "Ganancia neta", def: "Resultado de restar los costos totales de producción a los ingresos totales por ventas." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Cuál fue el día de mayor producción en kilogramos?", opciones: ["A) Día 1 (142,5 kg)", "B) Día 4 (140,2 kg)", "C) Día 5 (170,7 kg)", "D) Día 6 (160,4 kg)"] },
                        { enunciado: "2. (Inferencial) Si el costo de producción por kilogramo subiera de $3,40 a $4,40 manteniendo el precio de venta, ¿qué pasaría con la ganancia neta?", opciones: ["A) Aumentaría", "B) Disminuiría en $1,00 por cada kg vendido", "C) No cambiaría", "D) Se duplicaría"] }
                    ],
                    inferencial: "¿Por qué calcular la producción diaria promedio ayuda a planificar el transporte de carga?",
                    fuenteB: "Control financiero mensual: Exportación = 8.750 kg; Precio de venta = $9,25/kg; Costo unitario = $3,40/kg.",
                    criteriosComparacion: ["Dato físico (kg o metros)", "Dato monetario ($)", "Resultado calculado"],
                    pensamientoCritico: "Con base en tus cálculos, justifica si el proyecto de exportación sostenible es económicamente rentable para la comunidad.",
                    rolesEquipo: [
                        { rol: "Analista de Promedios", tarea: "Calcula la media de años de madurez y kg diarios." },
                        { rol: "Topógrafo/a de Parcela", tarea: "Calcula el área rectangular de 120 m × 85 m." },
                        { rol: "Contador/a de Exportación", tarea: "Calcula ingreso, costo y ganancia neta." },
                        { rol: "Verificador/a de Operaciones", tarea: "Revisa decimales y unidades." }
                    ],
                    aplicacionHtml: `
                        <p><strong>1. Media aritmética:</strong> Calcula el promedio de madurez (5 plantas) y el promedio de producción diaria (6 días):</p>
                        <div class="math-grid-box"></div>
                        <p><strong>2. Área y Ganancia Neta:</strong> a) Calcula el área del terreno de <strong>120 m &times; 85 m</strong>. b) Calcula el ingreso total ($9,25/kg), el costo total ($3,40/kg) y la ganancia neta de <strong>8.750 kg</strong>:</p>
                        <div class="math-grid-box"></div>
                    `
                }),
                "Ciencias Naturales": armarGuiaCompleta({
                    asignatura: "Ciencias Naturales",
                    objetivo: "Identificar la morfología, propiedades medicinales y condiciones de conservación de Uncaria tomentosa en el bosque húmedo amazónico.",
                    preguntaCentral: "¿Qué características botánicas posee la uña de gato y qué medidas evitan la deforestación asociada a su recolección?",
                    materiales: "Guía impresa y colores.",
                    previos: ["¿Por qué las plantas trepadoras de la selva necesitan apoyarse en árboles altos?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Morfología y propiedades:</strong> Es una liana leñosa con espinas curvas que le permiten trepar hacia la luz del dosel amazónico. Sus alcaloides naturales tienen acción antiinflamatoria y antioxidante.</p>
                    `,
                    glosario: [
                        { term: "Dosel", def: "Estrato superior formado por las copas de los árboles más altos del bosque." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Para qué sirven las espinas curvas de la uña de gato?", opciones: ["A) Para trepar hacia la luz", "B) Para nadar", "C) Para atraer nieve", "D) No tienen función"] }
                    ],
                    inferencial: "¿Por qué la deforestación de árboles altos afecta directamente el crecimiento de esta liana?",
                    fuenteB: "Protocolo de cosecha sostenible: Cortar únicamente ramas maduras dejando al menos 1 metro desde la base permite el rebrote natural.",
                    criteriosComparacion: ["Estructura de la planta", "Beneficio medicinal", "Práctica de conservación"],
                    pensamientoCritico: "Propón dos medidas de prevención contra la deforestación amazónica sustentadas en la información revisada.",
                    rolesEquipo: [
                        { rol: "Botánico/a", tarea: "Describe morfología y hábitat." },
                        { rol: "Analista Medicinal", tarea: "Detalla usos y precauciones." },
                        { rol: "Auditor/a Ambiental", tarea: "Propone medidas contra la deforestación." },
                        { rol: "Bocetista", tarea: "Esquematiza la planta en su hábitat." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Ficha botánica y medidas de prevención:</strong> Describe 3 beneficios medicinales y 2 acciones contra la deforestación amazónica:</p>
                        <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Ciencias Sociales": armarGuiaCompleta({
                    asignatura: "Estudios Sociales",
                    objetivo: "Ubicar las zonas productoras de la Amazonía ecuatoriana y analizar las rutas de comercialización y su impacto comunitario.",
                    preguntaCentral: "¿Cómo se conectan las provincias amazónicas productoras con los mercados nacionales e internacionales?",
                    materiales: "Guía impresa y mapa de la Amazonía.",
                    previos: ["¿Qué provincias forman parte de la región Amazónica del Ecuador?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Territorio y comercio:</strong> En provincias como Napo, Pastaza, Orellana y Sucumbíos, las asociaciones comunitarias acopian corteza seca para laboratorios nacionales y exportación.</p>
                    `,
                    glosario: [
                        { term: "Acopio", def: "Recolección y almacenamiento ordenado de productos agrícolas o forestales." }
                    ],
                    preguntasMcq: [
                        { enunciado: "1. (Literal) ¿Qué región del Ecuador alberga la mayor producción de uña de gato?", opciones: ["A) Región Insular", "B) Región Amazónica", "C) Región Litoral", "D) Páramo seco"] }
                    ],
                    inferencial: "¿Cómo mejora la economía familiar cuando las comunidades procesan el producto localmente en lugar de vender solo materia prima?",
                    fuenteB: "Informe de desarrollo amazónico: El comercio asociativo fortalece la economía solidaria y evita intermediarios abusivos.",
                    criteriosComparacion: ["Zonas de cultivo", "Destino comercial", "Beneficio social"],
                    pensamientoCritico: "Argumenta una causa y una consecuencia del comercio internacional de plantas amazónicas para las comunidades locales.",
                    rolesEquipo: [
                        { rol: "Geógrafo/a Amazónico/a", tarea: "Ubica las provincias productoras." },
                        { rol: "Analista Comercial", tarea: "Traza las rutas de exportación." },
                        { rol: "Evaluador/a Social", tarea: "Analiza el impacto en las familias." },
                        { rol: "Redactor/a", tarea: "Sintetiza hallazgos para Fase 2." }
                    ],
                    aplicacionHtml: `
                        <p><strong>Mapa de flujo comercial:</strong> Escribe la ruta desde la recolección comunitaria hasta el mercado internacional:</p>
                        <div class="write-lines"></div><div class="write-lines"></div>
                    `
                }),
                "Educación Cultural y Artística": armarGuiaCompleta({
                    asignatura: "Educación Cultural y Artística",
                    objetivo: "Diseñar un boceto tridimensional del hábitat amazónico representando las proporciones y texturas de la selva.",
                    preguntaCentral: "¿Cómo representar en una maqueta los distintos estratos vegetales del bosque húmedo amazónico?",
                    materiales: "Guía impresa, lápiz y colores.",
                    previos: ["¿Qué tonos de verde y texturas distinguen el suelo de la selva de las copas de los árboles?"],
                    lecturaApartados: `<p><strong>Apartado 1. Representación del hábitat:</strong> El modelado tridimensional permite visualizar la relación entre los árboles hospederos, la liana trepadora y los ríos amazónicos.</p>`,
                    glosario: [{ term: "Estrato vegetal", def: "Nivel de altura que ocupan las plantas dentro de un bosque." }],
                    preguntasMcq: [{ enunciado: "1. (Literal) ¿Qué elemento estructural sostiene a la liana en la maqueta?", opciones: ["A) Un árbol hospedero", "B) Una roca volcánica", "C) Un muelle", "D) Una duna"] }],
                    inferencial: "¿Por qué la escala de altura ayuda a diferenciar el sotobosque del dosel?",
                    fuenteB: "Guía de modelado escolar: Usar alambre forrado con fibra natural permite dar forma curva a las espinas de la liana.",
                    criteriosComparacion: ["Estructura", "Textura", "Escala"],
                    pensamientoCritico: "Justifica los materiales elegidos para representar el ecosistema amazónico.",
                    rolesEquipo: [
                        { rol: "Diseñador/a de Estratos", tarea: "Define alturas de árboles y liana." },
                        { rol: "Especialista en Texturas", tarea: "Selecciona materiales naturales/reciclados." },
                        { rol: "Bocetista", tarea: "Traza el plano de la maqueta." },
                        { rol: "Curador/a", tarea: "Etiqueta las partes científicas." }
                    ],
                    aplicacionHtml: `<p><strong>Boceto de maqueta amazónica:</strong></p><div class="math-grid-box"></div>`
                })
            },
            fase2: {
                formato: "Maqueta del Hábitat Amazónico (60 × 40 cm)",
                medidas: "Base de 60 cm × 40 cm. Altura máxima: 25 cm.",
                bocetoSVG: `<svg width="240" height="105" viewBox="0 0 240 105"><rect x="10" y="10" width="220" height="85" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><rect x="45" y="22" width="16" height="63" fill="#78350f"/><circle cx="53" cy="22" r="18" fill="#16a34a"/><path d="M 53 82 Q 78 58 53 38" fill="none" stroke="#b45309" stroke-width="3"/><text x="145" y="55" font-size="9" text-anchor="middle" fill="#14532d">Liana Uncaria tomentosa</text></svg>`,
                instrucciones: "Integrar la ficha botánica y los indicadores de producción sostenible investigados."
            },
            fase3: {
                guion: "«Presentamos los hallazgos del Grupo C sobre la Región Amazónica y la Uña de Gato, sustentando su conservación y rentabilidad sostenible...»",
                dinamica: "Exposición del modelo botánico y datos financieros."
            }
        },

        // ====================================================================
        // GRUPO D: REGIÓN INSULAR GALÁPAGOS (EL VOLCÁN SIERRA NEGRA)
        // ====================================================================
        {
            letra: "Grupo D",
            nombreCreativo: "Geología Volcánica, Biodiversidad y Turismo en Galápagos",
            enfoque: "Región Insular (Galápagos)",
            productoFinal: "Maqueta Topográfica de la Caldera Sierra Negra y Reporte Científico",
            guiasPorMateria: {
                "Lengua y Literatura": armarGuiaCompleta({
                    asignatura: "Lengua y Literatura",
                    objetivo: "Comprender textos científicos sobre el volcán Sierra Negra, contrastar reportes de monitoreo y redactar una entrevista fundamentada.",
                    preguntaCentral: "¿Cómo comunican los científicos y habitantes de la Isla Isabela los riesgos volcánicos y las medidas de conservación del Sierra Negra?",
                    materiales: "Guía impresa, lápiz y resaltadores.",
                    previos: ["¿Por qué las Islas Galápagos son conocidas mundialmente por sus volcanes y animales únicos?"],
                    lecturaApartados: `
                        <p><strong>Apartado 1. Ubicación y caldera:</strong> El volcán Sierra Negra está ubicado al sur de la isla Isabela (Galápagos). Tiene una altitud de 1.093 m s. n. m. y una caldera de 9 km de diámetro, una de las más grandes del mundo.</p>
                        <p><strong>Apartado 2. Erupciones y monitoreo:</strong> Registró erupciones notables en 2005 y 2018. La Fundación Charles Darwin y el Instituto Geofísico monitorean la sismicidad y aplican planes de emergencia
