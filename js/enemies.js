function move_enemies()
{
	for (var y = 0; y < MAP_HEIGHT; y += 1) {
		for (var x = 0; x < MAP_WIDTH; x += 1) {
			var cell = get_cell(x, y);
			if (cell.enemies > 0) {
				move_enemy(x, y);
			}
		}
	}
	consolidate_enemies();
}

function move_enemy(x, y)
{
	var player = get_player();
	var new_location = {x: x, y: y};
	if (player.x < x) {
		new_location.x -= 1;
	} else if (player.x > x) {
		new_location.x += 1;
	}
	if (player.y < y) {
		new_location.y -= 1;
	} else if (player.y > y) {
		new_location.y += 1;
	}
	var new_cell = get_cell(new_location.x, new_location.y);
	new_cell.holding_bay += 1;
}

function consolidate_enemies()
{
	for (var y = 0; y < MAP_HEIGHT; y += 1) {
		for (var x = 0; x < MAP_WIDTH; x += 1) {
			var cell = get_cell(x, y);
			cell.enemies = cell.holding_bay;
			cell.holding_bay = 0;
		}
	}
}
