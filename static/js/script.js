$(document).ready(function() {
    $("#addtask").click(function() {
        var newTask = $("#newtask").val();
        var listElement = $("<li></li>").addClass("task");
        listElement.html(newTask);
        var btn = $("<button> &times;</button>");
        btn.addClass("close");
        listElement.append(btn);
        $("#todo ul").append(listElement);
    });
    $(".close").click(function() {
        $(this).parent().remove();
    })
});
