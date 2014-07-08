/*
 * Copyright (c) 2014 Gloey Apps
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define*/

/**
 * @title BkImageSurface
 *
 * BkImageSurface adds support for sizing-strategies such as AspectFit and AspectFill for displaying images with famo.us.
 * It uses a 'div' with a background-image rather than a 'img' tag.
 *
 * Can be used as a drop-in replacement for ImageSurface, in case the the size of the div is not derived
 * from the image.
 *
 * ### Options
 *
 * **[content]**: {String} Image-url
 *
 * **[sizeMode]**: {Number} Sizing-mode to use.
 *
 * ### Sizing-modes
 *
 * |Value|Description|
 * |---|---|
 * |SizeMode.FILL|Fills the image to the size of the div.|
 * |SizeMode.ASPECTFILL|Fills the div with the image while keeping correct image aspect ratio (crops if neccesary).|
 * |SizeMode.ASPECTFIT|Fits the whole image in the div while keeping correct image aspect ratio.|
 * |SizeMode.CENTER (default)|Centers the image in the div and keeps original image dimensions.|
 * |SizeMode.LEFT|Left aligns the image in the div.|
 * |SizeMode.RIGHT|Right aligns the image in the div.|
 * |SizeMode.TOP|Top aligns the image in the div.|
 * |SizeMode.BOTTOM|Bottom aligns the image in the div.|
 * |SizeMode.TOPLEFT|Aligns the image in the top-left corner of the div.|
 * |SizeMode.TOPRIGHT|Aligns the image in the top-right corner of the div.|
 * |SizeMode.BOTTOMLEFT|Aligns the image in the bottom-left corner of the div.|
 * |SizeMode.BOTTOMRIGHT|Aligns the image in the bottom-right corner of the div.|
 *
 * ### Repeat-modes
 *
 * |Value|Description|
 * |---|---|
 * |RepeatMode.NONE (default)|No image-repeat.|
 * |RepeatMode.HORIZONTAL|Image is repeated horizontally.|
 * |RepeatMode.VERTICAL|Image is repeat vertically.|
 * |RepeatMode.BOTH|Image is repeated both horizontally and vertically.|
 * |RepeatMode.UNSET|Unsets the repeat-mode. Use this option is you want to set the repeat-mode using CSS or the .properties.|
*/
define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var Surface = require('famous/core/Surface');

    /**
     * Sizing-modes
     */
    var SizeMode = {
        FILL: 0,
        ASPECTFILL: 1,
        ASPECTFIT: 2,
        CENTER: 3,
        LEFT: 4,
        RIGHT: 5,
        TOP: 6,
        BOTTOM: 7,
        TOPLEFT: 8,
        TOPRIGHT: 9,
        BOTTOMLEFT: 10,
        BOTTOMRIGHT: 11
    };

    /**
     * Repeat-modes
     */
    var RepeatMode = {
        NONE: 0,
        VERTICAL: 1,
        HORIZONTAL: 2,
        BOTH: 3,
        UNSET: 4
    };

    /**
     * @class BkImageSurface
     * @method constructor
     * @constructor
     * @param {Object} options Options.
     */
    function BkImageSurface(options) {
        Surface.apply(this, arguments);
        this.content = undefined;
        this._sizeMode = options ? options.sizeMode : undefined;
        this._imageUrl = options ? options.content : undefined;
        this._repeatMode = (options && (options.repeatMode !== undefined)) ? options.repeatMode : RepeatMode.NONE;

        this._updateProperties();
    }
    BkImageSurface.prototype = Object.create(Surface.prototype);
    BkImageSurface.prototype.constructor = BkImageSurface;
    BkImageSurface.prototype.elementType = 'div';
    BkImageSurface.prototype.elementClass = 'famous-surface';
    BkImageSurface.SizeMode = SizeMode;
    BkImageSurface.RepeatMode = RepeatMode;

    /**
     * @method _updateProperties
     * @private
     */
    BkImageSurface.prototype._updateProperties = function() {
        var props = this.getProperties();
        props.backgroundImage = 'url(' + this._imageUrl + ')';

        props.backgroundSize = 'auto';
        props.backgroundPosition = 'center';
        switch (this._sizeMode) {
        case SizeMode.FILL:
            props.backgroundSize = '100% 100%';
            break;
        case SizeMode.ASPECTFILL:
            props.backgroundSize = 'cover';
            break;
        case SizeMode.ASPECTFIT:
            props.backgroundSize = 'contain';
            break;
        case SizeMode.CENTER:
            props.backgroundSize = 'auto';
            break;
        case SizeMode.LEFT:
            props.backgroundPosition = 'left center';
            break;
        case SizeMode.RIGHT:
            props.backgroundPosition = 'right center';
            break;
        case SizeMode.TOP:
            props.backgroundPosition = 'center top';
            break;
        case SizeMode.BOTTOM:
            props.backgroundPosition = 'center bottom';
            break;
        case SizeMode.TOPLEFT:
            props.backgroundPosition = 'left top';
            break;
        case SizeMode.TOPRIGHT:
            props.backgroundPosition = 'right top';
            break;
        case SizeMode.BOTTOMLEFT:
            props.backgroundPosition = 'left bottom';
            break;
        case SizeMode.BOTTOMRIGHT:
            props.backgroundPosition = 'right bottom';
            break;
        }

        switch (this._repeatMode) {
        case RepeatMode.NONE:
            props.backgroundRepeat = 'no-repeat';
            break;
        case RepeatMode.HORIZONTAL:
            props.backgroundRepeat = 'repeat-x';
            break;
        case RepeatMode.VERTICAL:
            props.backgroundRepeat = 'repeat-y';
            break;
        case RepeatMode.BOTH:
            props.backgroundRepeat = 'repeat';
            break;
        case RepeatMode.UNSET:
            delete props.backgroundRepeat;
            break;
        }

        this.setProperties(props);
    };

    /**
     * @method setContent
     * @param {String} imageUrl Image-url, when set will cause re-rendering
     */
    BkImageSurface.prototype.setContent = function(imageUrl) {
        this._imageUrl = imageUrl;
        this._updateProperties();
    };

    /**
     * @method setSizeMode
     * @param {Number} sizeMode Sizing-mode, when set will cause re-rendering
     */
    BkImageSurface.prototype.setSizeMode = function(sizeMode) {
        this._sizeMode = sizeMode;
        this._updateProperties();
    };

    /**
     * @method setRepeatMode
     * @param {Number} repeatMode Repeat-mode, when set will cause re-rendering
     */
    BkImageSurface.prototype.setRepeatMode = function(repeatMode) {
        this._repeatMode = repeatMode;
        this._updateProperties();
    };

    /**
     * Place the document element that this component manages into the document.
     *
     * NOTE: deploy and recall were added because famo.us removed the background-image
     * after the surface was removed/re-added from the DOM.
     *
     * @private
     * @method deploy
     * @param {Node} target document parent of this container
     */
    BkImageSurface.prototype.deploy = function deploy(target) {
        target.style.backgroundImage = 'url(' + this._imageUrl + ')';
    };

    /**
     * Remove this component and contained content from the document
     *
     * NOTE: deploy and recall were added because famo.us removed the background-image
     * after the surface was removed/re-added from the DOM.
     *
     * @private
     * @method recall
     * @param {Node} target node to which the component was deployed
     */
    BkImageSurface.prototype.recall = function recall(target) {
        target.style.backgroundImage = '';
    };

    module.exports = BkImageSurface;
});
