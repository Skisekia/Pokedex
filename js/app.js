import {$, mostrarAlerta, mostraInfo} from "./funciones.js";
import { obtenerPokemon } from "./API.js";

(function() {
    // Obtiene el formulario del DOM usando la función $
    const formulario = $('#formulario');
    
    // Añade un event listener al formulario para manejar el evento 'submit'
    formulario.addEventListener('submit', validarForm);

    // Función asincrónica para validar el formulario
    async function validarForm(e)
     {
        e.preventDefault(); // (recargar la página)

        // Obtiene el valor del input donde se ingresa el nombre del Pokémon
        const pokemon = $('#pokemonInput').value;
        
        // Verifica si el campo de entrada está vacío
        if (pokemon.length === 0) {
            mostrarAlerta('El campo es Obligatorio'); // Muestra una alerta si el campo está vacío
            return;
        }

        // Obtiene la información del Pokémon llamando a la función obtenerPokemon
        const infoPokemon = await obtenerPokemon(pokemon);

        // Obtiene el contenedor donde se mostrará la información del Pokémon
        const info = $('.info');
        
        // Limpia el contenido previo del contenedor de información
        info.innerHTML = '';
        
        // Muestra la información del Pokémon llamando a la función mostraInfo
        mostraInfo(infoPokemon);
    }

})();
