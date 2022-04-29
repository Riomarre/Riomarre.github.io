app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

dt = new Date();


document.getElementById("date").innerHTML= "The website was accessed on "+ dt;

document.getElementById("yes").onclick= function(){

	document.getElementById("ans1").innerHTML= "I wannt to kiss you!";
	document.getElementById("yes").style.display = "none";
	document.getElementById("no").style.display = "none";
	document.getElementById("text").innerHTML = "I'm Glad";
	document.getElementById("ans2").innerHTML = "I will make you proud daddy!";



}

document.getElementById("no").onclick= function(){

	document.getElementById("ans1").innerHTML= "";
	document.getElementById("yes").style.display = "none";
	document.getElementById("no").style.display = "none";
	document.getElementById("text").innerHTML = "Allah hates you!";
	document.getElementById("ans2").innerHTML = "Mehdi hates you too!";



}


document.getElementById("summary").innerHTML = "Note that this program is still experimental and will grow slowly!";
