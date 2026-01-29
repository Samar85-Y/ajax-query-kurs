// TODO:


// - Klick auf "Details"-Button erkennen (Event-Delegation)
$(document).on("click", ".textSearch", function () {
    const id = $(this).data("id");
    loadDetails(id);
});


// - zweite AJAX-Anfrage an server/details.php
function loadDetails(id) {
    // hier implementieren
    $.getJSON("server/details.php", { id }, function (data) {
        renderDetails(data);
    });
}


// - Detaildaten anzeigen (Titel, Bild, Beschreibung)
function renderDetails(data) {
    if (data.error) {
        $("#details").html("Keine Details gefundend");
        return;
    }
    $("#details").html(`
        <p><strong> Tittle: </strong>${data.title}<p>
        <p><strong> Beschreibung: </strong>${data.description}</p>
        <img><strong> Bild: </strong>${data.image}</img>
        `);
}
document.getElementById("year").textContent = new Date().getFullYear();
