const listaDiscosEl = document.querySelectorAll(".discoElement .img")




async function getData(){
    
    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv&limit=5';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40f07326b6msh39606ec9e90292ap16b27ajsn224f8e74083b',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    const {albums} = result
    console.log(albums[0])



    return (albums[0])
	// return result.albums[0]
} catch (error) {
	console.error(error);

}

}


function cargarDisco(){
    const data = getData()

    alert(data)

    // listaDiscosEl.forEach(disco => {
    //     const img = document.createElement("img")
    //     img.alt = data.id
    //     disco.appendChild(img)
    // });
}

cargarDisco()

