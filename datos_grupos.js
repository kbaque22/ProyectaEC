// ============================================================================
// ARCHIVO 3: DATOS_GRUPOS.JS - GUÍAS EXTENSAS CON ENFOQUE 3C Y ROLES DE EQUIPO
// ============================================================================

function obtenerDatosGrupos(grado) {
    return [
        // --------------------------------------------------------------------
        // GRUPO A: REGIÓN COSTA (EL CAMARÓN Y EL ESTUARIO)
        // --------------------------------------------------------------------
        {
            letra: "Grupo A",
            nombreCreativo: grado === "7mo" ? "El Poemario al Camarón: El Guardián del Estuario (Costa)" : "Producción y Ecosistema del Camarón (Costa)",
            enfoque: "Región Litoral o Costa",
            productoFinal: "Maqueta del Criadero Sostenible + Poemario Colectivo 'El Guardián del Estuario'",
            guiasPorMateria: {
                "Lengua y Literatura": {
                    resumenCorto: "Lectura sobre la industria camaronera, 5 ítems de comprensión lectora, debate crítico sobre sostenibilidad y creación de mito/poema colectivo.",
                    rolesEquipo: [
                        { rol: "Lector/a Guía del Estuario", tarea: "Dirige la lectura expresiva del texto base e identifica términos clave." },
                        { rol: "Analista de Comprensión", tarea: "Coordina la discusión de las 5 preguntas de opción múltiple." },
                        { rol: "Investigador/a Crítico/a", tarea: "Redacta los argumentos sobre sostenibilidad y condiciones laborales." },
                        { rol: "Poeta y Narrador/a Principal", tarea: "Lidera la creación del mito costero y los versos del poemario colectivo." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y COMPRENSIÓN LECTORA</span>
                            <div class="reading-passage">
                                <strong>📖 Lectura Base: Conociendo el Camarón y su Importancia en la Costa Ecuatoriana</strong><br><br>
                                El camarón es uno de los productos más valiosos en la economía de la Costa ecuatoriana. Esta pequeña criatura marina no solo es una fuente importante de alimento, sino también un pilar fundamental para muchas familias y comunidades en la región. El camarón es un tipo de crustáceo que vive en ambientes marinos y de agua dulce; en las zonas costeras de Ecuador se cría principalmente en estanques y granjas especializadas.<br><br>
                                <strong>Desarrollo Histórico y Desafíos:</strong> La industria camaronera en Ecuador comenzó a desarrollarse significativamente en los años 60 y 70. Inicialmente se cultivaba de manera artesanal, pero evolucionó hacia métodos más avanzados hasta convertir al país en uno de los mayores exportadores del mundo. Sin embargo, enfrenta desafíos importantes como las condiciones laborales en las granjas, la gestión sostenible de los recursos naturales y el cuidado de los manglares.
                            </div>
                            <p><strong>Responde en equipo marcando con una X la opción correcta:</strong></p>
                            <div class="mcq-grid">
                                <div class="mcq-item">
                                    <p>1.1. ¿Qué es el camarón según la lectura?</p>
                                    <ul class="mcq-options">
                                        <li>A) Un tipo de mamífero marino</li>
                                        <li>B) Un crustáceo que vive en ambientes marinos y de agua dulce</li>
                                        <li>C) Un tipo de pez que vive en agua salada</li>
                                        <li>D) Un molusco que se encuentra en las playas</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.2. ¿Dónde se cultiva principalmente el camarón en Ecuador?</p>
                                    <ul class="mcq-options">
                                        <li>A) En los ríos de la Amazonía</li>
                                        <li>B) En estanques y granjas especializadas en la Costa</li>
                                        <li>C) En las montañas de la Sierra</li>
                                        <li>D) En las islas Galápagos</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.3. ¿Cuándo comenzó a desarrollarse significativamente esta industria?</p>
                                    <ul class="mcq-options">
                                        <li>A) En los años 40 &nbsp;&nbsp; B) En los años 50</li>
                                        <li>C) En los años 60 y 70 &nbsp;&nbsp; D) En los años 80</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.4. ¿Cuál es uno de los desafíos que enfrenta la industria camaronera?</p>
                                    <ul class="mcq-options">
                                        <li>A) Escasez de tierra para el cultivo</li>
                                        <li>B) Condiciones laborales en las granjas y gestión sostenible</li>
                                        <li>C) Reducción en la demanda internacional</li>
                                        <li>D) Escasez de agua en las zonas urbanas</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.5. ¿Qué ha permitido a Ecuador destacarse en la industria camaronera?</p>
                                    <ul class="mcq-options">
                                        <li>A) Reducción de precios &nbsp;&nbsp; B) Uso de métodos avanzados de cultivo</li>
                                        <li>C) Falta de regulación &nbsp;&nbsp; D) Baja competencia internacional</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD (ANÁLISIS Y ARGUMENTACIÓN)</span>
                            <p><strong>2.1.</strong> Si Ecuador es uno de los mayores exportadores de camarón del mundo, ¿por qué crees que es indispensable proteger los ecosistemas de manglar mientras se produce? Argumenta tu respuesta en 3 líneas:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                            <p><strong>2.2.</strong> ¿Qué mejoras propondrías para garantizar el bienestar de las familias trabajadoras en las granjas camaroneras?</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD (MITO COSTERO Y POEMA COLECTIVO)</span>
                            <p><strong>3.1. Mito o Leyenda del Manglar:</strong> Inventa un breve mito costero sobre un espíritu protector del estuario que cuida a los pescadores y a las crías de camarón:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                            <p><strong>3.2. Estrofa para el Poemario "El Guardián del Estuario":</strong> Redacta 2 estrofas de 4 versos con metáforas y rimas sobre la vida en la Costa y el camarón:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                    `
                },
                "Matemática": {
                    resumenCorto: "Tabla histórica de exportaciones (2013-2022), cálculo de media aritmética, área de criadero con piscinas y problemas de alimentación con decimales.",
                    rolesEquipo: [
                        { rol: "Analista de Datos Estadísticos", tarea: "Interpreta la tabla histórica de exportaciones y verifica el promedio." },
                        { rol: "Calculista de Decimales", tarea: "Resuelve las multiplicaciones y divisiones de alimentación diaria." },
                        { rol: "Diseñador/a Geométrico/a", tarea: "Calcula el área total del criadero y el área libre de las piscinas." },
                        { rol: "Verificador/a de Resultados", tarea: "Comprueba cada operación en la cuadrícula y redacta las respuestas." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y ESTADÍSTICA REAL (2013 - 2022)</span>
                            <p><strong>Observa la tabla oficial de exportaciones ecuatorianas de camarón (en toneladas):</strong></p>
                            <table class="work-table">
                                <thead>
                                    <tr><th>Año</th><th>2013</th><th>2014</th><th>2015</th><th>2016</th><th>2017</th><th>2018</th><th>2019</th><th>2020</th><th>2021</th><th>2022</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Ton.</strong></td><td>224.222</td><td>299.726</td><td>342.501</td><td>372.660</td><td>441.539</td><td>512.108</td><td>645.043</td><td>688.489</td><td>847.982</td><td>1.068.961</td></tr>
                                </tbody>
                            </table>
                            <p><strong>1.1.</strong> ¿En qué año se obtuvo la menor y la mayor exportación en toneladas? ___________________________</p>
                            <p><strong>1.2. Media Aritmética:</strong> Calcula el promedio de exportación de camarón de los <strong>últimos 6 años (2017 - 2022)</strong>:</p>
                            <div class="math-grid-box"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD Y RESOLUCIÓN DE PROBLEMAS CON DECIMALES</span>
                            <p><strong>2.1.</strong> Cada camarón en un criadero consume en promedio <strong>0,15 gramos</strong> de alimento al día. Si el criadero tiene <strong>12.350 camarones</strong>, ¿cuántos gramos de alimento se necesitan al día? Si cada gramo cuesta <strong>$0,02</strong>, ¿cuál es el costo diario?</p>
                            <div class="math-grid-box"></div>
                            <p><strong>2.2.</strong> En otro estanque se tienen <strong>9.720 gramos</strong> de alimento para repartir de manera uniforme entre <strong>3.240 camarones</strong>. ¿Cuántos gramos recibe cada camarón? Si el alimento dura 3 días, ¿cuánto consume cada uno al día?</p>
                            <div class="math-grid-box"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD Y DISEÑO GEOMÉTRICO DEL CRIADERO</span>
                            <p><strong>3.1.</strong> Se diseña un criadero rectangular de <strong>60 m de ancho por 30 m de alto</strong>. Dentro se colocan dos piscinas cuadradas para larvas de <strong>10 m de lado</strong> cada una. Calcula el área total del terreno y el <strong>área libre</strong> (zona exterior a las piscinas) donde irán los senderos y vegetación de manglar:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Ciencias Naturales": {
                    resumenCorto: "Ciclo de vida del camarón en 5 etapas, condiciones físico-químicas del estanque, tabla comparativa de costos de maqueta e impacto en el manglar.",
                    rolesEquipo: [
                        { rol: "Biólogo/a de Ciclo Vital", tarea: "Investiga y ordena las 5 etapas de crecimiento del camarón." },
                        { rol: "Especialista en Hábitat", tarea: "Define la temperatura, salinidad y cuidados del agua." },
                        { rol: "Auditor/a Ambiental", tarea: "Analiza el impacto en los manglares y propone medidas de prevención." },
                        { rol: "Coordinador/a de Materiales", tarea: "Elabora la lista de materiales para la maqueta del ciclo de vida." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN E INDAGACIÓN BIOLÓGICA</span>
                            <p><strong>1.1. Ciclo de Vida del Camarón:</strong> Describe las 5 etapas principales de su desarrollo (desde el huevo hasta la etapa adulta):</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                            <p><strong>1.2. Hábitat y Criadero Artificial:</strong> ¿Qué temperatura, oxígeno y nivel de salinidad necesita el agua para mantener saludables a los camarones?</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD E IMPACTO AMBIENTAL</span>
                            <p><strong>2.1.</strong> Explora los efectos ambientales ocasionados por la tala de manglares para construir piscinas camaroneras y escribe 2 medidas de prevención que aplicarías en la Costa ecuatoriana:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD Y DISEÑO DE MAQUETA ECOLÓGICA</span>
                            <p><strong>3.1.</strong> Dibuja el boceto de tu maqueta mostrando las 5 etapas del ciclo de vida del camarón y el ecosistema de manglar:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Ciencias Sociales": {
                    resumenCorto: "Cartografía de las 5 provincias camaroneras, análisis histórico desde los años 60 y propuesta de comercio justo.",
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y CARTOGRAFÍA</span>
                            <p><strong>1.1.</strong> Ubica y describe la producción camaronera en las 5 provincias costeras: Guayas, El Oro, Esmeraldas, Manabí y Santa Elena:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD SOCIOECONÓMICA</span>
                            <p><strong>2.1.</strong> Analiza cómo ha evolucionado el trabajo artesanal hacia la exportación industrial desde los años 60 hasta hoy:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD Y SIMBOLOGÍA</span>
                            <p><strong>3.1.</strong> Diseña 3 símbolos cartográficos originales para representar zonas de manglar, granjas acuícolas y puertos de exportación:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Educación Cultural y Artística": {
                    resumenCorto: "Diseño visual de portada del poemario colectivo y simbología marina en relieve.",
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. CREATIVIDAD ARTÍSTICA</span>
                            <p><strong>1.1.</strong> Boceta la portada ilustrada del Poemario 'El Guardián del Estuario' integrando texturas naturales:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                }
            },
            fase2: {
                formato: "Maqueta Topográfica (60 × 40 cm) + Poemario Ilustrado",
                medidas: "Base rígida de 60 cm × 40 cm (Escala 1:100 del criadero de 60m × 30m). Altura: 15 cm.",
                bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                    <rect x="10" y="10" width="220" height="90" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                    <rect x="20" y="20" width="60" height="35" fill="#bae6fd" stroke="#0369a1"/>
                    <text x="50" y="41" font-size="8" text-anchor="middle" fill="#0c4a6e">Piscina 1</text>
                    <rect x="90" y="20" width="60" height="35" fill="#bae6fd" stroke="#0369a1"/>
                    <text x="120" y="41" font-size="8" text-anchor="middle" fill="#0c4a6e">Piscina 2</text>
                    <rect x="160" y="20" width="60" height="35" fill="#fef3c7" stroke="#b45309"/>
                    <text x="190" y="41" font-size="8" text-anchor="middle" fill="#78350f">Empacadora</text>
                    <path d="M 10 72 Q 120 60 230 72 L 230 100 L 10 100 Z" fill="#0d9488"/>
                    <text x="120" y="90" font-size="9" text-anchor="middle" fill="white" font-weight="bold">Zona de Manglar (60 × 40 cm)</text>
                </svg>`,
                instrucciones: "Representar las dos piscinas de larvas dentro del terreno rectangular y acompañar la maqueta con el Poemario Colectivo."
            },
            fase3: {
                guion: "«Buenos días. Somos el Grupo A con 'El Poemario al Camarón'. En nuestra maqueta de 60×40 cm les presentamos el ciclo del camarón, los cálculos reales de su crianza y recitaremos nuestro poema al estuario...»",
                dinamica: "Exposición articulada: explicación técnica de datos/maqueta y lectura coral del poema."
            }
        },

        // --------------------------------------------------------------------
        // GRUPO B: REGIÓN SIERRA (LAS MÁSCARAS DE TIGUA)
        // --------------------------------------------------------------------
        {
            letra: "Grupo B",
            nombreCreativo: "Las Máscaras de Tigua: Cultura, Geometría y Leyendas (Sierra)",
            enfoque: "Región Interandina o Sierra",
            productoFinal: "Máscara de Tigua en Relieve + Leyenda Andina Ilustrada",
            guiasPorMateria: {
                "Lengua y Literatura": {
                    resumenCorto: "Lectura sobre el origen de las máscaras de Tigua e Inti Raymi, 5 preguntas de opción múltiple, reflexión cultural y creación de mito/leyenda andina.",
                    rolesEquipo: [
                        { rol: "Narrador/a Cultural Andino", tarea: "Lee en voz alta la historia y simbolismo de las máscaras de Tigua." },
                        { rol: "Analista de Comprensión", tarea: "Dirige la resolución de los 5 ítems de selección múltiple." },
                        { rol: "Crítico/a de Patrimonio", tarea: "Argumenta la importancia de preservar las tradiciones indígenas." },
                        { rol: "Creador/a de Mitos y Leyendas", tarea: "Redacta la leyenda protagonizada por el cóndor, el puma o la serpiente." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y COMPRENSIÓN LECTORA</span>
                            <div class="reading-passage">
                                <strong>📖 Lectura Base: Las Máscaras de Tigua, un Tesoro Cultural Andino</strong><br><br>
                                Las máscaras de Tigua son una de las formas más destacadas de expresión artística y cultural de la Sierra ecuatoriana. Originarias de la parroquia Tigua, en la provincia de Cotopaxi, son conocidas por su vibrante colorido y sus intrincadas representaciones de la fauna local (el cóndor, el puma o la serpiente) y figuras míticas que reflejan la cosmovisión andina.<br><br>
                                <strong>Uso en Festividades y Proceso Artístico:</strong> Se utilizan principalmente durante la Fiesta del <strong>Inti Raymi (Fiesta del Sol)</strong>, que celebra el solsticio de verano y agradece por las cosechas, así como en el Carnaval y celebraciones comunitarias. Los artesanos modelan la base con madera o papel maché, pintan con colores brillantes y detallan patrones geométricos transmitidos de generación en generación.
                            </div>
                            <div class="mcq-grid">
                                <div class="mcq-item">
                                    <p>1.1. ¿Qué representa principalmente una máscara de Tigua?</p>
                                    <ul class="mcq-options">
                                        <li>A) Personajes históricos modernos</li>
                                        <li>B) Figuras mitológicas y animales de la fauna local</li>
                                        <li>C) Elementos urbanos &nbsp;&nbsp; D) Comida típica</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.2. ¿Cuál es un elemento común en estas máscaras?</p>
                                    <ul class="mcq-options">
                                        <li>A) Colores apagados y grises</li>
                                        <li>B) Colores vibrantes y representaciones de la fauna local</li>
                                        <li>C) Materiales sintéticos &nbsp;&nbsp; D) Personajes de películas</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.3. ¿En qué festividades tradicionales se utilizan?</p>
                                    <ul class="mcq-options">
                                        <li>A) Navidad y Año Nuevo</li>
                                        <li>B) Carnaval y Fiesta del Inti Raymi</li>
                                        <li>C) Día de la Madre &nbsp;&nbsp; D) Feria del Libro</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.4. ¿Qué materiales se utilizan tradicionalmente?</p>
                                    <ul class="mcq-options">
                                        <li>A) Plástico y metal &nbsp;&nbsp; B) Papel y madera</li>
                                        <li>C) Tela y vidrio &nbsp;&nbsp; D) Cerámica y piedra</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.5. ¿Cuál es el propósito de las máscaras en las festividades?</p>
                                    <ul class="mcq-options">
                                        <li>A) Decorar el hogar únicamente</li>
                                        <li>B) Representar personajes míticos y conectar con la espiritualidad</li>
                                        <li>C) Hacer regalos &nbsp;&nbsp; D) Crear souvenirs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD (IDENTIDAD Y PRESERVACIÓN CULTURAL)</span>
                            <p><strong>2.1.</strong> ¿Por qué crees que las máscaras de Tigua son mucho más que simples adornos turísticos y cómo pueden los jóvenes ayudar a preservar este arte ancestral?</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD (LEYENDA O MITO SOBRE LAS MÁSCARAS DE TIGUA)</span>
                            <p><strong>3.1.</strong> Escribe un cuento o leyenda inspirada en los animales representados en las máscaras de Tigua (cóndor, puma o serpiente) explorando la conexión entre la naturaleza, la espiritualidad andina y el Inti Raymi:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                    `
                },
                "Matemática": {
                    resumenCorto: "Tabla comparativa de costos entre 2 distribuidores, promedio de días de elaboración de 5 artesanos, área de base cuadrada (12,5 cm) y ojos circulares (r=2,8 cm).",
                    rolesEquipo: [
                        { rol: "Cotizador/a de Materiales", tarea: "Completa y compara los precios entre el Distribuidor 1 y el Distribuidor 2." },
                        { rol: "Analista de Tiempos", tarea: "Calcula la media aritmética de los días de trabajo de los 5 artesanos." },
                        { rol: "Geómetra de Superficies", tarea: "Calcula el área de la base cuadrada, los ojos circulares y el porcentaje pintado." },
                        { rol: "Auditor/a de Cálculos", tarea: "Verifica cada paso en la cuadrícula y redacta las conclusiones." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y PRESUPUESTO COMPARATIVO</span>
                            <p><strong>1.1.</strong> Completa la tabla comparando los precios de 2 distribuidores para fabricar la máscara y calcula la diferencia total:</p>
                            <table class="work-table">
                                <thead>
                                    <tr><th>Materiales</th><th>Distribuidor 1 ($)</th><th>Distribuidor 2 ($)</th><th>Diferencia ($)</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1. Pieza de madera / base prensada</td><td>$ 3,50</td><td>$ 2,90</td><td></td></tr>
                                    <tr><td>2. Set de pigmentos / pinturas acrílicas</td><td>$ 4,80</td><td>$ 5,20</td><td></td></tr>
                                    <tr><td>3. Pinceles finos y lija de madera</td><td>$ 2,25</td><td>$ 1,95</td><td></td></tr>
                                    <tr><td>4. Barniz protector ecológico</td><td>$ 3,10</td><td>$ 3,45</td><td></td></tr>
                                    <tr><td><strong>VALOR TOTAL ($)</strong></td><td></td><td></td><td></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD Y MEDIA ARITMÉTICA DE PRODUCCIÓN</span>
                            <p><strong>2.1.</strong> Cinco artesanos han registrado el tiempo (en días) que les tomó tallar y pintar una máscara de Tigua: <strong>María: 10,5 días | Carlos: 20,8 días | Ana: 18,2 días | Pablo: 27,8 días | Sofía: 16,5 días</strong>. Calcula el tiempo promedio (media aritmética):</p>
                            <div class="math-grid-box"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD Y GEOMETRÍA DE LA MÁSCARA DE TIGUA</span>
                            <p><strong>3.1.</strong> La base de la máscara tiene forma cuadrada, con cada lado midiendo <strong>12,5 cm</strong>. ¿Cuál es el área total de la base? Si los estudiantes deciden pintar solo el <strong>75%</strong> del área total, ¿cuántos $cm^2$ quedarán sin pintar?</p>
                            <div class="math-grid-box"></div>
                            <p><strong>3.2.</strong> Los ojos de la máscara se representarán como dos círculos idénticos, cada uno con un radio de <strong>2,8 cm</strong>. Calcula el área de un ojo ($A = \pi \times r^2$):</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Ciencias Naturales": {
                    resumenCorto: "Árboles de la Sierra (madera de pino), extracción de tintes naturales vs. sintéticos y prevención de la deforestación.",
                    rolesEquipo: [
                        { rol: "Botánico/a Forestal", tarea: "Investiga las características de la madera de pino y árboles nativos." },
                        { rol: "Químico/a de Tintes", tarea: "Compara la extracción de tintes naturales frente a los sintéticos." },
                        { rol: "Defensor/a Ambiental", tarea: "Analiza el impacto de la deforestación en la Sierra ecuatoriana." },
                        { rol: "Diseñador/a de Boceto", tarea: "Dibuja el primer boceto ecológico de la máscara." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN: ÁRBOLES DE LA SIERRA Y TINTES NATURALES</span>
                            <p><strong>1.1.</strong> ¿Qué tipo de árboles encontramos en la Sierra ecuatoriana y cuáles son las características y beneficios ambientales del pino?</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                            <p><strong>1.2. Tintes Naturales:</strong> ¿Qué plantas o minerales locales se utilizan para obtener tintes naturales y cuál es su diferencia frente a un tinte sintético?</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD: IMPACTO AMBIENTAL Y PREVENCIÓN</span>
                            <p><strong>2.1.</strong> Explora los efectos ambientales ocasionados por la deforestación en la Sierra ecuatoriana y escribe 2 medidas de prevención que tomarías para disminuir este impacto:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD: BOCETO DE LA MÁSCARA DE TIGUA</span>
                            <p><strong>3.1.</strong> Dibuja el primer boceto de tu máscara empleando colores vivos y figuras geométricas:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Ciencias Sociales": {
                    resumenCorto: "Significado histórico de la fiesta del Inti Raymi en la región andina y creación de máscara en miniatura.",
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN E HISTORIA ANDINA</span>
                            <p><strong>1.1.</strong> Investiga cómo las máscaras de Tigua se utilizan en festividades como el Inti Raymi y su significado cultural en Cotopaxi:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD CULTURAL</span>
                            <p><strong>2.1.</strong> ¿Cómo fortalece esta tradición el sentido de identidad comunitaria en los pueblos indígenas de la Sierra?</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                    `
                },
                "Educación Cultural y Artística": {
                    resumenCorto: "Diseño simétrico y paleta cromática tradicional de las máscaras de Tigua.",
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. CREATIVIDAD PLÁSTICA</span>
                            <p><strong>1.1.</strong> Traza la estructura simétrica de tu máscara de Tigua detallando los patrones geométricos:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                }
            },
            fase2: {
                formato: "Máscara Tradicional en Relieve + Libreto de Leyenda Andina",
                medidas: "Base de 25 cm × 25 cm (o escala 2:1 de la base de 12,5 cm). Relieve máximo: 8 cm.",
                bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                    <rect x="75" y="10" width="90" height="90" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
                    <circle cx="102" cy="42" r="11" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
                    <circle cx="138" cy="42" r="11" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
                    <polygon points="120,48 112,68 128,68" fill="#dc2626"/>
                    <path d="M 98 80 Q 120 92 142 80" fill="none" stroke="#15803d" stroke-width="3"/>
                    <text x="120" y="108" font-size="8" text-anchor="middle" fill="#78350f">Diseño Simétrico Tigua (25 × 25 cm)</text>
                </svg>`,
                instrucciones: "Utilizar cartón prensado, papel maché y colores vibrantes respetando las proporciones geométricas calculadas."
            },
            fase3: {
                guion: "«Desde las montañas de Cotopaxi presentamos las Máscaras de Tigua. Explicaremos su geometría, el tiempo promedio de trabajo de los artesanos y narraremos nuestra leyenda andina...»",
                dinamica: "Dramatización breve de la leyenda usando la máscara y exposición de los cálculos de área."
            }
        },
        // --------------------------------------------------------------------
        // GRUPO C: REGIÓN AMAZÓNICA (LA UÑA DE GATO - UNCARIA TOMENTOSA)
        // --------------------------------------------------------------------
        {
            letra: "Grupo C",
            nombreCreativo: "La Uña de Gato: Tesoro Medicinal y Saberes de la Selva (Amazonía)",
            enfoque: "Región Amazónica",
            productoFinal: "Maqueta del Hábitat Amazónico + Relato Ancestral Ilustrado",
            guiasPorMateria: {
                "Lengua y Literatura": {
                    resumenCorto: "Lectura sobre la Uña de Gato (Uncaria tomentosa), 5 ítems de opción múltiple, análisis de conservación y redacción de mito/relato amazónico.",
                    rolesEquipo: [
                        { rol: "Lector/a de Saberes Ancestrales", tarea: "Lee en voz alta la historia y usos medicinales de la uña de gato." },
                        { rol: "Analista de Comprensión", tarea: "Coordina el debate para responder las 5 preguntas de opción múltiple." },
                        { rol: "Crítico/a de Sostenibilidad", tarea: "Argumenta sobre el comercio internacional y el cuidado de la biodiversidad." },
                        { rol: "Narrador/a de Mitos Amazónicos", tarea: "Redacta el relato corto sobre las creencias indígenas y la selva." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y COMPRENSIÓN LECTORA</span>
                            <div class="reading-passage">
                                <strong>📖 Lectura Base: La Uña de Gato, un Regalo Medicinal de la Amazonía</strong><br><br>
                                La uña de gato (<em>Uncaria tomentosa</em>) es una planta trepadora medicinal originaria de los bosques tropicales de América del Sur, muy valorada en la Amazonía ecuatoriana. Su nombre hace referencia a las espinas en forma de garras que adornan sus tallos. Durante siglos, los pueblos indígenas han transmitido mediante relatos orales y prácticas comunitarias el conocimiento sobre sus propiedades antiinflamatorias y antioxidantes para fortalecer el sistema inmunológico y aliviar dolores articulares.<br><br>
                                Actualmente es reconocida a nivel internacional por la medicina natural, lo que representa una oportunidad económica, pero exige una recolección sostenible para evitar la deforestación y la sobreexplotación de la especie.
                            </div>
                            <div class="mcq-grid">
                                <div class="mcq-item">
                                    <p>1.1. ¿Cuál es el nombre científico de la uña de gato?</p>
                                    <ul class="mcq-options">
                                        <li>A) Uncaria tomentosa &nbsp;&nbsp; B) Uncaria guianensis</li>
                                        <li>C) Uncaria montana &nbsp;&nbsp; D) Uncaria peruensis</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.2. ¿Cómo se transmite el conocimiento sobre esta planta en las culturas indígenas?</p>
                                    <ul class="mcq-options">
                                        <li>A) A través de contratos comerciales</li>
                                        <li>B) Mediante charlas y relatos orales entre generaciones</li>
                                        <li>C) Únicamente por manuales impresos</li>
                                        <li>D) Con la ayuda de videos digitales</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.3. ¿Cómo está siendo reconocida la uña de gato a nivel internacional?</p>
                                    <ul class="mcq-options">
                                        <li>A) Como planta ornamental sin valor medicinal</li>
                                        <li>B) Como planta medicinal beneficiosa para el sistema inmunológico</li>
                                        <li>C) Como especie invasora &nbsp;&nbsp; D) Como madera industrial</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.4. ¿Qué desafío enfrentan las comunidades amazónicas con esta planta?</p>
                                    <ul class="mcq-options">
                                        <li>A) La falta de interés medicinal</li>
                                        <li>B) La deforestación y la explotación insostenible</li>
                                        <li>C) El crecimiento excesivo &nbsp;&nbsp; D) El clima frío</li>
                                    </ul>
                                </div>
                                <div class="mcq-item">
                                    <p>1.5. ¿Qué impacto negativo puede tener el comercio internacional sin control?</p>
                                    <ul class="mcq-options">
                                        <li>A) Fomenta la conservación automáticamente</li>
                                        <li>B) Incrementa el riesgo de sobreexplotación y afecta la biodiversidad</li>
                                        <li>C) No tiene ningún impacto &nbsp;&nbsp; D) Mejora la calidad del suelo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD (SABERES ANCESTRALES Y COMERCIO JUSTO)</span>
                            <p><strong>2.1.</strong> ¿Por qué es fundamental respetar la tradición oral y los métodos de cosecha sostenible de los pueblos indígenas amazónicos frente a la demanda farmacéutica internacional?</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD (RELATO CORTO SOBRE MITOS Y CREENCIAS)</span>
                            <p><strong>3.1.</strong> Redacta un relato corto basado en una leyenda o mito amazónico donde un sabio o curandero enseña el respeto hacia la planta uña de gato y la selva:</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                    `
                },
                "Matemática": {
                    resumenCorto: "Tabla de costos de maqueta (2 distribuidores), media aritmética de madurez (años) y producción diaria (kg), área de bosque (120×85 m) y ganancia neta de exportación.",
                    rolesEquipo: [
                        { rol: "Cotizador/a de Materiales", tarea: "Compara los precios entre el Distribuidor 1 y el Distribuidor 2." },
                        { rol: "Analista de Promedios", tarea: "Calcula la media aritmética del tiempo de madurez y producción diaria." },
                        { rol: "Topógrafo/a del Bosque", tarea: "Calcula el área rectangular delimitada para la plantación (120 × 85 m)." },
                        { rol: "Contador/a de Exportación", tarea: "Determina ingresos, costos y ganancia neta de la empresa exportadora." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y COSTOS DE FABRICACIÓN DE MAQUETAS</span>
                            <p><strong>1.1.</strong> Completa los precios de dos distribuidores para elaborar la maqueta del hábitat y ciclo de vida, y calcula la diferencia total:</p>
                            <table class="work-table">
                                <thead>
                                    <tr><th>Materiales para Maqueta</th><th>Distribuidor 1 ($)</th><th>Distribuidor 2 ($)</th><th>Diferencia ($)</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1. Base de madera / cartón prensado (60×40 cm)</td><td>$ 3,20</td><td>$ 2,85</td><td></td></tr>
                                    <tr><td>2. Plastilina / masa moldeable y alambre</td><td>$ 2,90</td><td>$ 3,15</td><td></td></tr>
                                    <tr><td>3. Follaje artificial, musgo y pintura acrílica</td><td>$ 4,10</td><td>$ 3,75</td><td></td></tr>
                                    <tr><td><strong>VALOR TOTAL ($)</strong></td><td></td><td></td><td></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD Y EJERCICIOS DE MEDIA ARITMÉTICA</span>
                            <p><strong>2.1.</strong> Se han recopilado datos sobre el tiempo de madurez (en años) de cinco plantas "uña de gato": <strong>Planta 1: 3,8 años | Planta 2: 4,5 años | Planta 3: 4,2 años | Planta 4: 5,1 años | Planta 5: 3,9 años</strong>. Calcula la media aritmética:</p>
                            <div class="math-grid-box"></div>
                            <p><strong>2.2.</strong> En una planta procesadora se registró la producción diaria (en kg) durante seis días: <strong>Día 1: 142,5 kg | Día 2: 155,8 kg | Día 3: 168,3 kg | Día 4: 140,2 kg | Día 5: 170,7 kg | Día 6: 160,4 kg</strong>. Calcula el promedio diario:</p>
                            <div class="math-grid-box"></div>
                        </div>

                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD Y CASOS DE ÁREA Y EXPORTACIÓN</span>
                            <p><strong>3.1.</strong> Se ha delimitado un área rectangular dentro del bosque para plantar "uña de gato" de <strong>120 metros de longitud por 85 metros de ancho</strong>. Calcula el área total en $m^2$:</p>
                            <div class="math-grid-box"></div>
                            <p><strong>3.2.</strong> Una empresa exportadora produjo <strong>8.750 kg</strong> durante el mes. El precio de exportación es de <strong>$9,25 por kg</strong> y el costo de producción es de <strong>$3,40 por kg</strong>. Calcula: a) Ingreso total, b) Costo total y c) Ganancia neta:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Ciencias Naturales": {
                    resumenCorto: "Morfología de Uncaria tomentosa, componentes activos, 5 beneficios medicinales, contraindicaciones y medidas contra la deforestación amazónica.",
                    rolesEquipo: [
                        { rol: "Botánico/a Amazónico/a", tarea: "Describe la morfología, hábitat y proceso paso a paso de cosecha." },
                        { rol: "Especialista Medicinal", tarea: "Identifica 5 propiedades curativas, compuestos activos y contraindicaciones." },
                        { rol: "Defensor/a de la Selva", tarea: "Analiza los efectos de la deforestación y propone medidas preventivas." },
                        { rol: "Diseñador/a del Ciclo Vital", tarea: "Dibuja el primer boceto de la maqueta del hábitat y ciclo de vida." }
                    ],
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN: ASPECTOS BOTÁNICOS Y MEDICINALES</span>
                            <p><strong>1.1.</strong> Describe las características físicas de la "uña de gato" (<em>Uncaria tomentosa</em>), su hábitat y cómo se recolecta paso a paso sin destruir la raíz:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                            <p><strong>1.2. Aspectos Medicinales:</strong> Escribe 5 beneficios medicinales, sus formas de consumo (infusiones, extractos) y si existen contraindicaciones o riesgos:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD: IMPACTO AMBIENTAL EN LA AMAZONÍA</span>
                            <p><strong>2.1.</strong> Explora los efectos ambientales ocasionados por la deforestación en la Amazonía ecuatoriana y responde: ¿Qué medidas de prevención tomarías para disminuir este impacto?</p>
                            <div class="write-lines"></div><div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">3. CREATIVIDAD: BOCETO DE MAQUETA DEL HÁBITAT</span>
                            <p><strong>3.1.</strong> Dibuja el primer boceto de la maqueta sobre el hábitat y ciclo de vida de la planta uña de gato:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                },
                "Ciencias Sociales": {
                    resumenCorto: "Mapa de distribución de cultivos en la Amazonía ecuatoriana y análisis de rutas de exportación internacional.",
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. COLABORACIÓN Y CARTOGRAFÍA COMERCIAL</span>
                            <p><strong>1.1.</strong> Identifica las provincias amazónicas donde se cultiva la uña de gato y los mercados internacionales que la importan:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                        <div class="sec-3c">
                            <span class="badge-3c">2. CRITICIDAD ECONÓMICA</span>
                            <p><strong>2.1.</strong> Discute cómo el comercio de la uña de gato beneficia o afecta a las comunidades locales amazónicas:</p>
                            <div class="write-lines"></div><div class="write-lines"></div>
                        </div>
                    `
                },
                "Educación Cultural y Artística": {
                    resumenCorto: "Ilustración botánica de las espinas y hojas de Uncaria tomentosa.",
                    contenidoCompleto: `
                        <div class="sec-3c">
                            <span class="badge-3c">1. CREATIVIDAD BOTÁNICA</span>
                            <p><strong>1.1.</strong> Realiza una lámina artística detallando las espinas en forma de garra y las hojas de la planta:</p>
                            <div class="math-grid-box"></div>
                        </div>
                    `
                }
            },
            fase2: {
                formato: "Maqueta del Hábitat Amazónico (60 × 40 cm) + Ficha Botánica",
                medidas: "Base de 60 cm × 40 cm. Altura de árboles principales: 25 cm.",
                bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                    <rect x="10" y="10" width="220" height="90" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
                    <rect x="45" y="25" width="16" height="65" fill="#78350f"/>
                    <circle cx="53" cy="25" r="20" fill="#16a34a"/>
                    <path d="M 53 85 Q 80 60 53 40" fill="none" stroke="#b45309" stroke-width="3"/>
                    <text x="145" y="55" font-size="9" text-anchor="middle" fill="#14532d">Liana Uña de Gato + Río Amazónico</text>
                    <text x="120" y="95" font-size="8" text-anchor="middle" fill="#166534">Base: 60 × 40 cm</text>
                </svg>`,
                instrucciones: "Modelar la liana con sus espinas características enredada en un árbol amazónico junto a un río y rótulos de exportación."
            },
            fase3: {
                guion: "«Bienvenidos a la Amazonía. Hoy les presentamos la Uña de Gato (Uncaria tomentosa), analizando sus propiedades medicinales, los cálculos de exportación sostenible y nuestro relato ancestral...»",
                dinamica: "Explicación del modelo botánico, demostración de ganancia neta y lectura del relato."
            }
        },

        // --------------------------------------------------------------------
