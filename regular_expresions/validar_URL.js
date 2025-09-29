

function validarURL(url) {
    // Este patrón dice: "Debe empezar con http o https, tener un dominio y una extensión"
    // ^ = desde el inicio
    // https? = "http" y opcionalmente una "s" (http o https)
    // :// = dos puntos y dos barras
    // [a-zA-Z0-9.-]+ = letras, números, puntos o guiones (el dominio)
    // \. = un punto literal (escapado)
    // [a-zA-Z]{2,} = mínimo 2 letras para la extensión (.com, .co, .org)
    // $ = hasta el final
    let patron = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(url);
}

// Probar
console.log("https://google.com →", validarURL("https://google.com"));     // true
console.log("google.com →", validarURL("google.com"));                     // false
console.log("http://sitio.co →", validarURL("http://sitio.co"));           // true
