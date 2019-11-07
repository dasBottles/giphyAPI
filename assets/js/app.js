//javascript, jQuery
// let searchInput = $('#searchinput').val().trim();
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dogs&api_key=kI0T0d8hy8iGLfpIMHqAVeGpN5MFUspg&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
let gifs = response.data;

for (let i = 0; i < gifs.length; i++) {
    $('#gifs-go-here').append("<img src='" + gifs[i].images.original.url + "'/>")
}
});