BkImageSurface
==============
BkImageSurface adds support for sizing-strategies such as AspectFit and AspectFill for displaying images with famo.us.
It uses a 'div' with a background-image rather than a 'img' tag.

Can be used as a drop-in replacement for ImageSurface, in case the the size of the div is not derived
from the image.

### Options

**[imageUrl]**: {String} Image-url

**[sizeMode]**: {Number} Sizing-mode to use.

### Sizing-modes

|Value|Description|
|---|---|
|SizeMode.FILL|Fills the image to the size of the div.|
|SizeMode.ASPECTFILL|Fills the div with the image while keeping correct image aspect ratio (crops if neccesary).|
|SizeMode.ASPECTFIT|Fits the whole image in the div while keeping correct image aspect ratio.|
|SizeMode.CENTER (default)|Centers the image in the div and keeps original image dimensions.|
|SizeMode.LEFT|Left aligns the image in the div.|
|SizeMode.RIGHT|Right aligns the image in the div.|
|SizeMode.TOP|Top aligns the image in the div.|
|SizeMode.BOTTOM|Bottom aligns the image in the div.|
|SizeMode.TOPLEFT|Aligns the image in the top-left corner of the div.|
|SizeMode.TOPRIGHT|Aligns the image in the top-right corner of the div.|
|SizeMode.BOTTOMLEFT|Aligns the image in the bottom-left corner of the div.|
|SizeMode.BOTTOMRIGHT|Aligns the image in the bottom-right corner of the div.|

### Repeat-modes

|Value|Description|
|---|---|
|RepeatMode.NONE (default)|No image-repeat.|
|RepeatMode.HORIZONTAL|Image is repeated horizontally.|
|RepeatMode.VERTICAL|Image is repeat vertically.|
|RepeatMode.BOTH|Image is repeated both horizontally and vertically.|
|RepeatMode.UNSET|Unsets the repeat-mode. Use this option is you want to set the repeat-mode using CSS or the .properties.|


class BkImageSurface
--------------------
**Methods**

BkImageSurface.constructor(options)
-----------------------------------
**Parameters**

**options**:  *Object*,  Options.

BkImageSurface.setContent(imageUrl)
-----------------------------------
**Parameters**

**imageUrl**:  *String*,  Image-url, when set will cause re-rendering

BkImageSurface.setSizeMode(sizeMode)
------------------------------------
**Parameters**

**sizeMode**:  *Number*,  Sizing-mode, when set will cause re-rendering

BkImageSurface.setRepeatMode(repeatMode)
----------------------------------------
**Parameters**

**repeatMode**:  *Number*,  Repeat-mode, when set will cause re-rendering

BkImageSurface.deploy(target)
-----------------------------
Place the document element that this component manages into the document.

NOTE: deploy and recall were added because famo.us removed the background-image
after the surface was removed/re-added from the DOM.



**Parameters**

**target**:  *Node*,  document parent of this container

BkImageSurface.recall(target)
-----------------------------
Remove this component and contained content from the document

NOTE: deploy and recall were added because famo.us removed the background-image
after the surface was removed/re-added from the DOM.



**Parameters**

**target**:  *Node*,  node to which the component was deployed

