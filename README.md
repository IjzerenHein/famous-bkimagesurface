famous-bkimagesurface
==========

BkImageSurface adds support for sizing-strategies such as AspectFit and AspectFill for displaying images with famo.us.
It uses a 'div' with a background-image rather than a 'img' tag.

Can be used as a drop-in replacement for ImageSurface, *in case the size of the div is not derived from the image*.

## Demo

[View the demo here](https://rawgit.com/IjzerenHein/famous-imageview/master/examples/demo/index.html)

	
## Getting started

Install using bower or npm:

    bower install famous-bkimagesurface

    npm install famous-bkimagesurface

Example of how to create a BkImageSurface:

```javascript
var BkImageSurface = require('famous-bkimagesurface');

var imageSurface = new BkImageSurface({
    content: 'myimage.png',
    sizeMode: BkImageSurface.SizeMode.ASPECTFILL
});
this.add(imageSurface);
```

all possible modes:

```javascript
var imageSurface = new BkImageSurface({
    content: 'myimage.png',
    sizeMode: BkImageSurface.SizeMode.ASPECTFILL,
    positionMode: BkImageSurface.PositionMode.TOP,
    repeatMode: BkImageSurface.RepeatMode.NONE
});
this.add(imageSurface);
```

using css-style values directly:

```javascript
var imageSurface = new BkImageSurface({
    content: 'myimage.png',
    sizeMode: '100px 50%',
    positionMode: 'center center',
    repeatMode: 'repeat-x'
});
this.add(imageSurface);
```

using the setter-functions:

```javascript
var imageSurface = new BkImageSurface();
imageSurface.setContent('http://www.myimage.png');
imageSurface.setSizeMode(BkImageSurface.SizeMode.ASPECTFIT);
imageSurface.setPositionMode(BkImageSurface.PositionMode.RIGHT);
imageSurface.setRepeatMode(BkImageSurface.RepeatMode.VERTICAL);
```

## Documentation

The size-, position- and repeat- modes correspond directly to the following css-styles:

|Mode|CSS-style|
|----|---------|
|SizeMode|`background-size`|
|PositionMode|`background-position`|
|RepeatMode|`background-repeat`|

According to your liking you can choose to use either the Mode-definitions or CSS-styles directly.

### Size-modes

|Mode|Value|Description|
|-----|---------|-----------|
|SizeMode.AUTO|auto|Keeps the original image dimensions.|
|SizeMode.FILL **(default)**|100% 100%|Fills the image to the size of the div.|
|SizeMode.ASPECTFILL|cover|Fills the div with the image while keeping correct image aspect ratio (crops if neccesary).|
|SizeMode.ASPECTFIT|contain|Fits the whole image in the div while keeping correct image aspect ratio.|

### Position-modes

|Mode|Value|Description|
|----|-----|-----------|
|PositionMode.CENTER **(default)**|center center|Centers the image in the div.|
|PositionMode.LEFT|left center|Left aligns the image in the div.|
|PositionMode.RIGHT|right center|Right aligns the image in the div.|
|PositionMode.TOP|center top|Top aligns the image in the div.|
|PositionMode.BOTTOM|center bottom|Bottom aligns the image in the div.|
|PositionMode.TOPLEFT|left top|Aligns the image in the top-left corner of the div.|
|PositionMode.TOPRIGHT|right top|Aligns the image in the top-right corner of the div.|
|PositionMode.BOTTOMLEFT|left bottom|Aligns the image in the bottom-left corner of the div.|
|PositionMode.BOTTOMRIGHT|right bottom|Aligns the image in the bottom-right corner of the div.|

### Repeat-modes

|Mode|Value|Description|
|-----|---------|-----------|
|RepeatMode.NONE **(default)**|no-repeat|No image-repeat.|
|RepeatMode.HORIZONTAL|repeat-y|Image is repeated horizontally.|
|RepeatMode.VERTICAL|repeat-x|Image is repeated vertically.|
|RepeatMode.BOTH|repeat|Image is repeated both horizontally and vertically.|

### API reference

|Class|Description|
|---|---|
|[BkImageSurface](docs/BkImageSurface.md)|Background image surface class.|

## Contribute

Feel free to contribute to this project in any way. The easiest way to support this project is by giving it a star.

## Contact
- 	@IjzerenHein
- 	http://www.gloey.nl
- 	hrutjes@gmail.com

© 2014 - Hein Rutjes
