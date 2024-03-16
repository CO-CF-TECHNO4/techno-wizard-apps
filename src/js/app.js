import $ from 'dom64'
import Techno4, { getDevice } from 'techno4/bundle'
import debuggero from './debuggero.js'

import 'techno4/css/bundle'
import '../css/icons.css'
import '../css/app.css'

import cordovaApp from './cordova-app.js'
import routes from './routes.js'
import store from './store.js'
import wizardrobot from './wizardrobot.js'

import App from '../app.t4'

window.apiKEY = '8851-2857-0393-7626-2831'
window.userPublicAddress = ""
window.userSecret = ""

var device = getDevice()
var app = new Techno4({
  name: 'Techno Wizard',
  theme: 'ios',
  el: '#app',
  component: App,
  id: 'wizardfront.techno4.online',
  store: store,
  routes: routes,
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var t4 = this;
      if (t4.device.cordova) {
        cordovaApp.init(t4);
      }
      if (localStorage.getItem("loggedIn") === "true") {
        wizardrobot.login()
      }
      else {
        app.loginScreen.open("#login-screen")
      }
    },
  },
})

window.loginSuccess = function (userData) {
  store.dispatch('addUser', userData)
  localStorage.setItem("loggedIn", "true")
  app.loginScreen.close("#login-screen")
}

window.loginFail = function (error) {
  logout()
  debuggero.errr(JSON.stringify(error))
}

window.logout = function () {
  app.loginScreen.open("#login-screen")
  localStorage.removeItem("userSecret")
  localStorage.removeItem("userKey")
  localStorage.removeItem("loggedIn")
}