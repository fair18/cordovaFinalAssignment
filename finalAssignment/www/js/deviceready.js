function onDeviceReady() {
		var info = document.getElementById("appInfo");
		info.innerHTML = "device";
}

window.onload = function () {
	document.addEventListener("deviceready", onDeviceReady, false);
}