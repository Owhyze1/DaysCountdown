
export class CountDown {
    constructor(year, month, day, hour, minutes, seconds){
      
        this._endDate = new Date(year,month,day,hour,minutes,seconds);
        this._now = new Date();
    }   
    // setters
    setYear(year){
        this._endDate.setFullYear(year);
    }

    setMonth(month){
        this._endDate.setMonth(month);
    }

    setDay(day){
        this._endDate(day);
    }

    setHour(hour){
        this._endDate(hour);
    }

    setMinutes(minutes){
        this._endDate.setMinutes(minutes);
    }

    setSeconds(seconds){
        this._endDate.setSeconds(seconds);
    }

    // getters
    getEndDate(){
        return this._endDate;
    }

    /**
     * 
     * @returns string representation of Date object of current time
     */
    getCurrentDate(){
        return this._now;
    }

    // formatting
    formatDate(){
        var output = {};
        output['year'] = this._endDate.getFullYear();
        output['month'] = this._endDate.getMonth();
        output['days'] = this._endDate.getDay();
        output['hours'] = this._endDate.getHours();
        output['minutes'] = this._endDate.getMinutes();
        output['seconds'] = this._endDate.getSeconds();

        return output;
    }

    /**
     * Calculates remaining time between now and end date
     * @returns remaining object containing years, days, hours, minutes, seconds
     */
    calculateRemainingDays(){
        var now = Date.parse(this._now);
        var theBigDay = Date.parse(this._endDate);
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
// if (typeof module !== 'undefined' && module.hasOwnProperty('exports')){
//     module.exports = CountDown;
// }

// var year = 2021;
// var month = 8;
// var day = 10;
// var hour = 0;
// var minutes = 0;
// var seconds = 1;
// date = new CountDown(year,month,day,hour,minutes,seconds);

// var theDay = date.getEndDate();//.toString();
// console.log(theDay);
            

