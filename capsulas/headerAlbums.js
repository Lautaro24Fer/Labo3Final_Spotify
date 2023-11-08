
export function renderAlbumsHeader() {
  const container = document.querySelector('#headerTag')
  const containerElements = document.createElement("div")

  containerElements.innerHTML = `
  
    <section class="favouritesAlbums-logged">
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
    </a></button>
  </section>
    `

  const LF_Albums_loggedUsers_favourites = [
    {
      artist: 'Artic Monkeys',
      name: 'Favourite Worst Nightmare',
      id: '1XkGORuUX2QGOEIL4EbJKm',
      url: "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface"
    },
    {
      artist: 'Artic Monkeys',
      name: 'AM',
      id: '78bpIziExqiI9qztvNFlQu',
      url: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163"
    },
    {
      artist: 'Pescado Rabioso',
      name: 'Artaud',
      id: '5MJR9j21vjEi4ODxzhvoTA',
      url: "https://i.scdn.co/image/ab67616d0000b27350db5a166ea23d5d6c4cd387"
    },
    {
      artist: 'Almendra',
      name: 'Almendra',
      id: '23jZzJ9u5M9p03nf84zuO1',
      url: "https://i.scdn.co/image/ab67616d0000b273ccf6d7a68e129185513921e8"
    },
    {
      artist: 'Soda Stereo',
      name: 'Nada personal',
      id: '0hyq754QnaKHYpH32QnWqs',
      url: "https://i.scdn.co/image/ab67616d0000b273e28947f6ad2f100af9c1965a"
    },
    {
      artist: "Pappo's blues",
      name: "Pappo's blues, Vol. 3",
      id: '1F3hULFzB7JebCft7dcdBq',
      url: "https://i.scdn.co/image/ab67616d0000b273b0bad878d09332d8ef4bb87f"
    }
  ];

  const LF_favoritosHeaderEl = containerElements.querySelectorAll("section.favouritesAlbums-logged button")

  function mostrarFavoritosHeader() {
    LF_Albums_loggedUsers_favourites.map((element, index) => {
      const img = document.createElement("img")
      img.src = element.url
      const h5 = document.createElement("h5")
      h5.innerHTML = `${element.name}`

      const currentImg = LF_favoritosHeaderEl[index].querySelector(".imageAlbum")
      const currentTitle = LF_favoritosHeaderEl[index].querySelector(".nameAlbum")

      currentImg.appendChild(img)
      currentTitle.append(h5)

      LF_favoritosHeaderEl[index].appendChild(currentImg)
      LF_favoritosHeaderEl[index].appendChild(currentTitle)

    });
  }

  mostrarFavoritosHeader()

  container.appendChild(containerElements)


}


