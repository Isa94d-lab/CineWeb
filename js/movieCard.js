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
        
            <div class="carousel-item item1"><a>
               <div class="cuadrado">
                   <div class="info-pelicula1">
                               <img class="img-movie" src="${pelicula.img}">
                               <div class="title-movie">${pelicula.nombre}</div>
                               <table>
                                   <tr>
                                       <td><div class="genre-movie">${pelicula.genero}</div></td>


                                       <!--  Prueba del Popup -->

                                       <td>
                                       <button id="openPopupBtn" class="botton-movie">See More</button>


                                       <div id="popupOverlay">
                                            <div id="popupBox">
                                            <p>This is your popup content!</p>
                                            <button class="closeBtn" id="closePopupBtn">Close</button>
                                            </div>
                                        </div>

                                        <!--  Prueba del Popup -->

                                        
                                       </td>
                                   </tr>
                               </table>
                   </div>
               </div>
               </a>
           </div>    

        `;

        // Agregar la tarjeta al contenedor
        contenedor.appendChild(tarjeta);
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupOverlay = document.getElementById('popupOverlay');

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
    });
}

