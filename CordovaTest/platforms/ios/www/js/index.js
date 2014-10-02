var map, center, app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var button = document.getElementById("button"),
            mapCanvas;

        center = new plugin.google.maps.LatLng(37.422858, -122.085065);
        mapCanvas = document.getElementById("map_canvas");
        map = plugin.google.maps.Map.getMap(mapCanvas, {
            'backgroundColor': 'white',
            'mapType': plugin.google.maps.MapTypeId.SATELLITE,
            //'center': center,
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true
            },
            'camera': {
                'latLng': center,
                'zoom': 15
            }
        });

        //Events listeners
        button.addEventListener("click", mapFullScreen, false);
        map.addEventListener(plugin.google.maps.event.MAP_READY, animateMap);
        map.addEventListener(plugin.google.maps.event.MAP_LOADED, animateMap);
    }
};

var mapFullScreen = function () {
    map.showDialog();
}

var animateMap = function () {
    map.animateCamera({
        'target': center,
        'tilt': 60,
        'zoom': 18,
        'bearing': 140,
        'duration': 5000
    });
};

// cordova plugin add plugin.google.maps --variable API_KEY_FOR_ANDROID="AIzaSyCPXsr5pyfa3-XUeL4YoNtyy1OKcDwPleY" --variable API_KEY_FOR_IOS="AIzaSyB1l0IDnDEhfuTkz7Sev8iKNljLYC_6WXQ"
