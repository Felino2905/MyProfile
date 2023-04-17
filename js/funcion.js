let menuVisible = false;
//Est funcion ocula o muestra nuestro menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculta el menu cuando se ha seleccionado una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que da movilidada a las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementByIdClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("postgresql");
        habilidades[6].classList.add("java");
        habilidades[7].classList.add("bootstrap");
        habilidades[8].classList.add("python");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("aprendizaje");
        habilidades[14].classList.add("capacidad");
        habilidades[15].classList.add("sociable");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}