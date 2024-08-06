import { mostrarAlerta } from "./funciones.js";
const url='https://pokeapi.co/api/v2/pokemon/';

export const obtenerPokemon=async pokemon=>{
    try {
         // Realiza una solicitud a la API de Pokémon con el nombre del Pokémon especificado
        const respuesta = await fetch(`${url}${pokemon}`);

         // Verifica si la respuesta no es correcta
        if (!respuesta.ok) {

            // Llama a la función mostrarAlerta para mostrar un mensaje de error
            mostrarAlerta('No registrado en la pokedex');
            return;
        }

        // Convierte la respuesta en un objeto JSON
        const buscado=await respuesta.json();

        // Retorna el objeto JSON con los datos del Pokémon
        return buscado;
    } catch (error) {

        // Si ocurre algún error durante la solicitud, muestra una alerta con el mensaje de error
        mostrarAlerta(error)
    }

}