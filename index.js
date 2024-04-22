let text = document.querySelector("textarea")
let start = document.querySelector("button")
let speed = document.querySelector("#speed")

let started = false
let wpm = 0
let startedM = false

let timeout

start.addEventListener("click", () => {
    if(started)
    return
    if(startedM){
        text.disabled = true
        startedM = false
        text.value = ""
        clearTimeout(timeout)
    }
    speed.innerHTML = "/"
    text.value = ""
    wpm = 0
    started = true
    text.placeholder = "3"
    setTimeout(() => {
        text.placeholder = "2"
    }, 1000)
    setTimeout(() => {
        text.placeholder = "1"
    }, 2000)
    setTimeout(() => {
        text.placeholder = "Type!"
        text.disabled = false
        text.focus()
        started = false
        timeout = setTimeout(() => {
            wpm = text.value.length
            text.disabled = true
            speed.innerHTML = wpm
            startedM = false
        }, 60000)
        startedM = true
    }, 3000)
})