// Galería --------------------------------------
function galeria(){
    cargarImagenes();
    generarOrden();
    asignarFondo();
    setInterval(animar, 3000);
}

// Cargar las imágenes de la galería -------------
const imagenes = new Array(36);

function cargarImagenes(){
    for(let f = 0; f < imagenes.length; f++){
        imagenes[f] = "./imagenes/galeria/galeria" + (f + 1) + ".jpg";
    }
}

// Almacenar números para un orden aleatorio -----
const ordenAleatorio = [];

function generarOrden(){
    while(ordenAleatorio.length < imagenes.length){
        let aux = parseInt(Math.random() * imagenes.length);
        let existe = false;
        
        for(let f = 0; f < ordenAleatorio.length; f++){
            if(ordenAleatorio[f] == aux){
                existe = true;
                break;
            }
        }

        if(!existe){
            ordenAleatorio[ordenAleatorio.length] = aux;
        }
    }
}

// Asignar los fondos ----------------------------
function asignarFondo(){
    for(let f = 0; f < imagenes.length; f++){
        document.getElementById("img-" + (f + 1)).style.backgroundImage = "url(" + imagenes[ordenAleatorio[f]] + ")";
        document.getElementById("img-" + (f + 1)).style.backgroundSize = "cover";
        document.getElementById("img-" + (f + 1)).style.backgroundRepeat = "no-repeat";
    }
}

// Animación de la galería -----------------------
var anim1 = 3;
var anim2 = anim1 + 12;
var anim3 = anim2 + 12;
var nroAnimacion = 2;

function determinarValoresAnimacion(){
    anim2 = anim1 + 12;
    anim3 = anim2 + 12;
}

function animar(){
    ejecutarAnimacion("img-" + anim1, nroAnimacion);
    ejecutarAnimacion("img-" + anim2, nroAnimacion);
    ejecutarAnimacion("img-" + anim3, nroAnimacion);

    if(anim1 == 12){
        anim1 = 2;
        determinarValoresAnimacion();
        if(nroAnimacion == 1){
            anim1 = 3;
            nroAnimacion = 2;
            determinarValoresAnimacion();
        }
    }
    else{
        if(anim1 == 11){
            if(nroAnimacion == 1){
                anim1 = 3;
                determinarValoresAnimacion();
            }
            else{
                anim1 = 2;
                nroAnimacion = 1;
                determinarValoresAnimacion();
            }
        }
        else{
            anim1 += 3;
            anim2 += 3;
            anim3 += 3;
        }
    }
}

// Ejecutar animación ----------------------------
function ejecutarAnimacion(id, nroAnimacion){
    switch (nroAnimacion) {
        case 1: 
            animarAparecerOpacidad(id);
            break;
        case 2: 
            animarDesaparecerOpacidad(id);
            break;
        default:
            break;
    }
}

// Posibles animaciones --------------------------
function animarDesaparecerOpacidad(x){
    let contador = 1;
    
    let intervalo = setInterval(function(){
        contador -= 0.05;
        document.getElementById(x).style.opacity = contador;
        if(contador <= 0){
            clearInterval(intervalo);
        }
    }, 50);
}

function animarAparecerOpacidad(x){
    let contador = 0;
    
    let intervalo = setInterval(function(){
        contador += 0.05;
        document.getElementById(x).style.opacity = contador;
        if(contador >= 1){
            clearInterval(intervalo);
        }
    }, 50);
}