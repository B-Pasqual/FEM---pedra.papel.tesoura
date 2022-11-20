//! Selecionando Elementos necessários --------------------------------------

// const papel = document.querySelector('.paper_container');
// const pedra = document.querySelector('.rock_container');
// const tesoura = document.querySelector('.scissor_container');
const containerPrincipal = document.querySelector('.options_container');
const optionsContainer = document.querySelectorAll('.cards');

//!Variáveis ----------------------------------------------------------------

const possibilidades = ['paper', 'rock', 'scissor'];

//!Funções ------------------------------------------------------------------
function giraDado() {
  let aleatorio = possibilidades[Math.floor(Math.random() * (3 - 0) + 0)];
  return aleatorio;
}

function escolhas(escolhaCasa) {
  containerPrincipal.innerHTML = `
  <div class="cards ${escolhaCasa}_container flex">
          <img src="./images/icon-${escolhaCasa}.svg" alt="" class="${escolhaCasa}_icon" />
  </div>`;
}

//! Event handlers ----------------------------------------------------------

optionsContainer.forEach((cards, index) => {
  cards.addEventListener('click', () => {
    escolhaJogador = possibilidades[index];
    let escolhaCasa = giraDado();
    console.log(`Casa: ${escolhaCasa}
    Jogador: ${escolhaJogador}`);
    escolhas(escolhaCasa);
  });
});
