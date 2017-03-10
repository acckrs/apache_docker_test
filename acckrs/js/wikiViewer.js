$(document).ready(function() {
    $.ajaxSetup({ cache: false });

    $("#search-form").submit(function() {
        var $searchString = $("#searchText").val();
        var $wikiElem = $("#wikipedia-links");
        var $wikiUrl = "https://en.wikipedia.org/w/api.php?";
        //crate wiki api url
        $wikiUrl += $.param({
            'action': 'opensearch',
            'format': 'json',
            'prop': 'info',
            'inprop': 'url',
            'callback': 'wikiCallback',
            'search': $searchString
        });

        console.log($searchString);

        //call ajax
        $.ajax({
            url: $wikiUrl,
            dataType: "JSONP"
        }).done(function(result) {
            console.log($wikiUrl);
            $("#wikipedia-header").html('<h3 id="wikipedia-header" class="lead-text"> Relevant Wikipedia Links: </h3>');
            $("#wikipedia-links").html('<ul id="wikipedia-links">');
            for (var j = 0; j < result[3].length; j++) {
                $("#wikipedia-links").append('<li><a href="' + result[3][j] + '">' +
                    result[1][j] + '</a><p>' +
                    result[2][j] + '</p>'
                );
                $("#wikipedia-links").append('</ul>');


                //funny shoes
                console.log("funny");

            }
        });

        //try to clear search  box
        $("#search-form").attr("placeholder", "");

        return false;
    })
})