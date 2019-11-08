//javascript, jQuery
const getData = () => {
    //search input
    let searchInput = $('#searchInput').val().trim();
    let limitInput = $('#limitInput').val().trim();
    let ratingInput = $('#ratingInput').val().trim();

    //api call
    let xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=kI0T0d8hy8iGLfpIMHqAVeGpN5MFUspg&limit=" + limitInput + "&rating=" + ratingInput);
    xhr.done(function(response) { 
            console.log("success got data", response); 
        let gifs = response.data;

        //populate #gifs-go-here
        $('.gif-container').empty();
        for (let i = 0; i < gifs.length; i++) {
            let gifDisplay = $("<div>");
            gifDisplay.addClass('card gifBlock rounded');
            gifDisplay.append("<img class='card-img-top' src='" + gifs[i].images.original.url + "'>");
            // gifDisplay.append("<img class='card-img-top' src='" + gifs[i].images.original_still.url + "'>");
            gifDisplay.append("<p class='card-text'>Title: " + gifs[i].title + "</p>");
            gifDisplay.append("<p class='card-text'>Rating: " + gifs[i].rating + "</p>");
            // gifDisplay.attr('data-still', gifs[i].images.original_still.url);
            // gifDisplay.attr('data-animate', gifs[i].images.original.url);
            // gifDisplay.attr('data-state', 'still');
            // gifDisplay.attr('id', 'gifClick');
            // $('.card-img-top').css('cursor', 'pointer');
            $('#gif-container').append(gifDisplay);
        }
    });
    
};

//[WIP] Play GIF on click
$('#gifClick').on('click', function(){
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
      console.log(this.state);
});