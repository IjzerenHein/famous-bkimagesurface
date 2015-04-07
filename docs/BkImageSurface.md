<a name="module_BkImageSurface"></a>
#BkImageSurface
BkImageSurface adds support for sizing-strategies such as AspectFit and AspectFill for displaying images with famo.us.
It uses a 'div' with a background-image rather than a 'img' tag.

Can be used as a drop-in replacement for ImageSurface, in case the the size of the div is not derived
from the image.

<a name="exp_module_BkImageSurface"></a>
##class: BkImageSurface ⏏
**Members**

* [class: BkImageSurface ⏏](#exp_module_BkImageSurface)
  * [new BkImageSurface(options)](#exp_new_module_BkImageSurface)
  * [enum: BkImageSurface.SizeMode](#module_BkImageSurface.SizeMode)
    * [module:BkImageSurface.SizeMode.AUTO](#module_BkImageSurface.SizeMode.AUTO)
    * [module:BkImageSurface.SizeMode.FILL](#module_BkImageSurface.SizeMode.FILL)
    * [module:BkImageSurface.SizeMode.ASPECTFILL](#module_BkImageSurface.SizeMode.ASPECTFILL)
    * [module:BkImageSurface.SizeMode.ASPECTFIT](#module_BkImageSurface.SizeMode.ASPECTFIT)
  * [enum: BkImageSurface.PositionMode](#module_BkImageSurface.PositionMode)
    * [module:BkImageSurface.PositionMode.CENTER](#module_BkImageSurface.PositionMode.CENTER)
    * [module:BkImageSurface.PositionMode.LEFT](#module_BkImageSurface.PositionMode.LEFT)
    * [module:BkImageSurface.PositionMode.RIGHT](#module_BkImageSurface.PositionMode.RIGHT)
    * [module:BkImageSurface.PositionMode.TOP](#module_BkImageSurface.PositionMode.TOP)
    * [module:BkImageSurface.PositionMode.BOTTOM](#module_BkImageSurface.PositionMode.BOTTOM)
    * [module:BkImageSurface.PositionMode.TOPLEFT](#module_BkImageSurface.PositionMode.TOPLEFT)
    * [module:BkImageSurface.PositionMode.TOPRIGHT](#module_BkImageSurface.PositionMode.TOPRIGHT)
    * [module:BkImageSurface.PositionMode.BOTTOMLEFT](#module_BkImageSurface.PositionMode.BOTTOMLEFT)
    * [module:BkImageSurface.PositionMode.BOTTOMRIGHT](#module_BkImageSurface.PositionMode.BOTTOMRIGHT)
  * [enum: BkImageSurface.RepeatMode](#module_BkImageSurface.RepeatMode)
    * [module:BkImageSurface.RepeatMode.NONE](#module_BkImageSurface.RepeatMode.NONE)
    * [module:BkImageSurface.RepeatMode.VERTICAL](#module_BkImageSurface.RepeatMode.VERTICAL)
    * [module:BkImageSurface.RepeatMode.HORIZONTAL](#module_BkImageSurface.RepeatMode.HORIZONTAL)
    * [module:BkImageSurface.RepeatMode.BOTH](#module_BkImageSurface.RepeatMode.BOTH)
  * [bkImageSurface.setContent(imageUrl)](#module_BkImageSurface#setContent)
  * [bkImageSurface.getContent()](#module_BkImageSurface#getContent)
  * [bkImageSurface.setSizeMode(sizeMode)](#module_BkImageSurface#setSizeMode)
  * [bkImageSurface.getSizeMode()](#module_BkImageSurface#getSizeMode)
  * [bkImageSurface.setPositionMode(positionMode)](#module_BkImageSurface#setPositionMode)
  * [bkImageSurface.getPositionMode()](#module_BkImageSurface#getPositionMode)
  * [bkImageSurface.setRepeatMode(repeatMode)](#module_BkImageSurface#setRepeatMode)
  * [bkImageSurface.getRepeatMode()](#module_BkImageSurface#getRepeatMode)

<a name="exp_new_module_BkImageSurface"></a>
###new BkImageSurface(options)
**Params**

- options `Object` - Options.  
  - \[content\] `String` - Image-url.  
  - \[sizeMode\] `SizeMode` | `String` - Size-mode to use.  
  - \[positionMode\] `PositionMode` | `String` - Position-mode to use.  
  - \[repeatMode\] `RepeatMode` | `String` - Repeat-mode to use.  

<a name="module_BkImageSurface.SizeMode"></a>
###enum: BkImageSurface.SizeMode
**Properties**: `AUTO`, `FILL`, `ASPECTFILL`, `ASPECTFIT`  
<a name="module_BkImageSurface.PositionMode"></a>
###enum: BkImageSurface.PositionMode
**Properties**: `CENTER`, `LEFT`, `RIGHT`, `TOP`, `BOTTOM`, `TOPLEFT`, `TOPRIGHT`, `BOTTOMLEFT`, `BOTTOMRIGHT`  
<a name="module_BkImageSurface.RepeatMode"></a>
###enum: BkImageSurface.RepeatMode
**Properties**: `NONE`, `VERTICAL`, `HORIZONTAL`, `BOTH`  
<a name="module_BkImageSurface#setContent"></a>
###bkImageSurface.setContent(imageUrl)
**Params**

- imageUrl `String` - Image-url, when set will cause re-rendering  

<a name="module_BkImageSurface#getContent"></a>
###bkImageSurface.getContent()
**Returns**: `String` - Image-url  
<a name="module_BkImageSurface#setSizeMode"></a>
###bkImageSurface.setSizeMode(sizeMode)
**Params**

- sizeMode `SizeMode` | `String` - Sizing-mode, when set will cause re-rendering  

<a name="module_BkImageSurface#getSizeMode"></a>
###bkImageSurface.getSizeMode()
**Returns**: `SizeMode` | `String` - Size-mode  
<a name="module_BkImageSurface#setPositionMode"></a>
###bkImageSurface.setPositionMode(positionMode)
**Params**

- positionMode `PositionMode` | `String` - Position-mode, when set will cause re-rendering  

<a name="module_BkImageSurface#getPositionMode"></a>
###bkImageSurface.getPositionMode()
**Returns**: `RepeatMode` | `String` - Position-mode  
<a name="module_BkImageSurface#setRepeatMode"></a>
###bkImageSurface.setRepeatMode(repeatMode)
**Params**

- repeatMode `RepeatMode` | `String` - Repeat-mode, when set will cause re-rendering  

<a name="module_BkImageSurface#getRepeatMode"></a>
###bkImageSurface.getRepeatMode()
**Returns**: `RepeatMode` | `String` - Repeat-mode  
