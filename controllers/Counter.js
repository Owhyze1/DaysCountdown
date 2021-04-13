var countdown = require('./CountDown.js');


class Counter{
    constructor(){         
        this._dayElement = document.getElementById("days");
        this._hourElement = document.getElementById("hours");
        this._minutesElement = document.getElementById("minutes");
        this._secondsElement = document.getElementsByName("seconds");
    }

    displayValues(timeLeft){
        this._dayElement.innerHTML = timeLeft['days'];
        this._hourElement.innerHTML = timeLeft['hours'];
        this._minutesElement.innerHTML = timeLeft['minutes'];
        this._secondsElement.innerHTML = timeLeft['seconds'];
    }

    decrementValues(){
        
    }
}