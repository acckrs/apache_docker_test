var streams = ["brunofin", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
$url = "https://wind-bow.gomix.me/twitch-api/streams/";


$(document).ready(function() {
    function replaceText(str) {
        var rep = "https://api.twitch.tv/kraken/channels/";
        var newStr = str.replace(/https:\/\/api.twitch.tv\/kraken\/channels\//i, "http://www.twitch.tv/");
        return newStr;
    };

    function truncateString(str, num) {
        if (num <= 3) {
            return str.slice(0, num) + '...';
        } else
        if (num >= str.length) {
            return str;
        } else
            return str.slice(0, num - 3) + '...';
    }

    function checkFCCTwich() {
        $('#twichTable').html('<table item-width="70%" id="twichTable" class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Channel logo</th>' +
            '<th>Channel name</th>' +
            '<th>Channel link</th>' +
            '<th>Channel status</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="twichTableBody">' +
            '<tr>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>');
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td><td></td></td><td></td><td></td></tr></tbody>');
        $.ajax({
            url: $url + 'freecodecamp',
            dataType: "JSONP",
            type: "GET"
        }).done(function(response) {
            if (!response.stream) {
                $("#twichTable > tbody:last-child").append('<tr>' +
                    '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 10%; height: 10%" src="/img/freecodecamp-profile_image-d9514f2df0962329-300x300.png"/></td>' +
                    '<td>FreeCodeCamp</td>' +
                    '<td><a class="btn btn-large btn-block btn-default" href="http://www.twitch.tv/freecodecamp">http://www.twitch.tv/freecodecamp</a></td>' +
                    '<td>Offline</td>' +
                    '</tr>');
                return console.log(response._links.channel + ' is offline')
            } else {
                $("#twichTable > tbody:last-child").append('<tr>' +
                    '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 10%; height: 10%" src="' + response.stream.channel.logo + '"/></td>' +
                    '<td>' + response.stream.channel.display_name + '</td>' +
                    '<td><a class="btn btn-large btn-block btn-default" href="' + response.stream.channel.url + '">' + response.stream.channel.url + '</a></td>' +
                    '<td>' + response.stream.channel.status + '</td>' +
                    '</tr>');

                return console.log(response.stream.channel.display_name + ' is online');
            }
        })

    }

    function checkOnlineTwiches() {
        $('#twichTable').html('<table item-width="70%" id="twichTable" class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Channel logo</th>' +
            '<th>Channel name</th>' +
            '<th>Channel link</th>' +
            '<th>Channel status</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="twichTableBody">' +
            '<tr>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>');
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td><td></td></td><td></td><td></td></tr></tbody>');
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    return console.log(response._links.channel + ' is offline')
                } else {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 20%; height: 20%" src="' + response.stream.channel.logo + '"/></td>' +
                        '<td>' + response.stream.channel.display_name + '</td>' +
                        '<td><a class="btn btn-large btn-block btn-default" href="' + response.stream.channel.url + '">' + response.stream.channel.url + '</a></td>' +
                        '<td>' + truncateString(response.stream.channel.status, 20) + '</td>' +
                        '</tr>');

                    return console.log(response);
                }
            })
        };
    }

    function checkOfflineTwiches() {

        $('#twichTable').html('<table item-width="70%" id="twichTable" class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Channel link</th>' +
            '<th>Channel status</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="twichTableBody">' +
            '<tr>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>');
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td></td><td></td><td></td></tr></tbody>');
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><a class="btn btn-large btn-block btn-default" href="' + replaceText(response._links.channel) + '">' + replaceText(response._links.channel) + '</a></td>' +
                        '<td>Offine</td>' +
                        '</tr>');
                    return console.log(replaceText(response._links.channel));
                } else {
                    return console.log(response._links.channel + " is online");
                }
            })
        };
    }


    $("#onlineTwich").on("click", checkOnlineTwiches);
    $("#offlineTwich").on("click", checkOfflineTwiches);
    $("#testFCC").on("click", checkFCCTwich);
});