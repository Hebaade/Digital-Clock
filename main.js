window.addEventListener('load',calculateTime)
function calculateTime(){
    var date=new Date();
    var hourNow=date.getHours()
    var minNow=date.getMinutes()
    var dateNow=date.getDay()
    var pmam=hourNow>= 12?"PM":"AM";
    var dayNames=["sun", "mon", "tue", "wed", "thu","fri", "sat"];
    hourNow=hourNow % 12;
    hourNow=hourNow<10?'0'+hourNow:hourNow;
    minNow=minNow<10?'0'+minNow:minNow;
    let min=document.getElementById("min");
    min.innerHTML=minNow;
    let hour=document.getElementById("hour")
    hour.innerHTML=hourNow;
    let day=document.getElementById("day")
    day.innerHTML=dayNames[dateNow].toUpperCase()
    let aOrP=document.getElementById("aOrP")
    aOrP.innerHTML=ampm
    setTimeout(calculateTime,200)
}