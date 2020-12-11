function validar(){
    var error=false;
    var mensajesError="";
    /*Logica de validacion*/
    if(document.getElementById("nombreyapellido").value==''){
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacío.</p>";
    }
    else if(!(/^[a-z-A-Z]+$/.test(document.getElementById("nombreyapellido").value))){
        error=true;
        mensajesError+="<p>el campo nombre solo acepta letras.</p>";
    }

    if(document.getElementById("DNI").value.length==0){
        error=true;
        mensajesError+="<p>El campo DNI no puede estar vacío.</p>";
    }
    else if(!(/^[0-9]{8}$/.test(document.getElementById("DNI").value))){
        error=true;
        mensajesError+="<p>el DNI no es correcto.</p>";
    }


    if(document.getElementById("telefono").value==0){
        error=true;
        mensajesError+="<p>El campo telefono no puede estar vacío.</p>";
    }
    else if(!(/^[0-9]{4}-[0-9]{4}$/.test(document.getElementById("telefono").value)) ) {
        error=true;
        mensajesError+="<p>El telefono solo acepta numeros.</p>";
    }

    /*sintomas*/
    var cantidad=0; //cantidad de sintomas positivos

    var fiebre = document.getElementsByName("fiebre");
    var seleccionado=false;
    for(i in fiebre){
        if(fiebre[i].checked){
            seleccionado=true;
            if(fiebre[i].value=="si"){
                 cantidad++;
            }
        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Es obligatorio que indiques si tienes o no fiebre.</p>";
    }
    

    
    var cabeza = document.getElementsByName("cabeza");
    var seleccionado1=false;
    for(i in cabeza){
        if(cabeza[i].checked){
            seleccionado1=true;
            if(cabeza[i].value=="si"){
                cantidad++;
            }
        }

    }
    if(!seleccionado1){
        error=true;
        mensajesError+="<p>Es obligatorio que indiques si tienes o no dolor de cabeza.</p>";
    }
    

    var Tos = document.getElementsByName("Tos");
    var seleccionado2=false;
    for(i in Tos){
        if(Tos[i].checked){
            seleccionado2=true;
            if(Tos[i].value=="si"){
                cantidad++;
            }
        }
    }
    if(!seleccionado2){
        error=true;
        mensajesError+="<p>Es obligatorio que indiques si tienes o no Tos.</p>";
    }
    

    var garganta = document.getElementsByName("garganta");
    var seleccionado3=false;
    for(i in garganta){
        if(garganta[i].checked){
            seleccionado3=true;
            if(garganta[i].value=="si"){
                cantidad++;
            }
        }
    }
    if(!seleccionado3){
        error=true;
        mensajesError+="<p>Es obligatorio que indiques si tienes o no dolor de garganta.</p>";
    }
    

    var respirar = document.getElementsByName("respirar");
    var seleccionado4=false;
    for(i in respirar){
        if(respirar[i].checked){
            seleccionado4=true;
            if(respirar[i].value=="si"){
                cantidad++;
            }
        }
    }
    if(!seleccionado4){
        error=true;
        mensajesError+="<p>Es obligatorio que indiques si tienes o no dificultad para respirar.</p>";
    }
    

    if(error){
        /*mostrar los mensajes de error*/
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;   
    }else{
        document.getElementById("mensaje").innerHTML="<p>El formulario fue completado correctamente. <br>Cantidad de síntomas de COVID-19 positivos: </p>" + cantidad;
        console.log(cantidad);
        return false;
    }
}

