let timer;
        let minutes = 10;
        let seconds = 0;

        function startTimer() {
            timer = setInterval(updateTimer, 1000);
            console.log("Timer started.");
        }

        function stopTimer() {
            clearInterval(timer);
            console.log("Timer stopped.");
        }

        function updateTimer() {
            if (seconds === 0 && minutes === 0) {
                clearInterval(timer);
                console.log("Time's up!");
            } else if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            console.log("Minutes:", padZero(minutes), "Seconds:", padZero(seconds));
        }

        function padZero(num) {
            return num < 10 ? "0" + num : num;
        }

        
        function handleStart() {
            startTimer();
        }

        function handleStop() {
            stopTimer();
        }

        handleStart();