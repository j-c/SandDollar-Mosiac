/**
 * HailStone number generator.
 * @type {SandDollarNumberGenerator}
 * @constructor
 */
function HailStoneGenerator() {
	this.num = Math.round(Math.random() * 100) + 1; // +1 prevents zero.
	//this.sequenceLength = 0;
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
HailStoneGenerator.prototype.getValue = function ()
{
	//this.sequenceLength++;
	if (this.num == 1)
	{
		// end of hailstone
		this.num = Math.round(Math.random() * 100);
		//this.sequenceLength = 0;
		return 1;
	}
	else if (this.num % 2 == 0)
	{
		// even
		this.num = this.num >> 1; // "right bit shift 1" is the same as "/ 2"
		return this.num;
	}
	else
	{
		// odd
		this.num = 3 * this.num + 1;
		return this.num;
	}
}