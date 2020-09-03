//let name = "Danielle Granzotti";
//alert("Welcome " + name);
//alert("welcome " + name.replace("Danielle Granzotti" , "Dani"));

//let lista = ["maça", "pera", "laranja"]
//lista.push("uva") //insere um novo elemento
//lista.pop() exclui o último elemento

//console.log(lista.reverse()) apresenta o array no sentido reverso
//console.log(lista.toString()) converte de array para string
//console.log(lista.join(" - "));

/*
var = fruta {nome: "maça", cor: "Vermelha"} exemplo de dicionário 
console.log(fruta.nome);
alert(fruta.cor);
*/

//var frutas = [{nome:"uva", cor:"roxa"}, {nome:"limão", cor:"verde"}]
//console.log(frutas)
//alert(frutas[1].nome)


/*
let idade = prompt("Qual a sua idade?"); //exibe a caixa de diálogo para coletar a info em inserir na variável
if(idade < 18) {
    alert("Acesso negado")
} else {
    alert("Acesso permitido")
}
*/

/*
let count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count;
for(count = 0; count <=10; count++) {
    alert(count)
}
*/

//var d = new Date();
//alert(d) //informa a data - variações d.get.month() - d.get.minutes() - d.get.day()

/*
function clicou(){
    alert("Obrigado por clicar!");
}
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    window.open("https://github.com/Dani-Granzotti");
    //outro modo de fazer, neste caso abre na msm janela:
    window.location.href = "https://github.com/Dani-Granzotti/aula-javaScript-DIO/";
}

function trocar() {
    document.getElementById("mouseover").innerHTML = "Obrigada por seguir a instrução!"
    //alert("Trocar Texto");
}

function voltar() {
    document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!"
}

//outro modo de fazer é utilizando this

function trocar2(elemento) {
    elemento.innerHTML = "Valeu!"
}

function voltar2(elemento) {
    elemento.innerHTML = "Clique novamente"
}

function load() {
    alert("Pagina carregada!!!")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}