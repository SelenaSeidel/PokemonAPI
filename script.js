const url ="(https://pokeapi.co/api/v2/pokedex/2/ "
let listado
// Función para mostrar la lista de productos
function AgregarOpciones() {
    var opcionesSelect=""
    opcionesSelect +=`<option value="${}"> ${} </option>`
    document.getElementById("").innerHTML=opcionesSelect
}

// Función para hacer el fetch
let getJSONData = function(url){
    let result = {};

    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
       
        return result;
    });
}

document.addEventListener("DOMContentLoaded", function(){
    const select=document.getElementById("")
    
    getJSONData(url).then(function(resultObj) {
     if (resultObj.status === "ok") {
         listado = resultObj.data;
     }
    });
      
    select.addEventListener("click", () => {
        AgregarOpciones();  
    });

})