// sources/datos.js
const DATOS_TRAMITES = [
    { 
        id: 1,
        grupo: 'DN',
        rubro: 'Permanencia', 
        nombre: 'Adhesión o mantenimiento al sistema de pago de nómina por depósito bancario', 
        area: 'Dirección de Nóminas', 
        resumen: 'Alta o modificación de número de tarjeta bancaria para el pago de la nómina.',
        tieneVariaciones: false,
        descripcion: 'Trámite que debe realizarse por el trabajador de la Universidad Veracruzana o beneficiarios de pensión alimenticia para ser incorporados al sistema de pago de nómina por depósito bancario o notificar el cambio de número de tarjeta por sustitución, debido a fin de vigencia, reposición por robo o extravío.',
        requisitos: ['Formato de adhesión debidamente requisitado.', 'Identificación oficial.', 'Estado de cuenta o documento expedido por el banco en donde sea visible la CLABE.'],
        recepcion: 'Ventanilla única de oficialía de partes de la DGRH',
        horario: 'Lunes a Viernes de 9:00 a 20:50 hrs.',
        formato: 'https://www.uv.mx/dgrh/files/2023/02/Formato-adhesion-a-la-nomina-arh-p-f-70-A.pdf'
    },
    { 
        id: 2,
        grupo: 'DP',
        rubro: 'Permanencia', 
        nombre: 'Licencia sin goce de sueldo Académica', 
        area: 'Dirección de Personal', 
        resumen: 'Licencias sin goce de sueldo en experiencia educativa, tiempo completo y medio tiempo',
        tieneVariaciones: false,
        descripcion: 'Licencias sin goce de sueldo en experiencia educativa, tiempo completo y medio tiempo.',
        requisitos: ['Oficio en formato libre, el cual debera contener: nombre, no. de personal, puesto, categoria, dependencia de adscripcion o dependencia donde se encuentre laborando, el no. de plaza, nombre de la EE, sección y horas, periodo de la licencia sin goce de sueldo y sello de conocimiento del titular de la entidad académica'],
        consideraciones:['Se otorgará en razón de su antigüedad de acuerdo a lo estipulado en el Contrato Colectivo de Trabajo.', 
                         'Podrán solicitarse únicamente antes del inicio del semestre correspondiente; y en casos plenamente justificados, durante el transcurso del mismo.',
                         'Podrán otorgarse licencias sin goce de sueldo hasta por un mes calendario durante un semestre lectivo en casos plenamente justificados siempre y cuando el trabajador académico interesado tenga un año de antigüedad, en caso del que el periodo de licencia incluya el examen de termino de semestre, para conceder a el trabajador académico se obliga a entregar a la dirección de la entidad de su adscripción , el exámenes que deban aplicarse a los alumnos a su cargo, así como la clave de respuestas o en su caso, obligarse a calificarse.',
                         'Para desempeñar un empleo, cargo o comisión en el servicio público. En el oficio de petición deberá indicar el periodo de licencia, adjuntando la documentación que avala el servicio público que prestará. En cada inicio de periodo escolar, el interesado deberá presentar una constancia que acredite que continua en el servicio público.'],
        recepcion: 'Ventanilla única de oficialía de partes de la DGRH',
        horario: 'Lunes a Viernes de 9:00 a 20:50 hrs.',
        formato: ''
    },
    { 
        id: 3,
        grupo: 'DRL',
        rubro: 'Retiro', 
        nombre: 'Pago de prestaciones por terminación de la relación de trabajo', 
        area: 'Dirección de Relaciones Laborales', 
        resumen: 'Conclución de la relación de trabajo.',
        tieneVariaciones: false,
        descripcion: 'Conclución de la relación de trabajo o laboral en los casos siguientes: renuncia, jubilación, pensión por vejez, incapacidad fisica -invalidez-, terminación de la relación de trabajo con o sin responsabilidad para la Universidad, rescisión definitiva por laudo o reclamo de indemnización, y en caso de fallecimiento del trabajador.',
        requisitos: ['Escrito de renuncia con número de personal y firma autógrafa solicitando el pago de prestaciones por terminación de la relación de trabajo.',
                     'Identificación oficial (INE, pasaporte)',
                     'RFC',
                     'CURP',
                     'Comprobante de domicilio'],
        recepcion: 'Ventanilla única de oficialía de partes de la DGRH',
        horario: 'Lunes a Viernes de 9:00 a 20:50 hrs.',
        formato: ''
    },
    { 
        id: 4,
        grupo: 'DP',
        rubro: 'Permanencia', 
        nombre: 'Permiso económico', 
        area: 'Dirección de Personal', 
        resumen: '',
        tieneVariaciones: true,
        descripcion: 'Solicitud de permiso económico.',
        requisitos: {
            'ATM': ['El Administrador de la Entidad Académica o Dependencia o personal habilitado para realizar funciones de Administración, realiza la captura en permiso económico en el Subsistema de Recursos Humanos.'],
            'Confianza': ['El Administrador de la Entidad Académica o Dependencia o personal habilitado para realizar funciones de Administración, realiza la captura en permiso económico en el Subsistema de Recursos Humanos.'],
            'Académico': ['Oficio de solicitud dirigido a la Dirección de Personal, en el que contenga lo siguiente: Nombre, no. de personal del trabajador, puesto y categoría, dependencia de adscripción o dependencia donde se encuentre laborando, días solicitados de permiso, sello, fecha y firma de conocimiento del Titular de la Entidad Académica.']
        },
        consideraciones: {
            'ATM': ['Tiene derecho a disfrutar 6 permisos económicos al año.'],
            'Confianza': ['Tiene derecho a disfrutar 6 permisos económicos al año.'],
            'Académico': ['Los días solicitados no podrán exceder de tres días consecutivos en un mes, ni unirse a periodo vacacional o festivo.']
        },
        recepcion: {
            'ATM': ['Subsistema de Recursos Humanos'],
            'Confianza': ['Subsistema de Recursos Humanos'],
            'Académico': ['Ventanilla única de oficialía de partes de la DGRH']
        },
        horario: 'Lunes a Viernes de 9:00 a 20:50 hrs.',
        formato: ''
    }
];

const CONFIG_RUBROS = {
    'Ingreso': { color: 'is-success', icon: 'fa-money-check-alt', border: 'border-nominas' },
    'Permanencia': { color: 'is-info', icon: 'fa-tools', border: 'border-tecnicos' },
    'Retiro': { color: 'is-danger', icon: 'fa-chart-line', border: 'border-evaluacion' },
    'General': { color: 'is-warning', icon: 'fa-handshake', border: 'border-relaciones' }
};

const TIPOS_PERSONAL = ['Funcionarios', 'ATM', 'Confianza', 'Académico', 'Eventual'];