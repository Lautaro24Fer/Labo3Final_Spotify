

export function renderBiblioLogged() {
    const punterLoggedBiblio = document.querySelector('#contBiblioMain')
    const containerElementsBiblio = document.createElement("div")

    containerElementsBiblio.innerHTML = `
<section class="favouritesAlbums-logged-column">
                <button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button><button class="elementAlbumLogged"><a href="#" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
              </section>

`

    const LF_Albums_loggedUsers_biblio = [
        {
            artist: "Eminem",
            name: "The Eminem Show",
            id: '2cWBwpqMsDJC1ZUwz813lo',
            url: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4"
        },
        {
            artist: "Eminem",
            name: "Music to be murderer By",
            id: '4otkd9As6YaxxEkIjXPiZ6',
            url: "https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c"
        },
        {
            artist: "Canserbero",
            name: "Muerte",
            id: '27xqCLyTHom0wyjtw08K12',
            url: "https://i.scdn.co/image/ab67616d0000b273fd7bf6e660e2da01813c70f7"
        },
        {
            artist: "Duko",
            name: "Antes de Ameri",
            id: '26nUVuonXEdbJTo9PeBYoR',
            url: "https://i.scdn.co/image/ab67616d0000b273f74269b6ebdb5ab2773c0be9"
        },
        {
            artist: "YSY A",
            name: "Antezana 247",
            id: '5tPDpnIZLtftbejuG6BllH',
            url: "https://i.scdn.co/image/ab67616d0000b27369445bc08d1eb43cc33965c6"
        },
        {
            artist: "Jacob Collier",
            name: "Djesse Vol.3",
            id: '33cj3kzLqVOg9zvy69Wrc8',
            url: "https://i.scdn.co/image/ab67616d0000b27334de228d223a20a8a5d1f465"
        },
        {
            artist: "Virus",
            name: "Locura",
            id: '5K3EGqntkI4To4TKtmIj2r',
            url: "https://i.scdn.co/image/ab67616d0000b273292c1ca632a1e120d1208c95"
        },
    ]

    const contElementsOfBiblio = containerElementsBiblio.querySelectorAll('section.favouritesAlbums-logged-column button')

    function mostrarFavoritosAside() {
        LF_Albums_loggedUsers_biblio.map((album, index) => {
            const img = document.createElement("img")
            img.src = album.url
            const h4 = document.createElement("h4")
            h4.innerHTML = album.name

            const imageEl = contElementsOfBiblio[index].querySelector(".imageAlbum")
            const titleEl = contElementsOfBiblio[index].querySelector(".nameAlbum")

            imageEl.appendChild(img)
            // titleEl.appendChild(h4)
            titleEl.innerHTML = `
        <div class="albumName">
        ${album.name}
        </div>
        <div class="artistName">
        ${album.artist}
        </div>
        `
        });
    }

    mostrarFavoritosAside()

    punterLoggedBiblio.appendChild(containerElementsBiblio)
}

