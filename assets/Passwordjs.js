function verificarPassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const password3 = document.getElementById('password3').value;
    const mensajePassword = document.getElementById('mensaje-password');

    const passwordConcatenado = password1 + password2 + password3;

    switch (passwordConcatenado) {
        case '911':
            mensajePassword.textContent = 'Password 1 correcto';
            break;
        case '714':
            mensajePassword.textContent = 'Password 2 es correcto';
            break;
        default:
            mensajePassword.textContent = 'Password incorrecto';
            break;
    }
}