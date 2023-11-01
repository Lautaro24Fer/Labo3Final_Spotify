const {VITE_API_KEY: key} = import.meta.env

async function getData(){
    const url = 'https://spotify23.p.rapidapi.com/search/?q=one3E&type=multi&offset=0&limit=1&numberOfTopResults=1';
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
    console.log(data.albums.items[0].data)
    crearDisco(data.albums.items[0].data)
})
.catch(erros =>{console.log(erros)})

}

function crearDisco(data1){
    const discoEl = document.querySelector('#discoPrueba')

    if(!data1){
        return
    }
    const img = document.createElement("img")
    img.src = data1.coverArt.sources[0].url
    discoEl.appendChild(img)
}

getData()



