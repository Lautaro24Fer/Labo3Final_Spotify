var G_client_id = '';
var G_client_secret = '';
var token = ''; // Variable global para el token
const searchContainer = document.getElementById('searchContainer'); // Asegúrate de tener un contenedor con id "searchContainer"

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
        
        // Limpiar el contenedor antes de mostrar los nuevos resultados
        searchContainer.innerHTML = '';
        
        mostrarResultados(data, tipoSeleccionado); // Llama a la función para mostrar los resultados en la interfaz
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
      });
  } else {
    console.error('No se proporcionó un término de búsqueda válido');
  }
}
function mostrarResultados(data, tipoSeleccionado) {
  const resultados = data[tipoSeleccionado + 's'].items.slice(0, 7); // Limitar los resultados a 7 elementos

  resultados.forEach(resultado => {
    let src, name;

    if (tipoSeleccionado === 'track') {
      // Si es una canción, la imagen puede no estar en el campo "images", usa otro método
      if (resultado.album && resultado.album.images && resultado.album.images.length > 0) {
        src = resultado.album.images[0].url;
      } else {
        src = '../assets/default_image.png';
      }
    } else {
      if (resultado.images && resultado.images.length > 0) {
        src = resultado.images[0].url;
      } else {
        src = '../assets/default_image.png';
      }
    }

    if (resultado.name) {
      name = resultado.name;
    } else {
      name = 'Nombre no disponible';
    }

    generateDiv(
      resultado.href, 
      src, 
      name, 
      tipoSeleccionado
    );
  });
}

function generateDiv(href, src, name, type, imgClass = "", btn = "") {
  if (src === null) {
    src = "../assets/default_user.png";
  }

  const div = document.createElement('div');
  div.classList.add('results-container');

  const img = document.createElement('img');
  img.src = src;
  img.alt = `logo-${name}`;
  img.className = `result-img w-24 justify-center items-center ${imgClass}`;
  img.draggable = 'false';

  const nameHeader = document.createElement('h5');
  nameHeader.textContent = name;
  nameHeader.classList.add('result-name');

  const typeHeader = document.createElement('h6');
  typeHeader.textContent = type;
  typeHeader.classList.add('result-type');
  typeHeader.classList.add('text-gray-400');

  div.appendChild(img);
  div.appendChild(nameHeader);
  div.appendChild(typeHeader);

  searchContainer.appendChild(div);
}

// Obtener un nuevo token al inicio
obtenerNuevoToken();

// Renovación del token, no está clara su manipulación
setInterval(obtenerNuevoToken, 50 * 60 * 1000); // Renovar cada 50 minutos