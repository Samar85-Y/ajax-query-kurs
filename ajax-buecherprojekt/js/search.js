// Konestanten
const searchButton = document.querySelector("#textSearch");
const searchInput = document.querySelector("#searchbar");
const resultsContainer = document.querySelector("#list");
const detailsContainer = document.querySelector("#details");

searchButton.addEventListener("click", function () {
  const query = searchInput.value.trim();

  if (query.length > 0) {
    searchBooks(query);
  } else {
    resultsContainer.innerHTML = "<p>Bitte geben Sie einen Suchbegriff ein.</p>";
  }
});

// AJAX search
function searchBooks(query) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `server/search.php?q=${encodeURIComponent(query)}`);
  xhr.responseType = "json";

  xhr.onload = function () {
    handleSearchResponse(xhr.response);
  };

  xhr.send();
}

function handleSearchResponse(response) {
  let output = "<table class='result'>";

  if (!response || response.err) {
    output += "<tr><td>Keine Datensätze gefunden!</td></tr>";
  } else {
    response.forEach(book => {
      output += `
      
                <tr>
                    <td>${book.id}</td>
                    <td>${book.isbn}</td>
                    <td>${book.title}</td>
                    <td>
                        <button class="details-btn" data-id="${book.id}">Details anzeigen</button>
                    </td>
                </tr>
            `;
    });
  }

  output += "</table>";
  resultsContainer.innerHTML = output;

  $(".details-btn").on("click", function () {
    const id = $(this).data("id");
    loadDetails(id);
  });
}
// Load details 
function loadDetails(id) {
  $.getJSON(`server/details.php?id=${id}`, function (data) {
    renderDetails(data);
  }).fail(function () {
    $("#details").html("<p>Fehler beim Laden der Details.</p>");
  });
}

// Details
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
        <td><img src="${data.image}" width="150"></td>
      </tr>
      
    </table>
  `);
}


document.getElementById("year").textContent = new Date().getFullYear();
