const search = document.querySelector("#searchField");

const list = document.querySelector("#list");
const xhr = new XMLHttpRequest();

search.addEventListener("keyup", () =>{
    xhr.open("GET", "server/phoneBook.php?v=" + encodeURIComponent(search.value));
    xhr.onload = handleResponse;
    xhr.responseType = "json";
    xhr.send();
});

function handleResponse(){
    let numberList = null;
    let output = "<pre>";

    if(!xhr.response){
        output += "Bitte (noch) ein Zeichen eingaben";
    }
    else{
        numberList = JSON.parse(xhr.responseText);
        console.log(numberList);
        for(nbr in numberList){
            output +=numberList[nbr];
        }
        
    }


    output += "</pre>";
    list.innerHTML = output;
}