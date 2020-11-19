const pwEl          = document.getElementById("pw");
const copyPassField = document.getElementById("copyPassField");
const lenEl         = document.getElementById("len");
const upperEl       = document.getElementById("upper");
const lowerEl       = document.getElementById("lower");
const numberEl      = document.getElementById("number");
const symbolEl      = document.getElementById("symbol");
const genPassEl     = document.getElementById("generatePass");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers      = "0123456789";
const symbols      = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;
	
	var password = "";
	if (len >= parseInt(lenEl.min) && len <= parseInt(lenEl.max)){

		if (upperEl.checked) {
			password += getUppercase();
		}

		if (lowerEl.checked) {
			password += getLowercase();
		}

		if (numberEl.checked) {
			password += getNumber();
		}

		if (symbolEl.checked) {
			password += getSymbol();
		}

		for (let i = password.length; i < len; i++) {
			const x = generateX();
			password += x;
		}
	} else {
		lenEl.value = 15;
	}
	
    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

genPassEl.addEventListener("click", generatePassword);
copyPassField.addEventListener("click", () => {copyToClipboard(pwEl.innerText)});