import {CountDown} from './CountDown.js';

var decrement = function decrementValues(timeLeft){
    var day = timeLeft['days'];
    var hour = timeLeft['hours'];
    var min = timeLeft['minutes'];
    var sec = timeLeft['seconds'];

    var dayElem = document.getElementById('days');
    var hourElem = document.getElementById('hours');
    var minElem = document.getElementById('minutes');
    var secElem = document.getElementById('seconds');

    // display remaining time
    dayElem.innerHTML = day;
    hourElem.innerHTML = hour;
    minElem.innerHTML = min;
    secElem.innerHTML = sec;

    // start countdown and display
    var timeInterval = 990; 
    setInterval(function(){
        // decrement sec
        // if sec < 0, sec = 59            
       --sec;
       if (sec < 0){
           sec = 59;
       } else if (sec > 59){
           console.log(`seconds = ${sec}`);
       }
        secElem.innerHTML = sec;

        // if sec === 59, decrement minute
            // if min < 0, min = 59
        if ( sec === 59){
            --min;
            if (min < 0){
                min = 59;
            } 
        }
        minElem.innerHTML = min;

        // if min === 59, decrement hour
            // if hour < 0, hour = 23 
        if (min === 59 && sec === 59){
            --hour;
            if (hour < 0){
                hour = 23;
            } 
        }
        hourElem.innerHTML = hour;

        // if hour = 23, min = 59, sec = 59, decrement day
            // if day < 0, day = 0
        if (hour === 23 && min === 59 && sec === 59){
            --day;
            if (day < 0 ){
                day = '00';
            } 
        }
        dayElem.innerHTML = day;

        // stop interval when day = 0, hour = 0, min = 0, sec = 0
        if (day === 0 && hour === 0 && min === 0 && sec === 0){
            stopTimer();
        }

    }, timeInterval);
}

function stopTimer(){
    clearInterval(decrement);
}


export function run(){
    $( initialize );
    
    function initialize(){
        var theBigDay = new CountDown(2021,8,10,0,0,1);
        var daysLeft = theBigDay.calculateRemainingDays();

        theBigDay.printToConsole();
        
        decrement(daysLeft);
    };   
}
