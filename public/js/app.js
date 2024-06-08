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

        // Functionality to start and stop the timer
        function handleStart() {
            startTimer();
        }

        function handleStop() {
            stopTimer();
        }

        // Node.js doesn't have a DOM, so we can't attach event listeners to HTML elements.
        // Instead, we'll define functions to handle start and stop actions and call them directly.
        // For example, you can call handleStart() to start the timer.

        // Call the handleStart function to start the timer when the script is executed
        handleStart();