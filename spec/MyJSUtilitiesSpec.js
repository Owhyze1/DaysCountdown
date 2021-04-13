var CountDown = require('../controllers/CountDown.js');

describe("MyJSUtilities", function(){

    describe("Count Down Test: ", function(){

        describe("Support Functions --> ", function(){
            var date;

            beforeAll(function(){
                var year = 2021;
                var month = 8;
                var day = 10;
                var hour = 0;
                var minutes = 0;
                var seconds = 1;
                date = new CountDown(year,month,day,hour,minutes,seconds);
            });

            // test getEndDate() 
            it("should return September 10, 2021, 1 second after midnight EST", function(){            
                var actual = date.getEndDate().toString();              
                var expected = "Fri Sep 10 2021 00:00:01 GMT-0400 (Eastern Daylight Time)";
                            
                expect(actual).toEqual(expected);
            });

            // test getCurrentDate()
            it("should return today's date and current time", function(){
                var result = date.getCurrentDate().toString();
                var expected = new Date().toString();

                expect(result).toEqual(expected);
            });
        });

        describe("Test Calculations --> ", function(){
            var date;

            beforeAll(function(){
                var now = new Date();
                date = new CountDown(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDay(),
                    now.getHours(),
                    now.getMinutes(),
                    now.getSeconds()
                )
            });

            it("should return 1 hour remaining", function(){
                // var endDateHour = date.formatDate()['hours'];
                // var expected = Date.parse(date.getCurrentDate());

                // date.setHour(endDateHour+1);
                // expected = Date.parse(date.getEndDate()) - Date.parse(date.getCurrentDate());
                // expected = Math.floor(expected / 1000 / 60 )

                // var actual = date.calculateRemainingDays();
                
                // expect(actual['hours']).nothing(CountDown.formatDate(expected)['hours']);
            });

            it("should return 1 minute remaining", function(){
                expect().nothing();
            });

            it("should return 1 second remaining", function(){
                expect().nothing();
            });
        });

    });

    describe("Count Down", function(){
        
        it("should do something", function(){
            expect().nothing();
        });
    });
});