var destinoImagen; //Destino en el cual se guarda la imagen
var formatoValor; //Establece el formato del valor devuelto

function onBodyLoad(){
    //Cargar las librerias API del dispositivo
document.addEventListener("deviceready",onDeviceReady,false);
}

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

function onPhotoDataSuccess(imageData) {
	alert('Estoy en el onPhotoDataSuccess');
	//console.log(datosImagen); //Ver los datos de la imagen codificados en base64

    //Coger el mango de la foto
    var smallImage=document.getElementById('smallImage');

    //Mostrar datos de la imagen
    smallImage.style.display='block';

    //Mostrar la foto capturada
    //Las reglas CSS de la linea se usan para redimensionar la imagen
    smallImage.src="data:image/jpeg;base64,"+imageData;
    alert('Igual he hecho lo de onPhotoDataSuccess');
	
    createNewFileEntry(smallImage.src);
}

function createNewFileEntry(imgUri) {
    alert('Estoy en el createNewFileEntry');
    //Guardar en la carpeta por defecto
    //window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {
    window.resolveLocalFileSystemURL(destinoImagen, function success(dirEntry) {
 
        // JPEG file 
        dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {
 
            // Do something with it, like write to it, upload it, etc. 
            // writeFile(fileEntry, imgUri); 
            console.log("Archivo guardado en: "+fileEntry.fullPath);
            // displayFileData(fileEntry.fullPath, "File copied to"); 
 
        }, mostrarError('Fallo al crear el archivo.'));
    }, mostrarError('Fallo al encontrar el directorio.'));
    alert('Igual he hecho lo de createNewFileEntry');

/** Mostrar Error **/
function mostrarError(mensaje) {

    alert('Error: '+mensaje);
}