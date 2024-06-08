const value = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");

startBtn.addEventListener('click', function(){
    let minute = 10;  
    let sec = 0;    
    const timer = setInterval(function(){
        if (sec < 0) {
            minute--;
            sec = 59;
        }
        if (sec <= 9) {
            sec = "0" + sec;
        }
        if (sec == 0 && minute == 0) {
            clearInterval(timer);  
            alert("DONE!");
            location.reload();
        }
        value.innerHTML = minute + ":" + sec;
        sec--;
    }, 1000);
});

resetBtn.addEventListener('click', function(){
    location.reload();
});