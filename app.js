function getQuote(){
    
    $.ajax({
        url: "http://quotes.stormconsultancy.co.uk/random.json",
        data: {
            format: 'json'
              },
        success: function (data) {
            $('#quote-text').text(data.quote);
            $('#quote-author-text').text(data.author);
        }
    });
    }



$(document).ready(function(){
    $('#quote-text').append("This is some quote!!!!!!!");

    $('#get-quote-btn').click(function(){
        getQuote();
    });
});