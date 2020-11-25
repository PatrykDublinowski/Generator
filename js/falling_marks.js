const generateButtons = document.getElementsByClassName("generate");

function getRandomMark(){
	var marks = "!@#$%^&*()_+=";
	return marks[Math.floor(Math.random() * marks.length)];
}

function createMark(){
	const mark = document.createElement('div');
	mark.classList.add('mark');
	mark.style.left = Math.random() * 100 + "vw";
	mark.style.animationDuration = Math.random() * 2 + 1 + "s";
	
	mark.innerText = getRandomMark();
	 
	document.body.appendChild(mark);
	
	setTimeout(() => {
		mark.remove();
	},3000);
}

function showMarks(){
	for (var i=0; i<generateButtons.length;i++){
	generateButtons[i].addEventListener('click',() => {
		var createMarks = setInterval(createMark, 50);
		setTimeout(() => {
			clearInterval(createMarks);
		},1500);
	});
	}
}

showMarks();