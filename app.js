const timeEL = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime(){
    // console.log(new Date())
    const time = new Date()
    const Hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEL.innerHTML = `${Hours}:
    ${minutes<10 ? `0${minutes}`: minutes}:
    ${seconds<10 ? `0${seconds}`: seconds}`
}
btnToggle.addEventListener("click",(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "โหมดหลางคืน"
    }else{
        html.classList.add("dark")
        e.target.innerHTML = "โหมดกลางวัน"
    }
})

setTime()
setInterval(setTime,1000)