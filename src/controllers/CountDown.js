
export class CountDown {
    constructor(year, month, day, hour, minutes, seconds){
      
        // Format
        // FRI Sep 10 2021 00:00:01 GMT-0400 (Eastern Daylight Time)
        this._endDate = new Date(year,month,day,hour,minutes,seconds);
        this._now = new Date();
    }   

    // Format
    // FRI Sep 10 2021 00:00:01 GMT-0400 (Eastern Daylight Time)        
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
        output['days'] = this._endDate.getDate();
        output['hours'] = this._endDate.getHours();
        output['minutes'] = this._endDate.getMinutes();
        output['seconds'] = this._endDate.getSeconds();

        return output;
    }

    printToConsole(){
        console.log(`\nNow: \n${this._now}\n`);
        let theDay = this.formatDate();

        console.log(`\nEnd Date: `);
        console.log(`${this._endDate}`)
        console.log(`Year: ${theDay['year']}`);
        console.log(`Month: ${theDay['month']}`);
        console.log(`Days: ${theDay['days']}`);
        console.log(`Hours: ${this._endDate.getHours()}`);
        console.log(`Minutes: ${this._endDate.getMinutes()}`);
        console.log(`Seconds: ${this._endDate.getSeconds()}`);
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

        if (seconds > 59 ){
            console.log(`ERROR!!\n\nCountdown.js: seconds = ${seconds}`);

            console.log(`UTC difference: ${UTCdifference} milliseconds`);
            console.log(`Years: ${years}`);
            console.log(`Days: ${days}`);
            console.log(`Hours: ${hours}`);
            console.log(`Minutes: ${minutes}`);
            console.log(`Seconds: ${seconds}`);
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