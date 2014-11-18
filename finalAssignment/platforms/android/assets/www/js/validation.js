var usrName = document.getElementById("usrName");
var usrPass = document.getElementById("pass");

function checkFiles() {
	var login = 'admin';
	var pass = 'password';
	
	if (usrName.value == '') {
		alert("Please provide your username!");
		usrName.value = '';
		usrName.focus();
	} else if (usrPass.value == '') {
		alert("Please provide your password!");
		usrPass.value = '';
		usrPass.focus();
	} else if ((usrName.value.length != login.length) || (usrPass.value.length != pass.length)) {
		alert("Invalid username and password");
		clearFiels();
		
	} else {
		window.location.href='#home';
		clearFiels();
	}
}

function clearFiels() {
	usrName.value = '';
	usrPass.value = '';
	usrName.focus();
}

document.getElementById("submit").onclick = function () {
		checkFiles();
}