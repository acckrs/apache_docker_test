
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $city = $("#city").val();
    var $address = $("#street").val() + ',' + $("#city").val();
    var $nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var $wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=info&inprop=url&callback=wikiCallback&search=" + $city;
    $nytUrl += '?' + $.param({
        'api-key': "3ef095bfaadb43e6ab67398da470ed46",
        'q': $city,
        'sort':"newest"
        
    });
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
  
    // load streetview

    // YOUR CODE GOES HERE!
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
             // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    $.ajax({
        url: $nytUrl,
    }).done(function (result) {
        $("#nytimes-header").html('New York Times Articles About  ' + titleCase($city.toString())+':');
        $("#nytimes-articles").html('<ul id="nytimes-articles" class="article-list">')
        for (var i = 0; i < result.response.docs.length; i++) {
            $("#nytimes-articles").append('<li class="article"><a href="' + result.response.docs[i].web_url + '">' + 
                                                                    result.response.docs[i].headline.main + '</a><p>' +
                                                                    result.response.docs[i].lead_paragraph+'</p></li>');
                };
        $("#nytimes-articles").append('</ul>')
    }).fail(function () {
        $("#nytimes-header").html('New York Times Articles Could Not Be Loaded');
    });
    var wikiRequestTimeout = setTimeout(function () {
                  $("#wikipedia-links").text('Failed to get Wikipedia links about ' + titleCase($city.toString()) + ':');
             }, 8000);
    $.ajax({
        url: $wikiUrl,
        dataType:"JSONP"
    }).done(function (result) {
        $("#wikipedia-header").text('Relevant Wikipedia Links About ' + titleCase($city.toString()) + ':');
        $("#wikipedia-links").html('<ul id="wikipedia-links">');
        for (var j = 0; j < result[3].length; j++) {
            $("#wikipedia-links").append('<li><a href="' + result[3][j] + '">' +
                                            result[1][j] + '</a><p>'+
                                            result[2][j] + '</p>'
                );
            $("#wikipedia-links").append('</ul>');
        }
        clearTimeout(wikiRequestTimeout);
    });
   
    $greeting.text('So you want to live in '+ $("#street").val() + ',' + $("#city").val()+'?').css("color","white")
    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $address + '&key=AIzaSyAXt_KiHM2AXMqnwRCMHSYmjIbb6wgu5BU">')
    return false;
};

$('#form-container').submit(loadData);
