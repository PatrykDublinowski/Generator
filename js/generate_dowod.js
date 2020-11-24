const dowodEl        = document.getElementById("dw");
const copyDowodField = document.getElementById("copyDowodField");
const genDowodEl     = document.getElementById("generateDowod");
const seria          = document.getElementById("seria");

function getRandomValFromString(values){
  var randomVal = values[Math.floor(Math.random() * values.length)];
  return randomVal;
}

function getDowodWithSeparateSeries(dowod){
	return dowod.slice(0,3) + ' ' + dowod.slice(3);
}

function generateDowod(){
	var values     = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var weights    = '73173173'
	var controlVal = 0;
	var dowod      = '';
	
	while (dowod.length < 3){
		dowod += getRandomValFromString(values.slice(10));
	}
	
	while (dowod.length < 8){
		dowod += getRandomValFromString(values.slice(0,10));
	}

	for (var i = 0; i < dowod.length; i++){
		controlVal += parseInt(weights[i]) * parseInt(values.indexOf(dowod[i]));
	}
	
	controlVal = parseInt(controlVal) % 10;
	
	dowod = dowod.slice(0,3) + controlVal.toString() + dowod.slice(3);
	
	if (seria.checked){
		dowod = getDowodWithSeparateSeries(dowod);
	}
	
	dowodEl.innerText = dowod;
}

genDowodEl.addEventListener("click", generateDowod);
copyDowodField.addEventListener("click", () => {copyToClipboard(dowodEl.innerText)});