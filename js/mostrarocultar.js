//funcion para mostrar los paises.
// AFECTA A PAISES VISITADOS Y DIFICULTAD PARA RESPIRAR.
function cambiar(nombre, id1){
    //seleccionar el radio button por name
    var opciones=document.getElementsByName(nombre);
    //recorrerlo
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById(id1).style.display="inline";
        }
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById(id1).style.display="none";
        }
    }
}

//puse display=inline ya que en paises visitados se colocaba debajo el select si estaba en display=block.
//hay que revisar el sintoma de dificultad respiratoria ya que ahora se colocan uno debajo de otro...revisar css