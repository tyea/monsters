function listen()
{
	document.addEventListener("keyup", function(event) {
		if (!is_locked()) {
			process_turn(event.keyCode);
		}
	});
}

function process_turn(key_code)
{
	lock();
	var dir = translate_key_code(key_code);
	if (dir) {
		var valid = move_player(dir);
		if (valid) {
			setTimeout(function() {
				animate_player(dir);
			}, 250);
		} else {
			unlock();
		}
	} else {
		unlock();
	}
}

function translate_key_code(key_code)
{
	switch(key_code) {
		case 81: // Q
			return "NW";
		case 87: // W
			return "N";
		case 69: // E
			return "NE";
		case 65: // A
			return "W";
		case 83: // S
			return "TELEPORT";
		case 68: // D
			return "E";
		case 90: // Z
			return "SW";
		case 88: // X
			return "S";
		case 67: // C
			return "SE";
		default:
			return null;
	}
}
