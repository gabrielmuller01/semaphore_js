const turnRed = document.getElementById('turnred')
const turnYellow = document.getElementById('turnyellow')
const turnGreen = document.getElementById('turngreen')
const blink = document.getElementById('blink')
const stopblink = document.getElementById('stop')
var interval;

function semafred() {
    semaphore.src = '/img/red.png'
}

function semafyellow() {
    semaphore.src = '/img/yellow.png'
}

function semafgreen() {
    semaphore.src = '/img/green.png'
}

function semafblink() {

    var cont = -1

    interval = setInterval(start, 1000)

    stopblink.disabled  = false

        function start() {

            cont = cont + 1

            if (cont > 2) cont = 0

            if (cont === 0) semafred()
            if (cont === 1) semafyellow()
            if (cont === 2) semafgreen()
        }
}

function semafstop(){

    clearInterval(interval);

    semaphore.src = '/img/off.png'

    stopblink.disabled  = true

}

turnRed.addEventListener('click', semafred)
turnYellow.addEventListener('click', semafyellow)
turnGreen.addEventListener('click', semafgreen)
blink.addEventListener('click', semafblink)
stopblink.addEventListener('click', semafstop)