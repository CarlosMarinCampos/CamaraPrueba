var destinoImagen; //Destino en el cual se guarda la imagen
var formatoValor; //Establece el formato del valor devuelto

//Cargar las librerias API del dispositivo
document.addEventListener("deviceready",onDeviceReady,false);

//Cuando las API están disponibles, coger los valores
function onDeviceReady() {
    destinoImagen=navigator.camera.PictureSourceType;
    formatoValor=navigator.camera.DestinationType;
}

/** CAPTURAR FOTO **/
function capturarFoto(){
	navigator.camera.getPicture(onPhotoDataSuccess, mostrarError, { quality: 50, destinationType: formatoValor.DATA_URL });
}

function onPhotoDataSuccess(datosImagen) {
	//console.log(datosImagen); //Ver los datos de la imagen codificados en base64

    //Coger el mango de la foto
    var fotoPequena=document.getElementById('smallImage');

    //Mostrar datos de la imagen
    fotoPequena.style.display='block';

    //Mostrar la foto capturada
    //Las reglas CSS de la linea se usan para redimensionar la imagen
    fotoPequena.src="data:image/jpeg;base64,"+datosImagen;
}

/** Mostrar Error **/
function mostrarError(mensaje) {
    alert('Error: '+mensaje);
}