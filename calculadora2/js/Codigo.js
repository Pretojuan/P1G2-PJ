


//dar un nuevo valor al INPUT " resultado" en la pag HTML
function darValor(valor){
    document.getElementById("resultado").value = valor
}


// obtener el valor acutual ddel INPUT "resultado" en la pag HTML
function obtenerValor(){
    var nro = document.getElementById("resultado").value
    //alert(nro)
    return nro
}

// Adjuntar un nuevo valor a la derecha
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero){
    var actualNumero = obtenerValor()
    darValor(actualNumero + numero)
}





function Factorial(numero) {
    var numero = obtenerValor()
    var i = 1
    var resultado = 1
    while (i <= numero) {
        resultado = resultado *  1
        i = i + 1
    }
    darValor(resultado)
}

function BorrarTodo() {
    var vacio = ""
    darValor(vacio)
}
