function mudarTexto() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerHTML =
    "Quero, em breve, estar trabalhando em uma empresa de tecnologia e me tornar um dev sênior.";
}
mudarTexto();


function mudarCor() {
  let verdeTrybe = document.getElementsByClassName("main-content")[0];
  verdeTrybe.style.background = "rgb(76,164,109)";
}
mudarCor();


function mudarCorparaBranco() {
  let corVermelha = document.getElementsByClassName("center-content")[0];
  corVermelha.style.background = "white";
}
mudarCorparaBranco();


function corrigindoTitulo() {
  let titulo = document.getElementsByTagName("h1")[0];
  titulo.innerHTML = "Exercício 5.1 - JavaScript";
}
corrigindoTitulo();


function paragrafoComTodasAsLetrasMaiusculas() {
  let paragrafo = document.getElementsByTagName("p")[0];
  paragrafo.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragrafoComTodasAsLetrasMaiusculas();


function exibirConteudoParagrafo() {
  let paragrafos = document.getElementsByTagName("p");
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragrafos[index].innerHTML);
  }
}
exibirConteudoParagrafo();
