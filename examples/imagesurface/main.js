/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define*/

define(function(require) {
    'use strict';

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var RenderNode = require('famous/core/RenderNode');
    var GridLayout = require('famous/views/GridLayout');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // create the main context
    var mainContext = Engine.createContext();

    // Create grid-layout
    var renderables = [];
    var grid = new GridLayout({
        dimensions: [3, 3]
    });
    grid.sequenceFrom(renderables);

    var url = 'images/earth.png';
    function _addImage(size, text) {
        var back = new Surface({
            properties: {
                backgroundColor: 'black'
            }
        });

        var image = new ImageSurface({
            size: size,
            content: url,
            properties: {
                backgroundColor: 'black'
            }
        });

        var text = new Surface({
            content: 'size: ' + JSON.stringify(size) + '<br>desc: ' + text,
            properties: {
                color: 'white',
                padding: '10px',
                textShadow: '0px 1px 2px rgba(0, 0, 0, 1)'
            }
        });

        var modifier = new Modifier({
            align: [0.5, 0.5],
            origin: [0.5, 0.5]
        });
        var renderNode = new RenderNode(modifier);
        renderNode.add(back);
        renderNode.add(image);
        renderNode.add(text);
        renderables.push(renderNode);
    }

    _addImage([undefined, undefined], 'fill');
    _addImage([100, undefined], 'fixed width, stretch height');
    _addImage([undefined, 100], 'fixed height, stretch width');
    _addImage([true, true], 'true size');
    _addImage([200, true], 'fixed width, keep aspect ratio');
    _addImage([true, 100], 'fixed height, keep aspect ratio');
    _addImage([undefined, true], 'fill width, keep aspect ratio');
    _addImage([true, undefined], 'fill height, keep aspect ratio');

    mainContext.add(grid);
});
