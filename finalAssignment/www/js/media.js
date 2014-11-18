var my_media = null;
var mediaTimer = null;

function recordAudio() {
	var src = "myvoice.amr";
	var mediaRec = new Media(src, onSuccess, onError);
	mediaRec.startRecord();
	
	var recTime = 0;
	var recInterval = setInterval( function () {
		recTime += 1;
		setAudioPosition(recTime + " sec");
		if (recTime >= 10) {
			clearInterval(recInterval);
			mediaRec.stopRecord();
		}
	}, 1000);
}

function setAudioPosition (position) {
	document.getElementById("setGeolocation").innerHTML = position;
}

function playAudio(src) {
	var my_media = new Media(src, onSuccess, onError);
	my_media.play();
	
	if (mediaTimer == null) {
		mediaTimer = setInterval( function() {
			my_media.getCurrentPosition(
				function (position) {
					if (position > -1) {
						setAudioPosition((position) + " sec");
					}
				},
				
				function (e) {
					console.log("Error getting pos=" + e);
					setAudioPosition("Error: " + e);
				}
			);
		}, 1000);
	}
}

function onSuccess() {
	alert("recordAudio():Audio Success");
}

function onError(err) {
	console.log("recordAudio():Audio Error: " + err.code);
}


document.getElementById("recordAudio").onclick = function () {
	recordAudio();
}

document.getElementById("playAudio").onclick = function () {
	playAudio("mnt/sdcard/myvoice.amr");
}
