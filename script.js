//! Selecionando Elementos necessários --------------------------------------

const optionsContainer = document.querySelector('.options_container');
const escolhaCards = document.querySelectorAll('.cards');
let playerContainer = document.querySelector('.player_container');
let houseContainer = document.querySelector('.house_container');
const resultContainer = document.querySelector('.result_container');
//Links selection
const playAgain = document.querySelector('.jogar-novamente');
const rulesLink = document.querySelector('.rules_link');

//crowSelection
// const rightCrow = document.querySelector('.crow-right');
// const leftCrow = document.querySelector('.crow-left');

//!Variáveis ------------------------------------------------------------------

const possibilidades = ['paper', 'rock', 'scissor'];

//!Funções --------------------------------------------------------------------

//Função para ver quem ganhou a disputa e fazer as alterações de acordo

function crowAdd(vencedor) {
  console.log(vencedor);
  const coroaDireita = document.querySelector('.crow-right');
  const coroaEsquerda = document.querySelector('.crow-left');
  const message = document.querySelector('.mensagem');

  //Comparando parâmetro para saber quem ganhou e alterando a mensagem de resultado

  if (vencedor == 'jogador') {
    console.log('jogador');
    message.textContent = 'VOCÊ GANHOU !';
  } else if (vencedor == 'robo') {
    console.log('robo');
    message.textContent = 'O ROBO GANHOU !';
  } else if (vencedor == 'empate') {
    message.textContent = 'EMPATE !';
    console.log('empate');
  }
}

function escolhas(escolhaCasa, escolhaJogador) {
  let playerContainer = document.querySelector('.player_container');
  let houseContainer = document.querySelector('.house_container');

  playerContainer.classList.add(`${escolhaJogador}_container`);
  houseContainer.classList.add(`${escolhaCasa}_container`);
}

//Função que irá ocultar a tela com as opções e irá mostrar apenas
function trocaTela() {
  optionsContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
}

//Função que esconde o link para as regras e mostra o jogar novamente
function changeLink() {
  playAgain.style.display = 'block';
}

//Função que irá voltar a tela para um estado inicial, para que seja possível jogar novamente.

function estadoInicial() {
  optionsContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  playAgain.style.display = 'none';
  rulesLink.style.display = 'block';
  resultContainer.innerHTML = ` <div class="sides">
  <div class="left-side">
    <img
      class="crow-left"
      src="./images/crown.png"
      alt="crow icon"
    />
    <div class="player_container"></div>
    <h2>Você</h2>
  </div>
  <div class="right-side">
    <img
      class="crow-right"
      src="./images/crown.png"
      alt="crow icon"
    />
    <div class="house_container"></div>
    <h2>Robo</h2>
  </div>
</div>
<div class="result-message">
  <h3 class ='mensagem'></h3>
</div>`;
}

/* function checarVencendor(escolhaCasa, escolhaJogador) {
  escolhaCasa == escolhaJogador
    ? console.log('empate')
    : escolhaCasa < escolhaJogador
    ? console.log('ai sim')
    : '';
} */

//Função que recebe a escolha do jogador e do computador, e então encontra o vencedor baseado nessas escolhas

function checarVencedor(escolhaJogador, escolhaCasa) {
  console.log(escolhaJogador, escolhaCasa);
  if (escolhaJogador == escolhaCasa) {
    console.log('Empate!');
    crowAdd('empate');
  } else if (escolhaJogador == 'paper' && escolhaCasa == 'rock') {
    crowAdd('jogador');
  } else if (escolhaJogador == 'paper' && escolhaCasa == 'scissor') {
    crowAdd('robo');
    console.log('O robo venceu!');
  } else if (escolhaJogador == 'rock' && escolhaCasa == 'paper') {
    crowAdd('robo');
    console.log('O robo venceu!');
  } else if (escolhaJogador == 'rock' && escolhaCasa == 'scissor') {
    crowAdd('jogador');
    console.log('você venceu!');
  } else if (escolhaJogador == 'scissor' && escolhaCasa == 'rock') {
    crowAdd('robo');
    console.log('O robo venceu!');
  } else if (escolhaJogador == 'scissor' && escolhaCasa == 'paper') {
    crowAdd('jogador');
    console.log('Você venceu!');
  }
}

//! Event handlers ----------------------------------------------------------

escolhaCards.forEach((cards, index) => {
  cards.addEventListener('click', () => {
    escolhaJogador = possibilidades[index];
    let escolhaCasa = possibilidades[Math.floor(Math.random() * (3 - 0) + 0)];
    console.log(`Casa: ${escolhaCasa}
    Jogador: ${escolhaJogador}`);
    trocaTela();
    escolhas(escolhaCasa, escolhaJogador);
    changeLink();
    console.log(typeof escolhaCasa, escolhaCasa);
    console.log(typeof escolhaJogador, escolhaJogador);
    checarVencedor(escolhaJogador, escolhaCasa);
  });
});

playAgain.addEventListener('click', () => {
  estadoInicial();
});
