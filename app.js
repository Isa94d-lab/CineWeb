/* --- Barra de busqueda --- */

import './js/barra_busqueda.js';

/* --- Carrusel --- */

import { peliculas } from './data/info.js';
import { generarTarjetas } from './js/movieCard.js';

const promesaCards = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            generarTarjetas(peliculas);
            resolve('Las peliculas han sido cargadas exitosamente');
        } catch(error) {
            reject('Peliculas NO encontradas')
        }
    }, 0o200);
});
 
promesaCards.then((message) => {
    console.log(message);
})
.catch(err => console.warn(err))