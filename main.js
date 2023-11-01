//credenciales para poder usar la API y los token
var G_client_id = 'bc16d65feba34c608d8450e9d764d834';
var G_client_secret = 'e3192148ff3e4499b1d11b79371c43df';
var token = ''; // Variable global para el token

//Renovacion para el uso de los token y su renovecion automaticamente
function obtenerNuevoToken() {
  var authOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(G_client_id + ':' + G_client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  };

  fetch('https://accounts.spotify.com/api/token', authOptions)
    .then(response => response.json())
    .then(data => {
      token = data.access_token;
      console.log('Nuevo token de acceso:', token);
    })
    .catch(error => console.error('Error al obtener un nuevo token:', error));
}

document.getElementById('buscarButton').addEventListener('click', function() {
  buscarArtistasOAlbumes();
});

function buscarArtistasOAlbumes() {
  const barraBusqueda = document.getElementById('barraBusqueda');
  const busqueda = barraBusqueda.value.trim();

  if (busqueda) {
    fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=artist`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resultados de la búsqueda:', data);
        mostrarResultados(data.artists.items);
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
      });
  } else {
    console.error('No se proporcionó un término de búsqueda válido');
  }
}

function mostrarResultados(artistas) {
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = ''; // Limpia los resultados anteriores

  if (artistas.length > 0) {
    const primerArtista = artistas[0];
    
    const artistaDiv = document.createElement('div');
    artistaDiv.classList.add('artista');

    const nombre = document.createElement('h3');
    nombre.textContent = primerArtista.name;

    const imagen = document.createElement('img');
    if (primerArtista.images.length > 0) {
      imagen.src = primerArtista.images[0].url;
      imagen.alt = `Imagen de ${primerArtista.name}`;
    } else {
      imagen.src = 'url de imagen por defecto o aviso de ausencia';
      imagen.alt = `Imagen no disponible para ${primerArtista.name}`;
    }

    artistaDiv.appendChild(nombre);
    artistaDiv.appendChild(imagen);

    resultadosDiv.appendChild(artistaDiv);
  } else {
    resultadosDiv.innerHTML = '<p>No se encontraron artistas</p>'; // Manejar el caso en el que no se encuentren artistas
  }
}
// Obtener un nuevo token al inicio
obtenerNuevoToken();

// Renovar el token cada cierto tiempo (por ejemplo, cada 50 minutos)
setInterval(obtenerNuevoToken, 50 * 60 * 1000); // Renovar cada 50 minutos