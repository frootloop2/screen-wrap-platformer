window.Keyboard = (function() {
	var _pressed = {};
	window.addEventListener("keydown", function(ev) {
		_pressed[ev.keyCode] = true;
	});
	window.addEventListener("keyup", function(ev) {
		delete _pressed[ev.keyCode];
	});
	window.addEventListener("blur", function(ev) {
		_pressed = {};
	});
	return {
		Keys: {
			SPACE: 32,
			
			LEFT:  37,
			UP:	38,
			RIGHT: 39,
			DOWN:  40,
			
			A: 65,
			
			W: 87,
			X: 88,
			Z: 90,
			C: 67
		},
		isKeyPressed: function(keyCode) {
			return _pressed[keyCode] !== undefined;
		}
	};
}());