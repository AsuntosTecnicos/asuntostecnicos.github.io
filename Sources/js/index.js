document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Asuntos Técnicos UV - Hero Version Ready");
    
    // Podemos añadir un pequeño fade-in inicial a los círculos 
    // solo cuando carga la página por primera vez
    const circles = document.querySelectorAll('.circle-item');
    circles.forEach((circle, index) => {
        circle.style.opacity = "0";
        circle.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            circle.style.transition = "all 0.6s ease-out";
            circle.style.opacity = "1";
            circle.style.transform = "translateY(0)";
        }, index * 100);
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.data('menuTecnico', () => ({
        info: 'Selecciona un área para más información',
        items: [
            {
                id: 1,
                nombre: 'Terminales <br> Biométricas',
                descripcion: 'Trámites relativos a la instalación y monitoreo de los dispositivos de asistencia ZKTeco.',
                color: 'azul'
            },
            {
                id: 2,
                nombre: 'Estadística <br> 911',
                descripcion: 'Generación de indicadores y reportes institucionales estratégicos.',
                color: 'verde'
            },
            {
                id: 3,
                nombre: 'Personal <br> Habilitado',
                descripcion: 'Control técnico y validación de perfiles autorizados.',
                color: 'azul'
            },
            {
                id: 4,
                nombre: 'Calendarios',
                descripcion: 'Programación técnica de ciclos y procesos administrativos.',
                color: 'verde'
            },
            {
                id: 5,
                nombre: 'Medios de <br> Recepción',
                descripcion: 'Canales digitales y físicos para la recepción de documentos técnicos.',
                color: 'azul'
            },
            {
                id: 6,
                nombre: 'Contacto',
                descripcion: 'Soporte directo vía extensión 1000 o correo institucional.',
                // Clase específica para el diseño sutil que pediste
                clasePersonalizada: 'border border-slate-300 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 scale-90'
            }
        ]
    }));
});