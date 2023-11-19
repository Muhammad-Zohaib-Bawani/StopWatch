var milliseconds =0;
var seconds =0;
var minutes =0;

var msec = document.getElementById('msec');
var sec = document.getElementById('sec');
var min = document.getElementById('min');

var interval;


function start () {

interval = setInterval(function(){
    milliseconds++
     msec.innerHTML = milliseconds; 
     if(milliseconds >= 100){
        seconds++
        sec.innerHTML = (seconds<10?"0":"") + seconds;
        milliseconds = 0 
     }
     else if(seconds >= 60){
        minutes++
        min.innerHTML = (minutes<10?"0":"") + minutes;
        seconds = 0
     }
},10)
document.getElementById('start').disabled = true
}

function stop() {
    clearInterval(interval)
    document.getElementById('start').disabled = false

}

function reset(){
    minutes = "00 "
    milliseconds ="00" 
    seconds = "00 "
    min.innerHTML = minutes
    sec.innerHTML = seconds
    msec.innerHTML = milliseconds
    clearInterval(interval)
}