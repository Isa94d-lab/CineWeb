/* Esta lista nos permitira los nombres de las peliculas en la barra de busqueda */
const peliculas = [
    [
        1,
        {
            ID: 1,
            nombre: 'Como entrenar a tu dragon',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un joven vikingo forma una amistad inesperada con un dragón llamado Toothless, lo que cambia su visión sobre los dragones y su mundo.'
        }
    ],
    [
        2,
        {
            ID: 2,
            nombre: 'One piece FILM RED',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Una nueva película en el universo de One Piece, centrada en un personaje misterioso que trae un nuevo reto para Luffy y su tripulación.'
        }
    ],
    [
        3,
        {
            ID: 3,
            nombre: 'Deadpool',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un antihéroe sarcástico y mortal, Deadpool, busca venganza mientras navega por su nueva vida tras ser sometido a un experimento que lo deja con habilidades curativas.'
        }
    ],
    [
        4,
        {
            ID: 4,
            nombre: 'SpiderMan across spiderverse',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Miles Morales se une a otros Spider-Man de diferentes dimensiones para enfrentarse a una nueva amenaza que pone en peligro el multiverso.'
        }
    ],
    [
        5,
        {
            ID: 5,
            nombre: 'El padrino',
            img: 'ruta-a-imagen.jpg',
            resumen: 'La historia de la familia Corleone, una de las familias más poderosas de la mafia, y la lucha por el poder dentro del imperio criminal.'
        }
    ],
    [
        6,
        {
            ID: 6,
            nombre: 'Jurassic Park',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un parque temático con dinosaurios clonados se convierte en un escenario de caos y supervivencia cuando las criaturas escapan.'
        }
    ],
    [
        7,
        {
            ID: 7,
            nombre: 'La la land',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un músico y una actriz luchan por alcanzar sus sueños en Los Ángeles mientras se enfrentan a los desafíos del amor y las ambiciones personales.'
        }
    ],
    [
        8,
        {
            ID: 8,
            nombre: 'Jhon Wick',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un ex asesino a sueldo busca vengar la muerte de su perro, un último regalo de su difunta esposa, enfrentándose a su oscuro pasado.'
        }
    ],
    [
        9,
        {
            ID: 9,
            nombre: 'Jumanji',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un juego de mesa mágico transporta a sus jugadores a una jungla peligrosa, donde deben enfrentar desafíos para escapar.'
        }
    ],
    [
        10,
        {
            ID: 10,
            nombre: 'Rapidos y Furiosos',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un ex policía se infiltra en una banda de carreras ilegales, pero se ve atrapado en una vida de crimen y velocidad.'
        }
    ],
    [
        11,
        {
            ID: 11,
            nombre: 'Rey Leon',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un joven león llamado Simba debe asumir su destino como rey de la sabana después de la muerte de su padre, enfrentándose a las traiciones en su camino.'
        }
    ],
    [
        12,
        {
            ID: 12,
            nombre: 'Megalodon',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un equipo de científicos se enfrenta a un gigantesco tiburón prehistórico, el Megalodon, mientras intentan sobrevivir en un océano profundo y peligroso.'
        }
    ],
    [
        13,
        {
            ID: 13,
            nombre: 'La princesa y el sapo',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Una joven princesa en Nueva Orleans hace un trato con un sapo que resulta ser un príncipe encantado, mientras ambos intentan romper la maldición.'
        }
    ],
    [
        14,
        {
            ID: 14,
            nombre: 'La sustancia',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un thriller psicológico que explora las consecuencias de un experimento científico que sale mal, con resultados inesperados y peligrosos.'
        }
    ],
    [
        15,
        {
            ID: 15,
            nombre: 'The Batman',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Batman investiga una serie de crímenes en Gotham City mientras se enfrenta a un misterioso villano y profundiza en su lucha interna.'
        }
    ],
    [
        16,
        {
            ID: 16,
            nombre: 'One piece FILM GOLD',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Luffy y su tripulación llegan a una ciudad flotante, donde se enfrentan a un empresario corrupto que controla un imperio de entretenimiento y riqueza.'
        }
    ],
    [
        17,
        {
            ID: 17,
            nombre: 'Piratas del Caribe',
            img: 'ruta-a-imagen.jpg',
            resumen: 'El capitán Jack Sparrow busca recuperar su barco perdido mientras se enfrenta a otros piratas y criaturas sobrenaturales en el mar.'
        }
    ],
    [
        18,
        {
            ID: 18,
            nombre: 'La mama de la mama',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Una comedia familiar que sigue las aventuras de una mujer que se enfrenta a los desafíos de su vida diaria mientras maneja a su excéntrica madre.'
        }
    ],
    [
        19,
        {
            ID: 19,
            nombre: 'El menú',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Un grupo de personas asisten a una cena exclusiva preparada por un chef famoso, pero lo que parece una experiencia gourmet se convierte en una pesadilla.'
        }
    ],
    [
        20,
        {
            ID: 20,
            nombre: 'Lol que mal',
            img: 'ruta-a-imagen.jpg',
            resumen: 'Una película de comedia sobre un grupo de jóvenes que navegan por las dificultades de la vida moderna, enfrentando situaciones inesperadas y ridículas.'
        }
    ]
];

const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

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
                resultBox.appendChild(movieItem);  // Agregar cada resultado al contenedor
            });
        } else {
            resultBox.textContent = "No results found";  // Mensaje si no hay resultados
        }
    }
}); // Aquí cierra el addEventListener