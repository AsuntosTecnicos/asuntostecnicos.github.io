// Lógica para la LISTA de trámites
function portalTramites() {
    return {
        search: '',
        filtroArea: 'todas', // Valor inicial
        cargando: true,
        categoriaActiva: new URLSearchParams(window.location.search).get('cat') || 'DP',
        
        rubros: CONFIG_RUBROS,
        tramites: DATOS_TRAMITES,

        init() {
            setTimeout(() => { this.cargando = false; }, 500);
        },

        get filteredTramites() {
            return this.tramites.filter(t => {
                // 1. Debe ser de la categoría (ingreso/permanencia/retiro)
                const cumpleCat = t.grupo === this.categoriaActiva;

                // 2. Debe coincidir con el texto escrito
                const cumpleTexto = t.nombre.toLowerCase().includes(this.search.toLowerCase());

                // 3. Debe coincidir con el área (si no es "todas")
                //const cumpleArea = this.filtroArea === 'todas' || t.area === this.filtroArea;

                return cumpleCat && cumpleTexto;// && cumpleArea;
            });
        },

        get tituloSeccion() {
            const titulos = {'DP':'Dirección de Personal',
                             'DN': 'Dirección de Nóminas',
                             'DRL':'Dirección de Relaciones Laborales',
                             'ED':'Evaluación y Desarrollo de Personal',
                             'AT':'Asuntos Técnicos'};
            return titulos[this.categoriaActiva] || 'Trámites';
        }
    }
}



// Lógica para el DETALLE del trámite
function detalleTramite() {
    return {
        tramite: {},
        rubros: CONFIG_RUBROS,
        tabActiva: '',

        init() {
            const id = new URLSearchParams(window.location.search).get('id');
            this.tramite = DATOS_TRAMITES.find(t => t.id == id) || {};
            
            // Si hay variaciones, la pestaña activa inicial será la primera que exista en requisitos
            if (this.tramite.tieneVariaciones) {
                this.tabActiva = Object.keys(this.tramite.requisitos)[0];
            }
        },

        // Devuelve solo los tipos de personal que tienen datos definidos en el trámite
        get tiposDisponibles() {
            if (!this.tramite.tieneVariaciones) return [];
            return Object.keys(this.tramite.requisitos);
        },

        // Centraliza la lógica de qué mostrar según la pestaña
        get contenidoDinamico() {
            if (!this.tramite.id) return {};

            // Si no hay variaciones, devolvemos el dato directo
            if (!this.tramite.tieneVariaciones) {
                return {
                    requisitos: this.tramite.requisitos,
                    consideraciones: this.tramite.consideraciones,
                    recepcion: Array.isArray(this.tramite.recepcion) ? this.tramite.recepcion : [this.tramite.recepcion]
                };
            }

            // Si hay variaciones, buscamos por la llave de la pestaña activa
            return {
                requisitos: this.tramite.requisitos[this.tabActiva] || [],
                consideraciones: this.tramite.consideraciones ? this.tramite.consideraciones[this.tabActiva] : null,
                recepcion: this.tramite.recepcion ? 
                           (Array.isArray(this.tramite.recepcion[this.tabActiva]) ? 
                            this.tramite.recepcion[this.tabActiva] : [this.tramite.recepcion[this.tabActiva]]) : []
            };
        }
    }
}