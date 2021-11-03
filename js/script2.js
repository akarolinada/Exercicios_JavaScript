// var getText = document.getElementById("texto")+
// getText.addEventListener("change", (e) => {
//     var num = getText.value.match(/[0-9]+/g);
//     var letra = getText.value.match(/[a-zA-Z]+/g);
//     document.getElementById("letra").innerHTML = "Letras: " + letra;
//     document.getElementById("numero").innerHTML = "Numero: " + num;
// })

var letrasNum = document.getElementById("texto");
letrasNum.addEventListener("keyup", function () {
    var valorLetrasNumeros = letrasNum.value;
    var letras = "";
    var numeros= "";
    for (i=0; i < valorLetrasNumeros.length; i++){
        if(valorLetrasNumeros[i] in ["0","1","2","3","4","5","6","7","8","9"]){
            numeros += valorLetrasNumeros[i]
        } else if (valorLetrasNumeros[i] == "") {

        } else {
            letras += valorLetrasNumeros[i]
        }
    }
    console.log(numeros)
    console.log(letras)
    var numero = document.getElementById("numero");
    numero.innerText = numeros;
    var letra = document.getElementById("letra");
    letra.innerText = letras;
})