
function RegistroUsuario(){
   //evita el envio del formulario y la recarga de la pagina

  //caprtua de los valores del formulario
  var nombre = document.getElementById('inputNombre').value;
  var apellido = document.getElementById('inputApellido').value;
  var email = document.getElementById('input_Email').value;
  var contraseña = document.getElementById('inputContraseña').value;
  var confirmaContraseña = document.getElementById('inputConfirmarContraseña').value;
  var telefono = document.getElementById('inputTelefono').value;
  var pais = document.getElementById('inputPais').value;

  //cre una instancia de la clase Usuario con los valores capturados
  const usuario = new Usuario(nombre,apellido,email,contraseña,telefono,pais);

  console.log(usuario.apellido);
  debugger;

}

