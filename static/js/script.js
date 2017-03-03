$(document).ready(function() {
    var mins = "25";
    var secs = "00";
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
            $("#start").html("Reset")
            cdfun = setInterval(function() {
                if (mins == 0 && secs == 0) {
                    var finished = confirm("Votre tâche est-elle terminée ?");
                    if (finished) {
                        $("#start").html("Début")
                        $("#progress ul li").appendTo("#done ul");
                        clearInterval(cdfun);
                    } else {
                        mins = "25";
                        secs = "00";
                        $("#secondes").html(secs);
                        $("#minutes").html(mins);
                        clearInterval(cdfun);
                        timerStatus = 1;
                        $("#start").html("Début")
                    }
                } else if (mins > -1 && secs > -1) {
                    countdown();
                };
            }, 10);
            timerStatus = 2;
            $("#pause").click(function() {
                $("#start").html("Reprendre")
                clearInterval(cdfun);
                timerStatus = 1;
                console.log(timerStatus);
            });
        });
        listElement.append(btn);
        $("#todo ul").append(listElement);
    });

    function countdown() {
        if (secs == 0) {
            secs = "59";
            mins--;
        } else {
            secs--;
        };

        if (secs == 0 || secs == 1 || secs == 2 || secs == 3 || secs == 4 || secs == 5 || secs == 6 || secs == 7 || secs == 8 || secs == 9) {
            $("#secondes").html("0" + secs);
        } else {
            $("#secondes").html(secs);
        };

        if (mins == 0 || mins == 1 || mins == 2 || mins == 3 || mins == 4 || mins == 5 || mins == 6 || mins == 7 || mins == 8 || mins == 9) {
            $("#minutes").html("0" + mins);
        } else {
            $("#minutes").html(mins);

        };
    };

    $("#start").click(function() {
        $(this).html("Reset")
        if (timerStatus == 1) {
            cdfun = setInterval(function() {
                if (mins == 0 && secs == 0) {
                    var finished = confirm("Votre tâche est-elle terminée ?");
                    if (finished) {
                        $("#start").html("Début")
                        $("#progress ul li").appendTo("#done ul");
                        clearInterval(cdfun);
                    } else {
                        mins = "25";
                        secs = "00";
                        $("#secondes").html(secs);
                        $("#minutes").html(mins);
                        clearInterval(cdfun);
                        timerStatus = 1;
                        $("#start").html("Début")
                    }

                } else if (mins > -1 && secs > -1) {
                    countdown();
                };
            }, 10);
            timerStatus = 2;
        } else if (timerStatus == 2) {
            mins = "25";
            secs = "00";
            $("#secondes").html(secs);
            $("#minutes").html(mins);
            clearInterval(cdfun);
            timerStatus = 1;
            $(this).html("Début")
        };
        $("#pause").click(function() {
            $("#start").html("Reprendre")
            clearInterval(cdfun);
            timerStatus = 1;
        });
    });
});
