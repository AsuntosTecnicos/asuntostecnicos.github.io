const datos = [
  { titulo: "1a enero", fechaTexto: "06 de enero", fechaNomina:"14", fecha: "2026-01-06" },
  { titulo: "2a enero", fechaTexto: "19 de enero", fechaNomina:"29", fecha: "2026-01-19" },
  { titulo: "1a febrero", fechaTexto: "29 de enero", fechaNomina:"12", fecha: "2026-01-29" },
  { titulo: "2a febrero", fechaTexto: "09 de febrero", fechaNomina:"26", fecha: "2026-02-09" },
  { titulo: "1a marzo", fechaTexto: "27 de febrero", fechaNomina:"12", fecha: "2026-02-27" },
  { titulo: "2a marzo", fechaTexto: "10 de marzo*", fechaNomina:"26*", fecha: "2026-03-10" },
  { titulo: "1a abril", fechaTexto: "24 de marzo", fechaNomina:"14", fecha: "2026-03-24" },
  { titulo: "2a abril", fechaTexto: "16 de abril", fechaNomina:"29", fecha: "2026-04-16" },
  { titulo: "1a mayo", fechaTexto: "28 de abril", fechaNomina:"13", fecha: "2026-04-28" },
  { titulo: "2a mayo", fechaTexto: "14 de mayo", fechaNomina:"28", fecha: "2026-05-14" },
  { titulo: "1a junio", fechaTexto: "01 de junio", fechaNomina:"12", fecha: "2026-06-01" },
  { titulo: "2a junio", fechaTexto: "16 de junio", fechaNomina:"26", fecha: "2026-06-16" },
  { titulo: "1a julio", fechaTexto: "22 de junio*", fechaNomina:"8*", fecha: "2026-06-22" },
  { titulo: "2a julio", fechaTexto: "22 de junio*", fechaNomina:"9*", fecha: "2026-06-22" },
  { titulo: "1a agosto", fechaTexto: "10 de julio*", fechaNomina:"13", fecha: "2026-07-10" },
  { titulo: "2a agosto", fechaTexto: "17 de agosto", fechaNomina:"28", fecha: "2026-08-17" },
  { titulo: "1a septiembre", fechaTexto: "28 de agosto", fechaNomina:"11", fecha: "2026-08-28" },
  { titulo: "2a septiembre", fechaTexto: "14 de septiembre*", fechaNomina:"29*", fecha: "2026-09-14" },
  { titulo: "1a octubre", fechaTexto: "30 de septiembre", fechaNomina:"14", fecha: "2026-09-30" },
  { titulo: "2a octubre", fechaTexto: "15 de octubre", fechaNomina:"29", fecha: "2026-10-15" },
  { titulo: "1a noviembre", fechaTexto: "29 de octubre", fechaNomina:"12", fecha: "2026-10-29" },
  { titulo: "2a noviembre", fechaTexto: "13 de noviembre", fechaNomina:"27", fecha: "2026-11-13" },
  { titulo: "1a diciembre", fechaTexto: "**", fechaNomina:"**", fecha: "2027-01-01" },
  { titulo: "2a diciembre", fechaTexto: "**", fechaNomina:"**", fecha: "2027-01-01" } 
];

function fechasApp() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  return {
      datos,
      hoy,
      esVencida(fecha){
        const f = new Date(fecha + "T00:00:00");
        return f < this.hoy;
      },

      esHoy(fecha){
        const f = new Date(fecha + "T00:00:00");
        return f.getTime() === this.hoy.getTime();
      }
  }
}