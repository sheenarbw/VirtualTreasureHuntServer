//page << escape_javascript("emptyInput('main_input');") to send js via rjs stuffs
var map;
var marker;
var markerarray;
//this should store all the markers passsed in by the constructor
function attachDescription(marker, description)
 {
    var infowindow = new google.maps.InfoWindow(
    {
        content: description,
        size: new google.maps.Size(50, 50)
    });
    google.maps.event.addListener(marker, 'click',
    function() {
        infowindow.open(map, marker);
    });
}

function attachInfoPost(marker, id)
 {
    /*	google.maps.event.addListener(marker, 'click', function()
	{
		new Ajax.Request('url...', 
                  {
		     method: 'post',
                     parameters: {
					prize_id: id
                                 }
		  });
	};*/
}

var InfoMarker = Class.create(
{

    initialize: function(latitude, longitude, summary, title, id)
    {
        posn = new google.maps.LatLng(latitude, longitude);
        this.m = new google.maps.Marker({
            position: posn,
            map: map,
        });
        this.m.setTitle(title);
        //summary="<h1>hi</h1><p>boo</p>"
        //yes, i know that putting html in here is bad form but it works
        summary += "<br/>";
        summary += "<input type=\"button\" value=\"Delete\" onclick=\"deletemarker(" + id + ")\"\> ";
				summary += "<a href=\"/assets/" + id + "/edit\" data-remote=\"true\">Edit</a>";
        summary += "<input type=\"button\" value=\"Edit\" onclick=\"editMarker(" + id + ")\"\> ";
        attachDescription(this.m, summary);
        attachInfoPost(this.m, id);
        this.id = id;
        this.lat = latitude;
        this.lng = longitude;
				google.maps.event.addListener(this.m, "click", markerClickHandler.curry(this.m).bind(this));
    }



});

function markerClickHandler(marker, event) {
	marker.setDraggable(true);
}

function editMarker(id)
{
	
    //   <%= link_to 'Edit', edit_asset_path(asset) %>
}

function deleteMarker(id)
 {
    //<%= link_to 'Destroy', asset, :confirm => 'Are you sure?', :method => :delete %>
    }

function populateMarkerArray()
 {
    markers.forEach(function(m) {
        marker = new InfoMarker(m.asset.latitude, m.asset.longitude, m.asset.description, m.asset.name, m.asset.id);
				markerarray.push(marker);

    }
    )

}


function placeMarker(location)
 {
    if (marker == null)
    //there can be only one
    {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true
        });


    };
}



function initialize()
 {
    var latlng = new google.maps.LatLng( - 26.204103, 28.047305);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);

    //google.maps.event.addListener(map, 'click', function(event) {
    //placeMarker(event.latLng);
    //});
		markerarray = [];
    populateMarkerArray();
}

function drop_marker()
 {
    marker.setMap(null);
    marker = null
    delete marker;
}

function submiterate_it()
 {
    latLng = marker.getPosition();
    if (marker != null)
    {
        new Ajax.Request('url...',
        {
            method: 'post',
            parameters: {
                latitude: latLng.lat(),
                longitude: latLng.lng()
            }
        });
    };
}
