document.addEventListener('DOMContentLoaded', function() {
    console.log('JS Loaded!');

    /**
     * Steps to work
     * 1 display defaul time of 00:00 inside h1 timer tag
     * 2 when start is click an event should fire
     * 3 the callback should increment the time by 1 every sec.
     * 
     * research getting clock to change each second
     * method setInterval
     * 
     * add eventListener on start button that makes time on screen increment eaxch second
     * 
     * Bonus
     * 1 add event listener to pause time
     * 2 add event listener to reset time
     * 3 convert to min and seconds
     * 
     */

    //Global Variables
    let time = 0;
    let timeEl = document.querySelector('.timer');
    timeEl.innerHTML = time;

    let start = document.querySelector('.start');
    console.log(start);

    let stop = document.querySelector('.stop');
    console.log(stop);

    let reSet = document.querySelector('.reSet');
    console.log(reSet);

    let runTime;

    //Functions
    function startTimer() {
        start.disabled = true;
        runTime = setInterval(function() {
            time++;
            timeEl.innerHTML = time;
        }, 1000)
    };

    start.addEventListener('click', startTimer);

    function stopTimer() {
        start.disabled = false;
        clearInterval(runTime);
    };

    stop.addEventListener('click', stopTimer)

    function resetTimer() {
        time = 0
        timeEl.innerHTML = time;
    };

    reSet.addEventListener('click', resetTimer)

})