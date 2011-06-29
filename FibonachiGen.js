/**
 * Fibonachi number generator.
 * @type {SandDollarNumberGenerator}
 * @constructor
 */
function FibonachiNumberGenerator() {
	this.lastNum = 0;
	this.currNum = 1;
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
FibonachiNumberGenerator.prototype.getValue = function ()
{
	var result = this.lastNum + this.currNum;
	if (result < Number.MAX_VALUE)
	{
		this.lastNum = this.currNum;
		this.currNum = result;
		return result;
	}
	else
	{
		this.lastNum = 0;
		this.currNum = 1;
		return 1;
	}
}

