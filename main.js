var G_client_id = 'bc16d65feba34c608d8450e9d764d834';
var G_client_secret = 'e3192148ff3e4499b1d11b79371c43df';
var token = ''; // Variable global para el token
const searchContainer = document.getElementById('searchContainer'); // Asegúrate de tener un contenedor con id "searchContainer"

// Función para obtener un nuevo token
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

// Evento al hacer clic en el botón de búsqueda
document.getElementById('buscarButton').addEventListener('click', function () {
  buscarDatos();
});

// Evento al hacer clic en los botones de tipo
document.getElementById('botonesTipos').addEventListener('click', function (event) {
  if (event.target.classList.contains('tipo-btn')) {
    const activeButton = document.querySelector('.tipo-btn.tipo-activo');
    activeButton.classList.remove('tipo-activo');
    event.target.classList.add('tipo-activo');
    buscarDatos(); // Llamar a buscarDatos al cambiar de tipo
  }
});

function buscarDatos() {
  const tipoSeleccionado = document.querySelector('.tipo-btn.tipo-activo').value; // Actualizar selección de botones
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
    let src, name, href;
    href = resultado.external_urls.spotify; // Obtener el enlace de Spotify

    if (tipoSeleccionado === 'track') {
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
      href,
      src,
      name,
      tipoSeleccionado
    );
  });
}

function generateDiv(href, src, name, type, imgClass = "") {
  if (src === null) {
    src = "../assets/default_user.png";
  }

  const a = document.createElement("a");
  a.href = href;

  const div = document.createElement('div');
  div.classList.add('result-card');

  const img = document.createElement('img');
  img.src = src;
  img.alt = `logo-${name}`;
  img.classList.add('result-img'); // Agregar clase result-img a la imagen
  img.draggable = 'false';

  const nameHeader = document.createElement('h5');
  nameHeader.textContent = name;
  nameHeader.classList.add('result-name'); // Agregar clase result-name al nombre

  const typeHeader = document.createElement('h6');
  typeHeader.textContent = type;
  typeHeader.classList.add('result-type'); // Agregar clase result-type al tipo

  a.target = "_blank"; // Abre el enlace en una nueva pestaña

  a.appendChild(div);
  div.appendChild(img);
  div.appendChild(nameHeader);
  div.appendChild(typeHeader);

  searchContainer.appendChild(a);
}

// Obtener un nuevo token al inicio
obtenerNuevoToken();

// Renovación del token, no está clara su manipulación
setInterval(obtenerNuevoToken, 50 * 60 * 1000); // Renovar cada 50 minutos
