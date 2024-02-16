// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}