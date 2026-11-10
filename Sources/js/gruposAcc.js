// Función para procesar y agrupar las dependencias por nombre de grupo
function agruparPorGrupo(lista) {
    const agrupado = {};
    lista.forEach(item => {
        if (!agrupado[item.grupo]) {
            agrupado[item.grupo] = [];
        }
        agrupado[item.grupo].push(item.dependencia);
    });
    return agrupado;
}

// Renderizar los acordeones dinámicamente
function renderizarAcordeones() {
    const mapeoRegiones = {
        xalapa: 'accordionXalapa',
        veracruz: 'accordionVeracruz',
        orizaba: 'accordionOrizaba',
        pozarica: 'accordionPozarica',
        coatzacoalcos: 'accordionCoatzacoalcos'
    };

    for (const [region, contenedorId] of Object.entries(mapeoRegiones)) {
        const contenedor = document.getElementById(contenedorId);
        const datos = gruposAcceso[region] || [];
        const gruposAgrupados = agruparPorGrupo(datos);

        let html = '';
        let index = 0;

        for (const [grupo, dependencias] of Object.entries(gruposAgrupados)) {
            const collapseId = `collapse_${region}_${index}`;
            const headingId = `heading_${region}_${index}`;

            html += `
                <div class="accordion-item mb-2 shadow-sm border-0 rounded overflow-hidden" data-grupo="${grupo.toLowerCase()}" data-dependencias="${dependencias.join(' ').toLowerCase()}">
                    <h2 class="accordion-header" id="${headingId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                            <span class="flex-grow-1">${grupo}</span>
                            <span class="badge-count mx-2">${dependencias.length}</span>
                        </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#${contenedorId}">
                        <div class="accordion-body bg-white">
                            <h6 class="text-muted text-uppercase fs-7 mb-3"><i class="fas fa-sitemap me-2"></i>Dependencias asociadas:</h6>
                            <ul class="dependency-list list-unstyled mb-0">
                                ${dependencias.map(dep => `<li><span class="ps-4 text-warning"><i class="fa-regular fa-building"></i></span> ${dep}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            index++;
        }
        contenedor.innerHTML = html || '<p class="text-center text-muted py-4">No hay registros disponibles para esta región.</p>';
    }
}

// Filtrado en tiempo real con el buscador
document.getElementById('buscadorGeneral').addEventListener('input', function(e) {
    const termino = e.target.value.toLowerCase().trim();
    const itemsAcordeon = document.querySelectorAll('.accordion-item');

    itemsAcordeon.forEach(item => {
        const grupo = item.getAttribute('data-grupo');
        const dependencias = item.getAttribute('data-dependencias');

        if (grupo.includes(termino) || dependencias.includes(termino)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Inicializar la vista al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarAcordeones();
});