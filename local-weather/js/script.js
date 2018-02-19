$(document).ready(function() {
    var api;
    var lat;
    var long;
  
    $(function() {
      doAnimation();
    });
    function doAnimation() {
      $("#storm").animate({ top: "+=30px" }, 3300);
      $("#storm")
        .animate({ top: "-=30px" }, 3000)
        .delay(50);
      doAnimation();
    }
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        api =
          "https://fcc-weather-api.glitch.me/api/current?lat=" +
          lat +
          "&lon=" +
          long;
        $("#location").html("latitude: " + lat + "<br>longitude: " + long);
        $("#url").html(api);
        $.getJSON(api, function(weatherData) {
          var weather = weatherData.weather[0].main.toLowerCase();
          var detailed = weatherData.weather[0].description.toLowerCase();
          var image = weatherData.weather[0].icon;
          var tempC = weatherData.main.temp;
          var tempF = tempC * 9 / 5 + 32;
          var button = true;
  
          $("#urls").html(api);
          $("#weather").html(
            "Hi fellow human. If you look up to the sky, you are likely to see some " +
              weather +
              " or rather " +
              detailed +
              ". Something like this <img src = '" +
              image +
              "'> <br>You are most welcome! <br> Oh, and I also made sure the temp. would be "
          );
          $("#temp").html(tempC + "&degC");
  
          $("#switch").click(function() {
            if (button === false) {
              $("#switch").html("&degF");
              button = true;
              $("#temp").html(tempC + "&degC");
            } else {
              $("#switch").html("&degC");
              button = false;
              $("#temp").html(tempF + "&degF");
            }
          });
        });
      });
    } else {
      $("#location").html("Geolocation is not supported by this browser.");
    }
  });
  