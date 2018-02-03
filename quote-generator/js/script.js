$(document).ready(function() {
  var quotes = [];
  var quote = "";
  var author = "";
  var rand = 0;
  var $ring = $("#ring");
  var $ringShadow = $("#ringShadow");
  var $author = $("#author");

  $.getJSON("https://api.myjson.com/bins/1dnpe5", function(quotes) {
    $("#ring").bind("click", function() {
      rand = Math.floor(Math.random() * quotes.length);
      quote = quotes[rand].quote;
      author = quotes[rand].author;
      image = quotes[rand].image;

      $($author)
        .fadeOut(1000, function() {
          $($author).attr("src", image);
        })
        .delay(500)
        .fadeIn(2000);

      $("#quoteText, #authorText")
        .slideUp(1000, function() {
          $("#authorText").text(author + " - ");
          $("#quoteText").text(quote);
        })
        .delay(500)
        .slideDown(1500);

      $({
        deg: 0
      }).animate({
        deg: 360
      }, {
        duration: 3500,
        step: function(now) {
          $ring.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });

      $({
        deg: 0
      }).animate({
        deg: 360
      }, {
        duration: 3530,
        step: function(now) {
          $ringShadow.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    });

    $("#tweet").on("click", function(event) {
      event.preventDefault();
      window.open(
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(quote + " -" + author)
      );
    });
  });
});
