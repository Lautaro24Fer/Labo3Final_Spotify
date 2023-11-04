var G_client_id = 'bc16d65feba34c608d8450e9d764d834';
var G_client_secret = 'e3192148ff3e4499b1d11b79371c43df';
var token = ''; // Variable global para el token

// Renovación para el uso de los tokens y su renovación automáticamente
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
  buscarDatos();
});

function buscarDatos() {
  const tipoSeleccionado = document.getElementById('seleccionTipo').value;
  const barraBusqueda = document.getElementById('barraBusqueda');
  const busqueda = barraBusqueda.value.trim();

  if (busqueda) {
    fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=${tipoSeleccionado}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resultados de la búsqueda:', data);
        // Mostrar los resultados en la interfaz o procesarlos según sea necesario
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
      });
  } else {
    console.error('No se proporcionó un término de búsqueda válido');
  }
}

// Obtener un nuevo token al inicio
obtenerNuevoToken();

// Renovar el token cada cierto tiempo (por ejemplo, cada 50 minutos)
setInterval(obtenerNuevoToken, 50 * 60 * 1000); // Renovar cada 50 minutos
