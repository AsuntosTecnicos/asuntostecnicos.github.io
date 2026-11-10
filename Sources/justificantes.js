const datos = [
  { titulo: "1a enero", fechaTexto: "19 de enero", fechaNomina:"1a febrero", fecha: "2026-01-19" },
  { titulo: "2a enero", fechaTexto: "04 de febrero", fechaNomina:"2a febrero", fecha: "2026-02-04" },
  { titulo: "1a febrero", fechaTexto: "20 de febrero", fechaNomina:"1a marzo", fecha: "2026-03-20" },
  { titulo: "2a febrero", fechaTexto: "03 de marzo", fechaNomina:"2a marzo", fecha: "2026-03-03" },
  { titulo: "1a marzo", fechaTexto: "19 de marzo", fechaNomina:"1a abril", fecha: "2026-03-19" },
  { titulo: "2a marzo", fechaTexto: "07 de abril", fechaNomina:"2a abril", fecha: "2026-04-07" },
  { titulo: "1a abril", fechaTexto: "17 de abril", fechaNomina:"1a mayo", fecha: "2026-04-17" },
  { titulo: "2a abril", fechaTexto: "06 de mayo", fechaNomina:"2a mayo", fecha: "2026-05-06" },
  { titulo: "1a mayo", fechaTexto: "19 de mayo", fechaNomina:"1a junio", fecha: "2026-05-19" },
  { titulo: "2a mayo", fechaTexto: "02 de junio", fechaNomina:"2a junio", fecha: "2026-06-02" },
  { titulo: "1a junio", fechaTexto: "17 de junio", fechaNomina:"1a julio", fecha: "2026-06-17" },
  { titulo: "2a junio", fechaTexto: "02 de julio", fechaNomina:"2a julio**", fecha: "2026-07-02" },
  { titulo: "1a julio", fechaTexto: "04 de agosto", fechaNomina:"1a agosto", fecha: "2026-08-04" },
  { titulo: "2a julio", fechaTexto: "04 de agosto", fechaNomina:"2a agosto", fecha: "2026-08-04" },
  { titulo: "1a agosto", fechaTexto: "18 de agosto", fechaNomina:"1a septiembre", fecha: "2026-08-18" },
  { titulo: "2a agosto", fechaTexto: "03 de septiembre", fechaNomina:"2a septiembre", fecha: "2026-09-03" },
  { titulo: "1a septiembre", fechaTexto: "18 de septiembre", fechaNomina:"1a octubre", fecha: "2026-09-18" },
  { titulo: "2a septiembre", fechaTexto: "02 de octubre", fechaNomina:"2a octubre", fecha: "2026-10-02" },
  { titulo: "1a octubre", fechaTexto: "19 de octubre", fechaNomina:"1a noviembre", fecha: "2026-10-19" },
  { titulo: "2a octubre", fechaTexto: "04 de noviembre", fechaNomina:"2a noviembre", fecha: "2026-11-04" },
  { titulo: "1a noviembre", fechaTexto: "18 de noviembre", fechaNomina:"1a diciembre", fecha: "2026-11-18" },
  { titulo: "2a noviembre", fechaTexto: "02 de diciembre*", fechaNomina:"2a diciembre**", fecha: "2026-12-02" },
  { titulo: "1a diciembre", fechaTexto: "04 de enero 2027*", fechaNomina:"1a enero/2027", fecha: "2027-01-04" },
  { titulo: "2a diciembre", fechaTexto: "05 de enero 2027*", fechaNomina:"2a enero/2027", fecha: "2027-01-05" } 
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

function abrirPdf(){
    window.open("../Public/CJustificantes.pdf")
}