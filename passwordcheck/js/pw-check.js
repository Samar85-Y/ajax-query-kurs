$(document).ready(() =>{
    $('input').on("keypress", (event) => {
        $.get('server/pw-check.php', { q:$('input').val() })
        .done ((data) =>{
            if(data ===0){
                $("#")
            }
        });
    })

});