$(document).ready(function () {

    $("#load").on("click", function () {
        $.getJSON("server/items.php", function (items) {

            // Liste leeren
            $("#list").empty();

            items.forEach(function (item) {
                $("#list").append(`
                    <button class="item-btn" data-id="${item.id}">
                        ${item.name}
                    </button>
                `);
            });
        });
    });

    // Event Delegation für dynamische Buttons
    $("#list").on("click", ".item-btn", function () {
        $("#info").text("Geklickte ID: " + $(this).data("id"));
    });

});
