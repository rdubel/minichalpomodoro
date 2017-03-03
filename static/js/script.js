$(document).ready(function() {
    var mins = 25;
    var secs = 0;
    var timerStatus = 1;
    var cdfun;
    $("#addtask").click(function() {
        var newTask = $("#newtask").val();
        var listElement = $("<li></li>").addClass("task");
        listElement.html(newTask);
        var btn = $("<button> &times;</button>");
        btn.addClass("close").click(function() {
            $(this).parent().remove();
        });
        listElement.click(function() {
            $("#progress ul").append($(this));
            timerMechanics();
            $(this).off("click");
            $(this).children().remove();
        });
        listElement.append(btn);
        $("#todo ul").append(listElement);
    });

    function countdown() {
        if (secs == 0) {
            secs = 59;
            mins--;
        } else {
            secs--;
        }

        if (secs.toString().length == 1) {
            $("#secondes").html("0" + secs);
        } else {
            $("#secondes").html(secs);
        }

        if (mins.toString().length == 1) {
            $("#minutes").html("0" + mins);
        } else {
            $("#minutes").html(mins);

        }
    }

    $("#start").click(function() {
        timerMechanics();
    });

    function timerMechanics() {
        $("#start").html("Reset");
        if (timerStatus == 1) {
            cdfun = setInterval(function() {
                if (mins == 0 && secs == 0) {
                    var finished = confirm("Votre tâche est-elle terminée ?");
                    if (finished) {
                        timerReset();
                        $("#progress ul li").appendTo("#done ul");
                    } else {
                        timerReset();
                    }

                } else if (mins > -1 && secs > -1) {
                    countdown();
                    timerStatus = 2;
                }
            }, 10);
        } else if (timerStatus == 2) {
            timerReset();
        }
        $("#pause").click(function() {
            $("#start").html("Reprendre");
            clearInterval(cdfun);
            timerStatus = 1;
        });
        $("#stop").click(function() {
            timerReset();
            $("#progress ul li").appendTo("#done ul");
        });
    }

    function timerReset() {
        clearInterval(cdfun);
        mins = "25";
        secs = "00";
        $("#secondes").html(secs);
        $("#minutes").html(mins);
        $("#start").html("Début");
        timerStatus = 1;
    }
});
