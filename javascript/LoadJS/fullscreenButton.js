// javascript/fullscreenButton.js

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenButton = document.createElement('button');
    fullscreenButton.innerText = 'Fullscreen';
    fullscreenButton.style.position = 'fixed';
    fullscreenButton.style.bottom = '10px';
    fullscreenButton.style.right = '10px';
    fullscreenButton.style.padding = '10px';
    fullscreenButton.style.fontSize = '16px';
    fullscreenButton.style.zIndex = '1000';
    document.body.appendChild(fullscreenButton);

    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
});
