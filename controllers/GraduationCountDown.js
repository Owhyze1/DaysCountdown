const { data } = require("jquery");


class GraduationTimer {
    constructor(){
        // September 10, 2021 00:01:00 EST
        var year = 2021;
        var month = 8; 
        var day = 10;
        var hour = 0;
        var minutes = 0;
        var seconds = 1;

        this.graduation = new Date();
        this.graduation.setFullYear(year);
        this.graduation.setMonth(month);
        this.graduation.setDate(day);
        this.graduation.setHours(hour);
        this.graduation.setMinutes(minutes);
        this.graduation.setSeconds(seconds);
    }   
    
    getGraduationDate(){
        return this.graduation;
    }

    getCurrentDate(){
        var output = {};
        var now = new Date();        
        return now;
    }

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

    calculateRemainingDays(){
        var now = Date.now();
        var theBigDay = Date.parse(this.graduation);
        var UTCdifference = (theBigDay > now) ? theBigDay - now : 0;
        
        
        // milliseconds to days
        var days = UTCdifference / 1000 / 60 / 60 / 24;

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
        remaining['days'] = Math.floor(days);
        remaining['hours'] = Math.floor(hours);
        remaining['minutes'] = Math.floor(minutes);
        remaining['seconds'] = Math.floor(seconds);
        return remaining;
    }
}

var gradDate = new GraduationTimer();
var remaining = gradDate.calculateRemainingDays();

console.log();
console.log('Today = ' + gradDate.getCurrentDate());
console.log('Graduation = ' + gradDate.getGraduationDate());
console.log();
console.log(`Remaining time until ${gradDate.graduation.toString()}`);
console.log(`days = ${remaining.days}\nhours = ${remaining.hours}`);
console.log(`minutes = ${remaining.minutes}\nseconds = ${remaining.seconds}`);
console.log();
