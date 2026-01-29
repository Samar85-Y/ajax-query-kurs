// DOM elements
const searchButton = document.querySelector("#textSearch");
const searchInput = document.querySelector("#searchbar");
const resultsContainer = document.querySelector("#list");
const detailsContainer = document.querySelector("#details");

// Search button click
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

// Build table with details buttons
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
                    <td>${book.author}</td>
                    <td>${book.publisher}</td>
                    <td><img src="${book.image}" width="80"></td>
                    <td>
                        <button class="details-btn" data-id="${book.id}">
                            Details anzeigen
                        </button>
                    </td>
                </tr>
            `;
    });
  }

  output += "</table>";
  resultsContainer.innerHTML = output;

  // Activate detail buttons
  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      loadDetails(id);
    });
  });
}

// Load details via AJAX
function loadDetails(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `server/details.php?id=${id}`);
  xhr.responseType = "json";

  xhr.onload = function () {
    showDetails(xhr.response);
  };

  xhr.send();
}

// Display details
function showDetails(book) {
  if (!book || book.err) {
    detailsContainer.innerHTML = "<p>Keine Details gefunden.</p>";
    return;
  }

  detailsContainer.innerHTML = `
        <h2>${book.title}</h2>
        <table> 
        <th> 
          <tr><p><strong>Autor:</strong>  
           <tr><p><strong>ISBN:</strong>  
           <tr><p><strong>Verlag:</strong>
            <tr><p><strong>Bild:</strong>  
        </th>

        <td> ${book.author}</p></td></tr></th>
        <td> ${book.isbn}</p></td></tr>
        <td> ${book.publisher}</p></td></tr>
        <td> ${book.image}</p></td></tr>
            </table>
    `;
}

document.getElementById("year").textContent = new Date().getFullYear();
