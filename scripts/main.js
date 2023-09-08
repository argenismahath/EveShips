function crearGaleria(idContenedor, carpetaImagenes) {
    $.ajax({
        url: carpetaImagenes,
        success: function(data) {
            $(data).find("a[href$='.png']").each(function() {
                var nombreArchivoConRuta = $(this).attr("href");
                var nombreImg = nombreArchivoConRuta.split("/").pop();

                // Crear la estructura HTML para cada imagen
                var divContenedor = $("<div></div>");
                var h2Contenedor = $("<div><h2></h2></div>");
                var imgContenedor = $("<div><img src='' alt='' srcset=''></div>");
                
                // Configurar el contenido
                h2Contenedor.find("h2").text(nombreImg.replace(".png", ""));
                imgContenedor.find("img").attr({
                    src: nombreArchivoConRuta,
                    alt: nombreImg.replace(".png", "")
                });

                // Agregar elementos al contenedor específico
                divContenedor.append(h2Contenedor);
                divContenedor.append(imgContenedor);
                $(idContenedor).append(divContenedor);
            });
        }
    });
}

// Llamar a la función para cada contenedor específico
crearGaleria("#fragatas", "/imgs/Fragatas");
crearGaleria("#cruceros", "/imgs/Cruceros");
crearGaleria("#acorazado", "/imgs/Acorazados");