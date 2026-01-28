$("#btnLoad").on("click", () =>{
    $.getJSON("server/list.php", (data) => {
        render(data);
    });
});

function renderList(items){
    const $container = $("#items");
    $container.empty();
    items.forEach(item => {
        $container.append(`
            <button class ="item-btn" data-id="${item.id}">
            ${item.title}
            </button>
            `);
        
    });
}