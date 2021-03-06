var words = [
  'Hasła',
  'PESEL',
  'NIP',
  'REGON',
  'NUMERU DOWODU'
];
var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
    speed = 350,
    steps = 6,
    loader = document.querySelector('#loader');

var index = 0;

function getRandomLetter() {
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

function randomWordLoop() {
  var word = words[index];
  
  index++;
  index = ((index === words.length) ? 0 : index);
  
  var textLength = word.length;
  for(var i = 0; i < textLength; i++) {    
    (function(i,word){
      letterAppear(i, word);
    })(i,word)
  }
  
  function letterAppear(i, word) {
    setTimeout(function() {
      randomLetters(i, word);
    }, speed*i);  
  }

  function randomLetters(i, word) {
    for (var j = 0; j <= steps; j++) {
      charsAnim(i, word, j);
    }
  }

  function charsAnim(i, word, j) {
    setTimeout(function() {
      var count = j; 
      if (j < steps) {           
        randomChar(i, word, count, j);
      } else {
        goodChar(i, word, count, j);
      }
    }, ((speed/steps)*j) - (speed/steps));
  }

  function randomChar(i, word, count, j) {
    var letter = getRandomLetter();    
    if (j > 0) {
      var oldText = loader.textContent.slice(0, -1);
    } else {
      var oldText = loader.textContent;
    }
    loader.textContent = oldText + letter;    
  }
  function goodChar(i, word, count, j) {
    var oldText = loader.textContent.slice(0, -1);  
    loader.textContent = oldText + word[i];
    if (i == textLength - 1 ) {
      removeWord();
    }
  }
  
  function removeWord() {
    setTimeout(function() {
      for (var k = 0; k < textLength; k++) {
         removeLetters(k);
      }
    }, speed*2);
  }
  function removeLetters(k) {
    setTimeout(function() {
      removeLetter(k);
    }, 75*k);
  }
  function removeLetter(k) {
    var actualText = loader.textContent.slice(0, -1);
    loader.textContent = actualText;
    if (k == textLength - 1) {
      randomWordLoop();
    }
  }
}

randomWordLoop();