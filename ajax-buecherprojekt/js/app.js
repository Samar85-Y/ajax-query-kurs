// TODO:
// - EventListener für den Such-Button
const search = document.querySelector("#textSearch");
const list = document.querySelector("#list");
const xhr = new XMLHttpRequest();

// - Suchbegriff aus dem Eingabefeld lesen
search.addEventListener("keyup", () => {
  xhr.open("GET", "server/details.php?q=" + encodeURIComponent(query));
  xhr.responseType = "json";
  xhr.onload = handleResponse;
  xhr.send();
});

// - Suchfunktion aus search.js aufrufen

// - Statusmeldungen setzen
function handleResponse() {
 
  let output = "<pre>";

  if(!xhr.response || xhr.response.err) {
    output += "Falsche Datensätze eingeben!";
  } else {
    const item = xhr.response;

    output += "ID: "          + item.id + "\n";
    output += "Titel: "       + item.title + "\n";
    output += "isbn: "        + item.isbn + "\n";
    output += "Autor: "       + item.author + "\n";
    output += "Publisher: "   + item.publisher + "\n";
    output += "Description: " + item.description + "\n";
    output += "Bild: "        + item.image + "\n";
  }

  output += "</pre>";
  list.innerHTML = output;
}

// current Year
document.getElementById("year").textContent = new Date().getFullYear();
