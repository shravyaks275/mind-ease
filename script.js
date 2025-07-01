document.getElementById('start-btn').addEventListener('click', startVoiceAssistant);

function startVoiceAssistant() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('voice-output').innerText = "You said: " + transcript;
    };

    recognition.onerror = function(event) {
        console.error("Error occurred in recognition: " + event.error);
    };
}

function startGame() {
    alert("This is a simple stress-relief game! (Game functionality to be implemented)");
}

fetch('videos.json')
    .then(response => response.json())
    .then(data => {
        const videoFeed = document.getElementById('video-feed');
        data.videos.forEach(video => {
            const videoElement = document.createElement('iframe');
            videoElement.src = video.url;
            videoElement.width = '300';
            videoElement.height = '200';
            videoElement.allow = 'autoplay; encrypted-media';
            videoFeed.appendChild(videoElement);
        });
    })
    .catch(error => console.error('Error fetching video data:', error));