const gruposAcceso = {
    xalapa: [
        { grupo: "UV Central", dependencia: "Dirección General de Recursos Humanos" },
        { grupo: "UV Central", dependencia: "Oficina del Abogado General" },
        { grupo: "UV Central", dependencia: "Dirección de Servicios Informáticos Administrativos" },
        { grupo: "Contraloría General", dependencia: "Contraloría General" },
        { grupo: "Editorial", dependencia: "Dirección de Editorial" },
        { grupo: "Editorial", dependencia: "Departamento de Archivo" },
        { grupo: "Secretaría Académica", dependencia: "Dirección General de Desarrollo Académico e Innovación Educativa" },
        { grupo: "Secretaría de Administración y Finanzas", dependencia: "Dirección de Recursos Financieros" }
    ],
    veracruz: [
        { grupo: "Vicerrectoría Veracruz", dependencia: "Vicerrectoría Región Veracruz" },
        { grupo: "Facultades Ingeniería", dependencia: "Facultad de Ingeniería Civil" },
        { grupo: "Facultades Ingeniería", dependencia: "Facultad de Ingeniería Mecánica y Eléctrica" },
        { grupo: "Ciencias de la Salud", dependencia: "Facultad de Medicina Región Veracruz" },
        { grupo: "Área Económico-Administrativa", dependencia: "Facultad de Contaduría y Administración" }
    ],
    orizaba_cordoba: [
        { grupo: "Vicerrectoría Orizaba", dependencia: "Vicerrectoría Región Orizaba-Córdoba" },
        { grupo: "Facultades Orizaba", dependencia: "Facultad de Ciencias Químicas" },
        { grupo: "Facultades Orizaba", dependencia: "Facultad de Odontología" },
        { grupo: "Facultades Córdoba", dependencia: "Facultad de Arquitectura" },
        { grupo: "Facultades Ixtaczoquitlán", dependencia: "Facultad de Ingeniería en Sistemas de Producción Agropecuaria" }
    ],
    poza_rica_tuxpan: [
        { grupo: "Vicerrectoría Poza Rica", dependencia: "Vicerrectoría Región Poza Rica-Tuxpan" },
        { grupo: "Facultades Poza Rica", dependencia: "Facultad de Ingeniería Poza Rica" },
        { grupo: "Facultades Poza Rica", dependencia: "Facultad de Enfermería" },
        { grupo: "Facultades Tuxpan", dependencia: "Facultad de Ciencias Biológicas y Agropecuarias" }
    ],
    coatzacoalcos_minatitlan: [
        { grupo: "Vicerrectoría Coatzacoalcos", dependencia: "Vicerrectoría Región Coatzacoalcos-Minatitlán" },
        { grupo: "Facultades Coatzacoalcos", dependencia: "Facultad de Contaduría y Administración" },
        { grupo: "Facultades Coatzacoalcos", dependencia: "Facultad de Ingeniería Coatzacoalcos" },
        { grupo: "Facultades Minatitlán", dependencia: "Facultad de Enfermería Región Minatitlán" }
    ]
};

const regionLabels = {
    xalapa: "Xalapa",
    veracruz: "Veracruz",
    orizaba_cordoba: "Orizaba - Córdoba",
    poza_rica_tuxpan: "Poza Rica - Tuxpan",
    coatzacoalcos_minatitlan: "Coatzacoalcos - Minatitlán"
};

let activeRegion = 'xalapa';

function renderApp() {
    const tabsContainer = document.getElementById('regionTabs');
    const contentContainer = document.getElementById('regionTabContent');
    
    let tabsHTML = '';
    let contentHTML = '';
    let totalCount = 0;

    const keys = Object.keys(gruposAcceso);

    keys.forEach(key => {
        const count = gruposAcceso[key].length;
        totalCount += count;
        const isActive = key === activeRegion;
        
        // Build Tab Button
        tabsHTML += `
            <button onclick="switchRegion('${key}')" class="px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
                isActive 
                ? 'bg-[rgb(24,82,157)] text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }">
                <i class="fa-solid fa-location-dot ${isActive ? 'text-[rgb(40,173,86)]' : 'text-gray-400'}"></i>
                <span>${regionLabels[key]}</span>
                <span class="ml-2 px-2 py-0.5 text-xs rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}">${count}</span>
            </button>
        `;

        // Build Tab Content Pane
        let itemsCards = '';
        gruposAcceso[key].forEach(item => {
            itemsCards += `
                <div class="dependencia-card bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
                        data-grupo="${item.grupo.toLowerCase()}" 
                        data-dependencia="${item.dependencia.toLowerCase()}">
                    <div class="absolute top-0 left-0 h-full w-1.5 bg-[rgb(40,173,86)]"></div>
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-[rgb(33,145,71)] border border-emerald-100">
                                <i class="fa-solid fa-users-rectangle mr-1.5"></i> ${item.grupo}
                            </span>
                            <span class="text-xs text-gray-400 font-mono">UV-${regionLabels[key].substring(0,3).toUpperCase()}</span>
                        </div>
                        <h3 class="font-bold text-gray-900 text-base mb-1 group-hover:text-[rgb(24,82,157)] transition-colors">${item.dependencia}</h3>
                    </div>
                    <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                        <span class="text-[rgb(24,82,157)] font-medium">Región ${regionLabels[key]}</span>
                    </div>
                </div>
            `;
        });

        contentHTML += `
            <div id="pane-${key}" class="region-pane ${isActive ? 'block' : 'hidden'} space-y-6">
                <div class="flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
                    <div>
                        <h2 class="text-lg font-bold text-gray-900">Región ${regionLabels[key]}</h2>
                        <p class="text-xs text-gray-500">Listado institucional de dependencias y áreas con grupos de acceso asignados</p>
                    </div>
                    <span class="px-3 py-1 bg-blue-50 text-[rgb(24,82,157)] text-xs font-bold rounded-lg border border-blue-100">${count} dependencias</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${itemsCards}
                </div>
            </div>
        `;
    });

    tabsContainer.innerHTML = tabsHTML;
    contentContainer.innerHTML = contentHTML;
    document.getElementById('total-badge').innerText = totalCount;
    
    // Reapply current search filter if any
    filterItems();
}

function switchRegion(regionKey) {
    activeRegion = regionKey;
    renderApp();
}

function filterItems() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const activePane = document.getElementById(`pane-${activeRegion}`);
    if (!activePane) return;

    const cards = activePane.querySelectorAll('.dependencia-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const grupo = card.getAttribute('data-grupo');
        const dependencia = card.getAttribute('data-dependencia');
        
        if (grupo.includes(query) || dependencia.includes(query)) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const emptyState = document.getElementById('globalEmptyState');
    if (visibleCount === 0 && query !== '') {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

document.getElementById('searchInput').addEventListener('input', filterItems);

// Initialize on window load
window.onload = function() {
    renderApp();
};