//Header for JavaScript
var cad = `
<div class="flex-containerHeader">
<a class="imgHB" href="index.html"><img src="img/LogoHB.svg" alt="Casa Alquileres"></img></a>
<h1>Book.your.Home</h1>
<a style="text-decoration: none; color: white; display: flex; width: 5rem; padding: 2%;" href="/index.html">Administrar</a>
</div>
<nav>
<ul class="nav-display">
    <li><a class="nav-item" href="index.html">Home</a></li>
    <li><a class="nav-item" href="alquileres.html">Alquileres</a></li>
    <li><a class="nav-item" href="contacto.html">Contacto</a></li>
    <li><a class="nav-item" href="opiniones.html">Opiniones</a></li>
    <li><a class="nav-item" href="nosotros.html">Nosotros</a></li>
</ul>
</nav>
`
document.getElementById("idHeader").innerHTML = cad


//Footer for JavaScript
cad = `
<div class="flex-footer">
<div class="redes">
    <h2>Nuestras redes</h2>
    <div>
        <a href=" https://www.instagram.com/"><i class="fa-brands fa-square-instagram fa-2xl"
                style="color: #63caa7;"></i></a>
        <a href="https://twitter.com/?lang=es"><i class="fa-brands fa-square-x-twitter fa-2xl"
                style="color: #63caa7;"></i></a>
        <a href="https://www.facebook.com/home.php"><i class="fa-brands fa-square-facebook fa-2xl"
                style="color: #63caa7;"></i></a>
    </div>
</div>
<div class="suscripcion">
    <form>
        <h2>Suscribete al newsletter</h2>
        <br>
        <div class="suscripcion-input">
            <input class="correo" type="text" name="email" placeholder="contacto@bookyourhome.com"
                value="">
            <input class="suscribirse" type="submit" value="Suscribirme">
        </div>
    </form>
</div>
</div>
<p class="derechos">Derechos reservados @2020</p>
`

document.getElementById("idFooter").innerHTML=cad

