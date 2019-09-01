$(document).ready(function () {
    $("#audio-btn").click(function () {
        var ytdl_input = $('#ytdl-input').val().trim();
        console.log(`audio button input: ${ytdl_input}`)

        var newObj = {
            data: ytdl_input
        };

        var route = '/ytdl';
        $.ajax(route, {
            type: 'POST',
            data: newObj
        }).done(function (response) {
            console.log(`POST: ${JSON.stringify(response)}`);
            $('#results').append(`<li>${response}</li>`);
        })
    });
});
