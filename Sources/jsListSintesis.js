function cargarIndice() {
    const tabla = document.getElementById('tabla_cuerpo');
    tabla.innerHTML = ""; // Limpiar tabla

    SINTESIS.forEach(persona => {
        const fila = document.createElement('tr');
        
        fila.innerHTML = `
            <td class="is-vcentered"><strong>${persona.nper}</strong></td>
            <td class="is-vcentered">${persona.fullName}</td>
            <td class="is-vcentered">${persona.cargo}</td>
            <td class="has-text-centered">
                <a href="SintesisC.html?id=${persona.nper}" class="button bg-verde is-small is-rounded">
                    <span class="icon has-text-white"><i class="fas fa-eye"></i></span>
                    <span class="has-text-white">Ver</span>
                </a>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

// Función para buscar en la tabla
function filtrarTabla() {
    const input = document.getElementById("busqueda");
    const filter = input.value.toUpperCase();
    const table = document.querySelector("table");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1]; // Columna de nombre
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

window.onload = cargarIndice;