var destinoImagen; //Destino en el cual se guarda la imagen
var formatoValor; //Establece el formato del valor devuelto

//Cargar las librerias API del dispositivo
document.addEventListener("deviceready",onDeviceReady,false);

//Cuando las API están disponibles, coger los valores
function onDeviceReady() {
	alert('Entro en el onDeviceReady');
    destinoImagen=navigator.camera.PictureSourceType;
    formatoValor=navigator.camera.DestinationType;
    alert('Igual he hecho lo del onDeviceReady');
}

/** CAPTURAR FOTO **/
function capturarFoto(){
	alert('Estoy en el capturarFoto');
	navigator.camera.getPicture(onPhotoDataSuccess, mostrarError, { quality: 50, destinationType: formatoValor.DATA_URL });
	alert('Igual he hecho lo de capturarFoto');
}

function onPhotoDataSuccess(datosImagen) {
	alert('Estoy en el onPhotoDataSuccess');
	//console.log(datosImagen); //Ver los datos de la imagen codificados en base64

    //Coger el mango de la foto
    var fotoPequena=document.getElementById('smallImage');

    //Mostrar datos de la imagen
    fotoPequena.style.display='block';

    //Mostrar la foto capturada
    //Las reglas CSS de la linea se usan para redimensionar la imagen
    fotoPequena.src="data:image/jpeg;base64,"+datosImagen;
    alert('Igual he hecho lo de onPhotoDataSuccess');
}

/** Mostrar Error **/
function mostrarError(mensaje) {
    alert('Error: '+mensaje);
}