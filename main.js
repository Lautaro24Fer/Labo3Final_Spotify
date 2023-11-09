import { renderBiblioUnlogged } from "./capsulas/biblioUnlogged";
import { renderAlbumsHeader } from "./capsulas/headerAlbums";
import { renderBiblioLogged } from "./capsulas/biblioLogged";
import { renderLogIn } from "./capsulas/login";


renderLogIn()



//cargar feed
const LF_ds_imgEl = document.querySelectorAll(".discoElementSpotify .img");
const LF_ds_albumNameEl = document.querySelectorAll(".discoElementSpotify .text .nombre");
const LF_ds_artistNameEl = document.querySelectorAll(".discoElementSpotify .text .artista");
const LF_AlbumsRows = [
    {
        name: 'The War to End All Wars',
        artist: 'Sabaton',
        id: '3kB4VjXKKCY7l5xeH113Da',
        url: "https://open.spotify.com/album/3kB4VjXKKCY7l5xeH113Da",
        src: "https://i.scdn.co/image/ab67616d0000b2734973c03327b47148881afe9c"
    },
    {
        name: 'X 100PRE',
        artist: 'Bad Bunny',
        id: '7CjJb2mikwAWA1V6kewFBF',
        url: "https://open.spotify.com/album/7CjJb2mikwAWA1V6kewFBF",
        src: "https://i.scdn.co/image/ab67616d0000b2732fbd77033247e889cb7d2ac4"
    },
    {
        name: 'TU DUO FAVORITO',
        artist: 'YSY A, Bhavi',
        id: '4n6BNKtpmZOYUyfecMzzpZ',
        url: "https://open.spotify.com/album/4n6BNKtpmZOYUyfecMzzpZ",
        src: "https://i.scdn.co/image/ab67616d0000b27396c8e24989c8ba422385e80c"
    },
    {
        name: 'Peperina',
        artist: 'Serú Girán',
        id: '5VxrZQkdX8rZaiPgXp23xT',
        url: "https://open.spotify.com/album/5VxrZQkdX8rZaiPgXp23xT",
        src: "https://i.scdn.co/image/ab67616d0000b2735e73b5c3235f1dae08842ed4"
    },
    {
        name: 'Clics Modernos',
        artist: 'Charly García',
        id: '3OyBf97NOuJjhEpQHY920H',
        url: "https://open.spotify.com/album/3OyBf97NOuJjhEpQHY920H",
        src: "https://i.scdn.co/image/ab67616d0000b273b14842a87b833bc0a9339f60"
    },
    {
        name: 'Wars In A Wonderland',
        artist: 'Neoni',
        id: '2npzGBEPDOfVLN8ajYm3pZ',
        url: "https://open.spotify.com/album/2npzGBEPDOfVLN8ajYm3pZ",
        src: "https://i.scdn.co/image/ab67616d0000b2735949fe5472d5ad4d30494569"
    },
    {
        name: 'nadie sabe lo que va a pasar mañana',
        artist: 'Bad Bunny',
        id: '4FftCsAcXXD1nFO9RFUNFO',
        url: "https://open.spotify.com/album/4FftCsAcXXD1nFO9RFUNFO",
        src: "https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec"
    },
    {
        name: 'Corazón de papel',
        artist: 'Los Charros',
        id: '1gFTYh0ijDv3y8sjdzR4Fq',
        url: "https://open.spotify.com/album/1gFTYh0ijDv3y8sjdzR4Fq",
        src: "https://i.scdn.co/image/ab67616d0000b273ac7b8e4c547645666bb5c26d"
    },
    {
        name: 'Estrella',
        artist: 'Mora',
        id: '0SoJvPHbKVhvmVJOp3kzp3',
        url: "https://open.spotify.com/album/0SoJvPHbKVhvmVJOp3kzp3",
        src: "https://i.scdn.co/image/ab67616d0000b2734cc96ed1e38fa517608c2fb0"
    },
    {
        name: 'The Car',
        artist: 'Artic Monkeys',
        id: '2GROf0WKoP5Er2M9RXVNNs',
        url: "https://open.spotify.com/album/2GROf0WKoP5Er2M9RXVNNs",
        src: "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663"
    },
    {
        name: 'OKTUBRE',
        artist: 'Patricio Rey y sus Redonditos de Ricota',
        id: '1Eh8uP6MvoseEDTWIb8qv6',
        url: "https://open.spotify.com/album/1Eh8uP6MvoseEDTWIb8qv6",
        src: "https://i.scdn.co/image/ab67616d0000b273c7c1ffa44473871a6f004786"
    },
    {
        name: 'Un Verano Sin Ti',
        artist: 'Bad Bunny',
        id: '3RQQmkQEvNCY4prGKE6oc5',
        url: "https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5",
        src: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72"
    },
    {
        name: 'Night Visions',
        artist: 'Imagine Dragons',
        id: '6nxDQi0FeEwccEPJeNySoS',
        url: "https://open.spotify.com/album/6nxDQi0FeEwccEPJeNySoS",
        src: "https://i.scdn.co/image/ab67616d0000b273407bd04707c463bbb3410737"
    },
    {
        name: 'Smite and Ignite',
        artist: 'Pentakill',
        id: '15uKqLeki8fZuLdR44Qtz8',
        url: "https://open.spotify.com/album/15uKqLeki8fZuLdR44Qtz8",
        src: "https://i.scdn.co/image/ab67616d0000b27311b83ddd0da87a35c322da13"
    },
    {
        name: '÷',
        artist: 'Ed Sheeran',
        id: '3T4tUhGYeRNVUGevb0wThu',
        url: "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu",
        src: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
        name: 'Narrated For You',
        artist: 'Alec Benjamin',
        id: '6jKZplJpy21R5lHaYHHjmZ',
        url: "https://open.spotify.com/album/6jKZplJpy21R5lHaYHHjmZ",
        src: "https://i.scdn.co/image/ab67616d0000b273459d675aa0b6f3b211357370"
    },
    {
        name: 'Amor Escupido',
        artist: 'Pol Granch',
        id: '14WhMR0dMyEdhoNVXnvG7w',
        url: "https://open.spotify.com/album/14WhMR0dMyEdhoNVXnvG7w",
        src: "https://i.scdn.co/image/ab67616d0000b2731c0167799b5c26d966c4860a"
    },
    {
        name: 'The Marshall Mathers LP',
        artist: 'Eminem',
        id: '6t7956yu5zYf5A829XRiHC',
        url: "https://open.spotify.com/album/6t7956yu5zYf5A829XRiHC",
        src: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
    },
    {
        name: 'Bocanada',
        artist: 'Gustavo Cerati',
        id: '2rIdWbXPjcq8K7BCccBhhC',
        url: "https://open.spotify.com/album/2rIdWbXPjcq8K7BCccBhhC",
        src: "https://i.scdn.co/image/ab67616d0000b2731152471596980e1bba03b6ab"
    },
    {
        name: 'Toro y Pampa',
        artist: 'Almafuerte',
        id: '5owqdiYsub7Bbe47LnNy7E',
        url: "https://open.spotify.com/album/5owqdiYsub7Bbe47LnNy7E",
        src: "https://i.scdn.co/image/ab67616d0000b27368361c6b8f3672ca8cfc71ce"
    },
];

function mostrarFeed() {
    LF_AlbumsRows.map((album, index) => {
        const img = document.createElement("img")

        img.src = album.src
        LF_ds_imgEl[index].appendChild(img)

        LF_ds_albumNameEl[index].innerHTML = `
        ${album.name}
        `

        LF_ds_artistNameEl[index].innerHTML = `
        ${album.artist}
        `
    })

}

mostrarFeed()
//fin cargar feed


//Animaciones//


//animacion del boton que redirecciona a spotify
const LF_albumsArray = document.querySelectorAll(".discoElementSpotify")

LF_albumsArray.forEach(album => {
    album.addEventListener("mouseenter", (e) => {
        let btn = album.querySelector("#goToSpotify")
        btn.style.transition = "all .1s all .4s ease-in"
        btn.style.margin = "0 1em 5em 0"
        btn.style.opacity = "1"
    })
    album.addEventListener("mouseleave", (e) => {
        let btn = album.querySelector("#goToSpotify")
        btn.style.transition = "all .1s all .4s ease-in"
        btn.style.margin = "0 1em 4em 0"
        btn.style.opacity = "0"
    })
});

//hover en navbar

const LF_navBtnEl = document.querySelectorAll(".navButton")

LF_navBtnEl.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        let svg = btn.querySelector("svg")
        let text = btn.querySelector("h6")

        svg.style.transition = "all .2s ease-in"
        text.style.transition = "all .2s ease-in"
        svg.style.fill = "rgb(238, 238, 238)"
        text.style.color = "rgb(238, 238, 238)"
    });
    btn.addEventListener("mouseleave", () => {
        let svg = btn.querySelector("svg")
        let text = btn.querySelector("h6")

        svg.style.transition = "all .2s ease-in"
        text.style.transition = "all .2s ease-in"
        svg.style.fill = "rgb(91, 91, 91)"
        text.style.color = "rgb(91, 91, 91)"
    });
});

//hover en los botones de redes
const LF_mediaButtonsEl = document.querySelectorAll("article.media button")

console.log(LF_mediaButtonsEl.length)

LF_mediaButtonsEl.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        let svg = btn.querySelector("svg")

        if (btn.id === "igbtn") {
            btn.style.background = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
        }
        else if (btn.id === "xbtn") {
            btn.style.background = "black"

        }
        else if (btn.id === "fbbtn") {
            btn.style.background = "rgb(127, 127, 255)"
        }
        btn.style.height = "3.8em"
        btn.style.width = "3.8em"
        svg.style.height = "1.9em"
    })
    btn.addEventListener("mouseleave", () => {
        let svg = btn.querySelector("svg")

        btn.style.height = "3.5em"
        svg.style.height = "1.7em"
        btn.style.width = "3.5em"
        btn.style.background = "rgb(45, 45, 45)"
    })
});

//hover en la biblioteca

const biblioEl = document.querySelector("#idBiblio")

biblioEl.addEventListener("mouseenter", () => {
    let svg = biblioEl.querySelector("svg")
    let text = biblioEl.querySelector("h6")

    svg.style.fill = "rgb(238, 238, 238)"
    text.style.color = "rgb(238, 238, 238)"
})

biblioEl.addEventListener("mouseleave", () => {
    let svg = biblioEl.querySelector("svg")
    let text = biblioEl.querySelector("h6")

    svg.style.fill = "rgb(91, 91, 91)"
    text.style.color = "rgb(91, 91, 91)"
})
//Fin Animaciones//
