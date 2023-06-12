/*Função que ao rolar aparecer a barra do navbar

--->adiciona ou remove a classe "sticky" do elemento <header> dependendo da posição de rolagem da janela.
*/
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});




/*função para abrir o menu
*/
let menu = document.querySelector('#menu-icon');/*Cria duas variaveis chamada menu  e navlist onde atribui o elemento com o ID #menu-icon e a classe .navlist */
let navlist = document.querySelector('.navlist');


menu.onclick = () => { /*Aqui é adicionado um evento de clique que quando  clidado é acionada a função  */
  menu.classList.toggle('bx-x');/*Troca o icon de nav hamburguer para o icon de fechar */
  navlist.classList.toggle('open');/*Mostrar ou ocultar a classe*/
}



window.onscroll = () => {
  menu.classList.remove('bx-x');/*Isso faz com que o icon volte ao normal ao rolar a tela*/
  navlist.classList.remove('open');/*Aqui define um evento de rolagem para sumir o navlist quando o usuario rola a tela */
}

/*Função para trocar o modo claro para o escuro*/
const sunIcon = document.getElementById("icon-sun");
const moonIcon = document.getElementById("icon-moon");

sunIcon.addEventListener("click", function () {
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline";
  document.body.classList.add("dark-mode");
});

moonIcon.addEventListener("click", function () {
  moonIcon.style.display = "none";
  sunIcon.style.display = "inline";
  document.body.classList.remove("dark-mode");
});






// Verifica se o usuário está logado com o Google
var isUserLoggedIn = false; // Defina como true se o usuário estiver logado

// Função para exibir as opções corretas do dropdown de acordo com o estado de login do usuário
function exibirOpcoesDropdown() {
  var opcaoSair = document.getElementById("btnsair");
  var opcaoLogin = document.getElementById("fLogin");

  if (isUserLoggedIn) {
    opcaoSair.style.display = "block";
    opcaoLogin.style.display = "none";
  } else {
    opcaoSair.style.display = "none";
    opcaoLogin.style.display = "block";
  }
}

// Função chamada quando o ícone do usuário é clicado
function handleIconeUsuarioClick() {
  var dropdownContent = document.getElementById("dropdown-open");
  dropdownContent.classList.toggle("show");
}

// Registra o evento de clique no ícone do usuário
var iconeUsuario = document.getElementById("User");
iconeUsuario.addEventListener("click", handleIconeUsuarioClick);

// Chama a função para exibir as opções corretas do dropdown quando a página é carregada
exibirOpcoesDropdown();
