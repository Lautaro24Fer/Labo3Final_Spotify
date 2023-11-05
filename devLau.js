const { VITE_API_CLIENT_ID: clientId,
    VITE_API_HOST: rapidApiHost } = import.meta.env

const redirectUri = 'http://localhost:5173';


const LF_ds_imgEl = document.querySelectorAll(".discoElementSpotify .img");
const LF_ds_albumNameEl = document.querySelectorAll(".discoElementSpotify .text .nombre");
const LF_ds_artistNameEl = document.querySelectorAll(".discoElementSpotify .text .artista");

const LF_AlbumsRows = [
    {
        name: 'The War to End All Wars',
        artist: 'Sabaton',
        id: '3kB4VjXKKCY7l5xeH113Da'
    },
    {
        name: 'X 100PRE',
        artist: 'Bad Bunny',
        id: '7CjJb2mikwAWA1V6kewFBF'
    },
    {
        name: 'TU DUO FAVORITO',
        artist: 'YSY A, Bhavi',
        id: '4n6BNKtpmZOYUyfecMzzpZ'
    },
    {
        name: 'Peperina',
        artist: 'Serú Girán',
        id: '5VxrZQkdX8rZaiPgXp23xT'
    },
    {
        name: 'Clics Modernos',
        artist: 'Charly García',
        id: '3OyBf97NOuJjhEpQHY920H'
    },
    {
        name: 'Wars In A Wonderland',
        artist: 'Neoni',
        id: '2npzGBEPDOfVLN8ajYm3pZ'
    },
    {
        name: 'nadie sabe lo que va a pasar mañana',
        artist: 'Bad Bunny',
        id: '4FftCsAcXXD1nFO9RFUNFO'
    },
    {
        name: 'Corazón de papel',
        artist: 'Los Charros',
        id: '1gFTYh0ijDv3y8sjdzR4Fq'
    },
    {
        name: 'Estrella',
        artist: 'Mora',
        id: '0SoJvPHbKVhvmVJOp3kzp3'
    },
    {
        name: 'The Car',
        artist: 'Artic Monkeys',
        id: '2GROf0WKoP5Er2M9RXVNNs'
    },
    {
        name: 'OKTUBRE',
        artist: 'Patricio Rey y sus Redonditos de Ricota',
        id: '1Eh8uP6MvoseEDTWIb8qv6'
    },
    {
        name: 'Un Verano Sin Ti',
        artist: 'Bad Bunny',
        id: '3RQQmkQEvNCY4prGKE6oc5'
    },
    {
        name: 'Night Visions',
        artist: 'Imagine Dragons',
        id: '6nxDQi0FeEwccEPJeNySoS'
    },
    {
        name: 'Smite and Ignite',
        artist: 'Pentakill',
        id: '15uKqLeki8fZuLdR44Qtz8'
    },
    {
        name: '÷',
        artist: 'Ed Sheeran',
        id: '3T4tUhGYeRNVUGevb0wThu'
    },
    {
        name: 'Narrated For You',
        artist: 'Alec Benjamin',
        id: '6jKZplJpy21R5lHaYHHjmZ'
    },
    {
        name: 'Amor Escupido',
        artist: 'Pol Granch',
        id: '14WhMR0dMyEdhoNVXnvG7w'
    },
    {
        name: 'The Marshall Mathers LP',
        artist: 'Eminem',
        id: '6t7956yu5zYf5A829XRiHC'
    },
    {
        name: 'Bocanada',
        artist: 'Gustavo Cerati',
        id: '2rIdWbXPjcq8K7BCccBhhC'
    },
    {
        name: 'Toro y Pampa',
        artist: 'Almafuerte',
        id: '5owqdiYsub7Bbe47LnNy7E'
    },
];



async function getData(url) {
    // const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${clientId}`,
            'X-RapidAPI-Host': `${rapidApiHost}`
        }
    };

    await fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data));
}

function buildFeed() {
    let url = ''
    LF_AlbumsRows.map((disco, index) => {
        if (index === 0) {
            url = `https://spotify23.p.rapidapi.com/albums/?ids=${disco.id}`
        }
        else {
            url += `,${disco.id}`
        }
    })
    getData(url)
}

buildFeed()







