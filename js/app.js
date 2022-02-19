import * as UI  from "./interfaz.js";
import API from "./api.js"


UI.formularioBuscar.addEventListener("submit" , buscarCancion );


function buscarCancion(e){
    e.preventDefault()
    
    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;

    if(artista === "" || cancion === ""){
        mostrarError("Error.... Todos los campos son oblgatorios");
        return;
    }

    // Consultar a nuestra Api
    const busqueda = new API(artista , cancion);
    busqueda.consultarAPI();

}

export function mostrarError(mensaje){
    const error = document.querySelector(".error");

    if(!error){
        const div = document.createElement("div");

        div.textContent = mensaje;
        div.classList.add("error");
    
        UI.divBuscar.appendChild(div);

        setTimeout(()=>{
            div.remove()
        },3000)
    
    }
}
