var Graduation = require('../controllers/GraduationCountDown.js');
// const utils = require("../controllers/GraduationCountDown.js");

describe("MyJSUtilities", function(){

    describe("Graduation Count Down", function(){

        describe("Test Support Functions", function(){

            // test getGraduationDate() 
            it("should return September 10, 2021", function(){
                // FORMAT
                // Fri Sep 10 2021 00:00:01 GMT-0400 (Eastern Daylight Time)
                var date = new Graduation();
                var actual = date.getGraduationDate();              

                // DATE object properties: year, monthIndex, day, hours, minutes, seconds, milliseconds
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

            it("should return 1 day remaining", function(){
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