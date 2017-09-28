$(document).ready(function(){
    $('input').on("input", function(){
        $(this).attr("changed", true);
        $(this).attr("value", $(this).val())
    })

    $('form').submit(function(){
        return false;
    });
});

$(document).on('click', 'button', function(){
    var edited = true;
    $('input').each(function(){
        if($(this).attr('changed') === "false"){
            edited= false;
        }
    });

    if(edited === true){
        $('#cards').append("<div class='card'><h1>"
            +$('#first_name').val()
            +" "+$('#last_name').val()
            +"</h1><h3>Click for description!</h3><p class='back'>"
            +$('#description').val() + "</p></div>");

        $('#first_name, #last_name, #description').val("");
    }
});

$(document).on('click', '.card', function(){
    var temp = $(this).children();
    console.log(temp);
    $(this).children().toggle();
});