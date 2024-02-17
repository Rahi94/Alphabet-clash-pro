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

        //step-1:  update the score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // step-2: increase the score by 1
        const newScore = currentScore + 1;
        // step-3: show the new updated score
        currentScoreElement.innerText = newScore;
        // play again
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // get the current life number
        const currentLifeElement = document.getElementById('life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // reduce the life count
        const newLife = currentLife - 1;

        // display the updated life count
        currentLifeElement.innerText = newLife;
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