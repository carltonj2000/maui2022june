# Maui Trip June 2022

```bash
npm run dev
npm run build
npm run rsync
```

## Image Generation

```bash
sudo apt install graphicsmagick
/usr/bin/gm convert maui.png -resize 16x16 maui-16.png
/usr/bin/gm convert maui.png -resize 32x32 maui-32.png
/usr/bin/gm convert maui.png -resize 48x48 maui-48.png
/usr/bin/gm convert maui.png -resize 128x128 maui-128.png
/usr/bin/gm convert maui.png -resize 192x192 maui-192.png
/usr/bin/gm convert maui.png -resize 512x512 maui-512.png
/usr/bin/gm convert maui.png -resize 152x152 maui-152.png
/usr/bin/gm convert maui.png -resize 167x167 maui-167.png
/usr/bin/gm convert maui.png -resize 180x180 maui-180.png

/usr/bin/gm convert portrait.png -resize 360x640\! portrait360x640.png
/usr/bin/gm convert landscape.png -resize 640x360\! landscape640x360.png
```

## Add To Manifest

```
  "screenshots": [
    {
      "src": "portrait360x640.png",
      "sizes": "360x640",
      "type": "image/png"
    },
    {
      "src": "landscape640x360.png",
      "sizes": "640x360",
      "type": "image/png"
    }
  ]
```

## Code History

Code is base on:

- [Dropdown - Web Component Essentials](https://youtu.be/mcSnBFT52aE)
