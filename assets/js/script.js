var begDay = 9;
var endDay = 18;

$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (var i = begDay; i < endDay; i++) {
    
    var rowDiv = $("<div class='row'>");

    var hourDiv= $("<div class='hour col-md-1'>").text((moment().hour(i).format("hA")));
    
    

    var timeBlock = $("<div class='time-block col-md-9'><textarea id='textArea'></textarea></div>").attr("id", i);
    // var description = $("<textarea id='textArea'></textarea>");

    var saveBtn = $("<div class='saveBtn col-md-1'>");
    var saveIcon = $("<i class='fas fa-save'>");
    
   

    $(".container").append(rowDiv.append(hourDiv, timeBlock, saveBtn.append(saveIcon)));
};

currentTime = moment().hour();

for (var i = begDay; i < endDay; i++) {
    var id;
    if (currentTime < i) {
        $(".time-block").removeAttr("past present future");
        id = "future";
    } else if (currentTime > i) {
        $(".time-block").removeAttr("past present future");
        id = "past";
    } else if (currentTime = i) {
        $(".time-block").removeAttr("past present future");
        id = "present";
    }
    $("#" + i).attr("id", id);
    }
var rowHour;
var contents = []
$(".saveBtn").on("click", function() {
//    console.log($(this).closest("#textArea").innerHTML());
    var rowHour = parseInt($(this).parent().children(0).text()) - begDay;
    console.log(rowHour);
    contents[rowHour] = $(this).parent().find("#textArea").val();
    localStorage.setItem("userinputs", JSON.stringify(contents));

    // for (i=0; i < textArea.length; i++) {
    //     var info = []
    //     info.push(textArea.val())
    //     localStorage.setItem("items", info)
    // }
    });

// });

function loadInfo() {
    $(document).ready(function() {
        var savedInfo = localStorage.getItem(userinputs);
    })
}

loadInfo();
