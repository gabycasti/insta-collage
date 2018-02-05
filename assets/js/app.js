guardar_localstorage();

//obtener_localstorage();

function obtener_localstorage(){

    if(localStorage.getItem("nombre")){
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log(nombre);
    console.log(persona);

    }else
    console.log("no hay entradas")

}




function guardar_localstorage(){


    let persona = {
        usuario: "gabycasti",
        clave: 456789
    }

    let nombre = "pedro";

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
}


