import { peliculas } from "../data/info.js";

export function generarTarjetas(peliculas) {
    const contenedor = document.getElementById('movieCard'); // Accede al contenedor donde se colocarán las tarjetas

    // Iterar sobre el arreglo de películas
    console.log(" no bucle")

    peliculas.forEach(([, pelicula]) => {
        console.log("bucle")
        // Crear la estructura HTML de cada tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('col'); // Clase para un grid responsive

        tarjeta.innerHTML = `
        <body>
        
            <div class="carousel-item item1"><a>
               <div class="cuadrado">
                   <div class="info-pelicula1">
                               <img class="img-movie" src="${pelicula.img}">
                               <div class="title-movie">${pelicula.nombre}</div>
                               <table>
                                   <tr>
                                       <td><div class="genre-movie">Genero: ${pelicula.genero}</div></td>


                                       <!--  Prueba del Popup -->

                                       <td>
                                       <button class="openPopupBtn botton-movie">See More</button>


                                       

                                        <!--  Prueba del Popup -->

                                        
                                       </td>
                                   </tr>
                               </table>
                   </div>
               </div>
               </a>
           </div>    

        <!-- Lo coloco afuera para que se muestre fuera del contenedor -->

        <div class="popupOverlay">
        <div class="popupBox">
            <table>
                <tr>
                    <td>
                        <img class="poster" src="${pelicula.poster}">
                    </td>
                    <td class="td2">
                        <p class="title-movie-pop">${pelicula.nombre}</p><br>
                        <p class="description-movie-pop pop">Descripcion: ${pelicula.resumen}</p><br>
                        <p class="genero-movie-pop pop">Genero: ${pelicula.genero}</p><br>
                        <p class="duracion-movie-pop pop">Duracion: ${pelicula.duracion}</p><br>
                        <p class="duracion-movie-pop pop">Año de publicacion: ${pelicula.año}</p><br>
                        <p class="cast-movie-pop pop">Cast: ${pelicula.cast}</p><br> 
                    </td>
                </tr>
            </table>
            <button class="closeBtn" class="closePopupBtn">Close</button>
        </div>   
         
    </div><br>
        </body>

        `;

        // Agregar la tarjeta al contenedor
        contenedor.appendChild(tarjeta);

    // Seleccionar los elementos dentro de la tarjeta específica
    const openPopupBtn = tarjeta.querySelector('.openPopupBtn');
    const closePopupBtn = tarjeta.querySelector('.closeBtn');
    const popupOverlay = tarjeta.querySelector('.popupOverlay');

    openPopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'flex'; // Muestra el overlay
    });

    closePopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none'; // Oculta el overlay
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
}); // Cierre correcto del forEach

} // Cierre correcto de la función generarTarjetas