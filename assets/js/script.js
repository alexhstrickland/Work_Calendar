var begDay = 9;
var endDay = 18;
currentTime = moment().format("hA");
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





//Stopped here
if currentTime < 