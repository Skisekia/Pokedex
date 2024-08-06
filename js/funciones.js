// Exporta la función $, que es un atajo para document.querySelector
export const $ = qs => document.querySelector(qs);

// Función para mostrar una alerta
export const mostrarAlerta = mensaje => {
    const alerta = $('.alerta');
    alerta.innerHTML = `
        <div class="alert alert-danger mt-2 text-center" role="alert">
            <strong>${mensaje}</strong>
        </div>
    `;
    setTimeout(() => {
        alerta.innerHTML = ''; 
    }, 2000);
}

// Función que muestra información sobre el Pokémon
export const mostraInfo = ({sprites: {front_default}, name, types, weight, height, id}) => { 
    const info = $('.info');
    const div = document.createElement('div');

    // Añade la clase 'pokemon-info' al div para aplicar estilos específicos
    div.classList.add('pokemon-info');
    div.innerHTML = `
        <div class="pokemon-image w-25 my-2">
            <img src="${front_default}" style="width: 100%;"></img>
        </div>
        <div class="pokemon-details">
            <h6 class="text-warning">Nombre: </h6><h5 class="text-white text-uppercase">${name}</h5>
            <h6 class="text-warning">ID: </h6><h5 class="text-white">${id}</h5>
            <h6 class="text-warning">Peso: </h6><h5 class="text-white">${weight / 10} kg</h5> <!-- Peso en kilogramos -->
            <h6 class="text-warning">Altura: </h6><h5 class="text-white">${height / 10} m</h5> <!-- Altura en metros -->
            <h6 class="text-warning">Tipo: </h6>
            <ul class="pokemon-types">
                ${types.map(({ type: { name } }) => `<li class="text-info"><h5 class="text-white text-uppercase">${name}</h5></li>`).join('')}
            </ul>
        </div>
    `;

    // Añade el div con toda la información del Pokémon al contenedor info
    info.appendChild(div);
}

