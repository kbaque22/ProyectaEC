// ============================================================================
// ARCHIVO 3: DATOS_GRUPOS.JS - GUÍAS DE TRABAJO POR REGIÓN Y MATERIA
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
                "Lengua y Literatura": `
                    <div class="reading-passage">
                        <strong>📖 Lectura Base: Conociendo el Camarón y su Importancia en la Costa Ecuatoriana</strong><br><br>
                        El camarón es uno de los productos más valiosos en la economía de la Costa ecuatoriana. Esta pequeña criatura marina no solo es una fuente importante de alimento, sino también un pilar fundamental para muchas familias y comunidades en la región. El camarón es un tipo de crustáceo que vive en ambientes marinos y de agua dulce; en las zonas costeras de Ecuador se cría principalmente en estanques y granjas especializadas.<br><br>
                        <strong>Desarrollo Histórico y Desafíos:</strong> La industria camaronera en Ecuador comenzó a desarrollarse significativamente en los años 60 y 70. Inicialmente se cultivaba de manera artesanal, pero evolucionó hacia métodos más avanzados hasta convertir al país en uno de los mayores exportadores del mundo. Sin embargo, enfrenta desafíos importantes como las condiciones laborales en las granjas, la gestión sostenible de los recursos naturales y el cuidado de los manglares.
                    </div>
                    <p><strong>1. Comprensión Lectora (Marca con una X la respuesta correcta):</strong></p>
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
                    </div>
                    <p style="margin-top:14px;"><strong>2. Producción Escrita - Poema Colectivo "El Guardián del Estuario":</strong><br>
                    Escribe una estrofa de 4 versos con imágenes poéticas que reflejen el trabajo de los pescadores, la vida en el estuario y la importancia del camarón:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Matemática": `
                    <p><strong>1. Análisis Estadístico - Exportaciones Ecuatorianas de Camarón (Toneladas):</strong></p>
                    <table class="work-table">
                        <thead>
                            <tr>
                                <th>Año</th><th>2017</th><th>2018</th><th>2019</th><th>2020</th><th>2021</th><th>2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Toneladas</strong></td><td>441.539</td><td>512.108</td><td>645.043</td><td>688.489</td><td>847.982</td><td>1.068.961</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>• ¿En qué año se obtuvo la menor y la mayor exportación en toneladas? ________________________________________</p>
                    <p>• <strong>Media Aritmética:</strong> Calcula el promedio de exportación de camarón de estos últimos 6 años (realiza el procedimiento en la cuadrícula):</p>
                    <div class="math-grid-box"></div>

                    <p><strong>2. Caso Geométrico - Área de un Criadero Artificial:</strong><br>
                    Un criadero rectangular mide <strong>60 m de ancho por 30 m de alto</strong>. Dentro se colocan dos piscinas cuadradas para larvas de <strong>10 m de lado</strong> cada una. Calcula el área libre (región exterior a las piscinas):</p>
                    <div class="math-grid-box"></div>

                    <p><strong>3. Operaciones con Decimales - Alimentación Diaria:</strong><br>
                    a) Cada camarón consume <strong>0,15 gramos</strong> de alimento al día. Si el criadero tiene <strong>12.350 camarones</strong>, ¿cuántos gramos se necesitan al día y cuánto costará si cada gramo cuesta <strong>$0,02</strong>?<br>
                    b) Si en otro estanque se tienen <strong>9.720 gramos</strong> de alimento para repartir uniformemente entre <strong>3.240 camarones</strong>, ¿cuántos gramos recibe cada uno?</p>
                    <div class="math-grid-box"></div>
                `,
                "Ciencias Naturales": `
                    <p><strong>1. Ciclo de Vida del Camarón:</strong> Investiga y describe las 5 etapas del desarrollo del camarón (desde huevo/larva hasta adulto):</p>
                    <p>1. _____________________ 2. _____________________ 3. _____________________ 4. _____________________ 5. _____________________</p>
                    <p><strong>2. Hábitat y Criadero Artificial:</strong> ¿Qué temperatura y nivel de salinidad debe tener el agua para que los camarones crezcan saludables?</p>
                    <div class="write-lines"></div>
                    <p><strong>3. Impacto Ambiental y Prevención:</strong> Describe un efecto ambiental de los criaderos en los manglares y una medida de prevención:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Ciencias Sociales": `
                    <p><strong>1. Cartografía de Zonas Camaroneras:</strong> Ubica en un mapa físico de la Costa ecuatoriana con símbolos y leyenda las 5 provincias principales: <em>Guayas, El Oro, Esmeraldas, Manabí y Santa Elena</em>.</p>
                    <p><strong>2. Análisis Socioeconómico:</strong> Explica por qué la industria camaronera es vital para el empleo rural en la Costa y qué mejoras laborales requiere:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Educación Cultural y Artística": `
                    <p><strong>1. Diseño Gráfico y Simbología:</strong> Dibuja 3 íconos originales (camarón, manglar, estanque) que servirán como leyenda visual en tu maqueta y poemario ilustrado:</p>
                    <div class="math-grid-box"></div>
                `
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
                "Lengua y Literatura": `
                    <div class="reading-passage">
                        <strong>📖 Lectura Base: Las Máscaras de Tigua, un Tesoro Cultural Andino</strong><br><br>
                        Las máscaras de Tigua son una de las formas más destacadas de expresión artística y cultural de la Sierra ecuatoriana, originarias de la parroquia Tigua, en la provincia de Cotopaxi. Conocidas por su vibrante colorido y sus intrincadas representaciones de la fauna local (cóndor, puma, serpiente) y figuras míticas, reflejan la cosmovisión andina y el vínculo espiritual entre los seres humanos y la naturaleza.<br><br>
                        Se utilizan principalmente durante el <strong>Inti Raymi (Fiesta del Sol)</strong> y celebraciones comunitarias que agradecen por el ciclo agrícola y las cosechas. Los artesanos las elaboran tallando madera blanda (como pino o pucará) o modelando papel maché, pintándolas luego con colores brillantes y patrones geométricos.
                    </div>
                    <p><strong>1. Comprensión Lectora (Marca con una X la respuesta correcta):</strong></p>
                    <div class="mcq-grid">
                        <div class="mcq-item">
                            <p>1.1. ¿Qué representa principalmente una máscara de Tigua?</p>
                            <ul class="mcq-options">
                                <li>A) Personajes históricos modernos</li>
                                <li>B) Figuras mitológicas y animales de la fauna local</li>
                                <li>C) Elementos urbanos</li>
                                <li>D) Comida típica</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.2. ¿Cuál es un elemento visual característico de estas máscaras?</p>
                            <ul class="mcq-options">
                                <li>A) Colores apagados y tonos grises</li>
                                <li>B) Colores vibrantes y representaciones de la fauna local</li>
                                <li>C) Materiales metálicos</li>
                                <li>D) Formas abstractas sin color</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.3. ¿En qué festividades tradicionales se utilizan?</p>
                            <ul class="mcq-options">
                                <li>A) Navidad y Año Nuevo</li>
                                <li>B) Carnaval y Fiesta del Inti Raymi</li>
                                <li>C) Día de la Madre</li>
                                <li>D) Feria del Libro</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.4. ¿Qué materiales se utilizan tradicionalmente para hacerlas?</p>
                            <ul class="mcq-options">
                                <li>A) Plástico y metal &nbsp;&nbsp; B) Papel maché y madera</li>
                                <li>C) Tela y vidrio &nbsp;&nbsp; D) Cerámica y piedra</li>
                            </ul>
                        </div>
                    </div>
                    <p style="margin-top:14px;"><strong>2. Creación Literaria - Leyenda o Mito sobre las Máscaras de Tigua:</strong><br>
                    Escribe un relato corto o leyenda protagonizado por uno de los animales sagrados de las máscaras (el cóndor, el puma o el lobo de páramo) durante el Inti Raymi:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Matemática": `
                    <p><strong>1. Presupuesto y Comparación de Distribuidores:</strong><br>
                    Completa y compara los costos estimados de materiales entre dos distribuidores:</p>
                    <table class="work-table">
                        <thead>
                            <tr><th>Material</th><th>Distribuidor 1 ($)</th><th>Distribuidor 2 ($)</th><th>Diferencia ($)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>1. Base de madera / cartón prensado</td><td>$ 3,50</td><td>$ 2,90</td><td></td></tr>
                            <tr><td>2. Pinturas acrílicas / pigmentos (set)</td><td>$ 4,80</td><td>$ 5,20</td><td></td></tr>
                            <tr><td>3. Pinceles finos y lija</td><td>$ 2,25</td><td>$ 1,95</td><td></td></tr>
                            <tr><td><strong>TOTAL ($)</strong></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>

                    <p><strong>2. Estadística - Tiempo Promedio de Elaboración (Media Aritmética):</strong><br>
                    Cinco artesanos registraron los días que tardaron en tallar y pintar una máscara: <strong>María: 10,5 días | Carlos: 20,8 días | Ana: 18,2 días | Pablo: 27,8 días | Sofía: 16,5 días</strong>. Calcula el tiempo promedio:</p>
                    <div class="math-grid-box"></div>

                    <p><strong>3. Geometría - Área de la Máscara y los Ojos:</strong><br>
                    a) La base cuadrada de una máscara mide <strong>12,5 cm de lado</strong>. Calcula su área total ($A = l \times l$). Si se pinta solo el <strong>75%</strong> de la base, ¿cuántos $cm^2$ quedan sin pintar?<br>
                    b) Cada ojo circular tiene un radio de <strong>2,8 cm</strong>. Calcula el área de un ojo ($A = \pi \times r^2$):</p>
                    <div class="math-grid-box"></div>
                `,
                "Ciencias Naturales": `
                    <p><strong>1. Recursos Forestales y Tintes Naturales:</strong><br>
                    • ¿Qué características tiene la madera de pino y qué beneficios aporta este árbol al suelo de la Sierra?<br>
                    • Investiga 2 plantas o minerales locales de los que se extraen tintes naturales y explica su diferencia con los tintes sintéticos:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Ciencias Sociales": `
                    <p><strong>1. Patrimonio Cultural y Cosmovisión Andina:</strong><br>
                    Explica el significado histórico de la parroquia Tigua (Cotopaxi) y el rol de las máscaras durante el solsticio de verano (Inti Raymi):</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Educación Cultural y Artística": `
                    <p><strong>1. Boceto Geométrico de la Máscara de Tigua:</strong><br>
                    Dibuja el diseño preliminar de tu máscara integrando simetría, patrones geométricos y fauna andina:</p>
                    <div class="math-grid-box"></div>
                `
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
                "Lengua y Literatura": `
                    <div class="reading-passage">
                        <strong>📖 Lectura Base: La Uña de Gato, un Regalo Medicinal de la Amazonía</strong><br><br>
                        La uña de gato (<em>Uncaria tomentosa</em>) es una planta trepadora medicinal originaria de los bosques tropicales de América del Sur, muy valorada en la Amazonía ecuatoriana. Su nombre proviene de las espinas curvas en forma de garras que adornan sus tallos. Durante siglos, los pueblos indígenas han transmitido mediante relatos orales el conocimiento sobre sus propiedades antiinflamatorias y antioxidantes para fortalecer el sistema inmunológico.<br><br>
                        Actualmente es reconocida a nivel internacional, lo que representa una oportunidad económica, pero también exige una recolección sostenible para evitar la deforestación y la sobreexplotación de la especie.
                    </div>
                    <p><strong>1. Comprensión Lectora (Marca con una X la respuesta correcta):</strong></p>
                    <div class="mcq-grid">
                        <div class="mcq-item">
                            <p>1.1. ¿Cuál es el nombre científico de la uña de gato?</p>
                            <ul class="mcq-options">
                                <li>A) Uncaria tomentosa &nbsp;&nbsp; B) Uncaria guianensis</li>
                                <li>C) Uncaria montana &nbsp;&nbsp; D) Uncaria peruensis</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.2. ¿Cómo se transmite este conocimiento en las culturas indígenas?</p>
                            <ul class="mcq-options">
                                <li>A) A través de contratos comerciales</li>
                                <li>B) Mediante charlas y relatos orales entre generaciones</li>
                                <li>C) Únicamente por manuales impresos</li>
                                <li>D) Por redes sociales</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.3. ¿Cómo es reconocida la uña de gato a nivel internacional?</p>
                            <ul class="mcq-options">
                                <li>A) Como planta ornamental sin valor</li>
                                <li>B) Como planta medicinal beneficiosa para el sistema inmunológico</li>
                                <li>C) Como especie invasora</li>
                                <li>D) Como madera para muebles</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.4. ¿Qué riesgo genera el comercio internacional sin control?</p>
                            <ul class="mcq-options">
                                <li>A) Mejora automática del suelo</li>
                                <li>B) Riesgo de explotación insostenible y pérdida de biodiversidad</li>
                                <li>C) No tiene ningún impacto</li>
                                <li>D) Exceso de lluvias</li>
                            </ul>
                        </div>
                    </div>
                    <p style="margin-top:14px;"><strong>2. Relato Corto sobre Mitos y Saberes de la Selva:</strong><br>
                    Redacta un relato breve sobre un sabio o curandero amazónico que enseña a los jóvenes a recolectar la corteza de la uña de gato sin dañar el bosque:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Matemática": `
                    <p><strong>1. Estadística - Tiempo de Madurez y Producción Diaria (Media Aritmética):</strong><br>
                    a) Se registró el tiempo de madurez (en años) de 5 plantas de uña de gato: <strong>3,8 | 4,5 | 4,2 | 5,1 | 3,9</strong>. Calcula la media aritmética:<br>
                    b) Una planta procesadora registró la producción diaria (en kg) durante 6 días: <strong>142,5 kg | 155,8 kg | 168,3 kg | 140,2 kg | 170,7 kg | 160,4 kg</strong>. Calcula el promedio diario:</p>
                    <div class="math-grid-box"></div>

                    <p><strong>2. Caso Geométrico y Financiero - Plantación y Exportación:</strong><br>
                    a) Se delimita una sección rectangular del bosque de <strong>120 metros de largo por 85 metros de ancho</strong> para cultivo sostenible. Calcula su área total en $m^2$.<br>
                    b) Una asociación exporta <strong>8.750 kg</strong> a <strong>$9,25 por kg</strong>, con un costo de producción de <strong>$3,40 por kg</strong>. Calcula: 1) Ingreso total, 2) Costo total y 3) Ganancia neta:</p>
                    <div class="math-grid-box"></div>
                `,
                "Ciencias Naturales": `
                    <p><strong>1. Morfología, Beneficios y Conservación:</strong><br>
                    • Describe las características físicas de la planta (espinas, tallo trepador, corteza) y menciona 3 beneficios medicinales.<br>
                    • ¿Qué medidas de prevención propones para evitar la deforestación en la Amazonía ecuatoriana?</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Ciencias Sociales": `
                    <p><strong>1. Mapa de Cultivo y Rutas Comerciales:</strong><br>
                    Ubica las provincias amazónicas productoras (Napo, Pastaza, Orellana, Sucumbíos, Morona Santiago, Zamora Chinchipe) y explica cómo el comercio justo beneficia a las comunidades locales:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Educación Cultural y Artística": `
                    <p><strong>1. Boceto de Maqueta del Hábitat Amazónico:</strong><br>
                    Dibuja la estructura de la planta trepadora <em>Uncaria tomentosa</em> junto a los árboles del bosque húmedo:</p>
                    <div class="math-grid-box"></div>
                `
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
        // GRUPO D: REGIÓN INSULAR GALÁPAGOS (EL VOLCÁN SIERRA NEGRA)
        // --------------------------------------------------------------------
        {
            letra: "Grupo D",
            nombreCreativo: "El Rugido del Volcán Sierra Negra: Geología y Vida (Galápagos)",
            enfoque: "Región Insular (Galápagos)",
            productoFinal: "Maqueta Volcánica con Caldera a Escala + Entrevista Simulada",
            guiasPorMateria: {
                "Lengua y Literatura": `
                    <div class="reading-passage">
                        <strong>📖 Lectura Base: El Volcán Sierra Negra en la Isla Isabela</strong><br><br>
                        El volcán Sierra Negra está ubicado al sur de la isla Isabela, la más grande del archipiélago de Galápagos. Con una altitud aproximada de <strong>1.093 metros</strong> sobre el nivel del mar, posee una de las calderas volcánicas más grandes del mundo, con un diámetro de aproximadamente <strong>9 kilómetros</strong>. Es uno de los volcanes más activos de Galápagos, destacando sus erupciones recientes de <strong>2005</strong> (cuando flujos de lava llegaron al océano) y <strong>2018</strong>.<br><br>
                        El Instituto Charles Darwin y las autoridades ambientales realizan un monitoreo constante y mantienen planes de emergencia para proteger tanto a las comunidades como a las especies endémicas que habitan en sus alrededores.
                    </div>
                    <p><strong>1. Comprensión Lectora (Marca con una X la respuesta correcta):</strong></p>
                    <div class="mcq-grid">
                        <div class="mcq-item">
                            <p>1.1. ¿En qué isla se encuentra ubicado el Volcán Sierra Negra?</p>
                            <ul class="mcq-options">
                                <li>A) Isla Santa Cruz &nbsp;&nbsp; B) Isla Española</li>
                                <li>C) Isla Isabela &nbsp;&nbsp; D) Isla Floreana</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.2. ¿Cuál es una característica destacada de su caldera?</p>
                            <ul class="mcq-options">
                                <li>A) Tiene un diámetro de 5 km</li>
                                <li>B) Es una de las más grandes del mundo con ~9 km de diámetro</li>
                                <li>C) Está sumergida bajo el mar</li>
                                <li>D) Es la más pequeña de Galápagos</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.3. ¿Qué organización realiza el monitoreo volcánico constante?</p>
                            <ul class="mcq-options">
                                <li>A) Agencia Espacial Europea</li>
                                <li>B) El Instituto Charles Darwin</li>
                                <li>C) Fundación Nacional de Ciencias</li>
                                <li>D) Ninguna organización</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.4. ¿Qué impacto tienen las erupciones en la flora y fauna?</p>
                            <ul class="mcq-options">
                                <li>A) Solo afectan especies marinas</li>
                                <li>B) Alteran hábitats existentes y crean nuevos para especies pioneras</li>
                                <li>C) No producen ningún cambio</li>
                                <li>D) Congelan el suelo</li>
                            </ul>
                        </div>
                    </div>
                    <p style="margin-top:14px;"><strong>2. Guion de Entrevista Simulada (Científico/a y Habitante de Isabela):</strong><br>
                    Redacta 3 preguntas con sus respuestas simuladas sobre los riesgos sísmicos y medidas de protección tras la erupción de 2018:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Matemática": `
                    <p><strong>1. Estadística - Magnitud Sísmica y Visitantes (Media Aritmética):</strong><br>
                    a) Durante la erupción de 2018 se registraron 7 sismos de magnitudes: <strong>5,1 | 4,8 | 4,2 | 3,9 | 4,0 | 3,7 | 5,3</strong>. Calcula la magnitud promedio.<br>
                    b) Visitantes anuales al volcán Sierra Negra: <strong>2019: 18.600 | 2020: 25.200 | 2021: 34.850 | 2022: 36.750 | 2023: 38.100</strong>. Calcula la media aritmética de turistas:</p>
                    <div class="math-grid-box"></div>

                    <p><strong>2. Geometría Circular y Turismo - Caldera de 9 km:</strong><br>
                    a) La caldera del Sierra Negra tiene un <strong>diámetro de 9 km</strong> (radio = 4,5 km). Calcula la longitud de su circunferencia ($C = \pi \times d$) y el área del cráter ($A = \pi \times r^2$).<br>
                    b) En 2023 llegaron <strong>267.688 turistas</strong> a Galápagos: <strong>150.000 internacionales</strong> (gastaron $300/día por 5 días) y el resto <strong>nacionales</strong> (gastaron $150/día por 3 días). ¿Cuántos turistas nacionales llegaron y cuánto gastó en total cada tipo de turista?</p>
                    <div class="math-grid-box"></div>
                `,
                "Ciencias Naturales": `
                    <p><strong>1. Geología Volcánica y Especies Endémicas:</strong><br>
                    • Explica cómo se formaron las Islas Galápagos y qué diferencia al volcán Sierra Negra de otros volcanes de Isabela (Wolf o Cerro Azul).<br>
                    • ¿Cómo beneficia el suelo volcánico al crecimiento de especies pioneras tras una erupción?</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Ciencias Sociales": `
                    <p><strong>1. Línea de Tiempo de Erupciones y Planes de Emergencia:</strong><br>
                    Construye una línea de tiempo con los eventos volcánicos de 2005 y 2018 y describe los planes de evacuación de la población de Puerto Villamil:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Educación Cultural y Artística": `
                    <p><strong>1. Mapa Topográfico de Volcanes Activos de Galápagos:</strong><br>
                    Dibuja la silueta de la Isla Isabela destacando la gran caldera circular del Sierra Negra:</p>
                    <div class="math-grid-box"></div>
                `
            },
            fase2: {
                formato: "Maqueta Topográfica del Volcán Sierra Negra con Caldera Circular",
                medidas: "Base de 50 cm × 50 cm. Diámetro de caldera a escala: 22,5 cm (Escala 1 cm = 0,4 km).",
                bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                    <rect x="15" y="10" width="210" height="90" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                    <polygon points="45,90 90,30 150,30 195,90" fill="#57534e"/>
                    <ellipse cx="120" cy="30" rx="30" ry="8" fill="#ea580c" stroke="#fef08a" stroke-width="1.5"/>
                    <text x="120" y="65" font-size="9" text-anchor="middle" fill="white" font-weight="bold">Caldera 9 km (Escala)</text>
                    <text x="120" y="96" font-size="8" text-anchor="middle" fill="#0c4a6e">Base 50 × 50 cm (Isla Isabela)</text>
                </svg>`,
                instrucciones: "Representar la caldera expansiva de 9 km de diámetro, flujos de lava de 2005/2018 y zonas de monitoreo."
            },
            fase3: {
                guion: "«Bienvenidos a la Isla Isabela en Galápagos. Presentamos nuestra maqueta del Volcán Sierra Negra, calculando el área de su inmensa caldera de 9 km y realizando una entrevista en vivo...»",
                dinamica: "Entrevista simulada entre un periodista, un vulcanólogo del Instituto Charles Darwin y un habitante."
            }
        },

        // --------------------------------------------------------------------
        // GRUPO E: INTEGRACIÓN NACIONAL (LOS 4 MUNDOS DEL ECUADOR)
        // --------------------------------------------------------------------
        {
            letra: "Grupo E",
            nombreCreativo: "Travesía por los 4 Mundos: Integración y Comercio Nacional",
            enfoque: "Integración Nacional e Interculturalidad",
            productoFinal: "Tablero Interactivo de los 4 Mundos (1.20 × 1.20 m) + Banco de Retos",
            guiasPorMateria: {
                "Lengua y Literatura": `
                    <div class="reading-passage">
                        <strong>📖 Lectura Base: Ecuador Intercultural, Cuatro Regiones Conectadas</strong><br><br>
                        El Ecuador integra en un mismo territorio la riqueza exportadora de la Costa, la tradición agrícola y artesanal de la Sierra, la megadiversidad medicinal de la Amazonía y el laboratorio natural de Galápagos. El intercambio constante de alimentos, saberes ancestrales y expresiones literarias fortalece nuestra identidad nacional.
                    </div>
                    <p><strong>1. Comprensión Lectora (Marca con una X la respuesta correcta):</strong></p>
                    <div class="mcq-grid">
                        <div class="mcq-item">
                            <p>1.1. ¿Qué une económicamente a las cuatro regiones del Ecuador?</p>
                            <ul class="mcq-options">
                                <li>A) El aislamiento comercial</li>
                                <li>B) El intercambio constante de alimentos, recursos y saberes</li>
                                <li>C) El uso de un solo cultivo</li>
                                <li>D) La eliminación del transporte</li>
                            </ul>
                        </div>
                        <div class="mcq-item">
                            <p>1.2. ¿Qué característica define la identidad del Ecuador?</p>
                            <ul class="mcq-options">
                                <li>A) Monocultivo uniforme</li>
                                <li>B) Interculturalidad y diversidad regional</li>
                                <li>C) Clima idéntico en todo el país</li>
                                <li>D) Ausencia de tradiciones orales</li>
                            </ul>
                        </div>
                    </div>
                    <p style="margin-top:14px;"><strong>2. Redacción de Reglamento y Tarjetas Literarias:</strong><br>
                    Redacta 4 instrucciones claras para el juego de mesa nacional y 2 acertijos poéticos sobre el Ecuador:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Matemática": `
                    <p><strong>1. Geometría y Comercio Interregional:</strong><br>
                    a) Calcula el perímetro y el área de nuestro tablero cuadrado de piso de <strong>1,20 m × 1,20 m</strong>.<br>
                    b) Un transporte lleva <strong>2.450 kg</strong> de productos de la Sierra a la Costa. Descarga <strong>1.125,75 kg</strong> en Guayaquil y el resto en Machala. ¿Cuántos kilogramos llegaron a Machala?</p>
                    <div class="math-grid-box"></div>
                `,
                "Ciencias Naturales": `
                    <p><strong>1. Comparativa de Ecosistemas:</strong><br>
                    Escribe 1 especie emblemática y 1 acción de conservación para cada una de las 4 regiones del Ecuador:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Ciencias Sociales": `
                    <p><strong>1. Intercambio Comercial entre Regiones:</strong><br>
                    Completa qué productos viajan de la Costa a la Sierra y de la Sierra a la Costa:</p>
                    <div class="write-lines"></div>
                    <div class="write-lines"></div>
                `,
                "Educación Cultural y Artística": `
                    <p><strong>1. Diseño del Tablero de 4 Colores:</strong><br>
                    Bosqueja el recorrido de casillas representando Costa (amarillo), Sierra (azul), Amazonía (verde) y Galápagos (turquesa):</p>
                    <div class="math-grid-box"></div>
                `
            },
            fase2: {
                formato: "Tablero de Piso Interactivo + Dado Gigante",
                medidas: "Tablero de 1.20 m × 1.20 m (Área: 1.44 m²). Dado de 20 × 20 cm.",
                bocetoSVG: `<svg width="240" height="110" viewBox="0 0 240 110">
                    <rect x="75" y="10" width="90" height="90" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
                    <line x1="75" y1="40" x2="165" y2="40" stroke="#ca8a04"/>
                    <line x1="75" y1="70" x2="165" y2="70" stroke="#ca8a04"/>
                    <line x1="105" y1="10" x2="105" y2="100" stroke="#ca8a04"/>
                    <line x1="135" y1="10" x2="135" y2="100" stroke="#ca8a04"/>
                    <text x="120" y="108" font-size="8" text-anchor="middle" fill="#854d0e">Tablero 1.20 × 1.20 m</text>
                </svg>`,
                instrucciones: "Construir casillas por región con tarjetas de preguntas de comprensión lectora y cálculo rápido."
            },
            fase3: {
                guion: "«Ecuador es un solo corazón con cuatro mundos. Los invitamos a lanzar nuestro dado gigante y superar los retos de cada región...»",
                dinamica: "Los estudiantes del Grupo E dirigen el juego con los docentes y visitantes."
            }
        }
    ];
}
