class MediaPlayer {
    constructor(config = {}) {
        // Core player elements
        this.player = document.getElementById('mediaPlayer');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('progressBar');
        this.currentTimeEl = document.getElementById('currentTime');
        this.totalTimeEl = document.getElementById('totalTime');
        this.volumeBar = document.getElementById('volumeBar');
        this.trackTitleEl = document.getElementById('trackTitle');
        this.playlistDisplay = document.getElementById('playlistDisplay');

        // Configuration with defaults
        this.config = {
            autoplay: config.autoplay || false,
            playlist: config.playlist || [
                {
                    title: 'Sample Track 1',
                    src: 'https://example.com/track1.mp3'
                },
                {
                    title: 'Sample Track 2',
                    src: 'https://example.com/track2.mp3'
                }
            ],
            currentTrackIndex: config.currentTrackIndex || 0
        };

        // Initialization
        this.initializeEventListeners();
        this.setupPlaylist();
    }

    initializeEventListeners() {
        // Play/Pause Button
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

        // Next and Previous Buttons
        this.nextBtn.addEventListener('click', () => this.playNextTrack());
        this.prevBtn.addEventListener('click', () => this.playPreviousTrack());

        // Progress Bar
        this.player.addEventListener('timeupdate', () => this.updateProgressBar());
        this.progressBar.addEventListener('input', () => this.seekMedia());

        // Volume Control
        this.volumeBar.addEventListener('input', () => this.adjustVolume());

        // Track End Event
        this.player.addEventListener('ended', () => this.playNextTrack());

        // Metadata Loaded
        this.player.addEventListener('loadedmetadata', () => this.setTotalTime());
    }

    setupPlaylist() {
        // Clear existing playlist
        this.playlistDisplay.innerHTML = '';

        // Populate playlist display
        this.config.playlist.forEach((track, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = track.title;
            listItem.addEventListener('click', () => this.playTrackByIndex(index));
            this.playlistDisplay.appendChild(listItem);
        });

        // Load first track
        this.loadTrack(this.config.currentTrackIndex);
    }

    loadTrack(index) {
        const track = this.config.playlist[index];
        this.loadMedia(track.src);
        this.trackTitleEl.textContent = track.title;
        this.config.currentTrackIndex = index;

        // Highlight current track
        const playlistItems = this.playlistDisplay.children;
        for (let i = 0; i < playlistItems.length; i++) {
            playlistItems[i].classList.toggle('active', i === index);
        }

        if (this.config.autoplay) {
            this.player.play();
            this.playPauseBtn.innerHTML = '❚❚';
        }
    }

    playTrackByIndex(index) {
        this.loadTrack(index);
        this.player.play();
        this.playPauseBtn.innerHTML = '❚❚';
    }

    togglePlayPause() {
        if (this.player.paused) {
            this.player.play();
            this.playPauseBtn.innerHTML = '❚❚'; // Pause icon
        } else {
            this.player.pause();
            this.playPauseBtn.innerHTML = '▶'; // Play icon
        }
    }

    updateProgressBar() {
        if (this.player.duration) {
            const percentage = (this.player.currentTime / this.player.duration) * 100;
            this.progressBar.value = percentage;
            this.updateCurrentTime();
        }
    }

    seekMedia() {
        const time = (this.progressBar.value / 100) * this.player.duration;
        this.player.currentTime = time;
    }

    updateCurrentTime() {
        const minutes = Math.floor(this.player.currentTime / 60);
        const seconds = Math.floor(this.player.currentTime % 60);
        this.currentTimeEl.textContent = `${minutes}:${this.padZero(seconds)}`;
    }

    setTotalTime() {
        const minutes = Math.floor(this.player.duration / 60);
        const seconds = Math.floor(this.player.duration % 60);
        this.totalTimeEl.textContent = `${minutes}:${this.padZero(seconds)}`;
    }

    padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    adjustVolume() {
        this.player.volume = this.volumeBar.value / 100;
    }

    loadMedia(src) {
        this.player.src = src;
        this.player.load();
    }

    playNextTrack() {
        const nextIndex = (this.config.currentTrackIndex + 1) % this.config.playlist.length;
        this.loadTrack(nextIndex);
        this.player.play();
    }

    playPreviousTrack() {
        const prevIndex = (this.config.currentTrackIndex - 1 + this.config.playlist.length) % this.config.playlist.length;
        this.loadTrack(prevIndex);
        this.player.play();
    }

    addToPlaylist(track) {
        this.config.playlist.push(track);
        this.setupPlaylist();
    }

    removeFromPlaylist(index) {
        this.config.playlist.splice(index, 1);
        this.setupPlaylist();
    }
}

// Initialize the player when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const mediaPlayer = new MediaPlayer({
        autoplay: false
    });
});