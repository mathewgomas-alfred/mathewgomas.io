# Web Media Player
A modern, cross-platform web media player application for playing various audio and video formats, including MP3, MP4, AVI, and more. Features include:
1.Cross-platform compatibility
2.Support for multiple audio and video formats
3.Customizable playback controls
4.Responsive design for optimal user experience

## Features

- Support for multiple audio and video formats (MP3, MP4, WAV, AVI, MKV, etc.)
- Intuitive and responsive user interface
- Playlist management
- Media library organization
- Custom equalizer settings
- Subtitle support for video files
- Hardware acceleration for smooth playback
- Cross-platform compatibility (Windows, macOS, Linux)

## Installation

### Prerequisites
- Python 3.10 or higher
- FFmpeg
- Required Python packages (listed in requirements.txt)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/mathewgomas-alfred/web_media_player.git
cd web-media-player
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Install FFmpeg:
   - Windows: Download from [FFmpeg website](https://ffmpeg.org/download.html)
   - macOS: `brew install ffmpeg`
   - Linux: `sudo apt-get install ffmpeg`

4. Run the application:
```bash
python main.py
```

## Usage

1. Launch the application
2. Use File > Open to select media files
3. Use the playback controls to:
   - Play/Pause
   - Skip forward/backward
   - Adjust volume
   - Control playback speed
4. Access the equalizer through View > Equalizer
5. Manage playlists through the Playlist menu

## Keyboard Shortcuts

- Space: Play/Pause
- Right Arrow: Forward 10 seconds
- Left Arrow: Backward 10 seconds
- Up Arrow: Volume Up
- Down Arrow: Volume Down
- F: Toggle Fullscreen
- M: Mute/Unmute

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing coding style.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- FFmpeg for media processing
- PyQt for the GUI framework
- All contributors who have helped with the project

## Support

For support, please:
1. Check the [documentation](docs/)
2. Look through [existing issues](https://github.com/mathewgomas-alfred/web_media_player/issues)
3. Create a new issue if needed

## Roadmap

- [ ] Add network streaming support
- [ ] Implement media casting to smart devices
- [ ] Add video effects and filters
- [ ] Develop mobile versions
- [ ] Add cloud storage integration

## Contact

- Project Link: [https://github.com/mathewgomas-alfred/web_media_player](https://github.com/mathewgomas-alfred/web_media_player)
- Developer Email: mathewgomas@gmail.com