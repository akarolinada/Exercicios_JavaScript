var botao = document.getElementById("btn")
botao.addEventListener("click", () => {
    var quantidade = Number(document.getElementById("qtd").value)
    var minimo= Number(document.getElementById("min").value)
    var maximo = Number(document.getElementById("max").value)

    var array = [];

    if(quantidade <= (maximo - minimo)){
        var i = 1;
        array.push(minimo)
        array.push(maximo)
        while(i <= quantidade-2){
            var num = Math.floor(Math.random()*(maximo-minimo+1))+minimo
            if (array.includes(num)===false){
                array.push(num);
                i++;
            }
        }
        document.getElementById("resultado").innerText= array.sort((a,b) => a-b)      

    }else{
        document.getElementById("resultado").innerText = "Leia o que foi pedido de novo!"
    }


})