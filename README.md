famous-bkimagesurface
==========

BkImageSurface adds support for sizing-strategies such as AspectFit and AspectFill for displaying images with famo.us.
It uses a 'div' with a background-image rather than a 'img' tag.

Can be used as a drop-in replacement for ImageSurface, *in case the the size of the div is not derived from the image*.

## Demo

[View the demo here](https://rawgit.com/IjzerenHein/famous-imageview/master/examples/demo/index.html)


## Installation

Install using bower:
	
	bower install IjzerenHein/famous-bkimagesurface
	
## Getting started

Add bkimagesurface to the requirejs paths config:

```javascript
require.config({
    paths: {
        ...
        'famous-bkimagesurface': 'bower_components/famous-bkimagesurface',
        ...
    }
});
```

Example of how to create a BkImageSurface:

```javascript
var BkImageSurface = require('famous-bkimagesurface/BkImageSurface');

var imageSurface = new BkImageSurface({
    content: 'myimage.png',
    sizeMode: BkImageSurface.SizeMode.ASPECTFILL
});
this.add(imageSurface);
```

or use the setter-functions:

```javascript
var imageSurface = new BkImageSurface();
imageSurface.setContent('http://www.myimage.png');
imageSurface.setSizeMode(BkImageSurface.SizeMode.ASPECTFIT);
```

## Sizing-modes

|Value|Description|
|---|---|
|SizeMode.FILL|Fills the image to the size of the div.|
|SizeMode.ASPECTFILL|Fills the div with the image while keeping correct image aspect ratio (crops if neccesary).|
|SizeMode.ASPECTFIT|Fits the whole image in the div while keeping correct image aspect ratio.|
|SizeMode.CENTER|Centers the image in the div and keeps original image dimensions  **(default)**.|
|SizeMode.LEFT|Left aligns the image in the div.|
|SizeMode.RIGHT|Right aligns the image in the div.|
|SizeMode.TOP|Top aligns the image in the div.|
|SizeMode.BOTTOM|Bottom aligns the image in the div.|
|SizeMode.TOPLEFT|Aligns the image in the top-left corner of the div.|
|SizeMode.TOPRIGHT|Aligns the image in the top-right corner of the div.|
|SizeMode.BOTTOMLEFT|Aligns the image in the bottom-left corner of the div.|
|SizeMode.BOTTOMRIGHT|Aligns the image in the bottom-right corner of the div.|

## Image repeat

BkImageSurface attempts to be a drop-in-replacement for ImageSurface and therefore disables image-repeating by default.

To enable image-repeating on the div, use RepeatMode:

```javascript
var imageSurface = new BkImageSurface({
    repeatMode: BkImageSurface.RepeatMode.HORIZONTAL
});

imageSurface.setRepeatMode(BkImageSurface.RepeatMode.BOTH);
```

### Repeat-modes

|Value|Description|
|---|---|
|RepeatMode.NONE|No image-repeat **(default)**.|
|RepeatMode.HORIZONTAL|Image is repeated horizontally.|
|RepeatMode.VERTICAL|Image is repeat vertically.|
|RepeatMode.BOTH|Image is repeated both horizontally and vertically.|
|RepeatMode.UNSET|Unsets the repeat-mode. Use this option is you want to set the repeat-mode using CSS or using `options.properties.backgroundRepeat`.|

## API reference

|Class|Description|
|---|---|
|[BkImageSurface](docs/BkImageSurface.md)|Background image surface class.|


## Contact
- 	@IjzerenHein
- 	http://www.gloey.nl
- 	hrutjes@gmail.com

© 2014 - Hein Rutjes