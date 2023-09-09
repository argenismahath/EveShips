$(document).ready(function () {
    var container = document.getElementById('ships');
    // Manejar el clic en los elementos dentro de la sección de naves
    container.addEventListener('click', function (e) {

        // Obtener información específica del elemento clicado
        var titulo = $(e.target).find(".titulo-elemento").text();
        var imagenSrc = $(e.target).find("img").attr("src");
        var texto = $(e.target).find(".texto-elemento").text();

        var form = new FormData();
        form.append("name", titulo);

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://evefandon.000webhostapp.com/Php_eve/",
            "method": "POST",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
          };
        
          $.ajax(settings).done(function (response) {
            response=JSON.parse(response)
            console.log(response[0].informacion);
            $("#text-card").text(response[0].informacion);
          });

        

        // Llenar el template de información con la información del elemento clicado
        $("#tittle-card").text(titulo);
        $("#img-card").attr("src", imagenSrc);
        $("#information-card").css({ "display": "flex" });
    })

    // Oculta el modal de la informacion
    $("#information-card").click(function () {
        $("#information-card").css({ "display": "None" });
    })
});
