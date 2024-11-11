# Kiosk Script for LED Display

This project includes a simple script that runs on Fedora, designed for a kiosk display on LED screens. The kiosk loops videos and PNG images, and displays daily rates for products like flour and oil as per the client's requirements. The display is always on, with no notifications or sleep mode.

The script uses `imv` for displaying images, `mpv` for videos, and a basic HTML/CSS/JS interface with Brave for showing rates. The kiosk also plays instrumental music over the network via **Shairport Sync**, with speakers connected to the LED display for a better ambience.

## Features

- **Looping Content:** Videos and PNG images are shown on a loop.
- **Rate Display:** Daily prices for items like flour and oil are shown. 
- **Customizable Timings:** The image display time and rate update time can be adjusted.
- **Always-On Display:** No sleep mode or screen dimming, ensuring the display is always active.
- **Easy Content Update:** The content (images, videos, rates) can be easily updated by placing files in the `Resources` folder, which can be accessed via SFTP.
- **Ambient Music Streaming:** Background music is played over the network using **Shairport Sync** (AirPlay receiver), streamed to wall speakers for an enhanced experience.

## Folder Structure

- **Server Folder:** Contains all the necessary files for the kiosk to run.
- **Resources Folder:** Houses images, videos, and rate data. This folder allows anyone to update kiosk content and rates via SFTP.

## Music Setup

Music streaming over the network using ([Shairport Sync](https://github.com/mikebrady/shairport-sync)) and **TuneBlade** to play instrumental background music.  
Previously we used [RPI Audio Receiver project](https://github.com/nicokaiser/rpi-audio-receiver) for another client.

## Contribution

We’re considering making this open-source if it can be useful for others. Contributions and improvements are welcome. Feel free to fork the repo and modify as per requirements.
