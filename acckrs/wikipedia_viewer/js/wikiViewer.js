function searchWiki() {
    var $searchString = $("#searchText").val();
    var $wikiElem = $("#wikipedia-links");
    var $wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=info&inprop=url&callback=wikiCallback&search=" + $searchString;

    // clear out old data before new request
    // $wikiElem.text("");



    /*  function titleCase(str) {
          var splitStr = str.toLowerCase().split(' ');
          for (var i = 0; i < splitStr.length; i++) {
               // Assign it back to the array
              splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
          }
          // Directly return the joined string
          return splitStr.join(' ');
      }
      */
    console.log($searchString);
    $.ajax({
        url: $wikiUrl,
        dataType: "JSONP"
    }).done(function(result) {
        console.log(result);
        $("#wikipedia-links").html('<ul class="well" id="wikipedia-links">');
        for (var j = 0; j < result[3].length; j++) {
            $("#wikipedia-links").append('<li><a href="' + result[3][j] + '">' +
                result[1][j] + '</a><p>' +
                result[2][j] + '</p>'
            );
            $("#wikipedia-links").append('</ul>');
            $("wikipedia-header").text('Relevant Wikipedia Links:');
        }
        clearTimeout(wikiRequestTimeout);
    });

    return false;
};

$('#search-form').submit(searchWiki);