const buttonsContainer = document.getElementById("buttons");
const buttons          = buttonsContainer.getElementsByClassName("btn btn1");

const sectionContainer = document.getElementById("section");
const containers       = sectionContainer.getElementsByClassName("container");

const passContent      = document.getElementById("pass");

// start - display pass, hide rest
for (var i = 0; i < containers.length; i++) {
		containers[i].style.display='none';
}
passContent.style.display='flex';

//important - in this solution when button have name for instance 'peselButton' container have to have name 'pesel'
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
	//extract 'Button' from button id
	var idButtonForContainer = this.id.slice(0,-6);
	for (var j = 0; j < containers.length; j++) {
		if (containers[j].id === idButtonForContainer){
			for (var k=0; k < containers.length; k++){
				containers[k].style.display='none';
			}
			containers[j].style.display='flex';
		}
	}
  });
}