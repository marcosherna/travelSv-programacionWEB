  class Usuario {
  
    constructor(Nombre, Apellido,Email,contraseña,telefono,pais,fechaNacimiento,genero) {
      this.nombre = Nombre;
      this.apellido = Apellido;
      this.email = Email;
      this.contraseña = contraseña;
      this.telefono = telefono;
      this.pais = pais;
      this.fechaNacimiento = fechaNacimiento;
      this.genero = genero;
    }

   // Agrega métodos adicionales o propiedades según tus necesidades
    get EmailUsuario(){
         return this.Email;
    }
    // set EmailUsuario(EmailUser){
    //     this.Email = EmailUser;
    // }
    get ContraseñaUsuario(){
         return this.contraseña;
    }
    // set ContraseñaUsuario(ContraUser){
    //     return this.contraseña;
    // }
    // get TelefonoUsuario(){
    //     return this.telefono;
    // }
    // set TelefonoUsuario(telefonoUser){
    //      this.telefono = telefonoUser;
    // }
    // get PaisUsuario(){
    //     return this.pais;
    // }
    // set PaisUsuario(PaisUser){
    //      this.pais = PaisUser;
    // }
    // get GeneroUsuario(){
    //     return this.Genero;
    // }
    // set GeneroUsuario(GeneroUser){
    //     this.Genero = GeneroUser;
    // }

}