const gruposAccesoData = {
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
let groupedCache = {};

// Process raw items into grouped format per region
function processData() {
    groupedCache = {};
    let totalUniqueGroups = 0;

    Object.keys(gruposAccesoData).forEach(region => {
        const map = {};
        gruposAccesoData[region].forEach(item => {
            if (!map[item.grupo]) {
                map[item.grupo] = [];
            }
            map[item.grupo].push(item.dependencia);
        });
        
        // Convert to array of objects { grupo, dependencias }
        groupedCache[region] = Object.keys(map).map(grupoName => ({
            grupo: grupoName,
            dependencias: map[grupoName]
        }));
        if (region === activeRegion) {
            totalUniqueGroups += groupedCache[region].length;
        }
    });

    // Calculate total unique groups across all regions for badge
    let allUnique = 0;
    Object.keys(groupedCache).forEach(r => allUnique += groupedCache[r].length);
    document.getElementById('total-groups-badge').innerText = allUnique;
}

function renderApp() {
    processData();
    const tabsContainer = document.getElementById('regionTabs');
    const contentContainer = document.getElementById('regionTabContent');
    
    let tabsHTML = '';
    let contentHTML = '';

    const keys = Object.keys(groupedCache);

    keys.forEach(key => {
        const groupsList = groupedCache[key];
        const count = groupsList.length;
        const isActive = key === activeRegion;
        
        // Tab button
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

        // Cards for groups
        let cardsHTML = '';
        groupsList.forEach((groupObj, idx) => {
            const escapedDeps = encodeURIComponent(JSON.stringify(groupObj.dependencias));
            const escapedName = encodeURIComponent(groupObj.grupo);
            
            cardsHTML += `
                <div class="group-card bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group border-l-4 border-l-[rgb(40,173,86)]"
                        onclick="openModal('${escapedName}', '${escapedDeps}')"
                        data-grupo="${groupObj.grupo.toLowerCase()}"
                        data-deps="${groupObj.dependencias.join(' ').toLowerCase()}">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[rgb(33,145,71)] border border-emerald-100">
                                <i class="fa-solid fa-shield-halved mr-1.5"></i> Grupo </span>
                            <span class="w-8 h-8 rounded-full bg-blue-50 text-[rgb(24,82,157)] flex items-center justify-center text-xs font-bold group-hover:bg-[rgb(24,82,157)] group-hover:text-white transition-colors">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                        </div>
                        <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-[rgb(24,82,157)] transition-colors">${groupObj.grupo}</h3>
                        <p class="text-xs text-gray-500 line-clamp-2">
                            Incluye ${groupObj.dependencias.length} ${groupObj.dependencias.length === 1 ? 'dependencia asociada' : 'dependencias asociadas'}. Haz clic para ver el listado.
                        </p>
                    </div>
                    <div class="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-400">
                        <span class="text-[rgb(24,82,157)]"><i class="fa-solid fa-list-check mr-1"></i> Ver detalle completo</span>
                        <span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-mono">${groupObj.dependencias.length} dep.</span>
                    </div>
                </div>
            `;
        });

        contentHTML += `
            <div id="pane-${key}" class="region-pane ${isActive ? 'block' : 'hidden'} space-y-6">
                <div class="flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
                    <div>
                        <h2 class="text-lg font-bold text-gray-900">Grupos en Región ${regionLabels[key]}</h2>
                        <p class="text-xs text-gray-500">Selecciona cualquier tarjeta para desplegar sus dependencias asociadas</p>
                    </div>
                    <span class="px-3 py-1 bg-emerald-50 text-[rgb(33,145,71)] text-xs font-bold rounded-lg border border-emerald-100">${count} grupos de acceso</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${cardsHTML}
                </div>
            </div>
        `;
    });

    tabsContainer.innerHTML = tabsHTML;
    contentContainer.innerHTML = contentHTML;
    
    filterItems();
}

function switchRegion(regionKey) {
    activeRegion = regionKey;
    renderApp();
}

function openModal(encodedName, encodedDeps) {
    const groupName = decodeURIComponent(encodedName);
    const dependencies = JSON.parse(decodeURIComponent(encodedDeps));

    document.getElementById('modalGroupName').innerText = groupName;
    document.getElementById('modalCountBadge').innerText = `${dependencies.length} ${dependencies.length === 1 ? 'dependencia' : 'dependencias'}`;

    let listHTML = '';
    dependencies.forEach((dep, i) => {
        listHTML += `
            <li class="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-700">
                <span class="w-6 h-6 rounded-full bg-[rgb(24,82,157)]/10 text-[rgb(24,82,157)] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">${i + 1}</span>
                <span class="font-medium leading-relaxed">${dep}</span>
            </li>
        `;
    });

    document.getElementById('modalDependenciesList').innerHTML = listHTML;
    document.getElementById('groupModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('groupModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function filterItems() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const activePane = document.getElementById(`pane-${activeRegion}`);
    if (!activePane) return;

    const cards = activePane.querySelectorAll('.group-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const grupo = card.getAttribute('data-grupo');
        const deps = card.getAttribute('data-deps');
        
        if (grupo.includes(query) || deps.includes(query)) {
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

// Close modal on background click
document.getElementById('groupModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

window.onload = function() {
    renderApp();
};