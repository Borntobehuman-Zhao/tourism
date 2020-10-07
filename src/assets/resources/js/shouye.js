
function next() {
    index++
    if (index === 4) index = 0
    clearInterval(timer)
    setStyle()
    run()
}
function prev() {
    index--
    if (index === -1) index = 3
    clearInterval(timer)
    setStyle()
    run()
}
let arr = [
    "resources/picter/lunbo1.jfif",
    "resources/picter/lunbo2.jfif",
    "resources/picter/lunbo3.jfif",
    "resources/picter/lunbo4.jpg",
]
var demo1 = document.getElementById('demo1')
let indexes = document.getElementsByClassName('indexes')[0].children
let timer = -1
for (let i = 0; i < indexes.length; i++) {
    indexes[i].onmouseenter = function () {
        index = i
        clearInterval(timer)
        setStyle()
    }
    indexes[i].onmouseleave = function () {
        run()
    }
}
var index = 0
function run() {
    timer = setInterval(() => {
        index++
        if (index === 4) index = 0
        setStyle()
    }, 1000);
}
function setStyle() {
    demo1.src = arr[index]
    let active = document.getElementsByClassName('active')[0]
    active.classList.remove('active')
    indexes[index].classList.add("active")
}
run()