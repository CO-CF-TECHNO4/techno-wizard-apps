import debuggero from './debuggero.js'
import store from './store.js'

let userPublicAddress = localStorage.getItem("userKey")
let userSecret = localStorage.getItem("userSecret")

let wizardrobot = {
    login: async function () {
        userPublicAddress = localStorage.getItem("userKey")
        userSecret = localStorage.getItem("userSecret")

        let headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded')

        let body = new URLSearchParams()
        body.append("apiKey", window.apiKEY)
        body.append("userPublicAddress", userPublicAddress)
        body.append("userSecret", userSecret)

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            credentials: 'same-origin'
        };

        await fetch("https://wizard.techno4.online/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.code === 200) {
                    loginSuccess(result)
                } else {
                    loginFail(result)
                }
            })
            .catch(error => debuggero.errr(`Login request error from Fetch :: ${error}`));
    },

    getFriends: async function () {
        let headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded')

        let body = new URLSearchParams()
        body.append("apiKey", window.apiKEY)
        body.append("userPublicAddress", userPublicAddress)
        body.append("userSecret", userSecret)

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            credentials: 'same-origin'
        };

        await fetch("https://wizard.techno4.online/friendship", requestOptions)
            .then(response => response.json())
            .then(result => store.dispatch('addFrienship', result))
            .catch(error => debuggero.errr(`Fail to fetch friendships :: ${error}`));

    },

    addFriend: async function (friendKey) {
        console.log(friendKey)
        let headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded')

        let body = new URLSearchParams()
        body.append("apiKey", window.apiKEY)
        body.append("userPublicAddress", userPublicAddress)
        body.append("userSecret", userSecret)
        body.append("friendPublicAddress", friendKey)

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            credentials: 'same-origin'
        };

        await fetch("https://wizard.techno4.online/addfriend", requestOptions)
            .then(response => response.json())
            .then(result => {
                // Notification open
                debuggero.log(JSON.stringify(result))
            })
            .catch(error => debuggero.errr(`Add friend request error:: ${error}`));

    },

    getMessages: async function () {
        let headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded')

        let body = new URLSearchParams()
        body.append("apiKey", window.apiKEY)
        body.append("userPublicAddress", userPublicAddress)
        body.append("userSecret", userSecret)

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            credentials: 'same-origin'
        };

        await fetch("https://wizard.techno4.online/getmessages", requestOptions)
            .then(response => response.json())
            .then(result => store.dispatch('addMessages', result))
            .catch(error => debuggero(`Messages request error :: ${error}`, "errr"));

    },

    sendMessages: async function (friendKey, message) {
        let headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded')

        let body = new URLSearchParams()
        body.append("apiKey", window.apiKEY)
        body.append("userPublicAddress", userPublicAddress)
        body.append("userSecret", userSecret)
        body.append("friendPublicAddress", friendKey)
        body.append("messageData", message)

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            credentials: 'same-origin'
        };

        await fetch("https://wizard.techno4.online/sendmessage", requestOptions)
            .then(response => response.json())
            .then(result => {
                // Notification open
                debuggero.log(JSON.stringify(result))
            })
            .catch(error => debuggero.errr(`Login request error from Fetch :: ${error}`));

    },

    createProj: function (fileType, fileName, payload) {
        let data = `apiKey=${window.apiKEY}&userPublicAddress=${localStorage.getItem("savedUserPublicAddress")}&userSecret=${localStorage.getItem("savedUserSecret")}&payload=${payload}&fileType=${fileType}&fileName=${fileName}&status=active&basedOnID=`
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open("POST", "https://wizard.techno4.online/create");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data)
    }
}

export default wizardrobot