function RegistroUsuario(){
  //caprtua de los valores del formulario
  var nombre = document.getElementById('inputNombre').value; 
  var apellido = document.getElementById('inputApellido').value;
  var email = document.getElementById('input_Email').value;
  var contraseña = document.getElementById('inputContraseña').value;
  var confirmaContraseña = document.getElementById('inputConfirmarContraseña').value;
  var telefono = document.getElementById('inputTelefono').value;
  var pais = document.getElementById('inputPais').value;
// Fecha casos especial
  var fechNacimiento = document.getElementById("date").value;
  var fechaSeleccionada = fechNacimiento.value;
// Genero caso especial
  var generoSelect = document.getElementById("genero");
  var generoSeleccionado = generoSelect.value;

  //cre una instancia de la clase Usuario con los valores capturados
  const usuario = new Usuario(nombre,apellido,email,contraseña,telefono,pais);

  //mostrando los datos del registro de usuario
  console.log(usuario.apellido);
  console.log(fechaSeleccionada);
  console.log(generoSeleccionado);
 
}

