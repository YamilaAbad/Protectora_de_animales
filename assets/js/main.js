const listado_perros = document.getElementById('groups_cards_adopcion'),
    buscador_perros = document.getElementById('buscador-perros');

    // Al levantar la tecla en el input de buscador, se filtra el listado de nombres.
buscador_perros.addEventListener('keyup', () => {
    // Convertir el texto dentro del input a minúsculas.
    const filtro = buscador_perros.value.toLowerCase();
    // Obtener un array de las perros en el contenedor.
    const perros_sin_filtro = Array.from(listado_perros.dog);

    // Por cada perro en el filtro.
    perros_sin_filtro.forEach(perro => {
        // Convertir el nombre a minúsculas.
        const nombre = perro.textContent.toLowerCase();
        /* Si existe coincidencia entre el nombre y el texto actual 
        del input, se muestra la perro y se corta la ejecución. */
        if (nombre.includes(filtro)) {
            perro.style.display = 'block';
            return;
        }
        // Si no hay coincidencia, se oculta la perro.
        perro.style.display = 'none';
    });
});

// Solicitud GET a un archivo JSON para obtener el listado de perros.
fetch('./perros.json')
    // Se obtiene la respuesta y se transforma a JSON.
    .then((response) => response.json())
    // Se puede trabajar con la respuesta.
    .then(perros => {
        // Recorrer el listado de perros e ir agregándolo en el contenedor.
        perros.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card_adopcion');//añade una clase para estilizar la tarjeta con CSS
          
            //crear el elemento <a> para envolver la imagen
           const enlaceImage = document.createElement('a');
           enlaceImage.classList.add('btn_info_perro');
           enlaceImage.href = element.enlace;
           enlaceImage.target='_blank';

            //Agregar los elementos de la tarjeta, por ejemplo, el nombre  y la imagen
            const nombrePerro = document.createElement('h4');
            nombrePerro.classList.add('nombre_perro');
            nombrePerro.textContent = element.name; //Reemplaza "nombre" por el nombre real del atributo de json
            card.appendChild(nombrePerro);

            const imagenPerro = document.createElement('img');
            imagenPerro.classList.add('img_perro_adop');
            imagenPerro.src = element.imagen;

            
            //Agregar la imagen al enlace
            enlaceImage.appendChild(imagenPerro);

            //Agregar el enlace a la tarjeta
            card.appendChild(enlaceImage);

            //Agregar la tarjeta al contenedor
            listado_perros.appendChild(card);
            
        });
    }).catch(function () {
        // Acciones en caso de posible error.
        console.log("error");
    }).finally(function (){
        // Se ejecuta en caso de éxito o de error, puede servir por ej. para esconder un loader.
    });