$(document).ready(function() {
<<<<<<< HEAD
    var mins = "25";
    var secs = "00";
=======
>>>>>>> 7bdf4831e101c22781e2fb7951d57d1c1eed611d
    $("#addtask").click(function() {
        var newTask = $("#newtask").val();
        var listElement = $("<li></li>").addClass("task");
        listElement.html(newTask);
        var btn = $("<button> &times;</button>");
<<<<<<< HEAD
        btn.addClass("close").click(function() {
            $(this).parent().remove();
        });
        listElement.click(function() {
            $("#progress ul").append($(this));
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
        };

        if (secs == 0 || secs == 1 || secs == 2 || secs == 2 || secs == 3 || secs == 4 || secs == 5 || secs == 6 || secs == 7 || secs == 8 || secs == 9) {
            $("#secondes").html("0" + secs);
        } else {
            $("#secondes").html(secs);
        };

        if (mins == 0 ||mins == 1 || mins == 2 || mins == 2 || mins == 3 || mins == 4 || mins == 5 || mins == 6 || mins == 7 || mins == 8 || mins == 9) {
            $("#minutes").html("0" + mins);
        } else {
            $("#minutes").html(mins);

        };
    };

    $("#start").click(function() {
        var cdpls = setInterval(function() {
            if (mins == 0 && secs == 0) {

            } else if (mins > -1 && secs > -1) {
                countdown();
            };
        }, 1000);
        $("#pause").click(function() {
            $("#start").html("Reprendre")
            clearInterval(cdpls);
        });
    });

=======
        btn.addClass("close");
        listElement.append(btn);
        $("#todo ul").append(listElement);
    });
    $(".close").click(function() {
        $(this).parent().remove();
    })
>>>>>>> 7bdf4831e101c22781e2fb7951d57d1c1eed611d
});
