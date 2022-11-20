//! Selecionando Elementos necessários --------------------------------------

const papel = document.querySelector('.paper_container');
const pedra = document.querySelector('.rock_container');
const tesoura = document.querySelector('.scissor_container');
const containerPrincipal = document.querySelector('.options_container');

//!Variáveis ----------------------------------------------------------------

const possibilidades = ['pedra', 'papel', 'tesoura'];
// const arrImages = [
//   `./images/icon-paper.svg`,
//   `./images/icon-rock.svg`,
//   `./images/icon-scissors.svg`,
// ];

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
papel.addEventListener('click', () => {
  escolhaJogador = 'papel';
  let escolhaCasa = giraDado();
  console.log(escolhaCasa, typeof escolhaCasa);
  escolhas(escolhaCasa);
});
