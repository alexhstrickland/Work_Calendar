// var now = moment().format("dddd MMM Do");
// console.log(now);




// var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

var begDay = 9;
var endDay = 18;

for (var i = begDay; i < endDay; i++) {
    // console.log([i]);
    console.log(moment().hour([i]).format("hA"));
    // var rowDiv = $("<div class='row'>");
    // var hourDiv= $("<div class='hour col-md-1").text(moment().hour(i).format("hA"));
    // var timeBlock = $("<div class='time-block col-md-10");
    
};