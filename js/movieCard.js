import { peliculas } from "../data/info.js";

export function generarTarjetas(peliculas) {
    const contenedor = document.getElementById('movieCard'); // Contenedor de las tarjetas

    // Función para limpiar el contenedor antes de agregar nuevas tarjetas
    const limpiarContenedor = () => {
        contenedor.innerHTML = ''; // Limpia el contenedor de las tarjetas
    };

    // Función para generar las tarjetas a partir de las películas
    const mostrarPeliculas = (peliculasParaMostrar) => {
        // Limpiar el contenedor antes de agregar las tarjetas filtradas
        limpiarContenedor();

        peliculasParaMostrar.forEach(([, pelicula]) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('col'); // Clase para un grid responsive

            // Crear la estructura HTML de la tarjeta
            tarjeta.innerHTML = `
                <div class="carousel-item item1">
                    <a>
                        <div class="cuadrado">
                            <div class="info-pelicula1">
                                <img class="img-movie" src="${pelicula.img}">
                                <div class="title-movie">${pelicula.nombre}</div>
                                <table>
                                    <tr>
                                        <td><div class="genre-movie">Genero: ${pelicula.genero}</div></td>
                                        <td>
                                            <button class="openPopupBtn botton-movie">See More</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </a>
                </div>

                <!-- Popup Overlay -->
                <div class="popupOverlay">
                    <div class="popupBox">
                        <table>
                            <tr>
                                <td>
                                    <img class="poster" src="${pelicula.poster}">
                                </td>
                                <td class="td2">
                                    <p class="title-movie-pop">${pelicula.nombre}</p>
                                    <p class="description-movie-pop pop">Descripcion: ${pelicula.resumen}</p>
                                    <p class="genero-movie-pop pop">Genero: ${pelicula.genero}</p>
                                    <p class="duracion-movie-pop pop">Duracion: ${pelicula.duracion}</p>
                                    <p class="duracion-movie-pop pop">Año de publicacion: ${pelicula.año}</p>
                                    <p class="cast-movie-pop pop">Cast: ${pelicula.cast}</p>
                                </td>
                            </tr>
                        </table>
                        <button class="closeBtn">Close</button>
                    </div>
                </div>
            `;

            // Agregar la tarjeta al contenedor
            contenedor.appendChild(tarjeta);

            // Funcionalidad del popup
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
        });
    };

    // Mostrar todas las películas inicialmente
    mostrarPeliculas(peliculas);

    // Buscador
    const searchInput = document.getElementById('search-bar');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        // Filtrar las películas por nombre o género
        const peliculasFiltradas = peliculas.filter(([, pelicula]) => {
            return pelicula.nombre.toLowerCase().includes(query) || 
                   pelicula.genero.toLowerCase().includes(query);
        });

        // Mostrar las películas filtradas
        mostrarPeliculas(peliculasFiltradas);
    });
}