//Juego piedra papel o tijeras.
var jugadas; 

jugadas = parseInt (prompt("ingrese la cantidad de juegos"))

function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * 3 );
    return numero;
}

var piedra=0;
var papel=1;
var tijera=2;

var opciones = ["Piedra","Papel","Tijera"];

// Definimos el resultado de cada combinación 
var opcionPiedra = ["Empate!","Perdiste!","Ganaste!"];
var opcionPapel = ["Ganaste!","Empate!","Perdiste!"];
var opcionTijera = ["Perdiste!","Ganaste!","Empate!"];

var opcionUsuario;
var opcionPC = aleatorio(0,2);
var ganadasJugador = 0;
var ganadasPC = 0;

for (var i=0; i<jugadas; i++){

opcionUsuario = prompt("¿Qué eliges? Priedra: 0 -- Papel: 1 o Tijera: 2",);

alert("Elegiste " + opciones[opcionUsuario]);
alert("PC eligio " + opciones[opcionPC]);


if(opcionUsuario == 0)
    {
        alert(opcionPiedra[opcionPC]);
        if (opcionPiedra[opcionPC]== "Ganaste!"){
            ganadasJugador++
        }
        else if(opcionPiedra[opcionPC]== "Perdiste!"){
            ganadasPC++
        }
    }
else if(opcionUsuario == 1)
    {
        alert(opcionPapel[opcionPC]);
        if (opcionPapel[opcionPC]== "Ganaste!"){
            ganadasJugador++
        }
        else if(opcionPapel[opcionPC]== "Perdiste!"){
            ganadasPC++
        }
    }
else if(opcionUsuario == 2)
    {
        alert(opcionTijera[opcionPC]);
        if (opcionTijera[opcionPC]== "Ganaste!"){
            ganadasJugador++
        }
        else if(opcionTijera[opcionPC]== "Perdiste!"){
            ganadasPC++
        }
    }
else
    {
        alert("Opción no valida!");
    }    


}

if (ganadasJugador > ganadasPC){
    document.write (`¡¡Ganaste por ${ganadasJugador} x ${ganadasPC}!!`)
}
else if (ganadasJugador < ganadasPC){
    document.write (`PC gano ${ganadasPC} x ${ganadasJugador} :(`)
}
else (
    document.write (`Empate  ${ganadasJugador} x ${ganadasPC}    `)
)