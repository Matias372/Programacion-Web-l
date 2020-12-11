

function cvalidar(){
    var error=false;
    var mensajesError="";
    /*Logica de validacion*/
    if(document.getElementById("nombreyapellido").value==''){
        error=true;
        mensajesError+="<p>El campo nombre y apellido no puede estar vacío.</p>";
    }

    /* no se porque pero de la forma que lo hiso la profesora no me funciono, pero use los comandos de la pagina que ofrece en "expresiones-regulares" de la clase 8 y funciono*/
    //valor = document.getElementById("Telefono").value;
   

    //valor = document.getElementById("Email").value;
    if( !(/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/.test(document.getElementById("Email").value)) ) {
        error=true;
        mensajesError+="<p>Tiene que ser un email valido.</p>";
    }

    if(document.getElementById("Telefono").value==0){
        error=true;
        mensajesError+="<p>El campo telefono no puede estar vacío.</p>";
    }
    else if(!(/^[0-9]{4}-[0-9]{4}$/.test(document.getElementById("Telefono").value)) ) {
        error=true;
        mensajesError+="<p>El telefono solo acepta numeros.</p>";
    }

    if(error){
        /*mostrar los mensajes de error*/
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        document.getElementById("mensaje").innerHTML="El mensaje fue enviado.";
        return false;
    }
}

function limite(maximo){
    var elemento = document.getElementById("Mensaje");
    if(elemento.value.length >= maximo ) {
        return false;
    }
    
    else {
        document.getElementById("CantidadL").innerHTML= maximo - (elemento.value.length+1);
        return true;
    }
}