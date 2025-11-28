let currentAudio = null;

function changeBgImageAudio(imageUrl, audioUrl) {
    // Change background
    document.getElementById('bg-image').style.backgroundImage = `url("${imageUrl}")`;

    // Stop previous audio if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play new audio
    currentAudio = new Audio(audioUrl);
    currentAudio.play();
}
