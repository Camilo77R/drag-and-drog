function mostrarResultado(id, esValido) {
    const elemento = document.getElementById(id);
    if (esValido) {
        elemento.textContent = "✅ VÁLIDO";
        elemento.className = "mt-2 text-sm font-bold text-green-600";
    } else {
        elemento.textContent = "❌ INVÁLIDO";
        elemento.className = "mt-2 text-sm font-bold text-red-600";
    }
}
//HAGO ESTO PAR QUE CARGUE EL DOM
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('telefono').addEventListener('input', function() {
        mostrarResultado('tel-result', validarTelefono(this.value));
    });

    document.getElementById('password').addEventListener('input', function() {
        mostrarResultado('pass-result', validarPassword(this.value));
    });

    document.getElementById('url').addEventListener('input', function() {
        mostrarResultado('url-result', validarURL(this.value));
    });
});
