$(document).ready(function () {
    var a = moment().format('dddd, MMMM Do');
    $('#currentDay').html(a);
    var x = moment().format('h : mm a');
    // $('.hour').html(x);

    //var currentTime = moment().format('h : mm a');
    //moment.duration(1, 'hours');

    // var time = function () {
    // //     if (x = momentTime3)
    // var momentTime = moment("15:00", 'HH:mm')
    //     let laterMomentTime3 = moment("16:00", 'HH:mm');
    //     if (momentTime3.isBefore(laterMomentTime3)) {
    //         $("#3").removeClass("present").addClass("future");


    //     }

    // }
    // time();

    // var block = moment.duration(1,'hours');


    // if( x > momentTime){
    //     $("#3").removeClass("present").addClass("past");

    // }


    // var a = (moment().hour());

    // var array = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    // for (var i = 0; i < array.length; i++) {
    //     var b = moment().hour(array[i]);
    // }

    // function test() {
    //     var a = (moment().hour());
    //     var array = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    //     for (var i = 0; i < array.length; i++) {
    //         var val = array[i] ;
    //     }
    //     var b = (moment().hour(val));
    //     // console.log(b);
    //     if (a > b) {
    //         $("#3").removeClass("present").addClass("past");
    //     }
    // }
    // test();

   
 
    // function test (){
    // var x = moment().format('h : mm a');
    // var b = moment().subtract(1, 'hours').format('h : mm a')
    // console.log(x);
    // console.log(b);
    // if ( x > b ){                              
    //     $("#3").removeClass("present").addClass("past");
    // }
    // } 
    // test();
    // function test() {
    //     var a = moment().hour('h : mm a');
    //     console.log(a);
    //     var array = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    //     for (var i = 0; i < array.length; i++) {
    //         var val = array[i] ;
    //     }
    //     var b = (moment().hour(val));
    //     console.log(b);
    //     if (a > b) {
    //         $("#3").removeClass("present").addClass("past");
    //     }
    // }
    // test();

//     function please (){
//     var a = moment().hour('h : mm a');
//     var b = moment().hour(21);
//     console.log(a);
//     console.log(b);
//     if (a = b){
//         console.log('hey girl hey');
//     }
// }
//     please();

    function test() {
            var a = moment().hour('h : mm a');
            // console.log(a);
            var array = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
            for (var i = 0; i < array.length; i++) {
                var val = array[i] ;
            }
            var b = (moment().hour(val));
            // console.log(b);
            if (a > b) {
                $("#9").removeClass("present future").addClass("past");
                $("#10").removeClass("present future").addClass("past");
                $("#11").removeClass("present future").addClass("past");
                $("#12").removeClass("present future").addClass("past");
                $("#1").removeClass("present future").addClass("past");
                $("#2").removeClass("present future").addClass("past");
                $("#3").removeClass("present future").addClass("past");
                $("#4").removeClass("present future").addClass("past");
                $("#5").removeClass("present future").addClass("past");
            }else if (a < b){
                $("#9").removeClass("present past").addClass("future");
                $("#10").removeClass("present past").addClass("future");
                $("#11").removeClass("present past").addClass("future");
                $("#12").removeClass("present past").addClass("future");
                $("#1").removeClass("present past").addClass("future");
                $("#2").removeClass("present past").addClass("future");
                $("#3").removeClass("present past").addClass("future");
                $("#4").removeClass("present past").addClass("future");
                $("#5").removeClass("present past").addClass("future");
            } else if (a = b){
            $("#9").removeClass("").addClass("present");
            $("#10").removeClass("future past").addClass("present");
            $("#11").removeClass("future past").addClass("present");
            $("#12").removeClass("future past").addClass("present");
            $("#1").removeClass("future past").addClass("present");
            $("#2").removeClass("future past").addClass("present");
            $("#3").removeClass("future past").addClass("present");
            $("#4").removeClass("future past").addClass("present");
            $("#5").removeClass("future past").addClass("present");
            }
        }
        test();


    // var bigBoy = function () {
    //     var a = (moment().hour());
    //     var array = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    //     for (var i = 0; i < array.length; i++) {
    //         var b = (moment().hour(array[i]));
    //     }
    // var past = function () {
    //     var a = (moment().hour());
    //     var array = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    //     for (var i = 0; i < array.length; i++) {
    //         var b = (moment().hour(array[i]));
    //         if (a > b) {
    //             $('#1').removeClass('present').addClass('past');
    //         }

    //     }
    // }
    // past();

    //     var present = function () {
    //         while (a === b) {
    //             $('#1').removeClass('past future').addClass('present');
    //         }
    //     }
    //     present();

    //     var future = function (){
    //         while (a< b){
    //             $('#1').removeClass('past present').addClass('future'); 
    //         }
    //     }
    //     future();
    // }


    //   bigBoy();

});






















