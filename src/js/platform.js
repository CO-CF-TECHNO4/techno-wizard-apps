import debuggero from "./debuggero.js"
import store from "./store"

const platform = {
    scanner: {
        cameraConfiguration: {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: false, // Android, save scan history (default false)
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "QR_CODE,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: false, // iOS
            disableSuccessBeep: false // iOS and Android
        },

        scan: function (promt, successCallBack, closeCallBack) {
            cordova.plugins.barcodeScanner.scan(
                // Scaned or closed
                (result) => result.cancelled ? this.scanClosed() : successCallBack(result),
                // Error
                (error) => this.scanError(error),
                // Camera props
                { ...this.cameraConfiguration, promt: promt }
            )
        },

        scanClosed: function () {
            debuggero.log(`Login scanner was closed`)
        },

        scanError: function (error) {
            alert("Помилка сканування: " + error);
            debuggero.errr(`Сamera scan result error :: ${JSON.stringify(error)}`)
        },
    }
}

export default platform