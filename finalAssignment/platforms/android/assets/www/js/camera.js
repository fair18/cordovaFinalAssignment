var pictureSource, destinationType;
var btn = document.getElementById("takePic");

function onPhotoDataSource(imageData) {
	var smallImage = document.getElementById("image");
	smallImage.style.display = "block";
	smallImage.src = "data:image/jpeg;base64," + imageData;
}

function capturePhoto() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
	navigator.camera.getPicture(onPhotoDataSource, onFail, {quality: 50, destinationType: destinationType.DATA_URL });
};

function onFail(message){
	alert("Failed because: " + message);
}

btn.onclick = function () {
	capturePhoto();
};