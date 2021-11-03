// function calcular() {
//     var start = performance.now();
//     var numero = Number(document.getElementById('numero').value)
//     let factorial = 1
//     if (numero == 0 || numero == 1) {
//         document.getElementById("resposta").innerText = "O fatorial de " + numero + "é: " + factorial;
//         return factorial;
//     } else {
//         for (var i = numero; i >= 1; i--) {
//             console.log(i)
//             factorial = factorial * i;
//             console.log(factorial);
//         }
//         var end = performance.now();
//         time = end - start;

//         document.getElementById("resposta").innerText = "O factorial de " + numero + " é: " + factorial + " o tempo gasto para calcular foi: " + time;
//     }
// }

var botao = document.getElementById("botao");
botao.addEventListener("click", function () {
    let num = Number(document.getElementById("numero").value);
    var fatorial = 1;
    let start = window.performance.now();
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
        console.log(fatorial)
    }
    let end = window.performance.now();
    let dur = end - start;

    document.getElementById("resposta").innerText = num + "! =" + fatorial + " (" + dur.toFixed(2) + "milisegundos)";
})


    



