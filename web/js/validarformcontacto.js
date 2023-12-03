
function validar() {
  let x = document.getElementById("nom").value;
  if (x == 0) {
    alert("Falta rellenar el campo NOMBRE");
    return false;
  }

  let y= document.getElementById("apellido").value;
  if (y == 0) {
    alert("Falta rellenar el campo APELLIDO");
    return false;
  }

  let z= document.getElementById("Email").value;
  if (z == 0) {
    alert("Falta rellenar el campo EMAIL");
    return false;
  }

  let a= document.getElementById("comentarios").value;
  if (a == 0) {
    alert("No hiciste ningún comentario");
    return false;
  }
}