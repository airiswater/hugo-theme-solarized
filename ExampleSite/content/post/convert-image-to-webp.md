---
title: "how to convert image to Webp format on linux"
date: 2019-07-07T12:36:46+07:00
draft: false
tags: ["linux", "tutorial","hugo"]
image: /img/loli.webp
---

this is simple tutorial to convert image to .webp format

    #debian
    asuna@linuxisekai :~$ sudo apt-get install libwebp gthumb
    
    #arch
    asuna@linuxisekai :~$ sudo pacman -S libwebp gthumb

then exec :

    cwebp -q 100 image.jpg -o image.webp

done.

### tips
if you want to convert many file, use this script

    asuna@linuxisekai :~$ cd ~/hugo-project/static/img
    asuna@linuxisekai :~/hugo-project/static/img$ nano convert.sh

    #!/bin/bash

    PARAMS=('-m 6 -q 70 -mt -af -progress')

    if [ $# -ne 0 ]; then
	PARAMS=$@;
    fi

    cd $(pwd)

    shopt -s nullglob nocaseglob extglob

    for FILE in *.@(jpg|jpeg|tif|tiff|png); do 
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
    done
    
    //ctrl+x enter
    asuna@linuxisekai :~/hugo-project/static/img :~$./convert.sh

done