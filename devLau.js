const { VITE_API_KEY: key } = import.meta.env

const LF_ds_imgEl = document.querySelectorAll(".discoElementSpotify .img");
const LF_ds_albumNameEl = document.querySelectorAll(".discoElementSpotify .text .nombre");
const LF_ds_artistNameEl = document.querySelectorAll(".discoElementSpotify .text .artista");

const LF_playlistFromSpotify = [
    {
        name: 'Top 50: Argentina',
        artist: 'Spotify',
        id: '37i9dQZEVXbMMy2roB9myp'
    },
    {
        name: 'Top 50: Global',
        artist: 'Spotify',
        id: '37i9dQZEVXbMDoHDwVN2tF'
    },
    {
        name: 'Radio de Enjoy the Silence',
        artist: 'Spotify',
        id: '37i9dQZF1E8LbYURdEhV9j'
    },
    {
        name: 'Asadito',
        artist: 'Spotify',
        id: '37i9dQZF1DX1ToZ44rvfQL'
    },
    {
        name: 'Radio de Born Again',
        artist: 'Spotify',
        id: '37i9dQZF1E8HRxkpZuSEWB'
    },
]

async function getFeedData() {

    LF_playlistFromSpotify.map((disco, index) => {
        const url = `https://spotify23.p.rapidapi.com/playlist/?id=${disco.id}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${key}`,
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                crearDisco(data, index)
            })
            .catch(erros => {
                console.log(erros)
            })
    })

}

function crearDisco(data1, index) {

    const img = document.createElement("img")
    img.src = data1.images[0].url
    LF_ds_imgEl[index].appendChild(img)

    LF_ds_albumNameEl[index].innerHTML = ''

    LF_ds_albumNameEl[index].innerHTML = `
    <h3 class="nombre">
        ${data1.name}
    </h3>
    `
    LF_ds_artistNameEl[index].innerHTML = ''
    LF_ds_artistNameEl[index].innerHTML = `
    <div class="artista">
        De ${data1.owner.display_name}
    </div>
    `
}

getFeedData()



