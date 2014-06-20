famous-imageview
==========

Image-view for famo.us which uses a surface with a background-image to support different sizing
strategies such as ScaleToFit and FitToScale.

Can be used as a drop-in replacement for ImageSurface, in case the the size of the div is not derived 
from the image.

## Demo

[View the demo here](https://rawgit.com/IjzerenHein/famous-imageview/master/examples/demo/index.html)


## Installation

Install using bower:
	
	bower install famous-imageview
	
## Getting started

Add famous-imageview to the requirejs paths config:

```javascript
require.config({
    paths: {
        ...
        'famous-imageview': 'bower_components/famous-imageview',
        ...
    }
});
```

Example of how to create a ImageView:

```javascript
var ImageView = require('famous-imageview/ImageView');

var imageView = new ImageView({
    mapOptions: {
        zoom: 3,
        center: new google.maps.LatLng(51.4484855, 5.451478),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
});
this.add(imageView);

## Documentation

To access the underlying google.maps.Map object, use MapView.getMap(). The Map-object
is only safely accessible after the 'load' event, because the DOM-object must first be created and google-maps need to load.

```javascript
mapView.on('load', function () {
    var map = mapView.getMap();
    ...
});
```

##### Panning the map using transitions

To pan the map using famo.us transitions, use MapView.setPosition().
Transitions are chained, so you can create paths that the map will follow.

```javascript
mapView.setPosition(
    new google.maps.LatLng(51.4484855, 5.451478),
    { duration: 5000, curve: Easing.outBack },
    function () {
        mapView.getMap().setZoom(7)
    }
);
```

##### Linking a renderable to a geographical coordinate on the map

To place a renderable on the map like a marker, use MapModifier or MapStateModifier:

```javascript
MapModifier = require('famous-map/MapModifier');

var surface = new Surface({
    size: [50, 50],
    properties: {
        backgroundColor: 'white'
    }
});
var modifier = new Modifier({
    align: [0, 0],
    origin: [0.5, 0.5]
});
var mapModifier = new MapModifier({
    mapView: mapView,
    position: new google.maps.LatLng(51.4484855, 5.451478)
});
this.add(mapModifier).add(modifier).add(surface);
```

##### Moving a renderable across the map

MapStateModifier relates to MapModifier in the same way StateModifier relates to Modifier.
MapStateModifier makes it possible to change the position from one place to another, using
a transitionable. Transitions are chained, so you can create paths that the renderable will follow:

```javascript
MapStateModifier = require('famous-map/MapStateModifier');

var surface = new Surface({
    size: [50, 50],
    properties: {
        backgroundColor: 'white'
    }
});
var modifier = new Modifier({
    align: [0, 0],
    origin: [0.5, 0.5]
});
var mapStateModifier = new MapStateModifier({
    mapView: mapView,
    position: new google.maps.LatLng(51.4484855, 5.451478)
});
this.add(mapStateModifier).add(modifier).add(surface);

// Animate the renderable across the map
mapStateModifier.setPosition(
    new google.maps.LatLng(52.4484855, 6.451478),
    { method: 'map-speed', speed: 200 } // 200 km/h
);
mapStateModifier.setPosition(
    new google.maps.LatLng(50.4484855, 3.451478),
    { duration: 4000 }
);
```

##### Enable auto-scaling when the map is zoomed in or out

To enable auto-scaling set zoomBase to the zoom-level you wish the renderables to be displayed in its true size. In this example where zoomBase is set to 5, this would mean that at zoom-level 4 its size will 1/4 of its original size:

```javascript
var mapModifier = new MapModifier({
    mapView: mapView,
    position: new google.maps.LatLng(51.4484855, 5.451478),
    zoomBase: 5
});
```

To use a different zooming strategy, use zoomScale. ZoomScale can be set to either a number or a getter function:

```javascript
var mapModifier = new MapModifier({
    mapView: mapView,
    position: new google.maps.LatLng(51.4484855, 5.451478),
    zoomBase: 5,
    zoomScale: 0.5
});

var mapModifier = new MapModifier({
    mapView: mapView,
    position: new google.maps.LatLng(51.4484855, 5.451478),
    zoomBase: 5,
    zoomScale: function (baseZoom, currentZoom) {
        var zoom = currentZoom - baseZoom;
        if (zoom < 0) {
            return 1 / (2 * (Math.abs(zoom) + 1));
        } else {
            return 1 + (2 * zoom);
        }
    }
});
```

##### API reference

|Class|Description|
|---|---|
|[MapView](docs/MapView.md)|View class which encapsulates a google-maps V3 map.|
|[MapModifier](docs/MapModifier.md)|Stateless modifier which positions a renderable based on a geographical position {LatLng}.|
|[MapStateModifier](docs/MapStateModifier.md)|Modifier which positions a renderable based on a geographical position {LatLng}, using transitions.|
|[MapUtility](docs/MapUtility.md)|General purpose utility functions.
|[MapTransition](docs/MapTransition.md)|Transition for moving at a certain speed over the map (km/h).
|[MapPositionTransitionable](docs/MapPositionTransitionable.md)|Transitionable for geographical coordinates {LatLng}.


## Contact
- 	@IjzerenHein
- 	http://www.gloey.nl
- 	hrutjes@gmail.com

© 2014 - Hein Rutjes