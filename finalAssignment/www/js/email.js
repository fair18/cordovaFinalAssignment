document.getElementById("send").onclick = function () {
	var sendTo = document.getElementById("mail").value;
	var message = document.getElementById("textbox").value;
	window.plugin.email.open({
		to: 	 [sendTo],
		subject: 'Test',
		body: 	  message});
}