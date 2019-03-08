// jquery on click & submit handlers
$('.form').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("bu").val().trim()
    }

    // $.post('/', newBurger)
    $.ajax('/', {
        type: "POST",
        data: newBurger
    })
    .then(function(res){
        console.log('New burger: ', res)
        location.reload();
    })
})