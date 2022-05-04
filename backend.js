
dt = new Date();

var pts = 0;
var flag = 0;
var userin;

document.getElementById("points").innerHTML = "Points so far: "+pts;
document.getElementById("end").innerHTML= "The website was accessed on "+ dt;

//Q1 start
document.getElementById("y11").onclick= function(){
	pts+=1;
	document.getElementById("points").innerHTML = "Points so far: "+pts;
	document.getElementById("dick").innerHTML ="Answer saved.";
	console.log(pts);
	document.getElementById("y11").style.display = "none";
	document.getElementById("y12").style.display = "none";
	document.getElementById("y13").style.display = "none";

}

document.getElementById("y12").onclick= function(){
	document.getElementById("dick").innerHTML ="Answer saved.";
	console.log(pts);
	document.getElementById("y11").style.display = "none";
	document.getElementById("y12").style.display = "none";
	document.getElementById("y13").style.display = "none";

}

document.getElementById("y12").onclick= function(){
	document.getElementById("dick").innerHTML ="Answer saved.";
	console.log(pts);
	document.getElementById("y11").style.display = "none";
	document.getElementById("y12").style.display = "none";
	document.getElementById("y13").style.display = "none";

}

//Q1 end and Q2 start

document.getElementById("y21").onclick= function(){
	document.getElementById("brain").innerHTML ="Answer saved.";
	console.log(pts);
	document.getElementById("y21").style.display = "none";
	document.getElementById("y22").style.display = "none";
	document.getElementById("y23").style.display = "none";

}

document.getElementById("y22").onclick= function(){
	document.getElementById("brain").innerHTML ="Answer saved.";
	console.log(pts);
	document.getElementById("y21").style.display = "none";
	document.getElementById("y22").style.display = "none";
	document.getElementById("y23").style.display = "none";

}

document.getElementById("y23").onclick= function(){
	pts+=1;
	document.getElementById("points").innerHTML = "Points so far: "+pts;
	document.getElementById("brain").innerHTML ="Answer saved.";
	console.log(pts);
	document.getElementById("y21").style.display = "none";
	document.getElementById("y22").style.display = "none";
	document.getElementById("y23").style.display = "none";

}
// Q2 end and Q3 start

document.getElementById("open1").onclick= function(){
	document.getElementById("open").innerHTML ="Open questioned logged.";
	userin=document.getElementById("txt").value;
	userin=userin.toLowerCase();
	console.log(userin);
	document.getElementById("txt").style.display ="none";
	document.getElementById("tip").innerHTML ="";
	document.getElementById("open1").style.display="none";
	if (userin==="pari") {
		pts+=2
		document.getElementById("points").innerHTML = "Points so far: "+pts;
	}
	
	
}



// Q3 end and Points display



