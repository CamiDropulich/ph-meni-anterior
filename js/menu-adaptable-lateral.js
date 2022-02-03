// Variables globales de control ------------------------------
var clicks = 0;
var velocidadCambioPosicion = 20;
var grosorLinea = 3;
var anchoMin = 3;
var anchoMax = 27;
var altoMin = 3;
var altoMax = 27;
var puntoMedio1 = 11;
var puntoMedio2 = 22;

// Ejecutar menú lateral --------------------------------------
function navegacion(){
    barrasPosicionIgual();
    document.getElementById("lienzo1").addEventListener("click", menuLateral, false);
    
    ajustarBordeInicio();
}

// Ajustar borde al iniciar el navegador o redimensionar ------
function ajustarBordeInicio(){
    if(window.innerWidth <= 720){
        document.getElementsByClassName("nav-link")[0].style.borderRight = 2 + "px solid #000000";
        document.getElementsByClassName("nav-link")[0].style.borderBottom = "none";
    }
    else{
        document.getElementsByClassName("nav-link")[0].style.borderBottom = 5 + "px solid #000000";
        document.getElementsByClassName("nav-link")[0].style.borderRight = "none";
    }
}

// Aplicar borde al botón presionado --------------------------
function dibujarBordeMenu(x){
    if(window.innerWidth <= 720){
        for(let f = 0; f < document.getElementsByClassName("nav-link").length; f++){
            document.getElementsByClassName("nav-link")[f].style.borderRight = "none";
        }
        
        document.getElementsByClassName("nav-link")[x].style.borderRight = 2 + "px solid #000000";
        cerrarMenuLateral();
        animarAPosicionIgual();
    }
    else{
        for(let f = 0; f < document.getElementsByClassName("nav-link").length; f++){
            document.getElementsByClassName("nav-link")[f].style.borderBottom = "none";
        }
        
        document.getElementsByClassName("nav-link")[x].style.borderBottom = 5 + "px solid #000000";
    }
}

// Retornar lienzo --------------------------------------------
function retornarLienzo(x){
    var canvas = document.getElementById(x);

    if(canvas.getContext){
        var lienzo = canvas.getContext("2d");
        return lienzo;
    }
    else{
        return false;
    }
}

// Limpiar lienzo ---------------------------------------------
function limpiarLienzo(){
    var lienzo = retornarLienzo("lienzo1");
    lienzo.clearRect(0, 0, 350, 350);
}

// Dibujar barras en 'X' y '=' --------------------------------
function barrasPosicionX(){
    var linea1 = retornarLienzo("lienzo1");
    var linea2 = retornarLienzo("lienzo1");

    // Definir estilos de líneas
    linea1.lineWidth = grosorLinea;
    linea1.lineCap = "round";
    linea2.lineWidth = grosorLinea;
    linea2.lineCap = "round";

    // Trazar líneas
    linea1.beginPath();
    linea1.moveTo(anchoMin, altoMin);
    linea1.lineTo(anchoMax, altoMax);
    linea1.stroke();

    linea2.beginPath();
    linea2.moveTo(anchoMin, altoMax);
    linea2.lineTo(anchoMax, altoMin);
    linea2.stroke();
}

function barrasPosicionIgual(){
    var linea1 = retornarLienzo("lienzo1");
    var linea2 = retornarLienzo("lienzo1");

    // Definir estilos de líneas
    linea1.lineWidth = grosorLinea;
    linea1.lineCap = "round";
    linea2.lineWidth = grosorLinea;
    linea2.lineCap = "round";

    // Trazar líneas
    linea1.beginPath();
    linea1.moveTo(anchoMin, puntoMedio1);
    linea1.lineTo(anchoMax, puntoMedio1);
    linea1.stroke();

    linea2.beginPath();
    linea2.moveTo(anchoMin, puntoMedio2);
    linea2.lineTo(anchoMax, puntoMedio2);
    linea2.stroke();
}

// Animar barras para pasar de posiciones ---------------------
function animarAPosicionX(){
    var linea1 = retornarLienzo("lienzo1");
    var linea2 = retornarLienzo("lienzo1");

    // Definir estilos de líneas
    linea1.lineWidth = grosorLinea;
    linea1.lineCap = "round";
    linea2.lineWidth = grosorLinea;
    linea2.lineCap = "round";

    barrasPosicionIgual();

    var aux1 = puntoMedio1;
    var aux2 = puntoMedio1;
    var aux3 = puntoMedio2;
    var aux4 = puntoMedio2;

    var intervalo = setInterval(posX, velocidadCambioPosicion);
    var contador = 0;

    function posX(){
        limpiarLienzo();
        linea1.beginPath();
        linea1.moveTo(anchoMin, aux1);
        linea1.lineTo(anchoMax, aux2);
        linea1.stroke();

        if(aux1 > altoMin){
            aux1--;
        }
        if(aux2 < altoMax){
            aux2++;
        }

        linea2.beginPath();
        linea2.moveTo(anchoMin, aux3);
        linea2.lineTo(anchoMax, aux4);
        linea2.stroke();

        if(aux3 < altoMax){
            aux3++;
        }
        if(aux4 > altoMin){
            aux4--;
        }

        contador += velocidadCambioPosicion;

        if(contador >= 500){
            clearInterval(intervalo);
        }
    }
}

function animarAPosicionIgual(){
    var linea1 = retornarLienzo("lienzo1");
    var linea2 = retornarLienzo("lienzo1");

    // Definir estilos de líneas
    linea1.lineWidth = grosorLinea;
    linea1.lineCap = "round";
    linea2.lineWidth = grosorLinea;
    linea2.lineCap = "round";

    barrasPosicionX();

    var aux1 = altoMin;
    var aux2 = altoMax;
    var aux3 = altoMax;
    var aux4 = altoMin;

    var intervalo = setInterval(posIgual, velocidadCambioPosicion);
    var contador = 0;

    function posIgual(){
        limpiarLienzo();
        linea1.beginPath();
        linea1.moveTo(anchoMin, aux1);
        linea1.lineTo(anchoMax, aux2);
        linea1.stroke();

        if(aux1 < puntoMedio1){
            aux1++;
        }
        if(aux2 > puntoMedio1){
            aux2--;
        }

        linea2.beginPath();
        linea2.moveTo(anchoMin, aux3);
        linea2.lineTo(anchoMax, aux4);
        linea2.stroke();

        if(aux3 > puntoMedio2){
            aux3--;
        }
        if(aux4 < puntoMedio2){
            aux4++;
        }

        contador += velocidadCambioPosicion;

        if(contador >= 500){
            clearInterval(intervalo);
        }
    }
}

// Menú lateral -----------------------------------------------
function abrirMenuLateral(){
    clicks++;
    document.getElementById("nav-btn-container").style.marginTop = 0 + "px";
    setTimeout(function(){
        document.getElementById("nav-btn-container").style.marginLeft = 0 + "px";
    }, 250);
}

function cerrarMenuLateral(){
    clicks++;
    document.getElementById("nav-btn-container").style.marginLeft = -100 + "vw";
    setTimeout(function(){
        document.getElementById("nav-btn-container").style.marginTop = -100 + "vh";
    }, 250);

}

function menuLateral(){
    if(clicks % 2 == 0){
        abrirMenuLateral();
        animarAPosicionX();
    }
    else{
        cerrarMenuLateral();
        animarAPosicionIgual();
    }
}