
function playSound(eve){
    const audio = document.querySelector(`audio[data-key="${eve.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${eve.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(eve){
    if(eve.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);