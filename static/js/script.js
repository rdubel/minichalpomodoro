$(document).ready(function() {
    var mins = "02";
    var secs = "00";
    $("#secondes").html(secs);
    $("#minutes").html(mins);
    var timerStatus = 1;
    var cdFun;
    var elapsec = 0;
    var elapmin = 0;
    $("#addtask").click(function() {
        var newTask = $("#newtask").val();
        var listElement = $("<li></li>").addClass("task");
        listElement.html(newTask);
        var btn = $("<button> &times;</button>");
        btn.addClass("close").click(function() {
            $(this).parent().remove();
        });
        listElement.click(function() {
            taskFun(this);
        });
        listElement.append(btn);
        $("#todo ul").append(listElement);
    });
    function countdown() {
        if (secs == 0) {
            secs = 60;
            mins--;
        } else {
            secs--;
            if (elapsec == 59) {
                elapsec = 0;
                elapmin++
            } else {
                elapsec++
            }
        console.log(elapsec, elapmin);
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
            cdFun = setInterval(function() {
                if (mins == 0 && secs == 0) {
                    var finished = confirm("Votre tâche est-elle terminée ?");
                    if (finished) {
                        timerReset();
                        elapsedIntoTimeFormat();
                        var finishedIn = " fini en " + elapmin + ":" + elapsec;
                        $("#progress ul li").html($("#progress ul li").html() + finishedIn)
                        elapsec = 0;
                        elapmin = 0;
                        $("#progress ul li").appendTo("#done ul");
                    } else {
                        timerReset();
                    }

                } else if (mins > -1 && secs > -1) {
                    countdown();
                    timerStatus = 2;
                }
            }, 100);
        } else if (timerStatus == 2) {
            timerReset();
        }
        $("#pause").click(function() {
            $("#start").html("Reprendre");
            clearInterval(cdFun);
            timerStatus = 1;
        });
        $("#stop").click(function() {
            timerReset();
            elapsedIntoTimeFormat();
            var finishedIn = " fini en " + elapmin + ":" + elapsec;
            $("#progress ul li").html($("#progress ul li").html() + finishedIn)
            elapsec = 0;
            elapmin = 0;
            $("#progress ul li").appendTo("#done ul");
        });
    }

    function timerReset() {
        clearInterval(cdFun);
        mins = "02";
        secs = "00";
        $("#secondes").html(secs);
        $("#minutes").html(mins);
        $("#start").html("Début");
        timerStatus = 1;
    }

    function taskFun(that) {
        timerReset();
        timerMechanics();
        $(that).children().remove();
        if ($("#progress ul").html() == "") {
            $("#progress ul").append($(that));
        } else {
            $("#progress ul").children().click(function() {
                taskFun(this);
            });
            var btn = $("<button> &times;</button>");
            btn.addClass("close").click(function() {
                $(this).parent().remove();
            });
            $("#progress ul").children().append(btn)
            $(that).parent().append($("#progress ul").children());
            $("#progress ul").append($(that))
        }
        $(that).off("click");
    }

    function elapsedIntoTimeFormat() {
        if (elapmin.toString().length == 1) {
            elapmin = "0" + elapmin;
        }
        if (elapsec.toString().length == 1) {
            elapsec = "0" + elapsec;
        }
    }
});
