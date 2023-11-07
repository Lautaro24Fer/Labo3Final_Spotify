const buttonEl = document.getElementById("biblioteca-button");
const bibliotecaEl = document.getElementById("idBiblio");
let desplegado = false;

buttonEl.addEventListener('click', () => {
    if (desplegado) {
      bibliotecaEl.style.right = '-800px';
    } else {
      bibliotecaEl.style.right = '0';
    }
    desplegado = !desplegado;
  });