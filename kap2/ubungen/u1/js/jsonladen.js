fetch("data.json")
  .then(response => response.text())
  .then(text => {
    const data = JSON.parse(text);
    showData(data);
  });

function showData(data) {
  const output = document.getElementById("output");

  data.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.title + " – " + item.author;
    output.appendChild(p);
  });
}