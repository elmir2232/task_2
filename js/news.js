document.getElementById('button_logout').onclick = function(){
	document.location.assign('index.html');
	localStorage.removeItem("isAdmin");}
