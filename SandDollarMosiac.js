i ="wrong";


/**
 * Generates a mosiac with sandollars
 * @param {HtmlCanvasObject}	canvas			the canvas DOM object to draw to.
 * @param {Object} 	glyphGenerator	object that draws glyphs and provides meta info about said glyphs.
 * @param {Object}	numberGenerator	object that determines which glyphs are drawn.
 * @type{SandDollarMosiac}
 * @constructor
 */
function SandDollarMosiac (canvas, glyphGenerator, numberGenerator) {};

/**
 * Canvas to draw on.
 * @property
 * @type {HtmlCanvasObject}
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.canvas = null;

/**
 * Canvas context to draw on
 * @property
 * @type {CanvasRenderingContext2D}
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.c = null;

/**
 * Object used to generate/retrieve glyphs for use in the mosiac. function(value:Number, grid_x:int, grid_y:int, screen_x:int, screen_y:int):HtmlCanvasObject.
 * @property
 * @type {Object}
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.glyphGenerator = null;

/**
 * Object used to decide glyphs for use in the mosiac. function(grid_x:int, grid_y:int, screen_x:int, screen_y:int):int.
 * @property
 * @type {Object}
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.numberGenerator = null;

/**
 * Sets the canvas object to draw on
 * @method
 * @param {HtmlCanvasObject}	canvas	The canvas DOM object to draw to.
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.setCanvas = function (canvas) {
	if (typeof canvas != 'undefined') {
		this.canvas = canvas;
		this.c = canvas.getContext("2d");
	}
}

/**
 * Sets the glyph generator. Has to emit the following method: getGlyph(value:Number, grid_x:int, grid_y:int, screen_x:int, screen_y:int):HtmlCanvasObject.
 * @method
 * @param	{Object}	glyphGeneratorObject	function to generate/retrieve glyphs with.
 * @type {Object}
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.setGlyphGenerator = function (glyphGeneratorObject) { this.glyphGenerator = glyphGeneratorObject; };

/**
 * Sets the number generator to choose glyphs based on screen and/or grid location. Has to emit the following method: getValue(grid_x:int, grid_y:int, screen_x:int, screen_y:int):int.
 * @method
 * @param	{Object}	numberGeneratorObject	function to generate numbers with.
 * @type {Object}
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.setNumberGenerator = function (numberGeneratorObject) { this.numberGenerator = numberGeneratorObject; };

/**
 * @method
 * Draws on the pre set canvas.
 * @memberOf SandDollarMosiac
 */
SandDollarMosiac.prototype.draw = function() {
	if (this.c == null) return; // Abort if no canvas context
	with(this) {
		var canvasWidth = canvas.width,
			canvasHeight = canvas.height;

		// clear the canvas
		c.clearRect(0, 0, canvasWidth, canvasHeight);
		canvas.width = 1;
		canvas.width = canvasWidth;
		
		// start drawing
		var canvasX = 0, canvasY = 0, x = 0, y = 0;
		var value, glyph;
		while (canvasY < canvasHeight) {
			canvasX = 0;			
			x = 0;
			while (canvasX < canvasWidth) {
				value = numberGenerator.getValue(x, y, canvasX, canvasY);
				glyph = glyphGenerator.getGlyph(value, x, y, canvasX, canvasY);
				c.drawImage(glyph, canvasX, canvasY, glyph.width, glyph.height);
				canvasX += glyph.width;
				x++;
			}
			canvasY += glyph.height;
			y++;
		}
	}
};

/**
 * Basic glyph generator. Provides x glyphs that are 10px x 10px large
 * @type {SandDollarGlyphGenerator}
 * @constructor
 */
SandDollarGlyphGenerator = function () {
	var canvas, c; 
	var glyphHeight = 10;
	var glyphWidth = 10;
	
	// Glyph 0
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight;
	canvas.width = glyphWidth;
	this.glyphs.push(canvas);
	
	// Glyph 1
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight;
	canvas.width = glyphWidth;
	c = canvas.getContext("2d");
	c.fillRect(0, 0, glyphWidth, glyphHeight);
	this.glyphs.push(canvas);

	// Glyph 2
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight;
	canvas.width = glyphWidth;
	c = canvas.getContext("2d");
	c.fillRect(1, 1, glyphWidth - 2, glyphHeight - 2);
	//this.glyphs.push(canvas);

	// Glyph 3
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight;
	canvas.width = glyphWidth;
	c = canvas.getContext("2d");
	c.fillRect(2, 2, glyphWidth - 4, glyphHeight - 4);
	//this.glyphs.push(canvas);
	
	// Glyph 4
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight;
	canvas.width = glyphWidth;
	c = canvas.getContext("2d");
	c.fillRect(3, 3, glyphWidth - 6, glyphHeight - 6);
	//this.glyphs.push(canvas);
	
	// Glyphs 5a-d
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 2; j++) {
			canvas = document.createElement("canvas");
			canvas.height = glyphHeight;
			canvas.width = glyphWidth;
			c = canvas.getContext("2d");
			c.fillRect(i * 3, j * 3, 7, 7);
			this.glyphs.push(canvas);
		}
	}

	// Glyphs 6a-d
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 2; j++) {
			canvas = document.createElement("canvas");
			canvas.height = glyphHeight;
			canvas.width = glyphWidth;
			c = canvas.getContext("2d");
			c.fillRect(i * 2, j * 2, 8, 8);
			this.glyphs.push(canvas);
		}
	}

	// Glyphs 7a-d
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 2; j++) {
			canvas = document.createElement("canvas");
			canvas.height = glyphHeight;
			canvas.width = glyphWidth;
			c = canvas.getContext("2d");
			c.fillRect(i * 1, j * 1, 9, 9);
			this.glyphs.push(canvas);
		}
	}

	this.glyphCount = this.glyphs.length;
}

/**
 * Array of glyphs available in in this generator.
 * @property
 * @type {HtmlCanvasObject}
 * @memberOf SandDollarGlyphGenerator
 */
SandDollarGlyphGenerator.prototype.glyphs = [];

/**
 * Retrieves glyph.
 * @method
 * @param	{Number}	value	Glyph to pick.
 * @param	{int}	gridX	(unused) X location on the grid.
 * @param	{int}	gridY	(unused) Y location on the grid.
 * @param	{int}	canvasX	(unused) X location on the canvas.
 * @param	{int}	canvasY	(unused) Y location on the canvas.
 * @type {HtmlCanvasObject}
 */
SandDollarGlyphGenerator.prototype.getGlyph = function(value, gridX, gridY, canvasX, canvasY) {
	return this.glyphs[Math.floor(value) % this.glyphCount];
}


/**
 * Basic random number generator.
 * @type {SandDollarNumberGenerator}
 * @constructor
 */
function SandDollarNumberGenerator() {};
/**
 * Generates a random number from 0-100.
 * @method
 * @param	{int}	gridX	(unused) X location on the grid.
 * @param	{int}	gridY	(unused) Y location on the grid.
 * @param	{int}	canvasX	(unused) X location on the canvas.
 * @param	{int}	canvasY	(unused) Y location on the canvas.
 * @type {Number}
 */
SandDollarNumberGenerator.prototype.getValue = function ()
{
	return Math.random() * 100;
}

