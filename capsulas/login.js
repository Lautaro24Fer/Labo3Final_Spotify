import './stylesLogin.css'
import { renderBiblioUnlogged } from './biblioUnlogged'
import { renderAlbumsHeader } from './headerAlbums'
import { renderBiblioLogged } from './biblioLogged'


const { VITE_CORREO_USUARIO: correo,
  VITE_PW_USUARIO: password } = import.meta.env


export function renderLogIn() {
  const loginHtml = document.createElement("article")

  loginHtml.classList.add("contenedor-login")

  loginHtml.innerHTML = `
    <article class="userLogin">
      <section class="nav">
        <h1 class="name">SpotiHub</h1>
      </section>
      <main class="mainContent">
        <header class="cont-caja">
          <section class="caja">
            <h1 class="titulo">Inicia sesión en SpotiHub</h1>
            <form class="login">
              
              <input type="text" id="usernameInput" placeholder="Nombre de usuario" autocomplete="off">
              
              <input type="password" id="passInput" placeholder="Contraseña" autocomplete="off">
            </form>
            <button a class="boton" id="iniciarSesion"><strong>Iniciar sesión</strong></button>
            <button a class="boton" id="modeInvited"><strong>Modo Invitado</strong></button>
            <p><a class="a2" href="#">Te has olvidado la contraseña?</a></p>
            <hr>
            <footer class="footer">
              <h4>No tenes una cuenta? <a href="#" class="register">Registrate</a></h4>
            </footer>
            <p class="terminos">Esta página aplica los Términos del servicio y la Política de privacidad de Google.</p>
          </section>
        </header>
      </main>
    </article>
    `
  const punteroOfMain = document.querySelector("#loginContainer")
  punteroOfMain.appendChild(loginHtml)

  const btnInvited = loginHtml.querySelector("#modeInvited")

  const iniciarSesion = loginHtml.querySelector("#iniciarSesion")

  btnInvited.addEventListener("click", () => {
    loginHtml.innerHTML = ''
    renderBiblioUnlogged()
  });

  iniciarSesion.addEventListener("click", () => {
    const correoInput = loginHtml.querySelector("#usernameInput")
    const passwordInput = loginHtml.querySelector("#passInput")

    if (correoInput.value === `${correo}` && passwordInput.value === `${password}`) {
      loginHtml.innerHTML = ''
      renderAlbumsHeader()
      renderBiblioLogged()
    }
  });

}