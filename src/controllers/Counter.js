import {CountDown} from './CountDown.js';


// class Counter{
//     constructor(timeLeft){          

//         this._timeLeft = timeLeft;

//         this._dayElement = document.getElementById("days");
//         this._hourElement = document.getElementById("hours");
//         this._minutesElement = document.getElementById("minutes");
//         this._secondsElement = document.getElementsByName("seconds");

//         // var page = document.getElementsByTagName("body");
//     }

//     displayValues(){
//         this._dayElement.innerHTML = this._timeLeft['days'];
//         this._hourElement.innerHTML = this._timeLeft['hours'];
//         this._minutesElement.innerHTML = this._timeLeft['minutes'];
//         this._secondsElement.innerHTML = this._timeLeft['seconds'];

//         // display starting values
//         console.log(`Values Displayed`);
//         console.log(`\tDays = ${this._timeLeft['days']}`);
//         console.log(`\tHours = ${this._timeLeft['hours']}`);
//         console.log(`\tMinutes = ${this._timeLeft['minutes']}`);
//         console.log(`\tSeconds = ${this._timeLeft['seconds']}\n`);
//     }

//     decrementValues(){
//         // get values
//         var sec = this._secondsElement.innerHTML;
//         var min = this._minutesElement.innerHTML;
//         var hour = this._hourElement.innerHTML;
//         var day = this._dayElement.innerHTML;
//         console.log(`Beginning decrement`);
//         // ensure that no value is less than 0 or greater than 59
//         // for minutes and seconds, 0 should be expressed as 00
//         // when day, hours, min, sec all equal 0, stop interval
//         setInterval(function(day,hour,min,sec){
//             console.log(`setInterval function`);

//             if (sec > 0 ){                
//                 if (sec - 1 === 0 ){
//                     console.log(`\tSeconds set to 00`);
//                     this._secondsElement.innerHTML = "00";
//                 } else {                
//                     sec--
//                     this._secondsElement.innerHTML = sec;
//                     console.log(`\tSeconds = sec`);
//                 }
//             } 
//             else if ( sec === 0 || sec === '00'){
//                 sec = 60;
//                 sec--;
//                 this._secondsElements.innerHTML = sec;
//                 if (min === 0 || min === '00'){
//                     min = 60;
//                 }
//                 min--;
//                 this._minutesElement.innerHTML = min;  
//                 console.log(`\tMinutes: ${min}, seconds = ${sec}`);
//             }
//             this._hourElement.innerHTML = hour;
//             this._dayElement.innerHTML = day;
//         }, 1000);
//         console.log(`End of decrementValues() function`);
//     }
// }

function decrementValues(timeLeft){
    var day = timeLeft['days'];
    var hour = timeLeft['hours'];
    var min = timeLeft['minutes'];
    var sec = timeLeft['seconds'];

    var dayElem = document.getElementById('days');
    var hourElem = document.getElementById('hours');
    var minElem = document.getElementById('minutes');
    var secElem = document.getElementById('seconds');

    // display remaining time
    dayElem.innerHTML = (days === 0) ? '00' : day;
    hourElem.innerHTML = (hour === 0) ? '00' : hour;
    minElem.innerHTML = (min === 0) ? '00' : min;
    secElem.innerHTML = (sec === 0) ? '00' : sec;

    // start countdown and display
    var timeInterval = 1000; // milliseconds
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
                min = '0' + min;
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

        console.log(`Bottom of setInterval`);
    }, timeInterval);

}


export function run(){
    $().ready(function(){
        var theBigDay = new CountDown(2021,8,10,0,0,1);
        var daysLeft = theBigDay.calculateRemainingDays();
    
        // var count = new Counter(daysLeft);
        
        decrementValues(daysLeft);
    });   
}
