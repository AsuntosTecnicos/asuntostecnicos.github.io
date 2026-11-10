const cronogramaApp = () => {
    return {
        meses: ['marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre'],
        datos: CRONO,
        busqueda: '',

        get datosFiltrados() {
            return this.datos.filter(i => 
                i.actividad.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                i.responsable.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        },

        claseCelda(valor, index) {
            return valor && valor !== ""
                ? `bg-m${index} has-text-weight-bold has-text-link`
                : 'has-text-grey';
        }
    }
}


const convocatoriasApp = () => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const datos = CONVOCATORIAS;

  return {
    datos,
    hoy,

    esVencida(fechaStr) {
      const [anio, mes, dia] = fechaStr.split('-').map(Number);
      const fechaLocal = new Date(anio, mes - 1, dia);
      return fechaLocal < this.hoy;
    }
  }
}

const ilineaApp = () => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const datos = ILINEA;

  return {
    datos,
    hoy,

    esVencida(fechaStr) {
      const [anio, mes, dia] = fechaStr.split('-').map(Number);
      const fechaLocal = new Date(anio, mes - 1, dia);
      return fechaLocal < this.hoy;
    }
  }
}


const caracadApp = () => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const datos = CARACAD;

  return {
    datos,
    hoy,

    esVencida(fechaStr) {
      const [anio, mes, dia] = fechaStr.split('-').map(Number);
      const fechaLocal = new Date(anio, mes - 1, dia);
      return fechaLocal < this.hoy;
    }
  }
}

const caracaddpApp = () => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const datos = CARACADDP;

  return {
    datos,
    hoy,

    esVencida(fechaStr) {
      const [anio, mes, dia] = fechaStr.split('-').map(Number);
      const fechaLocal = new Date(anio, mes - 1, dia);
      return fechaLocal < this.hoy;
    }
  }
}

function convocatoriasApp2() {
    const datos = CARACADDP;

    const hoy = new Date();
    hoy.setHours(0,0,0,0);

    return{

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