// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function handleKeyboradKeyUpEvent(event){
    // console.log('keyboard pressed');
    const playerPressed = event.key;

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log('you pressed:' ,playerPressed, 'expected:',expectedAlphabet);
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life!!!')
    }
}
// captured keyboard keypress
document.addEventListener('keyup', handleKeyboradKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // setbackgroundcolor
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}