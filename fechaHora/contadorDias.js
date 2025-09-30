function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const finDeAno = new Date('January 1, 2026 00:00:00').getTime();
    const tiempoRestante = finDeAno - ahora;

    if (tiempoRestante > 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

        document.getElementById('mensaje').textContent = '¡Faltan ' + dias + ' días para 2026!';
    } else {
        document.getElementById('mensaje').textContent = '🎉 ¡FELIZ AÑO NUEVO 2026! 🎉';
        document.getElementById('dias').textContent = '00';
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
    }
}

// Actualizar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);

// Ejecutar inmediatamente
actualizarCuentaRegresiva();
