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
        
            <div class="carousel-item item1"><a href="pelicula1.html" target="">
               <div class="cuadrado">
                   <div class="info-pelicula1">
                               <img class="img-movie" src="${pelicula.img}">
                               <div class="title-movie">${pelicula.nombre}</div>
                               <table>
                                   <tr>
                                       <td><div class="description-movie">${pelicula.resumen}</div></td>


                                       <td><button id="botton" class="botton-movie">See More</button></td>
                                   </tr>
                               </table>
                   </div>
               </div>
               </a>
           </div>    

        `;

        // Agregar la tarjeta al contenedor
        contenedor.appendChild(tarjeta);
    });
}

