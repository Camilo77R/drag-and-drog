let elementoArrastrado = null;

function arrastrar(evento) {
    elementoArrastrado = evento.target;
}

function permitirSoltar(evento) {
    evento.preventDefault();
}

function soltar(evento) {
    evento.preventDefault();
    const columna = evento.target.closest('[id]');
    
    if (columna && elementoArrastrado) {
        // Si se suelta en una columna, agregar la tarjeta
        if (columna.id === 'por-hacer' || columna.id === 'en-proceso' || columna.id === 'terminado') {
            columna.appendChild(elementoArrastrado);
        }
        elementoArrastrado = null;
    }
}

function agregarTarea(columnaId) {
    const nuevaTarea = prompt('¿Qué tarea quieres agregar?');
    
    if (nuevaTarea && nuevaTarea.trim() !== '') {
        const columna = document.getElementById(columnaId);
        const tarjeta = document.createElement('div');
        
        tarjeta.className = 'tarjeta bg-white p-3 rounded shadow cursor-move';
        tarjeta.draggable = true;
        tarjeta.ondragstart = arrastrar;
        tarjeta.textContent = nuevaTarea.trim();
        
        // Agregar botón de eliminar LAS TAREAS
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '❌';
        botonEliminar.className = 'float-right text-red-500 ml-2';
        botonEliminar.onclick = function() {
            tarjeta.remove();
        };
        
        tarjeta.appendChild(botonEliminar);
        columna.appendChild(tarjeta);
    }
}

// Agregar funcionalidad de doble clic para editar LAS TAREAS
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('dblclick', function(evento) {
        if (evento.target.classList.contains('tarjeta')) {
            const textoActual = evento.target.textContent.replace('❌', '').trim();
            const nuevoTexto = prompt('Editar tarea:', textoActual);
            
            if (nuevoTexto && nuevoTexto.trim() !== '') {
                evento.target.innerHTML = nuevoTexto.trim() + 
                    ' <button onclick="this.parentElement.remove()" class="float-right text-red-500 ml-2">❌</button>';
            }
        }
    });
});
