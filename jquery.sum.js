(function ($) {
	// DOM
	if (!Array.prototype.sum)
		Array.prototype.sum = function () {
			for (var i = 0, l = this.length, sum = 0; i < l; sum += this[i++]);
			return sum;
		};

	if (!Array.prototype.max)
		Array.prototype.max = function () {
			if (this.length == 0)
				return null;

			var max = this[0];
			if (this.length == 1)
				return max;

			for (var i = 1, l = this.length; i < l; i++)
				if (this[i] > max)
					max = this[i];

			return max;
		};

	if (!Array.prototype.min)
		Array.prototype.min = function () {
			if (this.length == 0)
				return null;

			var min = this[0];
			if (this.length == 1)
				return min;

			for (var i = 1, l = this.length; i < l; i++)
				if (this[i] < min)
					min = this[i];

			return min;
		};

	// Global
	$.extend({
		sum: function (elems, callback, arg) {
			return this.map(elems, callback, arg).sum();
		},
		max: function (elems, callback, arg) {
			return this.map(elems, callback, arg).max();
		},
		min: function (elems, callback, arg) {
			return this.map(elems, callback, arg).min();
		}
	});

	// Element
	$.fn.sum = function (callback) {
		return $.sum(this, function (elem, i) {
			return callback.call(elem, i, elem);
		});
	};

	$.fn.max = function (callback) {
		return $.max(this, function (elem, i) {
			return callback.call(elem, i, elem);
		});
	};

	$.fn.min = function (callback) {
		return $.min(this, function (elem, i) {
			return callback.call(elem, i, elem);
		});
	};
})(jQuery);