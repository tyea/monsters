var player = null;

function new_player()
{
	window.player = {x: PLAYER_STARTING_X, y: PLAYER_STARTING_Y};
}

function get_player()
{
	return window.player;
}

function move_player(dir)
{
	var player = get_player();
	var new_location = calculate_move(player.x, player.y, dir);
	var x_illegal = new_location.x > (MAP_WIDTH - 1) || new_location.x < 0;
	var y_illegal = new_location.y > (MAP_HEIGHT - 1) || new_location.y < 0;
	if (x_illegal || y_illegal) {
		return false;
	}
	var cell = get_cell(new_location.x, new_location.y);
	if (cell.is_obst || cell.enemies > 0) {
		return false;
	}
	player.x = new_location.x;
	player.y = new_location.y;
	return true;
}

function calculate_move(x, y, dir)
{
	switch (dir) {
		case "NW":
			return {x: x - 1, y: y - 1};
		case "N":
			return {x: x, y: y - 1};
		case "NE":
			return {x: x + 1, y: y - 1};
		case "W":
			return {x: x - 1, y: y};
		case "TELEPORT":
			return teleport_player();
		case "E":
			return {x: x + 1, y: y};
		case "SW":
			return {x: x - 1, y: y + 1};
		case "S":
			return {x: x, y: y + 1};
		case "SE":
			return {x: x + 1, y: y + 1};
		default:
			throw "EXCEPTION";
	}
}

function teleport_player()
{
	var player = get_player();
	while (true) {
		var rand_x = rand(0, (MAP_WIDTH - 1));
		var rand_y = rand(0, (MAP_HEIGHT - 1));
		var cell = get_cell(rand_x, rand_y);
		var contains_enemies = cell.enemies > 0;
		var is_obstacle = cell.is_obst;
		var already_here = rand_x == player.x && rand_y == player.y;
		if (!contains_enemies && !is_obstacle && !already_here) {
			break;
		}
	}
	return {x: rand_x, y: rand_y};
}
