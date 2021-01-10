var begDay = 9;
var endDay = 18;
currentTime = moment().hour();
console.log(currentTime);

$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (var i = begDay; i < endDay; i++) {
    
    var rowDiv = $("<div class='row'>");

    var hourDiv= $("<div class='hour col-md-1'>").text((moment().hour(i).format("hA")));
    
    

    var timeBlock = $("<div class='time-block col-md-9'>").attr("value", i);
    var description = $("<textarea></textarea>");

    var saveBtn = $("<div class='saveBtn col-md-1'>");
    var saveIcon = $("<i class='fas fa-save'>");
    
   

    $(".container").append(rowDiv.append(hourDiv, timeBlock.append(description), saveBtn.append(saveIcon)));
};


$(".time-block").each(function(){
    var time = ($(this).attr('value'));
    console.log(time);

    if (currentTime > time) {
        $(".time-block").removeAttr('id');
        $(".time-block").attr("id", "past");
    } else if (currentTime < time) {
        $(".time-block").removeAttr('id');
        $(".time-block").attr("id", "future");
    } else if (currentTime == time) {
        $(".time-block").removeAttr('id');
        $(".time-block").attr("id", "present");
    }
});

// for (var i=0; i < $(".time-block").length; i++) {
//     console.log(($(".time-block")[i]).attr('value'));
// }
