function playAudio(e) {
    const keys = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    keys.classList.add('playing');
}

window.addEventListener('keydown', playAudio);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e) {
    key.classList.remove('playing');
}))