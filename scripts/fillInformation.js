$(document).ready(function() {
    var container= document.getElementById('ships');
    // Manejar el clic en los elementos dentro de la sección de naves
    container.addEventListener('click', function(e){
        
        // Obtener información específica del elemento clicado
        var titulo = $(e.target).find(".titulo-elemento").text();
        var imagenSrc = $(e.target).find("img").attr("src");
        var texto = $(e.target).find(".texto-elemento").text();

        // Llenar el template de información con la información del elemento clicado
        $("#tittle-card").text(titulo);
        $("#img-card").attr("src", imagenSrc);
        $("#text-card").text(texto);
    })

});
