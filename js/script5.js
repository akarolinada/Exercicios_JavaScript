class Aluno {
    constructor() {
        this.id = 0;
        this.alunos = new Array();

    }

    criaAluno() {
        var alunos = {};
        alunos.id = this.id;
        this.id++;
        alunos.nota = parseInt(Math.random() * 101)
        this.alunos.push(alunos);
    }

    populaSala(tamSala) {
        for (let i = 0; i < tamSala; i++) {
            this.criaAluno();
        }
    }

    relatorio() {
        for (let i = 0; i < this.alunos.length; i++) {
            console.log(this.alunos[i]);
        }
    }

    gerarEstatistica() {
        var aprovados = 0;
        var reprovados = 0;
        for ( let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].nota >= 50) {
                aprovados++;
            } else {
                reprovados++;
            }
        }

        var porcentagemAprovado = parseInt((aprovados / this.alunos.length) * 100);
        var porcentagemReprovado = parseInt((reprovados / this.alunos.length) * 100);

        let tbody = document.getElementById("conteudoTabela");
        let novaLinha = tbody.insertRow();
        
        novaLinha.innerText = "Aprovados: " + aprovados + "(" + porcentagemAprovado + ")%. Reprovados: " + reprovados + "(" + porcentagemReprovado+ ")%."


        console.log("**********************")
        console.log(aprovados)
        console.log(reprovados)
        console.log(porcentagemAprovado);
        console.log(porcentagemReprovado);
    }

    listarAlunos(){
        let tbody = document.getElementById("conteudoTabela");
        tbody.innerText = "";
        this.alunos.forEach(element => {
            let novaLinha = tbody.insertRow();
            novaLinha

            let colId = novaLinha.insertCell();
            colId.classList.add("coluna1")
            let colNota = novaLinha.insertCell();
            colNota.classList.add("coluna1")
            let colPorcentagem = novaLinha.insertCell();
            colPorcentagem.classList.add("coluna1")

            colId.innerText = element.id;
            colNota.innerText = element.nota;            
            
            if(element.nota < 50) {
                colPorcentagem.innerText = "Reprovado"               
            } else {
                colPorcentagem.innerText = "Aprovado"                              
            }
        })
    }
}


var botao = document.getElementById("button");
botao.addEventListener("click", function () {
    var alunosNotas = new Aluno();
    alunosNotas.populaSala(20)
    alunosNotas.relatorio();    
    alunosNotas.listarAlunos();
    alunosNotas.gerarEstatistica();
})