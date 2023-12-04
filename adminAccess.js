function checkPassword() {
  var contrasena = prompt("Ingrese la contraseña:");

  if (contrasena == "supervisor") {
    alert("Contraseña correcta. Acceso permitido.");
    window.location.href = "https://fpericotti.github.io/proyecto/index.html";
  } else {
    alert("Contraseña incorrecta. Acceso denegado.");
    window.location.href = "https://fpericotti.github.io/proyecto/web/index.html";
  }
  }