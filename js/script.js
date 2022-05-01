let contenido = document.querySelector("#contenido"); /* para imprimir las tarjetas */

const contenidoModal = document.querySelector("#contenidoModal"); /* para imprimir el modal de cada elemento */

const favoritoContenido = document.querySelector("#favoritos"); /* para imprimir los favoritos */

let search = document.getElementById("buscar");


class Datos {
  constructor(id, nombre, imagen, color, descripcion, modal) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.color = color;
    this.descripcion = descripcion;
    this.modal = modal;
  }
}

const card1 = new Datos(1, "Celulares", "./img/imagen4.jpg","Negro, gris y azul.","Lo mejor sucede después de que anochece. Captura la imagen con las épicas actualizaciones tecnológicas de nuestra cámara de nivel profesional. El sensor grande de píxeles amplía los píxeles para traer la luz mientras que el Vidrio Super Transparente reduce el resplandor de la lente, todo para que las fotos y los videos nocturnos salgan tan claros como el día.","Un teléfono móvil o teléfono celular (abreviado como móvil o celular) es un dispositivo portátil que puede hacer o recibir llamadas a través de una portadora de radiofrecuencia, mientras el usuario se está moviendo dentro de un área de servicio telefónico.");

const card2 = new Datos(2, "Computadores", "./img/imagen5.jpg", "Negro, blanco, rosado y gris.", "Lo mejor sucede después de que anochece. Captura la imagen con las épicas actualizaciones tecnológicas de nuestra cámara de nivel profesional. El sensor grande de píxeles amplía los píxeles para traer la luz mientras que el Vidrio Super Transparente reduce el resplandor de la lente, todo para que las fotos y los videos nocturnos salgan tan claros como el día.", "La capacidad de una computadora depende de sus componentes hardware, en tanto que la diversidad de tareas radica mayormente en el software que admita ejecutar y contenga instalado.");

const card3 = new Datos(3, "Tablet", "./img/imagen6.jpg", "Negro, blanca y gris.", "Lo mejor sucede después de que anochece. Captura la imagen con las épicas actualizaciones tecnológicas de nuestra cámara de nivel profesional. El sensor grande de píxeles amplía los píxeles para traer la luz mientras que el Vidrio Super Transparente reduce el resplandor de la lente, todo para que las fotos y los videos nocturnos salgan tan claros como el día.", "Una tableta, en muchos lugares también llamada por el anglicismo tablet, es un dispositivo electrónico portátil de mayor tamaño que un teléfono inteligente o un PDA, se trata de una sola pieza que integra, una pantalla táctil (sencilla o multitáctil) que emite luz." );

const card4 = new Datos(4, "Camaras-Seguridad", "./img/imagen7.jpg", "Negro, gris y azul.", "Lo mejor sucede después de que anochece. Captura la imagen con las épicas actualizaciones tecnológicas de nuestra cámara de nivel profesional. El sensor grande de píxeles amplía los píxeles para traer la luz mientras que el Vidrio Super Transparente reduce el resplandor de la lente, todo para que las fotos y los videos nocturnos salgan tan claros como el día.", "Las cámaras de vigilancia son las que se encargan de grabar todo lo que puede ocurrir en una casa o negocio. Contar con este tipo de cámara te puede proporcionar sensación de seguridad y protección. Hoy en día, disponer de una cámara de vigilancia puede resultar ser una solución para mantenerse protegido.");

const card5 = new Datos(5, "Filmadoras", "./img/imagen8.jpg", "Negro, blanco, rosado y gris.", "Lo mejor sucede después de que anochece. Captura la imagen con las épicas actualizaciones tecnológicas de nuestra cámara de nivel profesional. El sensor grande de píxeles amplía los píxeles para traer la luz mientras que el Vidrio Super Transparente reduce el resplandor de la lente, todo para que las fotos y los videos nocturnos salgan tan claros como el día.", "La cámara de vídeo, videocámara o cámara filmadora es un dispositivo que captura imágenes convirtiéndolas en señales eléctricas, en la mayoría de los casos a señal de vídeo, también conocida como señal de televisión.");

const card6 = new Datos(6, "Camaras-Digitales", "./img/imagen9.jpg", "Negro, blanca y gris.", "Lo mejor sucede después de que anochece. Captura la imagen con las épicas actualizaciones tecnológicas de nuestra cámara de nivel profesional. El sensor grande de píxeles amplía los píxeles para traer la luz mientras que el Vidrio Super Transparente reduce el resplandor de la lente, todo para que las fotos y los videos nocturnos salgan tan claros como el día.", "Una cámara digital es una cámara fotográfica que, en vez de captar y almacenar fotografías en película química como las cámaras de película fotográfica, recurre a la fotografía digital para generar y almacenar imágenes.");


const arregloCard = new Array(card1, card2, card3, card4, card5, card6)


//Traer elementos 
/*
function traer() {
  fetch("./js/tabla.json")
    .then((resultado) => resultado.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
    .then((datos) => {
      tabla(datos);
      arreglo = datos;
    }); // VAMOS A MOSTRAR LA INFORMACIÓN
}
traer();
*/

const tabla = () => { 
  contenido.innerHTML = "";
 arregloCard.map((elemento) => {
    contenido.innerHTML += `<div class="col-12 col-sm-6 col-md-4 p-3">
            <div class="card">
                <h3 class="card__title p-3">${elemento.nombre}</h3>
                <img class="card__img  px-5" src="${elemento.imagen}" alt="Celulares">
                <div class="card-body">
                    <p class="card__text">${elemento.descripcion}</p>
                    <button type="button" class="btn btn-primary btn-sm" onclick ="agregarFavorito(${elemento.id})">Agregar Favorito</button>
                    <button type="button" class="btn btn-secondary  btn-sm" data-toggle="modal" data-target="#exampleModal" onclick="cargarModal(${elemento.id})">Descripción</button>
                </div>
            </div>
        </div>`;
  });
}
tabla();

// Filtro de busqueda

let arreglo = [];
const buscarProducto = document.getElementById("buscar");
const buscar = () => { 
  let x = buscarProducto.value;
  if (isNaN(x[x.length - 1]) || buscarProducto.value === "") {
    contenido.innerHTML = "";
    const filtrarProductos =  arregloCard.filter((producto) => {
      return producto.nombre
        .toLowerCase()
        .includes(buscarProducto.value.toLowerCase());
    });

    if (filtrarProductos.length === 0){
      setTimeout(()=>{search.value = "sin coincidencias, realice nueva busqueda..."}, 1);
      setTimeout(()=>{search.value = ""}, 5000);
      setTimeout(()=>{tabla()}, 3000);
    }

    filtrarProductos.map((elemento) => {
      contenido.innerHTML += `<div class="col-12 col-sm-6 col-md-4 p-3">
                <div class="card">
                    <h3 class="card__title p-3">${elemento.nombre}</h3>
                    <img class="card__img  px-5" src="${elemento.imagen}" alt="Celulares">
                    <div class="card-body">
                        <p class="card__text">${elemento.descripcion}</p>
                        <button type="button" class="btn btn-primary  btn-sm" onclick ="agregarFavorito(${elemento.id})">Agregar Favorito</button>
                        <button type="button" class="btn btn-secondary  btn-sm" data-toggle="modal" data-target="#exampleModal" onclick="cargarModal(${elemento.id})">Descripcion</button>
                    </div>
                </div>
            </div>`;
    });
  } else {
    alert(
      '-Estimado(a): "' +
        x +
        '" NO es un caracter alfabetico, No se aceptan números en la búsqueda...'
    );
    //buscarProducto.value = x.slice(0, -1);
    buscarProducto.value = x.replace(/[0-9,' ']/g, "");
  }
}


// -------------------------------------------------------------------
//                          MODAL Content
// -------------------------------------------------------------------
//let modalContent = document.querySelector('#contenido')
let arregloModal = [];
const cargarModal = (id) => { 
  let agregarModal =  arregloCard.find((element) => element.id === id);
  contenidoModal.innerHTML = "";
  arregloModal.push(agregarModal);

  arregloModal.forEach((element) => {
    contenidoModal.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
             <div class="modal-content text-dark">
                 <div class="modal-header">
                     <h5 class="modal-title " id="exampleModalLabel">${element.nombre}</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                 </div>
                 <div class="modal-body text-dark">${element.modal}</div>
                 <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                 </div>
             </div>
         </div>
     </div>`;
  });
}

// favorito
// Declarando el arreglo para favoritos
let favorito = [];
const agregarFavorito = (id) => { 
  let agregar =  arregloCard.find((elemento) => elemento.id === id);
  favoritoContenido.innerHTML = "";
  if(favorito.find((elemento) => elemento.id === id)){} //No agregar a favoritos card repetidas
  else {favorito.push(agregar);
    document.querySelector(".total-count").innerHTML = favorito.length; //Contador
  }

  favorito.forEach((elemento) => {
    favoritoContenido.innerHTML += `<div class="col-6">
            <div class="card m-3">
                <h3 class="card__title p-3">${elemento.nombre}</h3>
                <img class="card__img  px-5" src="${elemento.imagen}" alt="Celulares">
                <div class="card-body">
                    <p class="card__text">${elemento.color}</p>
                    <button class="btn btn-info" onclick ="quitarCard(${elemento.id})" >Quitar de Favoritos</button>
                </div>
            </div>
        </div>`;
  });
}

//Quitar todos los favoritos
const quitardeFavoritos = () => { 
  favoritoContenido.innerHTML = "";
  favorito = [];
  document.querySelector(".total-count").innerHTML = 0; //Contador
}

//Quitar por id
const quitarCard = (id) => { 
  let quitar = favorito.findIndex((elemento) => elemento.id === id);
  favoritoContenido.innerHTML = "";
  favorito.splice(quitar,1);
  document.querySelector(".total-count").innerHTML = favorito.length; //Contador

  favorito.forEach((elemento) => {
    favoritoContenido.innerHTML += `<div class="col-6">
            <div class="card m-3">
                <h3 class="card__title p-3">${elemento.nombre}</h3>
                <img class="card__img  px-5" src="${elemento.imagen}" alt="Celulares">
                <div class="card-body">
                    <p class="card__text">${elemento.color}</p>
                    <button class="btn btn-info" onclick ="quitarCard(${elemento.id})" >Quitar de Favoritos</button>
                </div>
            </div>
        </div>`;
  });
}


//Funcion para cargar el Loading una vez que se carga la pagina


window.addEventListener("load", function () {
  this.document.getElementById("loader").classList.toggle("loader2");
});


