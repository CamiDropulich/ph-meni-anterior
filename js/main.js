window.addEventListener("load", iniciarElementos, false);

function iniciarElementos(){
    // Navegación
    navegacion();

    // Banner
    banner();
    
    // Galería
    galeria();

    // Comparador de imágenes
    comparadorImagenes();

    // Finalizar carga de la página
    setTimeout(finalizarCarga, 500);
}