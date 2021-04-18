import {CountDown} from './CountDown.js';


class Counter{
    constructor(timeLeft){          

        this._dayElement = document.getElementById("days");
        this._hourElement = document.getElementById("hours");
        this._minutesElement = document.getElementById("minutes");
        this._secondsElement = document.getElementsByName("seconds");

        var page = document.getElementsByTagName("body");
    }

    displayValues(){
        this._dayElement.innerHTML = this._timeLeft['days'];
        this._hourElement.innerHTML = this._timeLeft['hours'];
        this._minutesElement.innerHTML = this._timeLeft['minutes'];
        this._secondsElement.innerHTML = this._timeLeft['seconds'];
    }

    decrementValues(){
        // get values
        var sec = this._secondsElement.innerHTML;
        var min = this._minutesElement.innerHTML;
        var hour = this._hourElement.innerHTML;
        var day = this._dayElement.innerHTML;
        
        // ensure that no value is less than 0 or greater than 59
        // for minutes and seconds, 0 should be expressed as 00
        // when day, hours, min, sec all equal 0, stop interval
        setInterval(function(day,hour,min,sec){
            
            if (sec > 0 ){                
                if (sec - 1 === 0 ){
                    this._secondsElement.innerHTML = "00";
                } else {
                    this._secondsElement.innerHTML = --sec;
                }
            } 
            else if ( sec === 0 || sec === '00'){
                sec = 60;
                this._secondsElements.innerHTML = --sec;
                if (min === 0 || min === '00'){
                    min = 60;
                }
                this._minutesElement.innerHTML = --min;  
            }
        }, 1000);

    }

    after60seconds(sec){}

    after60minutes(min){}

    after24hours(hour){}
}


export function run(){
    $().ready(function(){
        var theBigDay = new CountDown(2021,8,10,0,0,1);
        var daysLeft = theBigDay.calculateRemainingDays();
    
        $('#days').text('xx');
        // var count = new Counter(daysLeft);
        
        // count.displayValues();
        // count.decrementValues();
    });   
}
