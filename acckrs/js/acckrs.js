$(document).ready(function() {
    $("#text1").css("color", "#950");
    $("#text2").addClass("animated fadeInDown");
    $("#summary_text").addClass("lead well");
    $("#history_title").addClass("h3 well");
    $("#history_text").addClass("well col-xs-12");
    $("#quote_text").addClass("blockquote well col-xs-12");
    $("#footer_text").addClass("row text-center");

    //generate random quote
    function randomQuote() {
        //create url for ajax call
        var $url = "http://api.forismatic.com/api/1.0/";
        $url += '?&' + $.param({
            'method': 'getQuote',
            'format': 'jsonp',
            'lang': 'en'
        }) + '&jsonp=?';
        //ajax call for random quote
        $.ajax({
            url: $url,
            dataType: "JSONP",
            type: "GET",
            cache: false
        }).done(function(response) {
            $("#quoteText").text(response.quoteText);
            $("#quoteAuthor").text(response.quoteAuthor);
            $("#tweetQuote").attr("href", "http://twitter.com/home/?status=" + response.quoteText + '(' + response.quoteAuthor + ')');
        });
    };

    navigator.geolocation.getCurrentPosition(function(position) {
        $lat = position.coords.latitude;
        $long = position.coords.longitude;
        $weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
        $weatherUrl += '?&' + $.param({
            'units': 'metric',
            'APPID': '1604ef7d90e80da230c66c3f88530623',
            'lat': $lat,
            'lon': $long
        });
        $iconUrl = 'http://openweathermap.org/img/w/';
        $.ajax({
            url: $weatherUrl,
            type: "GET",
            cache: false
        }).done(function(response) {
            $temp = {
                "c": Math.round(response.main.temp) + ' C  ' + response.weather[0].description,
                "f": Math.round(response.main.temp * 9 / 5 + 32) + ' F  ' + response.weather[0].description
            };
            $iconUrl += response.weather[0].icon + '.png';
            $("#tempC").text($temp['c']);
            //$("#weatherIcon").attr("src", $iconUrl);
        });
    });
    $("#getNewQuote").on("click", randomQuote);

    //When click on temp in C, change to F and vice-versa
    $("#tempC").on('click', function() {
        var current = $(this).data('nexttemp');
        $("#tempC").text($temp[current]);
        if (current == 'c') {
            $(this).data('nexttemp', 'f');
            return;
        }
        $(this).data('nexttemp', 'c');

    });
});