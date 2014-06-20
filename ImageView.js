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

/*jslint browser:true, nomen:true, vars:true, plusplus:true*/
/*global define, google*/

/**
 * @title ImageView
 * 
 * Image-view for famo.us which uses a surface with a background-image to support different sizing
 * strategies such as ScaleToFit and FitToScale.
 *
 * Can be used as a drop-in replacement for ImageSurface, in case the the size of the div is not derived 
 * from the image.
 *
 * ### Options
 *
 * **mapOptions**: Options that are passed directly to the google.maps.Map object. The options should include the 'center' and 'zoom'.
 *
 * **[id]**: Id of the DOM-element to use. When ommitted, a DOM-element is created using a surface.
 *
 * **[zoomTransition]**: Transition to use for smoothly zooming renderables (by default a transition of 120 ms is used).
 */


define(function (require, exports, module) {
    'use strict';
    
    // import dependencies
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    
    /** @enum */
    var SizeMode = {
        FILL: 0,
        ASPECTFILL: 2,
        ASPECTFIT: 3,
        CENTER: 4,
        LEFT: 5,
        RIGHT: 6,
        TOP: 7,
        BOTTOM: 8,
        TOPLEFT: 9,
        TOPRIGHT: 10,
        BOTTOMLEFT: 11,
        BOTTOMRIGHT: 12
    };
    
    /**
     * A view containing a google-map
     *
     * @class ImageView
     * @constructor
     * @param {Object} options Options.
     */
    function ImageView(options) {
        View.apply(this, arguments);
        
        // Create surface
        this._surface = new Surface();
        //this.add(
        
        // Process defaults
        this._sizeMode = options ? options.sizeMode : undefined;
        this._imageUrl = options ? options.imageUrl : undefined;
        this._updateProperties();
    }
    ImageView.prototype = Object.create(View.prototype);
    ImageView.prototype.constructor = ImageView;
    
    /**
     * @property ImageView.DEFAULT_OPTIONS
     */
    ImageView.DEFAULT_OPTIONS = {
    };
    
    
    /**
     * @method _updateProperties
     * @private
     */
    ImageView.prototype._updateProperties = function () {
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
        this.setProperties(props);
    };
    
    /**
     * @method setContent
     */
    ImageView.prototype.setContent = function (imageUrl) {
        this._imageUrl = imageUrl;
        this._updateProperties();
    };
    
    /**
     * @method setSizeMode
     */
    ImageView.prototype.setSizeMode = function (sizeMode) {
        if (sizeMode !== this._sizeMode) {
            this._sizeMode = sizeMode;
            this._updateProperties();
        }
    };

    module.exports = ImageView;
});
