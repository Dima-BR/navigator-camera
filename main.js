 const cameraButton = document.getElementById('camera-button');

        cameraButton.addEventListener('click', () => {
            if (video.srcObject) {
                // Close the camera
                video.srcObject = null;
                cameraButton.innerHTML = 'Open Camera';
            } else {
                // Open the camera
                navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
                    video.srcObject = stream;
                    video.play();
                    cameraButton.innerHTML = 'Close Camera';
                });
            }
        });
