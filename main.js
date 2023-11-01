var G_client_id = 'bc16d65feba34c608d8450e9d764d834';
var G_client_secret = 'e3192148ff3e4499b1d11b79371c43df';

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
    var token = data.access_token;
    console.log('Token de acceso:', token);

    // Agregar un controlador de eventos al botón de búsqueda
    document.getElementById('buscarButton').addEventListener('click', function() {
      buscarArtistasOAlbumes(token);
    });
  })
  .catch(error => console.error('Error:', error));

// Función para buscar artistas o álbumes en la API de Spotify
function buscarArtistasOAlbumes(token) {
  const barraBusqueda = document.getElementById('barraBusqueda');
  const busqueda = barraBusqueda.value.trim(); // Obtener el término de búsqueda del input y eliminar espacios en blanco

  if (busqueda) {
    // Realizar la solicitud a la API de Spotify solo si hay un término de búsqueda válido
    fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=artist`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` // Establecer el token de acceso en los encabezados
      }
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la búsqueda aquí
        console.log('Resultados de la búsqueda:', data);
        // Implementar cómo mostrar los resultados en tu interfaz
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
        // Manejar los errores de la solicitud
      });
  } else {
    console.error('No se proporcionó un término de búsqueda válido');
  }
}
