// Validar contraseña básica (mínimo 6 caracteres, 1 número, 1 letra)

function validarPassword(password) {
    // Este patrón dice: "Debe tener mínimo 6 caracteres, al menos 1 letra y 1 número"
    // ^ = desde el inicio
    // (?=.*[a-zA-Z]) = debe tener al menos una letra (mayúscula o minúscula)
    // (?=.*\d) = debe tener al menos un número
    // .{6,} = cualquier carácter, mínimo 6 veces
    // $ = hasta el final
    let patron = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    return patron.test(password);
}


