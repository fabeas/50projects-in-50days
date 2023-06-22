const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages= [
    'Aşk Bu Kızılötesi',
    'Poşet',
    'Yaralı Müzesi',
    'Hareket edemem',
    'Binlerce Dansöz Var'
]
 
const types = ["info", "success", "error"] 

button.addEventListener("click", () => createNotification (

))

function createNotification(message = null, type = null) { 
    const notif =document.createElement("div")
    notif.classList.add("toast")
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessages()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove ( )
    }, 2500)
}

function getRandomMessages () {
    return messages [Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types [Math.floor(Math.random() * messages.length)]
}