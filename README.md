# Techno Wizard

## Techno4 CLI Options

Techno4 app created with following options:

```
{
  "cwd": "/Users/bitholdex/Documents/techno4/wizardfront.techno4.online",
  "type": [
    "cordova"
  ],
  "name": "Techno Wizard",
  "framework": "core",
  "template": "tabs",
  "bundler": "vite",
  "cssPreProcessor": false,
  "theming": {
    "customColor": true,
    "color": "#37ac8b",
    "darkTheme": true,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false,
  "pkg": "io.techno4.myapp",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android",
      "electron",
      "osx"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-device",
      "cordova-plugin-inappbrowser",
      "cordova-plugin-file",
      "cordova-plugin-media",
      "cordova-plugin-safariviewcontroller"
    ]
  }
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-cordova` - build cordova app
* 📱 `build-cordova-ios` - build cordova iOS app
* 📱 `cordova-ios` - run dev build cordova iOS app
* 📱 `build-cordova-android` - build cordova Android app
* 📱 `cordova-android` - run dev build cordova Android app
* 🖥 `build-cordova-electron` - build cordova Electron app
* 🖥 `build-cordova-osx` - build cordova macOS app
* 🖥 `cordova-electron` - run dev build cordova Electron app

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.



## Cordova Electron

There is also cordova Electron platform installed. To learn more about it and Electron check this guides:

* [Cordova Electron Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/electron/index.html)
* [Official Electron Documentation](https://electronjs.org/docs)

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
techno4 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
techno4 assets --ui
```



## Documentation & Resources

* [Techno4 Core Documentation](https://techno4.online)



* [Techno4 Icons Reference](https://techno4.online)
* [Community Forum](https://forum.techno4.online)