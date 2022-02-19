import * as UI from "./interfaz.js"
import {mostrarError} from "./app.js"


class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url =  `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                const {lyrics} = resultado;

                if(lyrics){
                    UI.divResultado.innerHTML = `
                    <h2>Letra de la cancion: ${this.cancion} de ${this.artista}</h2>
                    ${lyrics}
                `;
                }else{
                    mostrarError("La cancion no se pudo encontrar pruebe con otra busqueda")
                }


            })

        
    }
}

export default API;