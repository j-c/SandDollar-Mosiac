
/**
 * @type {foo}
 * @constructor
 */
function foo () {
	this.test = "test";
	return {
		d:function(){alert(this.test);}
	}
};
//foo.prototype = new foo();
/**
 * something
 * @memberOf foo
 * @method
 */
foo.prototype.b = function(){alert(this.test);};
/**
 * a string
 * @type {String}
 */
foo.prototype.c = "lol";
t = new foo();
