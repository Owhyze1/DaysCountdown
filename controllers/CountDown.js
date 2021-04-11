class countDown{

    constructor(year, month, day, hour, minutes, seconds){
        this.graduation = new Date();
        this.graduation.setFullYear(year);
        this.graduation.setMonth(month);
        this.graduation.setDate(day);
        this.graduation.setHours(hour);
        this.graduation.setMinutes(minutes);
        this.graduation.setSeconds(seconds);
    }

}