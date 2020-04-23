var map = null;

function new_map()
{
	var player = get_player();
	var enemies = 0;
	var map = [];
	for (var y = 0; y < MAP_HEIGHT; y += 1) {
		map[y] = [];
		for (var x = 0; x < MAP_WIDTH; x += 1) {
			var cell = new_cell();
			if (x != player.x && y != player.y) {
				if (rand(0, MAP_FILL_RATE) == 0) {
					enemies += 1;
					cell.enemies += 1;
				}
			}
			map[y][x] = cell;
		}
	}
	window.map = map;
	if (enemies == 0) {
		new_map();
	}
}

function get_map()
{
	return window.map;
}

function calculate_collisions()
{
	var deaths = false;
	var player = get_player();
	for (var y = 0; y < MAP_HEIGHT; y += 1) {
		for (var x = 0; x < MAP_WIDTH; x += 1) {
			var cell = get_cell(x, y);	
			var is_player = x == player.x && y == player.y;
			if (!is_player) {
				if (cell.is_obst && cell.enemies > 0) {
					deaths = true;
					cell.enemies = 0;
				} else if (cell.enemies > 1) {
					deaths = true;
					cell.enemies = 0;
					cell.is_obst = true;
				}
			}
		}
	}
	return deaths;
}

function calculate_end()
{
	var player = get_player();
	var player_cell = get_cell(player.x, player.y);
	var enemies = 0;
	for (var y = 0; y < MAP_HEIGHT; y += 1) {
		for (var x = 0; x < MAP_WIDTH; x += 1) {
			var cell = get_cell(x, y);
			enemies += cell.enemies;
		}
	}
	if (player_cell.enemies > 0) {
		return "LOSE";
	} else if (enemies == 0) {
		return "WIN";
	} else {
		return "CONTINUE";
	}
}
