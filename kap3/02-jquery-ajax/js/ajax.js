$(document).ready(function () {

    $("#btn").on("click", function () {
        $.getJSON("server/list.php", function (data) {
            render(data);
        });
    });

});

function render(items) {
    $("#output").empty();

    items.forEach(function (item) {
        $("#output").append(`<p>${item.title}</p>`);
    });
}
