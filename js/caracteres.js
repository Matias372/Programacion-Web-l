
function contarCaracteres(maximo){
    var caracteresEscritos=document.getElementById("Mensaje").value.length;
    var restantes=maximo-caracteresEscritos;
    if(restantes<5){
        document.getElementById("caracteres").style.color="red";
    }else{
        document.getElementById("caracteres").style.color="black";
    }
    document.getElementById("caracteres").innerHTML=restantes;
}