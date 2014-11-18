var getPosition = document.getElementById("getGeolocation");
var setGeolocation = document.getElementById("setGeolocation");

function onSuc(position) {
	setGeolocation.innerHTML = 'Lat: ' + position.coords.latitude+ ', ' +
							   'Lng: '+ position.coords.longitude;
	
	//google.maps.marker
	var latlon = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var mapholder = document.getElementById("mapholder");
	
	var myOptions = {
		center:latlon,zoom:14,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
	}
	
	var map = new google.maps.Map(mapholder,myOptions);
	var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function onErr(error) {
	alert('code: '   + error.code    + '\n' +
		  'message:' + error.message + '\n');
}

getPosition.onclick = function () {
	navigator.geolocation.getCurrentPosition(onSuc, onErr);
}

