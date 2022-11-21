//! Selecionando Elementos necessários --------------------------------------

// const papel = document.querySelector('.paper_container');
// const pedra = document.querySelector('.rock_container');
// const tesoura = document.querySelector('.scissor_container');
const optionsContainer = document.querySelector('.options_container');
const escolhaCards = document.querySelectorAll('.cards');
const playerContainer = document.querySelector('.player_container');
const houseContainer = document.querySelector('.house_container');
const resultContainer = document.querySelector('.result_container');

//!Variáveis ----------------------------------------------------------------

const possibilidades = ['paper', 'rock', 'scissor'];

//!Funções ------------------------------------------------------------------
function giraDado() {
  let aleatorio = possibilidades[Math.floor(Math.random() * (3 - 0) + 0)];
  return aleatorio;
}

function escolhas(escolhaCasa, escolhaJogador) {
  playerContainer.classList.add(`${escolhaJogador}_container`);
  houseContainer.classList.add(`${escolhaCasa}_container`);
}

function trocaTela() {
  optionsContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
}

//! Event handlers ----------------------------------------------------------

escolhaCards.forEach((cards, index) => {
  cards.addEventListener('click', () => {
    escolhaJogador = possibilidades[index];
    let escolhaCasa = giraDado();
    console.log(`Casa: ${escolhaCasa}
    Jogador: ${escolhaJogador}`);
    trocaTela();
    escolhas(escolhaCasa, escolhaJogador);
  });
});
