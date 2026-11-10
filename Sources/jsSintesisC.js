function renderPersona() {
            // 1. Obtener los parámetros de la URL
            const params = new URLSearchParams(window.location.search);
            const idBuscado = Number(params.get('id'));

            // 2. Buscar la persona en el arreglo
            const persona = SINTESIS.find(p => p.nper === idBuscado);

            if (persona) {
                // Llenar datos
                document.getElementById('nombre').innerText = persona.fullName;
                document.getElementById('header_nombre').innerText = persona.fullName;
                document.getElementById('no_personal').innerText = "No. de Personal: " + persona.nper;
                document.getElementById('titulo').innerText = persona.texTitulo;
                document.getElementById('posgrados').innerText = persona.texPosg;
                document.getElementById('cargos').innerText = persona.texCargos;
                
                // Generar Avatar dinámico por nombre
                document.getElementById('avatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(persona.fullName)}&background=18529D&color=ffffff&size=128`;

                // Procesar Tags
                const tagsContainer = document.getElementById('tags_container');
                persona.texOtherActivities.split(',').forEach(tagText => {
                    const span = document.createElement('span');
                    span.className = 'tag is-info is-light is-medium';
                    span.innerText = tagText.trim();
                    tagsContainer.appendChild(span);
                });
            } else {
                // Mostrar error si no existe
                document.getElementById('main_card').classList.add('is-hidden');
                document.getElementById('error_message').classList.remove('is-hidden');
            }
        }

        // Ejecutar al cargar
        window.onload = renderPersona;