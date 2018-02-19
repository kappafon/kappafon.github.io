
$(document).ready(function() {
  $(".container").toggle(0);
  $("#toggle").click(function() {
    $(".container").toggle(1000);
  });

  $("#resetButton").click(function() {
    event.preventDefault();
    $("#results").html("");
    $("#searchTerm").val("");
  });

  $("#searchButton").click(function() {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var datad = [];
    var apiUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&limit=20&namespace=0&format=json&origin=*&search=" +
      searchTerm;

    /*$.ajax({
      type: "GET",
      url: apiUrl,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(data[0]);
      },
      error: function(errorMessage) {
        alert("error getting api info");
      }
    });*/

    $.getJSON(apiUrl, function(data) {
      $("#results").html("");
      for (var i = 0; i < data[1].length; i++) {
        $("#results").prepend(
          "<li class='text-justify'><a class='paragraphHeading' target='_blank' href='" + data[3][i] +"'>" + data[1][i] + "</a><p>" +
            data[2][i] +
            "</p></li>"
        );
      }
      $("#searchTerm").val("");
    });
    
  
    
  });
  
   $("#searchTerm").keypress(function(e){
     if(e.which==13){
       $("#searchButton").click();
     }
   });
  
});
