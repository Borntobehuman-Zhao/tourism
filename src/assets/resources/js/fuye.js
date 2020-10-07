
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
//js实现tab选项卡交互
//方法一：
var aList=document.getElementsByClassName("list_nav"),
    aTab=document.getElementsByClassName("tab_nav"),
    index=0; //用来存储上一次的值
for(var i=0;i<aList.length;i++){
    //闭包加函数自执行
    (function(i){
        aList[i].onclick=function(){
            aList[index].classList.remove("active");
            aTab[index].classList.remove("on");
            index=i;
            aList[index].classList.add("active");
            aTab[index].classList.add("on");
        }
    })(i);
}
//方法二：
var aList=document.getElementsByClassName("list_nav"),
    aTab=document.getElementsByClassName("tab_nav");
for(var i=0;i<aList.length;i++){
    aList[i].index=i;
    //清除所有li的class
    aList[i].onclick=function(){
        for(var i=0;i<aList.length;i++){
            aList[i].classList.remove("active");
            aTab[i].classList.remove("on");
        }
        //给当前li添加样式
        aList[this.index].classList.add("active");
        aTab[this.index].classList.add("on");
    }
}