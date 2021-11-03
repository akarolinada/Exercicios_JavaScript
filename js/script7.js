function tipoTriangulo() {

    var ladoA = Number(document.getElementById("ladoA").value);
    var ladoB = Number(document.getElementById("ladoB").value);
    var ladoC = Number(document.getElementById("ladoC").value);

    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {

        if (ladoA === ladoB && ladoB === ladoC) {
            document.getElementById("resposta").innerText = "equilatero"
        } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
            document.getElementById("resposta").innerText = "escaleno";
        } else {
            document.getElementById("resposta").innerText = "isosceles"
        }
        

    }else{
        document.getElementById("resposta").innerText = "Isso não é um triângulo."
    }
}