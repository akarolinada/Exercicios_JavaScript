// exercicio 1

var input = document.querySelectorAll("input");

input.forEach(element => { element.addEventListener("focus", (e) => {
    e.target.style.backgroundColor = "green";
})
element.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "red";
});
});






