const peselEl        = document.getElementById("ps");
const copyPeselField = document.getElementById("copyPeselField");
const dateEl         = document.getElementById("date");
const allEl          = document.getElementById("all");
const womanEl        = document.getElementById("woman");
const manEl          = document.getElementById("man");
const genPeselEl     = document.getElementById("generatePesel");

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isLeapYear(year){
	return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
}

function getValueAddToMonth(year){
	var firstPartOfYear = year.toString().slice(0,2);
	switch (firstPartOfYear) {
		case '18':
			return 80;
		break;
		case '19':
			return 0;
		break;
		case '20':
			return 20;
		break;
		case '21':
			return 40;
		break;
		case '22':
			return 60;
		break;	
	}
}

function generateBirthDatePart() {
	var day           = "";
	var month         = "";
	var year          = "";
	var birthDatePart = "";
	
	if (dateEl.value === "") {
		dateEl.value = "";
		year  = getRandomInt(1800,2299);
		month = getRandomInt(1,12);
		if (month === 4 || month === 6 || month === 9 || month === 11 ){
			day = getRandomInt(1,30);
		} else if (month = 2) {
			if (isLeapYear(year)===true){
				day = getRandomInt(1,29);
			} else {
				day = getRandomInt(1,28);
			}	
		} else {
			day = getRandomInt(1,31);
		}
		
		month += getValueAddToMonth(year);
		
		if (month.toString().length===1) {
			let z = '0';
			month = z.concat(month);
		}
		if (day.toString().length===1) {
			let z = '0';
			day = z.concat(day);
		}
		
		birthDatePart = birthDatePart.concat(year.toString().slice(2,4), month, day);
    }
	else{
		
		var date = dateEl.value;
		
		if(date >= '1800-01-01' && date <= '2299-12-31'){
			year  = date.slice(0,4);
			month = date.slice(5,7);
			day   = date.slice(8,10);
		
			month = parseInt(month) + getValueAddToMonth(year);
			if (month.toString().length===1) {
				let z = '0';
				month = z.concat(month);
			}
		
			birthDatePart = birthDatePart.concat(year.toString().slice(2,4), month, day);

		} else {
			
			alert('Data spoza zakresu!');

		}
	}
	
	return birthDatePart;
}

function generateOrdinalNumber() {
	var ordinalNumber = "";
	var evenNumbers   = "02468";
	var oddNumbers    = "13579";
	
	ordinalNumber = getRandomInt(0,9).toString() + getRandomInt(0,9).toString() + getRandomInt(0,9).toString();
	
	if (allEl.checked) {
        ordinalNumber += getRandomInt(0,9).toString();
    }

    if (womanEl.checked) {
        ordinalNumber += evenNumbers[Math.floor(Math.random() * evenNumbers.length)].toString();
    }

    if (manEl.checked) {
        ordinalNumber += oddNumbers[Math.floor(Math.random() * oddNumbers.length)].toString();
    }
	
	return ordinalNumber;
	
}

function generateWeightValue(birthDatePart, ordinalNumber) {
	var peselWithoutWeight = "";
	var weightValue        = 0;
	
	peselWithoutWeight = birthDatePart + ordinalNumber;
	
	weightValue = parseInt(peselWithoutWeight[0])*1 + parseInt(peselWithoutWeight[1])*3 + parseInt(peselWithoutWeight[2])*7 + parseInt(peselWithoutWeight[3])*9 + parseInt(	         peselWithoutWeight[4])*1 + parseInt(peselWithoutWeight[5])*3 + parseInt(peselWithoutWeight[6])*7 + parseInt(peselWithoutWeight[7])*9 + parseInt(peselWithoutWeight[8])*1 +   parseInt(peselWithoutWeight[9])*3;
	
	weightValue = weightValue % 10; 
	weightValue = 10 - weightValue;
	weightValue = weightValue % 10;
	
	return weightValue;
}

function generatePesel() {

    var pesel = "";
	var birthDatePart = generateBirthDatePart();
	var ordinalNumber = generateOrdinalNumber();

	if (birthDatePart != "" && ordinalNumber != ""){
		pesel = birthDatePart + ordinalNumber + generateWeightValue(birthDatePart,ordinalNumber);
	}

    peselEl.innerText = pesel;
}

genPeselEl.addEventListener("click", generatePesel);
copyPeselField.addEventListener("click", () => {copyToClipboard(peselEl.innerText)});