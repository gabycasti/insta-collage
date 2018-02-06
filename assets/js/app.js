$( document ).ready(function(){
    
    $("#sesion").click(function() {
     let usuario = $("#usuario").val();
     let datos = obtener_localstorage();
     let name = $("#usuario").val();
     console.log(name);
     let pasword = $("#clave").val();
     console.log(pasword);
     console.log(datos.clave);
     if (name == datos.usuario && pasword == datos.clave){

        document.location.replace('collage.html')
     }else if(usuario == ""){
       $("#mensaje_usuario").fadeIn();
       return false;
     }else{
        $('#mensaje_usuario').fadeOut();
         return false;
     }else if(clave == ""){
       $("#mensaje_clave").fadeIn();
       return false;
     }else{
        $('#mensaje_clave').fadeOut();
         return false;
     }
       
    })


});


guardar_localstorage();


function obtener_localstorage(){

    if(localStorage.getItem("nombre")){
    //let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    return persona;
    }else
    console.log("no hay entradas")
};




function guardar_localstorage(){
    let persona = {
        usuario: "gabycasti",
        clave: "4567"
    }
    //localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
}


