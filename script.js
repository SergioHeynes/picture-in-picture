const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaDisplay = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = MediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay()
        }
    }
    catch(error){
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load
selectMediaStream();