const { data } = require("jquery");


class CountDown {
    constructor(year, month, day, hour, minutes, seconds){
      
        this.graduation = new Date(year,month,day,hour,minutes,seconds);
    }   
    // setters
    setYear(year){
        this.graduation.setFullYear(year);
    }

    setMonth(month){
        this.graduation.setMonth(month);
    }

    setDay(day){
        this.graduation(day);
    }

    setHour(hour){
        this.graduation(hour);
    }

    setMinutes(minutes){
        this.graduation.setMinutes(minutes);
    }

    setSeconds(seconds){
        this.graduation.setSeconds(seconds);
    }

    // getters
    getDate(){
        return this.graduation.toString();
    }

    getCurrentDate(){
        var output = {};
        var now = new Date();        
        return now;
    }

    // formatting
    formatDate(date){
        var output = {};
        output['year'] = date.getFullYear();
        output['month'] = date.getMonth();
        output['days'] = date.getDay();
        output['hours'] = date.getHours();
        output['minutes'] = date.getMinutes();
        output['seconds'] = date.getSeconds();

        return output;
    }

    // calculating
    calculateRemainingDays(){
        var now = Date.now();
        var theBigDay = Date.parse(this.graduation);
        var UTCdifference = (theBigDay > now) ? theBigDay - now : 0;
        
        
        // milliseconds to days
        var years = UTCdifference / 1000 / 60 / 60 / 24 / 365;

        if ( years >= 1){
            var days = years % Math.floor(years) * 365;
        } else {
            days = UTCdifference / 1000 / 60 / 60 / 24;
        }

        if (days >= 1){
            var hours = days % Math.floor(days) * 24;
        } else if (days > 0 && days < 1){
            hours = UTCdifference / 1000 / 60 / 60
        }

        if (hours >= 1){
            var minutes = hours % Math.floor(hours) * 60;
        } else if (hours > 0 && hours < 1){
            minutes = UTCdifference / 1000 / 60;
        }

        if (minutes >= 1){
            var seconds = minutes % Math.floor(minutes) * 60;
        } else if (minutes > 0 && minutes < 1){
            seconds = UTCdifference / 1000;
        }


        var remaining = {};
        remaining['years'] = Math.floor(years);
        remaining['days'] = Math.floor(days);
        remaining['hours'] = Math.floor(hours);
        remaining['minutes'] = Math.floor(minutes);
        remaining['seconds'] = Math.floor(seconds);
        return remaining;
    }
}

// export module
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')){
    module.exports = CountDown;
}

