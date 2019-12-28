let mainUrl = "http://v2.api-football.com/"
let key = process.env.FOOTBALL_API_KEY
$('form').on('submit', function(e) {
    e.preventDefault()
    let userInput = $('#search').val()

    $.ajax({
        method: "GET",
        url: mainUrl + userInput + key,
        sucess: function(json) {
            //$('').html('')
            onSuccess(json)
        },
        error: onError
    })
})