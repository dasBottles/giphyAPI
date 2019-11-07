//javascript, jQuery
const getData = () => {
    let searchInput = $('#searchinput').val().trim();
    let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=kI0T0d8hy8iGLfpIMHqAVeGpN5MFUspg&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
let gifs = response.data;
$('#gifs-go-here').empty();
for (let i = 0; i < gifs.length; i++) {
    let gifDisplay = $("<div>");
    gifDisplay.append("<img src='" + gifs[i].images.original.url + "'/>");
    gifDisplay.append("Rating: " + gifs[i].rating);
    $('#gifs-go-here').append(gifDisplay);
}
});
};