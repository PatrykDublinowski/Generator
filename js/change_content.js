const buttonsContainer = document.getElementById("buttons");
const buttons          = buttonsContainer.getElementsByClassName("btn btn1");

const passContent  = document.getElementById("pass");
const peselContent = document.getElementById("pesel");

const passButton   = document.getElementById("passButton");
const peselButton  = document.getElementById("peselButton");
const regonButton  = document.getElementById("regonButton");
const nipButton    = document.getElementById("nipButton");
const guidButton   = document.getElementById("guidButton");

//change active menu buttons after change content
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

peselContent.style.display='none';


passButton.addEventListener("click", () => {
	peselContent.style.display='none';
	passContent.style.display='flex';
});

peselButton.addEventListener("click", () => {
	passContent.style.display='none';
	peselContent.style.display='flex';
});

$('.passButton').on('click', function(){
    $('passButton').removeClass('selected');
    $(this).addClass('selected');
});