var checkMale = document.getElementById("male");
var checkFemale = document.getElementById("female");
var checkboxM = document.getElementsByClassName("nam");
var checkboxF = document.getElementsByClassName("nu");

checkMale.onclick = function(){
	for (var i = 0; i < checkboxF.length; i++) {
		checkboxF[i].style = "display:none;";
	}
	for (var i = 0; i < checkboxM.length; i++) {
		checkboxM[i].style = "display:ineline-block;";
	}
}

checkFemale.onclick = function(){
	for (var i = 0; i < checkboxM.length; i++) {
		checkboxM[i].style = "display:none;";
	}
	for (var i = 0; i < checkboxF.length; i++) {
		checkboxF[i].style = "display:inline-block;";
	}
}

