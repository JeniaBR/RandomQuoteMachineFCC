var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function setNewColors() {
    var color = Math.floor(Math.random() * colors.length);

    $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
    }, 500);

    $(".btn").animate({
        backgroundColor: colors[color]
    }, 500);
}

function getQuote(){
    
    $.ajax({
        url: "http://quotes.stormconsultancy.co.uk/random.json",
        data: {
            format: 'json'
              },
        success: function (data) {
            quote = data.quote;
            author = data.author;
            $('#quote').text(quote);
            $('#quote-author-text').text('-' + author);
        }
    });

    setNewColors();
    }

function tweetOut(){
    window.open('https://twitter.com/intent/tweet?text=' + '"' + quote + '" ' + author);
}



$(document).ready(function(){
    getQuote();

    $('#get-quote-btn').click(function(){
        getQuote();
    });

    $('#twitter-btn').click(function(){
        tweetOut();
    });

});