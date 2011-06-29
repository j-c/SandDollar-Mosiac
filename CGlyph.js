/**
 * "C" glyph generator. Provides x glyphs that are 10px x 10px large
 * @type {CGlyphGenerator}
 * @constructor
 */
CGlyphGenerator = function () {
	var canvas, c; 
	var glyphHeight = 10;
	var glyphWidth = 10;
	
	// Glyph 0
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight + 1;
	canvas.width = glyphWidth + 1;
	c = canvas.getContext("2d");
	c.fillRect(1, 1, glyphWidth, glyphHeight);
	c.clearRect(2, 2, glyphWidth - 2, glyphHeight - 2);
	c.fillRect(3, 3, glyphWidth - 4, glyphHeight - 4);
	this.glyphs.push(canvas);

	// Glyph 1
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight + 1;
	canvas.width = glyphWidth + 1;
	c = canvas.getContext("2d");
	c.fillRect(1, 1, glyphWidth, glyphHeight);
	c.clearRect(3, 3, glyphWidth - 4, glyphHeight - 4);
	this.glyphs.push(canvas);

	// Glyph 2
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight + 1;
	canvas.width = glyphWidth + 1;
	c = canvas.getContext("2d");
	c.fillRect(1, 1, glyphWidth, glyphHeight);
	c.clearRect(4, 4, glyphWidth - 6, glyphHeight - 6);
	c.fillRect(5, 5, glyphWidth - 8, glyphHeight - 8);
	//this.glyphs.push(canvas);

	// Glyph 3
	canvas = document.createElement("canvas");
	canvas.height = glyphHeight + 1;
	canvas.width = glyphWidth + 1;
	c = canvas.getContext("2d");
	c.fillRect(1, 1, glyphWidth, glyphHeight);
	c.clearRect(3, 3, glyphWidth - 4, glyphHeight - 4);
	c.fillRect(4, 4, glyphWidth - 6, glyphHeight - 6);
	this.glyphs.push(canvas);

	this.glyphCount = this.glyphs.length;
}

/**
 * Array of glyphs available in in this generator.
 * @property
 * @type {HtmlCanvasObject}
CGlyphGeneratorlyphGenerator
 */
CGlyphGenerator.prototype.glyphs = [];

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
CGlyphGenerator.prototype.getGlyph = function(value, gridX, gridY, canvasX, canvasY) {
	return this.glyphs[Math.floor(value) % this.glyphCount];
}