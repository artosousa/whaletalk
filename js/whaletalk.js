const vowels = ['a','e','i','o','u'];
const translated = document.getElementById('translated-box');
const originalString = document.getElementById('original-string');
const input = document.getElementById('user-input');
const playWhaleSound = document.getElementById('play-sound');

const translateToWhale = function(){
  let inputText = document.getElementById('user-input').value;
  let resultArray  = [];

  console.log('run the function');
  console.log(inputText);

  for(let inputIndex = 0; inputIndex < inputText.length; inputIndex++){
  //console.log('input index = ' + input[inputIndex]);
  for(let vowel = 0; vowel < vowels.length; vowel++){
    //console.log(vowel);
    if(inputText[inputIndex] === vowels[vowel]){
      if(inputText[inputIndex] === 'e'){
        resultArray.push('ee');
      }else if(inputText[inputIndex] === 'u'){
        resultArray.push('uu');
      } else{
        resultArray.push(inputText[inputIndex]);
      }
    }
  }
}
//resultArray.join("").toUpperCase()
originalString.innerHTML = inputText;
translated.innerHTML = resultArray.join("").toUpperCase();

}

const playSound = function(){
  responsiveVoice.speak(translated.innerHTML.toLowerCase(), "Japanese Male", {pitch: 4});
}

playWhaleSound.addEventListener('mousedown', playSound);
input.addEventListener('keyup', translateToWhale);