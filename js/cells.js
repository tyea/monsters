function new_cell()
{
	return {
		is_obst: false,
		enemies: 0,
		holding_bay: 0
	};
}

function get_cell(x, y)
{
	if (x < 0 || x > (MAP_WIDTH - 1)) {
		throw "EXCEPTION";
	}
	if (y < 0 || y > (MAP_HEIGHT - 1)) {
		throw "EXCEPTION";
	}
	var map = get_map();
	return map[y][x];
}
