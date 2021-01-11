var begDay = 9;
var endDay = 18;

loadInfo();

$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (var i = begDay; i < endDay; i++) {
    
    var rowDiv = $("<div class='row'>");

    var hourDiv= $("<div class='hour col-md-1'>").text((moment().hour(i).format("hA")));
    
    var timeBlock = $("<div class='time-block col-md-9'><textarea></textarea></div>").attr("id", i);

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

var storageEl = [];
// // $(".saveBtn").on("click", function(event) {
// //     event.preventDefault();
// //     var rowHour = parseInt($(this).parent().children(0).text()) - begDay;
// //     console.log(rowHour);
// //     contents[rowHour] = $(this).parent().find("#textArea").val();
// //     localStorage.setItem('userinputs', JSON.stringify(contents));
// //     console.log(contents);

// // // });
var timeEl;
var textEl;
var content;
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    timeEl = parseInt($(this).parent().children(0).text());
    textEl = $(this).parent().find("textarea").val();
    content = {
        time: timeEl,
        text: textEl
    }
    storageEl = JSON.parse(localStorage.getItem("contents"));
    if (storageEl !== true) {
        localStorage.setItem("contents", JSON.stringify([{time: timeEl, text: textEl}]));
    } else {
        storageEl.push(content);
        localStorage.setItem("contents", JSON.stringify(storageEl));
    }
    // $(this).parent().find("textarea").replaceWith($("<textarea>" + textEl+ "</textarea>"));
    });

var showItems;
function loadInfo() {
    var savedInfo = JSON.parse(localStorage.getItem("contents"));
    console.log(savedInfo);
    if (savedInfo !== null) {
        for (var i=0; i < savedInfo.length; i++) {
            showItems=savedInfo[i];
            text=showItems.text;
            time=showItems.time;
            if (text !== null) {
                $(".hour").parent().children(0).find("textarea").val(text);
            }
        }

    }

}

// loadInfo();
