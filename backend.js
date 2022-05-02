
dt = new Date();


document.getElementById("end").innerHTML= "The website was accessed on "+ dt;

document.getElementById("y1").onclick= function(){
	document.getElementById("dick").innerHTML =" Correct!! But how did you know? \n real size to scale: ===>";
	document.getElementById("y1").style.display = "none";
	document.getElementById("y2").style.display = "none";

}
document.getElementById("y2").onclick= function(){
	document.getElementById("dick").innerHTML ="Sure honey, keep dreaming \n real size to scale: ===>";
	document.getElementById("y1").style.display = "none";
	document.getElementById("y2").style.display = "none";

}


