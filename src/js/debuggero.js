import $, { data } from 'dom64';

let debugMode = true;
let debugModeHtml = "html";
let debugModeIndex;
debugModeIndex = 0

let debuggero = {
    logToHTML: function (message, type) {
        let messageDOM = `<li>
            <div class="item-inner"><div class="item-title-row">
                <div class="item-title">[<span class="logcat-index">${debugModeIndex}</span>][<span class="logcat-type-${type}">${type}</span>]</div>
                <div class="item-after">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
            </div>
            <div class="item-text">${message}</div></div></li>`

        $("#logcat-output").append(messageDOM)
    },
    log: function (mssg) {
        if (debugMode == true) {
            debugModeIndex++
            if (debugModeHtml === "html") {
                this.logToHTML(mssg, "MSSG")
            }
            console.log(`[${debugModeIndex}][${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]::[MSSG] :: ${mssg}`)
        }
        else if (debugMode == false && debugModeIndex == 0) {
            console.log(`[${debugModeIndex}][${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]::[SPACIAL] :: Debug mode disabled but messages detected.`)
        }
    },
    errr: function (mssg) {
        if (debugMode == true) {
            debugModeIndex++
            if (debugModeHtml === "html") {
                this.logToHTML(mssg, "ERRR")
            }
            console.error(`[${debugModeIndex}][${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]::[ERRR] :: ${mssg}`)
        }
        else if (debugMode == false && debugModeIndex == 0) {
            console.error(`[${debugModeIndex}][${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]::[SPACIAL] :: Debug mode disabled but messages detected.`)
        }
    },
    warn: function (mssg) {
        if (debugMode == true) {
            debugModeIndex++
            if (debugModeHtml === "html", "WARN") {
                this.logToHTML(mssg)
            }
            console.warn(`[${debugModeIndex}][${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]::[WARN] :: ${mssg}`)
        }
        else if (debugMode == false && debugModeIndex == 0) {
            console.warn(`[${debugModeIndex}][${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]::[SPACIAL] :: Debug mode disabled but messages detected.`)
        }
    }
}
export default debuggero;