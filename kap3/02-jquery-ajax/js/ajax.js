$("'btn").on("click", () => {
    4.getJSON("server/list.php", (data) => {
        render(data);
    });

});

function render(items){
    $("#output").empty();

    items.foreach(item =>{
        $("#output").append(`<p>${item.title}</p>`);
    });
}