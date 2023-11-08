import './stylesLogin.css'

export function renderLogIn() {
    const loginHtml = document.createElement("article")

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
              
              <input type="text" id="username" placeholder="Nombre de usuario" autocomplete="off">
              
              <input type="password" id="pass" placeholder="Contraseña" autocomplete="off">
            </form>
            <button a class="boton"><strong>Iniciar sesión</strong></button>
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
}