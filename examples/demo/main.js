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
/*global define*/

define(function (require) {
    'use strict';
    
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var RenderNode = require('famous/core/RenderNode');
    var GridLayout = require('famous/views/GridLayout');
    var BkImageSurface = require('famous-bkimagesurface/BkImageSurface');

    // create the main context
    var mainContext = Engine.createContext();

    // Create grid-layout
    var renderables = [];
    var grid = new GridLayout({
        dimensions: [4, 3]
    });
    grid.sequenceFrom(renderables);
     
    // Demo sizing-modes
    var url = 'images/earth.png';
    var sizeMode;
    for (sizeMode in BkImageSurface.SizeMode) {
        var bkImage = new BkImageSurface({
            content: url,
            sizeMode: BkImageSurface.SizeMode[sizeMode],
            properties: {
                backgroundColor: 'black'
            }
        });
        
        var text = new Surface({
            content: 'SizeMode.' + sizeMode,
            properties: {
                color: 'white',
                padding: '10px',
                textShadow: '0px 1px 2px rgba(0, 0, 0, 1)'
            }
        });
        
        var modifier = new Modifier();
        var renderNode = new RenderNode(modifier);
        renderNode.add(bkImage);
        renderNode.add(text);
        renderables.push(renderNode);
    }
    
    mainContext.add(grid);
});
