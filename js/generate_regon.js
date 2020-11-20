const regonEl        = document.getElementById("rg");
const copyRegonField = document.getElementById("copyRegonField");
const genRegonEl     = document.getElementById("generateRegon");
const fourteenEl     = document.getElementById("fourteen");

function generateNineRegon(){
	var nineRegon         = "";
	var controlNineNumber = 0;
	var weightsNine       = "89234567";
	
	while (nineRegon.length < 8)
	{
		nineRegon += getRandomInt(0,9).toString();
	}
	
	for (var i = 0; i < nineRegon.length; i++){
		controlNineNumber += parseInt(weightsNine[i]) * parseInt(nineRegon[i]);
	}
	
	controlNineNumber = parseInt(controlNineNumber) % 11;
	
	if (controlNineNumber == 10) {
		controlNineNumber = 0;
	}
	
	return nineRegon.concat(controlNineNumber);
}

function generateFourteenRegon(nineRegon){
	var fourteenRegon         = nineRegon;
	var controlFourteenNumber = 0;
	var weightsFourteen       = '2485097361248'
	
	while (fourteenRegon.length < 13)
	{
		fourteenRegon += getRandomInt(0,9).toString();
	}
	
	for (var i = 0; i < fourteenRegon.length; i++){
		controlFourteenNumber += parseInt(weightsFourteen[i]) * parseInt(fourteenRegon[i]);
	}
	
	controlFourteenNumber = parseInt(controlFourteenNumber) % 11;
	
	if (controlFourteenNumber === 10) {
		controlFourteenNumber = 0;
	}
	
	return fourteenRegon.concat(controlFourteenNumber);
}

function generateRegon(){
	var regon = "";

	regon = generateNineRegon();

	if (fourteenEl.checked) {
		regon = generateFourteenRegon(regon);
	}
	regonEl.innerText = regon;
}

genRegonEl.addEventListener("click", generateRegon);
copyRegonField.addEventListener("click", () => {copyToClipboard(regonEl.innerText)});