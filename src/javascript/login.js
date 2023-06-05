function  validarPassword(){
    var username = document.getElementById("UsernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var mensajeError = document.getElementById("mensajeError");
    var remenberCheckbox = document.getElementById("checkbox");

    //Vlaidar si la contraseña cumple con los requisitos
    if(username === "" || password === ""){
        mensajeError.textContent = "Ingresa el usuario y la contraseña.";
    }else{
        //Realizar la logica de validacion adicional si es correcto
        if(username === "usuario" && password === "1234"){
            // si el usuario y contraseña son corectos entrara a la pagina
            mensajeError.textContent = "¡ Login exitoso!";
            //
            if (checkbox.remenberCheckbox) {
                // Crear una cookie con el nombre de usuario que expira en 30 días
                document.cookie = `username=${username}; expires=${getCookieExpirationDate(30)}`;
              }
            window.location.href = "count.html";
        }else{
            mensajeError.textContent = "Credenciales invalidas";
        }
    }
    // Funcion para obtener la fecha de expiracion de la cookie
    function getCookieExpirationDate(days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        return date.toUTCString();
      }
}
