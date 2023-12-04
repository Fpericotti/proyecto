function checkPassword() {
  var contrasena = prompt("Ingrese la contraseña:");

  if (contrasena == "supervisor") {
    alert("Contraseña correcta. Acceso permitido.");
    window.location.href = "./index.html";
  } else {
    alert("Contraseña incorrecta. Acceso denegado.");
    window.location.href = "./web/index.html";
  }
  }