const nipEl        = document.getElementById("np");
const copyNipField = document.getElementById("copyNipField");
const genNipEl     = document.getElementById("generateNip");
const separator    = document.getElementById("separator");
const prefix       = document.getElementById("pl");

function AddSeparators(nip) {
	nip = nip.slice(0,3) + '-' + nip.slice(3,6) + '-' + nip.slice(6,8) + '-' + nip.slice(8,10);

	return nip;
}

function AddPrefix(nip) {
	var prefix = "PL";
	
	nip = prefix.concat(nip);
	
	return nip;
}

function generateNip() {
	var nip           = "";
	var controlNumber = 0;
	var weights       = "657234567";
	
	nip += getRandomInt(101,998).toString();
	
	while (nip.length < 9)
	{
		nip += getRandomInt(0,9).toString();
	}

	for (var i = 0; i < nip.length; i++){
		controlNumber += parseInt(weights[i]) * parseInt(nip[i]);
	}
	
	controlNumber = parseInt(controlNumber) % 11;
	
	if (controlNumber == 10) {
		controlNumber = 0;
	}

	nip = nip.concat(controlNumber);
	
	if (separator.checked) {
		nip = AddSeparators(nip);
	}
	
	if (prefix.checked) {
		nip = AddPrefix(nip);
	}
	
	nipEl.innerText = nip;
}

genNipEl.addEventListener("click", generateNip);
copyNipField.addEventListener("click", () => {copyToClipboard(nipEl.innerText)});