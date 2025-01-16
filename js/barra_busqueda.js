import { peliculas } from "../data/info.js";

export const resultBox = document.querySelector(".results");
export const inputBox = document.querySelector(".search-bar");

export function configurarBusqueda() {
    /* Esto nos permitirá filtrar según lo que escriba el usuario */
    inputBox.addEventListener("input", function() {
        /* Convertimos lo que escribió el usuario en minúsculas para evitar conflictos */
        const query = inputBox.value.toLowerCase();
        resultBox.innerHTML = "";  // Limpiar los resultados previos

        if (query) {
            // Filtrar solo los nombres de las películas
            const filteredList = peliculas.filter(movie => 
                movie[1].nombre.toLowerCase().includes(query)
            ); 

            if (filteredList.length > 0) {
                filteredList.forEach(movie => {
                    const movieItem = document.createElement("div");  // Crear un nuevo div para cada resultado
                    movieItem.classList.add("movie-item");
                    movieItem.textContent = movie[1].nombre;  // Mostrar solo el nombre de la película
                    
                    // Agregar un event listener para que al hacer clic, se autocomplete el input
                    movieItem.addEventListener("click", function() {
                        inputBox.value = movie[1].nombre;  // Completar la barra de búsqueda con el nombre de la película
                        resultBox.innerHTML = "";  // Limpiar los resultados después del clic
                    });

                    resultBox.appendChild(movieItem);  // Agregar cada resultado al contenedor
                });
            } else {
                resultBox.textContent = "No results found";  // Mensaje si no hay resultados
            }
        }
    }); // Aquí cierra el addEventListener
}

configurarBusqueda();