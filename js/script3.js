var botao = document.getElementById("button")
botao.addEventListener("click", function(){
    var min = Number(document.getElementById("valMin").value);
    var max = Number(document.getElementById("valMax").value);
    var multiplos = []
    // console.log(typeof(min))
    console.log(typeof(max))
    var div = document.getElementById("resultado")
    for (let i=min; i <= max; i++){
        if(i % 2 == 0 && i % 3 == 0){
            multiplos.push(i);
            div.innerHTML = "Os multiplos de 2 e 3 são: " + multiplos;
            // console.log(i)
            // var no = document.createElement("p");
            // var text = document.createTextNode("Multiplos de dois e tres: " + i);
            // no.appendChild(text);
            // div.appendChild(no);
            
        }
    }
})


