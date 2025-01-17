/* --- IMportamos la barra de busqueda --- */

import './js/barra_busqueda.js';

/* --- Importamos la informacion necesaria para el carrusel --- */

/* Importar la informacion de peliculas */
import { peliculas } from './data/info.js';
/* Importamos la funcion para mostrar carpetas */
import { generarTarjetas } from './js/movieCard.js';

/* Creamos una promesa para cargar la informacion necesaria */
const promesaCards = new Promise((resolve, reject) => {
    /* El tiempo que se demorara en ejecutar el bloque de codigo */
    setTimeout(() => {
        /* Para evitar el bloqueo de la pagina si ocurre algun error */
        try {
            generarTarjetas(peliculas);
            resolve('Las peliculas han sido cargadas exitosamente');
        } catch(error) {
            reject('Peliculas NO encontradas')
        }
    }, 0o200); // EL tiempo
});
 
/* Si la promesa se ejecuta correctamente */
promesaCards.then((message) => {
    console.log(message);
})

/* Promesa rechasada */
.catch(err => console.warn(err))