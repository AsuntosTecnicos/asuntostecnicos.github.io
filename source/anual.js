// Se modifican los valores desde aquí

let year = 2027;

const fechasPorTipo = {
  acad: {
    festivos: {
      "01-01-2027": "Año Nuevo",
      "01-02-2027": "Aniversario de la Constitución",
      "22-02-2027": "Aniversario del FESAPAUV",
      "15-03-2027": "Natalicio de Benito Juárez",
      "18-03-2027": "Aniversario de la Expropiación Petrolera",
      "01-05-2027": "Día del Trabajo",
      "15-05-2027": "Día del Maestro",
      "16-09-2027": "Día de la Independencia",
      "01-11-2027": "Todos los Santos",
      "02-11-2027": "Día de Muertos",
      "15-11-2027": "Aniversario de la Revolución Mexicana",
      "25-12-2027": "Navidad"
    },
    vacaciones: ["22-03-2027","23-03-2027","24-03-2027","25-03-2027","26-03-2027",
                 "12-07-2027","13-07-2027","14-07-2027","15-07-2027","16-07-2027",
                 "19-07-2027","20-07-2027","21-07-2027","22-07-2027","23-07-2027",
                 "26-07-2027","27-07-2027","28-07-2027","29-07-2027","30-07-2027",
                 "20-12-2027","21-12-2027","22-12-2027","23-12-2027","24-12-2027",
                 "27-12-2027","28-12-2027","29-12-2027","30-12-2027","31-12-2027"],
    inhabiles: {
      "08-02-2027": "Carnaval",
      "09-02-2027": "Carnaval",
      "10-05-2027": "Día de las Madres"
    }
  },
  conf: {
    festivos: {
      "01-01-2027": "Año Nuevo",
      "01-02-2027": "Aniversario de la Constitución",
      "08-02-2027": "Carnaval",
      "09-02-2027": "Carnaval",
      "10-02-2027": "Carnaval",
      "24-02-2027": "Día de la Bandera",
      "15-03-2027": "Natalicio de Benito Juárez",
      "18-03-2027": "Aniversario de la Expropiación Petrolera",
      "01-05-2027": "Día del Trabajo",
      "05-05-2027": "Aniversario de la Batalla de Puebla",
      "10-05-2027": "Día de las Madres",
      "15-05-2027": "Día del Maestro",
      "18-07-2027": "Aniversario Luctuoso de Benito Juárez ",
      "13-09-2027": "Día de los Niños Héroes",
      "15-09-2027": "Grito de Independencia",
      "16-09-2027": "Día de la Independencia",
      "12-10-2027": "Día de la Raza",
      "21-10-2027": "Día del Empleado",
      "01-11-2027": "Todos los Santos",
      "02-11-2027": "Día de Muertos",
      "15-11-2027": "Aniversario de la Revolución Mexicana",
      "25-12-2027": "Navidad"
    },
    vacaciones: ["22-03-2027","23-03-2027","24-03-2027","25-03-2027","26-03-2027",
                 "12-07-2027","13-07-2027","14-07-2027","15-07-2027","16-07-2027",
                 "19-07-2027","20-07-2027","21-07-2027","22-07-2027","23-07-2027",
                 "26-07-2027","27-07-2027","28-07-2027","29-07-2027","30-07-2027",
                 "20-12-2027","21-12-2027","22-12-2027","23-12-2027","24-12-2027",
                 "27-12-2027","28-12-2027","29-12-2027","30-12-2027","31-12-2027"],
    inhabiles: []
  },
  sea: {
    festivos: {
      "01-01-2027": "Año Nuevo",
      "01-02-2027": "Aniversario de la Constitución",
      "22-02-2027": "Aniversario del FESAPAUV",
      "15-03-2027": "Natalicio de Benito Juárez",
      "18-03-2027": "Aniversario de la Expropiación Petrolera",
      "01-05-2027": "Día del Trabajo",
      "15-05-2027": "Día del Maestro",
      "16-09-2027": "Día de la Independencia",
      "01-11-2027": "Todos los Santos",
      "02-11-2027": "Día de Muertos",
      "15-11-2027": "Aniversario de la Revolución Mexicana",
      "25-12-2027": "Navidad"
    },
    vacaciones: ["02-01-2027",
                 "23-03-2027","24-03-2027","25-03-2027","26-03-2027","27-03-2027",
                 "13-07-2027","14-07-2027","15-07-2027","16-07-2027","17-07-2027",
                 "20-07-2027","21-07-2027","22-07-2027","23-07-2027","24-07-2027",
                 "27-07-2027","28-07-2027","29-07-2027","30-07-2027","31-07-2027",
                 "21-12-2027","22-12-2027","23-12-2027","24-12-2027",
                 "28-12-2027","29-12-2027","30-12-2027","31-12-2027"],
    inhabiles: {
      "08-02-2027": "Carnaval",
      "09-02-2027": "Carnaval",
      "10-05-2027": "Día de las Madres"
    }
  },
  atm: {
    festivos: {
      "01-01-2027": "Año Nuevo",
      "01-02-2027": "Aniversario de la Constitución",
      "08-02-2027": "Carnaval",
      "09-02-2027": "Carnaval",
      "10-02-2027": "Carnaval",
      "24-02-2027": "Día de la Bandera",
      "15-03-2027": "Natalicio de Benito Juárez",
      "18-03-2027": "Aniversario de la Expropiación Petrolera",
      "25-03-2027": "Aniversario del SETSUV",
      "01-05-2027": "Día del Trabajo",
      "05-05-2027": "Aniversario de la Batalla de Puebla",
      "10-05-2027": "Día de las Madres",
      "15-05-2027": "Día del Maestro",
      "18-07-2027": "Aniversario Luctuoso de Benito Juárez ",
      "01-09-2027": "Informe de Gobierno",
      "13-09-2027": "Día de los Niños Héroes",
      "15-09-2027": "Grito de Independencia",
      "16-09-2027": "Día de la Independencia",
      "12-10-2027": "Día de la Raza",
      "21-10-2027": "Día del Empleado",
      "01-11-2027": "Todos los Santos",
      "02-11-2027": "Día de Muertos",
      "15-11-2027": "Aniversario de la Revolución Mexicana",
      "25-12-2027": "Navidad"
    },
    vacaciones: ["19-03-2027","22-03-2027","23-03-2027","24-03-2027","26-03-2027",
                 "12-07-2027","13-07-2027","14-07-2027","15-07-2027","16-07-2027",
                 "19-07-2027","20-07-2027","21-07-2027","22-07-2027","23-07-2027",
                 "26-07-2027","27-07-2027","28-07-2027","29-07-2027","30-07-2027",
                 "20-12-2027","21-12-2027","22-12-2027","23-12-2027","24-12-2027",
                 "27-12-2027","28-12-2027","29-12-2027","30-12-2027","31-12-2027"],
    inhabiles: []
  }
};

// hasta aquí, hacia abajo no se configura nada

let contenedor = document.getElementById("calendario");
let titulo = document.getElementById("barratitulo");
let leyenda = document.getElementById("leyenda");
let leyendasea = document.getElementById("leyendasea");
let botoninhabil = document.getElementById("btinhabil");
let botoncolor = document.getElementById("color");
let botoncolormn = document.getElementById("color_mn");
let fondotitulo = document.getElementById("backtitulo");

let tipo_personal = "acad";
let descansos = true;
let festivos = true;
let vacaciones = true;
let inhabiles = true;
let cambiocol = true;
let tema = "classic-theme";

// Crear calendario completo
function Calendario() {
    // 1. Destruir tooltips existentes antes de limpiar el contenedor
    const tooltipsPrevios = document.querySelectorAll('#calendario [data-bs-toggle="tooltip"]');
    tooltipsPrevios.forEach(el => {
        const instance = bootstrap.Tooltip.getInstance(el);
        if (instance) instance.dispose();
    });

    // Limpiar contenedor antes de volver a generar
    contenedor.innerHTML = "";

    var div = document.createElement("div");
    var calendars = [];

    for (var i = 0; i < 12; i++) {
        div = document.createElement("div");
        div.className = tema;
        contenedor.appendChild(div);

        var cal = jsCalendar.new(div, 0, {
            zeroFill: false,
            navigator: false,
            language: "es"
        });

        cal.goto("01-" + ((i + 1 < 10) ? "0" : "") + (i + 1) + "-" + year);

        cal.onDateRender(function(date, element, info) {
            var dia = String(date.getDate()).padStart(2, "0");
            var mes = String(date.getMonth() + 1).padStart(2, "0");
            var fechaStr = dia + "-" + mes + "-" + date.getFullYear();

            if (!info.isCurrentMonth) {
                element.textContent = "";
                element.classList.add("otro-mes");
                return;
            }

            if (descansos) {
                const day = date.getDay();
                if (tipo_personal === "sea") {
                    if (day === 0 || day === 1) element.classList.add("descansos");
                } else {
                    if (day === 0 || day === 6) element.classList.add("descansos");
                }
            }

            // Festivos
            const festivo = fechasPorTipo[tipo_personal].festivos[fechaStr];
            if (festivos && festivo) {
                element.classList.add("festivos");
                element.setAttribute("data-bs-toggle", "tooltip");
                element.setAttribute("data-bs-title", festivo);
                element.setAttribute("data-bs-placement", "top");
            }

            // Vacaciones
            if (vacaciones && fechasPorTipo[tipo_personal].vacaciones.includes(fechaStr)) {
                element.classList.add("vacaciones");
                element.setAttribute("data-bs-toggle", "tooltip");
                element.setAttribute("data-bs-title", "Período vacacional");
                element.setAttribute("data-bs-placement", "top");
            }

            // Inhábiles
            const inhabil = fechasPorTipo[tipo_personal].inhabiles[fechaStr];
            if (inhabiles && inhabil) {
                element.classList.add("inhabiles");
                element.setAttribute("data-bs-toggle", "tooltip");
                element.setAttribute("data-bs-title", inhabil);
                element.setAttribute("data-bs-placement", "top");
            }
        });

        calendars.push(cal);
    }

    // Refrescar todos los calendarios (inserta los nodos en el DOM)
    calendars.forEach(function(cal) {
        cal.refresh();
    });

    // 2. Inicializar los nuevos tooltips de Bootstrap en el DOM generado
    const tooltipElements = document.querySelectorAll('#calendario [data-bs-toggle="tooltip"]');
    tooltipElements.forEach(el => new bootstrap.Tooltip(el, { trigger: 'hover' }));
}

// Cambiar selección de tipo de personal
function Seleccion(personal) {
    tipo_personal = personal;
    
    if (tipo_personal === "sea") {
        leyenda.style.display = "none";
        leyendasea.style.display = "block";
    } else {
        leyenda.style.display = "block";
        leyendasea.style.display = "none";
    }

    switch(tipo_personal) {
        case 'atm':
            titulo.textContent = "Personal Administrativo, Técnico y Manual";
            botoninhabil.style.display = "none";
            backtitulo.classList.add("tituloATM");
            backtitulo.classList.remove("tituloAcad");
            backtitulo.classList.remove("tituloSEA");
            backtitulo.classList.remove("tituloConf");
        break;
        case 'conf':
            titulo.textContent = "Personal de Confianza";
            botoninhabil.style.display = "none";
            backtitulo.classList.remove("tituloATM");
            backtitulo.classList.remove("tituloAcad");
            backtitulo.classList.remove("tituloSEA");
            backtitulo.classList.add("tituloConf");
        break;
        case 'acad':
            titulo.textContent = "Personal Académico";
            botoninhabil.style.display = "block";
            backtitulo.classList.remove("tituloATM");
            backtitulo.classList.add("tituloAcad");
            backtitulo.classList.remove("tituloSEA");
            backtitulo.classList.remove("tituloConf");
        break;
        case 'sea':
            titulo.textContent = "Personal Académico (SEA)";
            botoninhabil.style.display = "block";
            backtitulo.classList.remove("tituloATM");
            backtitulo.classList.remove("tituloAcad");
            backtitulo.classList.add("tituloSEA");
            backtitulo.classList.remove("tituloConf");
        break;
    }
    Calendario();
}

function Seldescansos(){
    descansos = !descansos;
    Seleccion(tipo_personal);
}

function Selfestivos(){
    festivos = !festivos;
    Seleccion(tipo_personal);
}

function Selvacaciones(){
    vacaciones = !vacaciones;
    Seleccion(tipo_personal);
}

function Selinhabiles(){
    inhabiles = !inhabiles;
    Seleccion(tipo_personal);
}

function abrirPdf(){
    switch(tipo_personal) {
        case 'atm':
            window.open("../pdfs/PropuestaATM_2027.pdf")
        break;
        case 'conf':
            window.open("../pdfs/PropuestaConfianza_2027.pdf")
        break;
        case 'acad':
            window.open("../pdfs/PropuestaAcademico_2027.pdf")
        break;
        case 'sea':
            window.open("../pdfs/PropuestaSEA_2027.pdf")
        break;
    }
}

function cambiarColor(){
    cambiocol = !cambiocol;
    if (cambiocol) {
        tema = "classic-theme";
        botoncolor.classList.remove("icono-azul");
        botoncolor.classList.add("icono-verde");
        botoncolormn.classList.remove("icono-azul");
        botoncolormn.classList.add("icono-verde");
    } else {
        tema = "material-theme";
        botoncolor.classList.remove("icono-verde");
        botoncolor.classList.add("icono-azul");
        botoncolormn.classList.remove("icono-verde");
        botoncolormn.classList.add("icono-azul");
    }

    // Guardar preferencia de tema
    localStorage.setItem("temaCalendario", tema);

    Seleccion(tipo_personal);
}

// Ejecutar selección inicial al cargar la página
window.addEventListener("DOMContentLoaded", function() {
    const temaGuardado = localStorage.getItem("temaCalendario");

    if (temaGuardado === "material-theme") {
        cambiocol = false;
        tema = "material-theme";
        botoncolor.classList.remove("icono-verde");
        botoncolor.classList.add("icono-azul");
        botoncolormn.classList.remove("icono-verde");
        botoncolormn.classList.add("icono-azul");
    }
    
    Seleccion("acad");
});