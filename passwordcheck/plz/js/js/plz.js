$(document).ready(() =>{
$("#input").keyup(() =>{
    $.getJSON("server/plz.php", {q: $("#input").val()})
    .done((data) => {
        
        console.log(tableData);

        
        let output = "<table class= 'result'>";
        for(i in data){
            output += '<tr>';
            output += `<td>${data[i].ort}</td>`;
            output += `<td>${data[i].plz}</td>`;
            output += `<td>${data[i].bundesland}</td>`;
            output += '</tr>';
        }
        output +="</table>";

        $("#output").html(output);
    } );

});
});