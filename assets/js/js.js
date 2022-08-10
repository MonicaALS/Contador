// 1. Declarar nuestro contador en 0 

var valorContador = 0; //Iniciamos nuestra variable en 0 

function incrementar(){
    valorContador++; //Incrementar de 1 en 1 
    document.getElementById("contador").innerHTML= valorContador; 
}

function decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML= valorContador;
} 

function resetear(){
    valorContador= 0;
    document.getElementById("contador").innerHTML= valorContador;
}