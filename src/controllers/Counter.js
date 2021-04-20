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
    dayElem.innerHTML = (days < 10) ? '0' + hour : day;
    hourElem.innerHTML = (hour < 10) ? '0' + hour : hour;
    minElem.innerHTML = (min < 10) ? '0' + min : min;
    secElem.innerHTML = (sec < 10) ? '0' + sec : sec;

    // start countdown and display
    var timeInterval = 990; 
    setInterval(function(){
        console.log(`setInterval function started`);
        // decrement sec
        // if sec < 10, use leading zero
        // if sec < 0, sec = 59            
       --sec;
       if (sec < 0){
           sec = 59;
       } else if ( sec < 10 ){
           sec = '0' + sec;
       }
        secElem.innerHTML = sec;

        // if sec === 59, decrement minute
            // if min < 10, add leading zero
            // if min < 0, min = 59
        if ( sec === 59){
            --min;
            if (min < 0){
                min = 59;
            } else if (min < 10){
                min = '0' + min;
            }
        }
        minElem.innerHTML = min;

        // if min === 59, decrement hour
            // if hour < 0, hour = 23 
            // if hour < 10, add leading zero
        if (min === 59 && sec === 59){
            --hour;
            if (hour < 0){
                hour = 23;
            } else if (hour < 10){
                hour = '0' + hour;
            }
        }
        hourElem.innerHTML = hour;

        // if hour = 23, min = 59, sec = 59, decrement day
            // if day < 0, day = 0
            // if day < 10, add leading zero
        if (hour === 23 && min === 59 && sec === 59){
            --day;
            if (day < 0 ){
                day = '00';
            } else if (day < 10){
                day = '0' + day;
            }
        }
        dayElem.innerHTML = day;

        // stop interval when day = 0, hour = 0, min = 0, sec = 0
        if (day === 0 && hour === 0 && min === 0 && sec === 0){
            stopTimer();
        }

        console.log(`Bottom of setInterval`);
    }, timeInterval);
}

function stopTimer(){
    clearInterval(decrement);
}


export function run(){
    $().ready(function(){
        var theBigDay = new CountDown(2021,8,10,0,0,1);
        var daysLeft = theBigDay.calculateRemainingDays();

        
    
        // var count = new Counter(daysLeft);
        
        decrement(daysLeft);
    });   
}
