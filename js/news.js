window.onload = function(){

	let adminKey = localStorage.getItem("isAdmin");
	if (adminKey === "false"){
	document.getElementById('button_addNews').style.visibility = "hidden";
	}
	else {
		
		console.log("admin")
	}
}


document.getElementById('button_logout').onclick = function(){
	document.location.assign('index.html');
	localStorage.removeItem("isAdmin");}
