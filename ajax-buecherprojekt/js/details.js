
$(document).on("click", ".details-btn", function () {
    const id = $(this).data("id");
    loadDetails(id);
});


function loadDetails(id) {
    $.getJSON("server/details.php", { id }, function (data) {
        renderDetails(data);
    });
}

function renderDetails(data) {
    if (data.error) {
        $("#details").html("<p>Keine Details gefunden.</p>");
        return;
    }

    $("#details").html(`
        <h2>${data.title}</h2>

        <table class="table">
            <tr>
                <th>Autor</th>
                <th>ISBN</th>
                <th>Verlag</th>
                <th>Bild</th>
            </tr>
            <tr>
                <td>${data.author}</td>
                <td>${data.isbn}</td>
                <td>${data.publisher}</td>
                <td><img src="${book.image}" width="80"></td>>
            </tr>
        </table>
    `);
}

document.getElementById("year").textContent = new Date().getFullYear();
