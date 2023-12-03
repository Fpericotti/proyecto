//Solicitud de calificaciones
fetch("js/comentarios.json")
    .then(response => response.json())
    .then(data => {
        const nuevaCalificacion = data.comentarios[0].calificacion;
        const calificacion = document.getElementById("calificacion1");
        calificacion.innerText = `Calificación: ${nuevaCalificacion}`;

        const nuevaCalificacion2 = data.comentarios[1].calificacion;
        const calificacion2 = document.getElementById("calificacion2");
        calificacion2.innerText = `Calificación: ${nuevaCalificacion2}`;

        const nuevaCalificacion3 = data.comentarios[2].calificacion;
        const calificacion3 = document.getElementById("calificacion3");
        calificacion3.innerText = `Calificación: ${nuevaCalificacion3}`;

        const nuevaCalificacion4 = data.comentarios[3].calificacion;
        const calificacion4 = document.getElementById("calificacion4");
        calificacion4.innerText = `Calificación: ${nuevaCalificacion4}`;
    })
//Solicitud de comentarios
fetch("js/comentarios.json")
    .then(response => response.json())
    .then(data => {
        const nuevoComentario = data.comentarios[0].comentario;
        const comentario = document.getElementById("comentario1");
        comentario.innerText = nuevoComentario;

        const nuevoComentario2 = data.comentarios[1].comentario;
        const comentario2 = document.getElementById("comentario2");
        comentario2.innerText = nuevoComentario2;

        const nuevoComentario3 = data.comentarios[2].comentario;
        const comentario3 = document.getElementById("comentario3");
        comentario3.innerText = nuevoComentario3;

        const nuevoComentario4 = data.comentarios[3].comentario;
        const comentario4 = document.getElementById("comentario4");
        comentario4.innerText = nuevoComentario4;
})

//Solicitud de imagen y nombre
const generarUsuario1 = async () => {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];

    const nuevaImagen1 = datos.picture.thumbnail;
    const imagen1 = document.getElementById("imagen1");
    imagen1.setAttribute("src", nuevaImagen1);

    const nuevoNombre1 = datos.name.first +" "+ datos.name.last;
    const nombre1 = document.getElementById("nombre1");
    nombre1.innerText = nuevoNombre1;
}

const generarUsuario2 = async () => {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];

    const nuevaImagen2 = datos.picture.thumbnail;
    const imagen2 = document.getElementById("imagen2");
    imagen2.setAttribute("src", nuevaImagen2);

    const nuevoNombre2 = datos.name.first +" "+ datos.name.last;
    const nombre2 = document.getElementById("nombre2");
    nombre2.innerText = nuevoNombre2;
}

const generarUsuario3 = async () => {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];

    const nuevaImagen3 = datos.picture.thumbnail;
    const imagen3 = document.getElementById("imagen3");
    imagen3.setAttribute("src", nuevaImagen3);

    const nuevoNombre3 = datos.name.first +" "+ datos.name.last;
    const nombre3 = document.getElementById("nombre3");
    nombre3.innerText = nuevoNombre3;
}

const generarUsuario4 = async () => {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];

    const nuevaImagen4 = datos.picture.thumbnail;
    const imagen4 = document.getElementById("imagen4");
    imagen4.setAttribute("src", nuevaImagen4);

    const nuevoNombre4 = datos.name.first +" "+ datos.name.last;
    const nombre4 = document.getElementById("nombre4");
    nombre4.innerText = nuevoNombre4;
}

generarUsuario1();
generarUsuario2();
generarUsuario3();
generarUsuario4();