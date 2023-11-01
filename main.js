


var G_client_id = 'CLIENT_ID';
var G_client_secret = 'CLIENT_SECRET';

var authOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + btoa (G_client_id + ':' + G_client_secret),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
};

fetch('https://accounts.spotify.com/api/token', authOptions)
  .then(response => response.json())
  .then(data => {
    var token = data.access_token;
    console.log(token);
  })
  .catch(error => console.error('Error:', error));


// Agrega un controlador de eventos al botón de búsqueda
document.getElementById('buscarButton').addEventListener('click', function() {
  G_buscarArtistasOAlbumes();
});

// Función para buscar artistas o álbumes en la API de Spotify
function G_buscarArtistasOAlbumes() {
  const barraBusqueda = document.getElementById('barraBusqueda');
  const busqueda = barraBusqueda.value; // Obtén el término de búsqueda del input

  const token = 'BQDeDnLULTSQpk433YJ2xjH0DhVhjIQO1DWbjuQ3U5vLT3XSbVGy9gsfv-WEJgulpmSEEV90sIK-rM_0lc4KKrfqhD1OPPHd1iYHv3H4NdBovsmXLjc'; // Reemplaza con tu propio token de acceso

  // Realiza la solicitud a la API de Spotify utilizando el término de búsqueda
  fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=artist`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Establece el token de acceso en los encabezados
    }
  })
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta de la búsqueda aquí
      console.log('Resultados de la búsqueda:', data);
      // Implementa cómo deseas mostrar los resultados en tu interfaz
    })
    .catch(error => {
      console.error('Error al realizar la búsqueda:', error);
      // Maneja los errores de la solicitud
    });
}