if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Song Title',
        artist: 'Artist Name',
        album: 'Album Name',
        artwork: [
            { src: 'artwork.jpg', sizes: '512x512', type: 'image/jpeg' }
        ]
    });

    navigator.mediaSession.setActionHandler('play', () => {
        audioPlayer.play();
    });
    navigator.mediaSession.setActionHandler('pause', () => {
        audioPlayer.pause();
    });
}

