var Graduation = require('../controllers/CountDown.js');

describe("MyJSUtilities", function(){

    describe("Graduation Count Down", function(){

        describe("Test Support Functions", function(){
            var date;

            beforeAll(function(){
                var year = 2021;
                var month = 8;
                var day = 10;
                var hour = 0;
                var minutes = 0;
                var seconds = 1;
                date = new Graduation(year,month,day,hour,minutes,seconds);
            });

            // test getGraduationDate() 
            it("should return September 10, 2021", function(){            
                var actual = date.getDate();              
                var expected = "Fri Sep 10 2021 00:00:01 GMT-0400 (Eastern Daylight Time)";
                            
                expect(actual).toEqual(expected);
            });

            // test getCurrentDate()
            it("should return current date and time", function(){
                expect().nothing();
            });

            // test formatDate() 
            it("should return the current date and time in an object", function(){
                // object properties: year, month, days, hours, minutes, seconds
                expect().nothing();
            });



        });

        describe("Test Calculations", function(){
            var date;

            beforeAll(function(){
                var year = 2021;
                var month = 8;
                var day = 10;
                var hour = 0;
                var minutes = 0;
                var seconds = 1;
                date = new Graduation(year,month,day,hour,minutes,seconds);s                
            });

            beforeEach(function(){
                var now = Date.now();
                

            });

            it(`From ${date} `, function(){
                
                expect().nothing();
            });

            it("should return 1 hour remaining", function(){
                expect().nothing();
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