/**
 * Sine number generator.
 * @type {SandDollarNumberGenerator}
 * @constructor
 */
function SineGenerator() {
	this.num = 0;
	this.max = 100;
};
/**
 * Generates a random number from 0-100.
 * @method
 * @param	{int}	gridX	(unused) X location on the grid.
 * @param	{int}	gridY	(unused) Y location on the grid.
 * @param	{int}	canvasX	(unused) X location on the canvas.
 * @param	{int}	canvasY	(unused) Y location on the canvas.
 * @type {Number}
 */
SineGenerator.prototype.getValue = function ()
{
	this.num += 0.01;
	var result = Math.floor(Math.sin(this.num) * this.max);
	if (result <= Number.MAX_VALUE && result >= Number.MIN_VALUE) {
		return Math.abs(result);
	}
	else return 0;
}

