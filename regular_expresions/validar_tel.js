
function validarTelefono(telefono) {
    // Este patrón dice: "Debe empezar con 3 y tener exactamente 9 números más después"
    // ^ = desde el inicio
    // 3 = debe empezar con el número 3
    // \d{9} = exactamente 9 dígitos cualquiera después del 3
    // $ = hasta el final (no puede haber nada más)
    let patron = /^3\d{9}$/;
    return patron.test(telefono);
}

