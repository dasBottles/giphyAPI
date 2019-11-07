//javascript, jQuery
const getData = () => {
    //search input
    let searchInput = $('#searchInput').val().trim();
    let limitInput = $('#limitInput').val().trim();
    let ratingInput = $('#ratingInput').val().trim();

    //api call
    let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=kI0T0d8hy8iGLfpIMHqAVeGpN5MFUspg&limit=" + limitInput + "&rating=" + ratingInput);
    xhr.done(function(response) { 
            console.log("success got data", response); 
        let gifs = response.data;

        //populate #gifs-go-here
        $('.gif-container').empty();
        for (let i = 0; i < gifs.length; i++) {
            let gifDisplay = $("<div>");
            gifDisplay.addClass('card gifBlock');
            gifDisplay.append("<img class='card-img-top' src='" + gifs[i].images.original.url + "'>");
            gifDisplay.append("<p class='card-text'>Title: " + gifs[i].title + "</p>");
            gifDisplay.append("<p class='card-text'>Rating: " + gifs[i].rating + "</p>");
            $('.gif-container').append(gifDisplay);
        }
    });
};