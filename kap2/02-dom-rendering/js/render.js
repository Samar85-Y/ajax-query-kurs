document.getElementById("btn").addEventListener("click", () =>{
    xhr.onload = () =>{
        const data = JSON.parse(xhr.responseText);
        renderList(data);
    }
    xhr.send();
});

function renderList(){
    
}