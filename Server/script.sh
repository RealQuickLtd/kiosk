#!/bin/bash
while true; do
    for dir in ~/Resources ~/Server/res; do
        for file in "$dir"/*; do
            if [[ -f $file ]]; then
                if [[ $file == *.jpg || $file == *.png ]]; then
                    imv -s full $file &
                    sleep 15s
                    pkill imv  # Ensure imv is killed before the next iteration
                elif [[ $file == *.mp4 || $file == *.mkv || $file == *.avi ]]; then
                    mpv --fs --osd-level=0 --no-osc --no-osd-bar --cursor-autohide=always --keep-open=no $file
                elif [[ $file == *.html ]]; then
                    brave-browser --password-store=basic --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform=wayland --ignore-gpu-blocklist --start-fullscreen --allow-file-access-from-files --kiosk %U $file &
                    sleep 60s
                    killall brave
                 fi
              fi
       # # Smooth Animation with wallpaper, shifiting with a 3-second delay
       # imv -s crop ~/Server/365.png &
       # sleep 3s
       # pkill imv
        done
    done
done
