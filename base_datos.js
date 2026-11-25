<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio Proyecta S - Planificador Curricular Ecuador</title>
    <script src="base_datos.js"></script>
    <style>
        :root {
            --primary: #1e3a8a;
            --secondary: #0d9488;
            --accent: #f59e0b;
            --bg: #f1f5f9;
            --card: #ffffff;
            --text: #1e293b;
        }
        * { box-sizing: border-box; font-family: 'Segoe UI', system-ui, sans-serif; }
        body { background-color: var(--bg); color: var(--text); margin: 0; padding: 20px; line-height: 1.5; }
        .container { max-width: 1180px; margin: auto; }
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white; padding: 26px; border-radius: 12px; text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 24px;
        }
        header h1 { margin: 0 0 8px 0; font-size: 1.85rem; }
        .motto {
            background: rgba(255,255,255,0.18); display: inline-block;
            padding: 6px 16px; border-radius: 20px; font-style: italic; font-size: 0.95rem;
        }
        .panel {
            background: var(--card); padding: 24px; border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.06); margin-bottom: 24px;
            border-top: 5px solid var(--primary);
        }
        .grid-config {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;
        }
        .form-group { display: flex; flex-direction: column; }
        label.section-label { font-weight: 700; margin-bottom: 8px; color: var(--primary); font-size: 0.95rem; }
        select, input[type="number"] {
            padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; background: #fff;
        }
        .checkbox-group { display: flex; flex-direction: column; gap: 6px; font-size: 0.92rem; }
        .checkbox-group label { cursor: pointer; display: flex; align-items: center; gap: 8px; }
        
        .nee-table-wrapper {
            margin-top: 20px; border-top: 2px dashed #e2e8f0; padding-top: 16px;
        }
        table.nee-matrix {
            width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;
        }
        table.nee-matrix th {
            background: #eff6ff; color: var(--primary); text-align: left; padding: 10px; border-bottom: 2px solid #bfdbfe;
        }
        table.nee-matrix td {
            padding: 8px 10px; border-bottom: 1px solid #e2e8f0;
        }
        .btn-generate {
            width: 100%; margin-top: 20px; background: var(--secondary); color: white; border: none;
            padding: 14px; font-size: 1.08rem; font-weight: bold; border-radius: 8px;
            cursor: pointer; transition: 0.2s;
        }
        .btn-generate:hover { background: #0f766e; }

        #resultado { display: none; }
        .project-header {
            background: #ffffff; border-left: 6px solid var(--primary);
            padding: 20px; border-radius: 10px; margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .badges { margin-bottom: 10px; }
        .badge {
            display: inline-block; background: var(--primary); color: #fff;
            padding: 4px 12px; border-radius: 6px; font-size: 0.82rem; font-weight: bold; margin-right: 6px;
        }
        .badge.inter { background: #7c3aed; }
        .badge.disc { background: #0284c7; }
        .title-selector-box {
            background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px;
            border-radius: 8px; margin: 12px 0;
        }
        .title-selector-box select { width: 100%; font-weight: bold; color: var(--primary); font-size: 1.02rem; }
        .dcd-box {
            background: #fefce8; border-left: 4px solid var(--accent);
            padding: 10px 14px; font-size: 0.9rem; color: #713f12; border-radius: 4px;
        }

        .group-tabs { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .tab-btn {
            padding: 10px 18px; border: 2px solid var(--primary); background: white;
            color: var(--primary); font-weight: bold; border-radius: 8px; cursor: pointer;
            display: flex; align-items: center; gap: 6px;
        }
        .tab-btn.active { background: var(--primary); color: white; }
        .nee-dot {
            background: #10b981; color: white; font-size: 0.75rem; padding: 2px 7px; border-radius: 10px;
        }

        /* Fase 1 amplia arriba, Fase 2 y 3 abajo para lectura cómoda de ejercicios */
        .phase-card {
            background: var(--card); border-radius: 12px; padding: 22px;
            box-shadow: 0 3px 12px rgba(0,0,0,0.06); border-top: 5px solid var(--secondary);
            margin-bottom: 20px;
        }
        .phases-bottom-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;
        }
        .phase-card.dev { border-top-color: var(--accent); margin-bottom: 0; }
        .phase-card.soc { border-top-color: #6366f1; margin-bottom: 0; }
        .phase-card h3 { margin-top: 0; color: var(--primary); }

        .guia-preview {
            background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;
            padding: 18px; margin-top: 12px; font-size: 0.92rem;
        }
        .guia-preview h4 { margin: 0 0 8px 0; color: #0f766e; font-size: 1.02rem; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; }
        .materia-block {
            background: #ffffff; border-left: 4px solid var(--secondary);
            padding: 12px 15px; border-radius: 6px; margin-top: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .materia-block ul { margin: 6px 0 0 0; padding-left: 20px; }
        .materia-block li { margin-bottom: 6px; }

        .sketch-box {
            background: #f1f5f9; border: 2px dashed #94a3b8; padding: 12px;
            border-radius: 8px; text-align: center; margin: 12px 0;
        }
        .script-box {
            background: #eef2ff; border-left: 4px solid #6366f1;
            padding: 12px; font-style: italic; border-radius: 4px; margin: 10px 0;
        }
        .inclusion-card {
            background: #ecfdf5; border: 2px solid #10b981; padding: 18px;
            border-radius: 10px; margin-top: 20px;
        }
        .inclusion-card h4 { margin: 0 0 8px 0; color: #065f46; font-size: 1.05rem; }
        .btn-print {
            display: inline-block; background: var(--primary); color: white;
            padding: 10px 16px; border-radius: 6px; font-size: 0.9rem;
            margin-top: 14px; border: none; cursor: pointer; font-weight: 600;
        }
        .btn-print:hover { background: #1e40af; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>🔬 Laboratorio Metodológico: Proyecta S</h1>
        <p>Generador Curricular y Repositorio Inclusivo (Subnivel Medio - Ecuador)</p>
        <div class="motto">"No midamos a los estudiantes por sus discapacidades, sino por las capacidades que tienen"</div>
    </header>

    <section class="panel">
        <div class="grid-config">
            <div class="form-group">
                <label class="section-label" for="grado">1. Año de Educación Básica:</label>
                <select id="grado">
                    <option value="5to">5.º Año de Básica (EGB Media)</option>
                    <option value="6to">6.º Año de Básica (EGB Media)</option>
                    <option value="7mo" selected>7.º Año de Básica (EGB Media)</option>
                </select>
            </div>

            <div class="form-group">
                <label class="section-label">2. Asignatura(s) del Proyecto (Articulación):</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" name="materia" value="Ciencias Naturales" checked> Ciencias Naturales</label>
                    <label><input type="checkbox" name="materia" value="Matemática" checked> Matemática</label>
                    <label><input type="checkbox" name="materia" value="Ciencias Sociales"> Ciencias Sociales</label>
                    <label><input type="checkbox" name="materia" value="Lengua y Literatura"> Lengua y Literatura</label>
                    <label><input type="checkbox" name="materia" value="Educación Cultural y Artística"> Educación Cultural y Artística</label>
                </div>
            </div>

            <div class="form-group">
                <label class="section-label" for="duracion">3. Duración del Proyecto:</label>
                <select id="duracion">
                    <option value="2 Semanas (10 días)">2 Semanas (10 días)</option>
                    <option value="3 Semanas (15 días)" selected>3 Semanas (15 días)</option>
                    <option value="4 Semanas (20 días)">4 Semanas (20 días)</option>
                </select>

                <label class="section-label" for="numGrupos" style="margin-top:14px;">4. Número de Grupos por Salón:</label>
                <select id="numGrupos" onchange="actualizarMatrizGrupos()">
                    <option value="3">3 Grupos (A, B, C)</option>
                    <option value="4">4 Grupos (A, B, C, D)</option>
                    <option value="5" selected>5 Grupos (A, B, C, D, E)</option>
                </select>
            </div>
        </div>

        <div class="nee-table-wrapper">
            <label class="section-label">5. Asignación de Necesidades Educativas Específicas (No asociadas a discapacidad) por Grupo:</label>
            <table class="nee-matrix">
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>¿Tiene estudiante(s) con NEE?</th>
                        <th>Tipo de Necesidad Educativa</th>
                        <th>N.º de Estudiantes</th>
                    </tr>
                </thead>
                <tbody id="tablaNEEBody"></tbody>
            </table>
        </div>

        <button class="btn-generate" onclick="generarPlanificacion()">🚀 Generar Planificación Curricular Proyecta S</button>
    </section>

    <section id="resultado">
        <div class="project-header">
            <div class="badges" id="badgesContainer"></div>
            <div class="title-selector-box">
                <label for="selectorTitulo" style="font-size:0.85rem; color:#475569; font-weight:bold;">
                    📌 Banco de Proyectos Sugeridos (Selecciona una opción de la base de datos):
                </label>
                <select id="selectorTitulo" onchange="actualizarEnfoqueProyecto()"></select>
            </div>
            <div class="dcd-box" id="dcdTexto"></div>
        </div>

        <h3>Selecciona un equipo para visualizar su ruta de 3 fases y guía interdisciplinaria:</h3>
        <div class="group-tabs" id="tabsContainer"></div>
        <div id="contenidoGrupo"></div>
    </section>
</div>

<script>
    let configuracionNEEActual = [];
    let esInterdisciplinario = false;

    window.onload = function() {
        actualizarMatrizGrupos();
    };

    function actualizarMatrizGrupos() {
        const num = parseInt(document.getElementById('numGrupos').value);
        const tbody = document.getElementById('tablaNEEBody');
        tbody.innerHTML = "";
        const letras = ["Grupo A", "Grupo B", "Grupo C", "Grupo D", "Grupo E"];

        for (let i = 0; i < num; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${letras[i]}</strong></td>
                <td>
                    <select id="tieneNEE_${i}" onchange="toggleFilaNEE(${i})">
                        <option value="no">No (Ninguno)</option>
                        <option value="si" ${i === 0 ? 'selected' : ''}>Sí</option>
                    </select>
                </td>
                <td>
                    <select id="tipoNEE_${i}" ${i === 0 ? '' : 'disabled'}>
                        <option value="dislexia">Dislexia</option>
                        <option value="discalculia">Discalculia</option>
                        <option value="disgrafia">Disgrafía</option>
                        <option value="tdah">TDAH</option>
                        <option value="altas_capacidades">Dotación Superior / Altas Capacidades</option>
                    </select>
                </td>
                <td>
                    <input type="number" id="cantNEE_${i}" min="0" max="5" value="${i === 0 ? 1 : 0}" ${i === 0 ? '' : 'disabled'} style="width:70px;">
                </td>
            `;
            tbody.appendChild(tr);
        }
    }

    function toggleFilaNEE(index) {
        const tiene = document.getElementById(`tieneNEE_${index}`).value === "si";
        document.getElementById(`tipoNEE_${index}`).disabled = !tiene;
        const cantInput = document.getElementById(`cantNEE_${index}`);
        cantInput.disabled = !tiene;
        cantInput.value = tiene ? 1 : 0;
    }

    function generarPlanificacion() {
        const grado = document.getElementById('grado').value;
        const duracion = document.getElementById('duracion').value;
        const numGrupos = parseInt(document.getElementById('numGrupos').value);
        const materias = Array.from(document.querySelectorAll('input[name="materia"]:checked')).map(el => el.value);

        if (materias.length === 0) {
            alert("Por favor, selecciona al menos una asignatura.");
            return;
        }

        configuracionNEEActual = [];
        for (let i = 0; i < numGrupos; i++) {
            const tiene = document.getElementById(`tieneNEE_${i}`).value === "si";
            const tipo = document.getElementById(`tipoNEE_${i}`).value;
            const cant = parseInt(document.getElementById(`cantNEE_${i}`).value) || 0;
            configuracionNEEActual.push({
                tiene: tiene && cant > 0,
                tipo: tipo,
                cantidad: tiene ? cant : 0
            });
        }

        const badgesDiv = document.getElementById('badgesContainer');
        const selectorTitulo = document.getElementById('selectorTitulo');
        selectorTitulo.innerHTML = "";

        if (materias.length === 1) {
            esInterdisciplinario = false;
            const mat = materias[0];
            const dataMat = BANCO_PROYECTOS.individuales[mat];
            
            badgesDiv.innerHTML = `
                <span class="badge">${grado} Año EGB</span>
                <span class="badge disc">Proyecto Disciplinar: ${mat}</span>
                <span class="badge" style="background:#0d9488;">${duracion}</span>
            `;

            dataMat.titulos.forEach((tit, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.innerText = `Opción ${idx + 1}: ${tit}`;
                selectorTitulo.appendChild(opt);
            });

            document.getElementById('dcdTexto').innerHTML = `
                <strong>Currículo Mineduc Ecuador (${grado} EGB - ${mat}):</strong><br>
                ${dataMat.dcd[grado]}
            `;
        } else {
            esInterdisciplinario = true;
            badgesDiv.innerHTML = `
                <span class="badge">${grado} Año EGB</span>
                <span class="badge inter">Proyecto Interdisciplinario (${materias.join(" + ")})</span>
                <span class="badge" style="background:#0d9488;">${duracion}</span>
            `;

            BANCO_PROYECTOS.interdisciplinarios.forEach((proy, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.innerText = `Propuesta Interdisciplinaria ${idx + 1}: ${proy.titulo}`;
                selectorTitulo.appendChild(opt);
            });

            actualizarEnfoqueProyecto();
        }

        const tabsContainer = document.getElementById('tabsContainer');
        tabsContainer.innerHTML = "";
        for (let i = 0; i < numGrupos; i++) {
            const neeInfo = configuracionNEEActual[i];
            const badgeNEE = neeInfo.tiene ? `<span class="nee-dot">+${neeInfo.cantidad} NEE</span>` : "";
            const btn = document.createElement('button');
            btn.className = "tab-btn" + (i === 0 ? " active" : "");
            btn.innerHTML = `${ESTRUCTURA_GRUPOS[i].letra} ${badgeNEE}`;
            btn.onclick = () => mostrarGrupo(i);
            tabsContainer.appendChild(btn);
        }

        document.getElementById('resultado').style.display = "block";
        mostrarGrupo(0);
    }

    function actualizarEnfoqueProyecto() {
        if (!esInterdisciplinario) return;
        const idx = document.getElementById('selectorTitulo').value;
        const proy = BANCO_PROYECTOS.interdisciplinarios[idx];
        const materias = Array.from(document.querySelectorAll('input[name="materia"]:checked')).map(el => el.value);
        document.getElementById('dcdTexto').innerHTML = `
            <strong>Articulación Curricular (${materias.join(" + ")}):</strong> ${proy.enfoque}<br>
            <em>${proy.dcd_integrada}</em>
        `;
    }

    function mostrarGrupo(index) {
        const botones = document.querySelectorAll('.tab-btn');
        botones.forEach((b, idx) => b.classList.toggle('active', idx === index));

        const g = ESTRUCTURA_GRUPOS[index];
        const neeGrupo = configuracionNEEActual[index];
        const materiasSeleccionadas = Array.from(document.querySelectorAll('input[name="materia"]:checked')).map(el => el.value);

        // Construir bloques de actividades conectados exclusivamente a las materias elegidas
        let bloquesMateriasHTML = "";
        materiasSeleccionadas.forEach(mat => {
            if (g.guiaInvestigacion.porMateria[mat]) {
                bloquesMateriasHTML += `<div class="materia-block">${g.guiaInvestigacion.porMateria[mat]}</div>`;
            }
        });

        let bloqueInclusion = "";
        if (neeGrupo.tiene) {
            const ad = ADAPTACIONES_CAPACIDADES[neeGrupo.tipo];
            bloqueInclusion = `
                <div class="inclusion-card">
                    <h4>🌟 Plan de Inclusión por Capacidades - ${g.letra} (${neeGrupo.cantidad} estudiante/s con ${ad.nombre})</h4>
                    <p><strong>Potencialidad clave que aprovechamos:</strong> ${ad.capacidadClave}</p>
                    <p><strong>Rol asignado en el equipo:</strong> ${ad.rol}</p>
                    <p><strong>Recursos diferenciados requeridos:</strong> ${ad.recursosNecesarios}</p>
                    <ul>
                        ${ad.fases.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            `;
        } else {
            bloqueInclusion = `
                <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px 16px; border-radius:8px; margin-top:20px; font-size:0.9rem; color:#475569;">
                    ℹ️ <strong>${g.letra}:</strong> Este equipo no registra estudiantes con NEE específicas asignadas. Se aplica la ruta estándar del Diseño Universal para el Aprendizaje (DUA).
                </div>
            `;
        }

        document.getElementById('contenidoGrupo').innerHTML = `
            <div style="background:white; padding:15px 20px; border-radius:8px; margin-bottom:20px; border:1px solid #e2e8f0;">
                <span style="color:#0d9488; font-weight:bold; font-size:0.9rem;">${g.subtema}</span>
                <h3 style="margin:4px 0 0 0; color:var(--primary);">🎯 Producto Final: ${g.producto}</h3>
            </div>

            <!-- FASE 1: INVESTIGACIÓN INTERDISCIPLINARIA -->
            <div class="phase-card">
                <h3>🔍 Fase 1: Investigación Preliminar Articulada</h3>
                <div class="guia-preview" id="guiaImprimible_${index}">
                    <h4>📄 ${g.guiaInvestigacion.tituloGuia}</h4>
                    <p><strong>Objetivo de aprendizaje:</strong> ${g.guiaInvestigacion.objetivo}</p>
                    <div style="background:#fff; padding:12px; border-radius:6px; border:1px solid #e2e8f0; margin-bottom:12px;">
                        ${g.guiaInvestigacion.lecturaBase}
                    </div>
                    <p style="margin:8px 0 4px 0; font-weight:bold; color:#1e3a8a;">
                        Actividades de conexión entre asignaturas seleccionadas (${materiasSeleccionadas.join(" + ")}):
                    </p>
                    ${bloquesMateriasHTML}
                </div>
                <button class="btn-print" onclick="imprimirGuia(${index})">🖨️ Descargar / Imprimir Guía de Trabajo Limpia (PDF)</button>
            </div>

            <!-- FASES 2 Y 3 -->
            <div class="phases-bottom-grid">
                <div class="phase-card dev">
                    <h3>🛠️ Fase 2: Desarrollo del Producto</h3>
                    <p><strong>Formato:</strong> ${g.fase2.formato}</p>
                    <p><strong>Dimensiones técnicas:</strong> ${g.fase2.medidas}</p>
                    <div class="sketch-box">
                        <strong>Boceto Referencial:</strong><br>
                        ${g.fase2.bocetoSVG}
                    </div>
                    <p><strong>Orientación creativa:</strong> ${g.fase2.instrucciones}</p>
                </div>

                <div class="phase-card soc">
                    <h3>🎤 Fase 3: Socialización</h3>
                    <p><strong>Guion sugerido de apertura:</strong></p>
                    <div class="script-box">${g.fase3.guion}</div>
                    <p><strong>Dinámica de exposición:</strong> ${g.fase3.dinamica}</p>
                </div>
            </div>

            ${bloqueInclusion}
        `;
    }

    function imprimirGuia(index) {
        const contenido = document.getElementById(`guiaImprimible_${index}`).innerHTML;
        const ventana = window.open('', '', 'height=700,width=850');
        ventana.document.write('<html><head><title>Guía de Investigación - Proyecta S</title>');
        ventana.document.write('<style>body{font-family:Arial,sans-serif;padding:30px;line-height:1.5;color:#1e293b;} h4{color:#1e3a8a;border-bottom:2px solid #0d9488;padding-bottom:6px;} .materia-block{border-left:3px solid #0d9488;padding-left:12px;margin-bottom:14px;}</style>');
        ventana.document.write('</head><body>');
        ventana.document.write('<p style="font-size:12px;color:#64748b;">Nombre del estudiante: ___________________________ | Fecha: ______________</p>');
        ventana.document.write(contenido);
        ventana.document.write('</body></html>');
        ventana.document.close();
        ventana.print();
    }
</script>

</body>
</html>
